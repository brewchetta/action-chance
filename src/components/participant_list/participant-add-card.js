import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {setAddParticipantIsOpen} from '../../redux/actions'
import ParticipantImage from '../participant-image'

const ParticipantAddCard = () => {

  /* Redux */
  const addParticipantCard = useSelector(state => state.addParticipantCard)
  const dispatch = useDispatch()

  /* Render */

  if (addParticipantCard) {
    return (
      <div className='participant-card'
        onClick={() => dispatch(setAddParticipantIsOpen(true))}
        style={{cursor: 'pointer'}}>
        <ParticipantImage
          imageURL={'http://pluspng.com/img-png/free-png-plus-sign-plus-icon-512.png'}
          isActive={false}
          participantName={''}
          floatLeft={false}
          />
      </div>
    )
  } else return null
}

export default ParticipantAddCard
