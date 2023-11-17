import React from "react";
import './HomePage.css'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {

    const navigate = useNavigate()
    return (
        <>
        <div className="container">
            
            <button className="homeCard" onClick={()=>navigate('/temperature')}>
                <h1>Temperature Control System</h1>
            </button>

            <button className="homeCard" onClick={()=>navigate('/moisture')}>
                <h1>Soil Moisture and Irrigation System</h1>
            </button>

            <button className="homeCard" onClick={()=>navigate('/aq')}>
                <h1>Air Quality Monitoring System</h1>
            </button>

        </div> 
        </>
    )
}
export default HomePage
