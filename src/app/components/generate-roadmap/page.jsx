"use client";

import React, { useState } from "react";

const RoadmapForm = () => {
  const [loading, setLoading] = useState(false);
  const [roadmap, setRoadmap] = useState("");
  const [goal, setGoal] = useState("");

  const generateRoadmap = async (e) => {
    try {
      setLoading(true);

      const response = await fetch("/api/roadmap", {
        method: "POST",
        body: JSON.stringify({ goal }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      setRoadmap(data.roadmap);
      setLoading(false);
      setGoal("");
    } catch (error) {
      console.log(error);
    }
  };

  const prompts = [
    "Frontend Developer",
    "Backend Engineer",
    "Full Stack Developer",
    "AI/ML Engineer",
    "DevOps Roadmap",
    "Web3 Developer",
    "Data Scientist",
  ];

  return (
    <div className="pb-4 p-8">
      <h1 className="text-[40px] text-center  p-2 font-semibold tracking-wide text-[#227CE3]">
        AI Roadmap Generator
      </h1>

      <div className="max-w-screen-lg mx-auto p-4">
        <p className="text-center text-[20px] tracking-wide italic text-gray-800">
          Want to make project planning easier? Our AI Roadmap Generator helps
          you create a custom roadmap in just a few steps. Simply enter your
          project details, and let AI guide you toward your goals.
        </p>
        <div className="flex justify-center items-center flex-row m-8">
          <div className="border-2 border-gray-600 p-3 rounded-full shadow-md flex items-center">
            <input
              type="text"
              name="text"
              id="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Generate your roadmap with AI..."
              className="px-2 bg-transparent rounded-md max-sm:w-[200px] md:w-[300px] lg:w-[400px] mr-2 focus:outline-none placeholder:text-gray-600"
            />
            <button
              disabled={!goal.trim()}
              onClick={generateRoadmap}
              className="bg-[#4298fa] py-2.5 px-5 rounded-full text-[15px] font-medium hover:text-gray-900 disabled:text-black"
            >
              {loading ? "Generating..." : "Generate"}
            </button>
          </div>
        </div>
      </div>
      {roadmap && (
        <div className="mt-6 p-4 rounded-md whitespace-pre-line bg-gray-100 text-gray-900">
          <div>{roadmap}</div>
          <div>
            <button className="text-right text-blue-800 hover:underline">
              start learning
            </button>
          </div>
        </div>
      )}

      <div className="overflow-hidden whitespace-nowrap mx-2 mt-6">
        <div className="animate-marquee inline-block">
          {prompts.map((item, index) => (
            <span key={index} className="mx-4 text-blue-700 font-medium">
              🚀 {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoadmapForm;
