"use client";

import { useState, useEffect } from "react";
import EmailButton from "./EmailButton";

const NAV_SECTIONS = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/MNEAndrew",
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/andrew-yy-wang",
    external: true,
  },
  {
    label: "Resume",
    href: "/Andrew-Wang-Resume.pdf",
    external: true,
  },
];

export default function Nav() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const ids = NAV_SECTIONS.map((s) => s.id);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      {
        threshold: 0.35,
        rootMargin: "-80px 0px 0px 0px",
      }
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      className="sticky top-0 z-50"
      style={{
        backgroundColor: "rgba(4,9,26,0.88)",
        backdropFilter: "blur(16px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between gap-6">
        {/* Logo */}
        <button
          onClick={() => scrollTo("home")}
          className="text-white font-semibold text-sm tracking-wide hover:text-sky-300 transition-colors shrink-0"
        >
          Andrew Wang
        </button>

        {/* Desktop section links */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_SECTIONS.map((s) => (
            <li key={s.id}>
              <button
                onClick={() => scrollTo(s.id)}
                className={`px-3.5 py-1.5 rounded-md text-sm font-medium transition-colors duration-200 ${
                  active === s.id
                    ? "text-white bg-white/8"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {s.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Desktop social links */}
        <ul className="hidden md:flex items-center gap-4 ml-auto">
          {SOCIAL_LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                target={l.external ? "_blank" : undefined}
                rel={l.external ? "noopener noreferrer" : undefined}
                className="text-xs text-slate-500 hover:text-sky-300 transition-colors font-medium tracking-wide"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <EmailButton className="text-xs text-slate-500 hover:text-sky-300 transition-colors font-medium tracking-wide" />
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          aria-label="Toggle menu"
          className="md:hidden ml-auto flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-5 h-0.5 bg-slate-400 transition-all duration-200 ${
              menuOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-400 transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-slate-400 transition-all duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-6 pb-5 pt-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          <ul className="flex flex-col gap-1 mb-4">
            {NAV_SECTIONS.map((s) => (
              <li key={s.id}>
                <button
                  onClick={() => scrollTo(s.id)}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    active === s.id
                      ? "text-white bg-white/8"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {s.label}
                </button>
              </li>
            ))}
          </ul>
          <div
            className="pt-3"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {SOCIAL_LINKS.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target={l.external ? "_blank" : undefined}
                    rel={l.external ? "noopener noreferrer" : undefined}
                    className="text-xs text-slate-500 hover:text-sky-300 transition-colors font-medium"
                    onClick={() => setMenuOpen(false)}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <EmailButton
                  className="text-xs text-slate-500 hover:text-sky-300 transition-colors font-medium"
                  onCopied={() => setMenuOpen(false)}
                />
              </li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
