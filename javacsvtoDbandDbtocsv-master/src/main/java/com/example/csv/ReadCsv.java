package com.example.csv;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.Reader;
import java.util.ArrayList;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.example.csvanddb.model.CityTwo;
import com.opencsv.bean.CsvToBean;
import com.opencsv.bean.CsvToBeanBuilder;

public class ReadCsv {


	
	public static List<CityTwo> readCsvData(MultipartFile file) {
		
		List<CityTwo> city= new ArrayList<CityTwo>();
		if (file.isEmpty()) {
			System.out.println("empty file");
		}

		else {

			try (Reader reader = new BufferedReader(new InputStreamReader(file.getInputStream()))) {

				// create csv bean reader
				@SuppressWarnings("unchecked")
				CsvToBean<CityTwo> csvToBean = new CsvToBeanBuilder(reader).withType(CityTwo.class)
						.withIgnoreLeadingWhiteSpace(true).build();

				// convert `CsvToBean` object to list of city
				 city = csvToBean.parse();
                  
				// TODO: save users in DB?

			} 
			catch (Exception e) {
				System.out.println("error" + e);
			}
		}
		return city;
	}
}
