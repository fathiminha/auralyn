import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-40 px-8 md:px-20 bg-deepplum overflow-hidden relative">
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute right-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-lavender/10 hidden lg:block"
      />
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute right-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-lavender/15 hidden lg:block"
      />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-24"
        >
          <div className="w-12 h-px bg-rose/50" />
          <p className="font-sans text-[10px] text-lavender/50 tracking-[0.5em] uppercase">Begin Your Journey</p>
        </motion.div>

        {/* Giant heading */}
        <div className="mb-24">
          {"Ready to".split(" ").map((word, i) => (
            <div key={i} className="overflow-hidden inline-block mr-8">
              <motion.span
                initial={{ y: "105%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 1.1, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
                className="font-serif text-7xl md:text-[9rem] font-bold text-cream inline-block leading-none"
              >
                {word}
              </motion.span>
            </div>
          ))}
          <br />
          <div className="overflow-hidden inline-block mr-8">
            <motion.span
              initial={{ y: "105%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 1.1, delay: 0.25, ease: [0.76, 0, 0.24, 1] }}
              className="font-serif text-7xl md:text-[9rem] font-bold italic text-rose inline-block leading-none"
            >
              Begin
            </motion.span>
          </div>
          <div className="overflow-hidden inline-block">
            <motion.span
              initial={{ y: "105%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 1.1, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
              className="font-serif text-7xl md:text-[9rem] font-bold text-cream inline-block leading-none"
            >
              Your Glow?
            </motion.span>
          </div>
        </div>

        {/* Form row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-lavender/20 pt-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="font-sans text-sm text-lavender/60 max-w-xs leading-relaxed font-light"
          >
            Join thousands who have discovered their inner radiance through Auralyn wellness rituals.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
          >
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-transparent border-b border-lavender/30 text-cream placeholder-lavender/30 py-4 px-0 font-sans text-sm outline-none focus:border-rose transition-colors duration-300 w-full sm:w-80 tracking-wider font-light"
            />
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: "#C9808A", borderColor: "#C9808A" }}
              whileTap={{ scale: 0.97 }}
              className="border border-lavender/30 text-lavender font-sans text-[10px] tracking-[0.35em] uppercase px-8 py-4 hover:text-cream transition-all duration-300"
            >
              Begin →
            </motion.button>
          </motion.div>
        </div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="flex gap-10 mt-10 flex-wrap"
        >
          {["No spam, ever", "Cancel anytime", "Free to start"].map((text) => (
            <div key={text} className="flex items-center gap-2 text-lavender/40 font-sans text-[9px] tracking-widest uppercase">
              <span className="text-rose">✦</span> {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;