import React, { useState } from "react";
import { stringToColor } from "brews-toolboxjs";

const ParticipantImage = ({ imageURL, isActive, participantName }) => {
  //

  //*------State------*//
  const [isPortrait, setIsPortrait] = useState(true);
  const [imagePlacement, setImagePlacement] = useState(0);
  const [borderColor, setBorderColor] = useState(null);

  // Set border color upon load
  if (!borderColor) {
    setBorderColor(stringToColor(participantName));
  }

  //*------Utilities------*//

  // Set the image placement and decide whether it's portrait or not
  const img = new Image();

  img.onload = () => {
    if (img && img.width < img.height) {
      setImagePlacement((img.height / img.width - 1) * 50);
      if (!isPortrait) {
        setIsPortrait(true);
      }
    } else if (img && img.height < img.width) {
      setImagePlacement((img.width / img.height - 1) * 50);
      if (isPortrait) {
        setIsPortrait(false);
      }
    }
  };

  img.src = imageURL;

  //*------Render------*//

  return (
    <>
      {/* Circular image frame */}
      <div
        className={
          isActive
            ? "participant-image-frame rotating"
            : "participant-image-frame"
        }
        style={{ borderColor }}
      >
        {/* Inner image */}
        <img
          className={
            isActive
              ? "participant-image rotating-counter"
              : "participant-image"
          }
          alt=""
          src={imageURL}
          style={
            isPortrait
              ? { width: "100px", top: `-${imagePlacement}px` }
              : { height: "100px", left: `-${imagePlacement}px` }
          }
        />
        {/* End frame */}
      </div>
    </>
  );
};

export default ParticipantImage;
