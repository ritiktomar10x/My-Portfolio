import type { IconType } from "react-icons";
import { hexToRgba } from "../lib/color";
import Reveal from "./Reveal";

export default function SectionHeading({
  number,
  title,
  id,
  className = "",
  accent = "#4fdcc9",
  icon: Icon,
}: {
  number: string;
  title: string;
  id?: string;
  className?: string;
  accent?: string;
  icon?: IconType;
}) {
  return (
    <Reveal
      id={id}
      className={`flex items-center gap-3.5 scroll-mt-20 ${className}`}
    >
      <span
        className="inline-flex items-center gap-1.75 px-2.5 h-7.5 border-2 rounded-md font-mono text-xs font-bold"
        style={{
          borderColor: accent,
          background: hexToRgba(accent, 0.1),
          color: accent,
          boxShadow: `2px 2px 0 ${hexToRgba(accent, 0.3)}`,
        }}
      >
        {Icon && <Icon size={12} />}
        {number}
      </span>
      <h2 className="m-0 font-sans text-[clamp(28px,6.5vw,42px)] font-bold tracking-[-0.035em] text-[#efeaf2]">
        {title}
        <span style={{ color: accent }}>.</span>
      </h2>
      <span
        aria-hidden="true"
        className="line-draw flex-1 h-0 border-t-2 will-change-transform"
        style={{
          borderColor: hexToRgba(accent, 0.4),
          borderStyle: "dashed",
        }}
      />
    </Reveal>
  );
}
