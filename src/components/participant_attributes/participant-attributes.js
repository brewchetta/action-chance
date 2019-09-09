// React
import React from "react";
// Style
import './style.css'
// Assets
const pngs = require.context('../../assets/attribute_icons', true, /\.png/)

/*------Component------*/
const ParticipantAttributes = ({ attributes, removeAttribute }) => {
  /*------Render------*/
  return attributes.map((attr, i) => (
    <button
      className="attribute-button"
      key={i}
      name={attr}
      onClick={() => removeAttribute(attr)}
    >
      <img src={pngs(attr) ? pngs(attr) : '?'} alt='' />
    </button>
  ));
};

export default ParticipantAttributes;
