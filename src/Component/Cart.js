import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import CartItem from "./CartItem";
import Books from "../db.json"
function Cart({ setShowCart }) {
  return (
    <>
    <div className=" w-full fixed md:w-[500px] bg-gray-100 h-screen z-10 top-1 right-0 animation overflow-auto  ">
    <div className="flex p-8 fixed bg-gray-100  top-0 items-center justify-between border w-[500px]">
          <div>
            <button
              onClick={() => {
                setShowCart(false);
              }}
              className="flex items-center"
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
              {Books?.map((book)=> <CartItem key={book.id} {...book}/>)}
         
        
        {/* // <div className="w-32 h-full m-auto text-center flex flex-col justify-center items-center">
        //   <BsCart2 size={32} />
        //   <p className="font-bold">Your Cart is Empty</p>
        // </div> */}
      </div>
    </div>
    </>
  );
}

export default Cart;
