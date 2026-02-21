import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-40 px-8 md:px-16 bg-[#080510] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto" ref={ref}>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-20"
        >
          <div className="w-12 h-px bg-white/20" />
          <p className="text-white/30 text-xs tracking-[0.5em] uppercase">Get In Touch</p>
        </motion.div>

        {/* Giant CTA text */}
        <div className="mb-20">
          {"Ready to Begin".split(" ").map((word, i) => (
            <div key={i} className="overflow-hidden inline-block mr-6">
              <motion.span
                initial={{ y: "100%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 1.1, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
                className="font-serif text-6xl md:text-9xl font-bold text-white inline-block leading-tight"
              >
                {word}
              </motion.span>
            </div>
          ))}
          <div className="overflow-hidden inline-block mr-6">
            <motion.span
              initial={{ y: "100%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 1.1, delay: 0.3, ease: [0.76, 0, 0.24, 1] }}
              className="font-serif text-6xl md:text-9xl font-bold text-plum italic inline-block leading-tight"
            >
              Your Glow?
            </motion.span>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 border-t border-white/10 pt-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="text-white/30 text-sm max-w-xs leading-relaxed font-light"
          >
            Join thousands of souls who have discovered their inner radiance with Auralyn.
          </motion.p>

          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-transparent border-b border-white/20 text-white placeholder-white/20 py-4 px-0 text-sm outline-none focus:border-plum transition-colors duration-300 w-full sm:w-72 font-light tracking-wider"
            />
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#6B3FA0" }}
              whileTap={{ scale: 0.95 }}
              className="border border-white/20 text-white text-xs tracking-widest uppercase px-8 py-4 hover:border-plum transition-all duration-300"
            >
              Start Journey →
            </motion.button>
          </motion.div>
        </div>

        {/* Trust */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="flex gap-8 mt-10 flex-wrap"
        >
          {["No spam, ever", "Cancel anytime", "Free to start"].map((text) => (
            <div key={text} className="flex items-center gap-2 text-white/20 text-xs tracking-wider">
              <span style={{ color: "#6B3FA0" }}>✓</span> {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;