import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import SlopeRoverVisual from "@/components/SlopeRoverVisual";
import SystemFlow from "@/components/SystemFlow";
import TelemetryConcept from "@/components/TelemetryConcept";

const architecture = [
  ["Mobility", "4WD differential-drive rover for controlled soil, gravel and artificial-slope testing."],
  ["Navigation", "Three ultrasonic sensors for obstacle awareness and autonomous movement."],
  ["Civil sensing", "MPU6050 inclination, capacitive soil-moisture sensing and ESP32-CAM ground observation."],
  ["Energy + data", "2S battery protection, solar-assisted charging, INA219 monitoring, Wi-Fi/UDP and Python logging."],
];

const progress = [
  ["Complete", "ESP32 autonomous navigation and motor-control logic"],
  ["Complete", "Three-direction ultrasonic obstacle sensing"],
  ["Complete", "Battery, solar and temperature telemetry logic"],
  ["Complete", "Wi-Fi/UDP data transmission to the computer"],
  ["In progress", "4WD mechanical and electrical integration"],
  ["Next", "Integrate MPU6050, soil-moisture sensing and ESP32-CAM"],
  ["Later", "Controlled slope experiments, computer vision and attention-level analysis"],
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
              <p className="eyebrow light-eyebrow">Flagship Project · In Development</p>
              <h1>AEVNS-CI</h1>
              <h2>Autonomous Slope-Condition Inspection Rover</h2>
              <p>A low-cost, solar-assisted 4WD student rover being developed for preliminary slope-condition inspection and landslide-risk indication using slope inclination, soil moisture and visible ground-crack observations.</p>
              <div className="aevns-tags">{["Civil Engineering","ESP32","C++","Python","4WD Robotics","Computer Vision"].map(i=><span key={i}>{i}</span>)}</div>
            </div>
            <SlopeRoverVisual />
          </div>
        </div>
      </section>

      <section className="aevns-overview">
        <div className="site-container aevns-overview-grid">
          <div><p className="eyebrow">Purpose</p><h2 className="section-heading">Collect useful surface indicators before detailed inspection.</h2></div>
          <p className="body-large">The rover explores whether a compact autonomous platform can remotely collect a focused set of slope-condition observations. It is a student research and learning prototype, not professional geotechnical instrumentation and not a landslide-prediction system.</p>
        </div>
      </section>

      <section className="section section-paper">
        <div className="site-container">
          <p className="eyebrow">System Architecture</p>
          <div className="architecture-grid">{architecture.map(([t,d],i)=><Reveal key={t} delay={i*70}><article><span>0{i+1}</span><h3>{t}</h3><p>{d}</p></article></Reveal>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="site-container aevns-detail-grid">
          <div><p className="eyebrow">Civil Engineering Focus</p><h2 className="section-heading">Three indicators. One inspection objective.</h2></div>
          <div className="body-large"><p><strong>Slope inclination:</strong> MPU6050 orientation data provides an approximate local slope measurement during controlled testing.</p><p><strong>Soil moisture:</strong> a capacitive probe records relative wetness at selected test points.</p><p><strong>Visible ground cracks:</strong> an ESP32-CAM captures slope-surface imagery for later computer-vision experiments and repeat-observation comparison.</p></div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="site-container aevns-detail-grid">
          <div><p className="eyebrow">Energy System</p><h2 className="section-heading">Solar-assisted, battery-powered.</h2></div>
          <p className="body-large">Two Li-ion cells form a 2S pack. A balanced 2S BMS provides pack protection, while a CN3302-based boost charger supports charging from the small 6 V solar panel or a suitable low-voltage USB source. The 1.5 W panel is an energy-assist experiment; it is not presented as the rover&apos;s continuous power source. Two INA219 modules monitor battery and solar electrical data.</p>
        </div>
      </section>

      <section className="section">
        <div className="site-container aevns-detail-grid">
          <div><p className="eyebrow">Software & Telemetry</p><h2 className="section-heading">Physical measurements become structured data.</h2></div>
          <p className="body-large">C++ firmware on the primary ESP32 handles autonomous navigation, obstacle sensing, power monitoring and telemetry. The rover sends UDP packets over Wi-Fi to a Python receiver on the computer, where measurements can be logged to CSV and displayed on a dashboard.</p>
        </div>
      </section>

      <section className="section section-paper">
        <div className="site-container">
          <p className="eyebrow">Data Flow</p><h2 className="section-heading">From physical slope to engineering evidence.</h2>
          <SystemFlow />
        </div>
      </section>

      <section className="section">
        <div className="site-container" style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",gap:28,alignItems:"center"}}>
          <div><p className="eyebrow">Engineering Decisions</p><h2 className="section-heading">Every subsystem supports the Civil task.</h2><div className="body-large"><p><strong>4WD:</strong> traction for controlled soil, gravel and artificial slopes.</p><p><strong>Capacitive moisture sensor:</strong> better suited to repeated soil experiments than exposed resistive probes.</p><p><strong>Separate ESP32-CAM:</strong> keeps image acquisition separate from the main navigation controller.</p><p><strong>Solar assist:</strong> adds renewable-energy monitoring without overstating the panel&apos;s capability.</p></div></div>
          <TelemetryConcept />
        </div>
      </section>

      <section className="section section-paper">
        <div className="site-container aevns-progress-grid">
          <div><p className="eyebrow">Development Status</p><h2 className="section-heading">Clear separation between completed and planned work.</h2></div>
          <div className="progress-list">{progress.map(([s,i],n)=><div key={i}><span>{String(n+1).padStart(2,"0")}</span><p><strong>{s}:</strong> {i}</p></div>)}</div>
        </div>
      </section>

      <section className="section">
        <div className="site-container aevns-detail-grid">
          <div><p className="eyebrow">Machine Learning</p><h2 className="section-heading">Data first. Model later.</h2></div>
          <p className="body-large">No finished landslide-risk model is claimed. After controlled experiments provide enough meaningful data, the project can test simple decision rules or machine-learning models that combine slope, moisture and crack observations into a preliminary low / moderate / high inspection-attention level.</p>
        </div>
      </section>

      <section className="aevns-future">
        <div className="site-container aevns-detail-grid">
          <div><p className="eyebrow light-eyebrow">Project Aim</p><h2>Robotics is the tool. Slope inspection is the Civil Engineering application.</h2></div>
          <p>AEVNS-CI demonstrates how autonomous mobility, embedded sensing, renewable-energy monitoring, computer vision and data analysis can be combined around one focused Civil Engineering problem. Real slope-stability assessment still requires appropriate geotechnical investigation and professional engineering judgement.</p>
        </div>
      </section>
    </main>
  );
}
