"use client";

const items = [
  "CIVIL ENGINEERING",
  "SENSORS",
  "EMBEDDED SYSTEMS",
  "ROBOTICS",
  "MACHINE LEARNING",
  "COMPUTER VISION",
  "DATA",
  "INTELLIGENT INFRASTRUCTURE",
];

export default function TechRibbon() {
  const loop = [...items, ...items];

  return (
    <div className="tech-ribbon" aria-label="Technical focus areas">
      <div className="tech-ribbon-track">
        {loop.map((item, index) => (
          <span key={`${item}-${index}`}>
            <i aria-hidden="true" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
