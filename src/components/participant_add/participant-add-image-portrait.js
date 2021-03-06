import React from 'react'
import ParticipantImage from '../participant-image'

const ParticipantAddImagePortrait = ({handleSelectImage, getImages}) => {

  const handleClick = (event) => {
    const url = prompt("Add URL here to add image")

    if (url) {
      const img = new Image();
      img.onload = () => {
        if (img.width && !getImages().includes(url)) {
          localStorage.images = JSON.stringify([...getImages(), url]);
          handleSelectImage(url)
        } else if (getImages().includes(url)) {
          alert('Image already exists')
        }
      }

      img.src = url
    }

  }


  return (
    <div onClick={handleClick} className='add-image-div'>
      <ParticipantImage
        imageURL={'http://pluspng.com/img-png/free-png-plus-sign-plus-icon-512.png'}
        isActive={false}
        participantName=''
        floatLeft={false} />
    </div>
  )
}

export default ParticipantAddImagePortrait
