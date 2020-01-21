import { SET_IMAGE_LIST_IS_OPEN } from './actions'

// imageListIsOpen = false
export default function(state = false, action) {
  switch (action.type) {
    case SET_IMAGE_LIST_IS_OPEN:
      return action.payload
    default:
      return state
  }
}
