package com.af.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.af.exception.ProductException;
import com.af.model.Product;
import com.af.model.Review;
import com.af.model.User;
import com.af.repository.ReviewRepository;
import com.af.requests.ReviewRequest;

@Service
public class ReviewServiceImpl implements ReviewService{
	
	@Autowired
	private ReviewRepository reviewRepo;
	@Autowired
	private ProductService productService;
	
	@Override
	public Review createReview(ReviewRequest req, User user) throws ProductException {
		Product product = productService.findProductById(req.getProductId());
		Review review = new Review();
		review.setUser(user);
		review.setProduct(product);
		review.setReview(req.getReview());
		review.setCreatedAt(LocalDateTime.now());
		return reviewRepo.save(review);
	}

	@Override
	public List<Review> getProductReviews(Long productId) {
		return reviewRepo.getAllProductsReview(productId);
	}

}
