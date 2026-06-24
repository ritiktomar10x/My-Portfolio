import { FiBriefcase } from "react-icons/fi";
import { hexToRgba } from "../lib/color";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const jobs = [
  {
    company: "Bunny's Cafe",
    accent: "#ff8a6b",
    role: "Full-Stack Developer · Freelance",
    year: "'26",
    kind: "Freelance",
    date: "Feb 2026",
    bullets: [
      "Sole developer on a paid client engagement — gathered requirements directly from the café owner and delivered a production ordering system end-to-end.",
      "Shipped QR-code entry, OTP auth, real-time order tracking, and an admin dashboard, with Razorpay payments and Cloudinary image management.",
      "Owned the full lifecycle — design, build, deployment, handoff — while keeping a non-technical client in the loop throughout.",
    ],
    tags: [
      "React.js",
      "JavaScript",
      "Firebase Auth",
      "Razorpay",
      "Cloudinary",
      "Tailwind",
    ],
  },
  
];

export default function Work() {
  return (
    <div>
      <SectionHeading
        number="02"
        title="work"
        id="work"
        icon={FiBriefcase}
        className="mt-22.5 mb-7.5"
      />
      <div className="flex flex-col gap-4.5">
        {jobs.map((job, i) => (
          <Reveal key={job.company} delay={i * 70}>
          <div
            className="rounded-xl border-2 overflow-hidden bg-[#222634] shadow-[6px_6px_0_var(--accent-shadow)] will-change-transform transition-transform duration-200 ease-snap can-hover:hover:translate-x-0.75 can-hover:hover:translate-y-0.75"
            style={
              {
                borderColor: job.accent,
                "--accent-shadow": hexToRgba(job.accent, 0.3),
              } as React.CSSProperties
            }
          >
            <div
              className="flex items-center justify-between gap-3 px-4 py-3 border-b-2"
              style={{
                background: hexToRgba(job.accent, 0.1),
                borderColor: job.accent,
              }}
            >
              <div className="flex items-center gap-2.75 min-w-0">
                <span
                  className="w-2.75 h-2.75 rounded-xs flex-none"
                  style={{ background: job.accent }}
                />
                <span className="font-sans text-lg font-bold text-[#efeaf2] tracking-tight truncate">
                  {job.company}
                </span>
              </div>
              <span
                className="flex-none inline-flex items-center gap-1.75 font-mono text-[11px] font-bold px-2.25 py-1 border-[1.5px] rounded-md bg-[#222634]"
                style={{ color: job.accent, borderColor: job.accent }}
              >
                {job.year}{" "}
                <span className="text-[#9a96a6] font-semibold uppercase tracking-wide">
                  {job.kind}
                </span>
              </span>
            </div>
            <div className="px-4.5 pt-4 pb-4.5">
              <div className="flex items-baseline justify-between gap-2.5 flex-wrap">
                <span
                  className="font-sans text-sm font-semibold"
                  style={{ color: job.accent }}
                >
                  {job.role}
                </span>
                <span className="font-mono text-[11px] text-[#9a96a6] whitespace-nowrap">
                  {job.date}
                </span>
              </div>
              <ul className="m-0 mt-3.5 p-0 list-none flex flex-col gap-2">
                {job.bullets.map((b, i) => (
                  <li
                    key={i}
                    className="flex gap-2.5 font-sans text-[15px] leading-relaxed text-[#b8b2c2]"
                  >
                    <span
                      className="flex-none font-mono font-bold"
                      style={{ color: job.accent }}
                    >
                      ▸
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5 mt-3.5">
                {job.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] text-[#9a96a6] px-2 py-0.75 rounded-md border-[1.5px] border-[#3c4255]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
