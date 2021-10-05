package com.security.securitydemo;

import com.security.securitydemo.dto.Role;
import com.security.securitydemo.dto.User;
import com.security.securitydemo.service.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;


//https://www.youtube.com/watch?v=VVn9OG9nfH0
@SpringBootApplication
public class SecuritydemoApplication {

	public static void main(String[] args) {
		SpringApplication.run(SecuritydemoApplication.class, args);
	}

	@Bean
	CommandLineRunner run(UserService userService) {
		return args -> {
			userService.saveRole(new Role(null, "ROLE_USER" ));
			userService.saveRole(new Role(null, "ROLE_ADMIN" ));
			userService.saveRole(new Role(null, "ROLE_MANAGER" ));
			userService.saveRole(new Role(null, "ROLE_SUPER_USER"));

			userService.saveUser(new User(null, "dinesh", "dinesh", "12345", new ArrayList<>()));
			userService.saveUser(new User(null, "suganya", "suganya", "12345", new ArrayList<>()));

			userService.addRole("dinesh", "ROLE_USER");
			userService.addRole("dinesh", "ROLE_ADMIN");
			userService.addRole("dinesh", "ROLE_MANAGER");
			userService.addRole("dinesh", "ROLE_SUPER_USER");

			userService.addRole("suganya", "ROLE_USER");
			userService.addRole("suganya", "ROLE_MANAGER");
		};
	}

	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

}
