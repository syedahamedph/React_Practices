import React, { useState } from "react";
import pythonimg from "../assets/python.jpg";
import PythonIntro from "./PythonTopics/PythonIntro";
import PyVariables from "./PythonTopics/PyVariables";
import PyControlFlow from "./PythonTopics/PyControlFlow";
import PyFunctions from "./PythonTopics/PyFunction";
import PyOpp from "./PythonTopics/PyOpp";
import "../CssFiles/Python.css";

const Python = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleOpen = (topic) => {
    setSelectedTopic(topic);
  };

  const renderTopicComponent = () => {
    switch (selectedTopic) {
      case "introduction":
        return <PythonIntro />;
      case "variables":
        return <PyVariables />;
      case "controlflow":
        return <PyControlFlow />;
      case "functions":
        return <PyFunctions />;
      case "oop":
        return <PyOpp />;
      default:
        return null;
    }
  };

  const topics = [
    {
      id: "introduction",
      title: "Introduction",
      description: "Overview of Python and its key features."
    },
    {
      id: "variables",
      title: "Variables and Data Types",
      description: "Learn about variables, data types, and dynamic typing in Python."
    },
    {
      id: "controlflow",
      title: "Control Flow",
      description: "Master if-else, loops, and control flow statements in Python."
    },
    {
      id: "functions",
      title: "Functions",
      description: "Understand function definition, arguments, and return values in Python."
    },
    {
      id: "oop",
      title: "Object-Oriented Programming",
      description: "Learn about classes, objects, inheritance, and OOP principles in Python."
    }
  ];

  return (
    <div className="programming-language">
      <header className="language-header">
        <h1 className="language-title">Python Programming</h1>
        <p className="language-description">
          Python is a high-level, general-purpose programming language designed for readability, emphasizing the use of significant indentation. It supports multiple programming paradigms, including object-oriented, procedural, functional, and structured programming. Python is dynamically type-checked and garbage-collected, making it easy to learn and powerful for various applications such as website development, software creation, task automation, data analysis, and visualization.
        </p>
      </header>

      <div className="content-container">
        <div className="topics-grid">
          {topics.map((topic) => (
            <div key={topic.id} className="topic-card">
              <div className="topic-header">
                <h3 className="topic-title">{topic.title}</h3>
                <p className="topic-description">{topic.description}</p>
              </div>
              <div className="topic-content">
                <button
                  className="hero-cta"
                  onClick={() => handleOpen(topic.id)}
                >
                  Learn {topic.title}
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedTopic && (
          <div className="topic-component">
            {renderTopicComponent()}
          </div>
        )}
      </div>
    </div>
  );
};

export default Python;
