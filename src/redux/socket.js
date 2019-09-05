import { SET_SOCKET } from './actions'

// socket = null
export default function(state = null, action) {
  switch (action.type) {
    case SET_SOCKET:
      return action.payload
    default:
      return state
  }
}
