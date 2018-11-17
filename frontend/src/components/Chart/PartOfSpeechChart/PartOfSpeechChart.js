import React from 'react';
import {Doughnut} from 'react-chartjs-2';

const data = {
    labels: [
        'Red',
        'Green',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

const partOfSpeechChart = (props) => {
    return (
        <div style={{ margin: "5%"}}>
            <h2>The most use part of speech</h2>
            <Doughnut
                data={data}
                width={props.width}
                height={props.height}
                options={{maintainAspectRatio: false}}/>
        </div>
    )
};

export default partOfSpeechChart;
