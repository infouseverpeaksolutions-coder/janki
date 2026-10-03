// Janki AI Response Logic & Mock Knowledge Base (Frontend-Only)
// Modular design ready to be swapped with fetch('/api/chat') in the future.

export const QUICK_OPTIONS = [
  { id: "personal_loan", label: "Personal Loan", text: "Tell me about Personal Loans" },
  { id: "home_loan", label: "Home Loan", text: "Tell me about Home Loans" },
  { id: "business_loan", label: "Business / MSME Loan", text: "Tell me about Business / MSME Loans" },
  { id: "lap_loan", label: "Loan Against Property", text: "Tell me about Loan Against Property" },
  { id: "balance_transfer", label: "Balance Transfer", text: "How does Balance Transfer work?" },
  { id: "credit_card_help", label: "Credit Card / Debt Help", text: "I need help with Credit Card & Debt Consolidation" },
  { id: "check_eligibility", label: "Check My Eligibility", text: "Check My Loan Eligibility" },
  { id: "ask_something_else", label: "Ask Something Else", text: "I have a specific question" }
];

export const SUB_OPTIONS = {
  personal_loan: [
    { id: "pl_eligibility", label: "Eligibility", text: "Personal Loan Eligibility" },
    { id: "pl_docs", label: "Documents Required", text: "Documents needed for Personal Loan" },
    { id: "pl_amount", label: "Loan Amount & Tenure", text: "What is max amount & tenure for Personal Loan?" },
    { id: "pl_interest", label: "Interest & EMI", text: "Interest rates & EMI for Personal Loan" },
    { id: "pl_apply", label: "Application Process", text: "How to apply for Personal Loan?" }
  ],
  home_loan: [
    { id: "hl_rates", label: "Home Loan Rates", text: "Home Loan interest rates" },
    { id: "hl_tenure", label: "Max Tenure & LTV", text: "Max tenure and loan-to-value ratio" },
    { id: "hl_tax", label: "Tax Benefits", text: "Tax benefits on Home Loan" },
    { id: "hl_docs", label: "Required Documents", text: "Documents needed for Home Loan" }
  ],
  business_loan: [
    { id: "bl_eligibility", label: "Business Eligibility", text: "Who is eligible for Business Loan?" },
    { id: "bl_collateral", label: "Is Collateral Required?", text: "Is collateral needed for Business Loan?" },
    { id: "bl_docs", label: "Required Documents", text: "Documents needed for Business Loan" }
  ],
  lap_loan: [
    { id: "lap_rates", label: "LAP Interest Rates", text: "Interest rates for Loan Against Property" },
    { id: "lap_amount", label: "Max Loan Amount", text: "Maximum loan amount against property" },
    { id: "lap_properties", label: "Property Types Accepted", text: "Which properties are accepted for LAP?" }
  ],
  balance_transfer: [
    { id: "bt_benefits", label: "Transfer Benefits", text: "Benefits of Loan Balance Transfer" },
    { id: "bt_process", label: "How to Transfer", text: "Process of Balance Transfer" }
  ],
  credit_card_help: [
    { id: "cc_consolidation", label: "Debt Consolidation", text: "How does debt consolidation work?" },
    { id: "cc_cibil", label: "Improve Credit Score", text: "How to improve my CIBIL credit score?" }
  ]
};

const KNOWLEDGE_BASE = {
  // Main Categories
  personal_loan: {
    message: "Sure! I can help you with Personal Loans. Janki Financial Services offers instant Personal Loans up to ₹40 Lakhs with minimum documentation and fast disbursal.\n\nWhat would you like to know?",
    subOptions: SUB_OPTIONS.personal_loan
  },
  home_loan: {
    message: "Home Loans at Janki Financial Services offer attractive interest rates starting @ 8.35% p.a., with terms up to 30 years and up to 90% LTV funding!\n\nWhat specific detail would you like to explore?",
    subOptions: SUB_OPTIONS.home_loan
  },
  business_loan: {
    message: "Fuel your enterprise growth with collateral-free Business Loans up to ₹50 Lakhs! Enjoy flexible repayment options tailored for MSMEs and entrepreneurs.\n\nWhat would you like to know?",
    subOptions: SUB_OPTIONS.business_loan
  },
  lap_loan: {
    message: "Unlock the value of your residential, commercial, or industrial property with high-value Loan Against Property (LAP) at lower interest rates starting @ 8.75% p.a.\n\nHow can I help you with LAP?",
    subOptions: SUB_OPTIONS.lap_loan
  },
  balance_transfer: {
    message: "Lower your monthly burden! Transfer your high-interest existing Personal or Home loan to Janki Financial Services and get reduced EMIs plus optional Top-Up loan cash.\n\nWhat would you like to know?",
    subOptions: SUB_OPTIONS.balance_transfer
  },
  credit_card_help: {
    message: "Manage your debts wisely! We offer structured Debt Consolidation plans to merge multiple credit card bills or loans into a single lower monthly EMI.\n\nSelect an area below:",
    subOptions: SUB_OPTIONS.credit_card_help
  },
  check_eligibility: {
    message: "Checking your eligibility is 100% free and does NOT affect your credit score!\n\nClick the action below to launch our quick 30-second eligibility checker, or speak with our loan advisor.",
    action: "OPEN_ELIGIBILITY_MODAL",
    subOptions: [
      { id: "trigger_modal", label: "⚡ Check Eligibility Now", text: "Check Loan Eligibility Now" },
      { id: "main_menu", label: "🔙 Back to Main Menu", text: "Back to main menu" }
    ]
  },
  ask_something_else: {
    message: "I'm ready to answer any custom question! Feel free to type your query below, such as interest rates, tenure options, or advisory support.",
    subOptions: [
      { id: "pl_eligibility", label: "Check Personal Loan", text: "Personal Loan Details" },
      { id: "check_eligibility", label: "Check Eligibility", text: "Check My Eligibility" }
    ]
  },

  // Personal Loan Details
  pl_eligibility: {
    message: "📋 **Personal Loan Eligibility Criteria:**\n• **Age:** 21 to 60 years\n• **Monthly Net Income:** ₹25,000+\n• **CIBIL Score:** 650 or higher preferred\n• **Employment:** Salaried (min 1 yr work exp) or Self-Employed (min 2 yrs business vintage)\n\nWould you like to check your exact pre-approved loan amount?",
    subOptions: [
      { id: "check_eligibility", label: "⚡ Check My Eligibility", text: "Check My Eligibility" },
      { id: "pl_docs", label: "Documents Required", text: "Documents Required" },
      { id: "main_menu", label: "🔙 Main Menu", text: "Back to main menu" }
    ]
  },
  pl_docs: {
    message: "📄 **Documents Required for Personal Loan:**\n1. **Identity Proof:** PAN Card (Mandatory)\n2. **Address Proof:** Aadhaar Card / Passport / Voter ID / Utility Bill\n3. **Income Proof:** Last 3 months Salary Slips\n4. **Bank Statements:** Last 6 months bank statement\n5. **Tax Records:** Form 16 or 1 Year ITR\n\nAll documents can be submitted digitally!",
    subOptions: [
      { id: "pl_apply", label: "Application Process", text: "Application Process" },
      { id: "check_eligibility", label: "Check Eligibility", text: "Check My Eligibility" },
      { id: "main_menu", label: "🔙 Main Menu", text: "Back to main menu" }
    ]
  },
  pl_amount: {
    message: "💰 **Loan Amount & Tenure:**\n• **Min Loan Amount:** ₹50,000\n• **Max Loan Amount:** ₹40,00,000\n• **Flexible Tenure:** 12 to 72 months (1 to 6 years)\n• **Pre-payment:** Zero or minimal foreclosure charges after 6 EMIs.",
    subOptions: [
      { id: "pl_interest", label: "Interest Rates & EMI", text: "Interest Rates & EMI" },
      { id: "check_eligibility", label: "Check Eligibility", text: "Check My Eligibility" }
    ]
  },
  pl_interest: {
    message: "📊 **Interest Rates & EMI:**\n• **Interest Rate:** Starting from **8.50% p.a.**\n• **Processing Fee:** 0.5% - 1.5% of loan amount\n• **EMI Example:** For ₹5 Lakhs @ 8.5% for 5 Years, monthly EMI is approx ₹10,258.",
    subOptions: [
      { id: "check_eligibility", label: "⚡ Calculate My EMI", text: "Check Loan Eligibility" },
      { id: "pl_docs", label: "Required Documents", text: "Required Documents" }
    ]
  },
  pl_apply: {
    message: "🚀 **Fast 4-Step Application Process:**\n1. **Check Eligibility:** Submit basic details in 30 secs\n2. **Select Loan Offer:** Pick your desired loan amount & EMI\n3. **Digital KYC:** Upload documents online securely\n4. **Disbursal:** Money credited directly to your bank within 24 hours!",
    subOptions: [
      { id: "check_eligibility", label: "Start Application Now", text: "Check My Eligibility" },
      { id: "main_menu", label: "🔙 Main Menu", text: "Back to main menu" }
    ]
  },

  // Home Loan Sub-options
  hl_rates: {
    message: "🏡 **Home Loan Rates & Offers:**\n• Interest rates starting @ **8.35% p.a.**\n• Concession for women applicants (0.05% rate discount)\n• Flexible floating and fixed rate packages\n• Zero foreclosure charges on floating rate home loans.",
    subOptions: [
      { id: "hl_tenure", label: "Max Tenure & LTV", text: "Max Tenure & LTV" },
      { id: "hl_tax", label: "Tax Benefits", text: "Tax Benefits" }
    ]
  },
  hl_tenure: {
    message: "📐 **Tenure & Loan-to-Value (LTV):**\n• **Tenure:** Up to 30 years\n• **Funding:** Up to 90% of property cost (LTV)\n• **Construct/Purchase/Plot:** Covered for ready, under-construction, or plot + construction.",
    subOptions: [
      { id: "hl_docs", label: "Required Documents", text: "Required Documents" },
      { id: "check_eligibility", label: "Check Home Loan Offer", text: "Check My Eligibility" }
    ]
  },
  hl_tax: {
    message: "💡 **Tax Benefits on Home Loans:**\n• **Principal Repayment:** Claim up to ₹1,50,000 under Sec 80C\n• **Interest Payment:** Claim up to ₹2,00,000 under Sec 24(b)\n• **Joint Loan:** Both co-applicants can claim deductions separately (Up to ₹7 Lakhs total savings per year!).",
    subOptions: [
      { id: "hl_rates", label: "Home Loan Rates", text: "Home Loan Rates" },
      { id: "check_eligibility", label: "Check Eligibility", text: "Check My Eligibility" }
    ]
  },
  hl_docs: {
    message: "📂 **Home Loan Required Documents:**\n1. Identity & Address Proof (PAN, Aadhaar)\n2. Income Proof (3 months salary slips / 2 yrs ITR for self-employed)\n3. 6 Months Bank Statement\n4. Property Documents (Agreement to Sale, Approved Building Plan, Title Chain).",
    subOptions: [
      { id: "check_eligibility", label: "Check Eligibility", text: "Check My Eligibility" },
      { id: "main_menu", label: "🔙 Main Menu", text: "Back to main menu" }
    ]
  },

  // Business Loan Sub-options
  bl_eligibility: {
    message: "🏢 **Business Loan Eligibility:**\n• **Business Vintage:** Minimum 2 years in operation\n• **Annual Turnover:** Minimum ₹20 Lakhs\n• **Entities Covered:** Proprietorships, Partnerships, Pvt Ltd, LLPs\n• **CIBIL Score:** 680+ preferred.",
    subOptions: [
      { id: "bl_collateral", label: "Is Collateral Required?", text: "Is Collateral Required?" },
      { id: "bl_docs", label: "Required Documents", text: "Required Documents" }
    ]
  },
  bl_collateral: {
    message: "🛡️ **No Collateral Required!**\nJanki Financial Services provides 100% Unsecured Business Loans up to ₹50 Lakhs. You do NOT need to pledge any property, machinery, or gold as collateral.",
    subOptions: [
      { id: "bl_docs", label: "Required Documents", text: "Required Documents" },
      { id: "check_eligibility", label: "Check Eligibility", text: "Check My Eligibility" }
    ]
  },
  bl_docs: {
    message: "📁 **Business Loan Documents:**\n1. PAN Card of Promoter & Entity\n2. GST Registration & GST Returns (Last 12 months)\n3. Bank Statements (Last 12 months)\n4. Audited Financials & ITR (Last 2 years).",
    subOptions: [
      { id: "check_eligibility", label: "Apply for Business Loan", text: "Check My Eligibility" },
      { id: "main_menu", label: "🔙 Main Menu", text: "Back to main menu" }
    ]
  },

  // LAP Sub-options
  lap_rates: {
    message: "🏢 **Loan Against Property Rates:**\n• Interest Rates start @ **8.75% p.a.**\n• Tenure up to 15-20 years\n• High loan limits up to ₹5 Crores!",
    subOptions: [
      { id: "lap_amount", label: "Max Loan Amount", text: "Max Loan Amount" },
      { id: "lap_properties", label: "Accepted Properties", text: "Accepted Properties" }
    ]
  },
  lap_amount: {
    message: "📈 **Max Loan Amount for LAP:**\nGet up to **75% of market value** of residential properties, and up to **65%** for commercial/industrial properties.",
    subOptions: [
      { id: "check_eligibility", label: "Check My LAP Eligibility", text: "Check My Eligibility" }
    ]
  },
  lap_properties: {
    message: "🏠 **Accepted Property Types:**\n• Self-occupied Residential Flats & Houses\n• Commercial Offices & Shops\n• Industrial Sheds & Units\n• Vacant Plots (with clear title).",
    subOptions: [
      { id: "check_eligibility", label: "Check Property Eligibility", text: "Check My Eligibility" }
    ]
  },

  // Balance Transfer Sub-options
  bt_benefits: {
    message: "📉 **Benefits of Balance Transfer with Janki:**\n1. Reduce monthly EMI by up to 20-30%\n2. Avail high-value Top-Up loan at low home loan interest rates\n3. Simplified single window processing & quick transfer.",
    subOptions: [
      { id: "bt_process", label: "Transfer Process", text: "Transfer Process" },
      { id: "check_eligibility", label: "Calculate Savings", text: "Check My Eligibility" }
    ]
  },
  bt_process: {
    message: "🔄 **3-Step Balance Transfer Process:**\n1. Request Foreclosure letter & LOD from existing lender\n2. Submit income & loan statement to Janki Financial Services\n3. Sanction & cheque disbursal to clear old loan!",
    subOptions: [
      { id: "check_eligibility", label: "Start Transfer Now", text: "Check My Eligibility" }
    ]
  },

  // Credit Card Help
  cc_consolidation: {
    message: "💳 **Credit Card & Debt Consolidation:**\nInstead of paying 36%-42% p.a. on credit card minimum dues, consolidate all your dues into one personal loan @ 8.50%-12% p.a. and save thousands every month!",
    subOptions: [
      { id: "cc_cibil", label: "Improve Credit Score", text: "Improve Credit Score" },
      { id: "check_eligibility", label: "Get Debt Relief Plan", text: "Check My Eligibility" }
    ]
  },
  cc_cibil: {
    message: "📈 **Credit Score Advisory:**\nMaintaining a CIBIL above 750 opens up lowest interest rates. Keep credit card utilization under 30% and ensure zero late payment defaults.",
    subOptions: [
      { id: "main_menu", label: "🔙 Main Menu", text: "Back to main menu" }
    ]
  },

  // Main menu reset
  main_menu: {
    message: "Sure! What would you like help with?",
    subOptions: QUICK_OPTIONS
  }
};

/**
 * Modular response getter function (Frontend State Only).
 * In future backend integration, replace this function body with:
 * const res = await fetch('/api/chat', { method: 'POST', body: JSON.stringify({ message }) });
 * return res.json();
 */
export async function getJankiAIResponse(userMessage, optionId = null) {
  // Simulate natural delay for typing effect
  await new Promise((resolve) => setTimeout(resolve, 600));

  // If optionId is explicitly matched from pre-defined key
  if (optionId && KNOWLEDGE_BASE[optionId]) {
    return {
      success: true,
      data: KNOWLEDGE_BASE[optionId]
    };
  }

  // Keyword matching for freeform text input
  const query = (userMessage || "").toLowerCase();

  if (query.includes("personal loan") || query.includes("personal")) {
    return { success: true, data: KNOWLEDGE_BASE.personal_loan };
  }
  if (query.includes("home loan") || query.includes("house") || query.includes("property loan")) {
    return { success: true, data: KNOWLEDGE_BASE.home_loan };
  }
  if (query.includes("business") || query.includes("msme") || query.includes("company loan")) {
    return { success: true, data: KNOWLEDGE_BASE.business_loan };
  }
  if (query.includes("against property") || query.includes("lap") || query.includes("mortgage")) {
    return { success: true, data: KNOWLEDGE_BASE.lap_loan };
  }
  if (query.includes("balance transfer") || query.includes("transfer") || query.includes("switch loan")) {
    return { success: true, data: KNOWLEDGE_BASE.balance_transfer };
  }
  if (query.includes("credit card") || query.includes("debt") || query.includes("cibil") || query.includes("score")) {
    return { success: true, data: KNOWLEDGE_BASE.credit_card_help };
  }
  if (query.includes("eligibility") || query.includes("apply") || query.includes("eligible")) {
    return { success: true, data: KNOWLEDGE_BASE.check_eligibility };
  }
  if (query.includes("doc") || query.includes("paper") || query.includes("proof")) {
    return { success: true, data: KNOWLEDGE_BASE.pl_docs };
  }
  if (query.includes("rate") || query.includes("interest") || query.includes("emi")) {
    return { success: true, data: KNOWLEDGE_BASE.pl_interest };
  }
  if (query.includes("hi") || query.includes("hello") || query.includes("hey")) {
    return {
      success: true,
      data: {
        message: "Hello! 👋 I'm Janki AI, your personal loan assistant. How can I assist you with your financial goals today?",
        subOptions: QUICK_OPTIONS
      }
    };
  }

  // Fallback response for unhandled freeform input
  return {
    success: true,
    data: {
      message: "Thanks for your question! I'll be able to provide more personalized assistance once the Janki AI service is connected.\n\nIn the meantime, feel free to choose one of the popular topics below or check your instant loan eligibility!",
      subOptions: [
        { id: "personal_loan", label: "Personal Loan", text: "Tell me about Personal Loans" },
        { id: "home_loan", label: "Home Loan", text: "Tell me about Home Loans" },
        { id: "check_eligibility", label: "⚡ Check Eligibility", text: "Check My Eligibility" },
        { id: "main_menu", label: "🔙 View All Topics", text: "View All Topics" }
      ]
    }
  };
}
