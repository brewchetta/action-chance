import React from 'react'
import ParticipantImage from '../participant-image'

const ParticipantAddCard = ({setAddPartOpen}) => {
  return (
    <div className='participant-card'
      onClick={setAddPartOpen}
      style={{cursor: 'pointer'}}>
      <ParticipantImage
        imageURL={'https://image21.net/103/plus_png/plus_png_23.png'}
        isActive={false}
        participantName={''}
        floatLeft={false}
      />
    </div>
  )
}

export default ParticipantAddCard
