package com.springboot.SpringBootDemo.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "employee")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "emp_id", nullable = false)
    private Long empId;

    @Column(name = "emp_name")
    private String empName;

    @Column(name = "emp_email")
    private String empEmail;

    @Column(name = "emp_no")
    private long empPhone;

    @Column(name = "emp_sal")
    private double empSalary;
}
