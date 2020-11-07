package com.example.excelanddb.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.excelanddb.model.Department;

@Repository
public interface DepartmentRepo extends JpaRepository<Department,Long> {

}
