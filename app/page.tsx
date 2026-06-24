import { Suspense } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import ActivityCard from "./components/ActivityCard";
import ContributionGraph from "./components/ContributionGraph";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <ActivityCard />
      <Suspense fallback={<div className="mt-7.5 h-64" />}>
        <ContributionGraph />
      </Suspense>
      <Skills />
      {/* <Work /> */}
      <Projects />
      <Education />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
