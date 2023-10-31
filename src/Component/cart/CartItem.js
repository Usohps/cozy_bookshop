import React from 'react'
import { CartContext } from "../../context/CartContext"
import {useContext} from "react"
function CartItem({book,index}) {
  const {removeFromCart,increaseBookQuantity,reduceBookQuantity}= useContext(CartContext)
  return (
    <div className='flex my-4 border items-center justify-around'>
        <div className='w-[100px] h-[100px] border'>
            <img src={book.image_url} className="w-[100px] h-[100px]" alt="img" />
        </div>
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
                <button onClick={(()=>increaseBookQuantity(book.id))} className=' p-2 text-center shadow-sm text-2xl font-extrabold'>+</button>
              <span placeholder='sumtotal' className='w-4'>{book.quantity}</span>
                <button onClick={(()=>reduceBookQuantity(book.id))} className=' p-2 text-center shadow-sm text-2xl  font-extrabold'>-</button>
              </div>
              <button className='border m-2 shadow-md p-2 rounded' onClick={()=>(
                removeFromCart(index)
                )}>Remove CartItem</button>
        </div>
        </div>
       <p>${(book.price * book.quantity).toFixed(2)}</p>
    </div>
  )
}

export default CartItem