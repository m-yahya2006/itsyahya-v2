export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#070b14] text-white">
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <a href="/" className="text-sm text-zinc-500 hover:text-white">
          ← Home
        </a>

        <p className="mt-16 font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
          About Me
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
          Civil engineering,
          <br />
          beyond traditional boundaries.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          I&apos;m Yahya, a second-year Civil Engineering student at GIKI.
          Alongside my degree, I&apos;m exploring embedded systems, machine
          learning, programming, networking, and robotics through hands-on
          projects.
        </p>

        <p className="mt-5 max-w-3xl leading-8 text-zinc-400">
          My goal is not to move away from civil engineering, but to understand
          how modern computing and intelligent systems can eventually be
          applied to physical engineering problems.
        </p>
      </section>

      <section className="mx-auto max-w-5xl border-t border-white/10 px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold">Education</h2>

        <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-6">
          <p className="text-sm text-cyan-400">GIKI</p>
          <h3 className="mt-2 text-xl font-semibold">
            Bachelor&apos;s in Civil Engineering
          </h3>
          <p className="mt-2 text-zinc-500">Second Year · Undergraduate</p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-t border-white/10 px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold">Currently Working With</h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {[
            "Python & basic machine learning",
            "C++ & ESP32 programming",
            "Sensors & embedded systems",
            "UDP networking & data logging",
            "Git & GitHub",
            "Basic web development",
          ].map((skill) => (
            <div
              key={skill}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-5 text-zinc-300"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-t border-white/10 px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold">Currently Learning</h2>

        <div className="mt-6 flex flex-wrap gap-3">
          {[
            "Machine Learning",
            "AI",
            "Robotics",
            "Embedded Systems",
            "Networking",
            "Computer Vision",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-zinc-400"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl border-t border-white/10 px-6 py-16 lg:px-8">
  <h2 className="text-3xl font-semibold">Certificates</h2>

  <p className="mt-4 max-w-2xl text-zinc-500">
    Selected coursework in machine learning, deep learning, and prompt
    engineering.
  </p>

  <div className="mt-8 grid gap-4">
    {[
      {
        title: "Supervised Machine Learning: Regression and Classification",
        issuer: "DeepLearning.AI · Stanford Online",
        href: "https://coursera.org/share/6be51d404ad73872ed761e75216bf570",
      },
      {
        title: "Neural Networks and Deep Learning",
        issuer: "DeepLearning.AI",
        href: "https://coursera.org/share/22f63840bc63446a6ee9b34d99d6ba01",
      },
      {
        title:
          "Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization",
        issuer: "DeepLearning.AI",
        href: "https://coursera.org/share/bd6fb0a8cecf5db25e4b966cbf127573",
      },
      {
        title: "Structuring Machine Learning Projects",
        issuer: "DeepLearning.AI",
        href: "https://coursera.org/share/93c754411ab23e7c861b1d0e2bccf0fc",
      },
      {
        title: "Prompt Engineering for ChatGPT",
        issuer: "Vanderbilt University",
        href: "https://coursera.org/share/3ea5ced720ee799199b9ed5e038a9793",
      },
    ].map((certificate) => (
      <div
        key={certificate.title}
        className="rounded-xl border border-white/10 bg-white/[0.02] p-6"
      >
        <h3 className="font-semibold text-zinc-200">
          {certificate.title}
        </h3>

        <p className="mt-2 text-sm text-zinc-500">
          {certificate.issuer}
        </p>

        <a
          href={certificate.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-sm font-semibold text-cyan-400 hover:text-cyan-300"
        >
          View Credential ↗
        </a>
        </div>
        ))}
        </div>
    </section>
    </main>
  );
}