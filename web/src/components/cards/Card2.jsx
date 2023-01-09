import React, { useState } from "react";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { MdStar } from "react-icons/md";

// LOCAL IMPORTS
import TextWithNumOfLines from "../common/TextWithNumOfLines";
import { Link } from "react-router-dom";

const Card2 = ({ item }) => {
  const [favorited, setFavorited] = useState(false);

  return (
    <div className="_card2" style={{ background: `url(${item.image})` }}>
      <span className="rating">
        <MdStar />
        <span className="rating-value">{item.rating}</span>
      </span>
      <span onClick={() => setFavorited(!favorited)} className="favorite">
        {favorited ? <HiHeart className="heart" /> : <HiOutlineHeart />}
      </span>
      <div className="content">
        <TextWithNumOfLines lines={1} className="name">
          {item.name}
        </TextWithNumOfLines>
        <TextWithNumOfLines lines={1} className="location">
          {item.location}
        </TextWithNumOfLines>
        <div className="footer">
          <span className="cost">
            &#8358;{parseInt(item.cost).toLocaleString()}
          </span>{" "}
          <span className="duration">&nbsp;/ {item.duration}</span>
        </div>
      </div>
    </div>
  );
};

export default Card2;
