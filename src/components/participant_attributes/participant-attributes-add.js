import React, { useState } from "react";

const ParticipantAttrsAdd = ({ participantAttributes, handleAttributeAdd }) => {
  const [isOpen, setIsOpen] = useState(false);

  const attrs = [
    "Ω",
    "Χ",
    "⇪",
    "⋙",
    "⇓",
    "⊗",
    "≈",
    "☁",
    "☘",
    "☠",
    "☢",
    "☣",
    "♥",
    "♦",
    "♣",
    "♠",
    "♨",
    "♫",
    "⚡",
    "⚠"
  ];

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

  const renderAttrButtons = () => {
    if (participantAttributes) {
      return attrs
        .filter(a => !participantAttributes.includes(a))
        .map((attr, i) => attrButton(attr));
    } else {
      return attrs.map((attr, i) => attrButton(attr));
    }
  };

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

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
