import {combineReducers} from 'redux'
import participantsReducer from './participants'
import activeParticipantReducer from './active_participant'
import participantToEditReducer from './participant_to_edit'
import bgReducer from './bg'
import bgMaskReducer from './bg_mask'
import displayMessageReducer from './display_message'
import utilizeInitiativeReducer from './utilize_initiative'
import socketReducer from './socket'
import socketRoomReducer from './socketroom'
import addParticipantCardReducer from './add_participant_card'
import canRemoveParticipantsReducer from './can_remove_participants'

export default combineReducers({
  participants: participantsReducer,
  activeParticipant: activeParticipantReducer,
  participantToEdit: participantToEditReducer,
  bg: bgReducer,
  bgMask: bgMaskReducer,
  displayMessage: displayMessageReducer,
  utilizeInitiative: utilizeInitiativeReducer,
  socket: socketReducer,
  socketRoom: socketRoomReducer,
  addParticipantCard: addParticipantCardReducer,
  canRemoveParticipants: canRemoveParticipantsReducer
})
