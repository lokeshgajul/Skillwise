import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center  py-7 px-4">
      <span className="text-lg font-serif font-semibold tracking-wide">
        SkillWise{" "}
      </span>
      <ul className="flex space-x-4 flex-row">
        <li className="hover:text-blue-600">
          <Link href="/signup">Sign Up</Link>
        </li>
        <li className="hover:text-blue-600">
          <Link href="/login">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
