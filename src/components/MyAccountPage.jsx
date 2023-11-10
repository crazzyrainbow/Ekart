// MyAccountPage.jsx
import React from 'react';
import './MyAccountPage.css'; // Import your CSS file for styling

const MyAccountPage = () => {
  return (
    <div className="my-account-container">
      <h2>My Account Page</h2>
      <div className="account-details">
        <div className="profile-section">
          <h3>Profile Information</h3>
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Email:</strong> john.doe@example.com
          </p>
        </div>
        <div className="orders-section">
          <h3>Order History</h3>
          <p>No recent orders.</p>
        </div>
      </div>
      {/* Add more content specific to My Account */}
    </div>
  );
};

export default MyAccountPage;
