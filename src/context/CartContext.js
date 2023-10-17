import { createContext, useState } from "react";
export const CartContext = createContext()

const CartContextProvider = (props)=>{

    const [cart,setCart] = useState([])
    const [cartIsOpen,setCartIsOpen] = useState(false)

     const toggleCart = ()=>{
        setCartIsOpen(!cartIsOpen)
     }
    //To add to cart
    const addToCart =({title,image_url,price,available_copies,author,id})=>{
        const book = cart.find((item)=> item.id === id);
            if(book){
                toggleCart()
            }
        const books =[]
        const newbook = {
            title,
            image_url,
            price,
            quantity:1,
            available_copies,
            total: parseFloat(price) * 1,
            author,
            id
        }
        books.push(newbook)
        setCart([...cart,...books])
        toggleCart()
    }
    //To remove from cart 
    const removeFromCart = (index) => {
        const filteredCart = cart.filter((item, i) => i !== index);
        setCart([...filteredCart])
    }
    return(
        <CartContext.Provider value={{cart,setCart,cartIsOpen,toggleCart,addToCart,removeFromCart}}>
            {props.children}
        </CartContext.Provider>
    )
}
export default CartContextProvider