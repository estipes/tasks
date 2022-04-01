import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const [answer, setAnswer] = useState<string>(options[0]);
    function updateAnswer(event: React.ChangeEvent<HTMLSelectElement>) {
        setAnswer(event.target.value);
    }
    return (
        <div>
            <Form.Group controlId="formMCQuestion">
                <Form.Label>
                    {answer === expectedAnswer ? "✔️" : "❌"}
                </Form.Label>
                <Form.Select value={answer} onChange={updateAnswer}>
                    {options.map((opti: string) => (
                        <option key={opti} value={opti}>
                            {opti}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
        </div>
    );
}
