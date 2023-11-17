import React, { useState } from 'react';
import './Temperature.css'
import Chart from 'chart.js/auto'
import { Pie } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale)

const AQ = () => {

    const [AQI,setAQI] = useState('249')
    const [AQStatus,setAQStatus] = useState('GOOD')
    const [data,setData] = useState(
        {
            labels: ['LPG', 'Isobutane', 'Propane', 'Alcohol', 'Smoke'],
            datasets: [
                {
                label: '',
                data: [16.3, 29.2, 28.0, 41.4, 40.7],
                //   you can set indiviual colors for each bar
                //   backgroundColor: [
                //     'rgba(255, 255, 255, 0.6)',
                //     'rgba(255, 255, 255, 0.6)',
                //     'rgba(255, 255, 255, 0.6)'
                //   ],
                borderWidth: 2,
                }
            ]
        }
    )

    return (
        <div className='pageContainer'>
            <div className='systemIndicator'>
                    <h2>Air Quality Index : {AQI}</h2>
                    <h2>Air Quality Status : {AQStatus}</h2>
            </div>
            
            <div className='graphHolder'>
                <Pie
                    data={data}
                    options={{
                        plugins: {
                            title: {
                                display: true,
                                text: "Energy Consumption Split for : JUNE"
                            },
                            legend: {
                                position: 'right'
                            }
                        }
                    }}
                />
            </div>
        </div>
    )
}

export default AQ;
