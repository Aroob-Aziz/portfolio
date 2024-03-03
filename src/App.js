import "./app.css";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";

function App() {
  return (
    <div>
      <section id="Homepage">
        <Navbar />
      </section>
      <section id="About">
        <Hero />
      </section>
      <section id="Experience">Experience</section>
      <section id="Projects">Projects</section>
      <section id="Contact">Contact</section>
      {/* <section>Contact</section> */}
    </div>
  );
}

export default App;
