

import React from 'react';
import '../styles/TopBar.css';  // Import the corresponding CSS file for styling

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="left-section">

        <img src="logo.png" alt="Logo" />
      </div>
      <div className="right-section">
        <span className="profile-icon">Profile</span>
        <span className="notification-icon">Notification</span>
        <span className="profile-icon">Cart</span>
      </div>
    </div>
  );
}

export default TopBar;
