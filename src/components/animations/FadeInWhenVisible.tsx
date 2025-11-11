"use client";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

interface Props {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}

export default function FadeInWhenVisible({
  children,
  delay = 0,
  direction = "up",
}: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // 20% visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Direction-based offset
  const getDirectionOffset = () => {
    switch (direction) {
      case "down":
        return { y: -50 };
      case "left":
        return { x: 50 };
      case "right":
        return { x: -50 };
      default:
        return { y: 50 };
    }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, ...getDirectionOffset() },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          transition: { duration: 0.8, delay },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
