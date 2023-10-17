import React from "react";
import {useContext} from "react"
import { BiArrowBack } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import CartItem from "./CartItem";
// import Books from "../../db.json" 
import { CartContext } from "../../context/CartContext";
// import { BooksContext } from "../../context/BooksContext";
function Cart() {
  const {toggleCart,cart}= useContext(CartContext)
  // const {books}= useContext(BooksContext)
  return (
    <>
    <div className=" w-screen fixed md:w-[500px] bg-gray-100 h-screen z-10 top-1 right-0 animation overflow-auto  ">
    <div className="flex p-8 fixed bg-gray-100 border-red-100  top-0 items-center justify-between border w-full md:w-[500px]">
          <div>
            <button
              onClick={toggleCart}
              className="flex items-center ease-in-out"
            >
              {<BiArrowBack size={25} />}
              <p className="pl-2">Back</p>
            </button>
          </div>
          <div className="w-32">
            <button className="flex items-center">
              <p className="pr-2">Your cart</p>
              {<BsCart2 size={25} />}
            </button>
          </div>
        </div>
      <div className="mt-[100px]">
         {cart.length > 0 && 
          <>
          {cart?.map((book,index)=> <CartItem book={book} index={index}  key={index}/>)}
          </>
        }
        {cart.length < 1 &&

          <>
          <div className="w-screen h-screen border flex flex-col justify-center items-center  border-red-900  text-center">
           <div className=" w-32 h-32 m-auto flex items-center flex-col space-y-5 border border-red-800">
           <BsCart2 size={32} />
           <p className="font-bold">Your Cart is Empty</p>
           </div>
          </div> 
          </>
        }
      </div>
    </div>
    </>
  );
}

export default Cart;
