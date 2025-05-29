import { useState } from "react";

import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Java from "./Components/Java";
import Python from "./Components/Python";
import Sql from "./Components/Sql";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/java" element={<Java />}></Route>
        <Route path="/python" element={<Python />}></Route>
        <Route path="/sql" element={<Sql />}></Route>
      </Routes>
    </>
  );
}

export default App;
