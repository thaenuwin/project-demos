package com.example.excelanddb.service;

import java.io.File;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.excelanddb.model.Department;
import com.example.excelanddb.repo.DepartmentRepo;

@Service
public class DepartmentService {
	
	@Autowired
	DepartmentRepo depRepo;
	
	public void saveDep(Department dep) {
		depRepo.save(dep);
	}
	
	

}
