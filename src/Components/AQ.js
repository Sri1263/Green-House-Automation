import React, { useState, useEffect } from 'react';
import './Temperature.css'
import Chart from 'chart.js/auto'
import { Pie } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale)

const AQ = () => {

    const [AQI,setAQI] = useState()
    const [AQStatus,setAQStatus] = useState('')
    const [data,setData] = useState(
        {
            label: '',
            data: [],
            //   you can set indiviual colors for each bar
            //   backgroundColor: [
            //     'rgba(255, 255, 255, 0.6)',
            //     'rgba(255, 255, 255, 0.6)',
            //     'rgba(255, 255, 255, 0.6)'
            //   ],
            borderWidth: 2,
        }
    )

    useEffect(() => {
        const fetchData = async () => {

            let res = await fetch( 'http://gha2023.pythonanywhere.com/aq-data' , { method: 'GET' } )
            res = await res.json()
            setAQI(res.AQI)
            setAQStatus(res.AQStatus)
            setData({...data,data:res.points})

        }
        fetchData()
    }, []);

    return (
        <div className='pageContainer'>
            <div className='systemIndicator'>
                    <h2>Air Quality Index : {AQI}</h2>
                    <h2>Air Quality Status : {AQStatus}</h2>
            </div>
            
            <div className='pieChartHolder'>
                <Pie
                    data={{
                        labels: ['LPG', 'Isobutane', 'Propane', 'Alcohol', 'Smoke'],
                        datasets: [ data ]
                    }}
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
