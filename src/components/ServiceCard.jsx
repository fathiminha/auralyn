import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ServiceCard = ({ title, description, image, index, color, tag }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
      className={`flex flex-col md:flex-row ${isEven ? "" : "md:flex-row-reverse"} gap-12 items-center mb-32`}
    >
      {/* Image with clip-path reveal */}
      <motion.div
        initial={{ clipPath: "inset(0 100% 0 0)" }}
        animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
        transition={{ duration: 1.2, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{ scale: 1.03 }}
        className="w-full md:w-1/2 h-96 rounded-3xl overflow-hidden shadow-2xl relative group cursor-pointer"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        {/* Color overlay */}
        <div
          className="absolute inset-0 opacity-20 group-hover:opacity-0 transition-opacity duration-500"
          style={{ background: `linear-gradient(135deg, ${color}, transparent)` }}
        />
        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: `${color}22` }}
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center"
          >
            <span className="text-white text-2xl">→</span>
          </motion.div>
        </motion.div>

        {/* Tag */}
        <div className="absolute bottom-4 left-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full text-white backdrop-blur-sm"
            style={{ backgroundColor: `${color}cc` }}
          >
            {tag}
          </motion.span>
        </div>
      </motion.div>

      {/* Text with stagger */}
      <motion.div
        className="w-full md:w-1/2"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-sm font-medium tracking-widest uppercase mb-3"
          style={{ color }}
        >
          Auralyn {String(index + 1).padStart(2, "0")}
        </motion.p>

        <motion.h3
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
          className="font-serif text-4xl md:text-5xl text-deepplum font-bold mb-6 leading-tight"
        >
          {title}
        </motion.h3>

        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
          className="text-gray-500 text-lg leading-relaxed mb-8"
        >
          {description}
        </motion.p>

        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          className="flex items-center gap-4"
        >
          <motion.button
            whileHover={{ x: 10, color: color }}
            className="flex items-center gap-3 font-semibold text-deepplum group transition-all duration-300"
          >
            <span>Read More</span>
            <motion.div
              className="w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{ borderColor: color }}
              whileHover={{ backgroundColor: color }}
            >
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="text-sm"
                style={{ color }}
              >
                →
              </motion.span>
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;