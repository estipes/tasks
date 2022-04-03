import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [isStudent, setStudent] = useState<boolean>(true);
    const [inEditMode, setEditMode] = useState<boolean>(false);
    return (
        <div>
            <Form.Check
                type="switch"
                name="setEditMode"
                onChange={() => setEditMode(!inEditMode)}
            ></Form.Check>
            <Form.Label>
                {name} is {isStudent ? "a student" : "not a student"}
            </Form.Label>
            {inEditMode && (
                <Form.Group controlId="formEditMode">
                    <Form.Control
                        type="string"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        disabled={!inEditMode}
                    />
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="student?"
                        checked={isStudent}
                        onChange={() => setStudent(!isStudent)}
                        disabled={!inEditMode}
                    ></Form.Check>
                </Form.Group>
            )}
        </div>
    );
}
