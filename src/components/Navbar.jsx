import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Services", "Journal", "Contact"];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="font-serif text-2xl font-bold text-white cursor-pointer"
        >
          Auralyn
        </motion.div>

        <ul className="hidden md:flex gap-8">
          {navLinks.map((link, i) => (
            <motion.li
              key={link}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
            >
              <Link
                to={link.toLowerCase()}
                smooth={true}
                duration={800}
                offset={-80}
                className="relative text-white/80 font-medium cursor-pointer group transition-colors hover:text-white"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full rounded-full" />
              </Link>
            </motion.li>
          ))}
        </ul>

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 20px rgba(255,255,255,0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          className={`hidden md:block px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
            scrolled
              ? "bg-plum text-white hover:bg-deepplum"
              : "bg-white/20 text-white border border-white/30 hover:bg-white/30"
          }`}
        >
          Begin Journey
        </motion.button>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-deepplum/95 backdrop-blur-md px-6 py-4 flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <Link
                key={link}
                to={link.toLowerCase()}
                smooth={true}
                duration={800}
                offset={-80}
                className="text-white/80 font-medium cursor-pointer hover:text-white transition-colors py-2 border-b border-white/10"
                onClick={() => setMenuOpen(false)}
              >
                {link}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;