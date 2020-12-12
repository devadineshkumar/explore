package com.tutorial.decision.event.rest;

import java.math.BigDecimal;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tutorial.decision.event.model.LoanDetailDto;
import com.tutorial.decision.event.producer.LoanDecisionEventPublisher;

@RestController
@RequestMapping("/app/decision")
public class ApplicationDecisionProducerRest {

	private Logger LOGGER = LogManager.getLogger(ApplicationDecisionProducerRest.class);

	@Autowired
	private LoanDecisionEventPublisher decisionEventPublisher;

	@GetMapping("/health")
	private String healthCheck() {
		return "Up and Running...!";
	}

	@PostMapping(path = "/trigger/{loanAmount}")
	private String triggerEvent(@PathVariable long loanAmount) {
		LoanDetailDto dto = new LoanDetailDto();

		dto.setDti(new BigDecimal("0.45"));
		dto.setFico(780);
		if (loanAmount > 0) {
			dto.setLoanAmount(new BigDecimal(loanAmount));
		} else {
			dto.setLoanAmount(new BigDecimal(450000));
		}
		dto.setDuRecommendation("Eligible");
		dto.setPropertyType("Single Family Attached");
		dto.setLenderNumber("1001");
		dto.setApplicationNumber("100012345");
		dto.setLtv(new BigDecimal("90.00"));

		LOGGER.info("Publishing event : {}", dto);

		decisionEventPublisher.publishEvent(dto);

		return "Triggered Loan decision event.";
	}

}
