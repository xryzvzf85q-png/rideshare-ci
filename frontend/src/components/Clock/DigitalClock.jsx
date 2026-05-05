'use strict';

import React, { useState, useEffect } from 'react';
import './DigitalClock.css';

const timeZones = {
    'Côte d\'Ivoire': 'Africa/Abidjan',
    'UTC': 'UTC',
    'EST': 'America/New_York',
};

const DigitalClock = () => {
    const [time, setTime] = useState({});
    const [selectedZone, setSelectedZone] = useState('Côte d\'Ivoire');

    useEffect(() => {
        const intervalId = setInterval(() => {
            updateClock();
        }, 1000);
        return () => clearInterval(intervalId);
    }, [selectedZone]);

    const updateClock = () => {
        const currentTime = new Date().toLocaleString('en-US', { timeZone: timeZones[selectedZone] });
        setTime(new Date(currentTime));
    };

    const handleZoneChange = (event) => {
        setSelectedZone(event.target.value);
    };

    return (
        <div className="clock-container">
            <h2>Digital Clock</h2>
            <div className="time-display">
                {time.toLocaleTimeString()}
            </div>
            <select onChange={handleZoneChange} value={selectedZone}>
                {Object.keys(timeZones).map(zone => (
                    <option key={zone} value={zone}>{zone}</option>
                ))}
            </select>
        </div>
    );
};

export default DigitalClock;