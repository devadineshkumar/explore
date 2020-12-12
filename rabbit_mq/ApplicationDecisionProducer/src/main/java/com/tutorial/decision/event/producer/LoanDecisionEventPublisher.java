package com.tutorial.decision.event.producer;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.integration.annotation.ServiceActivator;
import org.springframework.messaging.Message;
import org.springframework.messaging.support.ErrorMessage;
import org.springframework.messaging.support.MessageBuilder;
import org.springframework.stereotype.Service;

import com.tutorial.decision.event.model.LoanDetailDto;

@Service
public class LoanDecisionEventPublisher {

	private Logger LOGGER = LogManager.getLogger(LoanDecisionEventPublisher.class);

	@Autowired
	private DecisionEventProducerChannel decisionEventProducerChannel;

	public void publishEvent(LoanDetailDto loanDto) {
		Message<LoanDetailDto> message = MessageBuilder.withPayload(loanDto).build();
		LOGGER.info(" Sending message to channel : {} ", message);
		decisionEventProducerChannel.messagePublishChannel().send(message);
	}

	@ServiceActivator(inputChannel = DecisionEventProducerChannel.ERROR_CHANNEL)
	public void errorChannelListener(ErrorMessage message) {
		LOGGER.info("Error Message on producer {} ", message.getOriginalMessage());

		LOGGER.info("Message failed {} ", message);
	}

}
