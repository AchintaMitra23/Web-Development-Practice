package com.springboot.SpringBootDemo.service;

import com.springboot.SpringBootDemo.entity.Employee;

import java.util.List;

public interface IEmployeeService {

    public List<Employee> getAllEmployees();
    public Employee getEmployeeById(long id);
    public String saveEmployee(Employee employee);
    public boolean deleteEmployeeById(long id);
}
