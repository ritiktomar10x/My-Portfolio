"use client";

import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      title="back to top"
      className={`will-change-transform fixed right-5 bottom-5 z-60 w-11.5 h-11.5 flex items-center justify-center border-2 border-[#4fdcc9] rounded-[10px] bg-[#222634] text-[#4fdcc9] cursor-pointer shadow-[4px_4px_0_rgba(79,220,201,.3)] transition-[opacity,transform] duration-200 ease-snap can-hover:hover:translate-x-0.5 can-hover:hover:translate-y-0.5 active:translate-x-1 active:translate-y-1 active:duration-100 active:ease-snap ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <FiArrowUp size={20} strokeWidth={2.4} />
    </button>
  );
}
