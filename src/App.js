import "./app.css";
import { Navbar } from "./components/navbar";
import { Hero } from "./components/hero";

function App() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>
        <Hero />
      </section>
      <section>Services</section>
      <section>Parallax</section>
      <section>Projects</section>
      <section>Contact</section>
    </div>
  );
}

export default App;
