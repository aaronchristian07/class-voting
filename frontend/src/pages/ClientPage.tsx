import { useState } from "react";
import LoadingPage from "./LoadingPage";
import VotingPage from "./VotingPage";

const State = {
    Voting: "Voting",
    Loading: "Loading"
} as const;

type State = typeof State[keyof typeof State];

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
                    <VotingPage/>
                )
            }

            <button onClick={toggleState}>Toggle State</button>
        </div>
    )
}

export default ClientPage;