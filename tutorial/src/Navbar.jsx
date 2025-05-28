import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <Link to={"/"}> HOME </Link>
        <Link to={"/Java"}> JAVA </Link>
        <Link to={"/Python"}> PYTHON </Link>
        <Link to={"/Sql"}> SQL </Link>
      </nav>
    </>
  );
};

export default Navbar;
