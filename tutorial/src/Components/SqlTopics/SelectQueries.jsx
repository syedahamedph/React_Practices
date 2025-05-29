import React from "react";

const SelectQueries = () => {
  return (
    <div>
      <h3>SELECT Queries</h3>
      <p>
        The SELECT statement is used to retrieve data from one or more tables.
        It's the most commonly used SQL command.
      </p>
      <pre>SELECT name, age FROM users;</pre>
      <a
        href="https://www.youtube.com/watch?v=9Pzj7Aj25lw"
        target="_blank"
        rel="noopener noreferrer"
      >
        Watch SELECT Query Tutorial
      </a>
    </div>
  );
};

export default SelectQueries;
