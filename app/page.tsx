import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

const expertise = [
  ["01", "Civil Engineering", "Structures, infrastructure and the built environment remain the engineering foundation."],
  ["02", "Embedded Systems", "Sensors, ESP32 control and real-time data acquisition connect the project to physical conditions."],
  ["03", "Data & AI", "Collected measurements can support analysis, computer vision and later machine-learning experiments."],
  ["04", "Impact", "Technology is used as a tool for practical civil-engineering monitoring problems, not as the project purpose."],
];

export default function Home() {
  return (
    <main className="portfolio">
      <Navbar />

      <section className="home-hero">
        <div className="site-container home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow hero-load hero-load-1">Civil Engineering · Embedded Systems · AI & Data</p>
            <h1 className="home-hero-title hero-load hero-load-2">
              Engineering
              <br />
              for a <span>Smarter</span>
              <br />
              <span>Tomorrow</span>
            </h1>
            <p className="body-large home-hero-intro hero-load hero-load-3">
              I&apos;m Muhammad Yahya, a Civil Engineering student exploring intelligent systems,
              robotics and data-driven tools that connect the physical and digital worlds.
            </p>
            <div className="home-hero-actions hero-load hero-load-4">
              <Link href="/projects" className="button button-primary">Explore My Work <span>→</span></Link>
              <Link href="/about" className="button button-secondary">About Me</Link>
            </div>
            <div className="home-stats hero-load hero-load-5">
              <div><strong>1</strong><span>Project</span></div>
              <div><strong>1</strong><span>Domain</span></div>
              <div><strong>Continuous</strong><span>Learning</span></div>
              <div><strong>Global</strong><span>Perspective</span></div>
            </div>
          </div>

          <div className="home-hero-visual hero-load hero-load-image" aria-label="Civil engineering infrastructure reference visual">
            <div className="hero-image-shade" />
            <div className="image-note image-note-top">INFRASTRUCTURE<br/>TECHNOLOGY<br/>PEOPLE<br/>A BRIGHTER FUTURE</div>
            <div className="image-note image-note-bottom">REAL PROBLEMS.<br/>PRACTICAL SOLUTIONS.</div>
            <div className="hero-image-caption"><span>01</span><p>Civil engineering as the foundation. Intelligent systems as supporting tools.</p></div>
          </div>
        </div>
      </section>

      <section className="expertise-strip">
        <div className="site-container expertise-grid">
          {expertise.map(([number,title,text]) => (
            <Reveal key={number} className="expertise-reveal">
              <article className={`expertise-item expertise-tone-${number}`}>
                <div className="expertise-icon" aria-hidden="true">{number}</div>
                <h2>{title}</h2><p>{text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="featured-home">
        <div className="site-container">
          <div className="featured-kicker"><span>FEATURED PROJECT</span><span className="featured-rule"/><span>01 / 01</span></div>
          <div className="featured-home-grid">
            <Reveal>
              <div className="featured-copy">
                <h2>AEVNS-CI<br/><span>Slope Monitoring Rover</span></h2>
                <p>
                  A solar-assisted 4WD rover in development for preliminary slope-condition inspection using
                  inclination, soil moisture and visible ground-crack monitoring, with ESP32 telemetry and
                  planned data-driven analysis.
                </p>
                <Link href="/projects/aevns" className="button button-primary">View Project <span>→</span></Link>
                <div className="featured-capabilities">
                  <span>4WD NAVIGATION</span><span>SLOPE SENSING</span><span>SOIL MOISTURE</span><span>GROUND VISION</span><span>TELEMETRY</span><span>SOLAR ASSIST</span>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div
                className="featured-rover-visual"
                role="img"
                aria-label="AI-generated visual of a solar-assisted 4WD rover inspecting a slope"
              >
                <div className="featured-rover-shade" />
                <div className="featured-rover-meta">
                  <span>AEVNS-CI / IN DEVELOPMENT</span>
                  <span>SLOPE · SOIL · VISION · TELEMETRY</span>
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
            <p className="body-large">I enjoy exploring how engineering, sensing and computation can work together to investigate meaningful physical-world problems.</p>
            <Link href="/about" className="text-link">More About Me <span>→</span></Link>
          </Reveal>
          <Reveal><div className="architecture-image" role="img" aria-label="Architectural reference photography" /></Reveal>
          <Reveal>
            <blockquote className="editorial-quote"><span>“</span>Curiosity builds bridges between ideas.<cite>Muhammad Yahya</cite></blockquote>
          </Reveal>
        </div>
      </section>

      <section className="selected-work">
        <div className="site-container">
          <div className="selected-work-head"><p className="eyebrow">Selected Project</p><Link href="/projects" className="text-link">View project <span>→</span></Link></div>
          <div className="selected-work-grid single-project-grid">
            <Reveal>
              <Link href="/projects/aevns" className="project-card single-project-card">
                <div className="project-card-visual project-card-aevns"><span>CIVIL × ROBOTICS</span><small>PROJECT IN DEVELOPMENT</small></div>
                <div className="project-card-copy"><div><h3>AEVNS-CI</h3><p>Autonomous slope-condition monitoring rover</p></div><span>→</span></div>
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="home-contact-banner">
        <div className="site-container home-contact-inner">
          <div><p className="eyebrow light-eyebrow">Let&apos;s Connect</p><h2>Open to learning, opportunities and meaningful engineering conversations.</h2></div>
          <Link href="/contact" className="button home-contact-button">Get in Touch <span>→</span></Link>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-container site-footer-grid"><strong>YAHYA<span className="nav-brand-mark">.</span></strong><nav><Link href="/">Home</Link><Link href="/about">About</Link><Link href="/projects">Projects</Link><Link href="/journey">Journey</Link><Link href="/contact">Contact</Link></nav><p>© 2026 Muhammad Yahya</p></div>
      </footer>
    </main>
  );
}
