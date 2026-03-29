import React, { useState } from "react";
import { fraudDetails } from "../data";

// The list of fraud types shown in the "What We Handle" section
const fraudCards = [
  { title: "UPI & Bank Fraud",     icon: "💳", desc: "Unauthorized transactions, fake payment links, OTP theft, and account hacking." },
  { title: "Phishing",             icon: "🎣", desc: "Fake websites, SMS, and emails designed to steal your login credentials." },
  { title: "Identity Theft",       icon: "🪪", desc: "Misuse of Aadhaar, PAN card, or other personal documents for fraud." },
  { title: "Social Media Fraud",   icon: "📱", desc: "Fake profiles, investment scams, and impersonation on social platforms." },
  { title: "Online Shopping Fraud",icon: "🛒", desc: "Fake sellers, non-delivery of products, and counterfeit goods online." },
  { title: "Ransomware",           icon: "💻", desc: "Malicious software that locks your files and demands payment to unlock." },
];

function Home({ setPage }) {
  // Tracks which card is being hovered — stores the card title or null
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="page">

      {/* Hero Banner — India colours */}
      <div className="hero">
        <h1>India's <span>Cyber Crime</span><br />Reporting Portal</h1>
        <p>
          Report online fraud, phishing attacks, UPI scams, and other cyber crimes from
          anywhere in India. Our dedicated team responds to every complaint within 48 hours.
        </p>
        <div className="hero-btns">
          <button className="btn-saffron" onClick={() => setPage("report")}>
            🚨 File a Complaint
          </button>
          <button className="btn-outline" onClick={() => setPage("track")}>
            🔍 Track Your Case
          </button>
        </div>
      </div>

      {/* What We Handle — hover to see more info + news */}
      <p className="page-title">What We Handle</p>
      <p style={{ fontSize: "13px", color: "#64748b", marginBottom: "16px" }}>
        💡 Hover over any card to learn more and see related news from across India.
      </p>

      <div className="info-grid">
        {fraudCards.map((card) => {
          const detail = fraudDetails[card.title];
          const isHovered = hoveredCard === card.title;

          return (
            <div
              key={card.title}
              className={`info-card ${isHovered ? "info-card-hovered" : ""}`}
              onMouseEnter={() => setHoveredCard(card.title)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Default view */}
              {!isHovered && (
                <>
                  <div className="icon">{card.icon}</div>
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </>
              )}

              {/* Expanded view on hover */}
              {isHovered && detail && (
                <div className="card-hover-content">
                  <h3 style={{ marginBottom: "6px", color: "#0f172a" }}>
                    {card.icon} {card.title}
                  </h3>
                  <p style={{ fontSize: "11.5px", color: "#475569", marginBottom: "10px", lineHeight: "1.5" }}>
                    {detail.extra}
                  </p>
                  <p style={{ fontSize: "11px", fontWeight: "700", color: "#FF9933", marginBottom: "6px" }}>
                    📰 Related News from India
                  </p>
                  {detail.news.map((n, i) => (
                    <div key={i} className="hover-news-item">
                      <p className="hover-news-headline">{n.headline}</p>
                      <p className="hover-news-source">— {n.source}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Helpline */}
      <div className="helpline-box">
        📞 <strong>National Cyber Crime Helpline: 1930</strong>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        🌐 <strong>cybercrime.gov.in</strong>
        &nbsp;&nbsp;|&nbsp;&nbsp;
        Available 24 × 7 across India
      </div>

    </div>
  );
}

export default Home;
