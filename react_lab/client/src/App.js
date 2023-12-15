import "./App.css";
import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Catalog from "./Pages/Catalog/Catalog";
import ItemPage from "./Pages/Catalog/ItemPage";
import Cart from "./Pages/Cart/Cart";


function App() {
  const [cars, setCars] = useState([]);
  return (
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Catalog" element={<Catalog cars={cars} setCars={setCars} />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Catalog/:carId" element={<ItemPage />} />
        </Routes>
        <Footer />
      </div>
  );
};

export default App;