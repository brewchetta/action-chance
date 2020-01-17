// React
import React, {useState} from 'react'
// Redux
import {useDispatch, useSelector} from 'react-redux'
import {setSocketRoom} from '../../redux/actions'

const OptionsGameplay = () => {

  /* Redux */

  const socketRoom = useSelector(state => state.socketRoom)
  const dispatch = useDispatch()

  /* State */

  const [isOpen, setIsOpen] = useState(false)
  const [roomInput, setRoomInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  /* Utilities */

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = event => {
    switch (event.target.name) {
      case 'roomInput':
        setRoomInput(event.target.value.toLowerCase())
        break;
      case 'passwordInput':
        setPasswordInput(event.target.value)
        break;
      default:
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (roomInput.length > 3 && passwordInput.length > 3) {
      dispatch(setSocketRoom({name: roomInput.toLowerCase(), password: passwordInput}))
    }
    // TODO: set up error messages for validations
  }

  const handleReturnHome = () => {
    dispatch(setSocketRoom({name: '', password: ''}))
  }

  const renderToggleButton = () => (
      <>

      <br/>
      <p style={{fontSize: '0.9em', fontFamily: 'monospace', marginRight: '0.4em'}}>Current Room: {socketRoom.name}</p>

      <form onSubmit={handleSubmit}>
        <input type='text' name='roomInput'
          placeholder='room'
          value={roomInput}
          onChange={handleChange}
          style={{textAlign: 'right'}} />
        <br/>
        <input type='password' name='passwordInput'
          placeholder='password'
          value={passwordInput}
          onChange={handleChange}
          style={{textAlign: 'right'}} />
        <br/>

        <input type='submit' value='Select Room'/>
      </form>

      <br/>

      <button onClick={handleReturnHome}>Return to Home</button>

      </>
  )

  return (
    <>
    <button onClick={handleToggleOpen} id="options-button">
      Rooms {isOpen ? '▲' : '▼'}
    </button>
    {isOpen ? renderToggleButton() : null}
    </>
  )
}

export default OptionsGameplay
