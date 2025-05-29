import React, { useState } from "react";
import sqlimg from "../assets/sql.jpg";
import SqlIntro from "./SqlTopics/SqlIntro";
import SelectQueries from "./SqlTopics/SelectQueries";
import Joins from "./SqlTopics/Joins";
import AggregateFunctions from "./SqlTopics/AggregateFunctions";
import Subqueries from "./SqlTopics/Subqueries";
import "../CssFiles/Sql.css";

const Sql = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleOpen = (topic) => {
    setSelectedTopic(topic);
  };

  const renderTopicComponent = () => {
    switch (selectedTopic) {
      case "introduction":
        return <SqlIntro />;
      case "select":
        return <SelectQueries />;
      case "joins":
        return <Joins />;
      case "aggregate":
        return <AggregateFunctions />;
      case "subqueries":
        return <Subqueries />;
      default:
        return null;
    }
  };

  const topics = [
    {
      id: "introduction",
      title: "Introduction to SQL",
      description: "Overview of SQL and its importance in database management."
    },
    {
      id: "select",
      title: "SELECT Queries",
      description: "Learn how to retrieve data from databases using SELECT statements."
    },
    {
      id: "joins",
      title: "Joins",
      description: "Master different types of joins to combine data from multiple tables."
    },
    {
      id: "aggregate",
      title: "Aggregate Functions",
      description: "Understand aggregate functions like COUNT, SUM, AVG, MIN, and MAX."
    },
    {
      id: "subqueries",
      title: "Subqueries",
      description: "Learn how to use subqueries for advanced data retrieval."
    }
  ];

  return (
    <div className="programming-language">
      <header className="language-header">
        <h1 className="language-title">SQL Programming</h1>
        <p className="language-description">
          SQL, or Structured Query Language, is a programming language designed to manage and manipulate data stored in relational database management systems. It allows users to retrieve, insert, update, and delete data efficiently. SQL is widely used across various industries and is supported by many database systems like MySQL, MS SQL Server, Oracle, and PostgreSQL.
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

export default Sql;
