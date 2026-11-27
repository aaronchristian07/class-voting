import type { HubConnection } from "@microsoft/signalr";
import { castVote } from "../services/websocket";
import type { Vote } from "../types/types";
import { useState } from "react";

interface VotingPageProps {
    connection: HubConnection,
}

const VotingPage = ({connection}: VotingPageProps) => {
    const Yes: Vote = "Yes";
    const No: Vote = "No";

    const [desc, setDesc] = useState<string>("");

    return (
        <div>
            <h2>Voting</h2>
            <p>Voting session title</p>
            
            <div className="button-list">
                <button onClick={() => castVote(connection, {vote: Yes, desc: desc})}>Yes</button>
                <button onClick={() => castVote(connection, {vote: No, desc: desc})}>No</button>
            </div>

            <textarea name="vote-note" id="" onChange={(e) => setDesc(e.target.value)}></textarea>
        </div>
    )
}

export default VotingPage;