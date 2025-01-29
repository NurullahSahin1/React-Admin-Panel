import React from "react";
import "../styles/topbar.css";
import { NotificationsNone, Language, Settings } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Sahinovation</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContaioner">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContaioner">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContaioner">
            <Settings />
          </div>
          <img
            src="https://img.freepik.com/free-photo/smiling-beautiful-young-woman-standing-posing_171337-11412.jpg?t=st=1737924296~exp=1737927896~hmac=dcccfb32b7afa223fe98cc91a118ac8df281b2bba7067fed6b169187b5a0014d&w=360"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}
