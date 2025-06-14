import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--nav)] text-white px-6">
      <AlertTriangle className="w-20 h-20 text-red-500 mb-6" />
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-300 mb-6 text-center max-w-md">
        Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
      </p>
      <Link
        to="/"
        className="bg-white text-black font-semibold px-6 py-2 rounded-full hover:bg-gray-200 transition"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFound;
