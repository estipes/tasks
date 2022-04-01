import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<number>(0);
    return (
        <div>
            <Form.Group controlId="formAttempts">
                <Form.Label>Current Attempts: {attempts}</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={(e) => setRequest(parseInt(e.target.value))}
                />
                <Form.Check
                    disabled={attempts === 0}
                    type="switch"
                    name="use"
                    onChange={() => setAttempts(attempts - 1)}
                ></Form.Check>
                <Form.Check
                    type="switch"
                    name="gain"
                    onChange={() =>
                        setAttempts(
                            isNaN(request) ? attempts : attempts + request
                        )
                    }
                ></Form.Check>
            </Form.Group>
        </div>
    );
}
