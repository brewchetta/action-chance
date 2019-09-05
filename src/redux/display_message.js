import { SET_DISPLAY_MESSAGE } from './actions'

// displayMessage = |||
export default function(state = '|||', action) {
  switch (action.type) {
    case SET_DISPLAY_MESSAGE:
      return action.payload
    default:
      return state
  }
}
