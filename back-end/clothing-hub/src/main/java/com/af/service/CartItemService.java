package com.af.service;

import com.af.exception.CartItemException;
import com.af.exception.UserException;
import com.af.model.Cart;
import com.af.model.CartItem;
import com.af.model.Product;

public interface CartItemService {
	public CartItem createCartItem(CartItem cart);
	public CartItem updateCartItem(Long userId,Long id,CartItem cart)throws CartItemException,UserException;
	public CartItem isCartItemExist(Cart cart,Product product,String size,Long userId);
	public void removeCartItem(Long userId,Long cartItemId) throws CartItemException, UserException;
	public CartItem findCartItemById(Long cartItemId)throws CartItemException;
}
