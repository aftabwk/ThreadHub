package com.af.service;

import com.af.exception.ProductException;
import com.af.model.Cart;
import com.af.model.User;
import com.af.requests.AddItemRequest;

public interface CartService {
	public Cart crateCart(User user);
	public String addCartItems(Long userId,AddItemRequest req) throws ProductException;
	public Cart findUserCart(Long userId);
}
