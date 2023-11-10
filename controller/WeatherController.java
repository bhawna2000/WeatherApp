package com.example.weatherApp.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
@RequestMapping("/api/v1")
public class WeatherController {
    @GetMapping("/get-weather/{city}")
    public ResponseEntity<String> getWeather(@PathVariable String city){
        String url =
        "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=1e638f0daad4ba8b8fc3bff14b476ec7";
        RestTemplate res= new RestTemplate();
        String res1=res.getForObject(url,String.class);
        return new ResponseEntity<>(res1, HttpStatus.OK);
    }
    @GetMapping("/get-Tomorrow-weather/{city}")
    public ResponseEntity<String> getTomorrowWeather(@PathVariable String city){
        String url =
                "https://api.openweathermap.org/data/2.5/forecast?q="+city+"&appid=1e638f0daad4ba8b8fc3bff14b476ec7&units=metric";
        RestTemplate res= new RestTemplate();
        String res1=res.getForObject(url,String.class);
        return new ResponseEntity<>(res1, HttpStatus.OK);
    }

}
