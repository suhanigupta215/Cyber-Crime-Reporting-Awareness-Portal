import React from "react";

function Navbar({ page, setPage, loggedIn, username, onLogout }) {
  const links = [
    { id: "home",    label: "🏠 Home" },
    { id: "report",  label: "📝 File Complaint" },
    { id: "track",   label: "🔍 Track Status" },
    { id: "alerts",  label: "⚠️ Scam Alerts" },
    { id: "stats",   label: "📊 Statistics" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        {/* India flag colours in the logo */}
        <span style={{ color: "#FF9933" }}>Cyber</span>
        <span style={{ color: "white" }}>Shield</span>
        <span style={{ color: "#138808" }}> India</span>
      </div>

      <div className="navbar-links">
        {links.map((link) => (
          <button
            key={link.id}
            className={page === link.id ? "active" : ""}
            onClick={() => setPage(link.id)}
          >
            {link.label}
          </button>
        ))}
      </div>

      {/* Show user name and logout if logged in, otherwise show Login button */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        {loggedIn ? (
          <>
            <span style={{ color: "#94a3b8", fontSize: "13px" }}>
              👤 {username}
            </span>
            <button className="logout-btn" onClick={onLogout}>
              Logout
            </button>
          </>
        ) : (
          <button className="login-nav-btn" onClick={() => setPage("login")}>
            🔑 Login
          </button>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
