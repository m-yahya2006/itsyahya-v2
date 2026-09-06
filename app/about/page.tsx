import Link from "next/link";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/Reveal";

const skills = [
  "Python & machine learning",
  "C++ & ESP32 programming",
  "Sensors & embedded systems",
  "UDP networking & data logging",
  "Git & GitHub",
  "Computer vision",
];

const learning = [
  "Machine Learning",
  "Artificial Intelligence",
  "Robotics",
  "Embedded Systems",
  "Networking",
  "Computer Vision",
];

const certificates = [
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI · Stanford Online",
    brand: "DL",
    brandName: "DeepLearning.AI",
    tone: "coral",
    href: "https://coursera.org/share/6be51d404ad73872ed761e75216bf570",
  },
  {
    title: "Neural Networks and Deep Learning",
    issuer: "DeepLearning.AI",
    brand: "AI",
    brandName: "DeepLearning.AI",
    tone: "coral",
    href: "https://coursera.org/share/22f63840bc63446a6ee9b34d99d6ba01",
  },
  {
    title: "Improving Deep Neural Networks",
    issuer: "DeepLearning.AI",
    brand: "NN",
    brandName: "DeepLearning.AI",
    tone: "blue",
    href: "https://coursera.org/share/bd6fb0a8cecf5db25e4b966cbf127573",
  },
  {
    title: "Structuring Machine Learning Projects",
    issuer: "DeepLearning.AI",
    brand: "ML",
    brandName: "DeepLearning.AI",
    tone: "teal",
    href: "https://coursera.org/share/93c754411ab23e7c861b1d0e2bccf0fc",
  },
  {
    title: "Prompt Engineering for ChatGPT",
    issuer: "Vanderbilt University",
    brand: "VU",
    brandName: "Vanderbilt",
    tone: "gold",
    href: "https://coursera.org/share/3ea5ced720ee799199b9ed5e038a9793",
  },
];

export default function AboutPage() {
  return (
    <main className="portfolio">
      <Navbar />

      <section className="page-hero">
        <div className="site-container page-hero-grid">
          <div>
            <p className="eyebrow">About Me</p>
            <h1 className="page-title">
              Civil engineering,
              <br />
              <span>beyond traditional boundaries.</span>
            </h1>
          </div>

          <div className="page-hero-aside">
            <p>
              I&apos;m Yahya, a Civil Engineering student at GIKI. Alongside my
              degree, I&apos;m exploring embedded systems, machine learning,
              programming, networking and robotics through hands-on projects.
            </p>
            <p>
              My goal is not to move away from civil engineering, but to
              understand how modern computing and intelligent systems can be
              applied to physical engineering problems.
            </p>
          </div>
        </div>
      </section>

      <section className="about-editorial section-paper">
        <div className="site-container about-editorial-grid">
          <Reveal className="about-photo-real">
            <div className="about-photo-caption">
              <span>PHYSICAL SYSTEMS / BUILT ENVIRONMENT</span>
              <small>Reference architecture visual</small>
            </div>
          </Reveal>

          <div>
            <p className="eyebrow">Foundation</p>
            <h2 className="section-heading">Engineering first. Technology as an extension.</h2>
            <p className="body-large">
              The common thread across my interests is physical systems. I am
              most interested in understanding how sensing, computation and data
              can help engineers observe, measure and improve the built world.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container two-column-section">
          <div>
            <p className="eyebrow">Education</p>
          </div>
          <div className="education-line">
            <span>GIKI</span>
            <div>
              <h2>Bachelor&apos;s in Civil Engineering</h2>
              <p>Undergraduate · Second Year</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="site-container two-column-section">
          <div>
            <p className="eyebrow">Working With</p>
          </div>
          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill} className="simple-skill">
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container two-column-section">
          <div>
            <p className="eyebrow">Currently Learning</p>
          </div>
          <div className="learning-cloud">
            {learning.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-paper">
        <div className="site-container two-column-section">
          <div>
            <p className="eyebrow">Learning & Credentials</p>
          </div>
          <div className="credentials-showcase">
            <div className="credentials-intro">
              <p>
                Structured learning that supports the projects I build — from
                machine learning foundations to intelligent-system workflows.
              </p>
            </div>

            <div className="credential-cards">
              {certificates.map((certificate, index) => (
                <Reveal key={certificate.title} delay={index * 70}>
                  <a
                    href={certificate.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`credential-card credential-${certificate.tone}`}
                  >
                    <div className="credential-card-top">
                      <div className="credential-logo" aria-hidden="true">
                        <span>{certificate.brand}</span>
                      </div>

                      <div className="credential-brand">
                        <small>ISSUER</small>
                        <strong>{certificate.brandName}</strong>
                      </div>

                      <span className="credential-open" aria-hidden="true">↗</span>
                    </div>

                    <div className="credential-card-copy">
                      <h3>{certificate.title}</h3>
                      <p>{certificate.issuer}</p>
                    </div>

                    <div className="credential-card-bottom">
                      <span>VERIFIED COURSEWORK</span>
                      <span>0{index + 1}</span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-cta">
        <div className="site-container page-cta-inner">
          <h2>Interested in what I&apos;m building?</h2>
          <Link href="/projects" className="button home-contact-button">
            Explore Projects <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
