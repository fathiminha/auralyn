import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import ServiceCard from "./components/ServiceCard";

function App(){
  return(
    <main>
      <Navbar />
      <Hero />
      <Intro />
      <ServiceCard />
    </main>
  )
}

export default App;