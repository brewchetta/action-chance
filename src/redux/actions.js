export const SET_PARTICIPANTS = 'SET_PARTICIPANTS'
export const SET_ACTIVE_PARTICIPANT = 'SET_ACTIVE_PARTICIPANT'

export function setParticipants(payload) {
  return {type: SET_PARTICIPANTS, payload}
}

export function setActiveParticipant(payload) {
  return {type: SET_ACTIVE_PARTICIPANT, payload}
}
