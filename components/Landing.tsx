"use client";

const STREAMS = [
  { left: "10%", duration: "7.5s", delay: "0s", opacity: 0.14 },
  { left: "22%", duration: "10s", delay: "2.1s", opacity: 0.08 },
  { left: "38%", duration: "8s", delay: "0.8s", opacity: 0.11 },
  { left: "55%", duration: "9.5s", delay: "3.2s", opacity: 0.07 },
  { left: "70%", duration: "7s", delay: "1.5s", opacity: 0.12 },
  { left: "84%", duration: "11s", delay: "0.4s", opacity: 0.09 },
  { left: "94%", duration: "8.5s", delay: "2.7s", opacity: 0.06 },
];

export default function Landing() {
  const handleExplore = () => {
    document.getElementById("main")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* ── Background image ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />

      {/* ── Dark overlay — preserves blue color scheme and readability ── */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(160deg, rgba(3,8,18,0.82) 0%, rgba(7,20,40,0.78) 45%, rgba(4,17,31,0.80) 75%, rgba(5,13,26,0.85) 100%)",
        }}
      />

      {/* ── Large mist blobs ── */}
      <div
        aria-hidden="true"
        className="anim-mist pointer-events-none absolute -top-32 -right-20 w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(14,165,233,0.09) 0%, rgba(6,182,212,0.04) 40%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="anim-mist-alt pointer-events-none absolute -bottom-24 -left-28 w-[660px] h-[660px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.1) 0%, rgba(99,102,241,0.04) 45%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="anim-mist-slow pointer-events-none absolute top-[28%] left-[32%] w-[380px] h-[380px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(186,230,253,0.05) 0%, transparent 65%)",
        }}
      />

      {/* ── Waterfall streams ── */}
      {STREAMS.map((s, i) => (
        <div
          key={i}
          aria-hidden="true"
          className="anim-stream pointer-events-none absolute top-0"
          style={{
            left: s.left,
            width: "1px",
            height: "55%",
            background: `linear-gradient(to bottom, transparent 0%, rgba(147,197,253,${s.opacity}) 35%, rgba(103,232,249,${s.opacity * 0.65}) 65%, transparent 100%)`,
            animationDuration: s.duration,
            animationDelay: s.delay,
          }}
        />
      ))}

      {/* ── Mountain ridgeline ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 inset-x-0"
      >
        <svg
          viewBox="0 0 1440 130"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-28 sm:h-36"
        >
          {/* Distant range */}
          <path
            d="M0 130 L0 92 L110 52 L220 78 L340 30 L460 64 L580 18 L700 55 L820 10 L940 48 L1060 22 L1180 60 L1300 34 L1440 62 L1440 130 Z"
            fill="rgba(8,20,50,0.55)"
          />
          {/* Nearer range */}
          <path
            d="M0 130 L0 108 L160 80 L290 100 L420 62 L540 88 L660 46 L780 80 L900 42 L1020 76 L1160 52 L1300 84 L1440 65 L1440 130 Z"
            fill="rgba(5,13,35,0.75)"
          />
        </svg>
      </div>

      {/* ── Subtle horizon glow ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 right-0"
        style={{
          bottom: "100px",
          height: "60px",
          background:
            "linear-gradient(to top, rgba(14,165,233,0.06), transparent)",
        }}
      />

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-6 max-w-2xl mx-auto">
        <p className="anim-fade-up text-sky-400 text-xs font-semibold uppercase tracking-[0.22em] mb-7">
          Portfolio
        </p>
        <h1
          className="anim-fade-up-1 text-5xl sm:text-[4.25rem] font-bold text-white leading-none mb-5"
          style={{ textShadow: "0 0 60px rgba(147,197,253,0.18)" }}
        >
          Andrew Wang
        </h1>
        <p className="anim-fade-up-2 text-base sm:text-lg text-sky-200 font-medium mb-5 tracking-wide">
          Backend-Focused Software Developer
        </p>
        <p className="anim-fade-up-2 text-sm sm:text-base text-slate-400 leading-relaxed max-w-lg mx-auto mb-14">
          Computer Science student at the University of Connecticut building
          practical software systems across backend development, machine
          learning, and databases.
        </p>

        <button
          onClick={handleExplore}
          className="anim-fade-up-3 group inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border text-sm font-semibold transition-all duration-300"
          style={{
            borderColor: "rgba(56,189,248,0.35)",
            backgroundColor: "rgba(14,165,233,0.08)",
            color: "rgb(186,230,253)",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = "rgba(56,189,248,0.65)";
            el.style.backgroundColor = "rgba(14,165,233,0.16)";
            el.style.color = "rgb(224,242,254)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.borderColor = "rgba(56,189,248,0.35)";
            el.style.backgroundColor = "rgba(14,165,233,0.08)";
            el.style.color = "rgb(186,230,253)";
          }}
        >
          Explore
          {/* Downward chevron */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="group-hover:translate-y-1 transition-transform duration-300"
          >
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
