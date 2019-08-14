// React
import React, { useState, useEffect } from "react";
// Style
import "./App.css";
// Components
import ParticipantsContainer from "./components/participants-container";
import Options from "./components/options/options-container";
// Socket.io
import socketIO from 'socket.io-client'
// Constants
import {defaultBGImage, reconnectionDelay, reconnectionAttempts, endpoint, debugLog} from './constants'


/* Component */

function App() {
  //

  /* State */
  const [participants, setParticipants] = useState([]);
  const [activeParticipant, setActiveParticipant] = useState(null);
  const [bg, setBG] = useState(defaultBGImage);
  const [bgMask, setBGMask] = useState({ color: "#7D7D7D", intensity: 25 });
  const [displayMessage, setDisplayMessage] = useState("|||");
  const [utilizeInitiative, setUtilizeInitiative] = useState(1)
  const [socket, setSocket] = useState(null)
  const [socketRoom, setSocketRoom] = useState('room1')

  /* Socket IO */

  // When attempting a reconnect
  const reconnectAttempt = attempts => {
      debugLog(`could not connect to: ${endpoint}`)
      debugLog(`reconnection attempt: ${attempts} out of ${reconnectionAttempts}`)
  }

  // When a new user connects
  const onUsersConnect = response => {
      debugLog(response.message)
      debugLog(`current users: ${response.userCount}`)
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
    socket.emit('request room info', socketRoom)
  }

  // Main connection function
  const connectSocket = () => {
    debugLog(`connecting to ${endpoint}`)

    const newSocket = socketIO(endpoint, {
      reconnectionAttempts,
      reconnectionDelay
    })

    socketRequestRoomInfo(newSocket)

    newSocket.on('user connect', onUsersConnect)
    newSocket.on('reconnecting', reconnectAttempt)
    newSocket.on('reconnect', () => debugLog(`reconnected: ${endpoint}`))

    newSocket.on('change participants', response => {
      if (response.room === socketRoom) {
        setParticipants(response.data)
      }
    })

    newSocket.on('change active participant', response => {
      if (response.room === socketRoom) {
        setActiveParticipant(response.data)
      }
    })

    newSocket.on('change background', response => {
      if (response.room === socketRoom) {
        setBG(response.data.image)
        setBGMask(response.data.mask)
      }
    })

    newSocket.on('change display message', response => {
      if (response.room === socketRoom) setDisplayMessage(response.data)
    })
    // TODO: change display messages to be room specific

    newSocket.on('change initiative use', response => {
      if (response.room === socketRoom) {
        setUtilizeInitiative(response.data)
      }
    })

    setSocket(newSocket)

    // Return socket for useEffect to utilize
    return newSocket
  }

  useEffect(() => {
    // Connects the socket, disconnects the socket if socket gets updated
    const socket = connectSocket()

    // Cleanup
    return () => socket.disconnect()
  }, [socketRoom])

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

      <ParticipantsContainer {...{
        participants,
        setParticipants: socketChangeParticipants,
        activeParticipant,
        setActiveParticipant: socketChangeActiveParticipant,
        displayMessage,
        setDisplayMessage: socketChangeDisplayMessage,
        utilizeInitiative
      }} />

      <Options {...{
        bg,
        setBG,
        bgMask,
        setBGMask,
        socketChangeBG,
        utilizeInitiative,
        setUtilizeInitiative: socketChangeInitiativeUse,
        socketRoom,
        setSocketRoom
      }}/>
    </div>
  );
}

export default App;
