import { SET_SOCKETROOM, SET_SOCKETROOM_NAME, SET_SOCKETROOM_PASSWORD, CLEAR_SOCKETROOM } from './actions'

// socketRoom = {name:'', password:''}
export default function(state = {name: '', password: ''}, action) {
  switch (action.type) {
    case SET_SOCKETROOM_NAME:
      return {name: action.payload, password: state.password}
    case SET_SOCKETROOM_PASSWORD:
      return {name: state.name, password: action.payload}
    case SET_SOCKETROOM:
      return action.payload
    case CLEAR_SOCKETROOM:
      return {name: '', password: ''}
    default:
      return state
  }
}
