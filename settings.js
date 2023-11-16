import React from 'react';
import './index.css'; // Import the index.css file

function Settings() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-sidebar">
        <h2>Settings</h2>
        <ul>
          <li><a href="#profile">Profile</a></li>
          <li><a href="#account">Account</a></li>
          <li><a href="#notifications">Notifications</a></li>
          <li><a href="#privacy">Privacy</a></li>
        </ul>
      </div>
      <div className="dashboard-content">
        <div className="dashboard-card" id="profile">
          <h3>Profile Settings</h3>
          <p>Update your profile information, including name and profile picture.</p>
          {/*add profile settings here*/}
        </div>
        <div className="dashboard-card" id="account">
          <h3>Account Settings</h3>
          <p>Manage your account settings, such as email and password.</p>
          {/*add account settings here */}
        </div>
        <div className="dashboard-card" id="notifications">
          <h3>Notification Settings</h3>
          <p>Customize your notification preferences.</p>
          {/*add notification settings here */}
        </div>
        <div className="dashboard-card" id="privacy">
          <h3>Privacy Settings</h3>
          <p>Control your privacy options and data sharing settings.</p>
          {/*add privacy settings here */}
        </div>
      </div>
    </div>
  );
}

export default Settings;
