import { motion } from "framer-motion/dist/framer-motion";

export default function DashboardSlideLeftTransition({ auxKey, children }) {
  const pageMotion = {
    initial: { x: 1000 },
    animate: { x: 0 },
    exit: { x: -1500 },
  };

  return (
    <motion.div
      key={auxKey}
      initial='initial'
      animate='animate'
      exit='exit'
      variants={pageMotion}
    >
      {children}
    </motion.div>);
}
