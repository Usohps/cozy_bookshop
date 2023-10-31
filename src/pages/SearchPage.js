import React from "react";
import { useEffect, useContext } from "react";
import Bookcard from "../Component/home/books/Bookcard";
import { BooksContext } from "../context/BooksContext";
import { CartContext } from "../context/CartContext";
import Cart from "../Component/cart";
// import { useHref } from "react-router-dom";
function SearchPage() {
  const { setSearchedBooks, query, setAllBooks } = useContext(BooksContext);
  const { cartIsOpen } = useContext(CartContext);
  // let history = useHref();
  // the code updates the DOM on any changes causing a re-render
  useEffect(() => {
    getBooks();
  }, []);

  const getBooks = async () => {
    setAllBooks();
    setTimeout(() => {}, 2000);
  };
  // if (searchedBooks.length === 0 && query === null) {
  //   history.push("/");
  // }
  if (query !== null && setSearchedBooks.length > 2) {
    return (
      <div>
        {cartIsOpen && <Cart />}
        <div>
          <div className="books-wrapper">
            {setSearchedBooks.map((book, i) => {
              return <Bookcard book={book} key={i} />;
            })}
          </div>
          <div className="title-section">
            {query.length > 0 ? (
              <h4 className="title">
                {setSearchedBooks.length} results found for {query}
              </h4>
            ) : (
              <h4 className="title">Start typing to search</h4>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchPage;
