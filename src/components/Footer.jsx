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
    <footer className="bg-deepplum border-t border-lavender/10 py-12 px-8 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        <motion.p
          whileHover={{ letterSpacing: "0.4em", color: "#C9808A" }}
          transition={{ duration: 0.5 }}
          className="font-serif text-2xl font-bold text-lavender/70 tracking-wide cursor-pointer transition-colors duration-500"
        >
          Auralyn
        </motion.p>

        <p className="font-sans text-[9px] text-lavender/30 tracking-[0.4em] uppercase">
          © 2025 Auralyn. All rights reserved. Live in Your Aura. ✦
        </p>

        <div className="flex gap-6">
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ y: -4, color: "#C9808A" }}
              className="text-lavender/40 text-lg transition-colors duration-300"
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