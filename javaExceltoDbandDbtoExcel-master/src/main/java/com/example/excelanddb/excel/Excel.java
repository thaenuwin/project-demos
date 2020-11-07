package com.example.excelanddb.excel;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.xssf.usermodel.XSSFRow;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.web.multipart.MultipartFile;

import com.example.excelanddb.model.Department;
import com.example.excelanddb.model.DepartmentOne;

public class Excel {

	//for write
	public static void downloadExcel(List<Department> dep) throws IOException {
		String fileName = "C:/Users/MayThuZaw/excelFile/dep.xlsx";

		XSSFWorkbook workbook = new XSSFWorkbook();
		XSSFSheet sheet = workbook.createSheet("Department");
		
		Row row = sheet.createRow(0);
		
		Cell cell = row.createCell(0);
        cell.setCellValue("Department Name");
        
        cell = row.createCell(1);
        cell.setCellValue("Population");
        
        for(int i = 0; i < dep.size(); i++) {
        	Row dataRow = sheet.createRow(i + 1);
        	dataRow.createCell(0).setCellValue(dep.get(i).getDepName());
        	dataRow.createCell(1).setCellValue(dep.get(i).getPopulation());
        }
        
        FileOutputStream outputStream;
		try {
			outputStream = new FileOutputStream(fileName);
			  workbook.write(outputStream);
		        workbook.close();
		} catch (FileNotFoundException e) {
			System.out.println("error"+e);
		}

	}
	
	//for read
	public static List<DepartmentOne> uploadExcel(MultipartFile file) throws IOException {
		List<DepartmentOne> departmentList = new ArrayList<DepartmentOne>();
	    XSSFWorkbook workbook = new XSSFWorkbook(file.getInputStream());
	    XSSFSheet worksheet = workbook.getSheetAt(0);

	    for(int i=1;i<worksheet.getPhysicalNumberOfRows();i++) {
	    	DepartmentOne department = new DepartmentOne();

	        XSSFRow row = worksheet.getRow(i);

	        department.setDepName(row.getCell(0).getStringCellValue());
	        department.setPopulation(row.getCell(1).getStringCellValue());
	        departmentList.add(department);   
	    }
		return departmentList;
	}

}
