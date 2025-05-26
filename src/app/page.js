"use client";

import { useEffect, useState } from "react";
import SignupForm from "./(auth)/signup/page";
import Login from "./(auth)/login/page";
import HomePage from "./home/page";
import ProtectedRoute from "./components/protectedroute/page";

export default function Home() {
  return (
    <div className=" p-6 rounded-xl">
      <ProtectedRoute />
    </div>
  );
}
