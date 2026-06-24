import { FiBookOpen } from "react-icons/fi";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <div>
      <SectionHeading
        number="03"
        title="education"
        id="education"
        icon={FiBookOpen}
        className="mt-22.5 mb-7.5"
      />
      <Reveal className="flex items-stretch rounded-xl border-2 border-[#3c4255] bg-[#222634] overflow-hidden shadow-[6px_6px_0_rgba(79,220,201,.2)] will-change-transform transition-transform duration-200 ease-snap can-hover:hover:translate-x-0.75 can-hover:hover:translate-y-0.75">
        <span className="flex-none w-2 bg-[#4fdcc9]" />
        <div className="flex-1 min-w-0 px-5.5 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2.5 flex-wrap">
              <span className="font-sans text-xl font-bold text-[#efeaf2] tracking-tight">
                RGPV University
              </span>
              <span className="font-mono text-[10px] font-bold uppercase tracking-wide text-[#4fdcc9] px-2 py-0.75 border-[1.5px] border-[#4fdcc9] rounded-md">
                B.Tech
              </span>
            </div>
            <div className="mt-1.5 font-sans text-sm font-semibold text-[#4fdcc9]">
              Bachelor of Technology in Computer Science
            </div>
            <div className="mt-1 font-mono text-[11.5px] text-[#9a96a6]">
              Burhanpur · Madhya Pradesh , India
            </div>
          </div>
          <div className="flex-none flex items-center justify-between sm:block sm:text-right">
            <div className="font-mono text-2xl font-bold tracking-tight text-[#4fdcc9] leading-none">
              &apos;22–&apos;26
            </div>
            <div className="sm:mt-1.25 font-mono text-[10px] font-semibold uppercase tracking-wide text-[#9a96a6]">
              Graduated
            </div>
          </div>
        </div>
      </Reveal>
    </div>
  );
}
