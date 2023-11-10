// MyAddressPage.jsx
import React from 'react';
import './MyAddressPage.css'; // Correct the import path

const MyAddressPage = () => {
  return (
    <div className="my-address-container">
      <h2>My Address Page</h2>
      <div className="address-list">
        <div className="address-card">
          <h3>Home</h3>
          <p>
            John Doe
            <br />
            123 Main Street
            <br />
            Cityville, State 12345
          </p>
          <button>Edit Address</button>
        </div>
        <div className="address-card">
          <h3>Work</h3>
          <p>
            Jane Doe
            <br />
            456 Business Avenue
            <br />
            Work City, State 67890
          </p>
          <button>Edit Address</button>
        </div>
      </div>
      {/* Add more content specific to My Address */}
    </div>
  );
};

export default MyAddressPage;
