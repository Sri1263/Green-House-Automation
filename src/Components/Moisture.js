import React, { useState } from 'react';
import './Temperature.css'
import Chart from 'chart.js/auto'
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale)

const Moisture = () => {

    const [moisture,setMoisture] = useState('72 %')
    const [system,setSystem] = useState('ON')
    const [data,setData] = useState(
        {
            label: '',
            data: [73.6, 50.2, 56.3, 60.6, 75.5, 72.9, 82.6, 51.9, 55.8, 69.2, 56.5, 63.5, 76.7, 58.5, 61.9, 53.1, 51.4, 58.7, 70.3, 54.1, 55.2, 82.3, 62.2, 79.0, 67.2, 54.1, 77.4, 62.6],
            borderWidth: 2,
            hidden: false,
        }
    )

    return (
        <div className='pageContainer'>
            <div className='systemIndicator'>
                    <h2>Current Soil Moisture : {moisture}</h2>
                    <h2>Irrigation System Status : {system}</h2>
            </div>
            
            <div className='graphHolder'>
            <Line
                    data={{
                            labels: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
                            datasets: [ data ],
                        }}
                    options={{
                            plugins: {
                                        title: {    display: true,  },
                                        legend: {   display: false  }
                                    }
                        }}
                />
            </div>
        </div>
    );
}

export default Moisture;
