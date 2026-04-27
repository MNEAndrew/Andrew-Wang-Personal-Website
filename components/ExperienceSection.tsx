import RevealWrapper from "./RevealWrapper";

interface ExperienceItem {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Freelance Software Engineer",
    org: "Confidential Client",
    period: "November 2025 – Present",
    bullets: [
      "Develop backend functionality for Landing Gear Recommender, a conceptual aircraft landing gear sizing tool for early-stage design exploration.",
      "Implement features for configuration generation, validation checks, weighted scoring, and sensitivity analysis.",
      "Support CLI and FastAPI-based web application development.",
    ],
  },
  {
    role: "Technical Analyst",
    org: "UConn School of Engineering",
    period: "September 2024 – Present",
    bullets: [
      "Provide technical assistance to around 20 students per week in the computer lab.",
      "Support coursework, research, and project-related troubleshooting.",
      "Perform routine checks on desktops, printers, and monitors to maintain lab functionality.",
    ],
  },
  {
    role: "Tiger Team Analyst",
    org: "UConn School of Engineering",
    period: "January 2024 – May 2024",
    bullets: [
      "Resolved 20–30 technical support tickets weekly for UConn professors and staff.",
      "Troubleshot hardware and software issues to ensure prompt, reliable service.",
      "Followed up with requesters after resolution to confirm issues were fully addressed.",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-28"
      style={{
        background:
          "linear-gradient(180deg, rgba(5,12,30,0.8) 0%, rgba(4,9,24,0.6) 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <RevealWrapper>
          <p className="text-sky-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-14 leading-tight">
            Work history.
          </h2>
        </RevealWrapper>

        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="hidden sm:block absolute left-0 top-3 bottom-3 w-px ml-3"
            style={{
              background:
                "linear-gradient(to bottom, transparent, rgba(56,189,248,0.25) 15%, rgba(56,189,248,0.25) 85%, transparent)",
            }}
          />

          <div className="space-y-8">
            {EXPERIENCES.map((exp, i) => (
              <RevealWrapper key={`${exp.role}-${exp.org}`} delay={i * 120}>
                <div className="sm:pl-14 relative">
                  {/* Timeline dot */}
                  <div
                    className="hidden sm:block absolute left-0 top-5 w-6 h-6 rounded-full"
                    style={{
                      border: "2px solid rgba(56,189,248,0.55)",
                      background: "rgba(14,165,233,0.12)",
                    }}
                  />

                  {/* Card */}
                  <div className="glass-card rounded-2xl p-6 sm:p-7">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-5">
                      <div>
                        <h3 className="text-base font-semibold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-sky-400 font-medium mt-0.5">
                          {exp.org}
                        </p>
                      </div>
                      <span
                        className="shrink-0 text-xs font-medium px-2.5 py-1 rounded-full"
                        style={{
                          color: "rgba(148,163,184,1)",
                          background: "rgba(255,255,255,0.06)",
                          border: "1px solid rgba(255,255,255,0.08)",
                        }}
                      >
                        {exp.period}
                      </span>
                    </div>

                    <ul className="space-y-2">
                      {exp.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex gap-2.5 text-sm text-slate-400 leading-relaxed"
                        >
                          <span
                            className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full"
                            style={{ background: "rgba(56,189,248,0.6)" }}
                          />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
