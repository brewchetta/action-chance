// React
import React, { useState } from "react";
// Toolbox
import { stringToColor } from "brews-toolboxjs";
// Default Image
const defaultImgURL =
  "https://dungeonsdragonsblog.files.wordpress.com/2015/10/winterguard-silhouette-new.jpg";

//*------Component------*//
const ParticipantImage = ({ imageURL, isActive, participantName, floatLeft }) => {
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

  imageURL ?  img.src = imageURL : img.src = defaultImgURL

  //*------Render------*//

  return (
      <div className='participant-image-container' style={floatLeft ? {float: 'left'} : null}>

        {/* Inner image */}
        <img
          className="participant-image"
          alt=""
          src={imageURL ? imageURL : defaultImgURL}
          style={
            isPortrait
            ? { width: "100px", top: `-${imagePlacement}px` }
            : { height: "100px", left: `-${imagePlacement}px` }
          }
          />

        {/* Circular image frame */}
        <div className={
            isActive
              ? "participant-image-frame rotating"
              : "participant-image-frame"
          }
          style={{ borderColor }}
        />

      </div>
  );
};

export default ParticipantImage;
