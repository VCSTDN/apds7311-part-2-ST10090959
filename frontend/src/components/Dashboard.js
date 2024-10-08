// src/components/Dashboard.js

import React, { useState } from 'react';
import '../dashboard.scss'; // Import the styles for the dashboard here

const Dashboard = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleSidebar = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`dashboard ${isActive ? 'active' : ''}`}>
      <nav className="sidebar">
        <button onClick={toggleSidebar} className="toggle-btn">☰</button>
        <h2>Dashboard</h2>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#clients">Clients</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <main className="main-content">
        <header>
          <h1>Welcome to the Dashboard</h1>
        </header>
        <section>
          <p>Your content goes here...</p>
          {/* Add more sections or content as needed */}
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
