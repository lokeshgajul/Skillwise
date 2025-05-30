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
      <body className="gradient-bg">
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
