import React from "react";
import Books from "../Component/home/books";
import Featured from "../Component/home/featuredBook";
import { BooksContext } from "../context/BooksContext";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import Cart from "../Component/cart";
function Homepage() {
  // first get all the json file and function to get all books from context
  const { books, getAllBooks } = useContext(BooksContext);
  const {cartIsOpen} = useContext(CartContext)
  // the code updates the DOM on any changes causing a re-render
  useEffect(() => {
    getBooks();
  },[]);

  const getBooks = async () => {
    getAllBooks();
    setTimeout(() => {
      //   setLoading(false);
    }, 2000);
  };
  // const [showCart,setShowCart]= useState(false)
  return (
    <>
    {cartIsOpen && <Cart />}
    <div>
      <Featured book={books} />
      <Books book={books} />
      {/* <Navbar setShowCart={setShowCart}/> */}
      {/* <Featured/>
      <Books/>
      {showCart  && <Cart setShowCart={setShowCart}/>} */}
    </div>
    </>
  );
}

export default Homepage;
