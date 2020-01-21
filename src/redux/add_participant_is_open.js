import { SET_ADD_PARTICIPANT_IS_OPEN } from './actions'

// addParticipantIsOpen = false
export default function(state = false, action) {
  switch (action.type) {
    case SET_ADD_PARTICIPANT_IS_OPEN:
      return action.payload
    default:
      return state
  }
}
