"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform values for different layers to create parallax effect
  const layer1Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const layer2Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const layer3Y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const foodItems = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=800&h=800&fit=crop&crop=center&auto=format&q=80",
      alt: "Freshly baked croissant with golden layers",
      layer: 1,
      position: "top-1/4 left-1/4",
      size: "w-64 h-64 md:w-80 md:h-80",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1555507036-ab794f27925c?w=800&h=800&fit=crop&crop=center&auto=format&q=80",
      alt: "Artisanal coffee cup with latte art",
      layer: 2,
      position: "top-1/2 right-1/4",
      size: "w-56 h-56 md:w-72 md:h-72",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=800&h=800&fit=crop&crop=center&auto=format&q=80",
      alt: "Delicate pastry with cream filling",
      layer: 3,
      position: "bottom-1/3 left-1/3",
      size: "w-52 h-52 md:w-64 md:h-64",
    },
    {
      id: 4,
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=800&fit=crop&crop=center&auto=format&q=80",
      alt: "Fresh sandwich with artisan bread",
      layer: 1,
      position: "bottom-1/4 right-1/3",
      size: "w-60 h-60 md:w-76 md:h-76",
    },
    {
      id: 5,
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&h=800&fit=crop&crop=center&auto=format&q=80",
      alt: "Gourmet quiche slice",
      layer: 2,
      position: "top-2/3 left-1/2",
      size: "w-48 h-48 md:w-60 md:h-60",
    },
  ];

  const getTransform = (layer) => {
    switch (layer) {
      case 1:
        return layer1Y;
      case 2:
        return layer2Y;
      case 3:
        return layer3Y;
      default:
        return layer1Y;
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative h-screen bg-white overflow-hidden flex flex-col"
    >
      {/* Main Content - At the Top */}
      <div className="relative z-50 px-6 pt-24 md:pt-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-8"
          >
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-light text-black leading-[0.9] tracking-[0.02em] mb-6"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Artisanal Pastries
              <br />
              <span className="font-medium">Crafted with Love</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-lg md:text-xl text-gray-600 font-light tracking-[0.05em] max-w-2xl mx-auto leading-relaxed"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Where every bite tells a story of tradition, quality, and the
              finest ingredients sourced from around the world.
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <button className="group bg-[#9ACD32] hover:bg-[#8ABB28] text-white px-12 py-4 rounded-full font-medium text-lg tracking-[0.05em] transition-all duration-300 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-[#9ACD32]/30">
              <span style={{ fontFamily: "Outfit, sans-serif" }}>
                Explore Our Menu
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Parallax Food Images - Below the Text */}
      <div className="relative flex-1">
        <motion.div className="absolute inset-0" style={{ opacity }}>
          {foodItems.map((item) => (
            <motion.div
              key={item.id}
              className={`absolute ${item.position} ${item.size}`}
              style={{
                y: getTransform(item.layer),
                zIndex: item.layer * 10,
              }}
              initial={{
                scale: 0.8,
                opacity: 0,
                rotate: Math.random() * 20 - 10,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: 0,
              }}
              transition={{
                duration: 1.2,
                delay: item.id * 0.2 + 1.5,
                ease: "easeOut",
              }}
            >
              {/* Floating animation */}
              <motion.div
                animate={{
                  y: [-8, 8, -8],
                  rotate: [-2, 2, -2],
                }}
                transition={{
                  duration: 4 + item.id * 0.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                  style={{
                    filter: "brightness(1.1) contrast(1.05) saturate(1.1)",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center"
        >
          <motion.div
            className="w-1 h-3 bg-gray-400 rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
