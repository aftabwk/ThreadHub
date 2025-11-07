package com.af.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.af.exception.ProductException;
import com.af.exception.UserException;
import com.af.model.Cart;
import com.af.model.User;
import com.af.requests.AddItemRequest;
import com.af.response.ApiResponse;
import com.af.service.CartService;
import com.af.service.UserService;

@RestController
@RequestMapping("/api/cart")
public class CartController {
	@Autowired
	private CartService cartService;

	@Autowired
	private UserService userService;

	@GetMapping("/")
	public ResponseEntity<Cart> findUserCart(@RequestHeader("Authorization") String jwt) throws UserException {

		User user = userService.findUserByJwt(jwt);
		Cart cart = cartService.findUserCart(user.getUserId());

		return new ResponseEntity<Cart>(cart, HttpStatus.OK);
	}

	@PutMapping("/add")
	public ResponseEntity<ApiResponse> addItemToCart(@RequestBody AddItemRequest req,
			@RequestHeader("Authorization") String jwt) throws UserException, ProductException {

		User user = userService.findUserByJwt(jwt);

		cartService.addCartItems(user.getUserId(), req);

		ApiResponse res = new ApiResponse();
		res.setMessage("item added to cart");
		res.setStatus(true);
		return new ResponseEntity<>(res, HttpStatus.OK);
	}

}
