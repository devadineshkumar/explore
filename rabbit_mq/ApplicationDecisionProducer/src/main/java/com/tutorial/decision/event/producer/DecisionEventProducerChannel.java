package com.tutorial.decision.event.producer;

import org.springframework.cloud.stream.annotation.Output;
import org.springframework.messaging.MessageChannel;

public interface DecisionEventProducerChannel {

	/**
	 * Property to for binding the producer config.
	 * Use this channel name to configure a channel in application to create exchange.
	 * Use below value to configure channel binding.
	 * 
	 * spring.cloud.stream.bindings.<CHANNEL_NAME>.****
	 */
	public static String CHANNEL_NAME = "decisioneventproducer";
	
	/**
	 * Property to for binding the producer group.
	 * Provide the below property value as GROUP_NAME.
	 * spring.cloud.stream.bindings.<CHANNEL_NAME>.group=<GROUP_NAME>
	 */
	public static String GROUP_NAME = "decisioneventgroup";
	
	/**
	 * Destination value for publishing the events.
	 * provide property and value as EXCHANGE_NAME assinged value.
	 * Eg. here decisioneventconsumer.
	 * spring.cloud.stream.bindings.<CHANNEL_NAME>.destination=<EXCHANGE_NAME>
	 */
	public static String EXCHANGE_NAME = "decisioneventexchange";
	
	
	public static String ERROR_CHANNEL = "errorChannel";

	@Output(CHANNEL_NAME)
	MessageChannel messagePublishChannel();

}
