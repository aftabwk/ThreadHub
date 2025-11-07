package com.af.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.af.exception.CartItemException;
import com.af.exception.UserException;
import com.af.model.Cart;
import com.af.model.CartItem;
import com.af.model.Product;
import com.af.model.User;
import com.af.repository.CartItemRepository;

@Service
public class CartItemServiceImpl implements CartItemService {
	@Autowired
	private CartItemRepository cartItemRepo;
	@Autowired
	private UserService userService;

	@Override
	public CartItem createCartItem(CartItem cart) {
		cart.setQuantity(1);
		cart.setPrice(cart.getProduct().getPrice() * cart.getQuantity());
		cart.setDiscountedPrice(cart.getProduct().getDiscountedPrice() * cart.getQuantity());
		return cartItemRepo.save(cart);
	}

	@Override
	public CartItem updateCartItem(Long userId, Long id, CartItem cart) throws CartItemException, UserException {
		CartItem item = findCartItemById(id);
		User user = userService.findUserById(userId);
		if (user.getUserId().equals(userId)) {
			item.setQuantity(cart.getQuantity());
			item.setPrice(item.getQuantity() * item.getProduct().getPrice());
			item.setDiscountedPrice(cart.getProduct().getDiscountedPrice() * item.getQuantity());
		}
		return cartItemRepo.save(item);
	}

	@Override
	public CartItem isCartItemExist(Cart cart, Product product, String size, Long userId) {
		return cartItemRepo.isCartItemExist(cart, product, size, userId);
	}

	@Override
	public void removeCartItem(Long userId, Long cartItemId) throws CartItemException,UserException {
		CartItem cartItem = findCartItemById(cartItemId);
		User user = userService.findUserById(cartItem.getUserId());
		User reqUser = userService.findUserById(userId);
		if(user.getUserId().equals(reqUser.getUserId())) {
			cartItemRepo.deleteById(cartItemId);
		}
		else {
			throw new UserException("You Can't Remove Other User Item");
		}

	}

	@Override
	public CartItem findCartItemById(Long cartItemId) throws CartItemException {
		Optional<CartItem> opt = cartItemRepo.findById(cartItemId);
		if(opt.isPresent()) {
			return opt.get();
		}
		throw new CartItemException("Cart Item Not Found With Id : "+cartItemId);
	}

}
