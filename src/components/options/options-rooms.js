import React, {useState} from 'react'

const OptionsGameplay = ({socketRoom, setSocketRoom}) => {

  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState('')

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = event => {
    setInput(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (input.length > 0) setSocketRoom(input)
  }

  const renderToggleButton = () => (
      <>

      <br/>
      <p style={{fontSize: '0.8em', fontFamily: 'monospace', marginRight: '1em'}}>Current Room: {socketRoom}</p>

      <form onSubmit={handleSubmit}>
        <input type='text'
          placeholder='Name of Room'
          value={input}
          onChange={handleChange} />

        <input type='submit' value='Select Room'/>
      </form>

      </>
  )

  return (
    <>
    <button onClick={handleToggleOpen} id="options-button">
      Connection {isOpen ? '▲' : '▼'}
    </button>
    {isOpen ? renderToggleButton() : null}
    </>
  )
}

export default OptionsGameplay
