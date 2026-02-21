import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const Cursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const scale = useMotionValue(1);

  const springX = useSpring(cursorX, { stiffness: 100, damping: 18 });
  const springY = useSpring(cursorY, { stiffness: 100, damping: 18 });

  useEffect(() => {
    const move = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      dotX.set(e.clientX - 3);
      dotY.set(e.clientY - 3);
    };
    const grow = () => scale.set(2.5);
    const shrink = () => scale.set(1);
    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <motion.div
        style={{ x: springX, y: springY, scale }}
        transition={{ scale: { type: "spring", stiffness: 200, damping: 20 } }}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-plum/40 z-[9999] pointer-events-none mix-blend-multiply"
      />
      <motion.div
        style={{ x: dotX, y: dotY }}
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-plum z-[9999] pointer-events-none"
      />
    </>
  );
};

export default Cursor;