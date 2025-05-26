// src/app/layout.js
import "@/app/globals.css";
import { AuthProvider } from "@/app/context/AuthContext";
import Navbar from "./components/navbar/Navbar";

export const metadata = {
  title: "My App",
  description: "My app description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-blue-100 to-cyan-100 ">
        <Navbar />
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
