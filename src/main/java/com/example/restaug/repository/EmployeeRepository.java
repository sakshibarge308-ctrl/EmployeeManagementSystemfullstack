package com.example.restaug.repository;

import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.restaug.model.Employee;


@Repository
@Qualifier("empRepo")
public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
}
