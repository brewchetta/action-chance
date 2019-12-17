// React
import React, {useState, useEffect} from 'react'
// Redux
import {useDispatch, useSelector} from 'react-redux'
import {setSocketRoom, clearSocketRoom} from '../redux/actions'
// Constants
import {debugLog} from '../constants'

// TODO: Add help option that creates modal

/* Component */
const RoomPrompt = () => {

  /* Redux */

  const dispatch = useDispatch()
  const socketRoom = useSelector(state => state.socketRoom)

  /* State */

  const [roomInput, setRoomInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')
  const [isLongConnection, setIsLongConnection] = useState(false)

  /* Utilities */

  // Creates a mesage if the connection is taking too long
  useEffect(() => {
    let timeout
    if (socketRoom.name && !isLongConnection) {
      timeout = setTimeout(() => setIsLongConnection(true), 7500)
    }

    return () => clearTimeout(timeout)
  }, [isLongConnection, socketRoom])

  useEffect(() => {
    return setIsLongConnection(false)
  }, [socketRoom])

  const handleChange = event => {
    switch (event.target.name) {
      case 'roomInput':
        setRoomInput(event.target.value.toLowerCase())
        break;
      case 'passwordInput':
        setPasswordInput(event.target.value)
        break;
      default:
        debugLog('huh?')
    }
  }

  const handleCancel = () => {
    dispatch(clearSocketRoom())
  }

  const handleSubmit = event => {
    debugLog(passwordInput)
    event.preventDefault()
    if (roomInput.length > 3 && passwordInput.length > 3) {
      dispatch(setSocketRoom({name: roomInput.toLowerCase(), password: passwordInput}))
    } else {
      // TODO: Use refs
      setPasswordInput(document.getElementById('passwordInput').value)
      setRoomInput(document.getElementById('roomInput').value)
    }
    //TODO: create error messages for improper length
  }

  const cDot = delay => {
    return <span className='connection-dot' style={{animationDelay: `${delay}s`}}>.</span>
  }

  /* Render */
  return (
    <div id='room-prompt'>
      {/* If no room, prompts to join, otherwise renders a connecting message depending on how long it's been connecting */}
      {!socketRoom.name ?
        <>

        <p>Join a game</p>

        <form onSubmit={handleSubmit} autoComplete="off">
          <input onChange={handleChange}
            name='roomInput'
            id='roomInput'
            type='text' max='15'
            value={roomInput}
            placeholder='room' />
          <br/>
          <input onChange={handleChange}
            name='passwordInput'
            id='passwordInput'
            type='password' max='20'
            value={passwordInput}
            placeholder='password' />
          <br/>
          <input type='submit' value='Submit'/>
        </form>

        </>

      : !isLongConnection ?

        <p>Connecting{cDot(0)}{cDot(0.3)}{cDot(0.6)}</p>

        : (
          <>
            <p>The beast is sleeping and most be awoken{cDot(0)}{cDot(0.3)}{cDot(0.6)}</p>
            <button onClick={handleCancel}>Cancel</button>
          </>
        )
      }
    </div>
  )
}

export default RoomPrompt
