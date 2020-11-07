package com.example.csvanddb.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.csvanddb.model.CityTwo;

@Repository
public interface CityTwoRepo extends JpaRepository<CityTwo,Long>{

}

