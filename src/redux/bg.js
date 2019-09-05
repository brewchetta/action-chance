import { SET_BG } from './actions'
import {defaultBGImage} from '../constants'

// bg = defaultBGImage
export default function(state = defaultBGImage, action) {
  switch (action.type) {
    case SET_BG:
      return action.payload
    default:
      return state
  }
}
