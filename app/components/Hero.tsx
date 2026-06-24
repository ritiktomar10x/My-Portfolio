"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaLinkedin, FaXTwitter, FaCheck } from "react-icons/fa6";
import { FiCopy } from "react-icons/fi";

const socials = [
  { title: "GitHub", url: "https://github.com/ritiktomar10x", Icon: FaGithub },
  { title: "X", url: "https://x.com/ritiktomar10x", Icon: FaXTwitter },
  {
    title: "LinkedIn",
    url: "https://linkedin.com/in/ritik-tomar-547987200/",
    Icon: FaLinkedin,
  },
];

const terminalLines = [
  {
    delay: 0,
    html: '<span style="color:#9a96a6;">$</span> <span style="color:#c7c0d5;">npx ritikdotdev</span>',
  },
  {
    delay: 380,
    html: '<span style="color:#ffc95f;">◌</span> <span style="color:#9a96a6;">resolving ritiktomar.dev…</span>',
  },
  {
    delay: 820,
    html: '<span style="color:#4fdcc9;">✓</span> <span style="color:#9a96a6;">connected</span>',
  },
  {
    delay: 1150,
    html: '<span style="color:#464c62;">────────────────────────</span>',
  },
  {
    delay: 1320,
    html: '<span style="color:#efeaf2;font-weight:700;">Ritik Tomar</span>',
  },
  {
    delay: 1480,
    html: '<span style="color:#9d8bff;">Full-Stack Developer</span>',
  },
  {
    delay: 1640,
    html: '<span style="color:#c7c0d5;">→ React.js · JavaScript · MongoDB </span>',
  },
  {
    delay: 1800,
    html: '<span style="color:#c7c0d5;">→ Madhya Pradesh, India · IST (UTC+5:30)</span>',
  },
  {
    delay: 1960,
    html: '<span style="color:#c7c0d5;">→ </span><span style="color:#4fdcc9;">github.com/ritiktomar10x</span>',
  },
  {
    delay: 2120,
    html: '<span style="color:#464c62;">────────────────────────</span>',
  },
  {
    delay: 2300,
    html: '<span style="color:#ff8a6b;">✓</span> <span style="color:#9a96a6;">done in 0.38s</span> <span style="color:#9a96a6;">→ scroll to /contact</span>',
  },
];

export default function Hero() {
  const [copied, setCopied] = useState(false);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [rows, setRows] = useState<string[]>([]);
  const [finished, setFinished] = useState(false);
  const runningRef = useRef(false);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  const runSequence = () => {
    if (runningRef.current) return;
    runningRef.current = true;
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    setTerminalOpen(true);
    setRows([]);
    setFinished(false);

    terminalLines.forEach((line) => {
      const t = setTimeout(() => {
        setRows((prev) => [...prev, line.html]);
      }, line.delay);
      timersRef.current.push(t);
    });

    const t = setTimeout(() => {
      runningRef.current = false;
      setFinished(true);
    }, 2480);
    timersRef.current.push(t);
  };

  const closeTerminal = () => {
    timersRef.current.forEach(clearTimeout);
    timersRef.current = [];
    runningRef.current = false;
    setTerminalOpen(false);
    setRows([]);
    setFinished(false);
  };

  const handleCodeClick = () => {
    if (terminalOpen && finished) {
      closeTerminal();
      return;
    }
    runSequence();
  };

  useEffect(() => {
    if (!terminalOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeTerminal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [terminalOpen]);

  const copyCmd = async () => {
    try {
      await navigator.clipboard.writeText("npx ritikdotdev");
    } catch {
      // clipboard unavailable
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1600);
  };

  return (
    <div className="flex items-start justify-between gap-6 mt-9">
      <div className="flex-1 min-w-0">
        <h1 className="animate-reveal m-0 flex items-end gap-2 font-sans text-[clamp(58px,14vw,96px)] leading-[.86] font-bold tracking-[-0.035em] text-[#f5e4de]">
          Ritik
          <span className="inline-block w-[15px] h-[clamp(44px,10vw,70px)] bg-[#4fdcc9] mb-2.5 shadow-[3px_3px_0_rgba(79,220,201,.3)] animate-pulse motion-reduce:animate-none" />
        </h1>
        <p
          className="animate-reveal mt-5 font-mono text-base text-[#ff8a6b]"
          style={{ animationDelay: "80ms" }}
        >
          Full-Stack Developer.
        </p>
        <p
          className="animate-reveal mt-2.5 font-mono text-base font-medium leading-normal text-[#8b8b97]"
          style={{ animationDelay: "140ms" }}
        >
          Builds{" "}
          <span className="text-[#4fdcc9] font-semibold">scalable products</span> that
          ship.
        </p>

        <div
          className="animate-reveal flex gap-2.5 items-center mt-8"
          style={{ animationDelay: "220ms" }}
        >
          {socials.map(({ title, url, Icon }) => (
            <a
              key={title}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
              className="will-change-transform flex items-center justify-center w-9.5 h-9.5 border-2 border-[#3c4255] rounded-lg bg-[#222634] text-[#4fdcc9] shadow-[3px_3px_0_#323748] transition-transform duration-200 ease-snap can-hover:hover:translate-x-0.5 can-hover:hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:duration-100 active:ease-snap"
            >
              <Icon size={19} />
            </a>
          ))}
        </div>

        {terminalOpen && (
          <div
            onClick={closeTerminal}
            aria-hidden="true"
            className="animate-backdrop-in motion-reduce:animate-none fixed inset-0 z-30 bg-[#191c27]/70"
          />
        )}

        <div
          className="animate-reveal relative z-40 max-w-[360px]"
          style={{ animationDelay: "280ms" }}
        >
          <div className="flex items-stretch mt-6 border-2 border-[#3c4255] rounded-xl overflow-hidden bg-[#252938] shadow-[4px_4px_0_#323748]">
            <span className="w-3 bg-[#4fdcc9] flex-none border-r-2 border-[#3c4255]" />
            <code
              onClick={handleCodeClick}
              title={
                terminalOpen && finished ? "click to close" : "click to run"
              }
              className="group cursor-pointer flex-1 flex items-center gap-2 px-4 py-3.5 font-mono text-[14px] text-[#4fdcc9] transition-colors hover:bg-[#1c1c27]"
            >
              <span className="text-[#9a96a6]">$</span>
              npx ritikdotdev
              <span className="inline-block w-1.5 h-[16px] bg-[#4fdcc9] animate-pulse motion-reduce:animate-none" />
              <span className="ml-auto hidden sm:inline-flex items-center gap-1 font-mono text-[10px] font-semibold text-[#9a96a6] opacity-0 -translate-x-1 transition-all duration-200 ease-snap group-hover:opacity-100 group-hover:translate-x-0">
                {terminalOpen && finished ? "close" : "run"} ▸
              </span>
            </code>
            <span className="flex-none flex items-center pr-2 border-l-2 border-[#3c4255]">
              <button
                onClick={copyCmd}
                title="copy"
                aria-label="copy command"
                className="will-change-transform cursor-pointer flex items-center justify-center w-8.5 h-8.5 ml-1.5 rounded-md border-2 border-[#3c4255] bg-[#191c27] text-[#9a96a6] shadow-[2px_2px_0_#323748] transition-all duration-200 ease-snap hover:text-[#4fdcc9] hover:border-[#4fdcc9] can-hover:hover:translate-x-0.5 can-hover:hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:duration-100 active:ease-snap"
              >
                {copied ? (
                  <FaCheck size={13} className="text-[#34d399]" />
                ) : (
                  <FiCopy size={13} />
                )}
              </button>
            </span>
          </div>

          {terminalOpen && (
            <div className="animate-sheet-in motion-reduce:animate-none absolute top-full left-0 right-0 z-30 mt-2.5 border-2 border-[#3c4255] rounded-[9px] bg-[#191c27] shadow-[6px_6px_0_#323748] px-4 py-3.5 font-mono text-[13px] leading-[1.75] overflow-hidden">
              {rows.map((html, i) => (
                <div key={i} dangerouslySetInnerHTML={{ __html: html }} />
              ))}
              {finished && (
                <span className="inline-block w-2 h-3.5 bg-[#4fdcc9] animate-pulse motion-reduce:animate-none" />
              )}
            </div>
          )}
        </div>
      </div>

      <div
        className="animate-reveal hidden md:block relative flex-none w-[clamp(172px,32vw,214px)]"
        style={{ animationDelay: "100ms" }}
      >
        <div className="will-change-transform rounded-xl border-[3px] border-[#f5e4de] bg-[#222634] shadow-[8px_8px_0_#ff8a6b] overflow-hidden transition-all duration-200 ease-snap can-hover:hover:-translate-x-0.5 can-hover:hover:-translate-y-0.5 can-hover:hover:shadow-[10px_10px_0_#ff8a6b]">
          <div className="flex items-center justify-between px-3 py-2 border-b-[3px] border-[#565d7a] bg-[#252938] font-mono text-[10px] tracking-wide">
            <span className="text-[#ff8a6b] font-bold">◈ DEV ID</span>
            <span className="text-[#7a7886]">#1805</span>
          </div>

          <div className="relative aspect-square overflow-hidden">
            <Image
              src="/avatar.png"
              alt="Ritik Tomar"
              fill
              sizes="(min-width: 768px) 214px, 172px"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex items-center justify-between gap-2 px-3 py-2.25 border-t-[3px] border-[#565d7a] bg-[#252938] font-mono text-[10.5px]">
            <span className="text-[#7a7886]">Ritik Tomar</span>
            <span className="inline-flex items-center gap-1.25 text-[#5fd38f]">
              <span
                className="w-1.75 h-1.75 rounded-full bg-[#5fd38f]"
                style={{ boxShadow: "0 0 6px #5fd38f" }}
              />
              building
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
