import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [inProgess, setInProgress] = useState<boolean>(false);
    function addAttempts(): void {
        setAttempts(attempts + 1);
    }
    function changeInProgress(): void {
        setInProgress(!inProgess);
        inProgess === false ? setAttempts(attempts - 1) : setAttempts(attempts);
    }
    return (
        <div>
            <span>Attempts: {attempts}</span>
            <Button
                disabled={inProgess || attempts === 0}
                onClick={changeInProgress}
            >
                Start Quiz
            </Button>
            <Button disabled={inProgess} onClick={addAttempts}>
                Mulligan
            </Button>
            <Button disabled={!inProgess} onClick={changeInProgress}>
                Stop Quiz
            </Button>
        </div>
    );
}
