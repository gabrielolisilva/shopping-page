import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";

import { productsContext } from "./contexts/productsContext";

function App() {
  const [itemsQuantity, setItemsQuantity] = useState([
    "",
    1,
    2,
    0,
    0,
    0,
    0,
    0,
    0,
  ]);
  const [products, setProducts] = useState([]);
  const [cardItems, setCardItems] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get("http://localhost:3500/products ");
      setProducts(data);
    }

    getData();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <productsContext.Provider
          value={{
            products,
            cardItems,
            setCardItems,
            itemsQuantity,
            setItemsQuantity,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </productsContext.Provider>
      </Router>
    </div>
  );
}

export default App;
