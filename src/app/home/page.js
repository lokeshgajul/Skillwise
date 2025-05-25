"use client";
import React from "react";

const Home = () => {
  //   console.log("hey i am lokesh");

  const handleClick = async () => {
    const data = {
      name: "lokesh",
      age: 19,
    };
    const a = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const resp = await a.json();
    console.log(resp);
  };

  return (
    <div>
      <h1 className="text-xl">page based routing in next.js</h1>
      <ul>
        <li>File based routing </li>
        <li>router from next/navigation </li>
        <li>Optimized rendering </li>
      </ul>
      <button onClick={handleClick}>click me</button>
    </div>
  );
};

export default Home;
