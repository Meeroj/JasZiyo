'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface MotionViewProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function MotionView({ children, delay = 0, className = "" }: MotionViewProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 18,
        mass: 1.1,
        delay: delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
