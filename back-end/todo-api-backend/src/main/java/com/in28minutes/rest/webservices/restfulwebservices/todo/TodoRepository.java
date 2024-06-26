package com.in28minutes.rest.webservices.restfulwebservices.todo;

import org.springframework.data.jpa.repository.JpaRepository;
import com.in28minutes.rest.webservices.restfulwebservices.todo.Todo;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Integer> {

    List<Todo> findByUsername(String username);
}
