import React from "react";
import sqlimg from "./assets/sql.jpg";

const Sql = () => {
  return (
    <>
      <h1>Learn SQL </h1>

      <img src={sqlimg}></img>

      <p>
        SQL, or Structured Query Language, is a programming language designed to
        manage and manipulate data stored in relational database management
        systems. It allows users to retrieve, insert, update, and delete data
        efficiently. Developed in the 1970s by IBM scientists Donald D.
        Chamberlin and Raymond F. Boyce, SQL became an ANSI standard in 1986 and
        an ISO standard in 1987. SQL is widely used across various industries
        and is supported by many database systems like MySQL, MS SQL Server,
        Oracle, and PostgreSQL. It is known for its user-friendly syntax and
        portability, making it accessible to users without extensive programming
        knowledge.
      </p>
    </>
  );
};

export default Sql;
