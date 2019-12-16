import { SET_UTILIZE_INITIATIVE } from './actions'

// Get local storage if it exists
const localState = () => {
  if (localStorage.options) {
    return JSON.parse(localStorage.options).utilizeInitiative
  }

  localStorage.options = JSON.stringify({utilizeInitiative: 1, addParticipantCard: true})
  return true
}

// utilizeInitiative = 1
export default function(state = localState(), action) {
  switch (action.type) {
    case SET_UTILIZE_INITIATIVE:
      localStorage.options = JSON.stringify({utilizeInitiative: action.payload, addParticipantCard})
      return action.payload
    default:
      return state
  }
}
