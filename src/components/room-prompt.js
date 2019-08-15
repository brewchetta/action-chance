// React
import React, {useState} from 'react'

/* Component */
const RoomPrompt = ({setSocketRoom}) => {

  /* State */

  const [input, setInput] = useState('')

  /* Utilities */

  const handleChange = event => {
    setInput(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    setSocketRoom(input)
  }

  /* Render */
  return (
    <form onSubmit={handleSubmit} id='room-prompt'>
      <p>Join a game</p>
      <input onChange={handleChange} type='text' max='15' value={input} />
      <input type='submit' value='Submit'/>
    </form>
  )
}

export default RoomPrompt
