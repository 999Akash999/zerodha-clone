import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Menu from "./Menu";

const FRONTEND_URL = process.env.REACT_APP_FRONTEND_URL || "http://localhost:3000";

const TopBar = () => {
  const returnToProfile = () => {
    window.location.assign(`${FRONTEND_URL}/Profile`);
  };

  return (
    <div className="topbar-container">
      <button className="back-to-profile" onClick={returnToProfile} aria-label="Back to profile">
        <ArrowBackIcon fontSize="small" />
        Profile
      </button>
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{100.2} </p>
          <p className="percent"> </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{100.2}</p>
          <p className="percent"></p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
