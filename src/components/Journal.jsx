import { motion, useInView, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import journal1 from "../assets/images/journal1.jpg";
import journal2 from "../assets/images/journal2.jpg";
import journal3 from "../assets/images/journal3.jpg";

const posts = [
  {
    image: journal1,
    tag: "Mindfulness",
    title: "5 Morning Rituals That Will Transform Your Day",
    excerpt: "Start your mornings with intention. These simple rituals create ripples of calm throughout your entire day.",
    color: "#6B3FA0",
    date: "Feb 12, 2025",
  },
  {
    image: journal2,
    tag: "Nutrition",
    title: "The Power of Plant-Based Eating for Inner Glow",
    excerpt: "What you eat becomes your energy. Discover how plant-based foods shift your mood, skin, and vitality.",
    color: "#C9808A",
    date: "Feb 5, 2025",
  },
  {
    image: journal3,
    tag: "Movement",
    title: "Why Slow Yoga Is the New High-Intensity Workout",
    excerpt: "Find out why more people are trading HIIT for slow, intentional movement — and experiencing better results.",
    color: "#8B5CF6",
    date: "Jan 28, 2025",
  },
];

const TiltCard = ({ post, i, isInView }) => {
  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [8, -8]);
  const rotateY = useTransform(x, [-100, 100], [-8, 8]);

  const handleMouse = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
      className="bg-white rounded-3xl overflow-hidden border border-lavender/30 cursor-pointer group shadow-lg hover:shadow-2xl transition-shadow duration-500"
    >
      {/* Image */}
      <div className="h-56 overflow-hidden relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <motion.div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 40%, ${post.color}99)`,
          }}
        />
        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <span
            className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full text-white backdrop-blur-sm"
            style={{ backgroundColor: `${post.color}cc` }}
          >
            {post.tag}
          </span>
          <span className="text-white/80 text-xs">{post.date}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-serif text-xl text-deepplum font-bold mb-3 leading-snug group-hover:text-plum transition-colors duration-300">
          {post.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-5">
          {post.excerpt}
        </p>
        <motion.button
          whileHover={{ x: 6 }}
          className="font-semibold text-sm flex items-center gap-2"
          style={{ color: post.color }}
        >
          Read More
          <motion.span
            animate={{ x: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            →
          </motion.span>
        </motion.button>
      </div>
    </motion.article>
  );
};

const Journal = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="journal" className="py-32 px-6 bg-cream overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-rose font-medium tracking-widest uppercase text-sm mb-4"
          >
            The Auralyn Journal
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl text-deepplum"
          >
            Stories &{" "}
            <span className="text-plum italic">Wisdom</span>
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-1 bg-gradient-to-r from-plum to-rose mx-auto mt-6 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <TiltCard key={post.title} post={post} i={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;