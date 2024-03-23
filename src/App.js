import Navbar from "./Navbar";
import "./App.css";
import TOP from "./TOP";
import About from "./About";
import Contact from "./Contact";
import recomend from "./recomend";
function App() {
  return (
    <div className="App">
      <Navbar />
      <TOP />
      <About/>
      <recomend/>
      <Contact/>

    </div>
  );
}

export default App;
