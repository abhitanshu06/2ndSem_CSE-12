package com.example.employeeapi.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.employeeapi.model.Employee;
import com.example.employeeapi.repository.EmployeeRepository;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository repository;

    public Employee saveEmployee(Employee employee) {
        return repository.save(employee);
    }

    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    public Optional<Employee> getEmployeeById(int id) {
        return repository.findById(id);
    }

    public Employee updateEmployee(int id, Employee employee) {

        Employee emp = repository.findById(id).orElse(null);

        if(emp != null) {
            emp.setName(employee.getName());
            emp.setDepartment(employee.getDepartment());
            emp.setSalary(employee.getSalary());

            return repository.save(emp);
        }

        return null;
    }

    public void deleteEmployee(int id) {
        repository.deleteById(id);
    }
}