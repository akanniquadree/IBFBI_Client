import React from "react";
import "./VolunSectionOne.css";
import { Stack } from "@mui/material";
import { Favorite } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function VolunSectionOne() {
  return (
    <>
      <div className="volunCont">
        <div className="volunWrap">
          <Stack direction={{ sm: "column", md: "row" }} spacing={5}>
            <Stack
              direction={"column"}
              gap={2}
              sx={{ flex: { sm: "1 1 100%", md: "1 1 calc(50% - 20px)" } }}
            >
              <span className="visionDet" style={{ letterSpacing: "2px" }}>
                <span className="vdet" style={{ color: "red" }}>
                  -
                </span>{" "}
                Welcome to Ibadan Food Bank Initiative
              </span>
              <p style={{ color: "#7b7E86", textAlign: "justify" }}>
                Our Volunteers are the heart of the initiative. Ibadan Food Bank
                Initiative is structured to provide opportunities and operate
                through the work of volunteers. Our volunteers are fundamental
                to the success of our initiative.
              </p>
              <p style={{ color: "#7b7E86", textAlign: "justify" }}>
                They collect, sort, pack and distribute food and donations and
                remind us every day that our mission and vision could not be
                achieved without them. Whether you can volunteer once in a week,
                once in a month, once in a year; collectively or individually,
                whatever your commitment is, you help us ensure that our hungry
                families will have access to food in their time of need and our
                ultimate goal is to provide the best possible volunteer
                experience and prepare our volunteers to become zero hunger
                advocates in their respective community.
              </p>
              <Stack
                direction={{ sm: "column", md: "row" }}
                spacing={3}
                alignItems={"center"}
              >
                <img
                  src="/Images/love.png"
                  alt="love"
                  style={{ height: "100px", objectFit: "cover" }}
                />
                <h5 style={{ fontSize: "15px" }}>
                  We are saying <span style={{ color: "red" }}>THANK YOU </span>
                  for your readiness to Fight Hunger with us by donating your
                  time and resources.
                </h5>
              </Stack>
            </Stack>
            <Stack
              sx={{ flex: { sm: "1 1 100%", md: "1 1 calc(50% - 20px)" } }}
            >
              <div className="volunImage">
                <img src="/Images/volunSix.jpg" alt="volunteer" />
              </div>
            </Stack>
          </Stack>

          <Stack direction={{ sm: "column", md: "row" }}sx={{marginTop:'70px'}} spacing={5}>
            <Stack
              sx={{ flex: { sm: "1 1 100%", md: "1 1 calc(50% - 20px)" } }}
            >
              <div className="volunImage"style={{height:'550px'}}>
                <img src="/Images/volunterTwo.jpg" alt="volunteer" />
              </div>
            </Stack>
            <Stack
              direction={"column"}
              gap={2}
              sx={{ flex: { sm: "1 1 100%", md: "1 1 calc(50% - 20px)" } }}
            >
              <span
                className="visionDet"
                style={{ letterSpacing: "2px", marginBottom: "20px" }}
              >
                <span className="vdet" style={{ color: "red" }}>
                  -
                </span>{" "}
                Benefits of Volunteering with Ibadan Food Bank Initiative
              </span>
              <Stack direction={"column"} spacing={2}>
                <h4>Community Building: </h4>
                <p style={{ color: "#7b7E86", textAlign: "justify" }}>
                  Volunteering with IBFBI is an excellent way for you to build
                  team spirit, foster good relationships among volunteers and
                  make new friends.
                </p>
              </Stack>
              <Stack direction={"column"} spacing={2}>
                <h4>Boosting your Resume:</h4>
                <p style={{ color: "#7b7E86", textAlign: "justify" }}>
                  Volunteering experience will increase your chances of landing
                  a job or getting you into your preferred institutions outside
                  the country as people love to work with good people.
                </p>
              </Stack>
              <Stack direction={"column"} spacing={2}>
                <h4>Learning New Skills:</h4>
                <p style={{ color: "#7b7E86", textAlign: "justify" }}>
                  Volunteering works often differs from work done in
                  private/public businesses. By taking advantage of volunteering
                  with IBFBI, you have the chance to learn more about other
                  industries while gaining communication and team building
                  skills.
                </p>
              </Stack>
              <Stack direction={"column"} spacing={2}>
                <h4>Making an Impact: </h4>
                <p style={{ color: "#7b7E86", textAlign: "justify" }}>
                  Providing service to those in dire needs brings a sense of
                  fulfilment, happiness and pride.
                </p>
              </Stack>
              <p className="progamDesc" >
            To become a volunteer and make a positive impact, Click  <Link to="https://bit.ly/ibfbvolunteerreg" style={{color:'red'}}>Become a volunteer</Link>
            </p>
            </Stack>
          </Stack>
        </div>
      </div>
    </>
  );
}
