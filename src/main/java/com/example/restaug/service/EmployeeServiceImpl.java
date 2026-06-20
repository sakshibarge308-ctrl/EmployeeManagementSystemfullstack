package com.example.restaug.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import com.example.restaug.model.Employee;
import com.example.restaug.repository.EmployeeRepository;
@Service
public class EmployeeServiceImpl implements EmployeeService{
    @Autowired
    @Qualifier("empRepo")
    private EmployeeRepository empRepo;
	@Override
	public Employee insert(Employee emp) {
		
		return empRepo.save(emp);
	}

	@Override
	public Employee search(int id) {
		Employee e=empRepo.findById(id).orElse(null);
		return e;
	}

	@Override
	public Employee update(Employee emp) {
		Employee e=empRepo.findById(emp.getId()).orElse(null);
		if(e!=null) {
			e.setName(emp.getName());
			e.setDept(emp.getDept());
			e.setSalary(emp.getSalary());
			return empRepo.save(e);
		}
		return null;
	}

	@Override
	public List<Employee> getAll() {
		
		return empRepo.findAll();
	}

	@Override
	public void delete(int id) {
		
		empRepo.deleteById(id);
	}

}
