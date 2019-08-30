// React
import React, {useState, useEffect} from 'react'

/* Component */
const RoomPrompt = ({setSocketRoom, socketRoom}) => {

  /* State */

  const [input, setInput] = useState('')
  const [longConnection, setLongConnection] = useState(false)

  // Creates a mesage if the connection is taking too long
  useEffect(() => {
    let timeout
    if (socketRoom && !longConnection) {
      timeout = setTimeout(() => setLongConnection(true), 7500)
    }

    return () => clearTimeout(timeout)
  }, [longConnection, socketRoom])

  /* Utilities */

  const handleChange = event => {
    setInput(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setSocketRoom(input)
  }

  const cDot = delay => {
    return <span className='connection-dot' style={{animationDelay: `${delay}s`}}>.</span>
  }

  /* Render */
  return (
    <div id='room-prompt'>
      {/* If no room, prompts to join, otherwise renders a connecting message depending on how long it's been connecting */}
      {!socketRoom ?
        <>

        <p>Join a game</p>

        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} type='text' max='15' value={input} />
          <input type='submit' value='Submit'/>
        </form>

        </>

        : !longConnection ?

        <p>Connecting{cDot(0)}{cDot(0.3)}{cDot(0.6)}</p>

        : <p>This is taking longer than normal{cDot(0)}{cDot(0.3)}{cDot(0.6)}</p>
      }
    </div>
  )
}

export default RoomPrompt
