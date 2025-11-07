package com.af.service;

import com.af.exception.UserException;
import com.af.model.User;

public interface UserService {
	
	public User findUserById(Long userId) throws UserException;
	
	public User findUserByJwt(String jwt) throws UserException;
}