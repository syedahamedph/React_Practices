import React from "react";

const Variables = () => {
  return (
    <div className="topic-content-rich">
      <h2>Java Variables: The Foundation of Data Storage</h2>
      <p>
        In Java, <strong>variables</strong> are fundamental building blocks that allow you to store, modify, and retrieve data in your programs. Understanding variables is essential for writing effective and efficient Java code. This guide covers everything you need to know about variables in Java, from basic syntax to advanced best practices.
      </p>

      <h3>What is a Variable?</h3>
      <p>
        A variable is a named memory location that holds a value. In Java, every variable must have a <strong>type</strong>, which determines what kind of data it can store (e.g., numbers, text, objects).
      </p>

      <h3>Declaring and Initializing Variables</h3>
      <p>To declare a variable in Java, specify the type followed by the variable name:</p>
      <pre className="code-block">
{`int age;
String name;`}
      </pre>
      <p>You can also initialize a variable at the time of declaration:</p>
      <pre className="code-block">
{`int age = 25;
String name = "John";`}
      </pre>

      <h3>Types of Variables in Java</h3>
      <ul>
        <li><strong>Local Variables:</strong> Declared inside methods, constructors, or blocks. Only accessible within that scope.</li>
        <li><strong>Instance Variables:</strong> Declared inside a class but outside any method. Each object has its own copy.</li>
        <li><strong>Static Variables:</strong> Declared with the <code>static</code> keyword. Shared among all instances of a class.</li>
      </ul>

      <h3>Primitive Data Types</h3>
      <p>Java supports several built-in data types:</p>
      <ul>
        <li><strong>int</strong> - Integer numbers (e.g., 42)</li>
        <li><strong>double</strong> - Decimal numbers (e.g., 3.14)</li>
        <li><strong>char</strong> - Single characters (e.g., 'A')</li>
        <li><strong>boolean</strong> - true or false</li>
        <li><strong>byte, short, long, float</strong> - Other numeric types</li>
      </ul>

      <h3>Variable Naming Rules</h3>
      <ul>
        <li>Must start with a letter, <code>_</code>, or <code>$</code></li>
        <li>Cannot start with a digit</li>
        <li>Case-sensitive (e.g., <code>age</code> and <code>Age</code> are different)</li>
        <li>No spaces or special characters (except <code>_</code> and <code>$</code>)</li>
        <li>Should be descriptive (e.g., <code>studentName</code> instead of <code>s</code>)</li>
      </ul>

      <h3>Examples</h3>
      <pre className="code-block">
{`// Local variable
int score = 100;

// Instance variable
public class Student {
  String name; // instance variable
}

// Static variable
static int studentCount = 0;`}
      </pre>

      <h3>Best Practices</h3>
      <ul>
        <li>Use meaningful names that describe the purpose of the variable.</li>
        <li>Initialize variables before use to avoid errors.</li>
        <li>Keep variable scope as limited as possible.</li>
        <li>Use <code>final</code> for constants.</li>
      </ul>

      <div className="tip-box">
        <strong>Tip:</strong> Always initialize your variables! Uninitialized variables can cause compile-time errors in Java.
      </div>

      <h3>Further Learning</h3>
      <ul>
        <li><a href="https://docs.oracle.com/javase/tutorial/java/nutsandbolts/variables.html" target="_blank" rel="noopener noreferrer">Official Java Variables Tutorial</a></li>
        <li><a href="https://www.youtube.com/watch?v=sxF4YAlcoZ0" target="_blank" rel="noopener noreferrer">Watch Variables Tutorial (YouTube)</a></li>
      </ul>
    </div>
  );
};

export default Variables;
