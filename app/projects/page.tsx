import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

const projects = [
  {
    index: "01",
    title: "AEVNS-CI",
    subtitle: "Autonomous Slope-Condition Monitoring Rover",
    description: "A solar-assisted 4WD Civil Engineering prototype in development for preliminary slope-condition inspection using inclination, soil moisture and visible ground-crack monitoring.",
    technologies: ["Civil Engineering", "ESP32", "4WD", "Telemetry", "Computer Vision"],
    status: "In Progress",
    href: "/projects/aevns",
  },
];

export default function ProjectsPage() {
  return (
    <main className="portfolio">
      <Navbar />
      <section className="page-hero"><div className="site-container page-hero-grid"><div><p className="eyebrow">Selected Work</p><h1 className="page-title">One project.<br/><span>Built deeply.</span></h1></div><div className="page-hero-aside"><p>My current flagship project connects Civil Engineering with embedded sensing, autonomous mobility, telemetry and data analysis.</p></div></div></section>
      <section className="projects-index section-paper"><div className="site-container projects-list">
        {projects.map((project)=>(
          <Reveal key={project.index}>
            <Link href={project.href} className="project-index-row">
              <div className="project-index-visual project-aevns-concept"><span>{project.status}</span></div>
              <div className="project-index-copy"><div className="project-index-meta"><span>{project.index}</span><span>{project.status}</span></div><h2>{project.title}</h2><h3>{project.subtitle}</h3><p>{project.description}</p><div className="project-tags">{project.technologies.map(t=><span key={t}>{t}</span>)}</div></div>
              <span className="project-index-arrow" aria-hidden="true">→</span>
            </Link>
          </Reveal>
        ))}
      </div></section>
    </main>
  );
}
