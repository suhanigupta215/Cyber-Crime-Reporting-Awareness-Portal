import React from "react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line,
  PieChart, Pie, Cell, Legend,
} from "recharts";
import { indiaCategoryData, indiaMonthlyData } from "../data";

const COLORS = ["#FF9933", "#138808", "#000080", "#ef4444", "#8b5cf6", "#06b6d4", "#64748b"];

function Statistics({ complaints }) {

  // Summary boxes use the live complaints list (updates when new complaints are filed)
  const totalComplaints = complaints.length;
  const resolvedCount   = complaints.filter((c) => c.status === "Action Taken").length;
  const activeCount     = complaints.filter((c) => c.status === "Filed" || c.status === "Under Review").length;
  const resolutionRate  = totalComplaints > 0
    ? Math.round((resolvedCount / totalComplaints) * 100)
    : 0;

  return (
    <div className="page">
      <p className="page-title">📊 Statistics Dashboard</p>
      <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "20px" }}>
        📍 Charts show national data from across India (2024–2025). Summary boxes reflect live portal complaints.
      </p>

      {/* Summary boxes — live data from this portal */}
      <div className="stats-row">
        <div className="stat-card">
          <div className="s-num" style={{ color: "#0f172a" }}>{totalComplaints}</div>
          <div className="s-label">Portal Complaints</div>
        </div>
        <div className="stat-card">
          <div className="s-num" style={{ color: "#138808" }}>{resolvedCount}</div>
          <div className="s-label">Cases Resolved</div>
        </div>
        <div className="stat-card">
          <div className="s-num" style={{ color: "#000080" }}>{resolutionRate}%</div>
          <div className="s-label">Resolution Rate</div>
        </div>
        <div className="stat-card">
          <div className="s-num" style={{ color: "#FF9933" }}>{activeCount}</div>
          <div className="s-label">Active Cases</div>
        </div>
      </div>

      {/* Bar + Pie — India-wide data */}
      <div className="charts-grid">

        <div className="chart-card">
          <h3>Complaints by Category — All India</h3>
          <ResponsiveContainer width="100%" height={210}>
            <BarChart data={indiaCategoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis dataKey="name" tick={{ fontSize: 10 }} />
              <YAxis tick={{ fontSize: 11 }} />
              <Tooltip formatter={(val) => [val.toLocaleString(), "Complaints"]} />
              <Bar dataKey="count" radius={[4, 4, 0, 0]}>
                {indiaCategoryData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-card">
          <h3>Category Distribution — All India</h3>
          <ResponsiveContainer width="100%" height={210}>
            <PieChart>
              <Pie
                data={indiaCategoryData}
                dataKey="count"
                nameKey="name"
                cx="50%"
                cy="42%"
                outerRadius={68}
              >
                {indiaCategoryData.map((entry, index) => (
                  <Cell key={index} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(val) => [val.toLocaleString(), "Complaints"]} />
              <Legend iconType="circle" iconSize={8} wrapperStyle={{ fontSize: "11px" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

      </div>

      {/* Line chart — India monthly trend */}
      <div className="chart-card">
        <h3>Monthly Complaint Trend — All India (Sep 2024 – Mar 2025)</h3>
        <ResponsiveContainer width="100%" height={210}>
          <LineChart data={indiaMonthlyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
            <XAxis dataKey="month" tick={{ fontSize: 12 }} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip formatter={(val) => [val.toLocaleString(), "Complaints"]} />
            <Line
              type="monotone"
              dataKey="count"
              stroke="#FF9933"
              strokeWidth={2.5}
              dot={{ r: 4, fill: "#FF9933" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default Statistics;
