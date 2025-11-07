package com.af.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.af.model.OrderItems;
import com.af.repository.OrderItemRepository;
@Service
public class OrderItemServiceImpl implements OrderItemService{
	@Autowired
	private OrderItemRepository orderItemRepo;

	@Override
	public OrderItems createOrderItem(OrderItems orderItems) {
		return orderItemRepo.save(orderItems);
	}

}
