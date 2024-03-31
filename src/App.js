import Navbar from './Navbar';
import './App.css';
import About from'./About'
import Contact from './Contact';
import Copyright from './Copyright';
import Bestsellers from "./Bestsellers";
import Ourcollection2 from "./Ourcollection2";
import './footer.css';
import './'
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <TOP /> */}
      <About />
      <Ourcollection2/>
      <Bestsellers/>
      <Contact />
      <Copyright />
    </div>
  );
}

export default App;
