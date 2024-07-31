package com.keyin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/test")
public class TestController {

    @Autowired
    private TreeRepository repository;

    @GetMapping("/connection")
    public String testConnection() {
        try {
            // Attempt to fetch a single entity (if any exists)
            if (repository.findAll().isEmpty()) {
                return "Database is connected, but no data found.";
            } else {
                return "Database is connected and data is present.";
            }
        } catch (Exception e) {
            return "Failed to connect to the database: " + e.getMessage();
        }
    }
}

