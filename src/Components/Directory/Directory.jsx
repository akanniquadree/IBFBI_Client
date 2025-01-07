import React from 'react'
import "./directory.css"
import {Link} from "react-router-dom"

export default function Directory({title}) {
  return (
    <div className="directoryCont">
        <div className="directoryWrap">
            <div className="directoryLoc">
              <Link to="/"className='directoryLink'>Home</Link>
              <span style={{color:'white', fontSize:'20px'}}>&gt; </span>
              <p style={{color:'red', fontSize:'20px'}}>{title}</p>
            </div>
            <h4 className='directoryName'>{title}</h4>
        </div>
    </div>
  )
}
