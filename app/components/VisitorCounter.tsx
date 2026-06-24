"use client";

import { useEffect, useState } from "react";

export default function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    fetch("/api/visitor")
      .then((r) => r.json())
      .then((d) => setCount(d.count))
      .catch(() => {});
  }, []);

  if (count === null) return null;

  const digits = String(count).padStart(5, "0").split("");

  return (
    <div className="flex items-center justify-center gap-2.75 font-mono">
      <span className="text-[11.5px] text-[#9a96a6] tracking-wide">
        you are visitor
      </span>
      <span className="inline-flex gap-0.75">
        {digits.map((d, i) => (
          <span
            key={i}
            className="w-4.5 h-6.25 flex items-center justify-center bg-[#191c27] border-[1.5px] border-[#3c4255] rounded-[3px] text-[#4fdcc9] text-sm font-bold shadow-[2px_2px_0_#353b4e]"
          >
            {d}
          </span>
        ))}
      </span>
    </div>
  );
}
