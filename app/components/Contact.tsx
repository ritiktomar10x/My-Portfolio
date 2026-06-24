"use client";

import { useEffect, useState } from "react";
import { FiMail, FiMapPin, FiCopy, FiArrowUpRight } from "react-icons/fi";
import { FaGithub, FaLinkedin, FaXTwitter, FaCheck } from "react-icons/fa6";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const EMAIL = "tomarritik076@gmail.com";

const channels = [
  {
    key: "email",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    Icon: FiMail,
    accent: "#4fdcc9",
    copyValue: EMAIL,
  },
  {
    key: "github",
    value: "@ritiktomar10x",
    href: "https://github.com/ritiktomar10x",
    Icon: FaGithub,
    accent: "#9d8bff",
  },
  {
    key: "linkedin",
    value: "/in/ritik-tomar-547987200",
    href: "https://linkedin.com/in/ritik-tomar-547987200",
    Icon: FaLinkedin,
    accent: "#ff8a6b",
  },
  {
    key: "x",
    value: "@ritiktomar10x",
    href: "https://x.com/ritiktomar10x",
    Icon: FaXTwitter,
    accent: "#ffc95f",
  },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const update = () =>
      setLocalTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Asia/Kolkata",
          hour: "2-digit",
          minute: "2-digit",
        }).format(new Date()),
      );
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);

  const copyEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      // clipboard unavailable
    }
  };

  return (
    <div>
      <SectionHeading
        number="04"
        title="contact"
        id="contact"
        accent="#ff8a6b"
        icon={FiMail}
        className="mt-22.5 mb-8"
      />

      <Reveal className="flex flex-col sm:flex-row items-start gap-10">
        <div className="flex-1 min-w-0">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 border-2 border-[#ff8a6b] rounded-md bg-[rgba(255,138,107,.1)] font-mono text-[12px] font-semibold text-[#efeaf2]">
            <span className="w-2 h-2 rounded-full bg-[#ff8a6b] animate-pulse motion-reduce:animate-none" />
            available for full-time &amp; freelance
          </div>

          <p className="text-balance mt-5 max-w-sm font-sans text-[clamp(22px,3.2vw,28px)] font-bold leading-[1.2] tracking-[-0.02em] text-[#efeaf2]">
            Got a role, a project, or just an idea worth chasing?
          </p>

          <p className="mt-3 max-w-sm font-sans text-[15px] leading-relaxed text-[#9a96a6]">
            Pick a channel and reach out — I usually reply within a day.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-mono text-[11.5px] text-[#9a96a6]">
            <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
              <FiMapPin size={13} className="flex-none" />
              Madhya Pradesh, India · IST (UTC+5:30)
            </span>
            {localTime && (
              <span className="inline-flex items-center gap-1.25 whitespace-nowrap text-[#8b8b97]">
                <span className="w-1.25 h-1.25 rounded-full bg-[#34d399] animate-pulse motion-reduce:animate-none" />
                {localTime} local
              </span>
            )}
          </div>
        </div>

        <div className="w-full sm:w-[360px] flex-none border-2 border-[#ff8a6b] rounded-lg bg-[#222634] shadow-[7px_7px_0_rgba(255,138,107,.28)] overflow-hidden">
          <div className="flex items-center gap-1.5 px-3.5 py-2.5 bg-[rgba(255,138,107,.08)] border-b-2 border-[#ff8a6b]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff8a6b]" />
            <span className="w-2.5 h-2.5 rounded-full border-2 border-[#464c62]" />
            <span className="w-2.5 h-2.5 rounded-full border-2 border-[#464c62]" />
            <span className="ml-auto font-mono text-[11px] text-[#9a96a6]">
              .contact
            </span>
          </div>

          <div className="px-3.5 pt-3 pb-2">
            <p className="font-mono text-[12px] mb-2">
              <span className="text-[#9a96a6]">$</span>{" "}
              <span className="text-[#c7c0d5]">cat ~/.contact</span>
            </p>

            {channels.map(({ key, value, href, Icon, accent, copyValue }, i) => (
              <a
                key={key}
                href={href}
                target={key === "email" ? undefined : "_blank"}
                rel={key === "email" ? undefined : "noopener noreferrer"}
                style={
                  {
                    "--row-accent": accent,
                    "--stagger-delay": `${i * 70}ms`,
                  } as React.CSSProperties
                }
                className="stagger-cell group flex items-center gap-3 py-2"
              >
                <span className="will-change-transform flex-none flex items-center justify-center w-9 h-9 border-2 border-[#3c4255] rounded-lg bg-[#191c27] text-[#9a96a6] shadow-[2px_2px_0_#323748] transition-transform duration-200 ease-snap group-hover:border-[var(--row-accent)] group-hover:text-[var(--row-accent)] can-hover:group-hover:translate-x-0.5 can-hover:group-hover:translate-y-0.5">
                  <Icon size={14} />
                </span>

                <span className="flex flex-col min-w-0 flex-1">
                  <span className="font-mono text-[10px] font-semibold uppercase tracking-wide text-[#9a96a6] transition-colors group-hover:text-[var(--row-accent)]">
                    {key}
                  </span>
                  <span className="font-mono text-[12.5px] text-[#c7c0d5] truncate transition-colors group-hover:text-[#efeaf2]">
                    {value}
                  </span>
                </span>

                {copyValue ? (
                  <button
                    onClick={copyEmail}
                    title="copy email"
                    className="ml-auto flex-none cursor-pointer p-1.5 text-[#9a96a6] transition-colors hover:text-[var(--row-accent)]"
                  >
                    {copied ? (
                      <FaCheck size={13} className="text-[#34d399]" />
                    ) : (
                      <FiCopy size={13} />
                    )}
                  </button>
                ) : (
                  <FiArrowUpRight
                    size={14}
                    className="ml-auto flex-none text-[var(--row-accent)] opacity-0 -translate-x-1 transition-all duration-200 ease-snap group-hover:opacity-100 group-hover:translate-x-0"
                  />
                )}
              </a>
            ))}

            <p className="mt-1.5 pt-2 border-t border-[#3c4255] font-mono text-[11px] text-[#9a96a6]">
              # usually replies within a day
            </p>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
