import { Bell, Home, Package, TrendingUp, MessageCircle } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    setIsLoggedIn(!!userId);
  }, []);

  return (
    <div className="w-full bg-emerald-600 px-8 py-4 shadow-lg">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link to={"/"}>
          <div className="text-white text-2xl font-bold hover:text-emerald-100 transition-colors">
            FoTo
          </div>
        </Link>

        {/* Navigation Items */}
        <div className="flex items-center space-x-8">
          {/* Home Icon */}
          <div className="relative group">
            <Link
              to={"/"}
              className="text-emerald-50 hover:text-white transition-colors flex items-center"
            >
              <Home className="mr-1" />
              Home
            </Link>
          </div>
          <div className="relative group">
            <Link
              to={"/plans"}
              className="text-emerald-50 hover:text-white transition-colors flex items-center"
            >
              <Package className="mr-1" />
              Plans
            </Link>
          </div>
          <div className="relative group">
            <Link
              to={"/progress"}
              className="text-emerald-50 hover:text-white transition-colors flex items-center"
            >
              <TrendingUp className="mr-1" />
              Progresses
            </Link>
          </div>
          {isLoggedIn && (
            <div className="relative group">
              <Link
                to={"/chat"}
                className="text-emerald-50 hover:text-white transition-colors flex items-center"
              >
                <MessageCircle className="mr-1" />
                Chat
              </Link>
            </div>
          )}
          <div className="relative group">
            <Link
              to={"/notifications"}
              className="text-emerald-50 hover:text-white transition-colors flex items-center"
            >
              <Bell className="hover:scale-110 transition-transform" />
            </Link>
          </div>
          <a
            href={isLoggedIn ? "/profile" : "/login"}
            className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-medium px-6 py-2 rounded-lg transition-colors"
          >
            {isLoggedIn ? "Profile" : "Login"}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;