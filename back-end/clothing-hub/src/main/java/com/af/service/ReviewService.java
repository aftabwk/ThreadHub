package com.af.service;

import java.util.List;

import com.af.exception.ProductException;
import com.af.model.Review;
import com.af.model.User;
import com.af.requests.ReviewRequest;

public interface ReviewService {
	public Review createReview(ReviewRequest req,User user)throws ProductException;
	public List<Review> getProductReviews(Long productId);
}
