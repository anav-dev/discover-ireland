import React from "react";
import "../App.css";
import BackgroundSection from "../components/Background/BackgroundSection";
import Footer from "../components/Footer/Footer";
import video from "../img/backg-video.mp4";

function Home() {
  return (
    <>
      <div>
        <BackgroundSection
          src={video}
          background_message={"Ready for an adventure?"}
          show_btn={true}
          btn_link={"destinations"}
          btn_text={"Check destinations"}
        />
        <br />
        <br />
        <br />
        <br />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
