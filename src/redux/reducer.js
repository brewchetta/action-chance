import {combineReducers} from 'redux'
import participantsReducer from './participants'
import activeParticipantReducer from './active_participant'

export default combineReducers({
  participants: participantsReducer,
  activeParticipant: activeParticipantReducer
})
