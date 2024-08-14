import React from "react";

import { Categories, Header, SortPopup } from "./components";
import { Form, Route, Routes } from "react-router-dom";
import { Home, Cart } from './pages'

function App() {
  return (
    <div className="wrapper">
      <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/cart" element={<Cart />} exact />
          </Routes>
        </div>
    </div>

  );
}

export default App;
