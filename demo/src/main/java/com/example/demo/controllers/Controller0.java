package com.example.demo.controllers;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class Controller0 {
    private static final Logger logger = LoggerFactory.getLogger(Controller0.class);

    @PostMapping(value = "api/v")
    public ResponseEntity postMethod0(String x) {
    logger.info("WORJED!!!");
        return ResponseEntity.ok().body("worked!");
    }

}
