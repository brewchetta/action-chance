import {combineReducers} from 'redux'
import participantsReducer from './participants'
import activeParticipantReducer from './active_participant'
import bgReducer from './bg'
import bgMaskReducer from './bg_mask'
import displayMessageReducer from './display_message'
import utilizeInitiativeReducer from './utilize_initiative'

export default combineReducers({
  participants: participantsReducer,
  activeParticipant: activeParticipantReducer,
  bg: bgReducer,
  bgMask: bgMaskReducer,
  displayMessage: displayMessageReducer,
  utilizeInitiative: utilizeInitiativeReducer
})
