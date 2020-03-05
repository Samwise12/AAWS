package com.example.demo;

import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class DemoApplication/* implements CommandLineRunner*/ {

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}

	/*@Override
	public void run(String... strings) {

	}*/

	/*@Bean
	ApplicationRunner init() {
		System.out.println("asdfa");
		return  null;
	}*/

}

