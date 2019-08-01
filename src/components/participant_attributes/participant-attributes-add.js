// React
import React, { useState } from "react";

/*------Component------*/
const ParticipantAttrsAdd = ({ participantAttributes, handleAttributeAdd }) => {
  //

  /*------State------*/
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  /*------Utilities------*/

  // The various attributes that will become buttons
  const attrs = ["Ω","Χ","⇪","⋙","⇓","⊗","≈","☁","☘","☠","☢","☣","♥","♦","♣","♠","♨","♫","⚡","⚠"];

  // Renders an attribute button
  const attrButton = attr => {
    return (
      <button
        className="attribute-button"
        key={attr}
        onClick={() => {
          setIsOpen(!isOpen);
          handleAttributeAdd(attr);
        }}
      >
        {attr}
      </button>
    );
  };

  // Renders a list of attribute buttons
  const renderAttrButtons = () => {
    if (participantAttributes) {
      return attrs
        .filter(a => !participantAttributes.includes(a))
        .map((attr, i) => attrButton(attr));
    } else {
      return attrs.map((attr, i) => attrButton(attr));
    }
  };

  /*------Render------*/

  return (
    <div className="attr-add">
      {isOpen ? renderAttrButtons() : null}
      <br />
      <button onClick={toggleIsOpen} style={{ background: "none" }}>
        Tags
      </button>
    </div>
  );
};

export default ParticipantAttrsAdd;
