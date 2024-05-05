import "./app.css";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import Skills from "./components/skills/Skills";
import AnimatedCards from "./components/projects/Projects";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
        <Hero />
      </section>
      <section id="About">
        <Skills />
      </section>
      <section id="Experience">
        <AnimatedCards />
      </section>
      <section id="Projects">Projects</section>
      <section id="Contact">Contact</section>
      {/* <section>Contact</section> */}
    </div>
  );
}

export default App;
