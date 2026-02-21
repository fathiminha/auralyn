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
    <footer className="bg-[#080510] border-t border-white/5 py-10 px-8 md:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <motion.p
          whileHover={{ letterSpacing: "0.3em" }}
          transition={{ duration: 0.4 }}
          className="font-serif text-2xl font-bold text-white tracking-widest cursor-pointer"
        >
          Auralyn
        </motion.p>

        <p className="text-white/20 text-xs tracking-widest">
          © 2025 Auralyn. All rights reserved.
        </p>

        <div className="flex gap-6">
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              whileHover={{ y: -4, color: "#E6D9F2" }}
              className="text-white/20 text-lg hover:text-white transition-colors duration-300"
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