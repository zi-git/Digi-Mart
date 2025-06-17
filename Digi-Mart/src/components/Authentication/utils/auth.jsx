import Cookies from "js-cookie";

// Save user credentials during signup
export const signupUser = (email, password, name) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const existing = users.find((u) => u.email === email);
  if (existing) return { success: false, message: "User already exists" };

  users.push({ email, password, name });
  localStorage.setItem("users", JSON.stringify(users));
  return { success: true };
};



// Check credentials during login
export const loginUser = (email, password) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    const userData = { name: user.name, email: user.email };
    Cookies.set("auth", JSON.stringify(userData), { expires: 360 }); // ✅ Correct format
    return { success: true };
  }
  
  
  return { success: false, message: "Invalid credentials" };
};



// Get logged-in user
export const getCurrentUser = () => {
  const cookie = Cookies.get("auth");
  if (!cookie) return null;

  try {
    return JSON.parse(cookie); // { name, email }
  } catch {
    return null;
  }
};

export const logoutUser = () => {
  Cookies.remove("auth");
  
};

