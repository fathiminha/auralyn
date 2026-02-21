import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import mindfulImg from "../assets/images/mindful.jpg";
import movementImg from "../assets/images/movement.jpg";
import nourishImg from "../assets/images/nourish.jpg";
import glowImg from "../assets/images/glow.jpg";

const services = [
  { number: "01", title: "Mindful Living", description: "Discover the art of living in the present moment through meditation, breathwork, and daily rituals that quiet the noise.", image: mindfulImg, color: "#6B3FA0", tag: "Mindfulness" },
  { number: "02", title: "Move With Purpose", description: "Movement is medicine. From gentle yoga flows to energizing sessions, build a body that feels as good as it looks.", image: movementImg, color: "#C9808A", tag: "Movement" },
  { number: "03", title: "Nourish Your Soul", description: "True wellness starts from within. Holistic nutrition guides, plant-based recipes, and personalized meal plans.", image: nourishImg, color: "#8B5CF6", tag: "Nutrition" },
  { number: "04", title: "Glow Rituals", description: "Elevate your self-care with luxurious glow rituals. From skincare ceremonies to evening wind-down routines.", image: glowImg, color: "#E879A0", tag: "Self Care" },
];

const ServiceRow = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group border-b border-white/10 py-10 grid grid-cols-12 gap-8 items-center cursor-pointer relative overflow-hidden"
    >
      {/* Hover background image */}
      <motion.div
        animate={{ opacity: hovered ? 0.15 : 0 }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 z-0"
      >
        <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
      </motion.div>

      {/* Number */}
      <div className="col-span-1 relative z-10">
        <motion.p
          animate={{ color: hovered ? service.color : "rgba(255,255,255,0.2)" }}
          className="text-xs font-mono"
        >
          {service.number}
        </motion.p>
      </div>

      {/* Tag */}
      <div className="col-span-2 relative z-10 hidden md:block">
        <motion.span
          animate={{ opacity: hovered ? 1 : 0.3 }}
          className="text-xs tracking-widest uppercase"
          style={{ color: service.color }}
        >
          {service.tag}
        </motion.span>
      </div>

      {/* Title */}
      <div className="col-span-6 md:col-span-5 relative z-10 overflow-hidden">
        <motion.h3
          animate={{ x: hovered ? 16 : 0 }}
          transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          className="font-serif text-3xl md:text-5xl font-bold text-white"
        >
          {service.title}
        </motion.h3>
      </div>

      {/* Description - appears on hover */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 20 }}
        transition={{ duration: 0.4 }}
        className="col-span-4 hidden lg:block relative z-10"
      >
        <p className="text-white/50 text-sm leading-relaxed">{service.description}</p>
      </motion.div>

      {/* Arrow */}
      <div className="col-span-5 md:col-span-2 flex justify-end relative z-10">
        <motion.div
          animate={{ x: hovered ? 0 : -10, opacity: hovered ? 1 : 0.3 }}
          transition={{ duration: 0.4 }}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center"
          style={{ borderColor: hovered ? service.color : "rgba(255,255,255,0.2)" }}
        >
          <span className="text-white text-sm">→</span>
        </motion.div>
      </div>

      {/* Animated line */}
      <motion.div
        className="absolute bottom-0 left-0 h-px origin-left"
        style={{ backgroundColor: service.color }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      />
    </motion.div>
  );
};

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services" className="py-40 px-8 md:px-16 bg-[#080510] overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={ref} className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-4 mb-6"
            >
              <div className="w-12 h-px bg-white/20" />
              <p className="text-white/30 text-xs tracking-[0.5em] uppercase">What We Offer</p>
            </motion.div>

            {"Your Path to Radiance".split(" ").map((word, i) => (
              <div key={i} className="overflow-hidden inline-block mr-5">
                <motion.span
                  initial={{ y: "100%" }}
                  animate={isInView ? { y: 0 } : {}}
                  transition={{ duration: 1, delay: i * 0.1, ease: [0.76, 0, 0.24, 1] }}
                  className={`font-serif text-5xl md:text-7xl font-bold inline-block ${word === "Radiance" ? "text-plum italic" : "text-white"}`}
                >
                  {word}
                </motion.span>
              </div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="text-white/30 text-sm max-w-xs leading-relaxed font-light"
          >
            Four pillars of wellness, each crafted to elevate your everyday experience.
          </motion.p>
        </div>

        {/* Service Rows */}
        <div className="border-t border-white/10">
          {services.map((service, index) => (
            <ServiceRow key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;