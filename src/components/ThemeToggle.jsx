import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="
        fixed z-50 rounded-full border border-gray-300 dark:border-gray-700 
        bg-white dark:bg-gray-900 shadow-md transition-colors 
        hover:bg-gray-100 dark:hover:bg-gray-800

        top-4 right-20 md:right-8 left-auto translate-x-0 
        w-11 h-11 flex items-center justify-center
      "
    >
      {theme === "light" ? (
        <Moon size={20} className="text-gray-700 dark:text-gray-200" />
      ) : (
        <Sun size={20} className="text-yellow-500" />
      )}
    </button>
  );
}
