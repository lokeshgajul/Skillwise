"use client";
import { auth } from "@/firebase";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import RoadmapForm from "../components/RoadmapForm/page";

const Home = () => {
  //   console.log("hey i am lokesh");
  const router = useRouter();

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

  const handleLougout = async () => {
    const logout = await auth.signOut();
    localStorage.removeItem("uid");
    router.push("/login");
  };
  return (
    <div>
      <RoadmapForm />
    </div>
  );
};

export default Home;
