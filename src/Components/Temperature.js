import React, { useEffect, useState } from 'react';
import './Main.css'
import Chart from 'chart.js/auto'
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale)

const Temperature = () => {

    const [xValues,setXValues] = useState([])
    const [temp,setTemp] = useState('')
    const [system,setSystem] = useState('')
    const [data,setData] = useState(
        [
            {
                label: ' Temperature',
                data: [],
                borderWidth: 2,
                hidden: false,
            },
            {
                label: ' Humidity',
                data: [],
                borderWidth: 2,
                hidden: false,
            }
        ]
    )

    useEffect(() => {
        const fetchData = async () => {
            
            let res = await fetch( 'http://gha2023.pythonanywhere.com/temp-data' , { method: 'GET' } )
            res = await res.json()
            setTemp(res.temperature)            
            setSystem(res.system_on)
            setData([{...data[0],data:res.y1},{...data[1],data:res.y2}])
            setXValues(res.x)
        }
        fetchData()
    }, []);

    return (
        <div className='pageContainer'>
            <div className='systemIndicator'>
                    <h2>Current Temperature : {temp} *C</h2>
                    <h2>Temperature System Status : {system}</h2>
            </div>
            
            <div className='graphHolder'>
            <Line
                    data={{
                            labels: xValues,
                            datasets: data,
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

export default Temperature;
