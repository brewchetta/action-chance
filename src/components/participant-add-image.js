import React from "react";

const ParticipantAddImage = props => {
  const [imageURL, setImageURL] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [imagePage, setImagePage] = useState(0);

  const renderImages = () => {
    const images = JSON.parse(localStorage.images);
    return images.map(image => <ParticipantImage />);
  };

  if (isOpen) {
    return (
      <>
        <button>Add Image</button>
        <div />
      </>
    );
  } else {
    return <button>Add Image</button>;
  }
};

export default ParticipantAddImage;
