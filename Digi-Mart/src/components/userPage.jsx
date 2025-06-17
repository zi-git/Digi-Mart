import React from "react";
import Cookies from "js-cookie";

const UserPage = () => {
  // Directly fetch and parse cookie
  const cookie = Cookies.get("auth");
  let userInfo = null;

  try {
    if (cookie) {
      userInfo = JSON.parse(cookie); // { name, email }
    }
  } catch (err) {
    userInfo = null;
  }

  if (!userInfo) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500 font-semibold">User not logged in</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-4">👤 User Info</h1>
      <p className="text-lg">
        <span className="font-semibold">Name:</span> {userInfo.name}
      </p>
      <p className="text-lg">
        <span className="font-semibold">Email:</span> {userInfo.email}
      </p>
    </div>
  );
};

export default UserPage;
