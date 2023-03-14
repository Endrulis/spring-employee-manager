import React from "react";
const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#1f2937" }}>
      <div
        style={{
          height: "4rem",
          paddingLeft: "2rem",
          paddingRight: "2rem",
          display: "flex",
          alignItems: "center",
        }}
      >
        <a
          href="/employeeList"
          style={{
            color: "#fff",
            fontWeight: "700",
            fontSize: "1.125rem",
            lineHeight: "1.75rem",
            textDecoration: "none",
          }}
        >
          Employee Management System
        </a>
      </div>
    </div>
  );
};

export default Navbar;
