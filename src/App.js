import React from "react";
import { Route, Routes } from "react-router-dom";
import { DataContextProvider } from "./scripts/DataContext";
import { CartContextProvider } from "./scripts/CartStorage";
import { NoticeBanner, HelpBanner } from "./components/Banners";
import { Navbar } from "./components/Navbar";
import { Homepage } from "./pages/Homepage";
import { Cartpage } from "./pages/Cartpage";
import { Footer } from "./components/Footer";
import "./App.css";
import "./index.css";

export function App() {
  return (
    <div className="App relative max-w-full tracking-wider">
      <DataContextProvider>
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
      </DataContextProvider>
    </div>
  );
}
