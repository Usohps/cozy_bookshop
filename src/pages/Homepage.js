// import React, { useEffect } from "react";
import Books from "../Component/home/books";
import Featured from "../Component/home/featuredBook";
import { BooksContext } from "../context/BooksContext";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Cart from "../Component/cart";
import { useState } from "react";
// import Loader from "../Component/loading/index";
function Homepage() {
  // first get all the json file and function to get all books from context
  const { books, getAllBooks } = useContext(BooksContext);
  const { cartIsOpen } = useContext(CartContext);
  // const { isLoading, setIsLoading } = useState(true);

  // useEffect(() => {
  //   displayBooks();
  // }, []);
  // const displayBooks = () => {
  //   setTimeout(() => {
  //     getAllBooks();
  //     setIsLoading(false);
  //   }, 5000);
  // };
  // if (isLoading) {
  //   <Loader />;
  // }
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
