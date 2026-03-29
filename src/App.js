import React, { useState } from "react";
import "./App.css";

import Navbar      from "./components/Navbar";
import Login       from "./components/Login";
import Home        from "./components/Home";
import ReportForm  from "./components/ReportForm";
import TrackStatus from "./components/TrackStatus";
import ScamAlerts  from "./components/ScamAlerts";
import Statistics  from "./components/Statistics";

import { complaints as initialComplaints } from "./data";

function App() {
  const [page, setPage] = useState("home");

  // Login state — user must log in before filing a complaint
  const [loggedIn, setLoggedIn]   = useState(false);
  const [username, setUsername]   = useState("");

  // Shared complaints list used by ReportForm, TrackStatus and Statistics
  const [complaints, setComplaints] = useState(initialComplaints);

  // If user tries to go to "report" page without logging in,
  // we save where they wanted to go and send them to login first
  const [redirectAfterLogin, setRedirectAfterLogin] = useState(null);

  function handleSetPage(newPage) {
    if (newPage === "report" && !loggedIn) {
      // Remember they wanted to file a complaint, redirect after login
      setRedirectAfterLogin("report");
      setPage("login");
    } else {
      setPage(newPage);
    }
  }

  function handleLoginSuccess(name) {
    setLoggedIn(true);
    setUsername(name);
    // Go to where they were trying to go, or home
    setPage(redirectAfterLogin || "home");
    setRedirectAfterLogin(null);
  }

  function handleLogout() {
    setLoggedIn(false);
    setUsername("");
    setPage("home");
  }

  function addComplaint(newComplaint) {
    setComplaints([newComplaint, ...complaints]);
  }

  function deleteComplaint(id) {
    setComplaints(complaints.filter((c) => c.id !== id));
  }

  return (
    <div>
      {/* Navbar is hidden on the login page */}
      {page !== "login" && (
        <Navbar
          page={page}
          setPage={handleSetPage}
          loggedIn={loggedIn}
          username={username}
          onLogout={handleLogout}
        />
      )}

      {page === "login"  && <Login onLoginSuccess={handleLoginSuccess} setPage={setPage} />}
      {page === "home"   && <Home setPage={handleSetPage} />}
      {page === "report" && <ReportForm addComplaint={addComplaint} setPage={handleSetPage} />}
      {page === "track"  && <TrackStatus complaints={complaints} deleteComplaint={deleteComplaint} />}
      {page === "alerts" && <ScamAlerts />}
      {page === "stats"  && <Statistics complaints={complaints} />}

      {page !== "login" && (
        <footer className="footer">
          🛡️ CyberShield India &nbsp;|&nbsp;
          National Helpline: <strong>1930</strong> &nbsp;|&nbsp;
          © 2025 Ministry of Home Affairs, Government of India
        </footer>
      )}
    </div>
  );
}

export default App;
