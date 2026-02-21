import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = ["Home", "About", "Services", "Journal", "Contact"];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 3.5, ease: [0.76, 0, 0.24, 1] }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md border-b border-lavender/30 py-4"
            : "bg-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
          <motion.div
            whileHover={{ letterSpacing: "0.25em" }}
            transition={{ duration: 0.5 }}
            className={`font-display text-2xl font-light cursor-pointer tracking-[0.15em] uppercase ${
              scrolled ? "text-deepplum" : "text-cream"
            }`}
          >
            Auralyn
          </motion.div>

          <ul className="hidden md:flex gap-10">
            {navLinks.map((link, i) => (
              <motion.li
                key={link}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.6 + i * 0.08 }}
              >
                <Link
                  to={link.toLowerCase()}
                  smooth={true}
                  duration={1000}
                  offset={-80}
                  className={`font-body text-[11px] tracking-[0.35em] uppercase cursor-pointer hover:text-plum transition-colors duration-300 relative group ${
                    scrolled ? "text-deepplum/50" : "text-cream/60"
                  }`}
                >
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-plum transition-all duration-500 group-hover:w-full" />
                </Link>
              </motion.li>
            ))}
          </ul>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`hidden md:block font-body text-[11px] tracking-[0.3em] uppercase px-6 py-3 border transition-all duration-300 ${
              scrolled
                ? "border-plum/40 text-plum hover:bg-plum hover:text-cream"
                : "border-cream/30 text-cream hover:bg-cream/10"
            }`}
          >
            Begin Journey
          </motion.button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex flex-col gap-1.5 cursor-pointer md:hidden"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                animate={
                  i === 0 ? (menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }) :
                  i === 1 ? (menuOpen ? { opacity: 0 } : { opacity: 1 }) :
                  (menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 })
                }
                className={`w-6 h-px block ${scrolled ? "bg-deepplum" : "bg-cream"}`}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-40 bg-deepplum flex flex-col items-center justify-center gap-6"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08 }}
              >
                <Link
                  to={link.toLowerCase()}
                  smooth={true}
                  duration={1000}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="font-display text-6xl font-light text-cream cursor-pointer hover:text-lavender transition-colors duration-300 tracking-widest italic"
                >
                  {link}
                </Link>
              </motion.div>
            ))}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-10 font-mono text-xs text-cream tracking-widest"
            >
              Discover Your Glow — Est. 2025
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;