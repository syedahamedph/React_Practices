import { useState } from "react";

import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Java from "./Components/Java";
import Python from "./Components/Python";
import Sql from "./Components/Sql";
import "./CssFiles/global.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/java" element={<Java />} />
          <Route path="/python" element={<Python />} />
          <Route path="/sql" element={<Sql />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
