import React from 'react'


import {Link} from 'react-router-dom'
const Landing = () => {
    return (
        <div>
             <Link to='/pdf'>
                <button className="box_inst"> View Pdf</button>
                </Link>
        </div>
    )
}
export default Landing;