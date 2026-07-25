package com.cognizant.jwt_authentication.service;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Service;

import javax.crypto.SecretKey;
import java.nio.charset.StandardCharsets;
import java.util.Date;

@Service
public class JwtService {

    private final SecretKey secretKey =
            Keys.hmacShaKeyFor(
                    "my-super-secret-key-for-jwt-token-generation-12345"
                            .getBytes(StandardCharsets.UTF_8)
            );

    public String generateToken(String username) {

        long currentTime = System.currentTimeMillis();

        return Jwts.builder()
                .subject(username)
                .issuedAt(new Date(currentTime))
                .expiration(new Date(currentTime + 20 * 60 * 1000))
                .signWith(secretKey)
                .compact();
    }
}