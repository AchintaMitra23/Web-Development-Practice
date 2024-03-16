package com.springboot.SpringBootDemo.service;

import com.springboot.SpringBootDemo.entity.Employee;
import com.springboot.SpringBootDemo.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService implements IEmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public List<Employee> getAllEmployees() {
        List<Employee> employeeList = employeeRepository.findAll();
        return employeeList.isEmpty() ? null : employeeList;
    }

    @Override
    public Employee getEmployeeById(long id) {
        Optional<Employee> employee = employeeRepository.findById(id);
        return employee.get() == null ? null : employee.get();
    }

    @Override
    public String saveEmployee(Employee employee) {
        Employee employee1 = employeeRepository.save(employee);
        return employee1 == null ? "Employee not saved" : "Employee saved";
    }

    @Override
    public boolean deleteEmployeeById(long id) {
        employeeRepository.deleteById(id);
        Optional<Employee> employee = employeeRepository.findById(id);
        return employee.get() == null ? true : false;
    }
}
