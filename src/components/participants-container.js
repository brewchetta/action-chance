import React, { useState } from "react";
import AddParticipant from "./participants-add";
import ParticipantList from "./participant-list";

const ParticipantsContainer = props => {
  const [participants, setParticipants] = useState([]);

  const removeParticipant = participant => {
    setParticipants([...participants].filter(item => item !== participant));
  };

  return (
    <div>
      <AddParticipant
        participants={participants}
        setParticipants={setParticipants}
      />
      <ParticipantList
        participants={participants}
        removeParticipant={removeParticipant}
      />
    </div>
  );
};

export default ParticipantsContainer;
