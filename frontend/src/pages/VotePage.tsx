import { useState } from "react";

const State = {
    Voting: "Voting",
    Loading: "Loading"
} as const;

type State = typeof State[keyof typeof State];

const VotePage = () => {
    const [currentState, setCurrentState] = useState<State>(State.Loading);

    return (
        <div>
            {currentState === State.Loading
                ? (
                    <p>Loading</p>
                )
                : (
                    <p>Voting</p>
                )
            }
        </div>
    )
}

export default VotePage;