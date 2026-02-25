import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function AnimatedSection({ children, className = "", id }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stagger}
    >
      {children}
    </motion.section>
  );
}
