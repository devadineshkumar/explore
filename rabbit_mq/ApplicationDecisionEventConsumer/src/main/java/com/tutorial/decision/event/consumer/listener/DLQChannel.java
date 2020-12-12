package com.tutorial.decision.event.consumer.listener;

import org.springframework.cloud.stream.annotation.Input;
import org.springframework.messaging.SubscribableChannel;

public interface DLQChannel {

	/**
	 * Property to for binding the producer config.
	 * Use this channel name to configure a channel in application to create exchange.
	 * Use below value to configure channel binding.
	 * 
	 * spring.cloud.stream.bindings.<CHANNEL_NAME>.****
	 */
	public static final String CHANNEL_NAME = "dlxChannel";
	
	public static final String DLX = "DLX";
	
//	@Input(CHANNEL_NAME)
	SubscribableChannel dlxExchangeChannel();

}
