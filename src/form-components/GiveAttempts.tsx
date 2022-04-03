import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

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
            </Form.Group>
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={attempts === 0}
            >
                use
            </Button>
            <Button
                onClick={() =>
                    setAttempts(isNaN(request) ? attempts : attempts + request)
                }
            >
                gain
            </Button>
        </div>
    );
}
