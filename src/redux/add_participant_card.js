import { TOGGLE_ADD_PARTICIPANT_CARD } from './actions'

// Get local storage if it exists
const localState = () => {
  if (localStorage.options) {
    return JSON.parse(localStorage.options).addParticipantCard
  }

  localStorage.options = JSON.stringify({utilizeInitiative: 1, addParticipantCard: true})
  return true
}

// addParticipantCard = true
export default function(state = localState(), action) {
  switch (action.type) {
    case TOGGLE_ADD_PARTICIPANT_CARD:
      localStorage.options = JSON.stringify({utilizeInitiative, addParticipantCard: !state})
      return !state
    default:
      return state
  }
}
