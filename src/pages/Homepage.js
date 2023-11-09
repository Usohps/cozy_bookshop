import React from 'react';
import Books from '../Component/home/books';
import Featured from '../Component/home/featuredBook';
import { BooksContext } from '../context/BooksContext';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import Cart from '../Component/cart';
function Homepage() {
  // first get all the json file and function to get all books from context
  const { books } = useContext(BooksContext);
  const { cartIsOpen } = useContext(CartContext);

  return (
    <>
      {cartIsOpen && <Cart />}
      <div>
        <Featured book={books} />
        <Books book={books} />
      </div>
    </>
  );
}

export default Homepage;
