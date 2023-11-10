import React from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css'; // Import your CSS file for styling


function LoginPage() {
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" />
        </div>
        <Link to="/HomePage2" className="login-button">
          Login
        </Link>
      </form>
    </div>
  );
}

export default LoginPage;
