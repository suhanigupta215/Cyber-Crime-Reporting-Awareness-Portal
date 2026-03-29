import React, { useState } from "react";
import { scamAlerts } from "../data";

function ScamAlerts() {
  const [activeFilter, setActiveFilter] = useState("All");

  // Stores the alert the user clicked to read news about
  // null means the news modal is closed
  const [selectedAlert, setSelectedAlert] = useState(null);

  const categories = ["All", "UPI Fraud", "Phishing", "Identity Theft", "Social Media", "Ransomware"];

  const visibleAlerts =
    activeFilter === "All"
      ? scamAlerts
      : scamAlerts.filter((a) => a.type === activeFilter);

  return (
    <div className="page">
      <p className="page-title">⚠️ Recent Scam Alerts</p>

      {/* Filter chips */}
      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={activeFilter === cat ? "chip active" : "chip"}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "14px" }}>
        💡 Click on any alert card to read related news from across India.
      </p>

      {/* Alert cards — clicking opens a news modal */}
      {visibleAlerts.length > 0 ? (
        visibleAlerts.map((alert) => (
          <div
            key={alert.id}
            className={`alert-card ${alert.severity} alert-clickable`}
            onClick={() => setSelectedAlert(alert)}
          >
            <div className="alert-top">
              <span className="alert-title">{alert.title}</span>
              <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                <span className={`sev-tag ${alert.severity}`}>{alert.severity}</span>
                <span className="read-more-tag">📰 Read News</span>
              </div>
            </div>
            <p className="alert-desc">{alert.description}</p>
            <div className="alert-footer">
              <span>📅 {alert.date}</span>
              <span>🏷️ {alert.type}</span>
              <span>⚠️ {alert.reports.toLocaleString()} reports across India</span>
            </div>
          </div>
        ))
      ) : (
        <div className="card" style={{ textAlign: "center", color: "#94a3b8" }}>
          No alerts found for this category.
        </div>
      )}

      {/* Safety tips */}
      <p className="page-title" style={{ marginTop: "32px" }}>🔒 Safety Tips</p>
      <div className="info-grid">
        <div className="info-card">
          <div className="icon">🔐</div>
          <h3>Never Share Your OTP</h3>
          <p>No bank, government body, or company will ever ask for your OTP over a call.</p>
        </div>
        <div className="info-card">
          <div className="icon">🔗</div>
          <h3>Check Website Links</h3>
          <p>Before entering any password or payment detail, verify the site URL is correct.</p>
        </div>
        <div className="info-card">
          <div className="icon">📞</div>
          <h3>Hang Up on Scammers</h3>
          <p>Anyone threatening you or asking for money over a call is likely a scammer.</p>
        </div>
        <div className="info-card">
          <div className="icon">🏦</div>
          <h3>Report Immediately</h3>
          <p>If you lose money, call 1930 within minutes. Fast reporting increases recovery chances.</p>
        </div>
      </div>

      {/* News Modal — shown when user clicks an alert card */}
      {selectedAlert && (
        <div className="modal-bg" onClick={() => setSelectedAlert(null)}>
          <div className="news-modal" onClick={(e) => e.stopPropagation()}>

            {/* Modal header */}
            <div className="news-modal-header">
              <div>
                <span className={`sev-tag ${selectedAlert.severity}`} style={{ marginBottom: "6px", display: "inline-block" }}>
                  {selectedAlert.severity}
                </span>
                <h2 className="news-modal-title">{selectedAlert.title}</h2>
                <p style={{ fontSize: "13px", color: "#64748b", marginTop: "4px" }}>
                  🏷️ {selectedAlert.type} &nbsp;|&nbsp; ⚠️ {selectedAlert.reports.toLocaleString()} reports across India
                </p>
              </div>
              <button className="modal-close-btn" onClick={() => setSelectedAlert(null)}>✕</button>
            </div>

            {/* Alert description */}
            <p style={{ fontSize: "14px", color: "#374151", marginBottom: "20px", lineHeight: "1.6", padding: "12px", background: "#f8fafc", borderRadius: "8px" }}>
              {selectedAlert.description}
            </p>

            {/* News articles */}
            <p style={{ fontWeight: "700", fontSize: "14px", color: "#FF9933", marginBottom: "12px" }}>
              📰 Related News from Across India
            </p>

            {selectedAlert.news.map((n, i) => (
              <div key={i} className="news-article-card">
                <p className="news-article-headline">{n.headline}</p>
                <p className="news-article-source">{n.source} &nbsp;·&nbsp; {n.date}</p>
                <p className="news-article-summary">{n.summary}</p>
              </div>
            ))}

            <button className="btn-primary" style={{ width: "100%", marginTop: "8px" }} onClick={() => setSelectedAlert(null)}>
              Close
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

export default ScamAlerts;
