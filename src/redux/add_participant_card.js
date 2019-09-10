import { TOGGLE_ADD_PARTICIPANT_CARD } from './actions'

// addParticipantCard = true
export default function(state = true, action) {
  switch (action.type) {
    case TOGGLE_ADD_PARTICIPANT_CARD:
      return !state
    default:
      return state
  }
}
