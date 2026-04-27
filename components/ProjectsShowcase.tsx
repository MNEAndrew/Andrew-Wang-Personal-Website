"use client";

import { useState, useEffect, useRef } from "react";
import RevealWrapper from "./RevealWrapper";

interface Project {
  title: string;
  description: string;
  highlights: string[];
  tech: string[];
}

const PROJECTS: Project[] = [
  {
    title: "SDP-Email: Outlook Phishing Detection",
    description:
      "Developed backend and machine learning components for an Outlook add-in that detects suspicious emails and alerts users in real time.",
    highlights: [
      "Built a Naive Bayes model to classify phishing emails using email content features.",
      "Engineered backend logic to process opened emails and return detection results.",
      "Connected the ML detection pipeline to an Outlook add-in warning system.",
    ],
    tech: [
      "Python",
      "Naive Bayes",
      "Machine Learning",
      "Backend APIs",
      "Outlook Add-in",
    ],
  },
  {
    title: "Landing Gear Recommender",
    description:
      "Developed backend functionality for a conceptual aircraft landing gear sizing tool used for early-stage design exploration.",
    highlights: [
      "Implemented configuration generation, validation checks, weighted scoring, and sensitivity analysis.",
      "Supported both CLI and FastAPI-based web application development.",
      "Helped make design outputs easier to analyze and visualize.",
    ],
    tech: [
      "Python",
      "FastAPI",
      "CLI",
      "Backend Development",
      "Physics-Based Modeling",
    ],
  },
  {
    title: "Zillow-Style Real Estate Database & Web App",
    description:
      "Built an end-to-end real estate management system with a relational database and a responsive Zillow-like web interface.",
    highlights: [
      "Designed a relational database to track agents, buyers, sellers, properties, viewings, offers, and sales.",
      "Built web app features including authentication, search, filters, agent finder, and image uploads.",
      "Created a responsive interface for browsing and managing real estate listings.",
    ],
    tech: [
      "SQL",
      "JavaScript",
      "Web Development",
      "Authentication",
      "Database Design",
    ],
  },
];

export default function ProjectsShowcase() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);
  const panelRef = useRef<HTMLDivElement>(null);

  const goTo = (index: number) => {
    if (index === current) return;
    setVisible(false);
    setTimeout(() => {
      setCurrent(index);
      setVisible(true);
    }, 260);
  };

  const prev = () => goTo((current - 1 + PROJECTS.length) % PROJECTS.length);
  const next = () => goTo((current + 1) % PROJECTS.length);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  const project = PROJECTS[current];

  return (
    <section
      id="projects"
      className="py-28"
      style={{
        background:
          "linear-gradient(180deg, rgba(4,9,24,0.6) 0%, rgba(3,7,20,0.9) 100%)",
      }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <RevealWrapper>
          <p className="text-sky-400 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-14 leading-tight">
            Selected work.
          </h2>
        </RevealWrapper>

        <RevealWrapper delay={100}>
          <div className="flex flex-col gap-6">
            {/* Counter */}
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500 font-medium tracking-widest">
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(PROJECTS.length).padStart(2, "0")}
              </span>

              {/* Prev / Next */}
              <div className="flex gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous project"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(148,163,184,1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(14,165,233,0.15)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(56,189,248,0.4)";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "rgb(186,230,253)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "rgba(148,163,184,1)";
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  onClick={next}
                  aria-label="Next project"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(148,163,184,1)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(14,165,233,0.15)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(56,189,248,0.4)";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "rgb(186,230,253)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLButtonElement).style.borderColor =
                      "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "rgba(148,163,184,1)";
                  }}
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Project card */}
            <div
              ref={panelRef}
              className={`project-panel rounded-2xl p-7 sm:p-9 ${
                visible ? "" : "fading"
              }`}
              style={{
                background: "rgba(255,255,255,0.035)",
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(16px)",
                minHeight: "340px",
              }}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 leading-snug">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
                {project.description}
              </p>

              <ul className="space-y-2 mb-8">
                {project.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2.5 text-sm text-slate-300 leading-relaxed"
                  >
                    <span
                      className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full"
                      style={{ background: "rgba(56,189,248,0.7)" }}
                    />
                    {h}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium rounded-full px-3 py-1"
                    style={{
                      color: "rgb(125,211,252)",
                      background: "rgba(14,165,233,0.1)",
                      border: "1px solid rgba(14,165,233,0.2)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Dot indicators */}
            <div className="flex justify-center gap-2 pt-1">
              {PROJECTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  aria-label={`Go to project ${i + 1}`}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    background:
                      i === current
                        ? "rgba(56,189,248,0.8)"
                        : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>
          </div>
        </RevealWrapper>
      </div>
    </section>
  );
}
