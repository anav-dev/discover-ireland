import React from "react";
import PlaceItem from "./PlaceItem";
import PlacesStyle from "./PlacesStyle.css";
import BackgroundSection from "../Background/BackgroundSection";
import video from "../../img/backg-video.mp4";

function Places(props) {
  return (
    <>
      <div>
        <BackgroundSection
          src={video}
          background_message={"Where would you like to go?"}
          btn_link={""}
          btn_text={""}
        />
      </div>
      <div className="pictures-container">
        <div className="row">
          {props.destinations.map(function (i, index) {
            return (
              <>
                <div className="column" key={index}>
                  <PlaceItem
                    name={i.name}
                    description={i.description}
                    image={i.image}
                  />
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Places;
