// React
import React from "react";
// Style
import './style.css'
// Assets
const pngs = require.context('../../assets/attribute_icons', true, /\.png/)

/*------Component------*/
const ParticipantAttributes = ({ attributes, removeAttribute, setAttributesAddIsOpen }) => {

  // Create list of attribute buttons
  const renderAttributes = () => {
    const attrs = attributes.map((attr, i) => (
      <button
        className="attribute-button"
        key={i}
        name={attr}
        onClick={() => removeAttribute(attr)}
      >
        <img src={pngs(attr) ? pngs(attr) : '?'} alt='' />
      </button>
    ))
    // Push the add attribute button to the end of the list
    attrs.push(
        <button
        className="attribute-button"
        key={-1}
        name={"add-attribute"}
        onClick={() => setAttributesAddIsOpen(true)}
      >
        <img src={'http://pluspng.com/img-png/free-png-plus-sign-plus-icon-512.png'} style={{filter: "invert(1)"}} alt='stuff' />
      </button>
    )

    return attrs
  }

  /*------Render------*/
  return (
    <>
      {renderAttributes()}
    </>
  )
};

export default ParticipantAttributes;
