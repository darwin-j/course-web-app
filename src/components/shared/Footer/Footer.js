import React from "react";
import "./Footer.scss";
import instagram from "./../../../images/instagram.svg";
import facebook from "./../../../images/facebook.svg";
import twitter from "./../../../images/twitter.svg";
export default function Footer() {
  return (
    <div className="footer">
      <h1 className="footer-brand">UpSkill</h1>
      <div className="footer-img">
        <img className="footer-img--1" src={instagram} alt="instagram img" />
        <img className="footer-img--2" src={facebook} alt="facebook img" />
        <img className="footer-img--3" src={twitter} alt="twitter img" />
      </div>
    </div>
  );
}
