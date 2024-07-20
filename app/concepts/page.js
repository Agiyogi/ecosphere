"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const concepts = [
  {
    name: "Yin & Yang",
    description: "Balances energy consumption and production.",
  },
  {
    name: "Interconnectedness",
    description: "Recognizes all parts of the utility system are linked.",
  },
  {
    name: "Regenerative Cultures",
    description:
      "Designs the system to meet needs while regenerating resources.",
  },
  {
    name: "Personal Responsibility",
    description:
      "Encourages active community participation in energy management.",
  },
  {
    name: "Diversity",
    description: "Incorporates various energy sources for system resilience.",
  },
  {
    name: "Natural Economic Order",
    description: "Implements a local energy trading system.",
  },
  {
    name: "Complementarity",
    description: "Leverages complementary energy sources for optimization.",
  },
  {
    name: "Theory of Colors",
    description: "Uses color-coded interfaces for intuitive energy data.",
  },
  {
    name: "Solution Language",
    description:
      "Frames energy challenges positively, focusing on optimization.",
  },
  {
    name: "Inner Fulfillment",
    description:
      "Contributes to the community's sense of purpose and achievement.",
  },
];

const Concept = ({ concept }) => (
  <motion.div
    className="bg-white bg-opacity-70 rounded-lg shadow-md p-4"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h3 className="text-lg font-semibold text-blue-800 mb-2">{concept.name}</h3>
    <p className="text-sm text-blue-700">{concept.description}</p>
  </motion.div>
);

export default function ConceptsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 via-green-100 to-blue-100 p-4 sm:p-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-blue-800">
        EcoSphere Harmony Concepts
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {concepts.map((concept, index) => (
          <Concept key={index} concept={concept} />
        ))}
      </div>

      <div className="flex justify-center">
        <Link href="/" passHref>
          <motion.div
            className="bg-blue-500 text-white rounded-full shadow-lg p-6 text-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <h2 className="text-xl font-bold">Back to Home</h2>
          </motion.div>
        </Link>
      </div>
    </main>
  );
}
