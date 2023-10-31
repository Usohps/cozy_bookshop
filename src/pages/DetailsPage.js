import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { BooksContext } from "../context/BooksContext";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Cart from "../Component/cart/index";
import { BiArrowBack } from "react-icons/bi";
function DetailsPage() {
  const { bookId } = useParams();
  const { getSingleBook } = useContext(BooksContext);
  const { cartIsOpen } = useContext(CartContext);
  const [book, setBook] = useState(null);

  useEffect(() => {
    details();
  }, []);
  const details = async () => {
    setBook(getSingleBook(bookId));
  };
  if (book !== null) {
    return (
      <>
        {cartIsOpen && <Cart />}
        <div className=" border-red-700 mt-36 p-3 text-sm md:text-base">
          <Link to={"/"}>
            <button className="flex items-center ease-in-out">
              {<BiArrowBack size={25} />}
              Back
            </button>
          </Link>
          <div>
            <div className="w-full text-center p-3 text-lg font-bold"><h1>{book.title}</h1></div>
            <img src={book.image_url} alt="img" />
            <span>{book.number_of_purchases}</span>
            <span>{book.likes}</span>
            <span>{new Date(book.release_date).toDateString()}</span>
            <h4 className="italic ">{book.subtitle}</h4>
            <div className="text-center">{book.full_description}</div>
          </div>
          <span className="btn-price">${book.price}</span>
          <span className="btn-stock">
            {book.available_copies} Copies available
          </span>
        </div>
      </>
    );
  }
}

export default DetailsPage;
