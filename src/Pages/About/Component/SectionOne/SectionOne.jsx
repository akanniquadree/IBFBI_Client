import React from "react";
import "./sectionOne.css";
import { Paper, Stack } from "@mui/material";
import BannerFour from "../../../../Components/BannerFour/BannerFour";

export default function SectionOne() {
  return (
    <>
      <div className="AboutSectionOne">
        <div className="AboutSectionOneWrap">
          <div className="AboutSectionOneImg">
            <img src="/Images/about.jpg" alt="about" />
          </div>
          <div className="AboutSectionDetail">
            <Stack direction={"column"} sx={{ zIndex: 2 }}>
              <h4 style={{ color: "white", fontSize: "25px" }}>
                About <b style={{ color: "red" }}>US</b>
              </h4>
              <p
                style={{ color: "white", marginTop: "15px", fontSize: "20px" }}
              >
                Ibadan Food Bank Initiative (IBFBI) is a charity/non-profitable
                organization that is committed to sharing love and eradicating
                hunger in Oyo state and beyond by reaching out to those
                struggling with hunger and malnutrition.
              </p>
            </Stack>
            <Stack direction={"column"} sx={{ zIndex: 2 }}>
              <h4 style={{ color: "white", fontSize: "25px" }}>
                <b style={{ color: "red" }}>Our </b> Vision
              </h4>
              <p
                style={{ color: "white", marginTop: "15px", fontSize: "20px" }}
              >
                To be a leading NGO aim at eradicating hunger by providing
                nutritious and sufficient food for all
              </p>
            </Stack>
          </div>
          <div className="AboutSectionValueCont">
            <h3 style={{ color: "white", fontSize: "35px" }}>
              Our Core <b style={{ color: "red" }}>Values</b>
            </h3>
            <div className="AboutSectionValue">
              <Paper elevation={1} className="AboutSectionValueList">
                <div className="AboutSectionValueListItem AboutCore">
                  <h5 style={{ color: "red", fontSize: "17px" }}>Commitment</h5>
                </div>

                <div className="AboutSectionValuehidden">
                  <div
                    className="AboutSectionValueListItem"
                    style={{ justifyContent: "center" }}
                  >
                    <h5 style={{ color: "red", fontSize: "17px" }}>
                      Commitment
                    </h5>
                  </div>
                  <p>
                    We are dedicated and committed in ensuring that no one goes
                    to bed hungry.
                  </p>
                </div>
              </Paper>
              <Paper elevation={1} className="AboutSectionValueList">
                <div className="AboutSectionValueListItem AboutCore">
                  <h5 style={{ color: "red", fontSize: "17px" }}>Compassion</h5>
                </div>

                <div className="AboutSectionValuehidden">
                  <div
                    className="AboutSectionValueListItem"
                    style={{ justifyContent: "center" }}
                  >
                    <h5 style={{ color: "red", fontSize: "17px" }}>
                      Compassion
                    </h5>
                  </div>
                  <p>We are driven by empathy to reach out to the hungry.</p>
                </div>
              </Paper>
              <Paper elevation={1} className="AboutSectionValueList">
                <div className="AboutSectionValueListItem AboutCore">
                  <h5 style={{ color: "red", fontSize: "17px" }}>
                    Productivity
                  </h5>
                </div>

                <div className="AboutSectionValuehidden">
                  <div
                    className="AboutSectionValueListItem"
                    style={{ justifyContent: "center" }}
                  >
                    <h5 style={{ color: "red", fontSize: "17px" }}>
                      Productivity
                    </h5>
                  </div>
                  <p>
                    We are joyful and excited seeing that no one is hungry in
                    our society.
                  </p>
                </div>
              </Paper>
              <Paper elevation={1} className="AboutSectionValueList">
                <div className="AboutSectionValueListItem AboutCore">
                  <h5 style={{ color: "red", fontSize: "17px" }}>
                    Partnership
                  </h5>
                </div>

                <div className="AboutSectionValuehidden">
                  <div
                    className="AboutSectionValueListItem"
                    style={{ justifyContent: "center" }}
                  >
                    <h5 style={{ color: "red", fontSize: "17px" }}>
                      Partnership
                    </h5>
                  </div>
                  <p>
                    We partner with other (NGOs ,Agencies, and Corporate bodies)
                    who share our goal of zero hunger initiative.
                  </p>
                </div>
              </Paper>
              <Paper elevation={1} className="AboutSectionValueList">
                <div
                  style={{ height: "44px" }}
                  className="AboutSectionValueListItem AboutCore"
                >
                  <h5
                    style={{
                      color: "red",
                      fontSize: "17px",
                      textAlign: "center",
                    }}
                  >
                    Transparency and Accountability
                  </h5>
                </div>

                <div className="AboutSectionValuehidden">
                  <div
                    style={{ height: "44px", justifyContent: "center" }}
                    className="AboutSectionValueListItem"
                  >
                    <h5
                      style={{
                        color: "red",
                        fontSize: "17px",
                        textAlign: "center",
                      }}
                    >
                      Transparency and Accountability
                    </h5>
                  </div>
                  <p>
                    We are open and accountable to every resources committed
                    into our care.
                  </p>
                </div>
              </Paper>
              <Paper elevation={1} className="AboutSectionValueList">
                <div className="AboutSectionValueListItem AboutCore">
                  <h5 style={{ color: "red", fontSize: "17px" }}>Excellence</h5>
                </div>

                <div className="AboutSectionValuehidden">
                  <div
                    className="AboutSectionValueListItem"
                    style={{ justifyContent: "center" }}
                  >
                    <h5 style={{ color: "red", fontSize: "17px" }}>
                      Excellence
                    </h5>
                  </div>
                  <p>
                    We challenge ourselves to achieve greater learning and
                    impact, with the aim of advancing our mission as effectively
                    as possible.
                  </p>
                </div>
              </Paper>
            </div>
          </div>
          <h3 style={{ color: "white", fontSize: "35px" }}>
              Our <b style={{ color: "red" }}> Mission</b>
            </h3>
          <BannerFour
          name={"Our Mission"}
            paraOne={
              "To eradicate hunger in Oyo state and beyond by reaching out to vulnerable households struggling with hunger and malnutrition."
            }
            paraTwo={"To act as a food bank in all zones of the state."}
            paraThree={"To partner with other agencies or corporate bodies that assist people in need."}
            paraFour={"To engage volunteers in community service that brings about community development"}
          />
        </div>
      </div>
    </>
  );
}
