// React
import React, {useState} from 'react'
// Redux
import {useSelector, useDispatch} from 'react-redux'
import {toggleAddParticipantCard} from '../../redux/actions'

const OptionsGameplay = () => {

  /*------Redux------*/

  const {addParticipantCard} = useSelector(state => state)
  const dispatch = useDispatch()

  /*------State------*/

  const [isOpen, setIsOpen] = useState(false)

  /*------Utilities------*/

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const renderToggleButton = () => (
      <>

      <br/>
      {/* <button
        style={utilizeInitiative ? {border:'solid green 1px', color: 'green'} : {border: 'solid grey 1px', color: 'grey'}}
        onClick={() => dispatch(setUtilizeInitiative(!utilizeInitiative))}>
        Use Initiative
      </button> */}
      <button
        style={addParticipantCard ? {border:'solid green 1px', color: 'green'} : {border: 'solid grey 1px', color: 'grey'}}
        onClick={() => dispatch(toggleAddParticipantCard())}>
        Add Character Card
      </button>

      </>
  )

  /*------Render------*/

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
