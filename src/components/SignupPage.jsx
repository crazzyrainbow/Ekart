import React, { useState } from 'react';
import './SignupPage.css'; // Import your CSS file for styling

function SignupPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Simulate a signup process
    // Replace this with your actual signup logic
  
    // Assuming you have a state for email, password, and confirmPassword in your component
    const email = "example@email.com";
    const password = "password123";
    const confirmPassword = "password123"; // Confirm password entered by the user
  
    // Check if passwords match
    if (password !== confirmPassword) {
      // Handle password mismatch, show an error message, etc.
      console.error("Passwords do not match");
      return;
    }
  
    // You can use a service or API to create a new user
    // For example, using fetch to make a POST request to your registration endpoint
    fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          // Signup successful, you can redirect the user or update the UI as needed
        } else {
          // Signup failed, handle errors (e.g., show an error message)
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
  

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button className="signup-button" onClick={handleSignup}>
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignupPage;
