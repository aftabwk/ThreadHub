package com.af.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.af.exception.ProductException;
import com.af.model.Product;
import com.af.model.Rating;
import com.af.model.User;
import com.af.repository.RatingRepository;
import com.af.requests.RatingRequest;

@Service
public class RatingServiceImpl implements RatingService {
	@Autowired
	private RatingRepository ratingRepo;
	@Autowired
	private ProductService productService;

	@Override
	public Rating createRating(RatingRequest req, User user) throws ProductException {
		Product product = productService.findProductById(req.getProductId());
		Rating rating = new Rating();
		rating.setProduct(product);
		rating.setUser(user);
		rating.setRating(req.getRating());
		rating.setCreatedAt(LocalDateTime.now());
		return ratingRepo.save(rating);
	}

	@Override
	public List<Rating> getProductRatings(Long productId) {
		return ratingRepo.getAllProductsRating(productId);
	}

}
