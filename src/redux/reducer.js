import {combineReducers} from 'redux'
import participantReducer from './ParticipantReducer'

export default combineReducers({participants: participantReducer})
