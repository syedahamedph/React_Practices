import React from "react";

const AggregateFunctions = () => {
  return (
    <div>
      <h3>Aggregate Functions</h3>
      <p>
        Aggregate functions perform calculations on a set of values and return a
        single value. Common examples: COUNT(), SUM(), AVG(), MAX(), MIN().
      </p>
      <pre>SELECT AVG(salary) FROM employees;</pre>
      <a
        href="https://www.youtube.com/watch?v=azW9UoqSc4g"
        target="_blank"
        rel="noopener noreferrer"
      >
        Watch Aggregate Functions Tutorial
      </a>
    </div>
  );
};

export default AggregateFunctions;
