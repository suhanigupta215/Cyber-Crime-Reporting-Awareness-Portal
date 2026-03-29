import React, { useState } from "react";

// Mock user accounts for demo login
const DEMO_USERS = [
  { username: "suhani@gmail.com", password: "password123", name: "Suhani gupta" },
  { username: "priya@gmail.com", password: "priya456",    name: "Priya gupta"  },
  { username: "admin",           password: "admin",        name: "Admin User"   },
];

function Login({ onLoginSuccess, setPage }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error,    setError]    = useState("");

  function handleLogin() {
    // Check if username and password match any demo user
    const found = DEMO_USERS.find(
      (u) => u.username === username && u.password === password
    );

    if (found) {
      onLoginSuccess(found.name);
    } else {
      setError("Invalid username or password. Please try again.");
    }
  }

  // Allow pressing Enter to submit
  function handleKeyDown(e) {
    if (e.key === "Enter") handleLogin();
  }

  return (
    <div className="login-page">

      {/* India flag stripe at top */}
      <div className="flag-stripe">
        <div className="stripe saffron"></div>
        <div className="stripe white">
          <div className="ashoka-chakra">☸</div>
        </div>
        <div className="stripe green"></div>
      </div>

      <div className="login-box">
        <div className="login-logo">🛡️</div>
        <h2 className="login-title">CyberShield India</h2>
        <p className="login-subtitle">National Cyber Crime Reporting Portal</p>
        <p className="login-sub2">Sign in to file or track your complaint</p>

        <div className="form-group" style={{ marginBottom: "14px" }}>
          <label>Username / Email</label>
          <input
            value={username}
            onChange={(e) => { setUsername(e.target.value); setError(""); }}
            onKeyDown={handleKeyDown}
            placeholder="Enter your email or username"
          />
        </div>

        <div className="form-group" style={{ marginBottom: "8px" }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => { setPassword(e.target.value); setError(""); }}
            onKeyDown={handleKeyDown}
            placeholder="Enter your password"
          />
        </div>

        {/* Show error if login fails */}
        {error && <p className="login-error">{error}</p>}

        <button className="login-btn" onClick={handleLogin}>
          Sign In →
        </button>

        {/* Demo credentials hint */}
        <div className="demo-hint">
          <p>🔑 Demo credentials:</p>
          <p><strong>Username:</strong> admin &nbsp; <strong>Password:</strong> admin</p>
        </div>

        <p className="login-back" onClick={() => setPage("home")}>
          ← Back to Home
        </p>
      </div>

      {/* India flag stripe at bottom */}
      <div className="flag-stripe">
        <div className="stripe saffron"></div>
        <div className="stripe white"></div>
        <div className="stripe green"></div>
      </div>

    </div>
  );
}

export default Login;
