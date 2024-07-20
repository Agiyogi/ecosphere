"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const AISystemDesign = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "agents", label: "AI Agents" },
    { id: "interfaces", label: "Interfaces" },
    { id: "integration", label: "Integration" },
  ];

  const content = {
    overview: (
      <>
        <h2 className="text-2xl font-bold mb-4 text-blue-800">
          Halbwild: AI-Driven Utility System
        </h2>
        <p className="mb-4">
          Halbwild is an advanced AI-driven utility system that optimizes
          community welfare and environmental sustainability. It integrates
          multiple AI technologies, including multi-agent systems, machine
          learning, and natural language processing, to create a holistic
          approach to energy management.
        </p>
        <p>
          The system is built on the principles of Yin & Yang (balance),
          Interconnectedness, Regenerative Cultures, and other concepts
          introduced earlier. These principles guide the AI decision-making
          processes and system architecture.
        </p>
      </>
    ),
    agents: (
      <>
        <h2 className="text-2xl font-bold mb-4 text-blue-800">
          AI Agent System
        </h2>
        <p className="mb-4">
          Halbwild employs a multi-agent AI system, where different AI agents
          are responsible for specific tasks:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Energy Forecasting Agent:</strong> Predicts energy demand
            and supply using machine learning models.
          </li>
          <li>
            <strong>Resource Allocation Agent:</strong> Optimizes the
            distribution of energy resources based on the Yin & Yang principle.
          </li>
          <li>
            <strong>Community Engagement Agent:</strong> Facilitates user
            interaction and feedback, embodying the Personal Responsibility
            concept.
          </li>
          <li>
            <strong>Sustainability Agent:</strong> Monitors and suggests
            improvements for environmental impact, guided by Regenerative
            Cultures principle.
          </li>
        </ul>
        <p>
          These agents collaborate using a decentralized decision-making
          process, reflecting the Interconnectedness principle.
        </p>
      </>
    ),
    interfaces: (
      <>
        <h2 className="text-2xl font-bold mb-4 text-blue-800">
          Intelligent Interfaces
        </h2>
        <p className="mb-4">
          Halbwild features adaptive, intelligent interfaces for various
          stakeholders:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>Community Dashboard:</strong> An intuitive, color-coded
            interface (Theory of Colors) that provides real-time energy usage
            and production data.
          </li>
          <li>
            <strong>Predictive Controls:</strong> AI-powered suggestions for
            optimal energy usage times and methods.
          </li>
          <li>
            <strong>Natural Language Interface:</strong> Allows users to
            interact with the system using everyday language, embodying the
            Solution Language principle.
          </li>
          <li>
            <strong>Gamified Engagement:</strong> Interactive elements that
            promote community participation and Inner Fulfillment.
          </li>
        </ul>
        <p>
          These interfaces adapt to user behavior and preferences, creating a
          personalized experience that encourages sustainable practices.
        </p>
      </>
    ),
    integration: (
      <>
        <h2 className="text-2xl font-bold mb-4 text-blue-800">
          Real-World System Integration
        </h2>
        <p className="mb-4">
          Halbwild integrates with real-world utility systems through:
        </p>
        <ul className="list-disc pl-6 space-y-2 mb-4">
          <li>
            <strong>IoT Sensor Network:</strong> Collects real-time data from
            various energy production and consumption points.
          </li>
          <li>
            <strong>Smart Grid Integration:</strong> Enables dynamic load
            balancing and energy trading, reflecting the Natural Economic Order
            principle.
          </li>
          <li>
            <strong>Renewable Energy Systems:</strong> Manages diverse energy
            sources (solar, wind, geothermal) to ensure system resilience
            (Diversity principle).
          </li>
          <li>
            <strong>Energy Storage Solutions:</strong> Optimizes energy storage
            and distribution, embodying the Complementarity principle.
          </li>
        </ul>
        <p>
          The system continuously learns and adapts to changing conditions,
          exemplifying the Morphic Resonance concept in its evolving efficiency.
        </p>
      </>
    ),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 via-green-100 to-blue-100 p-4 sm:p-8">
      <motion.h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 text-blue-800"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Halbwild: Advanced AI System Design
      </motion.h1>
      <div className="flex flex-wrap justify-center mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 m-2 rounded-full ${
              activeTab === tab.id
                ? "bg-blue-500 text-white"
                : "bg-white text-blue-500"
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <motion.div
        className="bg-white bg-opacity-80 rounded-lg shadow-lg p-6 mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {content[activeTab]}
      </motion.div>
      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Link href="/">
          <span className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition-colors inline-block">
            Back to Home
          </span>
        </Link>
      </motion.div>
    </div>
  );
};

export default AISystemDesign;
