import React from "react";

// Official Brand SVG Logos for Top Indian Banks & NBFCs
export const BankLogos = {
  HDFC: () => (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#004C8F" />
      <path d="M10 10H30V30H10V10Z" fill="#ED1C24" />
      <path d="M15 15H25V25H15V15Z" fill="#FFFFFF" />
      <rect x="18" y="10" width="4" height="20" fill="#004C8F" />
      <rect x="10" y="18" width="20" height="4" fill="#004C8F" />
    </svg>
  ),

  ICICI: () => (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#F37021" />
      <circle cx="20" cy="20" r="12" fill="#052F5F" />
      <path d="M20 12V28M15 16H25M17 24H23" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),

  AXIS: () => (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#97144D" />
      <path d="M20 8L31 28H24L20 20L16 28H9L20 8Z" fill="#FFFFFF" />
    </svg>
  ),

  SBI: () => (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#00A5EC" />
      <circle cx="20" cy="20" r="11" fill="#FFFFFF" />
      <circle cx="20" cy="18" r="5" fill="#00A5EC" />
      <rect x="18.5" y="18" width="3" height="12" fill="#00A5EC" />
    </svg>
  ),

  KOTAK: () => (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#EE1C25" />
      <path d="M12 12V28M12 20L25 12M12 20L25 28" stroke="#052F5F" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 12V28M12 20L25 12M12 20L25 28" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),

  BAJAJ: () => (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#003366" />
      <path d="M12 10H22C25.5 10 28 12.5 28 15C28 17 26.5 18.5 24.5 19C27 19.5 29 21.5 29 24.5C29 27.5 26.5 30 22.5 30H12V10Z" fill="#0080FF" />
      <path d="M16 14H21C22.5 14 24 15 24 16.5C24 18 22.5 19 21 19H16V14ZM16 22H22C23.5 22 25 23 25 24.5C25 26 23.5 27 22 27H16V22Z" fill="#FFFFFF" />
    </svg>
  ),

  TATA: () => (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#0066B2" />
      <path d="M10 14H30M20 14V30" stroke="#FFFFFF" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M14 20L20 14L26 20" stroke="#87CEEB" strokeWidth="2" strokeLinecap="round" />
    </svg>
  ),

  IDFC: () => (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#9E1B32" />
      <path d="M12 12H20C24 12 27 15 27 20C27 25 24 28 20 28H12V12Z" stroke="#FFFFFF" strokeWidth="3" fill="none" />
      <path d="M16 17H20C21.5 17 23 18 23 20C23 22 21.5 23 20 23H16V17Z" fill="#FFFFFF" />
    </svg>
  ),

  PNB: () => (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#A21D21" />
      <circle cx="20" cy="20" r="10" fill="#FFC72C" />
      <path d="M15 15V25M15 15H22C24 15 25 17 25 19C25 21 24 22 22 22H15" stroke="#A21D21" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  ),

  BOB: () => (
    <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="40" height="40" rx="8" fill="#F26522" />
      <circle cx="20" cy="20" r="10" stroke="#FFFFFF" strokeWidth="3" fill="none" />
      <path d="M16 16L24 24M24 16L16 24" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
};

export const partnerBanksData = [
  { id: "hdfc", name: "HDFC Bank", category: "Private Bank", roi: "10.50%", color: "#004C8F", Logo: BankLogos.HDFC },
  { id: "icici", name: "ICICI Bank", category: "Private Bank", roi: "10.65%", color: "#F37021", Logo: BankLogos.ICICI },
  { id: "axis", name: "Axis Bank", category: "Private Bank", roi: "10.49%", color: "#97144D", Logo: BankLogos.AXIS },
  { id: "sbi", name: "State Bank of India", category: "Public Bank", roi: "10.30%", color: "#00A5EC", Logo: BankLogos.SBI },
  { id: "kotak", name: "Kotak Mahindra", category: "Private Bank", roi: "10.75%", color: "#EE1C25", Logo: BankLogos.KOTAK },
  { id: "bajaj", name: "Bajaj Finserv", category: "NBFC Partner", roi: "11.00%", color: "#003366", Logo: BankLogos.BAJAJ },
  { id: "tata", name: "Tata Capital", category: "NBFC Partner", roi: "10.99%", color: "#0066B2", Logo: BankLogos.TATA },
  { id: "idfc", name: "IDFC FIRST Bank", category: "Private Bank", roi: "10.75%", color: "#9E1B32", Logo: BankLogos.IDFC },
  { id: "pnb", name: "Punjab National Bank", category: "Public Bank", roi: "10.40%", color: "#A21D21", Logo: BankLogos.PNB },
  { id: "bob", name: "Bank of Baroda", category: "Public Bank", roi: "10.35%", color: "#F26522", Logo: BankLogos.BOB }
];
