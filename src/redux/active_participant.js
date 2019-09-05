import { SET_ACTIVE_PARTICIPANT } from './actions'

// participants = []
export default function(state = null, action) {
  switch (action.type) {
    case SET_ACTIVE_PARTICIPANT:
      return action.payload
    default:
      return state
  }
}
