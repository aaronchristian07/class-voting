import { HubConnectionState, type HubConnection } from "@microsoft/signalr";
import { castVote } from "../services/websocket";
import type { Vote } from "../types/types";
import { useState } from "react";

interface VotingPageProps {
    connection: HubConnection,
}

const VotingPage = ({connection}: VotingPageProps) => {
    const [desc, setDesc] = useState<string>("");
    const [votes, setVotes] = useState<number[]>([0, 0]);
    
    const Yes: Vote = "Yes";
    const No: Vote = "No";

    // subscribeToVoteResult(connection);

    if (connection.state === HubConnectionState.Connected) {
        connection.on("PublishVote", data => {
            console.log("Vote results received!");
            setVotes(data);
        });
    } else {
        console.log("have not received publish");
    }


    return (
        <div>
            <h2>Voting</h2>
            <p>Voting session title</p>
            
            <div className="button-list">
                <button onClick={() => castVote(connection, {vote: Yes, desc: desc})}>Yes</button>
                <button onClick={() => castVote(connection, {vote: No, desc: desc})}>No</button>
            </div>

            <textarea name="vote-note" id="" onChange={(e) => setDesc(e.target.value)}></textarea>

            <br />
            <h4>Results</h4>
            <p>Yes: {votes[0]} | No: {votes[1]}</p>
        </div>
    )
}

export default VotingPage;