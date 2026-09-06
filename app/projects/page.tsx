import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

const projects = [
  {
    index: "01",
    title: "AEVNS",
    subtitle: "Autonomous Electric Vehicle Navigation System",
    description:
      "A mobile robotics platform combining embedded sensing, autonomous navigation, energy monitoring, wireless telemetry and machine-learning experiments.",
    technologies: ["ESP32", "C++", "Python", "ML", "UDP"],
    status: "In Progress",
    href: "/projects/aevns",
    visual: "project-featured-visual",
  },
  {
    index: "02",
    title: "Structural Analysis Study",
    subtitle: "Civil engineering / structural systems",
    description:
      "Reserved for a selected structural or infrastructure project. Replace this copy and image with your strongest civil-engineering case study.",
    technologies: ["Structures", "Analysis", "Civil"],
    status: "Add Project",
    href: "#",
    visual: "project-structural-visual",
  },
  {
    index: "03",
    title: "Computer Vision for Inspection",
    subtitle: "AI for physical-system inspection",
    description:
      "Reserved for your strongest real computer-vision, depth, point-cloud or inspection project and its measured results.",
    technologies: ["Python", "OpenCV", "Vision"],
    status: "Add Project",
    href: "#",
    visual: "project-vision-visual",
  },
];

export default function ProjectsPage() {
  return (
    <main className="portfolio">
      <Navbar />

      <section className="page-hero">
        <div className="site-container page-hero-grid">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h1 className="page-title">
              Projects built
              <br />
              <span>to learn by doing.</span>
            </h1>
          </div>

          <div className="page-hero-aside">
            <p>
              Systems and experiments across civil engineering, embedded
              computing, robotics, data and artificial intelligence.
            </p>
          </div>
        </div>
      </section>

      <section className="projects-index section-paper">
        <div className="site-container projects-list">
          {projects.map((project) => {
            const card = (
              <>
                <div className={`project-index-visual ${project.visual}`}>
                  <span>{project.status}</span>
                </div>

                <div className="project-index-copy">
                  <div className="project-index-meta">
                    <span>{project.index}</span>
                    <span>{project.status}</span>
                  </div>

                  <h2>{project.title}</h2>
                  <h3>{project.subtitle}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.technologies.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>
                </div>

                <span className="project-index-arrow" aria-hidden="true">→</span>
              </>
            );

            return (
              <Reveal key={project.index}>
                {project.href === "#" ? (
                  <article className="project-index-row is-placeholder">
                    {card}
                  </article>
                ) : (
                  <Link href={project.href} className="project-index-row">
                    {card}
                  </Link>
                )}
              </Reveal>
            );
          })}
        </div>
      </section>
    </main>
  );
}
