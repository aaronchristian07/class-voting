import { useState } from "react";
import LoadingPage from "./LoadingPage";
import VotingPage from "./VotingPage";
import { establishWebsocket } from "../services/websocket";

const State = {
    Voting: "Voting",
    Loading: "Loading"
} as const;

type State = typeof State[keyof typeof State];

let connection = await establishWebsocket();
    
const ClientPage = () => {
    const [currentState, setCurrentState] = useState<State>(State.Loading);

    const toggleState = () => {
        if (currentState === State.Loading) {
            setCurrentState(State.Voting);
        } else {
            setCurrentState(State.Loading);
        }
    }

    return (
        <div>
            {currentState === State.Loading
                ? (
                    <LoadingPage/>
                )
                : (
                    <VotingPage connection={connection} />
                )
            }

            <button onClick={toggleState}>Toggle State</button>
        </div>
    )
}

export default ClientPage;