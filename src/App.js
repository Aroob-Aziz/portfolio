import "./app.css";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";
import Skills from "./components/skills/Skills";

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
      <section id="Experience">Experience</section>
      <section id="Projects">Projects</section>
      <section id="Contact">Contact</section>
      {/* <section>Contact</section> */}
    </div>
  );
}

export default App;
