import { FaGithub } from "react-icons/fa6";
import {
  getContributions,
  getLatestActivity,
  type ContributionDay,
  type LatestActivity,
} from "../lib/github";
import ContributionGraphGrid from "./ContributionGraphGrid";
import Reveal from "./Reveal";

const GITHUB_USERNAME = "ritiktomar10x";

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

type Cell = ContributionDay | null;

function buildWeeks(days: ContributionDay[], year: number) {
  const firstDow = new Date(year, 0, 1).getDay();
  const cells: Cell[] = [
    ...Array.from({ length: firstDow }, () => null),
    ...days,
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const weekCount = cells.length / 7;
  const weeks: Cell[][] = [];
  for (let w = 0; w < weekCount; w++) {
    weeks.push(cells.slice(w * 7, w * 7 + 7));
  }
  return weeks;
}

function buildMonthLabels(weeks: Cell[][]) {
  let lastMonth = -1;
  return weeks.map((week) => {
    const firstCell = week.find((c) => c !== null);
    if (!firstCell) return "";
    const month = new Date(firstCell.date + "T00:00:00").getMonth();
    if (month !== lastMonth) {
      lastMonth = month;
      return MONTH_NAMES[month];
    }
    return "";
  });
}

function timeAgo(dateStr: string) {
  const diffMs = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diffMs / 60000);
  if (mins < 1) return "just now";
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export default async function ContributionGraph() {
  const year = new Date().getFullYear();
  const today = new Date().toISOString().split("T")[0];

  let total: number;
  let allDays: ContributionDay[];
  let latestActivity: LatestActivity | null;
  try {
    const [data, activity] = await Promise.all([
      getContributions(GITHUB_USERNAME, year),
      getLatestActivity(GITHUB_USERNAME).catch(() => null),
    ]);
    total = data.total;
    allDays = data.days;
    latestActivity = activity;
  } catch {
    return (
      <div className="mt-7.5 flex items-center justify-between gap-3 flex-wrap border-2 border-[#ffc95f] rounded-xl bg-[rgba(255,201,95,.08)] px-4 py-3.5 font-mono text-[12.5px] text-[#efeaf2] shadow-[5px_5px_0_rgba(255,201,95,.2)]">
        <span className="inline-flex items-center gap-2.5">
          <FaGithub size={16} className="text-[#ffc95f]" />
          contribution data unavailable right now
        </span>
        <a
          href={`https://github.com/${GITHUB_USERNAME}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#ffc95f] underline"
        >
          view on GitHub →
        </a>
      </div>
    );
  }

  const weeks = buildWeeks(allDays, year);
  const monthLabels = buildMonthLabels(weeks);
  const codedToday = (allDays.find((d) => d.date === today)?.count ?? 0) > 0;

  return (
    <Reveal className="mt-7.5 border-2 border-[#3c4255] rounded-xl bg-[#222634] overflow-hidden shadow-[5px_5px_0_#353b4e]">
      <div className="flex items-center justify-between gap-2.5 px-4 py-3 border-b-2 border-[#3c4255] bg-[rgba(79,220,201,.05)]">
        <span className="inline-flex uppercase items-center gap-2.5 font-mono text-[12.5px] font-semibold text-[#d8d3e0]">
          <FaGithub size={16} className="text-[#4fdcc9]" />
          contribution graph
        </span>
        <span
          className={`inline-flex items-center gap-1.5 px-2 py-0.75 border-[1.5px] rounded-md font-mono text-[10.5px] font-bold ${
            codedToday
              ? "border-[#34d399] text-[#34d399]"
              : "border-[#3c4255] text-[#9a96a6]"
          }`}
        >
          <span
            className={`w-1.5 h-1.5 rounded-full ${
              codedToday
                ? "bg-[#34d399] animate-pulse motion-reduce:animate-none"
                : "bg-[#6b6b77]"
            }`}
          />
          {codedToday ? "shipped today" : "not yet today"}
        </span>
      </div>

      <ContributionGraphGrid
        weeks={weeks}
        monthLabels={monthLabels}
        today={today}
        total={total}
        lastShipped={
          latestActivity && {
            message: latestActivity.message,
            repo: latestActivity.repo,
            timeAgo: timeAgo(latestActivity.date),
          }
        }
      />
    </Reveal>
  );
}
