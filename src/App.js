import React from "react";
import { Route, Routes } from 'react-router-dom';
import { NoticeBanner, HelpBanner } from './components/Banners';
import { Navbar } from './components/Navbar';
import { Homepage } from './pages/Homepage';
import { Footer } from './components/Footer';
import './App.css';
import './index.css';


export function App() {

  return (
    <div className="App relative max-w-full tracking-wider">
        <NoticeBanner />
        <HelpBanner />
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          {/* <Route path="/cart-page" element={<Cartpage />} /> */}
        </Routes>
        <Footer />
    </div>
  );
}

