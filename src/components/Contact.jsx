import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-40 px-8 md:px-20 bg-blush border-t border-lavender/20 overflow-hidden relative">
      {/* Rotating decorative circles */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
        className="absolute right-20 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-plum/5 hidden lg:block"
      />
      <motion.div
        animate={{ rotate: [360, 0] }}
        transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
        className="absolute right-20 top-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-plum/8 hidden lg:block"
      />

      <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          className="flex items-center gap-4 mb-24"
        >
          <div className="w-12 h-px bg-plum/30" />
          <p className="font-mono text-[10px] text-plum/40 tracking-[0.5em] uppercase">Begin Your Journey</p>
        </motion.div>

        {/* Giant heading */}
        <div className="mb-24">
          {"Ready to".split(" ").map((word, i) => (
            <div key={i} className="overflow-hidden inline-block mr-8">
              <motion.span
                initial={{ y: "105%" }}
                animate={isInView ? { y: 0 } : {}}
                transition={{ duration: 1.1, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
                className="font-display text-7xl md:text-[9rem] font-light text-deepplum inline-block leading-none"
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
              className="font-display text-7xl md:text-[9rem] font-light italic text-plum inline-block leading-none"
            >
              Begin
            </motion.span>
          </div>
          <div className="overflow-hidden inline-block">
            <motion.span
              initial={{ y: "105%" }}
              animate={isInView ? { y: 0 } : {}}
              transition={{ duration: 1.1, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
              className="font-display text-7xl md:text-[9rem] font-light text-deepplum inline-block leading-none"
            >
              Your Glow?
            </motion.span>
          </div>
        </div>

        {/* Form row */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 border-t border-plum/10 pt-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="font-body text-sm text-deepplum/30 max-w-xs leading-relaxed font-light"
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
              className="bg-transparent border-b border-plum/15 text-deepplum placeholder-deepplum/20 py-4 px-0 font-body text-sm outline-none focus:border-plum transition-colors duration-300 w-full sm:w-80 tracking-wider font-light"
            />
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: "#6B3FA0", color: "#FDF6F0" }}
              whileTap={{ scale: 0.97 }}
              className="border border-plum/25 text-deepplum/50 font-mono text-[10px] tracking-[0.35em] uppercase px-8 py-4 hover:border-plum transition-all duration-300"
            >
              Begin →
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="flex gap-10 mt-10 flex-wrap"
        >
          {["No spam, ever", "Cancel anytime", "Free to start"].map((text) => (
            <div key={text} className="flex items-center gap-2 text-deepplum/20 font-mono text-[9px] tracking-widest uppercase">
              <span className="text-plum/50">✦</span> {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;