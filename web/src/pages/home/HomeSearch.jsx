import React, { useState } from "react";
import { IoSearch, IoLocationOutline, IoFilter } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";

// LOCAL IMPORTS
import { estateCategory, estateLocations } from "../../db.js";
import SelectOptions from "../../components/SelectOptions";
import AppButton from "../../components/AppButton.jsx";

const HomeSearch = () => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const [showCategory, setShowCategory] = useState(false);
  const [showLocation, setShowLocation] = useState(false);

  return (
    <div className="home-search">
      <div className="input-group">
        <IoSearch className="icon" />
        <input
          autoFocus
          name="search"
          type="search"
          className="input-field"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Keywords..."
        />
      </div>
      <div className="input-group">
        <SelectOptions
          options={estateCategory}
          setOpen={setShowCategory}
          selected={selectedCategory}
          setSelected={setSelectedCategory}
          className={
            showCategory ? "categoryOptions showCategory" : "categoryOptions"
          }
        />
        <BiCategory className="icon" />
        <input
          // disabled
          type="text"
          name="category"
          className="input-field"
          value={selectedCategory}
          placeholder="Select Category"
          onChange={() => console.log(selectedCategory)}
          onClick={() => setShowCategory(!showCategory)}
        />
      </div>
      <div className="input-group">
        <SelectOptions
          options={estateLocations}
          setOpen={setShowLocation}
          selected={selectedLocation}
          setSelected={setSelectedLocation}
          className={
            showLocation ? "categoryOptions showCategory" : "categoryOptions"
          }
        />
        <IoLocationOutline className="icon" />
        <input
          type="text"
          name="location"
          placeholder="Location"
          className="input-field"
          value={selectedLocation}
          onChange={() => console.log(selectedLocation)}
          onClick={() => setShowLocation(!showLocation)}
        />
      </div>
      <div className="action-button">
        <AppButton alt style={{marginRight: 10}} className="button">
          <IoFilter className="icon" size={24}/>
        </AppButton>
        <AppButton className="button">Search</AppButton>
      </div>
    </div>
  );
};

export default HomeSearch;
