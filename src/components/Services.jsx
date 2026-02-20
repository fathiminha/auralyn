import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import ServiceCard from "./ServiceCard";
import mindfulImg from "../assets/images/mindful.jpg";
import movementImg from "../assets/images/movement.jpg";
import nourishImg from "../assets/images/nourish.jpg";
import glowImg from "../assets/images/glow.jpg";

const services = [
  {
    title: "Mindful Living",
    description:
      "Discover the art of living in the present moment. Our mindfulness programs guide you through meditation, breathwork, and daily rituals that quiet the noise and reconnect you with your inner self.",
    image: mindfulImg,
    color: "#6B3FA0",
    tag: "Mindfulness",
  },
  {
    title: "Move With Purpose",
    description:
      "Movement is medicine. From gentle yoga flows to energizing strength sessions, our expertly crafted programs help you build a body you love — one that feels as good as it looks.",
    image: movementImg,
    color: "#C9808A",
    tag: "Movement",
  },
  {
    title: "Nourish Your Soul",
    description:
      "True wellness starts from within. Explore our holistic nutrition guides, plant-based recipes, and personalized meal plans that fuel your body and uplift your spirit.",
    image: nourishImg,
    color: "#8B5CF6",
    tag: "Nutrition",
  },
  {
    title: "Glow Rituals",
    description:
      "Elevate your self-care with luxurious glow rituals designed for the modern woman. From skincare ceremonies to evening wind-down routines, find your personal glow practice.",
    image: glowImg,
    color: "#E879A0",
    tag: "Self Care",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id="services" className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="text-center mb-24">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-rose font-medium tracking-widest uppercase text-sm mb-4"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl text-deepplum leading-tight"
          >
            Your Path to <br />
            <span className="text-plum italic">Radiance</span>
          </motion.h2>
        </div>

        {services.map((service, index) => (
          <ServiceCard key={service.title} {...service} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;