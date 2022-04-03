import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    const [color, setColor] = useState<string>("red");
    return (
        <div>
            <Form.Group controlId="formColor">
                <Form.Check
                    inline
                    type="radio"
                    name="red"
                    label="red"
                    style={{ backgroundColor: "red" }}
                    onChange={() => setColor("red")}
                    checked={color === "red"}
                ></Form.Check>
                <Form.Check
                    inline
                    type="radio"
                    name="blue"
                    label="blue"
                    style={{ backgroundColor: "blue" }}
                    onChange={() => setColor("blue")}
                    checked={color === "blue"}
                ></Form.Check>
                <Form.Check
                    inline
                    type="radio"
                    name="green"
                    label="green"
                    style={{ backgroundColor: "green" }}
                    onChange={() => setColor("green")}
                    checked={color === "green"}
                ></Form.Check>
                <Form.Check
                    inline
                    type="radio"
                    name="orange"
                    label="orange"
                    style={{ backgroundColor: "orange" }}
                    onChange={() => setColor("orange")}
                    checked={color === "orange"}
                ></Form.Check>
                <Form.Check
                    inline
                    type="radio"
                    name="purple"
                    label="purple"
                    style={{ backgroundColor: "purple" }}
                    onChange={() => setColor("purple")}
                    checked={color === "purple"}
                ></Form.Check>
                <Form.Check
                    inline
                    type="radio"
                    name="yellow"
                    label="yellow"
                    style={{ backgroundColor: "yellow" }}
                    onChange={() => setColor("yellow")}
                    checked={color === "yellow"}
                ></Form.Check>
                <Form.Check
                    inline
                    type="radio"
                    name="gray"
                    label="gray"
                    style={{ backgroundColor: "gray" }}
                    onChange={() => setColor("gray")}
                    checked={color === "gray"}
                ></Form.Check>
                <Form.Check
                    inline
                    type="radio"
                    name="black"
                    label="black"
                    style={{ backgroundColor: "black" }}
                    onChange={() => setColor("black")}
                    checked={color === "black"}
                ></Form.Check>
                <Form.Label>You have chosen </Form.Label>
                <Form.Label
                    data-testid="colored-box"
                    style={{ backgroundColor: color }}
                >
                    {color} on.
                </Form.Label>
            </Form.Group>
        </div>
    );
}
