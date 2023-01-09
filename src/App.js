import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Main from "./Components/Main";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <main>
      <Navbar />
      <Main>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Main>
    </main>
  );
}

export default App;
