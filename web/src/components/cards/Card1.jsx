import React, { useState } from "react";
import { FaBath, FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { MdStar } from "react-icons/md"

// LOCAL IMPORTS
import TextWithNumOfLines from "../common/TextWithNumOfLines";
import { Link } from "react-router-dom";

const Card1 = ({ item }) => {
  const [favorited, setFavorited] = useState(false);

  return (
    <div className="_card1">
      <Link to="/" className="left">
        <span className="rating">
          <MdStar />
          <span className="rating-value">{ item.rating}</span>
        </span>
        <img className="image" src={item.image} alt="display" />
      </Link>
      <div className="right">
        <TextWithNumOfLines className="name">
          {item.name} 
        </TextWithNumOfLines>
        <TextWithNumOfLines lines={1} className="location">
          {item.location}
        </TextWithNumOfLines>
        <div className="compartment">
          <span className="beds">
            <span className="_icon">
              <FaBed />
            </span>
            <span className="text">{item.beds} Beds</span>
          </span>
          <span className="bath">
            <span className="_icon">
              <FaBath />
            </span>
            <span className="text">{item.bath} Baths</span>
          </span>
          <span className="area">
            <span className="_icon">
              <BiArea />
            </span>
            <span className="text">{item.area}</span>
          </span>
        </div>
        <div className="footer">
          <span className="cost">
            &#8358;{parseInt(item.cost).toLocaleString()}
          </span>{" "}
          <span className="duration">&nbsp;/ {item.duration}</span>
          <span onClick={() => setFavorited(!favorited)} className="favorite">
            {favorited ? <HiHeart /> : <HiOutlineHeart />}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card1;
