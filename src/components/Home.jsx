import React, { useState } from "react";
import styled from 'styled-components';
import Timer from "./Timer"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    min-height: 100vh;
    background: #f8f9fa;
    `;

    const Title = styled.h1`
    font-size: 3rem;
    color: #343a40;
    margin-bottom: 1rem;

    `

const Home = () => {

    const [isRunning, setIsRunning] = useState(true);

    const handleStart = () => {
        setIsRunning(true);
    }

    const handleStop = () => {
        setIsRunning(false);
    }

    const toggleTimer = () => {
        setIsRunning(!isRunning);
    }
    return (
        <Container>
        <Title>Home</Title>
        <Timer isRunning = {isRunning}/>
        {/* <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button> */}
        <button onClick={toggleTimer}>{isRunning?'Stop' : 'Start'}</button>
        </Container>
    );
}

export default Home;