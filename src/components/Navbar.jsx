import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Home, Info, Briefcase, Phone, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const items = [
    { name: "Home", url: "", icon: Home },
    { name: "Courses", url: "#courses", icon: Info },
    { name: "Services", url: "#services", icon: Briefcase },
    { name: "Contact", url: "#contact", icon: Phone },
    { name: "About", url: "#about", icon: Info },
  ];

  const [activeTab, setActiveTab] = useState(items[0].name);
  const [isDark, setIsDark] = useState(false);

  // Theme toggle
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <>
      {/* ✅ Fixed Navbar directly on top of Hero */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-4">
        <div
          className="flex items-center gap-3 
          bg-white/70 dark:bg-gray-800/70 
          border border-gray-300 dark:border-gray-600 
          backdrop-blur-lg py-1 px-1 rounded-full shadow-lg 
          transition-colors duration-300"
        >
          {items.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.name;

            return (
              <a
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={`relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors ${
                  isActive
                    ? "bg-gray-200 dark:bg-gray-700 text-purple-600"
                    : "text-gray-600 dark:text-gray-300 hover:text-purple-500"
                }`}
              >
                {/* Show text on desktop, icons on mobile */}
                <span className="hidden md:inline">{item.name}</span>
                <span className="md:hidden">
                  <Icon size={18} strokeWidth={2.5} />
                </span>

                {/* Active tab glowing effect */}
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-purple-500/10 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  >
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-purple-500 rounded-t-full">
                      <div className="absolute w-12 h-6 bg-purple-400/20 rounded-full blur-md -top-2 -left-2" />
                      <div className="absolute w-8 h-6 bg-purple-400/20 rounded-full blur-md -top-1" />
                      <div className="absolute w-4 h-4 bg-purple-400/20 rounded-full blur-sm top-0 left-2" />
                    </div>
                  </motion.div>
                )}
              </a>
            );
          })}

          {/* Theme Toggle Button */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-purple-200 dark:hover:bg-purple-700 transition"
          >
            {isDark ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </div>
      </div>
    </>
  );
}
