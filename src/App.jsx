import "./App.css";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import ChooseUs from "./sections/ChooseUs";
import Footer from "./sections/Footer";
import GetInTouch from "./sections/GetInTouch";
import Hero from "./sections/Hero";
import Insight from "./sections/Insight";
import Reviews from "./sections/Reviews";
import Solution from "./sections/Solution";

function App() {
  return (
    <div className="bg-primary font-body">
      <Navbar />
      <Hero />
      <About />
      <Solution />
      <ChooseUs />
      <Reviews />
      <Insight />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;
