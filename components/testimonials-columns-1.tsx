"use client";

import React from "react";
import { motion } from "framer-motion";

// Define the Testimonial type
type Testimonial = {
  text: string;
  image: string;
  name: string;
  role: string;
};

// Define props interface
interface TestimonialsColumnProps {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}

export const TestimonialsColumn: React.FC<TestimonialsColumnProps> = ({
  className,
  testimonials,
  duration = 10,
}) => {
  return (
    <div className={className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 bg-background"
      >
        {[...Array(2)].map((_, arrayIndex) => (
          <React.Fragment key={`array-${arrayIndex}`}>
            {testimonials.map((testimonial, testimonialIndex) => (
              <div
                className="p-10 rounded-3xl border shadow-lg shadow-primary/10 max-w-xs w-full"
                key={`testimonial-${arrayIndex}-${testimonialIndex}`}
              >
                <div className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  {testimonial.text}
                </div>
                <div className="flex items-center gap-2 mt-5">
                  <img
                    width={40}
                    height={40}
                    src={testimonial.image}
                    alt={`${testimonial.name} avatar`}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div className="flex flex-col">
                    <div className="font-medium tracking-tight leading-5 text-gray-900 dark:text-white">
                      {testimonial.name}
                    </div>
                    <div className="leading-5 text-gray-600 dark:text-gray-400 tracking-tight text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};
export default TestimonialsColumn;