"use client";

export default function SlopeRoverVisual() {
  return (
    <div
      aria-label="Animated engineering concept of the AEVNS-CI 4WD slope inspection rover"
      style={{
        width: "100%",
        border: "1px solid rgba(28,54,48,.14)",
        borderRadius: 28,
        background: "linear-gradient(180deg,#f8f7f1 0%,#f1f2ec 100%)",
        overflow: "hidden",
        boxShadow: "0 24px 70px rgba(23,45,39,.08)",
      }}
    >
      <svg viewBox="0 0 900 560" role="img" style={{ width: "100%", height: "auto", display: "block" }}>
        <defs>
          <linearGradient id="terrain" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#d8c8a4" />
            <stop offset="1" stopColor="#b7a079" />
          </linearGradient>
          <linearGradient id="panel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#1f6f74" />
            <stop offset="1" stopColor="#214f66" />
          </linearGradient>
          <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="14" stdDeviation="14" floodColor="#18302a" floodOpacity=".12" />
          </filter>
        </defs>

        <rect width="900" height="560" fill="#f8f7f1" />
        <g opacity=".5" stroke="#d8ddd6" strokeWidth="1">
          {Array.from({ length: 12 }).map((_, i) => <line key={`v-${i}`} x1={60 + i * 70} y1="48" x2={60 + i * 70} y2="510" />)}
          {Array.from({ length: 7 }).map((_, i) => <line key={`h-${i}`} x1="48" y1={75 + i * 65} x2="850" y2={75 + i * 65} />)}
        </g>

        <text x="58" y="70" fontSize="15" letterSpacing="3" fill="#56706a" fontFamily="Arial, sans-serif">AEVNS-CI / SYSTEM CONCEPT</text>
        <text x="58" y="101" fontSize="29" fill="#162b2c" fontFamily="Arial, sans-serif">4WD slope-condition inspection rover</text>

        <path d="M20 455 C205 435 338 385 490 345 C640 306 760 300 900 252 L900 560 L0 560 Z" fill="url(#terrain)" />
        <path d="M613 394 l18 12 -12 14 22 14 -17 17 25 17" fill="none" stroke="#554937" strokeWidth="5" strokeLinecap="round" />

        <g transform="translate(340 270) rotate(-10)" filter="url(#softShadow)">
          <g className="rover-float">
            <rect x="15" y="44" width="270" height="92" rx="24" fill="#e6e9e3" stroke="#aab5ae" strokeWidth="2" />
            <rect x="60" y="8" width="176" height="48" rx="7" fill="url(#panel)" />
            <g stroke="#87b1ad" strokeWidth="1" opacity=".7">
              <line x1="104" y1="8" x2="104" y2="56" /><line x1="148" y1="8" x2="148" y2="56" /><line x1="192" y1="8" x2="192" y2="56" />
              <line x1="60" y1="32" x2="236" y2="32" />
            </g>
            <line x1="84" y1="56" x2="84" y2="44" stroke="#8d9b94" strokeWidth="6" />
            <line x1="215" y1="56" x2="215" y2="44" stroke="#8d9b94" strokeWidth="6" />
            <rect x="104" y="67" width="82" height="42" rx="8" fill="#1e3230" />
            <circle cx="255" cy="79" r="12" fill="#d3a35c" />
            <circle cx="255" cy="79" r="24" fill="none" stroke="#d3a35c" strokeWidth="2" opacity=".35" className="sensor-pulse" />
            {[52, 248].map((x) => <g key={x}><circle cx={x} cy="143" r="36" fill="#1f2927" /><circle cx={x} cy="143" r="22" fill="#485954" /><circle cx={x} cy="143" r="8" fill="#d3a35c" /></g>)}
            {[106, 194].map((x) => <g key={x} opacity=".98"><circle cx={x} cy="146" r="34" fill="#1f2927" /><circle cx={x} cy="146" r="20" fill="#485954" /><circle cx={x} cy="146" r="7" fill="#d3a35c" /></g>)}
          </g>
        </g>

        <g fontFamily="Arial, sans-serif">
          <g transform="translate(65 168)">
            <rect width="196" height="123" rx="18" fill="#ffffff" stroke="#d2dad5" />
            <text x="19" y="30" fontSize="11" letterSpacing="2" fill="#6e817b">CIVIL SENSING</text>
            <text x="19" y="61" fontSize="15" fill="#183230">IMU / slope angle</text>
            <text x="19" y="84" fontSize="15" fill="#183230">Soil moisture</text>
            <text x="19" y="107" fontSize="15" fill="#183230">Visible ground cracks</text>
          </g>
          <g transform="translate(652 125)">
            <rect width="180" height="98" rx="18" fill="#ffffff" stroke="#d2dad5" />
            <text x="18" y="29" fontSize="11" letterSpacing="2" fill="#6e817b">DATA PATH</text>
            <text x="18" y="58" fontSize="15" fill="#183230">ESP32 → UDP</text>
            <text x="18" y="80" fontSize="15" fill="#183230">Python → CSV</text>
          </g>
        </g>

        <path d="M262 229 C318 230 332 260 370 287" fill="none" stroke="#5a9188" strokeWidth="2" strokeDasharray="7 7" />
        <path d="M650 214 C617 234 607 255 606 292" fill="none" stroke="#5a9188" strokeWidth="2" strokeDasharray="7 7" />
        <text x="660" y="421" fontSize="13" fill="#6f5b42" fontFamily="Arial, sans-serif">visible crack observation</text>

        <style>{`
          .rover-float { animation: roverFloat 5s ease-in-out infinite; transform-origin: 150px 100px; }
          .sensor-pulse { animation: sensorPulse 1.8s ease-out infinite; transform-origin: 255px 79px; }
          @keyframes roverFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
          @keyframes sensorPulse { 0%{opacity:.45;transform:scale(.65)} 100%{opacity:0;transform:scale(1.65)} }
          @media (prefers-reduced-motion: reduce) { .rover-float,.sensor-pulse{animation:none} }
        `}</style>
      </svg>
    </div>
  );
}
