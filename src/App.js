// import Books from "./Component/Books";
// import Cart from "./Component/Cart";
// import Featured from "./Component/Featured";
import Navbar from "./Component/Navbar";
import Homepage from "./pages/Homepage";
import BooksContextProvider from "./context/BooksContext";
import CartContextProvider from "./context/CartContext";
// import { useState } from "react";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div>
      {/* <Router> */}
      <CartContextProvider>
        <BooksContextProvider>
          <Navbar />
          {/* <Switch> */}
          {/* <Route exact path="/"> */}
          <Homepage />
          {/* </Route> */}
          {/* </Switch> */}
        </BooksContextProvider>
      </CartContextProvider>
      {/* </Router> */}
    </div>
  );
}

export default App;
