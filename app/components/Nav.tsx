export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 flex items-center gap-3 pt-4 pb-3 bg-[linear-gradient(#1b1e29_72%,rgba(31,30,46,0))]">
      <a
        href="#"
        className="inline-flex items-baseline gap-1 font-mono font-bold text-[15px]"
      >
        <span className="text-[#ff8a6b]">~/</span>
        <span className="text-[#f5e4de]">ritik</span>
      </a>

      <div className="flex-1" />

      <a
        href="#skills"
        className="font-mono text-[15px] text-[#b3a7cc] px-1.5 py-1 hover:text-[#4fdcc9] transition-colors"
      >
        skills
      </a>

      <a
        href="#projects"
        className="font-mono text-[15px] text-[#b3a7cc] px-1.5 py-1 hover:text-[#4fdcc9] transition-colors"
      >
        projects
      </a>

      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-4 py-2 ml-1 border-2 border-[#4fdcc9] rounded-full bg-[#4fdcc9] font-mono font-semibold text-[13px] text-[#13151d] shadow-[3px_3px_0_rgba(79,220,201,.35)] will-change-transform transition-transform duration-200 ease-snap can-hover:hover:translate-x-0.5 can-hover:hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:duration-100 active:ease-snap"
      >
        CV
      </a>
    </nav>
  );
}
