export const SET_PARTICIPANTS = 'SET_PARTICIPANTS'
export const SET_ACTIVE_PARTICIPANT = 'SET_ACTIVE_PARTICIPANT'
export const SET_BG = 'SET_BG'
export const SET_BG_MASK = 'SET_BG_MASK'

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
