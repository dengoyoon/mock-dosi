import "./stylesheets/App.scss";
import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adventure from "./Adventure";
import Membership from "./Membership";
import GiftBox from "./GiftBox";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/adventure" element={<Adventure />}></Route>
        <Route path="/membership" element={<Membership />}></Route>
        <Route path="/giftbox" element={<GiftBox />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
