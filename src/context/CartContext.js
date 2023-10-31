import { createContext, useState } from "react";
export const CartContext = createContext();

const CartContextProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const toggleCart = () => {
    setCartIsOpen(!cartIsOpen);
  };
  //To add to cart
  const addToCart = ({
    title,
    image_url,
    price,
    available_copies,
    author,
    id,
  }) => {
    const book = cart.find((item) => item.id === id);
    if (book) {
      toggleCart();
      return
    } else {
      const books = [];
      const newbook = {
        title,
        image_url,
        price,
        quantity: 1,
        available_copies,
        total: parseFloat(price) * 1,
        author,
        id,
      };
      books.push(newbook);
      setCart([...cart, ...books]);
      toggleCart();
    }
  };
  //To remove from cart
  const removeFromCart = (index) => {
    const filteredCart = cart.filter((item, i) => i !== index);
    setCart([...filteredCart]);
  };
  //To remove all from cart 
  const emptyCart = ()=>{
    setCart([])
  }
  //To increase numbers of cart items

  const increaseBookQuantity = (id) => {
    const bookIndex = cart.findIndex(
      (item) => parseInt(item.id) === parseInt(id)
    );
    if (bookIndex < 0) {
      return;
    }
    const book = cart.find((item, index) => parseInt(id) === item.id);
    if (book.available_copies > book.quantity) {
      book.quantity++;
      book.total += book.price;
      setCart([...cart]);
    }
    return;
  };
  //To reduce quantity of cart item
  const reduceBookQuantity = (id) => {
    const bookIndex = cart.findIndex(
      (item, index) => parseInt(item.id) === parseInt(id)
    );
    if (bookIndex < 0) {
      return;
    }
    const book = cart.find((item, index) => parseInt(id) === item.id);
    book.quantity--;
    book.total -= book.price;
    if (book.quantity === 0) {
      return removeFromCart(bookIndex);
    }
    setCart([...cart]);
    return;
  };
  //Total cost of cat items
  const getTotalCost = () => {
    return cart.reduce((a, b) => {
      return { total: a.total + b.total };
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        getTotalCost,
        cartIsOpen,
        increaseBookQuantity,
        reduceBookQuantity,
        toggleCart,
        addToCart,
        removeFromCart,
        emptyCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContextProvider;
