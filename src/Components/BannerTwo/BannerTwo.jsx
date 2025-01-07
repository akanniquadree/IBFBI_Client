import React from "react";
import "./BannerTwo.css";

export default function BannerTwo() {
  return (
    <>
      <div className="bannerTwoCont">
            <div className="bannerTwoUp">
              <div className="bannerTwoUpLeft">
                <span className="visionDet" style={{ letterSpacing: "2px" }}>
                  <span className="vdet" style={{ color: "red" }}>
                    -
                  </span>{" "}
                  We Love What we do
                </span>
                <h4 className="visionDownLeftDes" style={{ marginTop: "20px" }}>
                  How to become a volunteer?
                </h4>
              </div>
              <div className="bannerTwoUpLeft">
                <p>
                  We offer a streamlined process designed to simplify the steps
                  for those who are eager to volunteer their time and skills.
                </p>
              </div>
            </div>
      </div>
      <div className="bannerTwoCont2 overlay">
            <div className="bannerTwoDown">
              <div className="bannerTwoDownBox " >
                <h1 className="bannerTwoDownBoxNum"> 01</h1>
                <div className="bannerTwoDownBoxMarg">
                  <div
                    style={{
                      borderRadius: "50%",
                      position: "absolute",
                      bottom: "-5px",
                      left: "40px",
                      backgroundColor: "black",
                      width: "10px",
                      height: "10px",
                    }}
                  ></div>
                </div>
                <h5 className="bannerTwoDownBoxName">Commitment</h5>
                <p className="bannerTwoDownBoxNameDesc">
                  We are dedicated and committed in ensuring that no one goes to
                  bed hungry
                </p>
              </div>
              <div className="bannerTwoDownBox">
                <h1 className="bannerTwoDownBoxNum"> 02</h1>
                <div className="bannerTwoDownBoxMarg">
                  <div
                    style={{
                      borderRadius: "50%",
                      position: "absolute",
                      bottom: "-5px",
                      left: "40px",
                      backgroundColor: "black",
                      width: "10px",
                      height: "10px",
                    }}
                  ></div>
                </div>
                <h5 className="bannerTwoDownBoxName">Compassion</h5>
                <p className="bannerTwoDownBoxNameDesc">
                  We are driven by empathy to reach out to the hungry.
                </p>
              </div>
              <div className="bannerTwoDownBox">
                <h1 className="bannerTwoDownBoxNum"> 03</h1>
                <div className="bannerTwoDownBoxMarg">
                  <div
                    style={{
                      borderRadius: "50%",
                      position: "absolute",
                      bottom: "-5px",
                      left: "40px",
                      backgroundColor: "black",
                      width: "10px",
                      height: "10px",
                    }}
                  ></div>
                </div>
                <h5 className="bannerTwoDownBoxName">Productivity</h5>
                <p className="bannerTwoDownBoxNameDesc">
                  We are joyful and excited seeing that no one is hungry in our
                  society
                </p>
              </div>
              <div className="bannerTwoDownBox">
                <h1 className="bannerTwoDownBoxNum"> 04</h1>
                <div className="bannerTwoDownBoxMarg">
                  <div
                    style={{
                      borderRadius: "50%",
                      position: "absolute",
                      bottom: "-5px",
                      left: "40px",
                      backgroundColor: "black",
                      width: "10px",
                      height: "10px",
                    }}
                  ></div>
                </div>
                <h5 className="bannerTwoDownBoxName">Partnership</h5>
                <p className="bannerTwoDownBoxNameDesc">
                  We partner with other (NGOs ,Agencies, and Corporate bodies)
                  who share our goal of zero hunger initiative
                </p>
              </div>
              <div className="bannerTwoDownBox">
                <h1 className="bannerTwoDownBoxNum"> 05</h1>
                <div className="bannerTwoDownBoxMarg">
                  <div
                    style={{
                      borderRadius: "50%",
                      position: "absolute",
                      bottom: "-5px",
                      left: "40px",
                      backgroundColor: "black",
                      width: "10px",
                      height: "10px",
                    }}
                  ></div>
                </div>
                <h5 className="bannerTwoDownBoxName">
                  Transparency and Accountabilty
                </h5>
                <p className="bannerTwoDownBoxNameDesc">
                  We are open and accountable to every resources committed into
                  our care.
                </p>
              </div>
              <div className="bannerTwoDownBox">
                <h1 className="bannerTwoDownBoxNum"> 06</h1>
                <div className="bannerTwoDownBoxMarg">
                  <div
                    style={{
                      borderRadius: "50%",
                      position: "absolute",
                      bottom: "-5px",
                      left: "40px",
                      backgroundColor: "black",
                      width: "10px",
                      height: "10px",
                    }}
                  ></div>
                </div>
                <h5 className="bannerTwoDownBoxName">Excellence</h5>
                <p className="bannerTwoDownBoxNameDesc">
                  We challenge ourselves to achieve greater learning and impact,
                  with the aim of advancing our mission as effectively as
                  possible.
                </p>
              </div>
            </div>
        <div className="torn-edge" style={{zIndex:3}}></div>
      </div>
    </>
  );
}
