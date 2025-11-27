"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShoppingBag, X } from "lucide-react";

export default function FloatingOrderButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Show button after scrolling down a bit
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const orderOptions = [
    { label: "Pickup", href: "#pickup" },
    { label: "Delivery", href: "#delivery" },
    { label: "Catering", href: "#catering" },
  ];

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50">
          {/* Expanded Menu */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.9 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="mb-4 space-y-2"
              >
                {orderOptions.map((option, index) => (
                  <motion.a
                    key={option.label}
                    href={option.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{
                      duration: 0.2,
                      delay: index * 0.05,
                      ease: "easeOut",
                    }}
                    className="block w-full px-6 py-3 bg-white border border-gray-200 rounded-full shadow-lg hover:shadow-xl hover:border-[#9ACD32] transition-all duration-300 group"
                    onClick={() => setIsExpanded(false)}
                  >
                    <span
                      className="text-black group-hover:text-[#9ACD32] font-medium text-sm tracking-[0.05em] transition-colors"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      Order {option.label}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main FAB Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 100 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
              duration: 0.6,
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-16 h-16 bg-[#9ACD32] hover:bg-[#8ABB28] text-white rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
            style={{
              filter: "drop-shadow(0 8px 32px rgba(154, 205, 50, 0.4))",
            }}
          >
            {/* Ripple effect on hover */}
            <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 group-active:opacity-30 transition-opacity duration-300"></div>

            {/* Icon with rotation animation */}
            <motion.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {isExpanded ? (
                <X size={24} className="relative z-10" />
              ) : (
                <ShoppingBag size={24} className="relative z-10" />
              )}
            </motion.div>

            {/* Pulse animation when not expanded */}
            {!isExpanded && (
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-[#9ACD32]"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.8, 0, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}
          </motion.button>

          {/* Order Now Label */}
          {!isExpanded && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="absolute right-20 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-white border border-gray-200 rounded-full shadow-lg pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                filter: "drop-shadow(0 4px 12px rgba(0, 0, 0, 0.1))",
              }}
            >
              <span
                className="text-black font-medium text-sm tracking-[0.05em] whitespace-nowrap"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Order Now
              </span>

              {/* Arrow pointing to button */}
              <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-white border-r border-b border-gray-200 rotate-[-45deg]"></div>
            </motion.div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
