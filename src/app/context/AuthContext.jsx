"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  getIdToken,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/firebase";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [userUid, setUserUid] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
      setUserUid(user?.uid || null);
    });
    return () => unsubscribe();
  }, []);

  const signUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("signUp successful:", userCredential);
      return userCredential;
    } catch (error) {
      console.error("Error signing up:", error);
      throw error;
    }
  };

  const login = async (email, password) => {
    try {
      const loginUser = await signInWithEmailAndPassword(auth, email, password);
      setUser(loginUser.user);
      localStorage.setItem("uid", JSON.stringify(loginUser.user.uid));
      setLoading(false);
      return loginUser.user;
    } catch (error) {
      console.log("login failed", error);
    }
  };

  const logout = async () => {
    await auth.signOut();
    setUser(null);
  };
  const value = {
    user,
    setUser,
    signUp,
    userUid,
    login,
    logout,
    loading,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// export const useAuth = () => {
//   useContext(AuthContext);
// };
