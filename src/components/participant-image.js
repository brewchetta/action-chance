import React, { useState } from "react";

const ParticipantImage = ({ imageURL }) => {
  const [isPortrait, setIsPortrait] = useState(true);
  const [imagePlacement, setImagePlacement] = useState(0);
  const [borderColor, setBorderColor] = useState(null);

  // Set border color
  const randomColor = () => {
    return `rgb(${Math.random() * 255}, ${Math.random() *
      255}, ${Math.random() * 255})`;
  };

  if (!borderColor) {
    setBorderColor(randomColor());
  }

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

  return (
    <div className="participant-image-frame" style={{ borderColor }}>
      <img
        className="participant-image"
        alt=""
        src={imageURL}
        style={
          isPortrait
            ? { width: "100px", top: `-${imagePlacement}px` }
            : { height: "100px", left: `-${imagePlacement}px` }
        }
      />
    </div>
  );
};

export default ParticipantImage;

// var img = new Image();
// img.onload = function() {
//   alert(this.width + 'x' + this.height);
// }
// img.src = 'http://www.google.com/intl/en_ALL/images/logo.gif';
