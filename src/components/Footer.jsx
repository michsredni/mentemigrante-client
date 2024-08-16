import React from "react";
import logo from "../assets/MentEmigrante-logo.png";

function Footer() {
  return (
    <div className="footer">
      <div>
        <img src={logo} alt="logo" width="100px" />
      </div>
      <div className="madeBy">
        <p> Developers: Sheyla & Michelle</p>
        <div>
          <a href="https://github.com/michsredni/mentemigrante-client">
            <i class="bi bi-github"></i>
          </a>
          <a href="#">
            <i class="bi bi-instagram"></i>
          </a>
          <a href="#">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="#">
            <i class="bi bi-twitter-x"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
