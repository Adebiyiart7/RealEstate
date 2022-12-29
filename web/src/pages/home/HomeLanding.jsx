import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IconButton } from "@mui/material";
import { MdMenu } from "react-icons/md";
import Backdrop from "../../components/Backdrop";

// LOCAL IMPORTS
// import logo from "../../assets/images/logo-sm.png";

const HomeLanding = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <section className="home-landing">
      <Backdrop open={showNav} showProgress={false} zIndex={1235} />
      <nav className="nav-bar">
        <IconButton
          className="open-button"
          onClick={() => setShowNav(!showNav)}
        >
          <MdMenu />
        </IconButton>
        <a className="logo" href="/">
          RealEstate
          {/* <img src={logo} alt="logo" /> */}
        </a>

        <div className={!showNav ? "right" : "right mobile-right"}>
          <IconButton
            onClick={() => setShowNav(!showNav)}
            className="close-button"
          >
            <FaTimes />
          </IconButton>
          <ul className="nav-items">
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/">
              <li>Listings</li>
            </a>
            <a href="/">
              <li>Explore</li>
            </a>
            <a href="/">
              <li>Favorites</li>
            </a>
            <a href="/">
              <li>Messages</li>
            </a>
          </ul>

          <ul className="auths">
            {/* <a href="/">
              <li>Profile</li>
                </a> */}
            <a className="alt-button auth" href="/">
              <li>Login</li>
            </a>
            <a className="button auth" href="/">
              <li>Register</li>
            </a>
          </ul>
        </div>
      </nav>
      <div className="content">
        <h1 className="tag-line-1">Find Your New Home</h1>
        <p className="tag-line-2">
          The best real estate website to complete your life and family
        </p>
      </div>
    </section>
  );
};

export default HomeLanding;
