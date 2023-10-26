package com.example.repositories;

import com.example.entities.Book;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends BaseRepository<Book, Long> {
}
