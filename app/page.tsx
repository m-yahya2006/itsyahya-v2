import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";
import TechRibbon from "@/components/TechRibbon";

const expertise = [
  {
    title: "Civil Engineering",
    text: "Structures, infrastructure and sustainable built environments.",
    icon: "bridge",
  },
  {
    title: "Embedded Systems",
    text: "Sensors, microcontrollers and real-time solutions.",
    icon: "chip",
  },
  {
    title: "Data & AI",
    text: "From data collection to machine learning and intelligent decisions.",
    icon: "data",
  },
  {
    title: "Impact",
    text: "Applying technology to practical engineering challenges.",
    icon: "leaf",
  },
];

const selectedProjects = [
  {
    title: "Structural Analysis Study",
    subtitle: "Sustainable infrastructure solutions",
    type: "STRUCTURES",
    visual: "bridge",
    href: "/projects",
  },
  {
    title: "IoT Monitoring System",
    subtitle: "Real-time data for smarter decisions",
    type: "EMBEDDED",
    visual: "electronics",
    href: "/projects",
  },
  {
    title: "Computer Vision for Inspection",
    subtitle: "AI for real-world engineering challenges",
    type: "VISION",
    visual: "vision",
    href: "/projects",
  },
];

function ExpertiseIcon({ type }: { type: string }) {
  if (type === "bridge") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M5 32h38M10 32c5-9 9-14 14-14s9 5 14 14M24 10v22M9 17h30" />
      </svg>
    );
  }
  if (type === "chip") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <rect x="14" y="14" width="20" height="20" rx="2" />
        <path d="M19 5v9M29 5v9M19 34v9M29 34v9M5 19h9M5 29h9M34 19h9M34 29h9" />
      </svg>
    );
  }
  if (type === "data") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M8 38V25h7v13M21 38V16h7v22M34 38V8h7v30" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="M39 9C22 9 11 17 11 30c0 6 4 9 9 9 13 0 19-13 19-30Z" />
      <path d="M10 40c6-10 13-16 23-22" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="portfolio">
      <Navbar />

      <section className="home-hero">
        <div className="site-container home-hero-grid">
          <div className="home-hero-copy">
            <div className="hero-load hero-load-1">
              <p className="eyebrow">Civil Engineering · Embedded Systems · AI & Data</p>
            </div>

            <div className="hero-load hero-load-2">
              <h1 className="home-hero-title">
                Engineering
                <br />
                for a Smarter
                <br />
                <span>Tomorrow</span>
              </h1>
            </div>

            <div className="hero-load hero-load-3">
              <p className="body-large home-hero-intro">
                I&apos;m Muhammad Yahya, a Civil Engineering student at GIKI
                exploring intelligent systems, robotics and data-driven solutions
                that connect the physical and digital worlds.
              </p>
            </div>

            <div className="hero-tech-rail hero-load hero-load-4">
              <span className="tech-pill tech-pill-blue">STRUCTURES</span>
              <span className="tech-pill tech-pill-orange">SENSORS</span>
              <span className="tech-pill tech-pill-teal">ESP32</span>
              <span className="tech-pill tech-pill-gold">ML</span>
            </div>

            <div className="home-hero-actions hero-load hero-load-4">
              <Link href="/projects" className="button button-primary">
                Explore My Work <span aria-hidden="true">→</span>
              </Link>
              <Link href="/about" className="button button-secondary">
                About Me
              </Link>
            </div>

            <div className="home-stats hero-load hero-load-5" aria-label="Profile highlights">
              <div><strong>4+</strong><span>Projects</span></div>
              <div><strong>3+</strong><span>Domains</span></div>
              <div><strong>Continuous</strong><span>Learning</span></div>
              <div><strong>Global</strong><span>Perspective</span></div>
            </div>
          </div>

          <div className="home-hero-visual hero-load hero-load-image">
            <div className="hero-image-shade" />
            <div className="image-note image-note-top">
              INFRASTRUCTURE<br />TECHNOLOGY<br />PEOPLE<br />A BRIGHTER FUTURE
            </div>
            <div className="image-note image-note-bottom">
              REAL PROBLEMS.<br />PRACTICAL SOLUTIONS.
            </div>
            <div className="hero-image-caption">
              <span>01</span>
              <p>Infrastructure as the physical layer of intelligent systems.</p>
            </div>
          </div>
        </div>
      </section>

      <TechRibbon />

      <section className="expertise-strip">
        <div className="site-container expertise-grid">
          {expertise.map((item, index) => (
            <Reveal key={item.title} delay={index * 90} className="expertise-reveal">
              <article className={`expertise-item expertise-tone-${index + 1}`}>
                <div className="expertise-icon">
                  <ExpertiseIcon type={item.icon} />
                </div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <Link href="/about" className="text-link">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="featured-home">
        <div className="site-container">
          <Reveal>
            <div className="featured-kicker">
              <span>FEATURED PROJECT</span>
              <span className="featured-rule" />
              <span>01 / 03</span>
            </div>
          </Reveal>

          <div className="featured-home-grid">
            <Reveal>
              <div className="featured-copy">
                <h2>
                  Autonomous
                  <br />
                  <span>EV Navigation System</span>
                </h2>
                <p>
                  A self-designed autonomous ground robot combining embedded
                  systems, navigation, solar-battery monitoring, telemetry and
                  machine learning — with future applications in infrastructure
                  inspection.
                </p>

                <Link href="/projects/aevns" className="button button-primary">
                  View Project <span aria-hidden="true">→</span>
                </Link>

                <div className="featured-capabilities">
                  <span>Autonomous Navigation</span>
                  <span>Energy Monitoring</span>
                  <span>Wireless Telemetry</span>
                  <span>Modular Design</span>
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="prototype-stage">
                <div className="prototype-stage-label">
                  <span>PROTOTYPE / IN DEVELOPMENT</span>
                  <span>AEVNS / 2026</span>
                </div>
                <div className="prototype-placeholder">
                  <div className="prototype-silhouette" aria-hidden="true">
                    <div className="proto-roof" />
                    <div className="proto-body" />
                    <div className="proto-wheel proto-wheel-left" />
                    <div className="proto-wheel proto-wheel-right" />
                  </div>
                  <span className="prototype-plus">+</span>
                  <p>Final prototype photography will be added after build completion.</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="editorial-about">
        <div className="site-container editorial-about-grid">
          <Reveal className="editorial-copy">
            <p className="eyebrow">Turning Ideas Into Real Solutions</p>
            <p className="body-large">
              I enjoy exploring how engineering, data and technology come
              together to solve meaningful problems.
            </p>
            <Link href="/about" className="button button-primary">
              More About Me <span aria-hidden="true">→</span>
            </Link>
          </Reveal>

          <Reveal delay={100} className="architecture-image" />

          <Reveal delay={180}>
            <blockquote className="editorial-quote">
              <span>“</span>
              Curiosity
              <br />
              builds bridges
              <br />
              between ideas.
              <cite>— Muhammad Yahya</cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="selected-work">
        <div className="site-container">
          <div className="selected-work-head">
            <p className="eyebrow">Selected Projects</p>
            <Link href="/projects" className="text-link">
              View all projects <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="selected-work-grid">
            {selectedProjects.map((project, index) => (
              <Reveal key={project.title} delay={index * 90}>
                <Link href={project.href} className="project-card">
                  <div className={`project-card-visual project-card-${project.visual}`}>
                    <span>{project.type}</span>
                    <small>Reference visual — replace with your project image</small>
                  </div>
                  <div className="project-card-copy">
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.subtitle}</p>
                    </div>
                    <span aria-hidden="true">→</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="home-contact-banner">
        <div className="site-container home-contact-inner">
          <Reveal>
            <div>
              <p className="eyebrow light-eyebrow">Let&apos;s Collaborate</p>
              <h2>Open to opportunities, collaborations and meaningful conversations.</h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Link href="/contact" className="button home-contact-button">
              Get in Touch <span aria-hidden="true">→</span>
            </Link>
          </Reveal>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-container site-footer-grid">
          <Link href="/" className="nav-brand-name">
            YAHYA<span className="nav-brand-mark">.</span>
          </Link>
          <nav aria-label="Footer navigation">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/journey">Journey</Link>
            <Link href="/contact">Contact</Link>
          </nav>
          <p>© 2026 Muhammad Yahya. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
