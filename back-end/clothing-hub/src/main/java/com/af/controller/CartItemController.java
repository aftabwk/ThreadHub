package com.af.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.af.exception.CartItemException;
import com.af.exception.UserException;
import com.af.model.CartItem;
import com.af.model.User;
import com.af.response.ApiResponse;
import com.af.service.CartItemService;
import com.af.service.UserService;

@RestController
@RequestMapping("/api/cart_item")
public class CartItemController {
	@Autowired
	private UserService userService;
	@Autowired
	private CartItemService cartItemService;

	@DeleteMapping("/{cartItemId}")
	public ResponseEntity<ApiResponse> deleteCartItem(@PathVariable Long cartItemId,
			@RequestHeader("Authorization") String jwt) throws UserException, CartItemException {

		User user = userService.findUserByJwt(jwt);
		cartItemService.removeCartItem(user.getUserId(), cartItemId);

		ApiResponse res = new ApiResponse();
		res.setMessage("Item removed from cart successfully");
		res.setStatus(true);

		return new ResponseEntity<>(res, HttpStatus.OK);
	}

	@PutMapping("/{cartItemId}")
	public ResponseEntity<CartItem> updateCartItem(@RequestBody CartItem cartItem, @PathVariable Long cartItemId,
			@RequestHeader("Authorization") String jwt) throws UserException, CartItemException {

		User user = userService.findUserByJwt(jwt);

		CartItem updatedCartItem = cartItemService.updateCartItem(user.getUserId(), cartItemId, cartItem);

		return new ResponseEntity<>(updatedCartItem, HttpStatus.OK);
	}

}
