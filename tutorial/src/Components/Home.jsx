import React from "react";
import { Link } from "react-router-dom";
import "../CssFiles/Home.css";

export default function Home() {
  return (
    <div className="home">
      <section className="hero-section">
        <h1 className="hero-title">Welcome to TUTORIALbySyed</h1>
        <p className="hero-subtitle">
          Master programming with our comprehensive courses in Java, Python, and SQL.
          Start your coding journey today!
        </p>
        <Link to="/java" className="hero-cta">
          Get Started
        </Link>
      </section>

      <section className="features-section">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">☕</div>
            <h3 className="feature-title">Java Programming</h3>
            <p className="feature-description">
              Learn Java from basics to advanced concepts. Master object-oriented programming,
              data structures, and algorithms.
            </p>
            <Link to="/java" className="hero-cta mt-2">
              Learn Java
            </Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🐍</div>
            <h3 className="feature-title">Python Development</h3>
            <p className="feature-description">
              Explore Python's versatility in web development, data science, and automation.
              Start with the basics and build real-world projects.
            </p>
            <Link to="/python" className="hero-cta mt-2">
              Learn Python
            </Link>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🗄️</div>
            <h3 className="feature-title">SQL Mastery</h3>
            <p className="feature-description">
              Master database management with SQL. Learn to create, query, and optimize
              databases for efficient data handling.
            </p>
            <Link to="/sql" className="hero-cta mt-2">
              Learn SQL
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
