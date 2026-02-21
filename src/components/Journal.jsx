import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import journal1 from "../assets/images/journal1.jpg";
import journal2 from "../assets/images/journal2.jpg";
import journal3 from "../assets/images/journal3.jpg";

const posts = [
  { image: journal1, tag: "Mindfulness", number: "01", title: "5 Morning Rituals That Will Transform Your Day", excerpt: "Start your mornings with intention and create ripples of calm throughout your entire day.", color: "#6B3FA0", date: "Feb 12, 2025" },
  { image: journal2, tag: "Nutrition", number: "02", title: "The Power of Plant-Based Eating for Inner Glow", excerpt: "What you eat becomes your energy. Shift your mood, skin, and vitality.", color: "#C9808A", date: "Feb 5, 2025" },
  { image: journal3, tag: "Movement", number: "03", title: "Why Slow Yoga Is the New High-Intensity Workout", excerpt: "Find out why intentional movement gives better results than HIIT.", color: "#8B5CF6", date: "Jan 28, 2025" },
];

const JournalCard = ({ post, i, isInView }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [5, -5]);
  const rotateY = useTransform(x, [-100, 100], [-5, 5]);
  const ref = useRef(null);

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformPerspective: 1200 }}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.2 + i * 0.15 }}
      className="group cursor-pointer"
    >
      {/* Image */}
      <div className="h-72 overflow-hidden relative mb-5">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
        />
        <motion.div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to top, ${post.color}88, transparent)` }}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="text-white/40 font-mono text-xs">{post.number}</span>
        </div>
      </div>

      {/* Content */}
      <div className="px-1">
        <div className="flex justify-between items-center mb-3">
          <span className="text-xs tracking-widest uppercase font-medium" style={{ color: post.color }}>
            {post.tag}
          </span>
          <span className="text-white/20 text-xs">{post.date}</span>
        </div>

        <h3 className="font-serif text-xl text-white font-bold mb-3 leading-snug group-hover:text-lavender transition-colors duration-300">
          {post.title}
        </h3>

        <p className="text-white/30 text-sm leading-relaxed mb-5">{post.excerpt}</p>

        <motion.button
          whileHover={{ x: 8 }}
          className="text-white/40 text-xs tracking-widest uppercase flex items-center gap-3 hover:text-white transition-colors duration-300"
        >
          Read More
          <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>→</motion.span>
        </motion.button>
      </div>
    </motion.article>
  );
};

const Journal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journal" className="py-40 px-8 md:px-16 bg-[#0d0818] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={ref} className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-px bg-white/20" />
              <p className="text-white/30 text-xs tracking-[0.5em] uppercase">The Auralyn Journal</p>
            </motion.div>

            {"Stories & Wisdom".split(" ").map((word, i) => (
              <div key={i} className="overflow-hidden inline-block mr-5">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 1, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
                  className={`font-serif text-5xl md:text-7xl font-bold inline-block ${word === "Wisdom" ? "text-plum italic" : "text-white"}`}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            whileHover={{ x: 8 }}
            className="text-white/30 text-xs tracking-widest uppercase flex items-center gap-3 hover:text-white transition-colors duration-300 whitespace-nowrap"
          >
            View All Articles →
          </motion.button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {posts.map((post, i) => (
            <JournalCard key={post.title} post={post} i={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;