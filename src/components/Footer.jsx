import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const socials = [
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaPinterest />, href: "#", label: "Pinterest" },
    { icon: <FaYoutube />, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-cream border-t border-lavender/20 py-12 px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.p
          whileHover={{ letterSpacing: "0.4em", color: "#6B3FA0" }}
          transition={{ duration: 0.5 }}
          className="font-display text-2xl font-light text-deepplum/50 tracking-[0.2em] uppercase cursor-pointer transition-colors duration-500"
        >
          Auralyn
        </motion.p>

        <p className="font-mono text-[9px] text-deepplum/15 tracking-[0.4em] uppercase">
          © 2025 Auralyn. All rights reserved.
        </p>

        <div className="flex gap-6">
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ y: -4, color: "#6B3FA0" }}
              className="text-deepplum/15 text-lg transition-colors duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;