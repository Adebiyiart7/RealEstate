import React from "react";

const SelectOptions = ({ setOpen, setSelected, options, className }) => {
  return (
    <div className={`_selectOptions ${className}`}>
      {options.map((item) => (
        <div
          key={item.name}
          className="item"
          onClick={() => {
            setSelected(item.name);
            setOpen(false);
          }}
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default SelectOptions;
