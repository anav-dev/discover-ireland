import React from "react";
import placestyle from "./PlaceItem.css";

function PlaceItem(props) {
  return (
    <div className="placeItem-container">
      <h3 className="place-name">
        {props.name} <span>&nbsp;</span>
      </h3>
      <p className="place-description">
        {props.description} <span>&nbsp;</span>
      </p>
      <img src={props.image}></img>
      <span>&nbsp;</span>
    </div>
  );
}

export default PlaceItem;
