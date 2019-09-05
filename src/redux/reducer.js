import {combineReducers} from 'redux'
import participantsReducer from './participants'
import activeParticipantReducer from './active_participant'
import bgReducer from './bg'
import bgMaskReducer from './bg_mask'

export default combineReducers({
  participants: participantsReducer,
  activeParticipant: activeParticipantReducer,
  bg: bgReducer,
  bgMask: bgMaskReducer
})
