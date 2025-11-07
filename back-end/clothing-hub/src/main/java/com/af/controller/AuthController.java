package com.af.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.af.config.JWTProvider;
import com.af.exception.UserException;
import com.af.model.User;
import com.af.repository.UserRepository;
import com.af.requests.LoginRequest;
import com.af.response.AuthResponse;
import com.af.service.CartService;
import com.af.service.CustomeUserServiceImplementation;

@RestController
@RequestMapping("/auth")
public class AuthController {
	@Autowired
	private UserRepository repo;
	@Autowired
	private JWTProvider jwtProvider;
	@Autowired
	private PasswordEncoder encoder;
	@Autowired
	private CustomeUserServiceImplementation userServiceImplementation;
	@Autowired
	private CartService cartService;

	@PostMapping("/signup")
	public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) throws UserException {
		String email = user.getEmail();
		String password = user.getPassword();
		String firstName = user.getFirstName();
		String lastName = user.getLastName();

		User isEmailExist = repo.findByEmail(email);
		if (isEmailExist != null) {
			throw new UserException("Email is already used with another account");
		}

		User createdUser = new User();
		createdUser.setEmail(email);
		createdUser.setPassword(encoder.encode(password));
		createdUser.setFirstName(firstName);
		createdUser.setLastName(lastName);

		User savedUser = repo.save(createdUser);
		cartService.crateCart(savedUser);

		Authentication authentication = new UsernamePasswordAuthenticationToken(savedUser.getEmail(),
				savedUser.getPassword());

		SecurityContextHolder.getContext().setAuthentication(authentication);

		String token = jwtProvider.generateToken(authentication);
		AuthResponse authResp = new AuthResponse();
		authResp.setJwt(token);
		authResp.setMessage("Signup Success...");
		return new ResponseEntity<AuthResponse>(authResp, HttpStatus.CREATED);
	}

	@PostMapping("/signin")
	public ResponseEntity<AuthResponse> loginUserHandler(@RequestBody LoginRequest loginRequest) throws UserException {
		String userName = loginRequest.getEmail();
		String password = loginRequest.getPassword();
		Authentication authentication = authenticate(userName, password);
		SecurityContextHolder.getContext().setAuthentication(authentication);

		String token = jwtProvider.generateToken(authentication);
		AuthResponse authResp = new AuthResponse();
		authResp.setJwt(token);
		authResp.setMessage("Signin Success...");
		return new ResponseEntity<AuthResponse>(authResp, HttpStatus.CREATED);
	}

	private Authentication authenticate(String userName, String password) {
		UserDetails userDetails = userServiceImplementation.loadUserByUsername(userName);
		if (userDetails == null) {
			throw new BadCredentialsException("Invalid Username...");
		}
		if (!encoder.matches(password, userDetails.getPassword())) {
			throw new BadCredentialsException("Invalid Password...");
		}
		return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
	}
}
