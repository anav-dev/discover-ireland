import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p iclassName="github-link">
        Check out this project on
        <a href="https://github.com" target="blank_">
          {" "}
          💻
        </a>
      </p>
    </footer>
  );
}

export default Footer;
