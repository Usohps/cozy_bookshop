import React from 'react';
import { useEffect, useContext } from 'react';
import Bookcard from '../Component/home/books/Bookcard';
import { BooksContext } from '../context/BooksContext';
import { CartContext } from '../context/CartContext';
import Cart from '../Component/cart';
// import { useHref } from "react-router-dom";
function SearchPage() {
  const { searchedBooks } = useContext(BooksContext);
  // const { cartIsOpen } = useContext(CartContext);
  // let history = useHref();
  // the code updates the DOM on any changes causing a re-render
  // useEffect(() => {
  //   getBooks();
  // }, []);

  // const getBooks = async () => {
  //   setAllBooks();
  //   setTimeout(() => {}, 2000);
  // };
  // if (searchedBooks.length === 0 && query === null) {
  //   history.push("/");
  // }
  return (
    <div className='grid grid-cols-1 mt-28 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-2 lg:gap-8'>
      {searchedBooks?.map((book) => {
        return (
          <div key={book.id}>
            <Bookcard key={book.id} book={book} />
          </div>
        );
      })}
    </div>
  );
}

export default SearchPage;
