import React, { useState, useEffect } from 'react';

const LiveClock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // Update every second

        return () => clearInterval(timer); // Cleanup the timer
    }, []);

    const formattedTime = currentTime.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    return (
        <div style={{ color: 'white', marginLeft: '1010px' }}>
            <h1>Live Time Clock</h1>
            <p>Current Time: {formattedTime}</p>
        </div>
    );
};

export default LiveClock;
