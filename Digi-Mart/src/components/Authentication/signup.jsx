import { useState } from "react";
import { signupUser } from "./utils/auth";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"; // Don't forget this import!

export default function Signup() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("All fields required");
      return;
    }

    const res = signupUser(email, password, name); // ✅ Store in localStorage

    if (!res.success) {
      setErr(res.message);
      return;
    }

    const userData = { name, email };
    Cookies.set("auth", JSON.stringify(userData), { expires: 7 }); // ✅ Set cookie

    navigate("/auth/login");
  };

  return (
    <form onSubmit={handleSignup} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="p-2 rounded bg-gray-700 text-white"
      />
      <input
        className="p-2 rounded bg-gray-700 text-white"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        className="p-2 rounded bg-gray-700 text-white"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {err && <p className="text-red-500">{err}</p>}
      <button
        type="submit"
        className="bg-green-500 py-2 rounded hover:bg-green-600"
      >
        Sign Up
      </button>
    </form>
  );
}
