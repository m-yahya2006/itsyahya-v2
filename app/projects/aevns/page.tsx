export default function AevnsPage() {
  return (
    <main className="min-h-screen bg-[#070b14] text-white">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <a href="/projects" className="text-sm text-zinc-500 hover:text-white">
          ← Back to Projects
        </a>

        <p className="mt-16 font-mono text-xs uppercase tracking-[0.2em] text-cyan-400">
          Flagship Project · In Progress
        </p>

        <h1 className="mt-4 max-w-5xl text-5xl font-semibold tracking-tight sm:text-6xl">
          AEVNS
        </h1>

        <p className="mt-4 max-w-4xl text-2xl text-zinc-300">
          Autonomous Electric Vehicle Navigation System
        </p>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
          A self-built autonomous ground robot combining embedded systems,
          real-time navigation, hybrid solar-battery energy monitoring,
          wireless telemetry, machine learning, and future infrastructure
          inspection capability.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {[
            "ESP32",
            "C++",
            "Python",
            "Machine Learning",
            "Embedded Systems",
            "UDP",
            "I2C",
            "WebSocket",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold">What it does</h2>

        <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
          The robot uses three ultrasonic sensors to detect obstacles and make
          autonomous navigation decisions. It can slow down, turn, correct its
          path, reverse, and reassess its surroundings based on real-time sensor
          data.
        </p>
      </section>

      <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold">System Architecture</h2>

        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Navigation", "Ultrasonic sensing + autonomous decision logic"],
            ["Energy", "Battery + solar monitoring and safety thresholds"],
            ["Telemetry", "ESP32 → UDP → Python data pipeline"],
            ["AI", "ML-based remaining range prediction"],
          ].map(([title, desc]) => (
            <div
              key={title}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-6"
            >
              <h3 className="font-semibold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-zinc-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold">Hardware</h2>

        <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
          ESP32 DevKit V1, three HC-SR04 ultrasonic sensors, two INA219 current
          and voltage sensors, DS18B20 temperature sensor, L298N motor driver,
          TT DC gear motors, 18650 lithium-ion cells, 6V solar panel, TP4056
          charging modules, and a custom 3D-printed chassis.
        </p>
      </section>

      <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold">Software & Data</h2>

        <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
          Firmware runs on the ESP32 in C++. A Python UDP receiver collects live
          telemetry and stores structured driving data in CSV format for
          analysis and machine-learning model training.
        </p>
      </section>

      <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold">Machine Learning</h2>

        <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
          A scikit-learn regression model is being developed using self-collected
          robot data to estimate remaining driving range from battery state,
          solar input, motor load, and temperature.
        </p>
      </section>

      <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold">Current Progress</h2>

        <div className="mt-8 grid gap-3 max-w-3xl">
          {[
            "Individual hardware components tested",
            "Sensor communication tested",
            "Motor control tested",
            "Telemetry pipeline tested",
            "Custom chassis designed",
            "3D printing and full system integration next",
          ].map((item) => (
            <div
              key={item}
              className="rounded-lg border border-white/10 px-5 py-4 text-zinc-400"
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl border-t border-white/10 px-6 py-16 lg:px-8">
        <h2 className="text-3xl font-semibold">Future Learning Goals</h2>

        <p className="mt-6 max-w-4xl leading-8 text-zinc-400">
            AEVNS is primarily a learning and experimentation platform. The goal is to
            gradually improve the robot by adding capabilities such as basic visual
            inspection, better navigation, and simple anomaly detection. It is not
            intended to compete with professional inspection systems, but to help me
            understand how robotics, sensing, AI, and civil engineering concepts can be
            combined in a practical prototype.
        </p>
      </section>
    </main>
  );
}