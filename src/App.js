import Books from "./Component/Books";
import Cart from "./Component/Cart";
import Featured from "./Component/Featured";
import Navbar from "./Component/Navbar";
import { useState } from "react";

function App() {
  const [showCart,setShowCart]= useState(false)
  return (
    <div>
      <Navbar setShowCart={setShowCart}/>
      <Featured/>
      <Books/>
      {showCart  && <Cart setShowCart={setShowCart}/>}
    </div>
  );
}

export default App;
