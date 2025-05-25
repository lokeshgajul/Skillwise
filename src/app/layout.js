// src/app/layout.js
import "@/app/globals.css";
import { AuthProvider } from "@/app/context/AuthContext";

export const metadata = {
  title: "My App",
  description: "My app description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
