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
const defaultImage = "https://clipart.wpblink.com/sites/default/files/wallpaper/drawn-forest/372214/drawn-forest-adobe-illustrator-372214-239163.jpg"
const reconnectionDelay = 2000
const reconnectionAttempts = 5

/* Component */

function App() {
  //

  /* State */
  const [participants, setParticipants] = useState([]);
  const setParticipantsAndUseSocket = participants => {
    setParticipants(participants)
    socketChangeParticipants(participants)
  }
  const [bg, setBG] = useState(defaultImage);
  const [bgMask, setBGMask] = useState({ color: "#7D7D7D", intensity: 25 });
  const [socket, setSocket] = useState(null)
  const endpoint = 'http://localhost:3050'
  // const [endpoint, setEndpoint] = useState('http://localhost:3050')
  // const [response, setResponse] = useState(false)

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
    newSocket.on('change participants', response => setParticipants(response))
    setSocket(newSocket)
  }

  useEffect(connectSocket, [])

  return (
    <div className="App">
      <div
        id="bg-mask"
        style={{
          background: `linear-gradient(${bgMask.color + "90"}, ${
            bgMask.color
          })`,
          opacity: `${bgMask.intensity * 0.01}`
        }}
        className="fillscreen"
      />
      <div id="bg" style={{ backgroundImage: `url(${bg})` }} />
      <div id="bg-container" />
      <ParticipantsContainer {...{participants, setParticipants: setParticipantsAndUseSocket, socketChangeParticipants}} />
      <Options bg={bg} setBG={setBG} bgMask={bgMask} setBGMask={setBGMask} />
    </div>
  );
}

export default App;
