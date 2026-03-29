import React, { useState, useRef } from "react";
import { crimeTypes } from "../data";

// Props received from App.js:
// addComplaint — adds the new complaint to the shared list
// setPage      — navigates to Track Status after submission
function ReportForm({ addComplaint, setPage }) {

  // All form field values in one object
  const [form, setForm] = useState({
    name:        "",
    phone:       "",
    email:       "",
    area:        "",
    category:    "",
    date:        "",
    amount:      "",
    suspect:     "",
    description: "",
  });

  // Error messages for each field
  const [errors, setErrors] = useState({});

  // The file the user uploads as evidence
  const [file, setFile] = useState(null);

  // Controls the success popup
  const [showModal, setShowModal] = useState(false);

  // The complaint ID shown in the popup
  const [complaintId, setComplaintId] = useState("");

  // Used to open the hidden file input when user clicks the upload box
  const fileRef = useRef();

  // Updates the form state when user types in any field
  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    // Clear that field's error as the user types
    if (errors[name]) {
      setErrors({ ...errors, [name]: "" });
    }
  }

  // Checks all required fields — returns an object with error messages
  function validate() {
    let newErrors = {};

    if (form.name.trim() === "") {
      newErrors.name = "Please enter your full name.";
    }
    if (!/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }
    if (!form.email.includes("@") || !form.email.includes(".")) {
      newErrors.email = "Enter a valid email address.";
    }
    if (form.area.trim() === "") {
      newErrors.area = "Please enter your area or district.";
    }
    if (form.category === "") {
      newErrors.category = "Please select a crime category.";
    }
    if (form.date === "") {
      newErrors.date = "Please select the date of the incident.";
    }
    if (form.description.trim().length < 30) {
      newErrors.description = "Please describe the incident in at least 30 characters.";
    }

    return newErrors;
  }

  // Called when user clicks "Submit Complaint"
  function handleSubmit() {
    const foundErrors = validate();

    // If there are errors, show them and stop
    if (Object.keys(foundErrors).length > 0) {
      setErrors(foundErrors);
      return;
    }

    // Generate a unique complaint ID
    const newId = "CC-2025-" + (Math.floor(Math.random() * 900) + 100);

    // Get today's date in YYYY-MM-DD format
    const today = new Date().toISOString().split("T")[0];

    // Build the complaint object that will appear in Track Status
    const newComplaint = {
      id:     newId,
      type:   form.category,
      status: "Filed",          // always starts as Filed
      date:   today,
      amount: form.amount !== "" ? form.amount : "N/A",
      area:   form.area,
    };

    // Send it to App.js to add to the shared complaints list
    addComplaint(newComplaint);

    // Show the success modal
    setComplaintId(newId);
    setShowModal(true);
  }

  // Resets the form
  function clearForm() {
    setForm({ name: "", phone: "", email: "", area: "", category: "", date: "", amount: "", suspect: "", description: "" });
    setErrors({});
    setFile(null);
  }

  // Called when user clicks "Done" in the success modal
  function handleDone() {
    clearForm();
    setShowModal(false);
    setPage("track"); // Go to Track Status so user can see their new complaint
  }

  return (
    <div className="page">
      <p className="page-title">📝 File a Cyber Crime Complaint</p>

      <div className="card">
        <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "20px" }}>
          ✅ All details are kept strictly confidential. Fields marked <strong>*</strong> are required.
        </p>

        {/* Row 1: Name + Phone */}
        <div className="form-row">
          <div className="form-group">
            <label>Full Name *</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Suhani Gupta"
              className={errors.name ? "has-error" : ""}
            />
            {errors.name && <span className="error-msg">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label>Phone Number *</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              maxLength={10}
              className={errors.phone ? "has-error" : ""}
            />
            {errors.phone && <span className="error-msg">{errors.phone}</span>}
          </div>
        </div>

        {/* Row 2: Email + Area */}
        <div className="form-row">
          <div className="form-group">
            <label>Email Address *</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className={errors.email ? "has-error" : ""}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Area / District *</label>
            <input
              name="area"
              value={form.area}
              onChange={handleChange}
              placeholder="e.g. Indore, Madhya Pradesh"
              className={errors.area ? "has-error" : ""}
            />
            {errors.area && <span className="error-msg">{errors.area}</span>}
          </div>
        </div>

        {/* Row 3: Category + Date */}
        <div className="form-row">
          <div className="form-group">
            <label>Crime Category *</label>
            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className={errors.category ? "has-error" : ""}
            >
              <option value="">-- Select a category --</option>
              {crimeTypes.map((type) => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            {errors.category && <span className="error-msg">{errors.category}</span>}
          </div>
          <div className="form-group">
            <label>Date of Incident *</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className={errors.date ? "has-error" : ""}
            />
            {errors.date && <span className="error-msg">{errors.date}</span>}
          </div>
        </div>

        {/* Row 4: Amount + Suspect (optional) */}
        <div className="form-row">
          <div className="form-group">
            <label>Amount Lost (₹) — Optional</label>
            <input
              name="amount"
              value={form.amount}
              onChange={handleChange}
              placeholder="e.g. 5000"
            />
          </div>
          <div className="form-group">
            <label>Suspect Info — Optional</label>
            <input
              name="suspect"
              value={form.suspect}
              onChange={handleChange}
              placeholder="Phone / UPI ID / account number"
            />
          </div>
        </div>

        {/* Description */}
        <div className="form-row single">
          <div className="form-group">
            <label>What Happened? * (at least 30 characters)</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Describe how the fraud happened — how you were contacted, what was said, what you lost..."
              className={errors.description ? "has-error" : ""}
            />
            <span className="char-count">{form.description.length} characters</span>
            {errors.description && <span className="error-msg">{errors.description}</span>}
          </div>
        </div>

        {/* File Upload */}
        <div className="form-row single">
          <div className="form-group">
            <label>Upload Evidence — Optional</label>
            <div className="upload-box" onClick={() => fileRef.current.click()}>
              📎 Click to upload a screenshot or PDF (max 10 MB)
              <input
                ref={fileRef}
                type="file"
                accept="image/*,.pdf"
                style={{ display: "none" }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            {file && (
              <div className="file-preview">
                <span>{file.type.includes("pdf") ? "📄" : "🖼️"}</span>
                <span>{file.name}</span>
                <span style={{ color: "#94a3b8", fontSize: "12px" }}>
                  ({(file.size / 1024).toFixed(1)} KB)
                </span>
                <button onClick={() => setFile(null)}>✕</button>
              </div>
            )}
          </div>
        </div>

        {/* Form action buttons */}
        <div className="form-actions">
          <button className="btn-secondary" onClick={clearForm}>Clear</button>
          <button className="btn-primary" onClick={handleSubmit}>Submit Complaint →</button>
        </div>
      </div>

      {/* Success modal — shown after successful submission */}
      {showModal && (
        <div className="modal-bg" onClick={handleDone}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <div className="big-icon">✅</div>
            <h2>Complaint Submitted!</h2>
            <p className="sub">Your reference number is:</p>
            <div className="complaint-id-box">{complaintId}</div>
            <p className="modal-note">
              Your complaint has been received by the Cyber Crime Cell.
              Authorities will contact you within <strong>48 hours</strong>.
              Save this ID to track your complaint.
            </p>
            <button className="btn-primary" onClick={handleDone}>
              View in Track Status →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ReportForm;
