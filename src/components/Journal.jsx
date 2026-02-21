import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import journal1 from "../assets/images/journal1.jpg";
import journal2 from "../assets/images/journal2.jpg";
import journal3 from "../assets/images/journal3.jpg";

const posts = [
  { image: journal1, tag: "Mindfulness", number: "01", title: "5 Morning Rituals That Will Transform Your Day", excerpt: "Start your mornings with intention and create ripples of calm that last all day.", color: "#6B3FA0", date: "Feb 12, 2025" },
  { image: journal2, tag: "Nutrition", number: "02", title: "The Power of Plant-Based Eating for Inner Glow", excerpt: "Ancient plant wisdom for your modern body. Discover how food becomes your most powerful ritual.", color: "#C9808A", date: "Feb 5, 2025" },
  { image: journal3, tag: "Movement", number: "03", title: "Why Slow Yoga Is the New High-Intensity Workout", excerpt: "Intentional, sacred movement. Why slowing down is the most radical act of self-care.", color: "#9B6BB5", date: "Jan 28, 2025" },
];

const JournalCard = ({ post, i, isInView }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [4, -4]);
  const rotateY = useTransform(x, [-100, 100], [-4, 4]);
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
      className="group cursor-pointer bg-cream border border-lavender/20 hover:border-plum/30 transition-all duration-500"
    >
      <div className="h-64 overflow-hidden relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-deepplum/80 to-transparent" />
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute top-3 right-3 w-6 h-6 border-t border-r"
          style={{ borderColor: post.color }}
        />
        <div className="absolute top-4 left-4">
          <span className="font-mono text-[9px] text-lavender/30 tracking-widest">{post.number}</span>
        </div>
      </div>

      <div className="p-7">
        <div className="flex justify-between items-center mb-4">
          <span className="font-mono text-[9px] tracking-[0.4em] uppercase" style={{ color: post.color }}>
            {post.tag}
          </span>
          <span className="font-mono text-[9px] text-deepplum/20 tracking-wider">{post.date}</span>
        </div>

        <h3 className="font-display text-xl font-light text-deepplum mb-3 leading-snug group-hover:text-plum transition-colors duration-300">
          {post.title}
        </h3>

        <p className="font-body text-sm text-deepplum/35 leading-relaxed mb-6 font-light">
          {post.excerpt}
        </p>

        <motion.button
          whileHover={{ x: 8 }}
          className="font-mono text-[9px] tracking-[0.4em] uppercase flex items-center gap-3 transition-colors duration-300"
          style={{ color: `${post.color}80` }}
        >
          Read More
          <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.8 }}>→</motion.span>
        </motion.button>
      </div>
    </motion.article>
  );
};

const Journal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journal" className="py-40 px-8 md:px-20 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div ref={ref} className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-4 mb-8"
            >
              <div className="w-12 h-px bg-plum/30" />
              <p className="font-mono text-[10px] text-plum/40 tracking-[0.5em] uppercase">The Journal</p>
            </motion.div>

            {"Stories & Wisdom".split(" ").map((word, i) => (
              <div key={i} className="overflow-hidden inline-block mr-5">
                <motion.span
                  initial={{ y: "105%" }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 1, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
                  className={`font-display text-5xl md:text-7xl font-light inline-block ${
                    word === "Wisdom" ? "italic text-plum" : "text-deepplum"
                  }`}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            whileHover={{ x: 8, color: "#6B3FA0" }}
            className="font-mono text-[10px] tracking-[0.4em] uppercase text-deepplum/25 flex items-center gap-3 transition-colors duration-300 whitespace-nowrap"
          >
            All Articles →
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {posts.map((post, i) => (
            <JournalCard key={post.title} post={post} i={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;