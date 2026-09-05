export default function Home() {
  return (
    <main className="min-h-screen bg-[#070b14] text-white">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
        <a href="/" className="text-xl font-semibold tracking-tight">
          YAHYA<span className="text-cyan-400">.</span>
        </a>

        <div className="flex flex-wrap items-center gap-4 text-sm text-zinc-400 sm:gap-6 md:gap-8">
          <a className="transition hover:text-white" href="/projects">
            Projects
          </a>

          <a className="transition hover:text-white" href="/about">
            About
          </a>

          <a className="transition hover:text-white" href="#skills">
            Skills
          </a>

          <a className="transition hover:text-white" href="/contact">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex min-h-[78vh] max-w-7xl items-center px-6 lg:px-8">
        <div className="max-w-4xl">
          <p className="mb-5 font-mono text-sm uppercase tracking-[0.2em] text-cyan-400">
            Civil Engineering × Intelligent Systems
          </p>

          <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Building intelligent systems
            <br />
            for the{" "}
            <span className="text-zinc-500">physical world.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-400">
            I&apos;m Yahya, a Civil Engineering student at GIKI exploring the
            intersection of embedded systems, artificial intelligence,
            robotics, software, and infrastructure engineering.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="/projects"
              className="rounded-lg bg-cyan-400 px-6 py-3 text-sm font-semibold text-[#070b14] transition hover:bg-cyan-300"
            >
              View My Work
            </a>

            <a
              href="https://github.com/m-yahya2006"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-700 px-6 py-3 text-sm font-semibold transition hover:border-zinc-500 hover:bg-white/5"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section
        id="projects"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 lg:px-8"
      >
        <div className="mb-10">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
            Featured Project
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            AEVNS
          </h2>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 sm:p-10">
          <div className="flex flex-wrap gap-2">
            {[
              "ESP32",
              "C++",
              "Python",
              "Machine Learning",
              "Embedded Systems",
              "UDP",
            ].map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
              >
                {technology}
              </span>
            ))}
          </div>

          <h3 className="mt-8 max-w-3xl text-2xl font-semibold sm:text-3xl">
            Autonomous Electric Vehicle Navigation System
          </h3>

          <p className="mt-5 max-w-3xl leading-7 text-zinc-400">
            An autonomous ground robot combining real-time navigation,
            embedded sensing, hybrid solar-battery energy monitoring, wireless
            telemetry, and machine-learning-based range prediction.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <span className="rounded-full bg-amber-400/10 px-3 py-1 text-xs font-medium text-amber-300">
              In Progress
            </span>

            <span className="text-sm text-zinc-500">
              Flagship Engineering Project
            </span>
          </div>

          <a
            href="/projects/aevns"
            className="mt-8 inline-block text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
          >
            Explore AEVNS →
          </a>
        </div>
      </section>

      {/* About Preview */}
      <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 lg:px-8">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
          About
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
          Engineering beyond traditional boundaries.
        </h2>

        <p className="mt-6 max-w-2xl leading-7 text-zinc-400">
          My degree is in Civil Engineering, but my interests extend into
          intelligent systems. I&apos;m building practical projects to
          understand how computation, sensing, automation, and AI can interact
          with the physical environment.
        </p>

        <a
          href="/about"
          className="mt-6 inline-block text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          More About Me →
        </a>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 lg:px-8"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
          Currently Working With
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Python & Machine Learning",
            "C++ & Embedded Systems",
            "ESP32 & Sensors",
            "Networking & Data",
          ].map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-sm text-zinc-300 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Preview */}
      <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-24 lg:px-8">
        <h2 className="text-3xl font-semibold tracking-tight">
          Let&apos;s build something meaningful.
        </h2>

        <p className="mt-4 text-zinc-400">
          Open to internships, collaborations, engineering opportunities, and
          interesting technical projects.
        </p>

        <a
          href="/contact"
          className="mt-6 inline-block text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          Get in Touch →
        </a>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-7xl justify-between border-t border-white/10 px-6 py-8 text-xs text-zinc-600 lg:px-8">
        <span>© 2026 Yahya</span>
        <span>GIKI · Pakistan</span>
      </footer>
    </main>
  );
}