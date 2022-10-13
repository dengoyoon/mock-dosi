import "./stylesheets/App.scss";
import React from "react";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Adventure from "./Adventure";
import Membership from "./Membership";
import GiftBox from "./GiftBox";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/adventure" element={<Adventure />}></Route>
        <Route path="/membership" element={<Membership />}></Route>
        <Route path="/giftbox" element={<GiftBox />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
