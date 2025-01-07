import React from "react";
import "./program.css";
import { Stack } from "@mui/material";

export default function ProgramComponent() {
  return (
    <div className="programCont">
      <div className="programWrap">
        <Stack direction={{ sm: "column", md: "row" }} spacing={4}>
          <div className="progamImage">
            <img src="/Images/programCom.jpg" alt="program" />
          </div>
          <div className="progamDetail">
            <h3 className="progamTile">FOCDEP PROGRAM</h3>
            <p className="progamDesc">
              Our Food Comfortability Development Program is a Community
              Outreach where we identify vulnerable households in need and
              distribute our Box of Love containing several food items that will
              last them for few days.
            </p>
            
          </div>
        </Stack>
        <Stack direction={{ sm: "column", md: "row" }} spacing={4}>
          <div className="progamImage">
            <img src="/Images/programEdu.jpg" alt="program" />
          </div>
          <div className="progamDetail">
            <h3 className="progamTile">IBADANEDUFEED PROGRAM</h3>
            <p className="progamDesc">
              Ibadan Education Feeding Program is aimed at distributing food and
              other related food products to students in low income schools with
              rural primary school and tertiary institution as target
              beneficiaries.
            </p>
            <div style={{display:'flex',flexDirection:'column', gap:'10px'}}>
              <h6 className="progamDescObj">Objectives</h6>
              <ul className="progamDescObjList">
                <li>To sustain school attendance</li>
                <li>To reduce the rate of out of school children</li>
                <li>To increase students ability to comprehend in class</li>
                <li>To develop their health while ending malnutrition</li>
              </ul>
            </div>
          </div>
        </Stack>
        <Stack direction={{ sm: "column", md: "row" }} spacing={4}>
          <div className="progamImage">
            <img src="/Images/programHunger.jpg" alt="program" />
          </div>
          <div className="progamDetail">
            <h3 className="progamTile">IBADAN HUNGER WALK</h3>
            <p className="progamDesc">
              Ibadan Hunger Walk Campaign is a yearly event walk bringing all
              NGOs, CBOs, CSOs, SDG Advocates, Humanitarians and Volunteers
              together and targeted towards raising funds, creating awareness
              about zero hunger and humanitarian services. On this day,
              Volunteers walk in the footsteps of the hungry and also distribute
              Food relief items to Vulnerable Families.
            </p>
            <p className="progamDesc">
            To register for this year Hunger walk, Click on the link <a href="https://bit.ly/ibhwalk">Link</a>
            </p>
          </div>
        </Stack>
      </div>
    </div>
  );
}
