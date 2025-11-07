package com.af.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.af.exception.ProductException;
import com.af.model.Cart;
import com.af.model.CartItem;
import com.af.model.Product;
import com.af.model.User;
import com.af.repository.CartRepository;
import com.af.requests.AddItemRequest;

@Service
public class CartServiceImpl implements CartService {

	@Autowired
	private CartRepository cartRepo;
	@Autowired
	private CartItemService cartItemService;
	@Autowired
	private ProductService productService;

	@Override
	public Cart crateCart(User user) {
		Cart cart = new Cart();
		cart.setUser(user);
		return cartRepo.save(cart);
	}

	@Override
	public String addCartItems(Long userId, AddItemRequest req) throws ProductException {
		Cart cart = cartRepo.findByUserId(userId);
		Product product = productService.findProductById(req.getProductId());

		CartItem isPresent = cartItemService.isCartItemExist(cart, product, req.getSize(), userId);
		if (isPresent == null) {
			CartItem cartItem = new CartItem();
			cartItem.setProduct(product);
			cartItem.setCart(cart);
			cartItem.setQuantity(req.getQuantity());
			cartItem.setUserId(userId);
			cartItem.setPrice(req.getQuantity() * product.getDiscountedPrice());
			cartItem.setSize(req.getSize());

			CartItem createdCartItem = cartItemService.createCartItem(cartItem);
			cart.getCartItems().add(createdCartItem);
		}
		return "Item Add To Cart";
	}

	@Override
	public Cart findUserCart(Long userId) {
		Cart cart = cartRepo.findByUserId(userId);
		
		int totalPrice = 0;
		int totalDiscountedPrice = 0;
		int totalItem = 0;
		
		for(CartItem cartItem : cart.getCartItems()) {
			totalPrice += cartItem.getPrice();
			totalDiscountedPrice += cartItem.getDiscountedPrice();
			totalItem += cartItem.getQuantity();
		}
		cart.setTotalPrice(totalPrice);
		cart.setTotalDiscountedPrice(totalDiscountedPrice);
		cart.setTotalItem(totalItem);
		cart.setDiscounte(totalPrice-totalDiscountedPrice);
		
		
		return cartRepo.save(cart);
	}

}
