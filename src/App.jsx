import "./App.css";
import CurrentlyExploring from "./Components/CurrentlyExploring/CurrentlyExploring";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="font-lato">
      <Navbar />
      <Home />
      <Skills />
      <CurrentlyExploring />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
