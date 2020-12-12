package com.tutorial.decision.event.consumer.model;

import java.io.Serializable;
import java.math.BigDecimal;

import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class LoanDetailDto implements Serializable{
	
	private static final long serialVersionUID = 3849696005775952249L;
	
	private byte[] file;
    private String lenderNumber;
    private String duRecommendation;
	private String propertyType;
	private BigDecimal dti;
	private BigDecimal ltv;
	private Integer fico;
	private BigDecimal loanAmount;
	@JsonIgnore
	private MultipartFile fileDetails;
	private String applicationNumber;
	
	
	public byte[] getFile() {
		return file;
	}
	public void setFile(byte[] file) {
		this.file = file;
	}
	public String getLenderNumber() {
		return lenderNumber;
	}
	public void setLenderNumber(String lenderNumber) {
		this.lenderNumber = lenderNumber;
	}
	public String getDuRecommendation() {
		return duRecommendation;
	}
	public void setDuRecommendation(String duRecommendation) {
		this.duRecommendation = duRecommendation;
	}
	public String getPropertyType() {
		return propertyType;
	}
	public void setPropertyType(String propertyType) {
		this.propertyType = propertyType;
	}
	public BigDecimal getDti() {
		return dti;
	}
	public void setDti(BigDecimal dti) {
		this.dti = dti;
	}
	public BigDecimal getLtv() {
		return ltv;
	}
	public void setLtv(BigDecimal ltv) {
		this.ltv = ltv;
	}
	public Integer getFico() {
		return fico;
	}
	public void setFico(Integer fico) {
		this.fico = fico;
	}
	public BigDecimal getLoanAmount() {
		return loanAmount;
	}
	public void setLoanAmount(BigDecimal loanAmount) {
		this.loanAmount = loanAmount;
	}
	public MultipartFile getFileDetails() {
		return fileDetails;
	}
	public void setFileDetails(MultipartFile fileDetails) {
		this.fileDetails = fileDetails;
	}
	public String getApplicationNumber() {
		return applicationNumber;
	}
	public void setApplicationNumber(String applicationNumber) {
		this.applicationNumber = applicationNumber;
	}
	

}
