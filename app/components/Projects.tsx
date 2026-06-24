"use client";

import { useState } from "react";
import { FiFolder } from "react-icons/fi";
import { hexToRgba } from "../lib/color";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    title: "Solvo",
    accent: "#4fdcc9",
    domain: "solvochat.com",
    type: "SaaS",
    desc: "Embeddable AI support widget — one script tag gives any site instant, source-cited answers from its own docs in under 2 seconds.",
    stack: ["Next.js 16", "RAG", "pgvector", "Gemini"],
    url: "https://solvochat.com/",
    linkLabel: "visit ↗",
  },
  {
    title: "Bunny's Cafe",
    accent: "#ffc95f",
    domain: "bunnyscafe.in",
    type: "Client",
    desc: "Production café ordering system — QR entry, OTP auth, real-time tracking, Razorpay payments, and an admin dashboard.",
    stack: ["Next.js", "Prisma", "PostgreSQL", "Razorpay"],
    url: "https://bunnyscafe.in/",
    linkLabel: "visit ↗",
  },
  {
    title: "nekopet",
    accent: "#9d8bff",
    domain: "github.com/nekopet",
    type: "Open Src",
    desc: "A Wayland desktop pet written in Rust — cursor-tracking eyes, typing-driven animations, raw /dev/input reads.",
    stack: ["Rust", "Wayland", "smithay"],
    url: "https://github.com/dhruvkumar1805/nekopet",
    linkLabel: "source ↗",
  },
  {
    title: "ritiktomar.dev",
    accent: "#ff8a6b",
    domain: "github.com",
    type: "Personal",
    desc: "This portfolio — a terminal-flavored single page, hand-built from scratch with no templates.",
    stack: ["Next.js", "Tailwind"],
    url: "https://github.com/ritiktomar10x",
    linkLabel: "source ↗",
  },
];

export default function Projects() {
  const [active, setActive] = useState(0);
  const p = projects[active];

  return (
    <div>
      <SectionHeading
        number="02"
        title="projects"
        id="projects"
        icon={FiFolder}
        className="mt-22.5 mb-7.5"
      />
      <Reveal className="flex flex-col sm:flex-row gap-4 items-stretch">
        <div className="relative flex-none sm:w-56">
          <div className="flex sm:flex-col gap-2.5 overflow-x-auto no-scrollbar sm:overflow-visible">
            {projects.map((proj, i) => {
              const on = i === active;
              return (
                <button
                  key={proj.title}
                  onClick={() => setActive(i)}
                  className="will-change-transform cursor-pointer flex-none sm:flex-1 text-left flex items-center gap-3 px-3.5 py-3 rounded-[11px] border-2 transition-transform duration-200 ease-snap active:scale-[.97] active:duration-100 active:ease-snap"
                  style={{
                    borderColor: on ? proj.accent : "#3c4255",
                    background: on ? hexToRgba(proj.accent, 0.1) : "#222634",
                    boxShadow: on
                      ? `3px 3px 0 ${hexToRgba(proj.accent, 0.3)}`
                      : "3px 3px 0 #323748",
                  }}
                >
                  <span
                    className="font-mono text-base font-bold leading-none flex-none"
                    style={{ color: on ? proj.accent : "#9a96a6" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">
                    <span
                      className="block font-sans text-sm font-bold tracking-tight truncate"
                      style={{ color: on ? "#efeaf2" : "#b8b2c2" }}
                    >
                      {proj.title}
                    </span>
                    <span className="block font-mono text-[10px] uppercase tracking-wide text-[#9a96a6] mt-0.5">
                      {proj.type}
                    </span>
                  </span>
                  <span
                    className="flex-none w-1.75 h-1.75 rounded-full ml-auto sm:ml-0"
                    style={{ background: on ? proj.accent : "#3c4255" }}
                  />
                </button>
              );
            })}
          </div>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:hidden bg-gradient-to-l from-[#1b1e29] to-transparent"
          />
        </div>

        <div
          className="flex-1 min-w-0 flex flex-col rounded-[14px] border-2 overflow-hidden"
          style={{
            borderColor: p.accent,
            background: "#222634",
            boxShadow: `6px 6px 0 ${hexToRgba(p.accent, 0.28)}`,
          }}
        >
          <div
            className="flex items-center gap-2 px-3.5 py-2.5 border-b-2"
            style={{ background: hexToRgba(p.accent, 0.1), borderColor: p.accent }}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
            <span
              className="ml-1.5 font-mono text-[11.5px] font-semibold truncate"
              style={{ color: p.accent }}
            >
              {p.domain}
            </span>
          </div>

          <div className="flex flex-col flex-1 p-5">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="font-sans text-2xl font-bold text-[#efeaf2] tracking-tight">
                {p.title}
              </span>
              <span
                className="font-mono text-[10px] font-bold uppercase tracking-wide px-2 py-0.75 rounded-md border-[1.5px]"
                style={{ color: p.accent, borderColor: p.accent }}
              >
                {p.type}
              </span>
            </div>

            <p className="mt-3 font-sans text-[15px] leading-relaxed text-[#c7c0d5] flex-1">
              {p.desc}
            </p>

            <div className="flex flex-wrap gap-1.75 mt-4">
              {p.stack.map((t) => (
                <span
                  key={t}
                  className="font-mono text-[11px] text-[#c7c0d5] px-2.25 py-1 rounded-md border-[1.5px] border-[#3c4255] bg-[#1c1c27]"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="will-change-transform inline-flex items-center gap-2 mt-5 px-4 py-2.5 rounded-lg border-2 font-mono font-bold text-[12.5px] self-start transition-transform duration-200 ease-snap can-hover:hover:translate-x-0.5 can-hover:hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:duration-100 active:ease-snap"
              style={{
                color: "#13151d",
                background: p.accent,
                borderColor: p.accent,
                boxShadow: `3px 3px 0 ${hexToRgba(p.accent, 0.35)}`,
              }}
            >
              {p.linkLabel}
            </a>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
