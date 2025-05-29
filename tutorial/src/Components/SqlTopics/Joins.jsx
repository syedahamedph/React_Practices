import React from "react";

const Joins = () => {
  return (
    <div>
      <h3>Joins in SQL</h3>
      <p>
        Joins are used to combine rows from two or more tables based on a
        related column. Common types: INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL
        OUTER JOIN.
      </p>
      <pre>
        SELECT a.name, b.order
        <br />
        FROM customers a<br />
        INNER JOIN orders b ON a.id = b.customer_id;
      </pre>
      <a
        href="https://www.youtube.com/watch?v=9yeOJ0ZMUYw"
        target="_blank"
        rel="noopener noreferrer"
      >
        Watch Joins Tutorial
      </a>
    </div>
  );
};

export default Joins;
