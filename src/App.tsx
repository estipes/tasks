import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Hello World. UD CISC275 with React Hooks and TypeScript. Ethan
                Stipes.
            </header>
            <h1>Otter Heading Should Be Working.</h1>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: 100,
                                height: 1000,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <ul>
                            <li>Otters</li>
                            <li>Dogs</li>
                            <li>Jaguars</li>
                        </ul>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/0/02/Sea_Otter_%28Enhydra_lutris%29_%2825169790524%29_crop.jpg"
                            alt="A picture of an Otter"
                        />
                        <Button onClick={() => console.log("Hello World!")}>
                            Log Hello World!
                        </Button>
                        <p>
                            Edit <code>src/App.tsx</code> and save. This page
                            automatically reload.
                        </p>
                    </Col>
                    <Col>
                        <div
                            style={{
                                width: 100,
                                height: 1000,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
