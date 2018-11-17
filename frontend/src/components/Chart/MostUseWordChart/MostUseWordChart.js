import React from 'react';
import {Polar} from 'react-chartjs-2';

const data = {
    datasets: [{
        data: [
            11,
            16,
            7,
            3,
            14
        ],
        backgroundColor: [
            '#FF6384',
            '#4BC0C0',
            '#FFCE56',
            '#E7E9ED',
            '#36A2EB'
        ],
        label: 'My dataset' // for legend
    }],
    labels: [
        'Red',
        'Green',
        'Yellow',
        'Grey',
        'Blue'
    ]
};

const mostUseWordChart = (props) => {
    return (
        <div style={{ margin: "5%"}}>
            <h2>The most frequently used term</h2>
            <Polar
                data={data}
                width={props.width}
                height={props.height}
                options={{maintainAspectRatio: false}}/>
        </div>
    )
};

export default mostUseWordChart;

