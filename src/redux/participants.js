import { SET_PARTICIPANTS } from './actions'

// participants = []
export default function(state = [], action) {
  switch (action.type) {
    case SET_PARTICIPANTS:
      return action.payload
    default:
      return state
  }
}
