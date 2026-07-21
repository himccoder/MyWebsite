import Nav from "./components/Nav";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Work from "./sections/Work";
import Research from "./sections/Research";
import Projects from "./sections/Projects";
import Beyond from "./sections/Beyond";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="grain">
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Research />
        <Projects />
        <Beyond />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
