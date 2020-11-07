package com.example.csv;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.List;

import com.example.csvanddb.model.City;
import com.opencsv.CSVWriter;

public class WriteCsv {

	public static void downloadCsv(List<City> cities) {

		File file = new File("C:/Users/MayThuZaw/csvfile/result.csv");
		try {
			FileWriter output = new FileWriter(file);
			 CSVWriter writer = new CSVWriter(output);
//                    "|", CSVWriter.NO_QUOTE_CHARACTER, 
//                     CSVWriter.NO_ESCAPE_CHARACTER, 
//                     CSVWriter.DEFAULT_LINE_END); 
			String[] header = { "CityName", "Population", "Year" };
			writer.writeNext(header);
			String data[] = new String[3];
			for (City city : cities) {
				data[0] = city.getCityName();
				data[1] = city.getPopulation();
				data[2] = city.getYear().toString();
				writer.writeNext(data);
			}
			writer.close();
		} catch (IOException e) {
			System.out.println("error" + e);
		}
	}

}
