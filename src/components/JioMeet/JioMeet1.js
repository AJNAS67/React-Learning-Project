import React from "react";
import { JMRoomProvider } from "@jiomeet/hooks-sdk-web";
import { useJoin } from '@jiomeet/hooks-sdk-web';

const JioMeet1 = () => {
    const { joinMeeting, publishLocalPeerConfig, isCallStarted } = useJoin();
    const handleJoin = async () => {
		await joinMeeting({
			meetingId: '12345678',
			meetingPin: 'pqrst',
			userDisplayName: 'Rahul',
			config: { userRole: 'speaker' },
		});
	};
  return (
    <div>
      {/* <JMRoomProvider> */}
			{isCallStarted ? 'Join Success' : 'Not Join Yet'}
			<div>
				<button onClick={() => handleJoin()}>Join</button>
			</div>
		
      {/* </JMRoomProvider> */}
    </div>
  );
};

export default JioMeet1;
