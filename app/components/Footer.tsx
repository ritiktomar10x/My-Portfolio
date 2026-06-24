import Reveal from "./Reveal";
import VisitorCounter from "./VisitorCounter";

export default function Footer() {
  return (
    <Reveal className="mt-12">
      <footer>
        <VisitorCounter />
        <p className="text-center mt-11 font-mono text-xs text-[#9a96a6]">
          <span className="text-[#9a96a6]">$</span> built from scratch by
          Ritik Tomar <span className="text-[#9a96a6]">©</span>{" "}
          {new Date().getFullYear()}
        </p>
      </footer>
    </Reveal>
  );
}
