import React, { useState, useEffect } from 'react';
import './Main.css'
import Chart from 'chart.js/auto'
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale)

const Moisture = () => {

    const [xValues,setXValues] = useState([])
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
            setData({...data,data:res.y})
            setXValues(res.x)
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
                            labels: xValues,
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
