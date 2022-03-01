import Navbar from "./Components/Navbar";
import './App.css'
import Opener from "./Components/Opener";
import Description from "./Components/Description";
import Images from "./Components/Images";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="mainContainer">
      <Navbar />
      <Opener />
      <Description />
      <section id='contact' ><Contact /></section>

      <Footer />
    </div>

  );
}

export default App;
