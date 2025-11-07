package com.af.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.af.config.JWTProvider;
import com.af.exception.UserException;
import com.af.model.User;
import com.af.repository.UserRepository;

@Service
public class UserServiceImpl implements UserService{
	@Autowired
	private UserRepository userRepo;
	@Autowired
	private JWTProvider jwtProvider;
	
	@Override
	public User findUserById(Long userId) throws UserException {
		Optional<User> user = userRepo.findById(userId);
		if(user.isPresent()) {
			return user.get();
		}
		throw new UserException("User Not Found with id : "+userId);
	}

	@Override
	public User findUserByJwt(String jwt) throws UserException {
		String email = jwtProvider.getEmailFromToken(jwt);
		User user = userRepo.findByEmail(email);
		if(user==null) {
			throw new UserException("User Not Found with email : "+email);
		}
		return user;
	}

}
