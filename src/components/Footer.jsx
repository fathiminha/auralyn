import { motion } from "framer-motion";
import { FaInstagram, FaTwitter, FaPinterest, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const socials = [
    { icon: <FaInstagram />, href: "#", label: "Instagram" },
    { icon: <FaTwitter />, href: "#", label: "Twitter" },
    { icon: <FaPinterest />, href: "#", label: "Pinterest" },
    { icon: <FaYoutube />, href: "#", label: "YouTube" },
  ];

  const links = ["About", "Services", "Journal", "Privacy", "Terms"];

  return (
    <footer className="bg-deepplum border-t border-white/10 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-10">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-serif text-4xl font-bold text-white cursor-pointer"
          >
            Auralyn
          </motion.div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <motion.a
                key={link}
                href="#"
                whileHover={{ color: "#E6D9F2" }}
                className="text-white/40 text-sm hover:text-white transition-colors duration-300"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-4">
            {socials.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                whileHover={{ scale: 1.2, y: -3 }}
                className="text-white/40 text-xl hover:text-lavender transition-colors duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/30 text-sm">
            © 2025 Auralyn. All rights reserved. | Live in Your Aura. ✨
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;