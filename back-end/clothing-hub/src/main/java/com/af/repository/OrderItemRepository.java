package com.af.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.af.model.OrderItems;

public interface OrderItemRepository extends JpaRepository<OrderItems, Long>{

}
