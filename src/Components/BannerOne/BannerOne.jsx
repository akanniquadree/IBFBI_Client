import React, { useState } from "react";
import "./banner.css";
import { Avatar, Divider } from "@mui/material";
export default function BannerOne() {
    const [skew, setSkew] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 20; // Scale for X-axis translation
    const y = ((e.clientY - top) / height - 0.5) * 20; // Scale for Y-axis translation

    setSkew({ x, y });
  };

  const handleMouseLeave = () => {
    setSkew({ x: 0, y: 0 }); // Reset when mouse leaves
  };
  return (
    <div className="BannerOneCont">
      <div className="BannerOneLeft" onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}>
        <img src="/Images/cardOne.png" alt="Card" className="BannerOneImage" style={{
          transform: `skew(${skew.x}deg, ${skew.y}deg)`,
        }} />
        {/* <div className="BannerOneLeftDesc">
            <h2 style={{color:'white', fontSize:'80px', fontWeight:700}}>12k</h2>
            <p style={{color:'white', fontSize:'20px', textAlign:'right' }}>Children Lives</p>
            <p style={{color:'white', fontSize:'20px', textAlign:'right'}}>We touch</p>
        </div> */}
      </div>
      <div className="BannerOneRight">
        <span className="visionDet" style={{marginBottom:'20px'}}><span className="vdet" style={{color:'red'}}>-</span>  Let's build tomorrow together</span>
        <h4 className="visionDownLeftDes">
          Breaking the Cycle of Hunger: Support Our Mission
        </h4>
        <div className="BannerOneRightDes">
            <div className="BannerOneRightDesImage"></div>
        <p className="BannerOneRightDesPara">To eradicate hunger in Oyo state and beyond by reaching out to vulnerable households struggling with hunger and malnutrition.</p>
        </div>
        <ul className="BannerOneRightList">
            <li>To act as a food bank in all zones of the state.</li>
            <li>To partner with other agencies/corporate bodies that assist people in need.</li>
            <li>To engage volunteers in community service that brings about community development.</li>
        </ul>
        <Divider sx={{margin:'50px 0 50px 0'}}/>
      
      </div>
    </div>
  );
}
