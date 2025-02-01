import React, { useState } from "react";

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div
      className={`w-${isCollapsed ? "16" : "64"} bg-[#1E2337] h-screen p-6 flex flex-col transition-all duration-300`}
    >
      <div className="mb-8 flex items-center justify-between">
        <h1
          id="sitename"
          className={`text-[#8B96B9] text-xl font-extrabold tracking-widest ${isCollapsed ? "hidden" : ""}`}
        >
          <span>S</span>
          <span>o</span>
          <span>u</span>
          <span>n</span>
          <span>d </span>
          <span>S</span>
          <span>a</span>
          <span>g</span>
          <span>e</span>
        </h1>

        <button
          className="text-[#8B96B9] flex items-center space-x-2"
          onClick={toggleSidebar}
        >
          {/* Hamburger Icon */}
          <i className="fa-solid fa-bars text-2xl cursor-pointer"></i>
        </button>
      </div>

      <div className={`mb-8 mt-5`}>
        <h2 id="subheading" className={`text-[#8B96B9] mb-6 font-bold tracking-wider ${isCollapsed ? "hidden" : ""}`}>
          Browse
        </h2>
        <ul className="space-y-6">
          <li className="flex items-center text-[#8B96B9] hover:text-cyan-500 cursor-pointer">
            <i
              className={`fa-solid fa-magnifying-glass mr-3 ${isCollapsed ? "text-xl" : "text-xl"}`}
            ></i>
            <span id="option" className={`${isCollapsed ? "hidden" : ""}`}>Discover</span>
          </li>
          <li className="flex items-center text-[#8B96B9] hover:text-cyan-500 cursor-pointer">
            <i
              className={`fa-solid fa-chart-line mr-3 ${isCollapsed ? "text-xl" : "text-xl"}`}
            ></i>
            <span id="option" className={`${isCollapsed ? "hidden" : ""}`}>Top Charts</span>
          </li>
          <li className="flex items-center text-[#8B96B9] hover:text-cyan-500 cursor-pointer">
            <i
              className={`fa-solid fa-microphone mr-3 ${isCollapsed ? "text-xl" : "text-xl"}`}
            ></i>
            <span id="option" className={`${isCollapsed ? "hidden" : ""}`}>Artist</span>
          </li>
        </ul>
      </div>

      <div className={`mb-8`}>
        <h2 id="subheading" className={`text-[#8B96B9] mb-6 font-bold tracking-wider ${isCollapsed ? "hidden" : ""}`}>
          Playlist
        </h2>
        <ul className="space-y-6">
          <li className="flex items-center text-[#8B96B9] hover:text-cyan-500 cursor-pointer">
            <i
              className={`fa-solid fa-heart mr-3 ${isCollapsed ? "text-xl" : "text-xl"}`}
            ></i>
            <span id="option" className={`${isCollapsed ? "hidden" : ""}`}>Favourite</span>
          </li>
        </ul>
      </div>

      <div className={`mt-auto`}>
        <div className="flex items-center p-3 bg-[#252B43] rounded-lg">
          <i
            className={`fa-solid fa-user text-gray-400 mr-3 cursor-pointer hover:text-cyan-500 ${isCollapsed ? "text-xl" : "text-xl"}`}
          ></i>
          <div
            id="sitename"
            className={`text-[#8B96B9] cursor-pointer font-medium ${isCollapsed ? "hidden" : ""}`}
          >
            Back at it, legend!
          </div>
        </div>
      </div>
    </div>
  );
}
