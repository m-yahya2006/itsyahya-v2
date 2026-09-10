"use client";

export default function ProjectConceptVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div style={{
      minHeight: compact ? 300 : 390,
      height: "100%",
      borderRadius: 24,
      background: "linear-gradient(145deg,#f7f7f1,#eef1eb)",
      border: "1px solid rgba(35,62,55,.13)",
      overflow: "hidden",
      position: "relative",
    }}>
      <svg viewBox="0 0 760 440" style={{width:"100%",height:"100%",display:"block"}} aria-label="AEVNS-CI concept visual">
        <rect width="760" height="440" fill="#f5f5ef" />
        <g stroke="#dde1dc" strokeWidth="1" opacity=".7">
          {Array.from({length:10}).map((_,i)=><line key={`v${i}`} x1={42+i*76} y1="0" x2={42+i*76} y2="440" />)}
          {Array.from({length:6}).map((_,i)=><line key={`h${i}`} x1="0" y1={52+i*70} x2="760" y2={52+i*70} />)}
        </g>
        <path d="M0 355 C130 332 245 308 340 280 C480 240 600 253 760 205 L760 440 L0 440Z" fill="#cab58e" />
        <path d="M560 310 l16 10 -11 12 19 13 -15 14 21 16" fill="none" stroke="#64523c" strokeWidth="4" strokeLinecap="round" />
        <g transform="translate(260 220) rotate(-11)" className="mini-rover">
          <rect x="0" y="28" width="215" height="74" rx="18" fill="#e4e8e3" stroke="#9faa9f" strokeWidth="2" />
          <rect x="40" y="0" width="136" height="36" rx="5" fill="#2d7478" />
          {[28,82,136,188].map((x,i)=><g key={x}><circle cx={x} cy={107+(i%2?1:0)} r="28" fill="#1d2926"/><circle cx={x} cy={107+(i%2?1:0)} r="14" fill="#53615d"/></g>)}
          <circle cx="195" cy="56" r="9" fill="#d4a45d" />
          <circle cx="195" cy="56" r="18" fill="none" stroke="#d4a45d" strokeWidth="2" className="mini-pulse" />
        </g>
        <g fontFamily="Arial, sans-serif">
          <text x="42" y="58" fontSize="12" letterSpacing="2.3" fill="#607872">IN DEVELOPMENT / 2026</text>
          <text x="42" y="90" fontSize="26" fill="#17302f">Slope-condition monitoring rover</text>
          <text x="42" y="116" fontSize="14" fill="#68807a">4WD · sensing · telemetry · solar assist</text>
          <g transform="translate(44 154)">
            <rect width="154" height="108" rx="16" fill="#fff" stroke="#d7ddd8"/>
            <text x="17" y="27" fontSize="10" letterSpacing="1.7" fill="#6e817b">MEASURE</text>
            <text x="17" y="55" fontSize="14" fill="#17302f">Slope angle</text>
            <text x="17" y="77" fontSize="14" fill="#17302f">Soil moisture</text>
            <text x="17" y="99" fontSize="14" fill="#17302f">Ground cracks</text>
          </g>
        </g>
        <style>{`
          .mini-rover{animation:miniMove 5.5s ease-in-out infinite;transform-origin:center}
          .mini-pulse{animation:miniPulse 1.7s ease-out infinite;transform-origin:195px 56px}
          @keyframes miniMove{0%,100%{transform:translate(260px,220px) rotate(-11deg)}50%{transform:translate(272px,214px) rotate(-11deg)}}
          @keyframes miniPulse{0%{opacity:.5;transform:scale(.6)}100%{opacity:0;transform:scale(1.7)}}
          @media (prefers-reduced-motion: reduce){.mini-rover,.mini-pulse{animation:none}}
        `}</style>
      </svg>
    </div>
  );
}
