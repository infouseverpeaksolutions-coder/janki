import React from "react";

// Helper component to render proper logo images for all lenders
export const BankLogoImage = ({ logoImg, name, className = "bank-logo-img" }) => {
  return (
    <img
      src={logoImg}
      alt={`${name} Logo`}
      className={className}
      loading="lazy"
      style={{
        height: "28px",
        width: "28px",
        objectFit: "contain",
        display: "block",
        flexShrink: 0
      }}
    />
  );
};

export const BankLogos = {
  HDFC: () => <BankLogoImage logoImg="/images/banks/hdfc.svg" name="HDFC Bank" />,
  ICICI: () => <BankLogoImage logoImg="/images/banks/ICICI-Bank.png" name="ICICI Bank" />,
  SBI: () => <BankLogoImage logoImg="/images/banks/sbi-bank.webp" name="State Bank of India" />,
  AXIS: () => <BankLogoImage logoImg="/images/banks/axis-bank.png" name="Axis Bank" />,
  KOTAK: () => <BankLogoImage logoImg="/images/banks/Kotak-Mahindra.png" name="Kotak Mahindra Bank" />,
  IDFC: () => <BankLogoImage logoImg="/images/banks/idfc-first.png" name="IDFC FIRST Bank" />,
  BOB: () => <BankLogoImage logoImg="/images/banks/bank-of-baroda.png" name="Bank of Baroda" />,
  PNB: () => <BankLogoImage logoImg="/images/banks/Punjab-National-Bank.avif" name="Punjab National Bank" />,
  INDUSIND: () => <BankLogoImage logoImg="/images/banks/IndusInd-Bank.png" name="IndusInd Bank" />,
  YES: () => <BankLogoImage logoImg="/images/banks/yes-bank.png" name="YES Bank" />,
  UNION: () => <BankLogoImage logoImg="/images/banks/union-bank.png" name="Union Bank of India" />,
  CANARA: () => <BankLogoImage logoImg="/images/banks/Canara-Bank.png" name="Canara Bank" />,
  BOI: () => <BankLogoImage logoImg="/images/banks/Bank-of-India.png" name="Bank of India" />,
  CENTRAL: () => <BankLogoImage logoImg="/images/banks/central-bank.png" name="Central Bank of India" />,
  BAJAJ: () => <BankLogoImage logoImg="/images/banks/bajaj-finserv.jpg" name="Bajaj Finserv" />,
  TATA: () => <BankLogoImage logoImg="/images/banks/tata-capital.png" name="Tata Capital" />,
  BIRLA: () => <BankLogoImage logoImg="/images/banks/Aditya-Birla-Capital.png" name="Aditya Birla Capital" />,
  LT: () => <BankLogoImage logoImg="/images/banks/LT-Finance.png" name="L&T Finance" />,
  MUTHOOT: () => <BankLogoImage logoImg="/images/banks/Muthoot-Finance.png" name="Muthoot Finance" />,
  POONAWALLA: () => <BankLogoImage logoImg="/images/banks/Poonawalla-Fincorp.png" name="Poonawalla Fincorp" />,
  HERO: () => <BankLogoImage logoImg="/images/banks/Hero-FinCorp.png" name="Hero FinCorp" />,
  PIRAMAL: () => <BankLogoImage logoImg="/images/banks/Piramal-Capital.png" name="Piramal Capital" />,
  SMFG: () => <BankLogoImage logoImg="/images/banks/SMFG-India-Credit.jpeg" name="SMFG India Credit" />,
  STANC: () => <BankLogoImage logoImg="/images/banks/Standard-Chartered.png" name="Standard Chartered" />,
  FEDERAL: () => <BankLogoImage logoImg="/images/banks/Federal-bank.png" name="Federal Bank" />
};

export const partnerBanksData = [
  {
    id: "hdfc",
    name: "HDFC Bank",
    category: "Private Bank",
    roi: "10.50%",
    color: "#004C8F",
    logoImg: "/images/banks/hdfc.svg",
    Logo: BankLogos.HDFC
  },
  {
    id: "icici",
    name: "ICICI Bank",
    category: "Private Bank",
    roi: "10.65%",
    color: "#F37021",
    logoImg: "/images/banks/ICICI-Bank.png",
    Logo: BankLogos.ICICI
  },
  {
    id: "sbi",
    name: "State Bank of India",
    category: "Public Bank",
    roi: "10.30%",
    color: "#00A5EC",
    logoImg: "/images/banks/sbi-bank.webp",
    Logo: BankLogos.SBI
  },
  {
    id: "axis",
    name: "Axis Bank",
    category: "Private Bank",
    roi: "10.49%",
    color: "#97144D",
    logoImg: "/images/banks/axis-bank.png",
    Logo: BankLogos.AXIS
  },
  {
    id: "kotak",
    name: "Kotak Mahindra",
    category: "Private Bank",
    roi: "10.75%",
    color: "#EE1C25",
    logoImg: "/images/banks/Kotak-Mahindra.png",
    Logo: BankLogos.KOTAK
  },
  {
    id: "idfc",
    name: "IDFC FIRST Bank",
    category: "Private Bank",
    roi: "10.75%",
    color: "#9E1B32",
    logoImg: "/images/banks/idfc-first.png",
    Logo: BankLogos.IDFC
  },
  {
    id: "bob",
    name: "Bank of Baroda",
    category: "Public Bank",
    roi: "10.35%",
    color: "#F26522",
    logoImg: "/images/banks/bank-of-baroda.png",
    Logo: BankLogos.BOB
  },
  {
    id: "pnb",
    name: "Punjab National Bank",
    category: "Public Bank",
    roi: "10.40%",
    color: "#A21D21",
    logoImg: "/images/banks/Punjab-National-Bank.avif",
    Logo: BankLogos.PNB
  },
  {
    id: "indusind",
    name: "IndusInd Bank",
    category: "Private Bank",
    roi: "10.60%",
    color: "#84141B",
    logoImg: "/images/banks/IndusInd-Bank.png",
    Logo: BankLogos.INDUSIND
  },
  {
    id: "yesbank",
    name: "YES Bank",
    category: "Private Bank",
    roi: "10.95%",
    color: "#00529B",
    logoImg: "/images/banks/yes-bank.png",
    Logo: BankLogos.YES
  },
  {
    id: "unionbank",
    name: "Union Bank of India",
    category: "Public Bank",
    roi: "10.45%",
    color: "#00529B",
    logoImg: "/images/banks/union-bank.png",
    Logo: BankLogos.UNION
  },
  {
    id: "canara",
    name: "Canara Bank",
    category: "Public Bank",
    roi: "10.40%",
    color: "#00A0E3",
    logoImg: "/images/banks/Canara-Bank.png",
    Logo: BankLogos.CANARA
  },
  {
    id: "boi",
    name: "Bank of India",
    category: "Public Bank",
    roi: "10.50%",
    color: "#0054A6",
    logoImg: "/images/banks/Bank-of-India.png",
    Logo: BankLogos.BOI
  },
  {
    id: "centralbank",
    name: "Central Bank of India",
    category: "Public Bank",
    roi: "10.55%",
    color: "#003366",
    logoImg: "/images/banks/central-bank.png",
    Logo: BankLogos.CENTRAL
  },
  {
    id: "bajaj",
    name: "Bajaj Finserv",
    category: "NBFC Partner",
    roi: "11.00%",
    color: "#003366",
    logoImg: "/images/banks/bajaj-finserv.jpg",
    Logo: BankLogos.BAJAJ
  },
  {
    id: "tata",
    name: "Tata Capital",
    category: "NBFC Partner",
    roi: "10.99%",
    color: "#0066B2",
    logoImg: "/images/banks/tata-capital.png",
    Logo: BankLogos.TATA
  },
  {
    id: "adityabirla",
    name: "Aditya Birla Capital",
    category: "NBFC Partner",
    roi: "11.15%",
    color: "#C8102E",
    logoImg: "/images/banks/Aditya-Birla-Capital.png",
    Logo: BankLogos.BIRLA
  },
  {
    id: "ltfinance",
    name: "L&T Finance",
    category: "NBFC Partner",
    roi: "11.20%",
    color: "#00529B",
    logoImg: "/images/banks/LT-Finance.png",
    Logo: BankLogos.LT
  },
  {
    id: "muthoot",
    name: "Muthoot Finance",
    category: "NBFC Partner",
    roi: "11.50%",
    color: "#E31E24",
    logoImg: "/images/banks/Muthoot-Finance.png",
    Logo: BankLogos.MUTHOOT
  },
  {
    id: "poonawalla",
    name: "Poonawalla Fincorp",
    category: "NBFC Partner",
    roi: "11.25%",
    color: "#002B49",
    logoImg: "/images/banks/Poonawalla-Fincorp.png",
    Logo: BankLogos.POONAWALLA
  },
  {
    id: "hero",
    name: "Hero FinCorp",
    category: "NBFC Partner",
    roi: "11.30%",
    color: "#E31E24",
    logoImg: "/images/banks/Hero-FinCorp.png",
    Logo: BankLogos.HERO
  },
  {
    id: "piramal",
    name: "Piramal Capital",
    category: "NBFC Partner",
    roi: "11.40%",
    color: "#E86D00",
    logoImg: "/images/banks/Piramal-Capital.png",
    Logo: BankLogos.PIRAMAL
  },
  {
    id: "smfg",
    name: "SMFG India Credit",
    category: "NBFC Partner",
    roi: "11.35%",
    color: "#00875A",
    logoImg: "/images/banks/SMFG-India-Credit.jpeg",
    Logo: BankLogos.SMFG
  },
  {
    id: "stanc",
    name: "Standard Chartered",
    category: "MNC Bank",
    roi: "10.70%",
    color: "#0072CE",
    logoImg: "/images/banks/Standard-Chartered.png",
    Logo: BankLogos.STANC
  },
  {
    id: "federal",
    name: "Federal Bank",
    category: "Private Bank",
    roi: "10.65%",
    color: "#002D62",
    logoImg: "/images/banks/Federal-bank.png",
    Logo: BankLogos.FEDERAL
  }
];
