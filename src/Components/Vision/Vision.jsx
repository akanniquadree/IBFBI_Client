import React from "react";
import "./vision.css";

export default function Vision() {
  return (
    <>
      <div className="visionCont">
        <div className="visionUp">
          <div style={{ display: "flex", alignItems: "flex-end" }}>
            <h2 className="visionName"> Our Vision</h2>
          </div>
          <span className="visionDet">
            <span className="vdet" style={{color:'red'}}>-</span> Eradicating Hunger, Empowering Lives
          </span>
        </div>
        <div className="visionDown">
          <div className="visionDownLeft">
            <h4 className="visionDownLeftDes">
              To be a leading NGO aimed at eradicating hunger by providing
              nutritious and sufficient food for all
            </h4>
            <p className="visionDownLeftPara">
              Ibadan Food Bank Initiative (IBFBI) is a charity/non-profitable
              organization that is committed to sharing love and eradicating
              hunger in Oyo state and beyond by reaching out to those struggling
              with hunger and malnutrition
            </p>
          </div>
          <div className="visionDownRight">
            <div className="visionDownRightBox"style={{borderBottom:'#433E3933 dotted 1px'}}>
              <h5 className="visionDownRightName">15+</h5>
              <p className="visionDownRightDesc" >Communities Reached</p>
            </div>
            <div className="visionDownRightBox"style={{borderLeft:'#433E3933 dotted 1px'}}>
              <h5 className="visionDownRightName">500+</h5>
              <p className="visionDownRightDesc">Beneficiaries Impacted</p>
            </div>
            <div className="visionDownRightBox" >
              <h5 className="visionDownRightName"style={{marginTop:'30px'}}>250+</h5>
              <p className="visionDownRightDesc">Registered Volunteers</p>
            </div>
            <div className="visionDownRightBox" style={{borderLeft:'#433E3933 dotted 1px',borderTop:'#433E3933 dotted 1px'}}>
              <h5 className="visionDownRightName"style={{marginTop:'30px'}}>20+</h5>
              <p className="visionDownRightDesc">NGO Partners</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
