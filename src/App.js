// import Books from "./Component/Books";
// import Cart from "./Component/Cart";
// import Featured from "./Component/Featured";
import Navbar from "./Component/Navbar";
import Homepage from "./pages/Homepage";
import BooksContextProvider from "./context/BooksContext";
import CartContextProvider from "./context/CartContext";
// import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import DetailsPage from "./pages/DetailsPage";
function App() {
  return (
    <div>
      <Router>
      <CartContextProvider>
        <BooksContextProvider>
          <Navbar />
          <Routes>
          <Route path='/'element={<Homepage/>}/>
          <Route path='/search'element={<SearchPage/>}/>
          <Route path='/books/:bookId'element={<DetailsPage/>}/>
          </Routes>
        </BooksContextProvider>
      </CartContextProvider>
      </Router>
    </div>
  );
}

export default App;
