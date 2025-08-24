import React, { useState } from "react";
import { motion } from "framer-motion";
import { Home, Info, Briefcase, Phone, Menu, X, Book } from "lucide-react";

export default function Navbar() {
  const items = [
    { name: "Home", url: "home", icon: Home },
    { name: "Courses", url: "portfolio", icon: Book },
    { name: "Services", url: "services", icon: Briefcase },
    { name: "About", url: "about", icon: Info },
    { name: "Contact", url: "contact", icon: Phone },
  ];

  const [activeTab, setActiveTab] = useState(items[0].name);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex justify-between items-center w-[90%] md:w-auto">
        <div className="hidden md:flex items-center gap-3 bg-white/70 dark:bg-gray-800/70 border border-gray-300 dark:border-gray-600 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
          {items.map((item) => {
            const isActive = activeTab === item.name;
            return (
              <button
                key={item.name}
                onClick={() => {
                  setActiveTab(item.name);
                  handleScroll(item.url);
                }}
                className={`relative cursor-pointer text-sm font-semibold px-4 md:px-6 py-2 rounded-full flex items-center justify-center transition-colors
                  ${isActive ? "bg-gray-200 dark:bg-gray-700 text-purple-600"
                    : "text-gray-600 dark:text-gray-300 hover:text-purple-500"
                  }`}
              >
                {item.name}
                {isActive && (
                  <motion.div
                    layoutId="lamp"
                    className="absolute inset-0 w-full bg-purple-500/10 rounded-full -z-10"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Mobile */}
        <button
          className="md:hidden fixed top-0 right-0 text-gray-800 dark:text-white p-2 bg-white/70 dark:bg-gray-800/70 rounded-lg shadow-lg z-50"
          onClick={toggleMobileMenu}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </header>

      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/70 backdrop-blur-md flex flex-col items-center justify-center gap-6 md:hidden z-40">
          {items.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                setActiveTab(item.name);
                handleScroll(item.url);
              }}
              className="text-white text-xl flex gap-2 items-center hover:text-purple-300 transition-colors"
            >
              {item.name}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
