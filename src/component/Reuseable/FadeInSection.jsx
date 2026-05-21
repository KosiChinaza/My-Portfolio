import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Wraps children in a motion div that fades + slides up when scrolled into view.
 * @param {React.ReactNode} children
 * @param {string} className - Additional Tailwind classes
 * @param {number} delay - Animation delay in seconds
 */
export default function FadeInSection({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
