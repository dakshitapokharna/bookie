import Navbar from "./Navbar";
import "./App.css";
import TOP from "./TOP";
import About from "./About";
import Contact from "./Contact";
import recomend from "./recomend";
import Copyright from "./Copyright";

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <TOP /> */}
      <About />
      <recomend />
      <Contact />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Copyright />
    </div>
  );
}

export default App;
