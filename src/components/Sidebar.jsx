import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, Menu, Settings } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/adminDashboard" },
    { name: "Products", path: "/products" },
    { name: "Orders", path: "/orders" },
    { name: "Users", path: "/users" },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Hamburger (Mobile only) */}
      {isOpen == false ? <button
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-white shadow rounded-full"
        onClick={() => setIsOpen(true)}
      >
        <Menu className="w-6 h-6" />
      </button> : "" }
     

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-white shadow transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:relative`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b">
          <span className="text-xl font-bold">Admin Panel</span>
          <button className="md:hidden" onClick={() => setIsOpen(false)}>
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Main Navigation - will scroll if content overflows */}
        <div className="flex-1 overflow-y-auto">
          <ul className="p-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center px-4 py-2 rounded hover:bg-gray-100 ${
                    isActive(item.path)
                      ? "bg-blue-100 text-blue-700 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Settings - fixed at bottom */}
        <div className="mt-auto border-t p-4">
          <Link
            to="/settings"
            onClick={() => setIsOpen(false)}
            className={`flex items-center px-4 py-2 rounded hover:bg-gray-100 ${
              isActive("/settings")
                ? "bg-blue-100 text-blue-700 font-medium"
                : "text-gray-700"
            }`}
          >
            <Settings className="w-5 h-5 mr-2" />
            Settings
          </Link>
        </div>
      </div>

      {/* Backdrop (Mobile only) */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
        ></div>
      )}
    </>
  );
}