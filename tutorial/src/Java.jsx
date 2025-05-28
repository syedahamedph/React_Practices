import React from "react";
import javaimg from "./assets/cG5n.jpg";

const Java = () => {
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
    </>
  );
};

export default Java;
