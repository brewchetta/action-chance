// React
import React, {useState} from 'react'
// Redux
import {useSelector, useDispatch} from 'react-redux'
import {setUtilizeInitiative} from '../../redux/actions'

const OptionsGameplay = () => {

  /*------Redux------*/

  const utilizeInitiative = useSelector(state => state.utilizeInitiative)
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
      <button
        style={utilizeInitiative ? {border:'solid green 1px', color: 'green'} : {border: 'solid grey 1px', color: 'grey'}}
        onClick={() => dispatch(setUtilizeInitiative(!utilizeInitiative))}>
        Use Initiative
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
