package com.example.services.impl;

import com.example.entities.Book;
import com.example.repositories.BaseRepository;
import com.example.repositories.BookRepository;
import com.example.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BookServiceImpl extends BaseServiceImpl<Book, Long> implements BookService {

    @Autowired
    private BookRepository bookRepository;

    public BookServiceImpl(BaseRepository<Book, Long> baseRepository) {
        super(baseRepository);
    }
}
