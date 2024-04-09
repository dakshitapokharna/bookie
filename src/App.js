import Navbar from './Navbar';
import './App.css';
import About from'./About'
import Contact from './Contact';
import Copyright from './Copyright';
import Bestsellers from "./Bestsellers";
import Ourcollection2 from "./Ourcollection2";
import './footer.css';
import './'
import Review from './Review';
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <TOP /> */}
      <About />
      <Ourcollection2/>
      <Bestsellers/>
      <Review/>
      <Contact />
      <Copyright />
    </div>
  );
}

export default App;
