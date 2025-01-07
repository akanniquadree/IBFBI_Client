import React from "react";
import "./partner.css";
import { Box, Button, Stack } from "@mui/material";
import {Link} from 'react-router-dom'

export default function PartnerSectionOne() {
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
                Becoming a Partner
              </span>
              <p style={{ color: "#7b7E86", textAlign: "justify" }}>
                Becoming a Partner As an impactful partnership organization, we
                bring diverse set of stakeholders together to take some of the
                most pressing challenges of poverty and hunger. Our corporate
                partnerships link the entrepreneurial spirit and expertise of
                the private sector with the economic and social objectives of
                the initiative. Our partnerships with corporate bodies,
                agencies, foundations, membership organizations, churches and
                mosques will make a huge difference in the effort to eradicate
                hunger in our society..
              </p>
              <span className="visionDet" style={{ letterSpacing: "2px" }}>
                <span className="vdet" style={{ color: "red" }}>
                  -
                </span>{" "}
                How can you help ?
              </span>
              <ul className="progamDescObjList">
                <li>Support our community outreach project</li>
                <li>
                  Involve your company through corporate social responsibility
                  and employee engagement by volunteering to work with Ibadan
                  Food Bank.
                </li>
              </ul>
              <p style={{ color: "#7b7E86", textAlign: "justify" }}>For More Information<Button sx={{color:'red'}}><Link to='/contact' style={{color:'red', textDecoration:'none'}}>Contact Us</Link></Button></p>
            </Stack>
            <Stack
              sx={{ flex: { sm: "1 1 100%", md: "1 1 calc(50% - 20px)" } }}
            >
              <div className="volunImage">
                <img src="/Images/volunterOne.jpg" alt="volunteer" />
              </div>
            </Stack>
          </Stack>
          <div className="partnerCat">
            <h2>Categories of PartnerShip</h2>
          </div>
          <div className="bannerFourCont">
            <Stack direction={"column"} spacing={4} className="bannerFourWrap">
              <div className="bannerFourImage">
                <img
                  src="/Images/icon-1.png"
                  alt=""
                  className="bannerFourImg"
                />
              </div>
              <h4 className="bannerFourTitle">Corporate partnership</h4>
            </Stack>
            <Stack direction={"column"} spacing={4} className="bannerFourWrap">
              <div className="bannerFourImage">
                <img
                  src="/Images/icon-2.png"
                  alt=""
                  className="bannerFourImg"
                />
              </div>
              <h4 className="bannerFourTitle">
                Entertainers/Celebrities Partnership
              </h4>
            </Stack>
            <Stack direction={"column"} spacing={4} className="bannerFourWrap">
              <div className="bannerFourImage">
                <img
                  src="/Images/icon-3.png"
                  alt=""
                  className="bannerFourImg"
                />
              </div>

              <h4 className="bannerFourTitle">Non-Food partnership</h4>
            </Stack>
            <Stack direction={"column"} spacing={4} className="bannerFourWrap">
              <div className="bannerFourImage">
                <img
                  src="/Images/icon-4.png"
                  alt=""
                  className="bannerFourImg"
                />
              </div>
              <h4 className="bannerFourTitle"> Government partnership</h4>
            </Stack>
          </div>
          <Stack
            direction={"column"}
            spacing={4}
            useFlexGap
            sx={{ flexWrap: "wrap" }}
          >
            <Stack
              direction={{ sm: "column", md: "row" }}
              className="partCatList"
              spacing={3}
            >
              <Box className="partCartImage"sx={{flex:{sm:'1 1 100%',md:'1 1 50%'}}} >
                <img src="/Images/helpOne.jpg" alt="Cat" />
              </Box>

              <Stack direction={"column"} sx={{flex:{sm:'1 1 100%',md:'1 1 50%'}}}>
                <h4>Corporate Partnership</h4>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <h6 className="progamDescObj">Objectives</h6>
                  <ul className="progamDescObjList">
                    <li>
                      Your CSR activities will be showcased through our active
                      social media presence on Instagram, Twitter, Facebook and
                      LinkedIn.
                    </li>
                    <li>
                      Partnering with IBFBI helps to improve sales and thereby
                      increase turnover at the long run through brand loyalty
                      and promotion.
                    </li>
                    <li>
                      Your organization will be able to carry out effective
                      humanitarian services by strengthening local communities
                      and eradicating hunger.
                    </li>
                    <li>
                      Giving back to the community through IBFB will help your
                      organization build stronger relationships with your
                      existing clients/customers (and gain new ones) employees
                      and peers.
                    </li>
                    <li>
                      Your organization will be featured in our annual report.
                    </li>
                    <li>
                      Your staffs have the avenue to volunteer their time for
                      humanitarian works and also providing them the opportunity
                      to have an interface with indigent communities outside
                      walls of the office environment.
                    </li>
                    <li>
                      Your organization get the opportunity to work with a team
                      of compassionate and committed volunteers at IBFB that
                      will enhance the process of getting food relief items to
                      vulnerable households whilst unlocking potential industry
                      opportunities in your sector.
                    </li>
                  </ul>
                </div>
              </Stack>
            </Stack>
            <Stack
              direction={{ sm: "column", md: "row" }}
              className="partCatList"
              spacing={3}
            >
              <Box className="partCartImage" sx={{flex:{sm:'1 1 100%',md:'1 1 50%'}}}>
                <img src="/Images/helpOne.jpg" alt="Cat" />
              </Box>

              <Stack direction={"column"} sx={{flex:{sm:'1 1 100%',md:'1 1 50%'}}}>
                <h4>Entertainers/Celebrities Partnership</h4>
                <p style={{ color: "#7b7E86", textAlign: "justify" }}>
                  Nigeria entertainment industry is indeed big with a global
                  influence. Ibadan Food Bank is looking for opportunities of
                  partnering with stakeholders in the industry and influencers
                  to share a spot light on important issues relating to hunger
                  in Nigeria from actors, musicians, footballers athletes to
                  writers, influencers, directors, producers, e.t.c.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <h6 className="progamDescObj">How can you help?</h6>
                  <ul className="progamDescObjList">
                    <li>Donate towards IBFB Project.</li>
                    <li>Volunteer in our community outreach.</li>
                    <li>Show your support for IBFBI using your platform.</li>
                    <li>
                      Use your social media handle to engage your audience and
                      fans in IBFBI campaigns
                    </li>
                  </ul>
                </div>
              </Stack>
            </Stack>
            <Stack
              direction={{ sm: "column", md: "row" }}
              className="partCatList"
              spacing={3}
            >
              <Box className="partCartImage" sx={{flex:{sm:'1 1 100%',md:'1 1 50%'}}}>
                <img src="/Images/helpOne.jpg" alt="Cat" />
              </Box>

              <Stack direction={"column"} sx={{flex:{sm:'1 1 100%',md:'1 1 50%'}}}>
                <h4>Non-Food Partnership</h4>
                <p style={{ color: "#7b7E86", textAlign: "justify" }}>
                  We meet the needs of our target beneficiaries beyond giving
                  them food relief items as we also welcome other form of
                  partnerships from individual and corporate bodies to achieve
                  the followings:
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <ul className="progamDescObjList">
                    <li>
                      Providing boreholes/wells with pump to undeserved areas.
                    </li>
                    <li>Scholarship programs for indigent children.</li>
                    <li>Providing basic medical supplies.</li>
                    <li>
                      Providing educational materials and renovating school
                      buildings
                    </li>
                    <li>
                      Providing sanitary pads for girls or boxers for male child
                    </li>
                    <li>Skill acquisition and empowerment program</li>
                    <li>
                      Providing clothing’s and shelters to families in
                      undeserved areas.
                    </li>
                  </ul>
                </div>
              </Stack>
            </Stack>
            <Stack
              direction={{ sm: "column", md: "row" }}
              className="partCatList"
              spacing={3}
            >
              <Box className="partCartImage" sx={{flex:{sm:'1 1 100%',md:'1 1 50%'}}}>
                <img src="/Images/helpOne.jpg" alt="Cat" />
              </Box>

              <Stack direction={"column"} sx={{flex:{sm:'1 1 100%',md:'1 1 50%'}}}>
                <h4>Government Partnership</h4>
                <p style={{ color: "#7b7E86", textAlign: "justify" }}>
                  We are soliciting the partnership of the federal, state and
                  local government in securing access to facilities, logistics
                  and delivery support system that may be available for the use
                  of food banking. Government can also assists in the provision
                  of funds for IBFBI to hire and manage staffs and resources
                  that will assist the communities to create a food bank or
                  operate a food bank in reaching out to every nooks and
                  crannies of the state.
                </p>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <h6 className="progamDescObj">
                    Benefits of Ibadan Food Bank to the Government
                  </h6>
                  <ul className="progamDescObjList">
                    <li>
                      It will encourage public private partnership with a
                      charitable cause.
                    </li>
                    <li>
                      Creating opportunities for individual to render volunteer
                      services.
                    </li>
                    <li>
                      It will enhance availability and security of food to
                      people who lack financial resources needed to secure
                      commercial access to adequate foods
                    </li>
                    <li>
                      Partnership with IBFBI will enable government cater for
                      the needy without being overwhelmed by the administrative
                      stress of running the foodbank
                    </li>
                  </ul>
                </div>
              </Stack>
            </Stack>
          </Stack>
        </div>
      </div>
    </>
  );
}
