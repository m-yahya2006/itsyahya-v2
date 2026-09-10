import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

const architecture = [
  ["Mobility", "4WD differential-drive rover for controlled soil, gravel and artificial slope tests."],
  ["Slope", "MPU6050 IMU for rover inclination and approximate slope-angle measurement."],
  ["Soil", "Capacitive soil-moisture sensing at selected inspection locations."],
  ["Vision", "ESP32-CAM + OV2640 for visible ground-crack image acquisition; heavier analysis runs off-board."],
  ["Navigation", "Three ultrasonic sensors support obstacle awareness and autonomous movement decisions."],
  ["Energy", "2S Li-ion pack with battery/solar INA219 monitoring and solar-assisted charging architecture."],
  ["Telemetry", "ESP32 → Wi-Fi/UDP → Python → CSV for live measurements and experiment logging."],
  ["Analysis", "Later data analysis may combine slope, moisture and crack observations into inspection-attention levels."],
];

const progress = [
  ["Complete", "ESP32 motor-control and autonomous obstacle-avoidance logic"],
  ["Complete", "Three-direction ultrasonic sensing"],
  ["Complete", "Battery and solar INA219 monitoring"],
  ["Complete", "DS18B20 temperature monitoring and safety logic"],
  ["Complete", "Wi-Fi UDP telemetry and CSV-oriented data pipeline"],
  ["In progress", "4WD mechanical integration and final power distribution"],
  ["Next", "MPU6050 slope measurement and soil-moisture integration"],
  ["Next", "ESP32-CAM ground-image acquisition and controlled slope experiments"],
  ["Later", "Computer-vision crack analysis and data-driven inspection-attention model"],
];

export default function AevnsPage() {
  return (
    <main className="portfolio">
      <Navbar />
      <section className="aevns-hero">
        <div className="site-container">
          <Link href="/projects" className="aevns-back">← Back to Projects</Link>
          <div className="aevns-hero-grid aevns-hero-enter">
            <div><p className="eyebrow light-eyebrow">Flagship Project · In Development</p><h1>AEVNS-CI</h1><h2>Autonomous Solar-Assisted Rover for Preliminary Slope-Condition Inspection</h2><p>A Civil Engineering student prototype designed to scout controlled slope test areas, observe slope inclination, soil moisture and visible ground cracks, and transmit field data for logging and later analysis.</p><div className="aevns-tags">{["Civil Engineering","ESP32","4WD","MPU6050","Soil Moisture","ESP32-CAM","UDP"].map(x=><span key={x}>{x}</span>)}</div></div>
            <div className="aevns-concept-card"><Image src="/projects/aevns/slope-rover-concept.png" alt="Concept visualization of AEVNS-CI 4WD solar-assisted slope monitoring rover" width={1536} height={1024}/><div className="aevns-concept-caption"><span>CONCEPT VISUALIZATION</span><small>System in development — not final prototype photography</small></div></div>
          </div>
        </div>
      </section>

      <section className="aevns-overview"><div className="site-container aevns-overview-grid"><div><p className="eyebrow">Civil Engineering Aim</p><h2 className="section-heading">Inspect the condition of a slope before sending people everywhere.</h2></div><p className="body-large">The rover is being developed as a low-cost mobile scouting platform for preliminary slope-condition monitoring. It does not certify slope safety and does not predict when a landslide will occur. Its role is to collect observable indicators that can help identify locations deserving closer engineering investigation.</p></div></section>

      <section className="section section-paper"><div className="site-container"><p className="eyebrow">Primary Indicators</p><div className="architecture-grid indicator-grid">{[["01","Slope inclination","MPU6050"],["02","Soil moisture","Capacitive probe"],["03","Visible ground cracks","ESP32-CAM / OV2640"]].map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

      <section className="section"><div className="site-container"><p className="eyebrow">System Architecture</p><div className="architecture-grid architecture-grid-wide">{architecture.map(([t,d],i)=><article key={t}><span>{String(i+1).padStart(2,"0")}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

      <section className="section section-paper"><div className="site-container aevns-detail-grid"><div><p className="eyebrow">Power & Solar</p><h2 className="section-heading">Solar-assisted, battery-powered.</h2></div><p className="body-large">The rover uses two Li-ion cells as a 2S pack. Battery and solar electrical data are monitored with two INA219 sensors. The final charging path uses a 2S balanced BMS and a CN3302 boost-charging stage so the small 6 V, 1.5 W solar panel can provide supplementary charging. Solar is an energy-assist feature, not the rover&apos;s primary power source. Existing TP4056 boards are not part of the final 2S charging path.</p></div></section>

      <section className="section"><div className="site-container aevns-detail-grid"><div><p className="eyebrow">Software & Data</p><h2 className="section-heading">Real rover measurements become an experiment dataset.</h2></div><p className="body-large">ESP32 firmware handles navigation, sensing, energy monitoring and safety logic. Telemetry is sent over Wi-Fi using UDP to a Python receiver and can be stored in CSV form. New Civil Engineering measurements — slope inclination and soil moisture — will be added to this same pipeline, while camera images are handled separately by the ESP32-CAM.</p></div></section>

      <section className="section section-paper"><div className="site-container aevns-detail-grid"><div><p className="eyebrow">Computer Vision & ML</p><h2 className="section-heading">Planned analysis, not a finished prediction system.</h2></div><p className="body-large">The first computer-vision objective is visible ground-crack detection and later comparison of crack observations over time. After controlled experimental data is collected, a simple decision or machine-learning model may combine slope angle, soil moisture and crack evidence into Low / Moderate / High inspection-attention levels. These levels indicate monitoring priority; they are not professional landslide predictions.</p></div></section>

      <section className="section"><div className="site-container aevns-progress-grid"><div><p className="eyebrow">Development Status</p><h2 className="section-heading">Only completed work is marked complete.</h2></div><div className="progress-list">{progress.map(([s,t],i)=><div key={t}><span>{String(i+1).padStart(2,"0")}</span><p><strong>{s}</strong> — {t}</p></div>)}</div></div></section>

      <section className="aevns-future"><div className="site-container aevns-detail-grid"><div><p className="eyebrow light-eyebrow">Project Boundary</p><h2>Robotics is the technology. Slope inspection is the Civil Engineering application.</h2></div><p>AEVNS-CI is a student engineering prototype for controlled experiments and learning. Professional slope-stability assessment requires appropriate geotechnical investigation, instrumentation and engineering judgement beyond the scope of this rover.</p></div></section>
    </main>
  );
}
