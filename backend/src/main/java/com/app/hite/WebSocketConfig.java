//package com.app.hite;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.messaging.converter.DefaultContentTypeResolver;
//import org.springframework.messaging.converter.MappingJackson2MessageConverter;
//import org.springframework.messaging.converter.MessageConverter;
//import org.springframework.messaging.simp.config.MessageBrokerRegistry;
//import org.springframework.util.MimeTypeUtils;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.socket.WebSocketHandler;
//import org.springframework.web.socket.config.annotation.*;
//
//import java.util.List;
//
//@Configuration
//@EnableWebSocketMessageBroker
//public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {
//
////    @Override
////    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
////        registry.addHandler(myHandler(), "/m").setAllowedOrigins("http://localhost:3000").withSockJS();
////    }
////
////
////    public WebSocketHandler myHandler() {
////        return new MyWebSocketHandler();
////    }
//    @Override
//    public void registerStompEndpoints(StompEndpointRegistry registry) {
//        registry.addEndpoint("/main").setAllowedOrigins("http://localhost:3000").withSockJS();
//    }
//
//    @Override
//    public void configureMessageBroker(MessageBrokerRegistry config) {
//        config.setApplicationDestinationPrefixes("/app");
//
//    }
//}
