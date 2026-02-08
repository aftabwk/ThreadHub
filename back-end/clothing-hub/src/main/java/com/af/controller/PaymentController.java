package com.af.controller;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.af.exception.OrderException;
import com.af.model.Order;
import com.af.repository.OrderRepository;
import com.af.response.ApiResponse;
import com.af.response.PaymentLinkResponse;
import com.af.service.OrderService;
import com.razorpay.Payment;
import com.razorpay.PaymentLink;
import com.razorpay.RazorpayClient;
import com.razorpay.RazorpayException;

@RestController
@RequestMapping("/api")
public class PaymentController {
	@Value("${razorpay.api.key}")
	String apiKey;

	@Value("${razorpay.api.secret}")
	String apiSecret;

	@Autowired
	private OrderService orderService;

	@Autowired
	private OrderRepository orderRepo;

	@PostMapping("/payments/{orderId}")
	public ResponseEntity<PaymentLinkResponse> createPaymentLink(@PathVariable Long orderId,
			@RequestHeader("Authorization") String jwt) throws OrderException, RazorpayException {
		Order order = orderService.findOrderById(orderId);
		try {
			RazorpayClient razorPay = new RazorpayClient(apiKey, apiSecret);
			JSONObject paymentLink = new JSONObject();
			paymentLink.put("amount", order.getTotalDiscountedPrice() * 100);
			paymentLink.put("currency", "INR");

			JSONObject customer = new JSONObject();
			customer.put("name", order.getUser().getFirstName());
			customer.put("email", order.getUser().getEmail());
			paymentLink.put("customer", customer);

			JSONObject notify = new JSONObject();
			notify.put("sms", true);
			notify.put("email", true);
			paymentLink.put("notify", notify);

			paymentLink.put("callback_url", "http://localhost:5173/payment/" + orderId);
			paymentLink.put("callback_method", "get");

			PaymentLink payment = razorPay.paymentLink.create(paymentLink);

			String paymentLinkId = payment.get("id");
			String paymentLinkUrl = payment.get("short_url");

			PaymentLinkResponse res = new PaymentLinkResponse();

			res.setPayment_link_id(paymentLinkId);
			res.setPayment_link_url(paymentLinkUrl);

			return new ResponseEntity<PaymentLinkResponse>(res, HttpStatus.CREATED);

		} catch (Exception e) {
			throw new RazorpayException(e.getMessage());
		}
	}

	@GetMapping("/payments")
	public ResponseEntity<ApiResponse> redirect(@RequestParam(name = "payment_id") String paymentId,
			@RequestParam(name = "order_id") Long orderId) throws OrderException, RazorpayException {
		Order order = orderService.findOrderById(orderId);
		RazorpayClient razorpay = new RazorpayClient(apiKey, apiSecret);
		try {
			Payment payment = razorpay.payments.fetch(paymentId);

			if (payment.get("status").equals("captured")) {
				order.getPaymentDetails().setPaymentId(paymentId);
				order.getPaymentDetails().setStatus("COMPLEATED");
				order.setOrderStatus("PLACED");
				orderRepo.save(order);
			}
			ApiResponse apiResp = new ApiResponse();
			apiResp.setMessage("your order get placed");
			apiResp.setStatus(true);

			return new ResponseEntity<ApiResponse>(apiResp, HttpStatus.ACCEPTED);

		} catch (Exception e) {
			throw new RazorpayException(e.getMessage());
		}
	}

}
