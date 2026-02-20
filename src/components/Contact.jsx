import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="py-32 px-6 bg-deepplum relative overflow-hidden"
    >
      {/* Blobs */}
      <motion.div
        animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 z-10"
        style={{ background: "radial-gradient(circle, #E6D9F2, transparent)" }}
      />
      <motion.div
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute bottom-0 left-0 w-64 h-64 rounded-full opacity-10 z-10"
        style={{ background: "radial-gradient(circle, #C9808A, transparent)" }}
      />

      <div className="max-w-3xl mx-auto text-center relative z-20" ref={ref}>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-rose font-medium tracking-widest uppercase text-sm mb-4"
        >
          Get In Touch
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl md:text-6xl text-white mb-6 leading-tight"
        >
          Ready to Begin Your{" "}
          <span className="text-lavender italic">Glow</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/60 text-lg mb-12 leading-relaxed"
        >
          Join thousands of souls who have already discovered their inner
          radiance with Auralyn. Your transformation starts with one step.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email address"
            className="bg-white/10 border border-white/20 text-white placeholder-white/40 px-6 py-4 rounded-full flex-1 max-w-sm outline-none focus:border-lavender transition-colors duration-300 backdrop-blur-sm"
          />
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(230,217,242,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-deepplum px-8 py-4 rounded-full font-semibold hover:bg-lavender transition-colors duration-300 whitespace-nowrap"
          >
            Start My Journey ✨
          </motion.button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="flex justify-center gap-8 mt-12 flex-wrap"
        >
          {["No spam, ever", "Cancel anytime", "Free to start"].map((text) => (
            <div
              key={text}
              className="flex items-center gap-2 text-white/40 text-sm"
            >
              <span className="text-rose">✓</span> {text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;