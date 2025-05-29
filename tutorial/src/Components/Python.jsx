import React from "react";
import pythonimg from "../assets/python.jpg";

const Python = () => {
  return (
    <>
      <h1>Python</h1>
      <img src={pythonimg}></img>

      <p>
        Python is a high-level, general-purpose programming language designed
        for readability, emphasizing the use of significant indentation. It
        supports multiple programming paradigms, including object-oriented,
        procedural, functional, and structured programming. Python is
        dynamically type-checked and garbage-collected, making it easy to learn
        and powerful for various applications such as website development,
        software creation, task automation, data analysis, and visualization.
        Developed by Guido van Rossum, Python first appeared on February 20,
        1991, as a successor to the ABC programming language. The latest stable
        release as of today is Python 3.13.3, which was released on April 8,
        2025. Python is often described as a "batteries included" language due
        to its comprehensive standard library, which includes a wide range of
        modules and tools for various tasks. It is freely available for all
        major platforms and can be extended with new functions and data types
        implemented in C or C++
      </p>
    </>
  );
};

export default Python;
