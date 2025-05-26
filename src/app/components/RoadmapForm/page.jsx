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
  return (
    <div>
      <h1 className="text-[40px] text-center mt-5 p-2 font-semibold tracking-wide text-[#227CE3]">
        AI Roadmap Generator
      </h1>

      <div className="max-w-screen-lg mx-auto p-4">
        <p className="text-center text-[22px]">
          Want to make project planning easier? Our AI Roadmap Generator helps
          you create a custom roadmap in just a few steps. Simply enter your
          project details, and let AI guide you toward your goals.
        </p>
        <div className="flex justify-center items-center flex-row p-3">
          <div className="border-2 border-gray-600 p-3 rounded-full shadow-md flex items-center">
            <input
              type="text"
              name="text"
              id="text"
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Generate your roadmap with AI..."
              className="bg-gradient-to-r px-2 from-blue-100 to-cyan-100 rounded-md w-[400px] mr-2 focus:outline-none placeholder:text-gray-600"
            />
            <button
              onClick={generateRoadmap}
              className="bg-[#84adf0] py-2.5 px-3 rounded-full text-[15px] font-medium"
            >
              {loading ? "Generating..." : "Generate Roadmap with AI"}
            </button>
          </div>
        </div>
      </div>
      {roadmap && (
        <div className="mt-6 p-4 rounded-md whitespace-pre-line bg-gray-100 text-gray-900">
          {roadmap}
        </div>
      )}
    </div>
  );
};

export default RoadmapForm;
