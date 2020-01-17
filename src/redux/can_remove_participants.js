import { TOGGLE_CAN_REMOVE_PARTICIPANTS } from './actions'

// canRemoveParticipants = false
export default function(state = false, action) {
  switch (action.type) {
    case TOGGLE_CAN_REMOVE_PARTICIPANTS:
      return !state
    default:
      return state
  }
}
