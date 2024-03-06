import React, { useState } from "react";
import SpeakerScreenContainer from "./screens/speakerScreen/SpeakerScreenContainer";
import ViewerScreenContainer from "./screens/ViewerScreenContainer";
import WelcomeScreenContainer from "./screens/WelcomeScreenContainer";

const Videosdk = () => {
    let token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIyMjg5ZDRkZC03NmJhLTQ5NTktYmQyNC1hODY4YjJkYTk1YjkiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwOTExODA2NCwiZXhwIjoxNzA5NzIyODY0fQ.pa_MHdCHwFNiMTRKwSDwSDpGsNkCYJvT2_U5rwDvRaM";
  const [appData, setAppData] = useState({ meetingId: null, mode: null });
console.log('====================================');
console.log(appData,'appdata');
console.log('====================================');
  return appData.meetingId ? (
    appData.mode === "CONFERENCE" ? (
      <SpeakerScreenContainer meetingId={appData.meetingId} />
    ) : (
      <ViewerScreenContainer meetingId={appData.meetingId} />
    )
  ) : (
    <WelcomeScreenContainer setAppData={setAppData} />
  );
};

export default Videosdk;
