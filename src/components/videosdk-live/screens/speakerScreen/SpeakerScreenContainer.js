import React from "react";
import { authToken } from "../../api";
import { MeetingProvider } from "@videosdk.live/react-sdk";
import MediaControlsContainer from "./MediaControlsContainer";
import ParticipantsGridContainer from "./ParticipantsGridContainer";
const SpeakerScreenContainer = ({ meetingId }) => {
    console.log(authToken,'authToken');
  return (
    <MeetingProvider
      token={authToken}
      config={{
        meetingId,
        name: "C.V. Raman",
        micEnabled: true,
        webcamEnabled: true,
      }}
      joinWithoutUserInteraction
    >
      <MediaControlsContainer meetingId={meetingId} />
      <ParticipantsGridContainer />
    </MeetingProvider>
  );
};

export default SpeakerScreenContainer;
