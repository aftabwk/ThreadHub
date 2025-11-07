package com.af.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.af.model.Address;

public interface AddressRepository extends JpaRepository<Address, Long>{

}
