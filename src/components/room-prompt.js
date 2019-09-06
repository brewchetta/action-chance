// React
import React, {useState, useEffect} from 'react'
// Redux
import {useDispatch, useSelector} from 'react-redux'
import {setSocketRoom} from '../redux/actions'
// Constants
import {debugLog} from '../constants'

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
        setRoomInput(event.target.value)
        break;
      case 'passwordInput':
        setPasswordInput(event.target.value)
        break;
      default:
        debugLog('huh?')
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (roomInput.length > 3 && passwordInput.length > 3) {
      dispatch(setSocketRoom({name: roomInput, password: passwordInput}))
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

        <form onSubmit={handleSubmit}>
          <input onChange={handleChange}
            name='roomInput'
            type='text' max='15'
            value={roomInput}
            placeholder='room' />
          <br/>
          <input onChange={handleChange}
            name='passwordInput'
            type='password' max='20'
            value={passwordInput}
            placeholder='password' />
          <br/>
          <input type='submit' value='Submit'/>
        </form>

        </>

      : !isLongConnection ?

        <p>Connecting{cDot(0)}{cDot(0.3)}{cDot(0.6)}</p>

        : <p>This is taking longer than normal{cDot(0)}{cDot(0.3)}{cDot(0.6)}</p>
      }
    </div>
  )
}

export default RoomPrompt
