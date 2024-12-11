"use client";

import { motion } from "framer-motion";
import { Sparkles, Truck, Recycle } from "lucide-react";

const features = [
  {
    icon: <Sparkles size={48} />,
    title: "Premium Quality",
    description:
      "Our silks are sourced from the finest materials, ensuring luxurious comfort and durability.",
  },
  {
    icon: <Truck size={48} />,
    title: "Fast Shipping",
    description:
      "We offer quick and reliable shipping to get your exquisite silks to you as soon as possible.",
  },
  {
    icon: <Recycle size={48} />,
    title: "Sustainable Practices",
    description:
      "We are committed to eco-friendly production methods and ethical sourcing of materials.",
  },
];

export default function Features() {
  return (
    <section className="bg-purple-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-12 font-mono">
          Why Choose Syam Silks
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <div className="text-purple-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
