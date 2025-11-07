package com.af.service;

import java.util.List;

import com.af.exception.ProductException;
import com.af.model.Rating;
import com.af.model.User;
import com.af.requests.RatingRequest;

public interface RatingService {
	public Rating createRating(RatingRequest req,User user) throws ProductException;
	public List<Rating> getProductRatings(Long productId);
}
