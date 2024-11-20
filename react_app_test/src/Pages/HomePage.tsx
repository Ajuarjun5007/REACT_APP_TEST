import React from "react";
import "../Styles/Home.css";

const HomePage: React.FC = () => {
  return (
    <div className="homepage-container">
      <header className="homepage-header">
        <h1 className="homepage-greeting">Hello, Site Engineer</h1>
      </header>
      <main className="homepage-main">
        <p className="homepage-description">
          Welcome to your dashboard.
        </p>
      </main>
    </div>
  );
};

export default HomePage;
