package com.example.csvanddb.controller;

import java.io.IOException;
import java.io.InputStream;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.example.csv.ReadCsv;
import com.example.csv.WriteCsv;
import com.example.csvanddb.model.City;
import com.example.csvanddb.model.CityTwo;
import com.example.csvanddb.repo.CityTwoRepo;
import com.example.csvanddb.service.CityService;


@RestController
@RequestMapping("/api/v1")
public class CityController {

	@Autowired
	CityService cityService;
	
	@Autowired
	CityTwoRepo cityTwoRepo;
	
	@PostMapping("/save")
	public String saveCityData(@RequestBody City city) {
		cityService.saveCityData(city);
		return "success";
	}
	
	@GetMapping("/getcsv")
	public void getAllCity() throws IOException{
		
		List<City> city=cityService.getAllCity();
		WriteCsv.downloadCsv(city) ;
	}
	
	@PostMapping(value="/savecsv",consumes = "multipart/form-data")
	public void saveCsvDatatoDb(@RequestParam("file") MultipartFile file) throws IOException {
	  List<CityTwo> data=  ReadCsv.readCsvData(file);
	  cityTwoRepo.saveAll(data);
	}
	
}
