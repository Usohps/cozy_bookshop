import { createContext, useState } from 'react';
import Jsonfile from '../db.json';

export const BooksContext = createContext();

const BooksContextProvider = (props) => {
  const [searchedBooks, setSearchedBooks] = useState([]);
  // console.log(searchedBooks);

  const [books, setBooks] = useState(Jsonfile);

  const getSingleBook = (id) => {
    const book = books.find((book) => Number(book.id) === Number(id));
    return book;
  };
  const getAllBooks = () => {
    setBooks(Jsonfile);
  };

  return (
    <BooksContext.Provider
      value={{
        getSingleBook,
        books,
        getAllBooks,
        searchedBooks,
        setSearchedBooks,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};
export default BooksContextProvider;
