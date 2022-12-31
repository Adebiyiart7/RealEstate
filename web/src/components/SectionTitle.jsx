import React from "react";

const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="section-title">
      <h3 className="title">{title}</h3>
      <p className="sub-title">{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
