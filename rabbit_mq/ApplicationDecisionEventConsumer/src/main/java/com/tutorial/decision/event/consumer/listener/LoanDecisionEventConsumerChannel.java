package com.tutorial.decision.event.consumer.listener;

import org.springframework.cloud.stream.annotation.Input;
import org.springframework.messaging.SubscribableChannel;

public interface LoanDecisionEventConsumerChannel {

	/**
	 * Property to for binding the producer config.
	 * Use this channel name to configure a channel in application to create exchange.
	 * Use below value to configure channel binding.
	 * 
	 * spring.cloud.stream.bindings.<CHANNEL_NAME>.****
	 */
	public static final String CHANNEL_NAME = "decisioneventconsumer";
	
	/**
	 * Property to for binding the producer group.
	 * Provide the below property value as GROUP_NAME.
	 * spring.cloud.stream.bindings.<CHANNEL_NAME>.group=<GROTUP_NAME>
	 */
	public static final String GROUP_NAME = "decisioneventgroup";
	
	/**
	 * Destination value for publishing the events.
	 * provide property and value as EXCHANGE_NAME assinged value.
	 * Eg. here decisioneventexchange.
	 * spring.cloud.stream.bindings.<CHANNEL_NAME>.destination=<EXCHANGE_NAME>
	 */
	public static final String EXCHANGE_NAME = "decisioneventexchange";
	
	public static final String ERROR_CHANNEL_NAME = "decisioneventexchange.decisioneventgroup.errors";
	
	public static final String DLQ_QUEUE_NAME = "decisioneventconsumer.decisioneventgroup.dlq";
	
	public static final String ERROR_CHANEL = "errorChannel";

	public static final String DLX = "DLX";
	
	@Input(CHANNEL_NAME)
	SubscribableChannel decisionSubscribableChannel();

}
