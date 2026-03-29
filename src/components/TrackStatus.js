import React, { useState } from "react";

// Props from App.js:
// complaints      — the live shared list (includes newly filed ones)
// deleteComplaint — removes a complaint from the list by id
function TrackStatus({ complaints, deleteComplaint }) {

  const [statusFilter, setStatusFilter] = useState("All");
  const [searchText,   setSearchText]   = useState("");

  // Stores the id of complaint the user wants to withdraw
  // null means the confirm popup is hidden
  const [confirmId, setConfirmId] = useState(null);

  const statusList = ["All", "Filed", "Under Review", "Action Taken"];

  // Count complaints in each stage for the pipeline display
  const filedCount  = complaints.filter((c) => c.status === "Filed").length;
  const reviewCount = complaints.filter((c) => c.status === "Under Review").length;
  const doneCount   = complaints.filter((c) => c.status === "Action Taken").length;

  // Filter the list based on search text and selected status chip
  const filtered = complaints.filter((c) => {
    const matchStatus = statusFilter === "All" || c.status === statusFilter;
    const s = searchText.toLowerCase();
    const matchSearch =
      c.id.toLowerCase().includes(s)   ||
      c.type.toLowerCase().includes(s) ||
      c.area.toLowerCase().includes(s);
    return matchStatus && matchSearch;
  });

  // Returns the right CSS class for the status badge colour
  function getBadge(status) {
    if (status === "Filed")        return "badge badge-filed";
    if (status === "Under Review") return "badge badge-review";
    if (status === "Action Taken") return "badge badge-action";
    return "badge";
  }

  // User clicks Withdraw — store the id and show the confirm popup
  function handleWithdrawClick(id) {
    setConfirmId(id);
  }

  // User confirms withdrawal — delete and close popup
  function handleConfirm() {
    deleteComplaint(confirmId);
    setConfirmId(null);
  }

  return (
    <div className="page">
      <p className="page-title">🔍 Track Complaint Status</p>

      {/* Pipeline — shows live count in each stage */}
      <div className="card">
        <p style={{ fontWeight: "600", marginBottom: "14px", fontSize: "14px" }}>
          Live Status Overview
        </p>
        <div className="pipeline">
          <div className="pipeline-step">
            <div className="p-icon">📋</div>
            <div className="p-count" style={{ color: "#3b82f6" }}>{filedCount}</div>
            <div className="p-label">Filed</div>
          </div>
          <div className="p-arrow">›</div>
          <div className="pipeline-step">
            <div className="p-icon">🔍</div>
            <div className="p-count" style={{ color: "#f97316" }}>{reviewCount}</div>
            <div className="p-label">Under Review</div>
          </div>
          <div className="p-arrow">›</div>
          <div className="pipeline-step done">
            <div className="p-icon">✅</div>
            <div className="p-count">{doneCount}</div>
            <div className="p-label">Action Taken</div>
          </div>
        </div>
      </div>

      {/* Search box + filter chips */}
      <div className="filter-bar">
        <input
          className="search-input"
          placeholder="🔍 Search by ID, type, or area..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        {statusList.map((s) => (
          <button
            key={s}
            className={statusFilter === s ? "chip active" : "chip"}
            onClick={() => setStatusFilter(s)}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Small count line */}
      <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "12px" }}>
        Showing <strong>{filtered.length}</strong> of <strong>{complaints.length}</strong> complaints
      </p>

      {/* Complaints table */}
      <div className="card">
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Complaint ID</th>
                <th>Crime Type</th>
                <th>Area</th>
                <th>Date Filed</th>
                <th>Amount (₹)</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length > 0 ? (
                filtered.map((c) => (
                  <tr key={c.id}>
                    <td><span className="comp-id">{c.id}</span></td>
                    <td>{c.type}</td>
                    <td>{c.area}</td>
                    <td>{c.date}</td>
                    <td>{c.amount}</td>
                    <td><span className={getBadge(c.status)}>{c.status}</span></td>
                    <td>
                      {/* Only "Filed" complaints can be withdrawn */}
                      {c.status === "Filed" ? (
                        <button
                          className="withdraw-btn"
                          onClick={() => handleWithdrawClick(c.id)}
                        >
                          🗑️ Withdraw
                        </button>
                      ) : (
                        <span style={{ fontSize: "12px", color: "#94a3b8" }}>—</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="7" style={{ textAlign: "center", color: "#94a3b8", padding: "28px" }}>
                    No complaints found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <p style={{ fontSize: "12px", color: "#94a3b8", marginTop: "-8px" }}>
        * Only <strong>Filed</strong> complaints can be withdrawn. Complaints under review or resolved cannot be withdrawn.
      </p>

      {/* Confirm Withdraw popup */}
      {confirmId && (
        <div className="modal-bg">
          <div className="modal">
            <div className="big-icon">⚠️</div>
            <h2>Withdraw Complaint?</h2>
            <p className="modal-note">
              Are you sure you want to withdraw complaint <strong>{confirmId}</strong>?
              This cannot be undone.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
              <button className="btn-secondary" onClick={() => setConfirmId(null)}>
                Cancel
              </button>
              <button className="btn-red" onClick={handleConfirm}>
                Yes, Withdraw
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default TrackStatus;
