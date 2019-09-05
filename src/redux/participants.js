import { SET_PARTICIPANTS } from './actions'

// participants = []
export default function participantReducer(state = [], action) {
  switch (action.type) {
    case SET_PARTICIPANTS:
      return action.payload
    default:
      return state
  }
}
