package com.af.service;

import java.util.List;

import org.springframework.data.domain.Page;

import com.af.exception.ProductException;
import com.af.model.Product;
import com.af.requests.CreateProductRequest;

public interface ProductService {
	public Product createProduct(CreateProductRequest req);

	public String deleteProduct(Long productId) throws ProductException;

	public Product updateProduct(Long productId, Product req) throws ProductException;
	
	public Product findProductById(Long productId) throws ProductException;
	public List<Product> findAllProducts();
	
	 public List<Product> findProductByCategory(String category);
	 
	 public Page<Product> getAllProduct(String category,List<String> color, List<String> size, Integer minPrice, Integer maxPrice, Integer minDiscount, String sort, String stock,Integer pageNumber,Integer pageSize);
}
