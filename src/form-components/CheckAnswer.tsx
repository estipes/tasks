import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>("");
    const [isCorrect, setCorrect] = useState<boolean>(false);
    function changeAnswer(event: React.ChangeEvent<HTMLTextAreaElement>) {
        setAnswer(event.target.value);
        setCorrect(event.target.value === expectedAnswer);
    }
    return (
        <div>
            <Form.Group controlId="formAnswer">
                <Form.Label>{isCorrect ? "✔️" : "❌"}</Form.Label>
                <Form.Control
                    type="text"
                    value={answer}
                    onChange={changeAnswer}
                />
            </Form.Group>
        </div>
    );
}
