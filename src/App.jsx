import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import ServiceCard from "./components/ServiceCard";
import Services from "./components/Services";
import Journal from "./components/Journal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Intro />
      <Services />
      <Journal />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;