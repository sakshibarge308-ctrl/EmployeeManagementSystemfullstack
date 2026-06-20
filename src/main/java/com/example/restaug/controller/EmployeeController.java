package com.example.restaug.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.restaug.model.Employee;
import com.example.restaug.service.EmployeeService;

@RestController
@CrossOrigin(origins="http://localhost:4200")
public class EmployeeController {
	@Autowired
	private EmployeeService es;
	
	@GetMapping("/employees")
	public List <Employee> getAll()
	{
		return  es.getAll();
	}
	@PostMapping("/employees")
	public Employee insert(@RequestBody Employee emp)
	{
		return  es.insert(emp);
		
	}
	
	@GetMapping("/employees/{id}")
	public Employee search(@PathVariable("id")int id)
	{
		Employee em=es.search(id);
		return em;
	}
	@PutMapping("/employees/{id}")
	public Employee update(@PathVariable("id")int id,@RequestBody Employee em)
	{
		em.setId(id);
		Employee emp=es.update(em);
		return emp;
	}
	
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Void> delete(@PathVariable("id")int id) 
	{
		es.delete(id);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
}