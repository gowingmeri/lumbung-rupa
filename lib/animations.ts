"use client";
import { Variants } from "framer-motion";

// Reusable animation variants for consistency across the app
export const pageVariants: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

export const fadeInVariants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 }
};

export const slideUpVariants: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 }
};

export const slideInLeftVariants: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 }
};

export const slideInRightVariants: Variants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 }
};

export const scaleInVariants: Variants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 }
};

export const staggerContainer: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
};

// Transition configurations
export const defaultTransition = {
  duration: 0.5,
  ease: "easeOut"
};

export const springTransition = {
  type: "spring",
  stiffness: 260,
  damping: 20
};

export const slowTransition = {
  duration: 0.8,
  ease: "easeOut"
};

// Hover animations
export const hoverScale = {
  scale: 1.05,
  transition: { duration: 0.3 }
};

export const hoverRotate = {
  rotate: 5,
  scale: 1.05,
  transition: { duration: 0.3 }
};

export const tapScale = {
  scale: 0.95
};
