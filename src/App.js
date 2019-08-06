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
import {defaultBGImage, reconnectionDelay, reconnectionAttempts, endpoint} from './constants'


/* Component */

function App() {
  //

  /* State */
  const [participants, setParticipants] = useState([]);
  const [activeParticipant, setActiveParticipant] = useState(null);
  const [bg, setBG] = useState(defaultBGImage);
  const [bgMask, setBGMask] = useState({ color: "#7D7D7D", intensity: 25 });
  const [socket, setSocket] = useState(null)

  /* Socket IO */

  // When attempting a reconnect
  const reconnectAttempt = attempts => {
    console.log(`could not connect to: ${endpoint}`)
    console.log(`reconnection attempt: ${attempts} out of ${reconnectionAttempts}`)
  }

  // When a new user connects
  const onUsersConnect = response => {
    console.log(response.message)
    console.log(`current users: ${response.userCount}`)
    setParticipants(response.participants)
  }

  // Adds or removes participants from all users
  const socketChangeParticipants = newParticipants => {
    socket.emit('change participants', newParticipants)
  }

  // Sets the active participant
  const socketChangeActiveParticipant = newActiveParticipant => {
    socket.emit('change active participant', newActiveParticipant)
  }

  const socketChangeBG = (newBGImage, newBGMask) => {
    socket.emit('change background', {image: newBGImage, mask: newBGMask})
  }

  // Main connection function
  const connectSocket = () => {
    console.log(`connecting to ${endpoint}`)

    const newSocket = socketIO(endpoint, {
      reconnectionAttempts,
      reconnectionDelay
    })

    newSocket.on('user connect', onUsersConnect)
    newSocket.on('reconnecting', reconnectAttempt)
    newSocket.on('reconnect', () => console.log(`reconnected: ${endpoint}`))
    newSocket.on('change participants', setParticipants)
    newSocket.on('change active participant', setActiveParticipant)
    newSocket.on('change background', response => { setBG(response.image); setBGMask(response.mask)})
    setSocket(newSocket)
  }

  useEffect(connectSocket, [])

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
      <ParticipantsContainer {...{participants, setParticipants: socketChangeParticipants, activeParticipant, setActiveParticipant: socketChangeActiveParticipant}} />
      <Options {...{bg, setBG,bgMask,setBGMask,socketChangeBG}}/>
    </div>
  );
}

export default App;
