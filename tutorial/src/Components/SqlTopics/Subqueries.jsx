import React from "react";

const Subqueries = () => {
  return (
    <div>
      <h3>Subqueries in SQL</h3>
      <p>
        A subquery is a query within another query. It can be used in SELECT,
        INSERT, UPDATE, or DELETE statements.
      </p>
      <pre>
        SELECT name FROM employees
        <br />
        WHERE department_id = (SELECT id FROM departments WHERE name='HR');
      </pre>
      <a
        href="https://www.youtube.com/watch?v=c5HAwNdHYsQ"
        target="_blank"
        rel="noopener noreferrer"
      >
        Watch Subqueries Tutorial
      </a>
    </div>
  );
};

export default Subqueries;
