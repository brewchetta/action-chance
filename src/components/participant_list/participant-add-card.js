import React from 'react'
import {useSelector} from 'react-redux'
import ParticipantImage from '../participant-image'

const ParticipantAddCard = ({setAddPartOpen}) => {

  const addParticipantCard = useSelector(state => state.addParticipantCard)

  if (addParticipantCard) {
    return (
      <div className='participant-card'
        onClick={setAddPartOpen}
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
