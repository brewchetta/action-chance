// React
import React from "react";
// Style
import './style.css'
// Assets
const pngs = require.context('../../assets/attribute_icons', true, /\.png/)
const attrs = pngs.keys()

/*------Component------*/
const ParticipantAttrsAdd = ({ participantAttributes, handleAttributeAdd, isOpen, setIsOpen }) => {


  /*------Utilities------*/

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  // Renders an attribute button
  const attrButton = attr => {
    return (
      <button
        className="attribute-button"
        key={attr}
        onClick={() => {
          setIsOpen(!isOpen);
          if (!participantAttributes || participantAttributes.length <= 6) {
            handleAttributeAdd(attr);
          }
        }}
      >
        <img src={pngs(attr) ? pngs(attr) : '?'} alt='' />
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
      {isOpen ? (
        <>
          <div className='fillscreen' onClick={toggleIsOpen}/>
          <div className='attr-add-buttons-container'>
            {renderAttrButtons()}
          </div>
        </>
      )
      : null}
    </div>
  );
};

export default ParticipantAttrsAdd;
