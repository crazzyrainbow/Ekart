import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import MyAccountPage from './components/MyAccountPage';
import MyAddressPage from './components/MyAddressPage';
import HomePage2 from './components/HomePage2';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/signup" component={SignupPage} />
          <Route path="/homepage2" component={HomePage2} />
          <Route path="/Footer" component={Footer} />
          <Route path="/my-account" component={MyAccountPage} />
          <Route path="/my-address" component={MyAddressPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
