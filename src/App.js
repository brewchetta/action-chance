// React
import React, { useState, useEffect } from "react";
// Style
import "./App.css";
// Components
import ParticipantsContainer from "./components/participants-container";
import Options from "./components/options/options-container";
import RoomPrompt from "./components/room-prompt"
// Socket.io
import socketIO from 'socket.io-client'
// Constants
import {defaultBGImage, reconnectionDelay, reconnectionAttempts, endpoint, debugLog} from './constants'
// Redux
import {useDispatch, useSelector} from 'react-redux'
import * as actions from './redux/actions'

/* Component */

function App() {

  // Redux
  const dispatch = useDispatch()
  const {bg, bgMask, displayMessage, socket} = useSelector(state => state)
  
  /* State */
  const [socketRoom, setSocketRoom] = useState('')
  const [socketPassword, setSocketPassword] = useState('')

  /* Socket IO */

  // When attempting a reconnect
  const reconnectAttempt = attempts => {
      debugLog(`could not connect to: ${endpoint}`)
      debugLog(`reconnection attempt: ${attempts} out of ${reconnectionAttempts}`)
      if (attempts >= 5) setSocketRoom('')
  }

  // Adds or removes participants from all users
  const socketChangeParticipants = newParticipants => {
    socket.emit('change participants', {data: newParticipants, room: socketRoom})
  }

  // Sets the active participant
  const socketChangeActiveParticipant = newActiveParticipant => {
    socket.emit('change active participant', {data: newActiveParticipant, room: socketRoom})
  }

  // Sets the background and background mask
  const socketChangeBG = (newBGImage, newBGMask) => {
    socket.emit('change background', {data: {image: newBGImage, mask: newBGMask}, room: socketRoom})
  }

  // Sets the main display message at the top of the screen
  const socketChangeDisplayMessage = newMessage => {
    socket.emit('change display message', {data: newMessage, room: socketRoom})
  }

  const socketChangeInitiativeUse = newInitiativeUse => {
    socket.emit('change initiative use', {data: newInitiativeUse, room: socketRoom})
  }

  const socketRequestRoomInfo = socket => {
    socket.emit('request room info', {room: socketRoom, password: socketPassword})
    // socket.emit('change display message', {data: 'A new player has joined...!', room: socketRoom})
  }

  // Main connection function
  const connectSocket = () => {
    debugLog(`connecting to ${endpoint}`)

    const newSocket = socketIO(endpoint, {
      reconnectionAttempts,
      reconnectionDelay
    })

    socketRequestRoomInfo(newSocket)

    newSocket.on('reconnecting', reconnectAttempt)
    newSocket.on('reconnect', () => debugLog(`reconnected: ${endpoint}`))

    newSocket.on('change participants', response => {
      dispatch(actions.setParticipants(response.data))
    })

    newSocket.on('change active participant', response => {
      dispatch(actions.setActiveParticipant(response.data))
    })

    newSocket.on('change background', response => {
      dispatch(actions.setBG(response.data.image))
      dispatch(actions.setBGMask(response.data.mask))
    })

    newSocket.on('change display message', response => {
      dispatch(actions.setDisplayMessage(response.data))
      document.title = response.data
    })

    newSocket.on('change initiative use', response => {
      dispatch(actions.setUtilizeInitiative(response.data))
    })

    newSocket.on('invalid password', response => {
      alert(response)
      setSocketRoom('')
      setSocketPassword('')
      newSocket.disconnect()
    })

    newSocket.on('shutdown', response => {
      dispatch(actions.setSocket(null))
      setSocketRoom(null)

      dispatch(actions.setBG(defaultBGImage))
      dispatch(actions.setBGMask({ color: "#7D7D7D", intensity: 25 }))
      alert(response)
    })

    dispatch(actions.setSocket(newSocket))

    // Return socket for useEffect to utilize
    return newSocket
  }

  /* Connect Socket */

  // Connects the socket, disconnects the socket if socket gets updated
  useEffect(() => {
    let socket
    if (socketRoom) {
      socket = connectSocket()
    }

    // Cleanup
    return () => {
      if (socket) socket.disconnect()
    }

  }, [socketRoom])

  useEffect(() => {
    const activeCard = document.getElementsByClassName('participant-card-active')[0]
    if (activeCard) activeCard.scrollIntoView({behavior: "smooth", block: "center"})
  })

  /* Render */

  return (
    <div className="App">

      <div
        id="bg-mask"
        style={{
          background: `linear-gradient(${bgMask.color + "90"}, ${bgMask.color})`,
          opacity: `${bgMask.intensity * 0.01}`
        }}
        className="fillscreen"
      />

      <div id="bg" style={{ backgroundImage: `url(${bg})` }} />

      <div id="bg-container" />

      {/* Shows the participants if in a room, otherwise prompts to join a room */}

      {socketRoom && socket && socket.connected ? (

        <ParticipantsContainer {...{
          setParticipants: socketChangeParticipants,
          setActiveParticipant: socketChangeActiveParticipant,
          displayMessage,
          setDisplayMessage: socketChangeDisplayMessage
        }} />

      ) : (

        <RoomPrompt {...{setSocketRoom, socketRoom, setSocketPassword}} />

      )}

      {/* Only show options if socket has been established */}
      { socket && socket.connected ?

        <Options {...{
        socketChangeBG,
        setUtilizeInitiative: socketChangeInitiativeUse,
        socketRoom,
        setSocketRoom,
        setSocketPassword
        }}/>

        : null }

    </div>
  );
}

export default App;
