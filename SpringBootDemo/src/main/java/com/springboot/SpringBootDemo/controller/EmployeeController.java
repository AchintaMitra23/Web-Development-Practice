package com.springboot.SpringBootDemo.controller;

import com.springboot.SpringBootDemo.entity.Employee;
import com.springboot.SpringBootDemo.service.IEmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EmployeeController {

    @Autowired
    private IEmployeeService employeeService;

    @RequestMapping(value = "/getEmployeeInstance", method = RequestMethod.GET)
    public String getEmployeeInstance() {
        return new String("Employee Instance");
    }

    @GetMapping("/getAllEmployees")
    public List<Employee> getAllEmployees() {
        List<Employee> employeeList = employeeService.getAllEmployees();
        return employeeList;
    }

    @PostMapping("/saveEmployee")
    public String saveEmployee(@RequestBody Employee employee) {
        return employeeService.saveEmployee(employee);
    }
}
