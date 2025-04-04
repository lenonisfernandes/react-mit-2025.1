import React, { useState } from "react";
import Timer from "./Timer"

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
        <>
        <h1>Home</h1>
        <Timer isRunning = {isRunning}/>
        {/* <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button> */}
        <button onClick={toggleTimer}>{isRunning?'Stop' : 'Start'}</button>
        </>
    );
}

export default Home;