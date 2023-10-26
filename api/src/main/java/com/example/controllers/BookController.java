package com.example.controllers;

import com.example.entities.Book;
import com.example.services.impl.BookServiceImpl;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
@RequestMapping("api/books")
public class BookController extends BaseControllerImpl<Book, BookServiceImpl> {}
