import { useState, useEffect } from "react";
import { getAllPaged } from "../lib/BaseService";

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [pagination, setPagination] = useState({ pageNumber: 0, totalPages: 0 });

  const onFetch = async (page) => {
    try {
      const data = await getAllPaged("books", page);

      setBooks(data.content);
      setPagination({
        pageNumber: data.pageable.pageNumber,
        totalPages: data.totalPages,
      });

      console.log(pagination);
    } catch (error) {
      console.log(error);
    }
  };

  const onChangePage = (newPage) => {
    onFetch(newPage);
  };


  useEffect(() => {
    onFetch(0);
  }, []);

  return {
    books,
    pagination,
    onChangePage
  }
};