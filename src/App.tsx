import React from "react";
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ChangeType } from "./components/ChangeType";
import { RevealAnswer } from "./components/RevealAnswer";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { Counter } from "./components/Counter";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { ChooseTeam } from "./bad-components/ChooseTeam";

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
            <hr></hr>
            {/* <DoubleHalf></DoubleHalf> */}
            <hr></hr>
            <ChooseTeam></ChooseTeam>
            <hr></hr>
            <ColoredBox></ColoredBox>
            <hr></hr>
            <ShoveBox></ShoveBox>
            <hr></hr>
            <Counter></Counter>
            <hr />
            <RevealAnswer></RevealAnswer>
            <hr />
            <StartAttempt></StartAttempt>
            <hr />
            <TwoDice></TwoDice>
            <hr />
            <ChangeType></ChangeType>
            <hr />
            <CycleHoliday></CycleHoliday>
        </div>
    );
}

export default App;
