import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import ProjectConceptVisual from "@/components/ProjectConceptVisual";

export default function ProjectsPage() {
  return (
    <main className="portfolio">
      <Navbar />
      <section className="page-hero">
        <div className="site-container page-hero-grid">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h1 className="page-title">One project.<br /><span>Built deeply.</span></h1>
          </div>
          <div className="page-hero-aside">
            <p>I am currently developing one focused Civil Engineering project that combines autonomous mobility, sensing, telemetry and data-driven analysis.</p>
          </div>
        </div>
      </section>

      <section className="projects-index section-paper">
        <div className="site-container projects-list">
          <Reveal>
            <Link href="/projects/aevns" className="project-index-row">
              <div className="project-index-visual" style={{overflow:"hidden",borderRadius:22}}>
                <ProjectConceptVisual compact />
              </div>
              <div className="project-index-copy">
                <div className="project-index-meta"><span>01</span><span>In Development</span></div>
                <h2>AEVNS-CI</h2>
                <h3>Autonomous slope-condition inspection rover</h3>
                <p>A solar-assisted 4WD student rover being developed for preliminary slope-condition inspection using slope inclination, soil moisture and visible ground-crack observations.</p>
                <div className="project-tags">{["Civil Engineering","ESP32","Robotics","Sensors","Python","Computer Vision"].map((tech)=><span key={tech}>{tech}</span>)}</div>
              </div>
              <span className="project-index-arrow" aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
