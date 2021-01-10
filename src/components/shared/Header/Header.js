import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
export default function Header() {
  return (
    <div className="header">
      <p className="header-brand">UpSkill</p>
      <div className="header-link">
        <p className="header-link-1">Courses</p>

        <p className="header-link-2">Contact us</p>
        <Link to="/login" className="header-link-3">
          Login
        </Link>
        <Link to="/signup" className="header-link-4">
          Register
        </Link>
      </div>
    </div>
  );
}
