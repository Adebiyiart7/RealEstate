import { IconButton } from "@mui/material";
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Slider = ({ Items, label, numberVisible }) => {
  const sliderRef = useRef();
  const slideRef = useRef();
  /**
   *      console.log(window.innerWidthsliderRef.current.lastChild.getBoundingClientRect().x)
      console.log(sliderRef.current.scrollWidth)
   */
  const handleClick = (goBack) => {
    let moveBy =
      window.innerWidth < 500
        ? sliderRef.current.scrollWidth / Items.length
        : (sliderRef.current.scrollWidth / Items.length) * 2;
    
    sliderRef.current.scrollBy({
      left: goBack ? -moveBy : moveBy,
      behavior: "smooth"
    });
  };

  return (
    <div className="_sliderContainer">
      <IconButton className="icon" onClick={() => handleClick(true)}>
        <FaChevronLeft size={24} />
      </IconButton>
      <div className="_slider" ref={sliderRef}>
        {Items.map((Slide, index) => (
          <div
            id={`${label}-${index}`}
            key={index}
            className="slide"
            ref={slideRef}
            // style={{ width: window.innerWidth / numberVisible }}
          >
            {Slide}
          </div>
        ))}
      </div>
      <IconButton className="icon right" onClick={() => handleClick(false)}>
        <FaChevronRight size={24} />
      </IconButton>
    </div>
  );
};

export default Slider;
