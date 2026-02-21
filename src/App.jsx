import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Cursor from "./components/Cursor";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Services from "./components/Services";
import Marquee from "./components/Marquee";
import Journal from "./components/Journal";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <div className="noise" />
      <Cursor />
      <Preloader onComplete={() => setLoaded(true)} />
      <AnimatePresence>
        {loaded && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="overflow-x-hidden"
          >
            <Navbar />
            <div id="home"><Hero /></div>
            <Marquee />
            <div id="about"><Intro /></div>
            <Marquee reverse dark />
            <div id="services"><Services /></div>
            <Marquee />
            <div id="journal"><Journal /></div>
            <div id="contact"><Contact /></div>
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;