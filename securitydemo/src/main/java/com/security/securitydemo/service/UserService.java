package com.security.securitydemo.service;

import com.security.securitydemo.dto.Role;
import com.security.securitydemo.dto.User;

import java.util.List;

public interface UserService {
    User saveUser(User user);

    Role saveRole(Role role);

    void addRole(String username, String rolename);

    User getUser(String username);

    List<User> getAllUsers();
}
