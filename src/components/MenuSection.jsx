"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";

export default function MenuSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });
  const [hoveredItem, setHoveredItem] = useState(null);

  const menuCategories = [
    {
      id: 1,
      title: "Baked Goods",
      subtitle: "Fresh from our ovens daily",
      description:
        "Flaky croissants, buttery pastries, and artisanal breads with golden crusts and tender crumbs.",
      image:
        "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600&h=600&fit=crop&crop=center&auto=format&q=80",
      items: ["Croissants", "Danish Pastries", "Artisan Breads", "Muffins"],
    },
    {
      id: 2,
      title: "Sandwiches & Salads",
      subtitle: "Crafted with premium ingredients",
      description:
        "Fresh, vibrant combinations on house-made bread with crisp greens and seasonal produce.",
      image:
        "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=600&fit=crop&crop=center&auto=format&q=80",
      items: ["Gourmet Sandwiches", "Fresh Salads", "Wraps", "Quiches"],
    },
    {
      id: 3,
      title: "Coffee & Tea",
      subtitle: "Expertly sourced and roasted",
      description:
        "Rich, aromatic blends with velvety steamed milk and delicate foam art in every cup.",
      image:
        "https://images.unsplash.com/photo-1555507036-ab794f27925c?w=600&h=600&fit=crop&crop=center&auto=format&q=80",
      items: ["Espresso", "Specialty Lattes", "Premium Teas", "Cold Brew"],
    },
    {
      id: 4,
      title: "Desserts",
      subtitle: "Sweet endings to perfection",
      description:
        "Decadent treats with silky textures, rich flavors, and elegant presentations.",
      image:
        "https://images.unsplash.com/photo-1603532648955-039310d9ed75?w=600&h=600&fit=crop&crop=center&auto=format&q=80",
      items: ["Cakes", "Tarts", "Macarons", "Seasonal Specialties"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="menu"
      className="py-20 md:py-32 px-6 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24"
        >
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-light text-black mb-6 tracking-[0.02em]"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Our <span className="font-medium">Menu</span>
          </h2>
          <p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-[0.02em]"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Discover our carefully curated selection of artisanal pastries,
            fresh ingredients, and handcrafted beverages.
          </p>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
              onMouseEnter={() => setHoveredItem(category.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl">
                <motion.img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  style={{
                    filter: "brightness(1.05) contrast(1.02)",
                  }}
                />

                {/* Hover Overlay with Items */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredItem === category.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/60 flex items-center justify-center"
                >
                  <div className="text-center text-white px-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{
                        y: hoveredItem === category.id ? 0 : 20,
                        opacity: hoveredItem === category.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <h4
                        className="font-medium text-lg mb-3 tracking-[0.05em]"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                      >
                        Featured Items
                      </h4>
                      <ul className="space-y-1">
                        {category.items.map((item, idx) => (
                          <li
                            key={idx}
                            className="text-sm tracking-[0.02em]"
                            style={{ fontFamily: "Outfit, sans-serif" }}
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div>
                  <h3
                    className="text-2xl md:text-3xl font-medium text-black mb-2 tracking-[0.02em] group-hover:text-[#9ACD32] transition-colors duration-300"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {category.title}
                  </h3>
                  <p
                    className="text-sm md:text-base text-[#9ACD32] font-medium tracking-[0.05em] uppercase"
                    style={{ fontFamily: "Outfit, sans-serif" }}
                  >
                    {category.subtitle}
                  </p>
                </div>

                <p
                  className="text-gray-600 leading-relaxed text-sm md:text-base tracking-[0.01em]"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {category.description}
                </p>

                {/* View Menu Link */}
                <motion.div
                  className="pt-2"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <button className="text-black font-medium text-sm tracking-[0.05em] uppercase hover:text-[#9ACD32] transition-colors duration-300 group-hover:text-[#9ACD32]">
                    <span style={{ fontFamily: "Outfit, sans-serif" }}>
                      View Full Menu →
                    </span>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16 md:mt-24"
        >
          <button className="bg-[#9ACD32] hover:bg-[#8ABB28] text-white px-8 py-3 rounded-full font-medium tracking-[0.05em] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <span style={{ fontFamily: "Outfit, sans-serif" }}>
              Download Full Menu
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
