export const SET_PARTICIPANTS = 'SET_PARTICIPANTS'
export const SET_ACTIVE_PARTICIPANT = 'SET_ACTIVE_PARTICIPANT'
export const SET_BG = 'SET_BG'
export const SET_BG_MASK = 'SET_BG_MASK'
export const SET_DISPLAY_MESSAGE = 'SET_DISPLAY_MESSAGE'
export const SET_UTILIZE_INITIATIVE = 'SET_UTILIZE_INITIATIVE'
export const SET_SOCKET = 'SET_SOCKET'
export const SET_SOCKETROOM_NAME = 'SET_SOCKETROOM_NAME'
export const SET_SOCKETROOM_PASSWORD = 'SET_SOCKETROOM_PASSWORD'
export const SET_SOCKETROOM = 'SET_SOCKETROOM'
export const CLEAR_SOCKETROOM = 'CLEAR_SOCKETROOM'
export const TOGGLE_ADD_PARTICIPANT_CARD = 'TOGGLE_ADD_PARTICIPANT_CARD'

export function setParticipants(payload) {
  return {type: SET_PARTICIPANTS, payload}
}

export function setActiveParticipant(payload) {
  return {type: SET_ACTIVE_PARTICIPANT, payload}
}

export function setBG(payload) {
  return {type: SET_BG, payload}
}

export function setBGMask(payload) {
  return {type: SET_BG_MASK, payload}
}

export function setDisplayMessage(payload) {
  return {type: SET_DISPLAY_MESSAGE, payload}
}

export function setUtilizeInitiative(payload) {
  return {type: SET_UTILIZE_INITIATIVE, payload}
}

export function setSocket(payload) {
  return {type: SET_SOCKET, payload}
}

export function setSocketRoomName(payload) {
  return {type: SET_SOCKETROOM_NAME, payload}
}

export function setSocketRoomPassword(payload) {
  return {type: SET_SOCKETROOM_PASSWORD, payload}
}

export function setSocketRoom(payload) {
  return {type: SET_SOCKETROOM, payload}
}

export function clearSocketRoom() {
  return {type: CLEAR_SOCKETROOM}
}

export function toggleAddParticipantCard() {
  return {type: TOGGLE_ADD_PARTICIPANT_CARD}
}
