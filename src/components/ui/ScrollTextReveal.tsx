"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

export function ScrollTextReveal({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  const element = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ["start 0.8", "start 0.15"], // starts fading when top of element hits 80% of viewport, finishes at 15%
  });

  const words = children.split(" ");

  return (
    <p ref={element} className={`flex flex-wrap ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </p>
  );
}

const Word = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mr-2 mt-1">
      <span className="absolute opacity-15">{children}</span>
      <motion.span style={{ opacity }}>
        {children}
      </motion.span>
    </span>
  );
};
