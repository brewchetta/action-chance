import { SET_UTILIZE_INITIATIVE } from './actions'

// Get local storage if it exists
const localState = () => {
  if (localStorage.utilizeInitiative === false || localStorage.utilizeInitiative === true) {
    return localStorage.utilizeInitiative
  }

  localStorage.utilizeInitiative = true
  return true
}

// utilizeInitiative = 1
export default function(state = localState(), action) {
  switch (action.type) {
    case SET_UTILIZE_INITIATIVE:
      localStorage.utilizeInitiative = JSON.stringify(action.payload)
      return action.payload
    default:
      return state
  }
}
