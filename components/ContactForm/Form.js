import React, { useState } from "react";
import "./Form.css";
import BackgroundSection from "../Background/BackgroundSection";
import video from "../../img/backg-video.mp4";
import { Link } from "react-router-dom";

function Form(props) {
  const [btnVisibility, setBtnVisibility] = useState(true);
  const [showMsg, setShowMsg] = useState(false);
  const [error, setError] = useState("");

  {
    /*  function to hide button after click and show mesage after button is hidden*/
  }

  function handleClick(e) {
    e.preventDefault();
    setShowMsg(true);
    setBtnVisibility(false);
  }

  return (
    <>
      <div>
        <BackgroundSection
          src={video}
          background_message={"Need some help with your trip?"}
          show_btn={false}
          btn_link={""}
          btn_text={""}
        />
      </div>

      <div className="form-container">
        <form className="register-form">
          <h2 className="form-title">Contact us</h2>
          <input
            id="name"
            className="form-field"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            id="email"
            className="form-field"
            type="text"
            placeholder="Email"
            name="email"
          />
          <input
            id="subject"
            className="form-field"
            type="text"
            placeholder="Subject"
            name="subject"
          />
          <textarea
            id="message"
            className="form-field"
            type="text"
            placeholder="Message"
            name="message"
          />

          {btnVisibility && (
            <button
              id="button-form"
              className="button-form"
              type="submit"
              onClick={handleClick}
            >
              Sent
            </button>
          )}
          {/*show h2 when button is clicked*/}
          {showMsg && (
            <div>
              <h2 className="msg-form-sent">Form sent!</h2>
            </div>
          )}
        </form>
      </div>
    </>
  );
}

export default Form;
