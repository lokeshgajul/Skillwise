"use client";
import { AuthContext } from "@/app/context/AuthContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";

const page = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const loggedInUser = await login(email, password);
      if (loggedInUser) {
        router.push("/");
      } else {
        setError("Login failed. Please check your credentials.");
        setTimeout(() => {
          setError("");
        }, 2000);
      }
      console.log(loggedInUser);
    } catch (error) {
      console.log(error);
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-bold text-center">Log In</h2>

        <input
          type="email"
          className="w-full px-4 py-2 border rounded"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="w-full px-4 py-2 border rounded"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Log In
        </button>
        {error && <p className="text-red-500 text-sm">{error}</p>}

        <div className="flex justify-end items-end gap-2">
          <span className="text-blue-600">Create new account?</span>
          <span>
            <Link href="/signup">Sign up</Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default page;
