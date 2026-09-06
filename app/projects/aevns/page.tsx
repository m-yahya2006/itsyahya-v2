import Link from "next/link";
import Navbar from "@/components/Navbar";

const architecture = [
  ["Navigation", "Three ultrasonic sensors + autonomous decision logic"],
  ["Energy", "Battery and solar monitoring with INA219 sensing"],
  ["Telemetry", "ESP32 → Wi-Fi/UDP → Python data pipeline"],
  ["Intelligence", "Range prediction and future inspection experiments"],
];

const progress = [
  "Individual hardware components tested",
  "Sensor communication tested",
  "Motor control tested",
  "Telemetry pipeline tested",
  "Custom chassis design in progress",
  "Full mechanical integration and prototype photography next",
];

export default function AevnsPage() {
  return (
    <main className="portfolio">
      <Navbar />

      <section className="aevns-hero">
        <div className="site-container">
          <Link href="/projects" className="aevns-back">
            ← Back to Projects
          </Link>

          <div className="aevns-hero-grid aevns-hero-enter">
            <div>
              <p className="eyebrow light-eyebrow">Flagship Project · In Progress</p>
              <h1>AEVNS</h1>
              <h2>Autonomous Electric Vehicle Navigation System</h2>
              <p>
                A self-built autonomous ground robot combining embedded systems,
                real-time navigation, hybrid solar-battery energy monitoring,
                wireless telemetry and machine-learning experiments, with future
                applications in infrastructure inspection.
              </p>

              <div className="aevns-tags">
                {["ESP32", "C++", "Python", "Machine Learning", "UDP", "I2C"].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>

            <div className="prototype-placeholder prototype-placeholder-dark">
              <div className="prototype-silhouette" aria-hidden="true">
                <div className="proto-roof" />
                <div className="proto-body" />
                <div className="proto-wheel proto-wheel-left" />
                <div className="proto-wheel proto-wheel-right" />
              </div>
              <span className="prototype-plus">+</span>
              <p>Real prototype image will replace this space after build completion.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="aevns-overview">
        <div className="site-container aevns-overview-grid">
          <div>
            <p className="eyebrow">What It Does</p>
            <h2 className="section-heading">Sense. Decide. Move. Measure.</h2>
          </div>
          <p className="body-large">
            The robot uses three ultrasonic sensors to detect obstacles and make
            navigation decisions. It can slow down, turn, correct its path,
            reverse and reassess its surroundings based on real-time sensor data.
          </p>
        </div>
      </section>

      <section className="section section-paper">
        <div className="site-container">
          <p className="eyebrow">System Architecture</p>
          <div className="architecture-grid">
            {architecture.map(([title, description], index) => (
              <article key={title}>
                <span>0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container aevns-detail-grid">
          <div>
            <p className="eyebrow">Hardware</p>
            <h2 className="section-heading">A practical embedded platform.</h2>
          </div>
          <p className="body-large">
            ESP32 DevKit V1, three HC-SR04 ultrasonic sensors, two INA219
            current/voltage sensors, DS18B20 temperature sensor, L298N motor
            driver, TT DC gear motors, 18650 lithium-ion cells, a 6V solar panel,
            TP4056 charging modules and a custom two-layer chassis.
          </p>
        </div>
      </section>

      <section className="section section-paper">
        <div className="site-container aevns-detail-grid">
          <div>
            <p className="eyebrow">Software & Data</p>
            <h2 className="section-heading">Telemetry becomes a learning dataset.</h2>
          </div>
          <p className="body-large">
            Firmware runs on the ESP32 in C++. A Python UDP receiver collects
            live telemetry and stores structured driving data in CSV format for
            analysis and machine-learning experiments.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="site-container aevns-detail-grid">
          <div>
            <p className="eyebrow">Machine Learning</p>
            <h2 className="section-heading">Start simple. Measure what improves.</h2>
          </div>
          <p className="body-large">
            A regression model is being developed from self-collected robot data
            to estimate remaining driving range using battery state, solar input,
            motor load and temperature. More advanced inspection features remain
            future experiments rather than finished capabilities.
          </p>
        </div>
      </section>

      <section className="section section-paper">
        <div className="site-container aevns-progress-grid">
          <div>
            <p className="eyebrow">Current Progress</p>
            <h2 className="section-heading">Built honestly, one subsystem at a time.</h2>
          </div>
          <div className="progress-list">
            {progress.map((item, index) => (
              <div key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="aevns-future">
        <div className="site-container aevns-detail-grid">
          <div>
            <p className="eyebrow light-eyebrow">Future Direction</p>
            <h2>From learning platform to better engineering intuition.</h2>
          </div>
          <p>
            AEVNS is primarily a learning and experimentation platform. The goal
            is to gradually improve navigation, introduce basic visual
            inspection and simple anomaly detection, and understand how robotics,
            sensing, AI and civil-engineering concepts can work together in a
            practical prototype.
          </p>
        </div>
      </section>
    </main>
  );
}
