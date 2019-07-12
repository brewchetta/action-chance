import React from "react";

const ParticipantAttributes = ({ attributes, removeAttribute }) => {
  return attributes.map((a, i) => (
    <button key={i} name={a} onClick={() => removeAttribute(a)}>
      {a}
    </button>
  ));
};

export default ParticipantAttributes;
