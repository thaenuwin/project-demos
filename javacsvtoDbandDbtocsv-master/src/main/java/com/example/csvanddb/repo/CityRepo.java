package com.example.csvanddb.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.csvanddb.model.City;

@Repository
public interface CityRepo extends JpaRepository<City,Long>{

}
