import React from "react";
const Navbar = () => {
  return (
    <div className="bg-gray-800">
      <div className="h-16 px-4 flex items-center">
        <a
          href="/employeeList"
          className="text-white font-semibold text-lg no-underline"
        >
          Employee Management System
        </a>
      </div>
    </div>
  );
};

export default Navbar;
