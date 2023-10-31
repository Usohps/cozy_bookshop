import React from "react";
import { useContext } from "react";
import { BiArrowBack } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import CartItem from "./CartItem";
// import Books from "../../db.json"
import { CartContext } from "../../context/CartContext";
// import { BooksContext } from "../../context/BooksContext";
function Cart() {
  const { toggleCart, cart, getTotalCost,emptyCart } = useContext(CartContext);
  // const {books}= useContext(BooksContext)
  return (
    <>
      <div className=" w-screen fixed md:w-[500px] bg-gray-100 h-screen z-10 top-1 right-0 animation overflow-auto  ">
        <div className="flex p-8 fixed bg-gray-100 top-0 items-center justify-between w-full md:w-[500px]">
          <div>
            <button
              onClick={toggleCart}
              className="flex items-center ease-in-out"
            >
              {<BiArrowBack size={25} />}
              <p className="pl-2">Back</p>
            </button>
          </div>
            {cart.length > 1 &&
          <div className="w-32">
            <button onClick={emptyCart} className="flex items-center" >
              <p className="pr-2">Empty cart</p>
              {<BsCart2 size={25} />}
            </button>
          </div>
            }
        </div>
        <div className="mt-[100px]">
          {cart.length > 0 && (
            <>
              {cart?.map((book, index) => (
                <CartItem book={book} index={index} />
              ))}
              <div className=" w-full text-center p-4">
                <p className="font-extrabold">Sumtotal</p>
                <p className="">${getTotalCost().total.toFixed(2)}</p>
              </div>
            </>
          )}
          {cart.length < 1 && (
            <>
              <div className="w-screen md:w-full h-screen flex flex-col justify-center items-center text-center">
                <div className=" fixed w-32 h-32 m-auto flex items-center flex-col space-y-5">
                  <BsCart2 size={32} />
                  <p className="font-bold">Your Cart is Empty</p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Cart;
