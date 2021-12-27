//package com.app.hite;
//
//import lombok.AllArgsConstructor;
//import org.springframework.messaging.handler.annotation.MessageMapping;
//import org.springframework.messaging.handler.annotation.Payload;
//import org.springframework.messaging.handler.annotation.SendTo;
//import org.springframework.messaging.simp.SimpMessagingTemplate;
//import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.CrossOrigin;
//
//@Controller
//public  class MainController {
//
//    @CrossOrigin(origins = "http://localhost:3000")
//    @MessageMapping("/main")
//    @SendTo("/topic/greetings")
//    public Greeting greeting(Greeting message) throws Exception {
//        System.out.println("CONNECT!!!!!!!!!!");
//        return new Greeting("Hello, " + message.getContent() + "!");
//    }
//
//}