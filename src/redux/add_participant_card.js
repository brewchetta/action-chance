import { TOGGLE_ADD_PARTICIPANT_CARD } from './actions'

// Get local storage if it exists
const localState = () => {
  if (localStorage.addParticipantCard) {
    return JSON.parse(localStorage.addParticipantCard)
  }

  localStorage.addParticipantCard = true
  return true
}

// addParticipantCard = true
export default function(state = localState(), action) {
  switch (action.type) {
    case TOGGLE_ADD_PARTICIPANT_CARD:
      localStorage.addParticipantCard = !state
      return !state
    default:
      return state
  }
}
