import React from "react";

/**
 * JankiAICharacter Component
 * Standing Vector Illustration of Janki AI Advisor.
 * Positioned to face inwards (towards the user and center of screen)
 * with the inner arm raised waving 👋 towards the user.
 */
const JankiAICharacter = ({ size = 80, showBadge = true, isCompact = false, className = "" }) => {
  // If rendering inside header or small avatar badge, render circular avatar view
  if (isCompact) {
    return (
      <div className={`janki-character-compact ${className}`} style={{ width: size, height: size }}>
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "100%", borderRadius: "50%" }}
        >
          <defs>
            <radialGradient id="bgGlowComp" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#153B69" />
              <stop offset="85%" stopColor="#0D2447" />
              <stop offset="100%" stopColor="#07152B" />
            </radialGradient>
            <linearGradient id="goldGradComp" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F3D068" />
              <stop offset="50%" stopColor="#C89B3C" />
              <stop offset="100%" stopColor="#9A7428" />
            </linearGradient>
            <linearGradient id="blazerGradComp" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E4B82" />
              <stop offset="100%" stopColor="#0D2447" />
            </linearGradient>
            <linearGradient id="skinGradComp" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FDDFD0" />
              <stop offset="100%" stopColor="#F5C7B3" />
            </linearGradient>
          </defs>

          <circle cx="60" cy="60" r="58" fill="url(#bgGlowComp)" stroke="url(#goldGradComp)" strokeWidth="3" />

          {/* Inner Shirt Collar */}
          <path d="M48 92 L60 108 L72 92 L66 84 L54 84 Z" fill="#FFFFFF" />

          {/* Navy Blazer */}
          <path d="M26 116 C26 95 38 85 52 84 L60 96 L68 84 C82 85 94 95 94 116 Z" fill="url(#blazerGradComp)" />
          <path d="M38 87 L52 84 L57 98 L44 98 Z" fill="url(#goldGradComp)" opacity="0.9" />
          <path d="M82 87 L68 84 L63 98 L76 98 Z" fill="url(#goldGradComp)" opacity="0.9" />

          {/* Neck */}
          <path d="M52 70 H68 V86 H52 Z" fill="#F3BAA4" />

          {/* Head Base */}
          <path d="M38 48 C38 30 46 22 60 22 C74 22 82 30 82 48 C82 66 72 76 60 76 C48 76 38 66 38 48 Z" fill="url(#skinGradComp)" />

          {/* Eyebrows */}
          <path d="M45 42 Q50 39 55 42" stroke="#2A1B17" strokeWidth="2" strokeLinecap="round" />
          <path d="M65 42 Q70 39 75 42" stroke="#2A1B17" strokeWidth="2" strokeLinecap="round" />

          {/* Eyes looking towards user */}
          <ellipse cx="50" cy="48" rx="4" ry="4.5" fill="#170F0C" />
          <ellipse cx="70" cy="48" rx="4" ry="4.5" fill="#170F0C" />
          <circle cx="48.5" cy="46.5" r="1.5" fill="#FFFFFF" />
          <circle cx="68.5" cy="46.5" r="1.5" fill="#FFFFFF" />

          {/* Smile */}
          <path d="M49 61 Q60 70 71 61" stroke="#C85252" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M51 62 Q60 69 69 62 Q60 64 51 62 Z" fill="#FFFFFF" />

          {/* Hair */}
          <path d="M34 46 C32 30 42 16 60 16 C78 16 88 30 86 46 C86 58 84 68 84 76 H36 C36 68 34 58 34 46 Z" fill="#2A1B17" />
          <path d="M35 44 C36 28 48 18 60 18 C75 18 84 28 85 44 C76 30 62 26 50 32 C42 36 37 40 35 44 Z" fill="#2A1B17" />

          {/* Headset & Mic */}
          <path d="M37 40 C34 32 40 22 52 20" stroke="url(#goldGradComp)" strokeWidth="2.5" fill="none" />
          <rect x="33" y="44" width="6" height="12" rx="3" fill="#0D2447" stroke="url(#goldGradComp)" strokeWidth="1.5" />
          <path d="M36 52 Q38 64 48 64" stroke="url(#goldGradComp)" strokeWidth="2" strokeLinecap="round" fill="none" />
          <circle cx="49" cy="64" r="2.5" fill="#0D2447" stroke="url(#goldGradComp)" strokeWidth="1" />
          <circle cx="36" cy="47" r="1.5" fill="#10B981" />
        </svg>

        {showBadge && <span className="janki-online-badge-dot" title="Janki AI Online" />}
      </div>
    );
  }

  // Full Standing Character Facing Towards the User & Screen Center (Left Side Waving Arm)
  return (
    <div className={`janki-character-full-standing ${className}`} style={{ width: size, height: size * 1.3 }}>
      <svg
        viewBox="0 0 160 210"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="janki-standing-svg"
        style={{ width: "100%", height: "100%", overflow: "visible" }}
      >
        <defs>
          {/* Gold Accent Gradient */}
          <linearGradient id="goldGradUser" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5D470" />
            <stop offset="50%" stopColor="#C89B3C" />
            <stop offset="100%" stopColor="#9A7428" />
          </linearGradient>

          {/* Navy Blazer Gradient */}
          <linearGradient id="blazerGradUser" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E4B82" />
            <stop offset="100%" stopColor="#0D2447" />
          </linearGradient>

          {/* Trouser Gradient */}
          <linearGradient id="pantGradUser" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#122A4D" />
            <stop offset="100%" stopColor="#081426" />
          </linearGradient>

          {/* Skin Gradient */}
          <linearGradient id="skinGradUser" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FDDFD0" />
            <stop offset="100%" stopColor="#F5C7B3" />
          </linearGradient>

          {/* Soft Drop Shadow */}
          <filter id="charShadowUser" x="-20%" y="-10%" width="140%" height="130%">
            <feDropShadow dx="0" dy="8" stdDeviation="5" floodColor="#07152B" floodOpacity="0.28" />
          </filter>
        </defs>

        {/* Soft Floor Shadow beneath feet */}
        <ellipse cx="80" cy="202" rx="46" ry="6.5" fill="#07152B" opacity="0.25" />

        {/* --- LEGS & TROUSERS --- */}
        {/* Left Leg (Inner Leg towards screen) */}
        <path d="M58 135 L56 196 H70 L71 135 Z" fill="url(#pantGradUser)" />
        {/* Right Leg (Outer Leg towards edge) */}
        <path d="M85 135 L86 196 H100 L98 135 Z" fill="url(#pantGradUser)" />

        {/* Black Formal Shoes (Facing User) */}
        <path d="M52 196 C52 196 50 204 62 204 C70 204 72 196 72 196 Z" fill="#0A0F1A" />
        <path d="M84 196 C84 196 86 204 94 204 C106 204 104 196 104 196 Z" fill="#0A0F1A" />

        {/* --- TORSO & BLAZER --- */}
        {/* Crisp White Shirt & V-Neck Collar */}
        <path d="M66 54 L78 80 L90 54 L84 48 L72 48 Z" fill="#FFFFFF" />
        <line x1="78" y1="54" x2="78" y2="80" stroke="#E5E7EB" strokeWidth="1.5" />

        {/* Main Navy Blazer Body */}
        <path
          d="M42 54 C42 54 56 46 78 46 C100 46 114 54 114 54 L116 136 C116 136 98 140 78 140 C58 140 40 136 40 136 Z"
          fill="url(#blazerGradUser)"
          filter="url(#charShadowUser)"
        />

        {/* Gold Lapels */}
        <path d="M52 50 L76 84 L70 108 L46 72 Z" fill="url(#goldGradUser)" opacity="0.95" />
        <path d="M104 50 L80 84 L86 108 L110 72 Z" fill="url(#goldGradUser)" opacity="0.95" />

        {/* Gold Lapel Pin */}
        <circle cx="56" cy="74" r="3.5" fill="url(#goldGradUser)" stroke="#FFFFFF" strokeWidth="1" />

        {/* --- RIGHT ARM (OUTER ARM - Holding Digital Tablet at Hip) --- */}
        <path d="M114 54 L126 88 L118 114 L106 100 L114 80 Z" fill="url(#blazerGradUser)" />
        {/* Hand */}
        <circle cx="116" cy="114" r="4.5" fill="#F3BAA4" />
        {/* Tablet */}
        <rect x="106" y="102" width="22" height="28" rx="3" fill="#0D2447" stroke="url(#goldGradUser)" strokeWidth="1.5" transform="rotate(8 117 116)" />
        <rect x="109" y="105" width="16" height="20" rx="1.5" fill="#153B69" transform="rotate(8 117 116)" />

        {/* --- HEAD & NECK (FACING USER / TOWARDS LEFT OF SCREEN) --- */}
        {/* Neck */}
        <path d="M69 38 H87 V50 H69 Z" fill="#F3BAA4" />
        <path d="M69 44 C73 48 83 48 87 44 V50 H69 Z" fill="#E8AA93" opacity="0.5" />

        {/* Head Base (Angled towards user) */}
        <path
          d="M56 26 C56 11 65 4 78 4 C91 4 100 11 100 26 C100 41 91 49 78 49 C65 49 56 41 56 26 Z"
          fill="url(#skinGradUser)"
        />

        {/* Eyebrows Looking towards user */}
        <path d="M62 20 Q68 17 74 20" stroke="#2A1B17" strokeWidth="2" strokeLinecap="round" />
        <path d="M82 20 Q88 17 94 20" stroke="#2A1B17" strokeWidth="2" strokeLinecap="round" />

        {/* Eyes Looking Directly towards user */}
        <ellipse cx="67" cy="25.5" rx="3.8" ry="4.5" fill="#170F0C" />
        <ellipse cx="89" cy="25.5" rx="3.8" ry="4.5" fill="#170F0C" />
        {/* Catchlight sparkles */}
        <circle cx="65.5" cy="23.8" r="1.4" fill="#FFFFFF" />
        <circle cx="87.5" cy="23.8" r="1.4" fill="#FFFFFF" />

        {/* Nose */}
        <path d="M77 25 Q75 31 77 32 Q79 31 77 25" fill="#E8AA93" opacity="0.8" />

        {/* Warm Smile */}
        <path d="M68 36 Q78 45 88 36" stroke="#C85252" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M70 37 Q78 44 86 37 Z" fill="#FFFFFF" />

        {/* Cheeks Glow */}
        <ellipse cx="62" cy="31" rx="3.5" ry="2" fill="#F49A9A" opacity="0.3" />
        <ellipse cx="94" cy="31" rx="3.5" ry="2" fill="#F49A9A" opacity="0.3" />

        {/* Dark Hair */}
        <path d="M53 24 C51 8 62 -3 78 -3 C94 -3 105 8 103 24 C103 36 101 44 101 50 H55 C55 44 53 36 53 24 Z" fill="#2A1B17" />
        <path d="M53 23 C54 8 65 0 78 0 C91 0 102 8 103 23 C94 10 81 6 68 12 C60 16 55 20 53 23 Z" fill="#2A1B17" />
        <path d="M66 3 Q78 1 90 7" stroke="url(#goldGradUser)" strokeWidth="1.3" opacity="0.6" strokeLinecap="round" fill="none" />

        {/* AI Headset & Mic */}
        <path d="M55 18 C52 10 59 2 70 1" stroke="url(#goldGradUser)" strokeWidth="2" strokeLinecap="round" fill="none" />
        <rect x="50" y="20" width="5" height="11" rx="2.5" fill="#0D2447" stroke="url(#goldGradUser)" strokeWidth="1.2" />
        <path d="M53 29 Q55 39 65 39" stroke="url(#goldGradUser)" strokeWidth="1.6" strokeLinecap="round" fill="none" />
        <circle cx="66" cy="39" r="2" fill="#0D2447" stroke="url(#goldGradUser)" strokeWidth="1" />
        <circle cx="52.5" cy="23" r="1.2" fill="#10B981" />

        {/* --- INNER LEFT ARM & WAVING HAND 👋 (TOWARDS THE USER / CENTER OF SCREEN) --- */}
        <g className="janki-waving-arm-group">
          {/* Upper Arm raised up towards left */}
          <path d="M42 54 L20 52 L12 36 L30 32 Z" fill="url(#blazerGradUser)" />
          {/* Forearm raised upwards towards top left (towards user & speech bubble) */}
          <path d="M20 52 L8 18 L20 14 L32 44 Z" fill="url(#blazerGradUser)" />
          {/* Sleeve Cuff */}
          <path d="M20 14 L8 18 L6 22 L18 18 Z" fill="url(#goldGradUser)" />

          {/* OPEN PALM WAVING HAND FACING THE USER 👋 */}
          <g className="janki-hand-palm">
            {/* Open Palm */}
            <circle cx="12" cy="8" r="5.5" fill="#F3BAA4" />

            {/* 4 Fingers Raised & Spaced Towards User */}
            <path d="M17 5 L18 -4" stroke="#F3BAA4" strokeWidth="2" strokeLinecap="round" />
            <path d="M14 4 L14 -6" stroke="#F3BAA4" strokeWidth="2" strokeLinecap="round" />
            <path d="M11 4 L10 -5" stroke="#F3BAA4" strokeWidth="2" strokeLinecap="round" />
            <path d="M8 6 L6 0" stroke="#F3BAA4" strokeWidth="1.8" strokeLinecap="round" />

            {/* Thumb */}
            <path d="M17 9 L23 7" stroke="#F3BAA4" strokeWidth="2" strokeLinecap="round" />

            {/* Sparkle Wave Dots */}
            <circle cx="2" cy="-2" r="1.2" fill="#E5C158" opacity="0.8" />
            <circle cx="22" cy="-4" r="1.2" fill="#E5C158" opacity="0.8" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default JankiAICharacter;
