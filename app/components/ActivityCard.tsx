import Reveal from "./Reveal";

const openToWork = true;

export default function ActivityCard() {
  return (
    <Reveal className="relative mt-16">
      <span
        aria-hidden="true"
        className="absolute -top-8.5 -right-3.5 z-0 font-sans font-bold text-[clamp(130px,27vw,240px)] leading-[.8] tracking-[-9px] text-[#f5e4de]/[.04] pointer-events-none select-none whitespace-nowrap"
      >
        ritik
      </span>
      <div className="relative z-10">
        <div className="font-mono text-[12.5px] text-[#9a96a6]">
          <span className="text-[#ff8a6b]">ritik@arch</span>:
          <span className="text-[#4fdcc9]">~</span>${" "}
          <span className="text-[#c7c0d5]">whoami</span>
        </div>
        <p className="mt-4 max-w-[560px] font-sans text-[clamp(18px,2.7vw,21px)] leading-[1.55] font-medium text-[#d8d3e0] tracking-[-.2px]">
          Hey, I&apos;m Ritik — a{" "}
          <span className="text-[#4fdcc9] font-bold">full-stack developer</span>{" "}
          from Madhya Pradesh, India. I am passionate{" "}
          <span className="text-[#4fdcc9] font-bold">about building modern, scalable web applications.</span>{" "}
           I specialize in React, Node.js, Express, and MongoDB, 
           with a focus on clean code, performance, and user experience.
        </p>
        <div className="inline-flex items-center gap-1.5 mt-5.5 px-3.5 py-2 border-2 border-[#3c4255] rounded-lg bg-[#222634] shadow-[4px_4px_0_#353b4e] font-mono text-xs whitespace-nowrap">
          <span
            className="w-2 h-2 rounded-full animate-pulse motion-reduce:animate-none"
            style={{ background: openToWork ? "#34d399" : "#6b6b77" }}
          />
          <span className="text-[#d8d3e0]">
            {openToWork ? "open to opportunities" : "offline"}
          </span>
        </div>
      </div>
    </Reveal>
  );
}
