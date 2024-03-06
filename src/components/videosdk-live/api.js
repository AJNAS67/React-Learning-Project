export const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiIyMjg5ZDRkZC03NmJhLTQ5NTktYmQyNC1hODY4YjJkYTk1YjkiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwOTExODA2NCwiZXhwIjoxNzA5NzIyODY0fQ.pa_MHdCHwFNiMTRKwSDwSDpGsNkCYJvT2_U5rwDvRaM";

export const createNewRoom = async () => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${authToken}`,
      "Content-Type": "application/json",
    },
  });

  const { roomId } = await res.json();
  return roomId;
};
