import React, {useState} from 'react'

const OptionsGameplay = ({socketRoom, setSocketRoom, setSocketPassword}) => {

  const [isOpen, setIsOpen] = useState(false)
  const [roomInput, setRoomInput] = useState('')
  const [passwordInput, setPasswordInput] = useState('')

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleChange = event => {
    switch (event.target.name) {
      case 'roomInput':
        setRoomInput(event.target.value)
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
      setSocketRoom(roomInput)
      setSocketPassword(passwordInput)
    }
    // TODO: set up error messages for validations
  }

  const renderToggleButton = () => (
      <>

      <br/>
      <p style={{fontSize: '0.9em', fontFamily: 'monospace', marginRight: '0.4em'}}>Current Room: {socketRoom}</p>

      <form onSubmit={handleSubmit}>
        <input type='text' name='roomInput'
          placeholder='room'
          value={roomInput}
          onChange={handleChange}
          style={{textAlign: 'right'}} />
        <br/>
        <input type='text' name='passwordInput'
          placeholder='password'
          value={passwordInput}
          onChange={handleChange}
          style={{textAlign: 'right'}} />
        <br/>

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
