import React from 'react';

function Login(props) {
  const login = () => {
    const email = document.querySelector('input[name="email"]').value;
    const password = document.querySelector('input[name="password"]').value;

    // Retrieve stored credentials from local storage
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('password');

    // Check if input matches stored credentials
    if (email === storedEmail && password === storedPassword) {
      alert('Login successful!');
      
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <div className="text">Login</div>
      <form>
        <div className="data">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div className="data">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
       
        <div className="btn">
          <button type="button" onClick={login}>Login</button>
        </div>
        <div className="signup-link">
          New User ? Register{' '}
          <button className="link-btn" onClick={() => props.onFormSwitch('register')}>here</button>
        </div>
      </form>
    </div>
  );
}

export default Login;