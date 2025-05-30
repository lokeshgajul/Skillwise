"use client";
import Home from "@/app/home/page";
import Login from "@/app/(auth)/login/page";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";
import { AuthContext } from "@/app/context/AuthContext";

const ProtectedRoute = () => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <div>{user ? <Home /> : <Login />}</div>;
};

export default ProtectedRoute;
