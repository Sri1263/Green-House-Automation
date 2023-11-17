import React, { useState, useEffect } from 'react';
import './Temperature.css'
import Chart from 'chart.js/auto'
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale)

const Moisture = () => {

    const [moisture,setMoisture] = useState('')
    const [system,setSystem] = useState('')
    const [data,setData] = useState(
        {
            label: '',
            data: [],
            borderWidth: 2,
            hidden: false,
        }
    )

    useEffect(() => {
        const fetchData = async () => {

            let res = await fetch( 'http://gha2023.pythonanywhere.com/irrigation-data' , { method: 'GET' } )
            res = await res.json()
            setSystem(res.status)
            setMoisture(res.moisture_level)
            setData({...data,data:res.points})

        }
        fetchData()
    }, []);

    return (
        <div className='pageContainer'>
            <div className='systemIndicator'>
                    <h2>Current Soil Moisture-Level : {moisture} %</h2>
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
