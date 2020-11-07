package com.example.excelanddb.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.excelanddb.excel.Excel;
import com.example.excelanddb.model.Department;
import com.example.excelanddb.model.DepartmentOne;
import com.example.excelanddb.repo.DepOneRepo;
import com.example.excelanddb.repo.DepartmentRepo;
import com.example.excelanddb.service.DepartmentService;

@RestController
@RequestMapping("/api/v1/dep")
public class DepartmentController {
	
	@Autowired
	DepartmentService depService ;
	
	@Autowired
	DepartmentRepo depRepo;
	
	@Autowired
	DepOneRepo depOneRepo;

	@PostMapping("/save")
	public String saveDep(@RequestBody Department dep) {
		depService.saveDep(dep);
		return "success";
	}
	
	@GetMapping("/exceldownload")
	public void excelDownload() throws IOException {
		List<Department> depList = depRepo.findAll();
		Excel.downloadExcel(depList);
	}
	
	@PostMapping("/excelupload")
	public void excelUpload(@RequestParam MultipartFile file) throws IOException {
		List<DepartmentOne> depList =Excel.uploadExcel(file);
		depOneRepo.saveAll(depList);
		
	}
}
