import Landing from "@/components/Landing";
import Nav from "@/components/Nav";
import HomeSection from "@/components/HomeSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsShowcase from "@/components/ProjectsShowcase";
import EmailButton from "@/components/EmailButton";

export default function Home() {
  return (
    <>
      <Landing />

      {/* Main portfolio area — Nav is sticky within this wrapper */}
      <div id="main">
        <Nav />
        <main>
          <HomeSection />
          <ExperienceSection />
          <ProjectsShowcase />
        </main>

        <footer
          className="py-8"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <span className="text-xs text-slate-600">
              &copy; {new Date().getFullYear()} Andrew Wang
            </span>
            <div className="flex items-center gap-5">
              {[
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
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target={l.external ? "_blank" : undefined}
                  rel={l.external ? "noopener noreferrer" : undefined}
                  className="text-xs text-slate-600 hover:text-sky-400 transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <EmailButton className="text-xs text-slate-600 hover:text-sky-400 transition-colors" />
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
