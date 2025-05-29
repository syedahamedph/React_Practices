import React from "react";

const Exception = () => {
  return (
    <div>
      <h3>Exception Handling in Java</h3>
      <p>
        Exception handling helps manage runtime errors using try, catch, and
        finally blocks.
      </p>
      <pre>
        try &#123;
        <br />
        &nbsp;&nbsp;int result = 10 / 0;
        <br />
        &#125; catch (ArithmeticException e) &#123;
        <br />
        &nbsp;&nbsp;System.out.println("Error: " + e.getMessage());
        <br />
        &#125;
      </pre>
      <a
        href="https://www.youtube.com/watch?v=cmZpHl9Kd2A"
        target="_blank"
        rel="noopener noreferrer"
      >
        Watch Exception Handling Tutorial
      </a>
    </div>
  );
};

export default Exception;
