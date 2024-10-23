import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import List from "./1_Props/List";

import Form from "./Forms/Form";
import Increment_Decrement from "./Increment_Decrement/Increment_Decrement";

import Accordian from "./Accordian/Details";

import FetchApi from "./components/Ecommerce/FetchApi.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductCard from "./components/Ecommerce/ProductCard.jsx";
import About from "./components/Ecommerce/About.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FetchApi />} />
        <Route path="/productcard" element={<ProductCard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>

    // <>
    //     <List />
    //     <Form />
    //     <Increment_Decrement />
    //     <Accordian/>
    //     <FetchApi />
    //   </>
  );
}

export default App;
