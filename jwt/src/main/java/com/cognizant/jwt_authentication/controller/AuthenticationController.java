package com.cognizant.jwt_authentication.controller;

import com.cognizant.jwt_authentication.model.AuthenticationResponse;
import com.cognizant.jwt_authentication.service.JwtService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import java.nio.charset.StandardCharsets;
import java.util.Base64;

@RestController
public class AuthenticationController {

    private final JwtService jwtService;

    public AuthenticationController(JwtService jwtService) {
        this.jwtService = jwtService;
    }

    @GetMapping("/authenticate")
    public AuthenticationResponse authenticate(
            @RequestHeader("Authorization") String authorizationHeader) {

        String encodedCredentials =
                authorizationHeader.substring("Basic ".length());

        byte[] decodedBytes =
                Base64.getDecoder().decode(encodedCredentials);

        String credentials =
                new String(decodedBytes, StandardCharsets.UTF_8);

        String[] values =
                credentials.split(":", 2);

        String username = values[0];
        String password = values[1];

        if ("user".equals(username) && "pwd".equals(password)) {

            String token = jwtService.generateToken(username);

            return new AuthenticationResponse(token);
        }

        throw new RuntimeException("Invalid credentials");
    }
}