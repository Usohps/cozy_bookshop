import React from 'react'
import { CartContext } from "../../context/CartContext"
import {useContext} from "react"
function CartItem({book,index}) {
  const {removeFromCart}= useContext(CartContext)
  return (
    <div className='flex my-4 border items-center justify-around'>
        {/* <div className='w-[100px] h-[100px] border'>
            <img src={book.image_url} className="w-[100px] h-[100px]" alt="" />
        </div> */}
        <div>
            <h1>{book.title}</h1>
            {/* <p>
            {book.authors.slice(0, 2).map((author, index) => {
                return (
                  <span key={index}>
                    {author.name}
                    {index !== book.authors.length - 1 ? ", " : ""}
                  </span>
                );
              })}
            </p> */}
            
            <div>
              <h4>{book.price}</h4>
              <div className='flex gap-3 items-center'>
                <button className='border-2 p-1 w-12 text-center shadow-md text-3xl font-extrabold'>+</button>
                <button className='border-2 p-1 w-12 text-center shadow-md text-3xl  font-extrabold'>-</button>
              </div>
              <span placeholder='sumtotal'></span>
              <button onClick={()=>(
                removeFromCart(index)
                )}>Trash Now</button>
        </div>
        </div>
       
    </div>
  )
}

export default CartItem