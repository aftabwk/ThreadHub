package com.af.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.af.exception.ProductException;
import com.af.exception.UserException;
import com.af.model.Review;
import com.af.model.User;
import com.af.requests.ReviewRequest;
import com.af.service.ReviewService;
import com.af.service.UserService;

@RestController
@RequestMapping("/api/reviews")
public class ReviewController {
	
	@Autowired
	private ReviewService reviewService;
	
	@Autowired
	private UserService userService;
	
	@PostMapping("/create")
	public ResponseEntity<Review> createReviewReview(@RequestBody ReviewRequest req,
	        @RequestHeader("Authorization") String jwt) throws UserException, ProductException {

	    User user = userService.findUserByJwt(jwt);

	    Review review = reviewService.createReview(req, user);

	    return new ResponseEntity<>(review, HttpStatus.CREATED);
	}
	@GetMapping("/product/{productId}")
	public ResponseEntity<List<Review>> getProductsReview(@PathVariable Long productId)
	        throws UserException, ProductException {

	    List<Review> reviews = reviewService.getProductReviews(productId);
	    return new ResponseEntity<>(reviews, HttpStatus.ACCEPTED);
	}


}
