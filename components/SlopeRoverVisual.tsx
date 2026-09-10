export default function SlopeRoverVisual() {
  return (
    <div style={{ width: "100%", minHeight: 320, display: "grid", placeItems: "center", overflow: "hidden", borderRadius: 24, background: "linear-gradient(145deg,#13251f,#0a1512)", border: "1px solid rgba(255,255,255,.10)" }} aria-label="Animated concept illustration of the AEVNS slope inspection rover">
      <svg viewBox="0 0 760 440" role="img" aria-labelledby="roverTitle roverDesc" style={{ width: "100%", height: "auto", display: "block" }}>
        <title id="roverTitle">AEVNS slope inspection rover concept</title>
        <desc id="roverDesc">A four wheel rover moves along a soil slope while sensing inclination, moisture and visible ground cracks.</desc>
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#18372e"/><stop offset="1" stopColor="#0d1d18"/></linearGradient>
          <linearGradient id="soil" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#a56a3d"/><stop offset="1" stopColor="#5e3824"/></linearGradient>
          <filter id="glow"><feGaussianBlur stdDeviation="5" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
        </defs>
        <rect width="760" height="440" fill="url(#sky)"/>
        <circle cx="625" cy="75" r="34" fill="#f1c96d" opacity=".92" filter="url(#glow)"/>
        <path d="M0 365 C160 340 260 300 380 270 C510 235 625 250 760 205 L760 440 L0 440Z" fill="url(#soil)"/>
        <path d="M470 304 l22 14 -14 12 24 15 -19 14 26 18" fill="none" stroke="#24160f" strokeWidth="5" strokeLinecap="round"/>
        <g opacity=".7" stroke="#cde8de" strokeWidth="2" strokeDasharray="6 7">
          <path d="M328 178 L315 260"/><path d="M367 172 L382 245"/><path d="M407 190 L440 252"/>
        </g>
        <g>
          <animateTransform attributeName="transform" type="translate" values="-18 7;18 -7;-18 7" dur="6s" repeatCount="indefinite"/>
          <g transform="translate(260 222) rotate(-13)">
            <rect x="0" y="15" width="185" height="65" rx="13" fill="#e8ece8"/>
            <rect x="34" y="-18" width="120" height="28" rx="5" fill="#254f42" stroke="#76b39d" strokeWidth="3"/>
            <line x1="52" y1="10" x2="52" y2="-16" stroke="#cfd8d3" strokeWidth="5"/><line x1="137" y1="10" x2="137" y2="-16" stroke="#cfd8d3" strokeWidth="5"/>
            <rect x="65" y="28" width="56" height="31" rx="5" fill="#25302c"/>
            <circle cx="27" cy="82" r="26" fill="#111" stroke="#67736e" strokeWidth="8"/><circle cx="157" cy="82" r="26" fill="#111" stroke="#67736e" strokeWidth="8"/>
            <circle cx="27" cy="82" r="8" fill="#d4a65d"/><circle cx="157" cy="82" r="8" fill="#d4a65d"/>
            <circle cx="177" cy="37" r="8" fill="#f2a65a"><animate attributeName="opacity" values="1;.25;1" dur="1.4s" repeatCount="indefinite"/></circle>
          </g>
        </g>
        <g fontFamily="Arial, sans-serif" fontSize="15" fill="#dbe9e4">
          <text x="72" y="82" fontWeight="700" fontSize="18">SLOPE CONDITION SCOUT</text>
          <text x="72" y="108" opacity=".75">inclination · soil moisture · visible ground cracks</text>
          <text x="530" y="337" fill="#f4d5bd">ground crack</text>
        </g>
        <g transform="translate(86 150)">
          <rect width="132" height="96" rx="14" fill="#10231d" stroke="#315c4d"/>
          <text x="18" y="28" fill="#8fc7b3" fontFamily="Arial" fontSize="12">LIVE SENSING</text>
          <text x="18" y="53" fill="white" fontFamily="Arial" fontSize="14">IMU  ↗ slope</text>
          <text x="18" y="75" fill="white" fontFamily="Arial" fontSize="14">Probe  ≋ moisture</text>
        </g>
      </svg>
    </div>
  );
}
