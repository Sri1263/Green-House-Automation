import React, { useState } from 'react';
import './Temperature.css'
import Chart from 'chart.js/auto'
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale)

const Temperature = async () => {

    const [temp,setTemp] = useState('22 *C')
    const [system,setSystem] = useState('current system on  ')
    const [data,setData] = useState(
        {
            label: '',
            data: [17.7, 21.8, 17.7, 20.5, 21.9, 21.6, 19.3, 22.1, 20.0, 21.4, 18.3, 21.6, 17.7, 21.4, 21.4, 18.4, 19.7, 19.4, 18.1, 18.7, 22.8, 20.0, 22.9, 17.4, 21.3, 17.3, 22.0, 19.6],
            borderWidth: 2,
            hidden: false,
        }
    )

    let res = await fetch( 'http://gha2023.pythonanywhere.com/temp' , { method: 'GET' } )
    res = await res.json()
    // setData({...data,data:})

    return (
        <div className='pageContainer'>
            <div className='systemIndicator'>
                    <h2>Current Temperature : {temp}</h2>
                    <h2>Temperature System Status : {system}</h2>
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

export default Temperature;
