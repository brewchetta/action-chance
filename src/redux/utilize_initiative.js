import { SET_UTILIZE_INITIATIVE } from './actions'

// TODO: Make utilize initiative persist for different rooms

// utilizeInitiative = 1
export default function(state = 1, action) {
  switch (action.type) {
    case SET_UTILIZE_INITIATIVE:
      return action.payload
    default:
      return state
  }
}
