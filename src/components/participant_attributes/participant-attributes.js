// React
import React from "react";

/*------Component------*/
const ParticipantAttributes = ({ attributes, removeAttribute }) => {
  /*------Render------*/
  return attributes.map((a, i) => (
    <button
      className="attribute-button"
      key={i}
      name={a}
      onClick={() => removeAttribute(a)}
    >
      {a}
    </button>
  ));
};

export default ParticipantAttributes;
