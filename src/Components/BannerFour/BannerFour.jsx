import { Stack } from "@mui/material";
import React from "react";
import "./BannerFour.css";

export default function BannerFour({
  paraOne,
  paraTwo,
  paraThree,
  paraFour,
  title,
}) {
  return (
    <>
      <div className="bannerTwoCont">
        <div className="bannerTwoUp">
          <div className="bannerTwoUpLeft">
            {title && (
              <span className="visionDet" style={{ letterSpacing: "2px" }}>
                <span className="vdet" style={{ color: "red" }}>
                  -
                </span>{" "}
                We Love What we do
              </span>
            )}
            {title && (
              <h4 className="visionDownLeftDes" style={{ marginTop: "20px" }}>
                We are determined to End Food Insecurity in our Society.
              </h4>
            )}
            {title && (
              <p style={{ marginTop: "20px" }}>
                We offer a streamlined process designed to simplify the steps
                for those who are eager to volunteer their time and skills.
              </p>
            )}
          </div>
          <div className="bannerTwoUpLeft"></div>
        </div>
      </div>
      <div className="bannerFourCont">
        <Stack direction={"column"} spacing={4} className="bannerFourWrap">
          <div className="bannerFourImage">
            <img src="/Images/icon-1.png" alt="" className="bannerFourImg" />
          </div>
          {title && <h4 className="bannerFourTitle">Community Inspection</h4>}
          <p style={{ textAlign: "justify" }}>{paraOne}</p>
        </Stack>
        <Stack direction={"column"} spacing={4} className="bannerFourWrap">
          <div className="bannerFourImage">
            <img src="/Images/icon-2.png" alt="" className="bannerFourImg" />
          </div>
          {title && <h4 className="bannerFourTitle">Precious Moments</h4>}
          <p style={{ textAlign: "justify" }}>{paraTwo}</p>
        </Stack>
        <Stack direction={"column"} spacing={4} className="bannerFourWrap">
          <div className="bannerFourImage">
            <img src="/Images/icon-3.png" alt="" className="bannerFourImg" />
          </div>
          {title && <h4 className="bannerFourTitle">Dedicated Volunteers</h4>}
          <p style={{ textAlign: "justify" }}>{paraThree}</p>
        </Stack>
        <Stack direction={"column"} spacing={4} className="bannerFourWrap">
          <div className="bannerFourImage">
            <img src="/Images/icon-4.png" alt="" className="bannerFourImg" />
          </div>
          {title && <h4 className="bannerFourTitle">Make Them Happy</h4>}
          <p style={{ textAlign: "justify" }}>{paraFour}</p>
        </Stack>
      </div>
    </>
  );
}
