import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ServiceCard = ({ title, description, image, index, color, tag }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className={`flex flex-col md:flex-row ${
        isEven ? "" : "md:flex-row-reverse"
      } gap-10 items-center mb-32`}
    >
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, x: isEven ? -80 : 80 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        className="w-full md:w-1/2 h-80 rounded-3xl overflow-hidden shadow-2xl relative group"
      >
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div
          className="absolute inset-0 opacity-30 transition-opacity duration-300 group-hover:opacity-10"
          style={{
            background: `linear-gradient(135deg, ${color}, transparent)`,
          }}
        />
        <div className="absolute bottom-4 left-4">
          <span
            className="text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full text-white"
            style={{ backgroundColor: color }}
          >
            {tag}
          </span>
        </div>
      </motion.div>

      {/* Text */}
      <div className="w-full md:w-1/2">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="text-sm font-medium tracking-widest uppercase mb-3"
          style={{ color }}
        >
          Auralyn {String(index + 1).padStart(2, "0")}
        </motion.p>

        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
          className="font-serif text-4xl md:text-5xl text-deepplum font-bold mb-6 leading-tight"
        >
          {title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="text-gray-500 text-lg leading-relaxed mb-8"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex items-center gap-4"
        >
          <motion.button
            whileHover={{ x: 8 }}
            className="flex items-center gap-2 font-semibold group transition-all duration-300"
            style={{ color }}
          >
            Read More
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              →
            </motion.span>
          </motion.button>

          <motion.div
            className="h-px flex-1 max-w-24"
            style={{ backgroundColor: color, opacity: 0.3 }}
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;