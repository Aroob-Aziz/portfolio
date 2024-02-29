import "./app.css";
import { Navbar } from "./components/navbar";

function App() {
  return (
    <div>
      <section>
        <Navbar />
      </section>
      <section>Parallax</section>
      <section>Services</section>
      <section>Parallax</section>
      <section>Projects</section>
      <section>Contact</section>
    </div>
  );
}

export default App;
