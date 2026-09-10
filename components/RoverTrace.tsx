export default function RoverTrace({ compact = false }: { compact?: boolean }) {
  return (
    <div className={compact ? "rover-trace rover-trace-compact" : "rover-trace"} aria-hidden="true">
      <svg viewBox="0 0 760 420" role="presentation">
        <g fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M52 318 C165 291 261 307 354 278 C443 251 554 219 713 229" opacity=".32"/>
          <path d="M72 337 C188 319 279 332 373 301 C478 266 575 252 705 257" opacity=".18"/>
          <path d="M226 235 L495 211 L552 281 L190 295 Z"/>
          <path d="M259 221 L277 164 L445 147 L488 211"/>
          <path d="M286 164 L450 147 L430 118 L309 129 Z"/>
          <path d="M321 126 L333 91 L347 91 L351 124"/>
          <rect x="327" y="72" width="28" height="20" rx="3"/>
          <circle cx="246" cy="300" r="48"/>
          <circle cx="246" cy="300" r="29"/>
          <circle cx="491" cy="283" r="48"/>
          <circle cx="491" cy="283" r="29"/>
          <circle cx="305" cy="287" r="35" opacity=".7"/>
          <circle cx="435" cy="277" r="35" opacity=".7"/>
          <path d="M214 251 L185 222 M515 240 L548 208"/>
          <path d="M198 217 L181 210 M548 207 L565 200"/>
          <circle cx="509" cy="237" r="12"/>
          <circle cx="536" cy="235" r="12"/>
          <path d="M522 250 L522 268"/>
          <path d="M524 269 L574 303" strokeDasharray="6 8" opacity=".55"/>
          <path d="M520 269 L615 274" strokeDasharray="6 8" opacity=".35"/>
          <path d="M245 351 C336 331 456 338 565 317" opacity=".28"/>
          <path d="M611 270 l18 18 -13 19 23 20" opacity=".52"/>
        </g>
      </svg>
      <div className="rover-trace-note">
        <span>PROJECT IN DEVELOPMENT</span>
        <strong>Final prototype image will be added after build completion.</strong>
      </div>
    </div>
  );
}
