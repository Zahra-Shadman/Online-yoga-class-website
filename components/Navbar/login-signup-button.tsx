"use client";

import { useState } from "react";
import { LiaDumbbellSolid } from "react-icons/lia";
const LoginButton: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <header className="w-full px-4 py-2 shadow-md bg-white">
        <div className="container mx-auto flex items-center justify-between ">
          
          {/* LOGO - Left */}
          <div className="text-xl font-mono font-bold flex items-center gap-1">
            happy<span className="text-amber-700 flex items-center"> fit <LiaDumbbellSolid /> </span>
          </div>

          {/* NAVBAR - Center */}
          <nav className="flex gap-6 text-gray-700 font-medium">
            <a href="/" className="hover:text-amber-600 duration-150">Home</a>
            <a href="/About" className="hover:text-amber-600 duration-150">About</a>
            <a href="/services" className="hover:text-amber-600 duration-150">Services</a>
            <a href="/Contact" className="hover:text-amber-600 duration-150">Contact</a>
          </nav>

          {/* LOGIN BUTTON - Right */}
          <button
            onClick={() => setOpen(true)}
            className="bg-amber-400 cursor-pointer text-white hover:bg-amber-500 duration-200 hover:text-amber-900 px-4 py-2 rounded-md"
          >
            sign up / login
          </button>
        </div>
      
      </header>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          {/* Modal Card */}
          <div className="relative bg-white p-6 rounded-xl shadow-xl w-80 z-50">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-2 right-2 text-xl cursor-pointer"
            >
              ❌
            </button>

            <h2 className="text-lg font-semibold mb-4 text-center">
              Login or Sign up
            </h2>

            <label className="text-sm font-medium">Number</label>
            <input
              type="text"
              placeholder="09...."
              className="w-full border p-2 rounded-md mt-1 mb-4"
            />

            <button
              className="w-full cursor-pointer bg-amber-400 hover:bg-amber-500 text-white py-2 rounded-lg duration-200"
            >
              Send Code
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginButton;
