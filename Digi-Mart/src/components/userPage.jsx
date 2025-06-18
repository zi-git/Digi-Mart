import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { TbPhotoEdit } from "react-icons/tb";

const UserPage = () => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState("");
  const [profileImage, setProfileImage] = useState("");

  // ✅ Load user from cookie on component mount
  useEffect(() => {
    const cookie = Cookies.get("auth");
    if (cookie) {
      try {
        const parsed = JSON.parse(cookie);
        setUser(parsed);
        setNewName(parsed.name || "");
        setProfileImage(parsed.profileImage || "");
      } catch (e) {
        console.error("Invalid cookie:", e);
        setUser(null);
      }
    }
  }, []);

  const handleSave = () => {
    const updatedUser = { ...user, name: newName, profileImage };
    Cookies.set("auth", JSON.stringify(updatedUser), { expires: 365 });
    setUser(updatedUser);
    setEditing(false);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result;
      setProfileImage(base64);
    };
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    // Save image when it changes (only while editing)
    if (user && editing) {
      const updatedUser = { ...user, profileImage };
      Cookies.set("auth", JSON.stringify(updatedUser), { expires: 365 });
    }
  }, [profileImage]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-xl text-red-500 font-semibold">User not logged in</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <div className="bg-white w-full max-w-md rounded-3xl shadow-xl px-8 py-10 text-center">
        {/* Avatar */}
        <div className="relative mx-auto mb-6 w-32 h-32 rounded-full border-4 border-blue-500 shadow-sm overflow-hidden">
          <img
            src={
              profileImage ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt="Profile"
            className="w-full h-full object-cover"
          />
          {editing && (
            <label className="absolute bottom-3 right-2.5 bg-white text-blue-600 text-[20px] px-2 py-1 rounded-full cursor-pointer shadow-lg hover:bg-blue-700 transition-all z-10">
              <TbPhotoEdit />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          )}
        </div>

        {/* Header */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Your Profile</h1>
        <p className="text-sm text-gray-500 mb-6">Manage your personal details</p>

        {/* Editable Name */}
        <div className="text-left mb-5">
          <label className="block text-sm text-gray-600 mb-1">Name</label>
          {editing ? (
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-lg font-medium text-gray-800">{user.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="text-left mb-8">
          <label className="block text-sm text-gray-600 mb-1">Email</label>
          <p className="text-lg font-medium text-gray-800">{user.email}</p>
        </div>

        {/* Action Buttons */}
        {editing ? (
          <div className="flex justify-center gap-4">
            <button
              onClick={handleSave}
              className="bg-blue-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-blue-700 transition"
            >
              Save
            </button>
            <button
              onClick={() => {
                setEditing(false);
                setNewName(user.name);
                setProfileImage(user.profileImage || "");
              }}
              className="bg-gray-300 text-gray-800 px-5 py-2 rounded-full font-semibold hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setEditing(true)}
            className="bg-black text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-900 transition"
          >
            Edit Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default UserPage;
