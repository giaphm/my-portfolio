import { Experiences } from "./components/experiences";
import { Footer } from "./components/footer";
import AboutMe from "./components/aboutMe";
import Projects from "./components/projects";
import Skills from "./components/skills";
import NavBar from "./components/navBar";
import Introduction from "./components/introduction";
import { SmoothScrollProgressBar } from "./components/smoothScrollProgressBar";

function App() {
  return (
    <>
      <SmoothScrollProgressBar />
      <NavBar />
      <Introduction />
      <AboutMe />
      <Projects />
      <Skills />
      <Experiences />
      <Footer />
    </>
  );
}

export default App;
