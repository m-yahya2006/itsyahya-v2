import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import SlopeRoverVisual from "@/components/SlopeRoverVisual";
import ProjectPhoto from "@/components/ProjectPhoto";
import SystemFlow from "@/components/SystemFlow";
import TelemetryConcept from "@/components/TelemetryConcept";

const architecture = [
  ["Mobility", "4WD differential-drive platform for controlled soil, gravel and artificial-slope testing"],
  ["Navigation", "Three ultrasonic sensors for obstacle awareness and autonomous movement"],
  ["Civil sensing", "Planned IMU, capacitive soil-moisture sensing and camera-based ground-crack observation"],
  ["Energy + data", "Battery/solar telemetry through INA219 sensing, Wi-Fi/UDP and Python logging"],
];

const progress = [
  ["Complete", "ESP32 motor-control and autonomous navigation logic"],
  ["Complete", "Three-direction ultrasonic obstacle sensing"],
  ["Complete", "Battery, solar and temperature telemetry subsystems tested"],
  ["Complete", "Wi-Fi/UDP telemetry pipeline tested"],
  ["In progress", "Mechanical integration of the planned 4WD chassis and four-motor drivetrain"],
  ["Next", "Integrate IMU, soil-moisture sensing and ESP32-CAM"],
  ["Later", "Collect controlled test data and develop simple condition/attention classification"],
];

export default function AevnsPage() {
  return (
    <main className="portfolio">
      <Navbar />
      <section className="aevns-hero">
        <div className="site-container">
          <Link href="/projects" className="aevns-back">← Back to Projects</Link>
          <div className="aevns-hero-grid aevns-hero-enter">
            <div>
              <p className="eyebrow light-eyebrow">Flagship Project · In Progress</p>
              <h1>AEVNS-CI</h1>
              <h2>Autonomous Slope-Condition Inspection Rover</h2>
              <p>
                A low-cost, solar-assisted mobile rover being developed for preliminary slope-condition inspection and landslide-risk indication. The prototype combines autonomous navigation with slope inclination, soil-moisture and visible ground-crack observations while transmitting field data for logging and later analysis.
              </p>
              <div className="aevns-tags">{["Civil Engineering", "ESP32", "C++", "Python", "4WD Robotics", "Computer Vision"].map((item) => <span key={item}>{item}</span>)}</div>
            </div>
            <SlopeRoverVisual />
          </div>
        </div>
      </section>

      <section className="aevns-overview">
        <div className="site-container aevns-overview-grid">
          <div><p className="eyebrow">Why It Exists</p><h2 className="section-heading">Scout the slope before sending the engineer.</h2></div>
          <p className="body-large">Potentially unstable slopes can be difficult or unsafe to inspect repeatedly. AEVNS-CI explores whether an affordable student-built rover can collect a small set of useful surface indicators remotely. It is a learning prototype, not a professional landslide-warning or slope-safety system.</p>
        </div>
      </section>

      <section className="section section-paper">
        <div className="site-container">
          <p className="eyebrow">System Architecture</p>
          <div className="architecture-grid">{architecture.map(([title, description], index) => <Reveal key={title} delay={index * 70}><article><span>0{index + 1}</span><h3>{title}</h3><p>{description}</p></article></Reveal>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="site-container aevns-detail-grid">
          <div><p className="eyebrow">Civil Engineering Focus</p><h2 className="section-heading">Three indicators. One focused inspection task.</h2></div>
          <div className="body-large">
            <p><strong>Slope inclination:</strong> an MPU6050 IMU will record rover orientation as an approximate indication of local slope.</p>
            <p><strong>Soil moisture:</strong> a capacitive probe will provide relative wetness readings at selected test locations.</p>
            <p><strong>Visible ground cracks:</strong> an ESP32-CAM will capture slope-surface imagery for later computer-vision experiments and repeat-observation comparisons.</p>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="site-container aevns-detail-grid">
          <div><p className="eyebrow">Hardware</p><h2 className="section-heading">Built around a working embedded prototype.</h2></div>
          <p className="body-large">The embedded system is built around an ESP32 DevKit V1, three HC-SR04 ultrasonic sensors, two INA219 current/voltage sensors, a DS18B20 temperature sensor, TT geared motors and a two-cell Li-ion supply. The 4WD build adds an MPU6050, capacitive soil-moisture sensor, ESP32-CAM, protected 2S battery architecture and solar-assisted charging. Motor-driver loading will be verified against the selected four motors before the drivetrain wiring is fixed.</p>
        </div>
      </section>

      <section className="section">
        <div className="site-container aevns-detail-grid">
          <div><p className="eyebrow">Power & Solar</p><h2 className="section-heading">Monitor first. Harvest what is available.</h2></div>
          <p className="body-large">A small 6 V, 1.5 W solar panel is used as an energy-assist experiment rather than a claim of continuous solar operation. One INA219 monitors the battery side and a second monitors solar input. The final 2S pack will use appropriate protection and a boost-charging stage; the original TP4056 single-cell chargers are not part of the final 2S architecture.</p>
        </div>
      </section>

      <section className="section section-paper">
        <div className="site-container aevns-detail-grid">
          <div><p className="eyebrow">Software & Data</p><h2 className="section-heading">Real measurements become the dataset.</h2></div>
          <p className="body-large">C++ firmware on the primary ESP32 handles navigation, sensing and telemetry. A Python UDP receiver collects live data and stores structured CSV records. As the Civil sensors are integrated, inclination and soil-moisture measurements will join the existing battery, solar, temperature, distance and navigation data.</p>
        </div>
      </section>

      <section className="section">
        <div className="site-container aevns-detail-grid">
          <div><p className="eyebrow">Machine Learning</p><h2 className="section-heading">Collect evidence before choosing the model.</h2></div>
          <p className="body-large">No landslide-prediction model is claimed. After controlled experiments produce enough data, the project will test simple models or decision rules for an inspection-attention output such as low, moderate or high. The target is preliminary condition indication—not certified geotechnical risk prediction.</p>
        </div>
      </section>


      <section className="section">
        <div className="site-container">
          <div className="aevns-detail-grid" style={{alignItems:"end",marginBottom:28}}>
            <div><p className="eyebrow">Build Evidence</p><h2 className="section-heading">The system is being built from real hardware.</h2></div>
            <p className="body-large">Early bench work covers the ESP32, ultrasonic sensing, motor control, battery/solar measurement and wiring before the full 4WD mechanical integration.</p>
          </div>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:18}}>
            <ProjectPhoto src="/projects/aevns/components-overview.png" alt="AEVNS-CI components including solar panel, ESP32, ultrasonic sensors, motor driver, motors and batteries" label="Hardware set" caption="Core electronics, energy hardware, ultrasonic sensors and drivetrain components used during development." position="center 55%" />
            <ProjectPhoto src="/projects/aevns/power-hardware.png" alt="Solar panel, ESP32, battery pack, ultrasonic sensors and L298N motor driver" label="Energy + control" caption="Solar panel, 2S battery hardware, ESP32 and navigation components during bench preparation." position="center 58%" />
            <ProjectPhoto src="/projects/aevns/prototype-wiring.png" alt="ESP32 prototype wiring on a breadboard with sensor modules" label="Bench prototype" caption="Breadboard integration used to test sensing and embedded connections before chassis installation." position="center" />
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="site-container">
          <p className="eyebrow">Data Flow</p><h2 className="section-heading">From physical slope to structured evidence.</h2>
          <SystemFlow />
        </div>
      </section>

      <section className="section">
        <div className="site-container" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:28,alignItems:"center"}}>
          <div><p className="eyebrow">Engineering Decisions</p><h2 className="section-heading">Every subsystem has a reason to be there.</h2><div className="body-large"><p><strong>4WD:</strong> selected for traction on controlled soil, gravel and artificial slopes.</p><p><strong>Capacitive moisture sensing:</strong> chosen for repeatable experiments without exposed resistive electrodes.</p><p><strong>Separate ESP32-CAM:</strong> keeps image acquisition separate from the primary navigation controller.</p><p><strong>2S + solar assist:</strong> supports the drivetrain while allowing battery and harvested-energy measurements.</p></div></div>
          <TelemetryConcept />
        </div>
      </section>

      <section className="section section-paper">
        <div className="site-container aevns-progress-grid">
          <div><p className="eyebrow">Current Progress</p><h2 className="section-heading">Separate what works from what comes next.</h2></div>
          <div className="progress-list">{progress.map(([status, item], index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><p><strong>{status}:</strong> {item}</p></div>)}</div>
        </div>
      </section>

      <section className="aevns-future">
        <div className="site-container aevns-detail-grid">
          <div><p className="eyebrow light-eyebrow">Project Aim</p><h2>Robotics is the tool. Slope inspection is the application.</h2></div>
          <p>AEVNS-CI is a student engineering prototype exploring how autonomous mobility, embedded sensing, renewable-energy monitoring, computer vision and data analysis can support preliminary Civil Engineering slope inspection. Professional geotechnical instruments and engineering judgement remain necessary for real slope-stability assessment.</p>
        </div>
      </section>
    </main>
  );
}
