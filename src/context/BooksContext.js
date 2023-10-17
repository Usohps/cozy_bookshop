import { createContext, useState } from "react";
import Jsonfile from "../db.json";

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [query, setQuery] = useState(null);
  const [books, setBooks] = useState(Jsonfile);
  //To get single book function on line 11
  const getSingleBook = (id) => {
    const book = books.find((book) => Number(book.id) === Number(id));
    return book;
  };
  const getAllBooks = () => {
    setBooks(Jsonfile);
  };
  const search = (searchTerm) => {
    setQuery(searchTerm);
    if (searchTerm === "" || searchTerm.length < 2) {
      return setSearchedBooks([]);
    }
    const searchedBooks = books.filter((book) => {
      return (
        book.title.toLowerCase().match(searchTerm.toLowerCase()) ||
        book.authors[0].name.toLowerCase().match(searchTerm.toLowerCase())
      );
    });
    setSearchedBooks([...searchedBooks]);
  };
  return (
    <BooksContext.Provider value={{ getSingleBook, books, getAllBooks,search,searchedBooks,query }}>
      {props.children}
    </BooksContext.Provider>
  );
};
export default BooksContextProvider;
