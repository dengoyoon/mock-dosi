import React from "react";
import Home from "./components/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adventure from "./components/adventure/Adventure";
import Membership from "./components/membership/Membership";
import GiftBox from "./components/giftbox/GiftBox";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import "./stylesheets/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/adventure" element={<Adventure />}></Route>
        <Route path="/membership" element={<Membership />}></Route>
        <Route path="/adventure/giftbox" element={<GiftBox />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
