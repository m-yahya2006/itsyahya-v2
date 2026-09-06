import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main className="portfolio">
      <Navbar />

      <section className="page-hero contact-hero">
        <div className="site-container page-hero-grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="page-title">
              Let&apos;s build
              <br />
              <span>something meaningful.</span>
            </h1>
          </div>

          <div className="page-hero-aside">
            <p>
              I&apos;m open to internships, engineering collaborations,
              research-oriented conversations and technical projects where I can
              learn, contribute and build.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-main section-paper">
        <div className="site-container contact-grid">
          <div>
            <p className="eyebrow">Get In Touch</p>
            <h2 className="section-heading">
              The easiest way to reach me is by email.
            </h2>
            <p className="body-large">
              If you&apos;re contacting me about an internship, project or
              collaboration, include a little context and I&apos;ll get back to
              you as soon as I can.
            </p>
          </div>

          <div className="contact-links">
            <a href="mailto:m.yahyaa.2006@gmail.com" className="contact-link contact-link-email">
              <span>Email</span>
              <strong>m.yahyaa.2006@gmail.com</strong>
              <b aria-hidden="true">→</b>
            </a>

            <a
              href="https://github.com/m-yahya2006"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link contact-link-github"
            >
              <span>GitHub</span>
              <strong>github.com/m-yahya2006</strong>
              <b aria-hidden="true">↗</b>
            </a>

            <div className="contact-link contact-link-muted">
              <span>LinkedIn</span>
              <strong>Profile link will be added here.</strong>
              <b>—</b>
            </div>
          </div>
        </div>
      </section>

      <section className="home-contact-banner contact-banner">
        <div className="site-container home-contact-inner">
          <div>
            <p className="eyebrow light-eyebrow">Availability</p>
            <h2>Open to the right opportunities and meaningful collaborations.</h2>
          </div>
          <a href="mailto:m.yahyaa.2006@gmail.com" className="button home-contact-button">
            Send an Email <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
