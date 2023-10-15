import React from 'react'

function CartItem(
    {image_url,
      title,
      authors,
      price,}
) {
  return (
    <div className='flex my-4 border items-center justify-around'>
        <div className='w-[100px] h-[100px] border'>
            <img src={image_url} className="w-[100px] h-[100px]" alt="" />
        </div>
        <div>
            <h1>{title}</h1>
            <p>
            {authors.slice(0, 2).map((author, i) => {
                return (
                  <span key={i}>
                    {author.name}
                    {i !== authors.length - 1 ? ", " : ""}
                  </span>
                );
              })}
            </p>
            
            <div>
              <h4>{price}</h4>
              <div className='flex'>
                <button className='border p-1'>+</button>
                <span></span>
                <button>-</button>
              </div>
              <span placeholder='sumtotal'></span>
              <button>Trash Now</button>
        </div>
        </div>
       
    </div>
  )
}

export default CartItem