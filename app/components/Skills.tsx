"use client";

import { useState } from "react";
import type { IconType } from "react-icons";
import {
  SiCplusplus,
  SiExpress,
  SiFramer,
  SiMysql,
  SiGit,
  SiGithubactions,
  SiGooglecloud,
  SiGooglegemini,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiRust,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiGnubash,
} from "react-icons/si";
import { FaJava, FaHtml5  } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { TbBrandAzure, TbBrain, TbVector,TbBrandMysql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { FiCode } from "react-icons/fi";
import { hexToRgba } from "../lib/color";
import SectionHeading from "./SectionHeading";
import { BsCss } from "react-icons/bs";
type Skill = { name: string; color: string; Icon: IconType };
type SkillCategory = { cat: string; items: Skill[] };

const sk = (name: string, color: string, Icon: IconType): Skill => ({
  name,
  color,
  Icon,
});

const baseCats: SkillCategory[] = [
  {
    cat: "Languages",
    items: [sk("Java", "#3178c6", FaJava),
      sk("JavaScript", "#f7df1e", SiJavascript),
      // sk("TypeScript", "#3178c6", SiTypescript),
    ],
  },
  {
    cat: "Frontend",
    items: [sk("HTML", "#FFFF00", FaHtml5),
      sk("CSS", "#00FFFF", BsCss),
      sk("React", "#61dafb", SiReact),
      sk("Tailwind", "#38bdf8", SiTailwindcss),
      sk("Bootstrap", "#DDDDDD", FaBootstrap),
      // sk("Framer Motion", "#ff4d9d", SiFramer),
    ],
  },
  {
    cat: "Backend",
    items: [
      sk("Node.js", "#5fb85f", SiNodedotjs),
      sk("Express", "#9aa0a6", SiExpress),
      sk("MongoDB", "#4db33d", SiMongodb),
      sk("MySQL", "#F29111", TbBrandMysql),
    ],
  },
  
];

const moreCats: SkillCategory[] = [
  {
    cat: "Tooling",
    items: [
      sk("Git", "#f05032", SiGit),

      sk("Bash", "#7bbf4e", SiGnubash),
      sk("VS Code", "#3a9bd6", VscVscode),
    ],
  },
  
];

export default function Skills() {
  const [showMore, setShowMore] = useState(true);
  const cats = showMore ? [...baseCats, ...moreCats] : baseCats;

  return (
    <div>
      <SectionHeading
        number="01"
        title="skills"
        id="skills"
        icon={FiCode}
        className="mt-21.5 mb-7.5"
      />
      <div className="flex flex-col gap-5">
        {cats.map((cat, ci) => {
          const isExtra = showMore && ci >= baseCats.length;
          return (
          <div
            key={cat.cat}
            className={`flex flex-col sm:flex-row gap-2 sm:gap-4.5 sm:items-start ${isExtra ? "animate-reveal" : ""}`}
            style={isExtra ? { animationDelay: `${(ci - baseCats.length) * 70}ms` } : undefined}
          >
            <div className="flex-none sm:w-22 sm:pt-2.25 font-mono text-[11px] font-bold tracking-wide uppercase text-[#9a96a6]">
              {cat.cat}
            </div>
            <div className="flex-1 sm:min-w-50 flex flex-wrap gap-2.25">
              {cat.items.map((item) => (
                <span
                  key={item.name}
                  className="will-change-transform inline-flex items-center gap-2 px-3.25 py-2 rounded-md border-2 border-[#3c4255] bg-[#222634] font-sans font-semibold text-[13.5px] text-[#efeaf2] shadow-[3px_3px_0_var(--chip-shadow)] transition-transform duration-200 ease-snap can-hover:hover:translate-x-0.5 can-hover:hover:translate-y-0.5"
                  style={
                    {
                      "--chip-shadow": hexToRgba(item.color, 0.24),
                    } as React.CSSProperties
                  }
                >
                  <item.Icon size={14} style={{ color: item.color }} />
                  {item.name}
                </span>
              ))}
            </div>
          </div>
          );
        })}
        <div className="flex justify-start pt-1 sm:ml-26.5">
          {/* <button
            onClick={() => setShowMore((s) => !s)}
            className="will-change-transform cursor-pointer inline-flex items-center gap-1.75 px-3.5 py-2 border-2 border-[#3c4255] rounded-md bg-[#222634] font-mono text-[12.5px] font-semibold text-[#d8d3e0] shadow-[3px_3px_0_#353b4e] transition-transform duration-200 ease-snap can-hover:hover:translate-x-0.5 can-hover:hover:translate-y-0.5 can-hover:hover:text-[#4fdcc9] active:translate-x-1 active:translate-y-1 active:text-[#4fdcc9] active:duration-100 active:ease-snap"
          >
            <span className="text-[#4fdcc9]">{showMore ? "−" : "+"}</span>
            {showMore ? "show less" : "show more"}
          </button> */}
        </div>
      </div>
    </div>
  );
}
