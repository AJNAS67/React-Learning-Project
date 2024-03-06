import React, { useEffect, useState } from "react";
import axios from "axios";
import { EventManager, JMClient } from '@jiomeet/core-sdk-web';
const JioMeet = () => {
  let isAudioMuted = true;
  let isVideoMuted = true;
  const jmClient = new JMClient();
  const unsubscribe = EventManager.onEvent(async(eventInfo) => {
    const { data } = eventInfo;
    switch (eventInfo.type) {
      case 'PEER_JOINED':
        const { remotePeers:any } = data;
        remotePeers.forEach((remotePeer) => {
          console.log('A new peer has joined the meeting:', remotePeer);
        });
        break;
      case 'PEER_UPDATED':
        const { remotePeer, updateInfo } = data;
        const { action, value } = updateInfo;
        if (action === 'AUDIO_MUTE' && value === false) {
          // Subscribe to the remote peer's audio track
          const audioTrack = await jmClient.subscribeMedia(remotePeer, 'audio');
          // Play the track on web page
          audioTrack.play();
        } else if (action === 'VIDEO_MUTE') {
          if (value === false) {
            // Subscribe to the remote peer's video track
            const videoTrack = await jmClient.subscribeMedia(remotePeer, 'video');
            // Play the track on web page
            videoTrack.play('divId');
          }
        } else if (action === 'SCREEN_SHARE') {
          if (value === true) {
            // Subscribe to the remote peer's screen share track
            const screenShareTrack = await jmClient.subscribeMedia(remotePeer, 'screenShare');
            // Play the track on web page
            screenShareTrack.play('divId');
          }
        }
        break;
      case 'PEER_LEFT':
        const { remotePeers } = data;
        remotePeers.forEach((remotePeer) => {
          console.log('A peer has left the meeting:', remotePeer);
        });
        break;
      default:
        break;
    }
  });
  // Call the joinMeeting method to start the meeting
async function joinMeeting() {
	try {
		const userId = await jmClient.joinMeeting({
			meetingId: '2455737683',
			meetingPin: 'AsD3w',
			userDisplayName: 'John',
			config: {
				userRole: 'speaker',
			},
		});
		console.log('Joined the meeting with user ID:', userId);
	} catch (error) {
		console.error('Failed to join the meeting:', error);
	}
}
  

  return (
    <div>
      <button onClick={joinMeeting}>Join</button>
    </div>
    
  );
};

export default JioMeet;
