import { useState } from "react";
import { loginUser } from "./utils/auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const res = loginUser(email, password);
    if (res.success) {
      navigate("/"); 
      window.location.reload()
    } else {
      setErr(res.message);
    }
  };

  return (
    <form onSubmit={handleLogin} className="flex flex-col gap-4">
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
      <button type="submit" className="bg-blue-500 py-2 rounded hover:bg-blue-600">
        Login
      </button>
    </form>
  );
}
