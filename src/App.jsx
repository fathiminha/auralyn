import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Journal from "./components/Journal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";

function App() {
  return (
    <AnimatePresence>
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="overflow-x-hidden"
      >
        <Navbar />
        <Hero />
        <Marquee />
        <Intro />
        <Services />
        <Marquee reverse />
        <Journal />
        <Contact />
        <Footer />
      </motion.main>
    </AnimatePresence>
  );
}

export default App;