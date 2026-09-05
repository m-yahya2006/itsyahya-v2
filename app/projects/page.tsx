const projects = [
  {
    title: "AEVNS",
    subtitle: "Autonomous Electric Vehicle Navigation System",
    description:
      "An autonomous ground robot combining embedded systems, navigation, hybrid solar-battery monitoring, telemetry, and machine learning.",
    technologies: ["ESP32", "C++", "Python", "ML", "UDP"],
    status: "In Progress",
    href: "/projects/aevns",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-[#070b14] text-white">
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <a href="/" className="text-sm text-zinc-500 hover:text-white">
          ← Home
        </a>

        <p className="mt-16 font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
          Selected Work
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight">
          Projects
        </h1>

        <p className="mt-5 max-w-2xl leading-7 text-zinc-400">
          Systems and experiments I&apos;m building while exploring embedded
          computing, artificial intelligence, software, and engineering.
        </p>

        <div className="mt-16 grid gap-6">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.href}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-cyan-400/40"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-amber-300">
                  {project.status}
                </span>

                <span className="text-zinc-600 transition group-hover:text-cyan-400">
                  →
                </span>
              </div>

              <h2 className="mt-6 text-3xl font-semibold">
                {project.title}
              </h2>

              <p className="mt-2 text-zinc-300">
                {project.subtitle}
              </p>

              <p className="mt-5 max-w-3xl leading-7 text-zinc-500">
                {project.description}
              </p>

              <div className="mt-7 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}