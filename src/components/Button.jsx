import React from "react";

const Button = ({ styles }) => (
  <a href="#contact">
    <button
      type="button"
      className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-orange-gradient rounded-[10px] outline-none ${styles}`}
    >
      Get Started
    </button>
  </a>
);

export default Button;
