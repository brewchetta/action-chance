import React, {useState} from 'react'

const OptionsGameplay = ({utilizeInitiative, setUtilizeInitiative}) => {

  const [isOpen, setIsOpen] = useState(false)

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const renderToggleButton = () => (
      <>

      <br/>
      <button
        style={utilizeInitiative ? {border:'solid green 1px', color: 'green'} : {border: 'solid grey 1px', color: 'grey'}}
        onClick={() => setUtilizeInitiative(!utilizeInitiative)}>
        Use Initiative
      </button>

      </>
  )

  return (
    <>
    <button onClick={handleToggleOpen} id="options-button">
      Gameplay {isOpen ? '▲' : '▼'}
    </button>
    {isOpen ? renderToggleButton() : null}
    </>
  )
}

export default OptionsGameplay
