"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const concepts = [
  "Yin & Yang",
  "Interconnectedness",
  "Regenerative Cultures",
  "Personal Responsibility",
  "Diversity",
  "Natural Economic Order",
  "Complementarity",
  "Theory of Colors",
  "Solution Language",
  "Inner Fulfillment",
];

const Concept = ({ name }) => (
  <motion.div
    className="bg-white bg-opacity-70 rounded-lg shadow-md p-4 text-center"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <h3 className="text-lg font-semibold text-blue-800">{name}</h3>
  </motion.div>
);

const AISystemDesignLink = () => (
  <Link href="/ai-system-design" passHref>
    <motion.div
      className="bg-blue-500 text-white rounded-full shadow-lg p-6 text-center cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <h2 className="text-xl font-bold mb-2">AI System Design</h2>
      <p className="text-sm">Explore our advanced AI-driven utility system</p>
    </motion.div>
  </Link>
);

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 via-green-100 to-blue-100 p-4 sm:p-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-blue-800">
        EcoSphere Harmony
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
        {concepts.map((concept, index) => (
          <Concept key={index} name={concept} />
        ))}
      </div>

      <div className="flex justify-center space-x-4">
        <AISystemDesignLink />
        <Link href="/concepts" passHref>
          <motion.div
            className="bg-green-500 text-white rounded-full shadow-lg p-6 text-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <h2 className="text-xl font-bold mb-2">Concepts Explained</h2>
            <p className="text-sm">Learn more about our guiding principles</p>
          </motion.div>
        </Link>
      </div>
    </main>
  );
}
