"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const concepts = [
  {
    name: "Yin & Yang",
    description:
      "Balances energy consumption and production, aiming to harmonize peak usage with peak production times.",
  },
  {
    name: "Interconnectedness",
    description:
      "Recognizes that all parts of the utility system are linked, with changes in one area affecting others.",
  },
  {
    name: "Regenerative Cultures",
    description:
      "Designs the system to meet current needs while regenerating resources, like using waste heat for local agriculture.",
  },
  {
    name: "Personal Responsibility",
    description:
      "Encourages active community participation in energy management with real-time usage feedback.",
  },
  {
    name: "Diversity",
    description:
      "Incorporates various energy sources to increase system resilience and adaptability.",
  },
  {
    name: "Natural Economic Order",
    description:
      "Implements a local energy trading system for community members to exchange excess energy.",
  },
  {
    name: "Complementarity",
    description:
      "Designs the system to leverage complementary energy sources, optimizing for different conditions.",
  },
  {
    name: "Theory of Colors",
    description:
      "Uses color-coded interfaces to make energy data more intuitive and accessible.",
  },
  {
    name: "Solution Language",
    description:
      "Frames energy challenges positively, focusing on optimization rather than reduction.",
  },
  {
    name: "Inner Fulfillment",
    description:
      "Designs the system to contribute to the communitys sense of purpose and achievement.",
  },
];

const Cloud = ({ concept, isHovered, onHover, onLeave }) => {
  return (
    <Link href="/ai-system-design" passHref>
      <motion.div
        className="bg-white bg-opacity-70 rounded-full shadow-lg cursor-pointer text-center backdrop-blur-sm p-4"
        whileHover={{ scale: 1.1 }}
        onMouseEnter={() => onHover(concept)}
        onMouseLeave={onLeave}
      >
        <span className="text-sm sm:text-base md:text-lg text-blue-800">
          {concept.name}
        </span>
      </motion.div>
    </Link>
  );
};

const Description = ({ concept }) => {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 bg-white bg-opacity-80 p-4 shadow-lg backdrop-blur-sm"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: 100, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h2 className="text-xl font-bold mb-2 text-blue-800">{concept.name}</h2>
      <p className="text-sm sm:text-base text-blue-700">
        {concept.description}
      </p>
    </motion.div>
  );
};

export default function Home() {
  const [hoveredConcept, setHoveredConcept] = useState(null);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 via-green-100 to-blue-100 p-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 text-blue-800">
        EcoSphere Harmony
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
        {concepts.map((concept, index) => (
          <Cloud
            key={index}
            concept={concept}
            isHovered={hoveredConcept === concept}
            onHover={setHoveredConcept}
            onLeave={() => setHoveredConcept(null)}
          />
        ))}
      </div>
      <p className="text-center text-lg text-blue-800">
        Explore our AI-driven dynamic utility system optimizing community
        welfare
      </p>
      <AnimatePresence>
        {hoveredConcept && <Description concept={hoveredConcept} />}
      </AnimatePresence>
    </main>
  );
}
