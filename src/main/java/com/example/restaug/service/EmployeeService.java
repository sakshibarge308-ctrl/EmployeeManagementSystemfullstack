package com.example.restaug.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.restaug.model.Employee;
@Service
public interface EmployeeService {
Employee insert(Employee emp);
Employee search(int id);
Employee update(Employee emp);
List <Employee> getAll();
void delete(int id);
}
