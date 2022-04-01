import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);
    const [inEditMode, setEditMode] = useState<boolean>(false);
    return (
        <div>
            <Form.Group controlId="formEditMode">
                <Form.Label>
                    {name} is {isStudent ? "a student" : "is not a student"}
                </Form.Label>
                <Form.Control
                    disabled={inEditMode === false}
                    type="string"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <Form.Check
                    disabled={inEditMode === false}
                    type="switch"
                    name="setStudent"
                    onChange={() => setStudent(!isStudent)}
                ></Form.Check>
                <Form.Check
                    type="switch"
                    name="setEditMode"
                    onChange={() => setEditMode(!inEditMode)}
                ></Form.Check>
            </Form.Group>
        </div>
    );
}
