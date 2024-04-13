import React, { useState, useEffect } from 'react';

const AnalogClock = () => {
    const [time, setTime] = useState(new Date());
    const [randomImage, setRandomImage] = useState('');
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000); // Update time every second

        return () => clearInterval(interval); // Clean up the interval
    }, []);
    useEffect(() => {
        const imageFilenames = [
            'avatar1.png',
            'avatar2.png',
            'avatar3.png',
            'avatar4.png',
            'avatar5.png',
            'avatar6.png',
            'avatar7.png',
            'avatar8.png',
            'avatar1.png',
        ];

        const randomIndex = Math.floor(Math.random() * imageFilenames.length);
        const imagePath = `${imageFilenames[randomIndex]}`;
        setRandomImage(imagePath);
    }, []);

    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();

    const hourDeg = (hours * 30) + (minutes / 2); // 360 degrees divided by 12 hours
    const minuteDeg = minutes * 6; // 360 degrees divided by 60 minutes
    const secondDeg = seconds * 6; // 360 degrees divided by 60 seconds

    return (
        <div className="analog-clock" >
            <svg width="200" height="200">
                <circle cx="100" cy="100" r="90" stroke="grey" strokeWidth="4" fill="none" />
                {/* Numbers */}
                <image href={randomImage} x="10" y="10" width="180" height="180" />


                {[...Array(12)].map((_, index) => {
                    const numDeg = (index + 1) * 30;
                    const x = 100 + Math.sin(numDeg * (Math.PI / 180)) * 75; // Calculate x position
                    const y = 100 - Math.cos(numDeg * (Math.PI / 180)) * 75; // Calculate y position
                    return (
                        <text key={index} x={x} y={y} textAnchor="middle" alignmentBaseline="middle" fontSize="12" fill="white">
                            {index + 1}
                        </text>
                    );
                })}
                <line
                    x1="100"
                    y1="100"
                    x2="100"
                    y2="55"
                    transform={`rotate(${hourDeg}, 100, 100)`}
                    stroke="blue"
                    strokeWidth="6"
                />
                <line
                    x1="100"
                    y1="100"
                    x2="100"
                    y2="40"
                    transform={`rotate(${minuteDeg}, 100, 100)`}
                    stroke="green"
                    strokeWidth="4"
                />
                <line
                    x1="100"
                    y1="100"
                    x2="100"
                    y2="30"
                    transform={`rotate(${secondDeg}, 100, 100)`}
                    stroke="red"
                    strokeWidth="2"
                />
                <circle cx="100" cy="100" r="3" fill="white" />
            </svg>
        </div>
    );
};

export default AnalogClock;
