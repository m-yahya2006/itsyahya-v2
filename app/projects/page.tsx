import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

const projects = [
  {
    index: "01",
    title: "AEVNS-CI",
    subtitle: "Autonomous slope-condition inspection rover",
    description:
      "A low-cost, solar-assisted 4WD rover being developed for preliminary slope-condition inspection using inclination, soil-moisture and visible ground-crack observations.",
    technologies: ["Civil Engineering", "ESP32", "C++", "Python", "Sensors", "ML"],
    status: "In Progress",
    href: "/projects/aevns",
    visual: "project-featured-visual",
  },
];

export default function ProjectsPage() {
  return (
    <main className="portfolio">
      <Navbar />
      <section className="page-hero">
        <div className="site-container page-hero-grid">
          <div><p className="eyebrow">Selected Work</p><h1 className="page-title">Projects built<br /><span>to learn by doing.</span></h1></div>
          <div className="page-hero-aside"><p>Focused work at the intersection of civil engineering, sensing, robotics, data and intelligent systems.</p></div>
        </div>
      </section>
      <section className="projects-index section-paper">
        <div className="site-container projects-list">
          {projects.map((project) => (
            <Reveal key={project.index}>
              <Link href={project.href} className="project-index-row">
                <div className={`project-index-visual ${project.visual}`} style={{overflow:"hidden",position:"relative"}}><img src="/projects/aevns/power-hardware.png" alt="AEVNS-CI hardware development" style={{width:"100%",height:"100%",objectFit:"cover",filter:"saturate(.85) contrast(1.04) brightness(.75)"}}/><span style={{position:"absolute",left:16,top:16}}>{project.status}</span></div>
                <div className="project-index-copy">
                  <div className="project-index-meta"><span>{project.index}</span><span>{project.status}</span></div>
                  <h2>{project.title}</h2><h3>{project.subtitle}</h3><p>{project.description}</p>
                  <div className="project-tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div>
                </div>
                <span className="project-index-arrow" aria-hidden="true">→</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}
