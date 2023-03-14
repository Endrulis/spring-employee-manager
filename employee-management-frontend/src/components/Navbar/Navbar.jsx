import React from "react";
const Navbar = () => {
  return (
    <div class="bg-gray-800">
      <div class="h-16 px-4 flex items-center">
        <a
          href="/employeeList"
          class="text-white font-semibold text-lg no-underline"
        >
          Employee Management System
        </a>
      </div>
    </div>
  );
};

export default Navbar;
