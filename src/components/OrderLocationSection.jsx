"use client";

import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MapPin, Clock, Phone, Truck } from "lucide-react";

export default function OrderLocationSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const locationInfo = {
    address: "1585 Commonwealth Ave, Brighton, MA 02135",
    phone: "(617) 202-5454",
    hours: {
      weekdays: "Monday - Friday: 6:30 AM - 7:00 PM",
      weekend: "Saturday - Sunday: 7:00 AM - 8:00 PM",
    },
  };

  const orderOptions = [
    {
      title: "Pickup",
      subtitle: "Order ahead & skip the line",
      description:
        "Order online and pick up at your convenience. Your favorites will be ready when you are.",
      icon: MapPin,
      buttonText: "Order for Pickup",
      color: "#9ACD32",
    },
    {
      title: "Delivery",
      subtitle: "Fresh pastries to your door",
      description:
        "Enjoy our artisanal pastries from the comfort of your home. Available within 5 miles.",
      icon: Truck,
      buttonText: "Order Delivery",
      color: "#8ABB28",
    },
    {
      title: "Dine In",
      subtitle: "Experience our café atmosphere",
      description:
        "Join us in our bright, welcoming space. Perfect for meetings, studying, or casual dining.",
      icon: Clock,
      buttonText: "View Menu & Hours",
      color: "#7CAA24",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="location"
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
            Order & <span className="font-medium">Visit</span>
          </h2>
          <p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed tracking-[0.02em]"
            style={{ fontFamily: "Outfit, sans-serif" }}
          >
            Whether you're stopping by or ordering ahead, we make it easy to
            enjoy your favorite pastries exactly when you want them.
          </p>
        </motion.div>

        {/* Order Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-20">
          {orderOptions.map((option, index) => {
            const Icon = option.icon;
            return (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
                className="text-center group"
              >
                {/* Icon */}
                <motion.div
                  className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${option.color}15` }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon
                    size={32}
                    className="transition-colors duration-300"
                    style={{ color: option.color }}
                  />
                </motion.div>

                {/* Content */}
                <h3
                  className="text-2xl md:text-3xl font-medium text-black mb-2 tracking-[0.02em]"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {option.title}
                </h3>

                <p
                  className="text-sm md:text-base font-medium tracking-[0.05em] uppercase mb-4"
                  style={{
                    fontFamily: "Outfit, sans-serif",
                    color: option.color,
                  }}
                >
                  {option.subtitle}
                </p>

                <p
                  className="text-gray-600 leading-relaxed text-sm md:text-base tracking-[0.01em] mb-6"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {option.description}
                </p>

                {/* CTA Button */}
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                  className="border-2 text-black hover:text-white px-6 py-3 rounded-full font-medium text-sm tracking-[0.05em] transition-all duration-300 hover:shadow-lg group-hover:scale-105"
                  style={{
                    borderColor: option.color,
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = option.color;
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "transparent";
                  }}
                >
                  <span style={{ fontFamily: "Outfit, sans-serif" }}>
                    {option.buttonText}
                  </span>
                </motion.button>
              </motion.div>
            );
          })}
        </div>

        {/* Location Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-[#FAFAF9] rounded-3xl p-8 md:p-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <h3
                className="text-2xl md:text-3xl font-medium text-black mb-6 tracking-[0.02em]"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                Visit Our Café
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#9ACD32]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <MapPin size={14} color="#9ACD32" />
                  </div>
                  <div>
                    <h4
                      className="font-medium text-black mb-1 tracking-[0.02em]"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      Address
                    </h4>
                    <p
                      className="text-gray-600 text-sm leading-relaxed"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {locationInfo.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#9ACD32]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Phone size={14} color="#9ACD32" />
                  </div>
                  <div>
                    <h4
                      className="font-medium text-black mb-1 tracking-[0.02em]"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      Phone
                    </h4>
                    <p
                      className="text-gray-600 text-sm leading-relaxed"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {locationInfo.phone}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#9ACD32]/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Clock size={14} color="#9ACD32" />
                  </div>
                  <div>
                    <h4
                      className="font-medium text-black mb-2 tracking-[0.02em]"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      Hours
                    </h4>
                    <div className="space-y-1">
                      <p
                        className="text-gray-600 text-sm leading-relaxed"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                      >
                        {locationInfo.hours.weekdays}
                      </p>
                      <p
                        className="text-gray-600 text-sm leading-relaxed"
                        style={{ fontFamily: "Outfit, sans-serif" }}
                      >
                        {locationInfo.hours.weekend}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder / Additional Info */}
            <div className="bg-gray-100 rounded-2xl h-64 lg:h-full flex items-center justify-center">
              <div className="text-center text-gray-500">
                <MapPin size={48} className="mx-auto mb-4 opacity-50" />
                <p
                  className="text-sm tracking-[0.02em]"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  Interactive map coming soon
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
