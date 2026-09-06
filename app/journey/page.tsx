import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

const journeyItems = [
  {
    number: "01",
    title: "Civil Engineering",
    source: "GIKI",
    text: "Building the physical-engineering foundation through structures, materials, infrastructure and the built environment.",
    tone: "concrete",
    tag: "PHYSICAL WORLD",
  },
  {
    number: "02",
    title: "Embedded Systems",
    source: "Hands-on projects",
    text: "Connecting sensors, microcontrollers, motor control and wireless telemetry to physical environments.",
    tone: "orange",
    tag: "SENSE + CONTROL",
  },
  {
    number: "03",
    title: "Machine Learning",
    source: "DeepLearning.AI · Stanford Online",
    text: "Learning how data can support prediction, classification and more informed engineering decisions.",
    tone: "blue",
    tag: "DATA + LEARN",
  },
  {
    number: "04",
    title: "Robotics & Computer Vision",
    source: "Independent experimentation",
    text: "Exploring navigation, perception, inspection and the interface between computation and the built world.",
    tone: "teal",
    tag: "PERCEIVE + ACT",
  },
];

export default function JourneyPage() {
  return (
    <main className="portfolio">
      <Navbar />

      <section className="page-hero journey-hero">
        <div className="site-container page-hero-grid">
          <div>
            <p className="eyebrow">Journey</p>
            <h1 className="page-title">
              Learning across
              <br />
              <span>connected systems.</span>
            </h1>
          </div>

          <div className="page-hero-aside">
            <p>
              My path is deliberately multidisciplinary: civil engineering gives
              me the physical context, while sensing, robotics, AI and software
              expand what I can measure, automate and understand.
            </p>
          </div>
        </div>
      </section>

      <section className="journey-map section-paper">
        <div className="site-container">
          <div className="journey-line" aria-hidden="true" />

          {journeyItems.map((item, index) => (
            <Reveal key={item.number} delay={index * 90}>
              <article className={`journey-node journey-${item.tone}`}>
                <div className="journey-node-number">{item.number}</div>
                <div className="journey-node-copy">
                  <span className="journey-tag">{item.tag}</span>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
                <div className="journey-node-source">{item.source}</div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
