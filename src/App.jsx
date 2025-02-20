
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";  //named funtion so {fn}
import { Banner } from "./components/Banner"; //space banner
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import {Awards} from "./components/Awards";

function App() {
  return (
    <div className="App">
      
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Awards/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
