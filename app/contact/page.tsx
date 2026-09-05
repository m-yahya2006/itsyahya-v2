export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#070b14] text-white">
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <a
          href="/"
          className="text-sm text-zinc-500 transition hover:text-white"
        >
          ← Home
        </a>

        <p className="mt-16 font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
          Contact
        </p>

        <h1 className="mt-4 text-5xl font-semibold tracking-tight sm:text-6xl">
          Let&apos;s connect.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          Open to internships, collaborations, engineering opportunities, and
          interesting technical projects.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {/* Email */}
          <a
            href="mailto:m.yahyaa.2006@gmail.com"
            className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40"
          >
            <p className="text-sm text-zinc-500">Email</p>

            <p className="mt-2 font-semibold text-zinc-200 transition group-hover:text-cyan-400">
              m.yahyaa.2006@gmail.com
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/m-yahya2006"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40"
          >
            <p className="text-sm text-zinc-500">GitHub</p>

            <p className="mt-2 font-semibold text-zinc-200 transition group-hover:text-cyan-400">
              github.com/m-yahya2006 ↗
            </p>
          </a>
        </div>

        <p className="mt-8 text-sm text-zinc-600">
          LinkedIn will be added later.
        </p>
      </section>
    </main>
  );
}