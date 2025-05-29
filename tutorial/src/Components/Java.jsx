import React, { useState } from "react";
import javaimg from "../assets/cG5n.jpg";
import Variables from "./JavaTopics/Variables";
import Loops from "./JavaTopics/Loops";
import Function from "./JavaTopics/Function";
import "../CssFiles/Java.css";

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
    }
  };
  return (
    <>
      <h1>Java</h1>
      <img src={javaimg}></img>

      <p>
        Java is a high-level, object-oriented programming language developed by
        Sun Microsystems in 1995, now owned by Oracle. It is known for its
        "Write Once, Run Anywhere" (WORA) feature, which means Java code can be
        written once and run on any device or operating system with a Java
        Virtual Machine (JVM) installed. Java is widely used for building
        desktop applications, web applications, Android apps, and enterprise
        systems. The language is based on C and C++ and is designed to be
        platform-independent, secure, and reliable. Java's popularity among
        developers is due to its versatility, portability, and the availability
        of extensive libraries and frameworks
      </p>

      <div>
        <h2>Java Topics</h2>
        <table border="1">
          <thead>
            <tr>
              <th>Topic</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Variables</td>
              <td>
                <button onClick={() => handleOpen("variables")}>Open</button>
              </td>
            </tr>
            <tr>
              <td>Loops</td>
              <td>
                <button onClick={() => handleOpen("loops")}>Open</button>
              </td>
            </tr>
            <tr>
              <td>Functions</td>
              <td>
                <button onClick={() => handleOpen("functions")}>Open</button>
              </td>
            </tr>
          </tbody>
        </table>

        {/* Render the selected topic component here */}
        <div style={{ marginTop: "20px" }}>{renderTopicComponent()}</div>
      </div>
    </>
  );
};

export default Java;
