// src/pages/AuthPage.jsx
import { Outlet, NavLink } from "react-router-dom";

export default function AuthPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to DigiMart</h1>
      <div className="flex gap-6 mb-6">
        <NavLink to="/auth/login" className="text-blue-400 hover:underline">
          Login
        </NavLink>
        <NavLink to="/auth/signup" className="text-blue-400 hover:underline">
          Sign Up
        </NavLink>
      </div>
      <div className="w-full max-w-sm bg-gray-800 p-6 rounded shadow">
        <Outlet />
      </div>
    </div>
  );
}
