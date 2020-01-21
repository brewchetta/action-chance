import { SET_PARTICIPANT_TO_EDIT } from './actions'

// participantToEdit = null
export default function(state = null, action) {
  switch (action.type) {
    case SET_PARTICIPANT_TO_EDIT:
      return action.payload
    default:
      return state
  }
}
