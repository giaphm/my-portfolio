import { lazy } from "react";
import { Experiences } from "./components/experiences";
import { Footer } from "./components/footer";
const Introduction = lazy(() => import("./components/introduction"));
const AboutMe = lazy(() => import("./components/aboutMe"));
const NavBar = lazy(() => import("./components/navBar"));
const Projects = lazy(() => import("./components/projects"));
const Skills = lazy(() => import("./components/skills"));
import { SmoothScrollProgressBar } from "./components/smooth-scroll-progressbar";
import { RenderOnViewportEntry } from "./components/renderOnViewportEntry";

function App() {
  return (
    <>
      <SmoothScrollProgressBar />
      <NavBar />
      <Introduction />
      <RenderOnViewportEntry threshold={0.25} style={{ minHeight: "240px" }}>
        <AboutMe />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry threshold={0.25} style={{ minHeight: "240px" }}>
        <Projects />
      </RenderOnViewportEntry>
      <RenderOnViewportEntry threshold={0.25} style={{ minHeight: "240px" }}>
        <Skills />
      </RenderOnViewportEntry>
      <Experiences />
      <Footer />
    </>
  );
}

export default App;
