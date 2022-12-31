import React from "react";

const AppButton = ({ children, alt, onClick, style, className }) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className={`_button _app-button ${alt ? "_alt-button" : ""} ${className}`}
    >
      {children}
    </button>
  );
};

export default AppButton;
