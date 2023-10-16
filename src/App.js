import React, { useState } from "react";
import './App.css';
import Login from "./Login";
import Register from "./Register";

function App() {
  const [currentForm, setCurrentForm] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);

  const switchToLogin = () => {
    setCurrentForm("login");
    setShowWelcome(false);
  }

  const switchToRegister = () => {
    setCurrentForm("register");
    setShowWelcome(false);
  }

  const switchToHome = () => {
    setCurrentForm(null);
    setShowWelcome(true);
  }

  return (

    <div className="App">
      <div className="navigation">
        <nav>
          <button onClick={switchToHome}>Home</button>
        </nav>
      </div>
      {showWelcome && (
        <div className="welcome">
        <h1>Welcome to the system !</h1>
        <p>Please choose an option to get started:</p>
        <div className="button-container">
          <button onClick={switchToLogin}>Login</button>
          <button onClick={switchToRegister}>Register</button>
        </div>
      </div>
      
      )}
      {currentForm === "login" && <Login />}
      {currentForm === "register" && <Register />}
    </div>
  );
}

export default App;
