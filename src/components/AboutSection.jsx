"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 md:py-32 bg-[#FAFAF9]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px] lg:min-h-[700px]">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative overflow-hidden"
          >
            <div className="h-full min-h-[500px] lg:min-h-full">
              <img
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=1000&fit=crop&crop=center&auto=format&q=80"
                alt="Bright, modern cafe interior with marble counters and warm lighting"
                className="w-full h-full object-cover"
                style={{
                  filter: "brightness(1.05) contrast(1.02) saturate(0.95)",
                }}
              />

              {/* Subtle overlay for better text contrast */}
              <div className="absolute inset-0 bg-white/10"></div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex items-center px-6 lg:px-16 py-12 lg:py-0"
          >
            <div className="max-w-lg">
              {/* Section Title */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mb-8"
              >
                <h2
                  className="text-3xl md:text-4xl lg:text-5xl font-light text-black mb-6 tracking-[0.02em] leading-tight"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  The <span className="font-medium">Sultana's</span>
                  <br />
                  Experience
                </h2>
              </motion.div>

              {/* Content Paragraphs */}
              <div className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <h3
                    className="text-lg font-medium text-[#9ACD32] mb-3 tracking-[0.05em] uppercase"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    Sourced with Care
                  </h3>
                  <p
                    className="text-gray-700 leading-relaxed text-base tracking-[0.01em]"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    Every ingredient tells a story. Our flour comes from
                    heritage wheat farms, our butter from local dairies, and our
                    coffee beans from sustainable cooperatives around the world.
                    We believe great pastries begin with exceptional
                    ingredients.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  <h3
                    className="text-lg font-medium text-[#9ACD32] mb-3 tracking-[0.05em] uppercase"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    Crafted by Masters
                  </h3>
                  <p
                    className="text-gray-700 leading-relaxed text-base tracking-[0.01em]"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    Our bakers begin before dawn, hand-shaping croissants and
                    kneading dough with techniques passed down through
                    generations. Each pastry is a testament to time-honored
                    craft and unwavering attention to detail.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  <h3
                    className="text-lg font-medium text-[#9ACD32] mb-3 tracking-[0.05em] uppercase"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    A Space to Connect
                  </h3>
                  <p
                    className="text-gray-700 leading-relaxed text-base tracking-[0.01em]"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    Step into our bright, welcoming space where the aroma of
                    fresh pastries mingles with the gentle hum of conversation.
                    Here, moments are savored, connections are made, and every
                    visit feels like coming home.
                  </p>
                </motion.div>
              </div>

              {/* Quote or Additional Element */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 1.2 }}
                className="mt-10 pt-8 border-t border-gray-200"
              >
                <blockquote
                  className="text-lg font-light text-black italic leading-relaxed tracking-[0.02em]"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  "We don't just bake pastries – we create moments of joy, one
                  carefully crafted bite at a time."
                </blockquote>
                <cite
                  className="block mt-4 text-sm text-[#9ACD32] font-medium tracking-[0.05em] uppercase"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  — The Sultana's Team
                </cite>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
