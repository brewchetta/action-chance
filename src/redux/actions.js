export const SET_PARTICIPANTS = 'SET_PARTICIPANTS'
export const SET_ACTIVE_PARTICIPANT = 'SET_ACTIVE_PARTICIPANT'
export const SET_BG = 'SET_BG'
export const SET_BG_MASK = 'SET_BG_MASK'
export const SET_DISPLAY_MESSAGE = 'SET_DISPLAY_MESSAGE'
export const SET_UTILIZE_INITIATIVE = 'SET_UTILIZE_INITIATIVE'
export const SET_SOCKET = 'SET_SOCKET'

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
