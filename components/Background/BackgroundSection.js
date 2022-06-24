import React from "react";
import "./BackgroundSection.css";
import Button from "./Button";

function BackgroundSection(props) {
  return (
    //For using a video for background on different pages
    <div className="Background-container">
      <video src={props.src} autoPlay loop muted></video>
      <h1>{props.background_message}</h1>
      <Button
        show_btn={props.show_btn}
        btn_link={props.btn_link}
        btn_text={props.btn_text}
      />
    </div>
  );
}

export default BackgroundSection;
