import AboutMe from "./components/aboutMe";
import { Experiences } from "./components/experiences";
import { Footer } from "./components/footer";
import Introduction from "./components/introduction";
import NavBar from "./components/navBar";
import Projects from "./components/projects";
import Skills from "./components/skills";

function App() {
  return (
    <div className="h-screen mt-0">
      <NavBar />
      <Introduction />
      <AboutMe />
      <Projects />
      <Skills />
      <Experiences />
      <Footer />
    </div>
  );
}

export default App;
