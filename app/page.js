"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-100 via-green-100 to-blue-100 p-8 sm:p-12 md:p-16 flex flex-col justify-center items-center">
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-12 text-blue-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Halbwild
      </motion.h1>

      <motion.div
        className="text-lg sm:text-xl md:text-2xl text-center mb-16 max-w-3xl leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <p className="mb-6">
          We believe in a future where our children can live in zero-cost
          settlements, embracing ecosphere harmony and sustainable prosperity.
          Through the power of AI and community collaboration, we're reshaping
          resource allocation and energy management.
        </p>
        <p className="mb-6">
          Our vision is to create a world where technology serves the greater
          good, where AI systems work tirelessly to optimize resource usage,
          reduce waste, and foster a symbiotic relationship between humanity and
          nature.
        </p>
        <p>
          Join us in building smart, sustainable communities that leverage
          cutting-edge AI for the benefit of all. Together, we can create a
          future where economic freedom and environmental stewardship go hand in
          hand, paving the way for generations to thrive in balance with our
          planet.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-col sm:flex-row justify-center space-y-6 sm:space-y-0 sm:space-x-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link href="/ai-system-design" passHref>
          <motion.div
            className="bg-blue-500 text-white rounded-full shadow-lg px-8 py-4 text-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-xl font-bold">AI System</h2>
          </motion.div>
        </Link>
        <Link href="/concepts" passHref>
          <motion.div
            className="bg-green-500 text-white rounded-full shadow-lg px-8 py-4 text-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-xl font-bold">Core Principles</h2>
          </motion.div>
        </Link>
      </motion.div>
    </main>
  );
}
