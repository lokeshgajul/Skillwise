"use client";
import { AuthContext } from "@/app/context/AuthContext";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { User } from "@deemlol/next-icons";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);
  const [uid, setUid] = useState(null);
  const getUid = async () => {
    const uid = await localStorage.getItem("uid");
    if (uid) {
      setUid(uid);
    } else {
      setUid(null);
      logout();
    }
  };

  useEffect(() => {
    getUid();
  }, []);

  return (
    <div className="flex justify-between flex-row items-center px-7 py-3 ">
      <span className="text-lg font-serif font-semibold tracking-wide">
        SkillWise{" "}
      </span>

      {uid ? (
        <ul className="flex mr-2 flex-row">
          <li
            className="hover:text-blue-600 font-semibold  p-2 rounded-full cursor-pointer "
            // onClick={() => logout()}
          >
            <div className="flex w-full ">
              <div className="flex gap-8">
                <Popover>
                  <PopoverButton className="block text-sm/6 font-semibold bg-[#e1f6f7] shadow-lg rounded-full p-3  focus:outline-none data-active:text-white data-focus:outline data-focus:outline-white data-hover:text-white">
                    {/* <Link href="/login"> */}
                    <User size={24} color="#000" />
                    {/* </Link> */}
                  </PopoverButton>
                  <PopoverPanel
                    transition
                    anchor="bottom"
                    className="absolute right-0 mt-1 translate-x-[-10px] w-fit max-w-sm bg-[#fff] rounded-xl shadow-lg text-sm/6 transition duration-200 ease-in-out [--anchor-gap:--spacing(5)] data-closed:-translate-y-1 data-closed:opacity-0"
                  >
                    <div className="lg:w-[100px] lg:p-3 ">
                      <p className="font-semibold text-black cursor-pointer tracking-wider">
                        <Link href="/login" onClick={logout}>
                          Logout
                        </Link>
                      </p>

                      <p className="font-semibold text-black mt-2 cursor-pointer tracking-wider">
                        Theme
                      </p>
                    </div>
                  </PopoverPanel>
                </Popover>
              </div>
            </div>
          </li>
        </ul>
      ) : (
        <ul className="flex space-x-4 flex-row">
          <li className="hover:text-blue-600">
            <Link href="/signup">Sign Up</Link>
          </li>
          <li className="hover:text-blue-600 ">
            <Link href="/login">Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
