import React from 'react'
import './Landing.css'

import {Link} from 'react-router-dom'
const Landing = () => {
    return (
        <div> 
            <div className="tagline">
            <h1>Hey There ! Keep Growing with TPM World Services</h1>
            </div>
             <div className="btn">
             <Link to='/pdf'>
                <button className="box_inst"> View Pdf</button>
                </Link>
                </div>   
        </div>
    )
}
export default Landing;