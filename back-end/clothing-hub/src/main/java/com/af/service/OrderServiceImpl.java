package com.af.service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.af.exception.OrderException;
import com.af.model.Address;
import com.af.model.Cart;
import com.af.model.CartItem;
import com.af.model.Order;
import com.af.model.OrderItems;
import com.af.model.User;
import com.af.repository.AddressRepository;
import com.af.repository.OrderItemRepository;
import com.af.repository.OrderRepository;
import com.af.repository.UserRepository;

@Service
public class OrderServiceImpl implements OrderService {

	@Autowired
	private OrderRepository orderRepo;
	@Autowired
	private CartService cartService;

	@Autowired
	private AddressRepository addressRepo;

	@Autowired
	private UserRepository userRepo;

	@Autowired
	private OrderItemRepository orderItemRepo;

	@Override
	public Order createOrder(User user, Address shippingAddress) {
		shippingAddress.setUser(user);
		Address address = addressRepo.save(shippingAddress);
		user.getAddress().add(address);
		userRepo.save(user);

		Cart cart = cartService.findUserCart(user.getUserId());
		List<OrderItems> orderItems = new ArrayList<>();

		for (CartItem item : cart.getCartItems()) {
			OrderItems orderItem = new OrderItems();

			orderItem.setPrice(item.getPrice());
			orderItem.setProduct(item.getProduct());
			orderItem.setQuantity(item.getQuantity());
			orderItem.setSize(item.getSize());
			orderItem.setUserID(item.getUserId());
			orderItem.setDiscountedPrice(item.getDiscountedPrice());

			OrderItems createdOrderItem = orderItemRepo.save(orderItem);
			orderItems.add(createdOrderItem);
		}
		Order createdOrder = new Order();
		createdOrder.setUser(user);
		createdOrder.setOrderItems(orderItems);
		createdOrder.setTotalPrice(cart.getTotalPrice());
		createdOrder.setTotalDiscountedPrice(cart.getTotalDiscountedPrice());
		createdOrder.setDiscount(cart.getDiscounte());
		createdOrder.setTotalItems(cart.getTotalItem());

		createdOrder.setShippingAddress(address);
		createdOrder.setOrderDate(LocalDateTime.now());
		createdOrder.setOrderStatus("PENDING");
		createdOrder.getPaymentDetails().setStatus("PENDING");
		createdOrder.setCreatedAt(LocalDateTime.now());

		Order savedOrder = orderRepo.save(createdOrder);

		for (OrderItems item : orderItems) {
			item.setOrder(savedOrder);
			orderItemRepo.save(item);
		}

		return savedOrder;
	}

	@Override
	public Order findOrderById(Long orderId) throws OrderException {
		Optional<Order> opt = orderRepo.findById(orderId);

		if (opt.isPresent()) {
			return opt.get();
		}
		throw new OrderException("Order not exist with id " + orderId);
	}

	@Override
	public List<Order> usersOrderHistory(Long userId) {
		List<Order> orders = orderRepo.getUsersOrders(userId);
		return orders;
	}

	@Override
	public Order placedOrder(Long orderId) throws OrderException {
		Order order = findOrderById(orderId);
		order.setOrderStatus("PLACED");
		order.getPaymentDetails().setStatus("COMPLETED");
		return order;
	}

	@Override
	public Order confirmedOrder(Long orderId) throws OrderException {
		Order order = findOrderById(orderId);
		order.setOrderStatus("CONFIRMED");

		return orderRepo.save(order);

	}

	@Override
	public Order shippedOrder(Long orderId) throws OrderException {
		Order order = findOrderById(orderId);
		order.setOrderStatus("SHIPPED");
		return orderRepo.save(order);
	}

	@Override
	public Order deliveredOrder(Long orderId) throws OrderException {
		Order order = findOrderById(orderId);
		order.setOrderStatus("DELIVERED");
		return orderRepo.save(order);
	}

	@Override
	public Order canceledOrder(Long orderId) throws OrderException {
		Order order = findOrderById(orderId);
		order.setOrderStatus("CANCELLED");
		return orderRepo.save(order);
	}

	@Override
	public List<Order> getAllOrders() {
		return orderRepo.findAll();
	}

	@Override
	public void deleteOrder(Long orderId) throws OrderException {
		Order order = findOrderById(orderId);
		System.out.println("Order id :"+order);
		orderRepo.deleteById(orderId);

	}

}
