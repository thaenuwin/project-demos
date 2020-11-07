package com.example.csvanddb.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.csvanddb.model.City;
import com.example.csvanddb.repo.CityRepo;

@Service
public class CityService {

	@Autowired
	CityRepo cityRepo;
	
	public List<City> getAllCity(){
		return cityRepo.findAll();
	}
	
	public void saveCityData(City city) {
		 cityRepo.save(city);
	}
}
