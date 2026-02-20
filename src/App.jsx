import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import ServiceCard from "./components/ServiceCard";
import Services from "./components/Services";
import Journal from "./components/Journal";
import Contact from "./components/Contact";

function App(){
  return(
    <main>
      <Navbar />
      <Hero />
      <Intro />
      <ServiceCard />
      <Services />
      <Journal />
      <Contact />
    </main>
  )
}

export default App;