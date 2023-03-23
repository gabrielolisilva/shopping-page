import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cart from "./pages/Cart";

import { productsContext } from "./contexts/productsContext";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const { data } = await axios.get("http://localhost:3500/products ");
      setProducts(data);
    }

    getData();
  }, []);

  console.log(products);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <productsContext.Provider value={{ products }}>
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
