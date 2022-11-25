import React from "react";
import { Route, Routes } from 'react-router-dom';
import { ProductsContextProvider } from "./scripts/ProductContext";
import { CartContextProvider } from "./scripts/CartStorage";
import { NoticeBanner, HelpBanner } from './components/Banners';
import { Navbar } from './components/Navbar';
import { Homepage } from './pages/Homepage';
import { Cartpage } from "./pages/Cartpage";
import { Footer } from './components/Footer';
import './App.css';
import './index.css';


export function App() {

  return (
    <div className="App relative max-w-full tracking-wider">
      <ProductsContextProvider>
        <CartContextProvider>
          <NoticeBanner />
          <HelpBanner />
          <Navbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/cart-page" element={<Cartpage />} />
          </Routes>
          <Footer />
        </CartContextProvider>
      </ProductsContextProvider>
    </div>
  );
}

