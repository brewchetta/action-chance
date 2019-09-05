import { SET_BG_MASK } from './actions'

// bgMask = { color: "#7D7D7D", intensity: 25 }
export default function(state = { color: "#7D7D7D", intensity: 25 }, action) {
  switch (action.type) {
    case SET_BG_MASK:
      return action.payload
    default:
      return state
  }
}
