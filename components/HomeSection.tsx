import RevealWrapper from "./RevealWrapper";

const SKILLS = [
  "Python",
  "SQL",
  "JavaScript",
  "Java",
  "C++",
  "FastAPI",
  "REST APIs",
  "Machine Learning",
  "Databases",
];

export default function HomeSection() {
  return (
    <section
      id="home"
      className="py-28 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, rgba(4,9,26,0) 0%, rgba(5,12,28,0.6) 100%)",
      }}
    >
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 right-0 w-96 h-96 rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.07) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <RevealWrapper>
          <p className="text-sky-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            About
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 leading-tight">
            Building software that matters.
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <div
            className="rounded-2xl p-7 sm:p-9 mb-10"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
              backdropFilter: "blur(12px)",
            }}
          >
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
              I&apos;m a Computer Science student at the University of
              Connecticut, expected to graduate in May 2026. I focus on backend
              development, machine learning, databases, and
              practical software systems. I enjoy building tools that connect
              technical implementation with real-world use cases.
            </p>

            {/* Education note */}
            <p className="mt-5 text-xs text-slate-500 font-medium tracking-wide">
              B.S. Computer Science &middot; University of Connecticut &middot;
              Expected May 2026
            </p>
          </div>
        </RevealWrapper>

        {/* Skills */}
        <RevealWrapper delay={200}>
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-[0.18em] mb-4">
            Technologies
          </p>
          <div className="flex flex-wrap gap-2">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="text-sm text-slate-300 rounded-full px-3.5 py-1.5 font-medium transition-all duration-200 hover:text-sky-200"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.09)",
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
