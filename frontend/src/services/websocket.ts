import { HubConnectionBuilder, HubConnectionState, LogLevel, type HubConnection } from "@microsoft/signalr"
import type { VoteRequestDto } from "../types/types"

export const establishWebsocket = async (): Promise<HubConnection> => {
  let connection = new HubConnectionBuilder()
    .withUrl("/hubs/vote")
    .configureLogging(LogLevel.Debug)
    .build();
  
  await connection.start()
      .catch((e) => console.error("Connection failed: ", e));
  
  return connection;
}

export const castVote = async (
  connection: HubConnection,
  req: VoteRequestDto
) =>  {
  if (connection.state === HubConnectionState.Connected) {
    console.log(`Vote casted: ${req.vote}`);
    connection.send(
      "CastVote",
      req
    )
  }
  else {
    console.error(`[CastVote] State is ${connection.state.toString()}: Cannot send request`)
  }
}

// export const subscribeToVoteResults = async (
//   connection: HubConnection,
// ) => {
  
// }