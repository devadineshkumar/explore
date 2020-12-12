package com.tutorial.decision.event.consumer.listener;

import java.math.BigDecimal;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.cloud.stream.annotation.EnableBinding;
import org.springframework.cloud.stream.annotation.StreamListener;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.support.ErrorMessage;
import org.springframework.stereotype.Service;

import com.tutorial.decision.event.consumer.model.LoanDetailDto;

@EnableBinding({ LoanDecisionEventConsumerChannel.class/* , DLQChannel.class */ })
@Service
public class LoanDecisionEventListener {

	private Logger LOGGER = LogManager.getLogger(LoanDecisionEventListener.class);

	@StreamListener(value = LoanDecisionEventConsumerChannel.CHANNEL_NAME)
	public void subscribedMessages(@Payload LoanDetailDto dto) {
		LOGGER.info("Loan decision event message {}", dto);
		if (dto.getLoanAmount().compareTo(new BigDecimal(500000L)) > 0) {
			throw new RuntimeException("Loan amount greater than 500000");
		}

	}

//	@StreamListener(value = DLQChannel.CHANNEL_NAME)
	public void messageChannel(ErrorMessage message) {
		LOGGER.info("DLQ exchange message {}", message);
	}

	/*
	 * @ServiceActivator(inputChannel =
	 * LoanDecisionEventConsumerChannel.ERROR_CHANNEL_NAME, outputChannel =
	 * LoanDecisionEventConsumerChannel.DLQ_QUEUE_NAME) public ErrorMessage
	 * errorChannelListener(ErrorMessage message) {
	 * LOGGER.info("Original Message failed due to {} ",
	 * message.getPayload().getMessage()); throw new
	 * RuntimeException("Loan amount greater than 500000"); }
	 */

}
