"use client";

import { useState } from "react";
import HorizontalScroll from "./HorizontalScroll";
import type { ContributionDay } from "../lib/github";

type Cell = ContributionDay | null;

const WEEKDAY_LABELS = ["", "Mon", "", "Wed", "", "Fri", ""];

const MONTH_NAMES = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const LEVEL_BG = [
  "#2e3344",
  "rgba(79,220,201,.28)",
  "rgba(79,220,201,.5)",
  "rgba(79,220,201,.72)",
  "#4fdcc9",
];
const LEVEL_GLOW = [
  "none",
  "none",
  "none",
  "0 0 4px rgba(79,220,201,.35)",
  "0 0 6px rgba(79,220,201,.6)",
];

function formatDay(dateStr: string) {
  const d = new Date(dateStr + "T00:00:00");
  return `${MONTH_NAMES[d.getMonth()]} ${d.getDate()}`;
}

export default function ContributionGraphGrid({
  weeks,
  monthLabels,
  today,
  total,
  lastShipped,
}: {
  weeks: Cell[][];
  monthLabels: string[];
  today: string;
  total: number;
  lastShipped?: { message: string; repo: string; timeAgo: string } | null;
}) {
  const [hovered, setHovered] = useState<ContributionDay | null>(null);

  return (
    <>
      <div className="relative">
        <HorizontalScroll
          scrollToSelector="[data-today]"
          className="px-4 pt-3 overflow-x-auto no-scrollbar"
        >
          <div className="flex gap-1.5">
            <div className="flex flex-col gap-1 font-mono text-[10px] text-[#9a96a6] pt-[18px]">
              {WEEKDAY_LABELS.map((label, i) => (
                <span key={i} className="h-2.75 leading-[11px]">
                  {label}
                </span>
              ))}
            </div>
            <div
              className="grid flex-1 gap-1"
              style={{
                gridTemplateColumns: `repeat(${weeks.length + 1}, minmax(11px, 1fr))`,
                gridTemplateRows: "14px repeat(7, 11px)",
              }}
              onMouseLeave={() => setHovered(null)}
            >
              {monthLabels.map(
                (label, wi) =>
                  label && (
                    <span
                      key={`m-${wi}`}
                      className="font-mono text-[10px] text-[#9a96a6] text-left"
                      style={{ gridColumn: wi + 1, gridRow: 1 }}
                    >
                      {label}
                    </span>
                  ),
              )}
              {weeks.map((week, wi) =>
                week.map((cell, di) => {
                  const level = cell?.level ?? 0;
                  const title = cell
                    ? cell.count > 0
                      ? `${cell.count} contribution${cell.count > 1 ? "s" : ""}`
                      : "No contributions"
                    : "";
                  return (
                    <span
                      key={`${wi}-${di}`}
                      title={title}
                      data-today={cell?.date === today || undefined}
                      onMouseEnter={() => cell && setHovered(cell)}
                      onClick={() => cell && setHovered(cell)}
                      style={
                        {
                          gridColumn: wi + 1,
                          gridRow: di + 2,
                          background: cell ? LEVEL_BG[level] : "transparent",
                          boxShadow: cell ? LEVEL_GLOW[level] : "none",
                          "--stagger-delay": `${wi * 5 + di * 2}ms`,
                        } as React.CSSProperties
                      }
                      className={
                        cell
                          ? "stagger-cell will-change-transform rounded-xs transition-transform duration-150 ease-snap can-hover:hover:scale-150 relative can-hover:hover:z-10 cursor-pointer"
                          : "rounded-xs"
                      }
                    />
                  );
                }),
              )}
            </div>
          </div>
        </HorizontalScroll>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-[#222634] to-transparent"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-[#222634] to-transparent"
        />
      </div>

      {lastShipped && (
        <div className="px-4 pt-4 font-mono text-[11px] text-[#9a96a6] [overflow-wrap:anywhere]">
          <span className="text-[#9a96a6]">last shipped:</span>{" "}
          <span className="text-[#d8d3e0]">{lastShipped.message}</span>{" "}
          <span className="text-[#4fdcc9]">→ {lastShipped.repo}</span>,{" "}
          {lastShipped.timeAgo}
        </div>
      )}

      <div className="flex items-center justify-between gap-3 flex-wrap px-4 py-3.5 mt-3 border-t-[1.5px] border-[#323748] font-mono text-[11.5px] text-[#9a96a6]">
        <span>
          {hovered ? (
            <>
              <span className="text-[#4fdcc9] font-bold">
                {hovered.count}
              </span>{" "}
              contribution{hovered.count === 1 ? "" : "s"}{" "}
              <span className="text-[#d8d3e0]">on {formatDay(hovered.date)}</span>
            </>
          ) : (
            <>
              <span className="text-[#4fdcc9] font-bold">{total}</span>{" "}
              contributions
            </>
          )}
        </span>
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1.25 border-[1.5px] border-[#3c4255] rounded-md bg-[#1c1c27]">
          less
          {LEVEL_BG.map((bg, i) => (
            <span
              key={i}
              className="w-2.5 h-2.5 rounded-xs border border-white/5"
              style={{ background: bg }}
            />
          ))}
          more
        </span>
      </div>
    </>
  );
}
