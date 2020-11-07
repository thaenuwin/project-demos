package com.example.excelanddb.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Entity
@Table(name="departmentone")
@Data
public class DepartmentOne {

	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	Long id;
	
	String depName;
	
	String population;

}
