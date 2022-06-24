import React from "react";
import "./Footer.css";
import imagelogo from "../../img/GITHUB-LOGO.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>Check out this project's code on </p>
        <div className="git-logo">
          <a
            href="https://github.com/anaes0/myfirst-react-project"
            target="_blank"
          >
            <img src={imagelogo} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
