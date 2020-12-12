package com.tutorial.decision.event;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.stream.annotation.EnableBinding;

import com.tutorial.decision.event.producer.DecisionEventProducerChannel;


@EnableBinding({ DecisionEventProducerChannel.class })
@SpringBootApplication
public class ApplicationDecisionProducerApplication {

	public static void main(String[] args) {
		SpringApplication.run(ApplicationDecisionProducerApplication.class, args);
	}

}
