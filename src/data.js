// ── All mock data for CyberShield India ──

export const scamAlerts = [
  {
    id: 1,
    type: "UPI Fraud",
    title: "Fake KYC Update Scam",
    date: "2025-03-10",
    severity: "Critical",
    description: "Fraudsters posing as bank officials requesting OTP for KYC update via WhatsApp. Do not share any OTP with unknown callers.",
    reports: 4120,
    // News articles shown when user clicks Read More
    news: [
      {
        headline: "Man loses ₹3.5 lakh after sharing OTP with 'bank official' — Mumbai",
        source: "Times of India",
        date: "Mar 10, 2025",
        summary: "A Mumbai resident lost ₹3.5 lakh after being tricked by a caller pretending to be from SBI, asking for OTP to complete KYC verification.",
      },
      {
        headline: "Cyber cell arrests two in Bengaluru running fake KYC call centre",
        source: "Hindustan Times",
        date: "Mar 8, 2025",
        summary: "Bengaluru cyber police busted a fake call centre operating from Rajasthan that defrauded over 200 victims across India using fake KYC scam calls.",
      },
      {
        headline: "RBI issues fresh warning: Banks never ask for OTP on calls",
        source: "The Hindu",
        date: "Mar 5, 2025",
        summary: "The Reserve Bank of India reiterated that no legitimate bank will ever ask customers to share their OTP, CVV or internet banking password over a phone call.",
      },
    ],
  },
  {
    id: 2,
    type: "Phishing",
    title: "IRCTC Ticket Refund Email",
    date: "2025-03-08",
    severity: "High",
    description: "Fake IRCTC emails with malicious links promising ticket refunds. Always check the sender's email address carefully.",
    reports: 2890,
    news: [
      {
        headline: "Fake IRCTC refund emails circulating — 500 complaints in Delhi alone",
        source: "NDTV",
        date: "Mar 8, 2025",
        summary: "Delhi police cyber wing received over 500 complaints from people who received fake IRCTC refund emails and clicked on phishing links.",
      },
      {
        headline: "How to spot a fake IRCTC email — cybersecurity experts explain",
        source: "India Today",
        date: "Mar 6, 2025",
        summary: "Cybersecurity experts say users should always check that the sender domain is @irctc.co.in and never click links asking for bank details.",
      },
    ],
  },
  {
    id: 3,
    type: "Identity Theft",
    title: "Aadhaar-linked Loan Fraud",
    date: "2025-03-06",
    severity: "High",
    description: "Criminals using stolen Aadhaar details to apply for instant loans. Regularly check your credit score for unknown loans.",
    reports: 1780,
    news: [
      {
        headline: "Hyderabad techie finds ₹8 lakh loan in his name — never applied for it",
        source: "Deccan Chronicle",
        date: "Mar 6, 2025",
        summary: "A software engineer from Hyderabad discovered an ₹8 lakh loan taken in his name using his Aadhaar number that was stolen from a data breach.",
      },
      {
        headline: "Aadhaar data of 2 lakh people allegedly leaked, sold on dark web",
        source: "Economic Times",
        date: "Mar 3, 2025",
        summary: "Cybersecurity researchers flagged a dark web listing claiming to sell Aadhaar and PAN details of over 2 lakh Indian citizens stolen from insurance databases.",
      },
    ],
  },
  {
    id: 4,
    type: "Social Media",
    title: "Instagram Investment Scam",
    date: "2025-03-04",
    severity: "Medium",
    description: "Fake Instagram accounts promising high returns on crypto investments. These are fraudulent — never invest based on social media tips.",
    reports: 950,
    news: [
      {
        headline: "Pune student loses ₹1.2 lakh to crypto scammer on Instagram",
        source: "Pune Mirror",
        date: "Mar 4, 2025",
        summary: "A 22-year-old college student was lured into investing ₹1.2 lakh through a fake crypto trading app promoted by a scammer on Instagram posing as a financial advisor.",
      },
      {
        headline: "Meta removes 3,000 scam accounts targeting Indian users",
        source: "LiveMint",
        date: "Mar 1, 2025",
        summary: "Meta took down over 3,000 Instagram and Facebook accounts that were running investment scams targeting users in India, promising guaranteed high returns.",
      },
    ],
  },
  {
    id: 5,
    type: "Ransomware",
    title: "Hospital Data Ransomware",
    date: "2025-03-01",
    severity: "Critical",
    description: "Ransomware targeting hospital management systems across India. Keep systems updated and maintain offline backups.",
    reports: 340,
    news: [
      {
        headline: "AIIMS Delhi hit by ransomware attack — patient data of 3 crore at risk",
        source: "The Hindu",
        date: "Mar 1, 2025",
        summary: "AIIMS Delhi's servers were hit by a ransomware attack affecting patient records of an estimated 3 crore patients. CERT-In launched an immediate investigation.",
      },
      {
        headline: "Govt issues ransomware advisory for all hospitals after Delhi attack",
        source: "Indian Express",
        date: "Feb 28, 2025",
        summary: "The Ministry of Health directed all government hospitals to immediately take offline backups and update antivirus software following the AIIMS Delhi ransomware incident.",
      },
    ],
  },
];

export const complaints = [
  { id: "CC-2025-001", type: "UPI Fraud",     status: "Action Taken", date: "2025-02-15", amount: "12,000",   area: "Mumbai, Maharashtra" },
  { id: "CC-2025-002", type: "Phishing",       status: "Under Review", date: "2025-02-20", amount: "N/A",      area: "Delhi" },
  { id: "CC-2025-003", type: "Identity Theft", status: "Filed",        date: "2025-03-01", amount: "45,000",   area: "Bengaluru, Karnataka" },
  { id: "CC-2025-004", type: "Ransomware",     status: "Under Review", date: "2025-03-05", amount: "2,00,000", area: "Hyderabad, Telangana" },
  { id: "CC-2025-005", type: "Social Media",   status: "Action Taken", date: "2025-03-08", amount: "8,500",    area: "Pune, Maharashtra" },
  { id: "CC-2025-006", type: "UPI Fraud",      status: "Filed",        date: "2025-03-10", amount: "3,200",    area: "Chennai, Tamil Nadu" },
];

// India-wide statistics for the Statistics page charts
export const indiaCategoryData = [
  { name: "UPI Fraud",       count: 45200 },
  { name: "Phishing",        count: 32800 },
  { name: "Identity Theft",  count: 18600 },
  { name: "Ransomware",      count: 7400  },
  { name: "Social Media",    count: 21000 },
  { name: "Online Shopping", count: 28700 },
];

// India-wide monthly trend data
export const indiaMonthlyData = [
  { month: "Sep", count: 28400 },
  { month: "Oct", count: 31200 },
  { month: "Nov", count: 29800 },
  { month: "Dec", count: 38500 },
  { month: "Jan", count: 42100 },
  { month: "Feb", count: 39600 },
  { month: "Mar", count: 51800 },
];

export const crimeTypes = [
  "UPI Fraud",
  "Phishing",
  "Identity Theft",
  "Ransomware",
  "Social Media Fraud",
  "Online Shopping Fraud",
  "Other",
];

// Extra info shown when user hovers over a "What We Handle" card on the Home page
export const fraudDetails = {
  "UPI & Bank Fraud": {
    icon: "💳",
    extra: "In 2024, UPI fraud alone cost Indians over ₹1,087 crore. Scammers use fake payment links, QR codes and impersonate bank employees to steal money.",
    news: [
      { headline: "UPI fraud cases up 85% in 2024, RBI data shows", source: "Economic Times" },
      { headline: "₹1,087 crore lost to UPI scams in FY2024 — MHA report", source: "LiveMint" },
      { headline: "Man loses life savings of ₹18 lakh via fake Google Pay link in Jaipur", source: "Times of India" },
    ],
  },
  "Phishing": {
    icon: "🎣",
    extra: "Phishing is India's second-most common cyber crime. Scammers create exact copies of bank websites, government portals and shopping sites to steal credentials.",
    news: [
      { headline: "Fake SBI login page steals credentials of 10,000 users", source: "NDTV" },
      { headline: "Phishing attacks on Indian banks up 60% in Q1 2025", source: "Hindustan Times" },
      { headline: "Govt employees targeted in massive phishing campaign — CERT-In alert", source: "The Hindu" },
    ],
  },
  "Identity Theft": {
    icon: "🪪",
    extra: "Stolen Aadhaar and PAN details are used to open bank accounts, take loans and file fake ITRs. Always check your credit report every 6 months.",
    news: [
      { headline: "Aadhaar data of lakhs leaked from insurance company servers", source: "Indian Express" },
      { headline: "Fake ITR filed using stolen PAN — Pune IT dept alerts taxpayers", source: "Deccan Herald" },
      { headline: "How criminals buy stolen Aadhaar data for ₹500 on dark web", source: "India Today" },
    ],
  },
  "Social Media Fraud": {
    icon: "📱",
    extra: "Fake job offers, romance scams and investment fraud on Instagram, Facebook and Telegram are growing fast — especially targeting youth under 30.",
    news: [
      { headline: "5,000 fake job offer scams reported on LinkedIn in January 2025", source: "Business Standard" },
      { headline: "Romance scam victim from Kolkata loses ₹25 lakh to 'US soldier'", source: "Telegraph India" },
      { headline: "Telegram crypto scam groups target 2 lakh Indians — Cyber Bureau", source: "NDTV" },
    ],
  },
  "Online Shopping Fraud": {
    icon: "🛒",
    extra: "Fake e-commerce sites during sale seasons like Diwali and New Year cheat buyers with non-delivery or counterfeit goods. Always buy from verified sellers.",
    news: [
      { headline: "Diwali sale fraud: 12,000 complaints filed against fake e-commerce sites", source: "Times of India" },
      { headline: "Fake Meesho seller scam dupes 800 customers across India", source: "India Today" },
      { headline: "COD fraud rising — sellers lose money to fake delivery returns", source: "Economic Times" },
    ],
  },
  "Ransomware": {
    icon: "💻",
    extra: "Ransomware attacks on Indian hospitals, banks and government departments have tripled since 2022. Always keep offline backups and update software regularly.",
    news: [
      { headline: "AIIMS Delhi ransomware attack — patient data of 3 crore at risk", source: "The Hindu" },
      { headline: "India saw 3rd highest ransomware attacks globally in 2024 — report", source: "Economic Times" },
      { headline: "Maharashtra e-governance portal hit by ransomware, data encrypted", source: "Hindustan Times" },
    ],
  },
};
