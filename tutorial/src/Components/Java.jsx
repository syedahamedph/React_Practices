import React, { useState } from "react";
import javaimg from "../assets/cG5n.jpg";
import Variables from "./JavaTopics/Variables";
import Loops from "./JavaTopics/Loops";
import Function from "./JavaTopics/Function";
import "../CssFiles/ProgrammingLanguage.css";

const Java = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleOpen = (topic) => {
    setSelectedTopic(topic);
  };

  const renderTopicComponent = () => {
    switch (selectedTopic) {
      case "variables":
        return <Variables />;
      case "loops":
        return <Loops />;
      case "functions":
        return <Function />;
      default:
        return null;
    }
  };

  const topics = [
    {
      id: "variables",
      title: "Variables",
      description: "Learn about different types of variables in Java and how to use them effectively."
    },
    {
      id: "loops",
      title: "Loops",
      description: "Master different types of loops and control flow in Java programming."
    },
    {
      id: "functions",
      title: "Functions",
      description: "Understand function declaration, parameters, and return types in Java."
    },
    {
      id: "oop",
      title: "Object-Oriented Programming",
      description: "Learn the core concepts of OOP including classes, objects, inheritance, and polymorphism."
    },
    {
      id: "exceptions",
      title: "Exception Handling",
      description: "Master error handling and exception management in Java applications."
    }
  ];

  return (
    <div className="programming-language">
      <header className="language-header">
        <h1 className="language-title">Java Programming</h1>
        <p className="language-description">
          Java is a high-level, object-oriented programming language known for its
          "Write Once, Run Anywhere" (WORA) feature. It's widely used for building
          desktop applications, web applications, Android apps, and enterprise systems.
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

export default Java;
