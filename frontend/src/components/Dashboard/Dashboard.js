import React from 'react';
import MostUseWordChart from '../Chart/MostUseWordChart/MostUseWordChart';
import PartOfSpeechChart from '../Chart/PartOfSpeechChart/PartOfSpeechChart';

const dashboard = () => {
    const size = 350;
    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center"}}>
            <MostUseWordChart width={size + 50} height={size}/>
            <PartOfSpeechChart width={size + 50} height={size}/>
        </div>
    )
};

export default dashboard;