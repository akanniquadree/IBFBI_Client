import React, { useRef } from "react";
import "./banner.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import {
  Card,
  CardContent,
  LinearProgress,
  linearProgressClasses,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BannnerThreeData } from "./BannnerThreeData";
import { Link } from "react-router-dom";

export default function BannerThree() {
  const sliderRef = useRef(null);
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[200],
      ...theme.applyStyles("dark", {
        backgroundColor: theme.palette.grey[800],
      }),
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: "red",
      ...theme.applyStyles("dark", {
        backgroundColor: "#308fe8",
      }),
    },
  }));
  const settings = {
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    // swipeToSlide: true,
    // afterChange: function (index) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   );
    // },
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // For tablets and smaller screens
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div style={{ backgroundColor: "#E8E6E3" }}>
      <div className="bannerTwoCont">
        <div className="bannerTwoUp" style={{ marginTop: "40px" }}>
          <div className="bannerThreeUpLeft">
            <span className="visionDet" style={{ letterSpacing: "2px" }}>
              <span className="vdet" style={{ color: "red" }}>
                -
              </span>{" "}
              Lend a helping hand
            </span>
            <h4 className="visionDownLeftDes" style={{ marginTop: "20px" }}>
              Creating a positive impact.
            </h4>
          </div>
          <div className="bannerThreeUpLeft">
            <p>
              By providing a variety of options to which everyone can contribute
              in accordance with their abilities and means
            </p>
            <p>
              We welcome all types of corporate partnership that can facilitate
              our humanitarian services to under served communities
            </p>
            <button class="read-more">
            <Link to="/volunteers" style={{color: 'black'}}>Read More</Link> <span class="arrow">→</span>
            </button>
          </div>
          <div className="bannerThreeUpLeft">
            <div className="bannerThreeArrows">
              <div className="bannerThreeArrow">
                <ArrowBackIos
                  htmlColor="#898581"
                  onClick={() => sliderRef.current.slickPrev()}
                />
              </div>
              <div className="bannerThreeArrow">
                <ArrowForwardIos
                  htmlColor="#898581"
                  onClick={() => sliderRef.current.slickNext()}
                />
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div
        className="slider-container"
        style={{
          padding: "30px",
          width: "calc(100vw - 17px)",
          backgroundColor: "#E8E6E3",
        }}
      >
        <Slider
          {...settings}
          style={{ gap: "30px", display: "flex" }}
          ref={sliderRef}
        >
          {BannnerThreeData.map((itm, idx) => (
            <div index={idx} style={{ width: "auto" }}>
              <div
                className="bannerThreeImageCont"
                style={{
                  padding: "0px !important",
                  height: "350px",
                  position: "relative",
                }}
              >
                <img
                  className="bannerThreeImage"
                  src="/Images/helpOne.jpg"
                  alt="helpOne"
                />
                <div className="bannerThreeImageDesc">
                  <h5 className="bannerThreeImageTitle">{itm.title}</h5>
                  <BorderLinearProgress variant="determinate" value={50} />
                  <Stack
                    direction={{ xs: "column", sm: "row" }}
                    alignItems={{ xs: "flex-start", sm: "center" }}
                    justifyContent={"space-between"}
                  >
                    <Stack gap={"5px"} direction={"row"} alignItems={"center"}>
                      <h5 style={{ fontSize: "16px", color: "white" }}>
                        £ {itm.raise}
                      </h5>
                      <p
                        style={{
                          fontSize: "10px",
                          color: "white",
                          alignSelf: "flex-end",
                        }}
                      >
                        Raised
                      </p>
                    </Stack>
                    <Stack gap={"5px"} direction={"row"} alignItems={"center"}>
                      <h5 style={{ fontSize: "16px", color: "white" }}>
                        £ {itm.goal}
                      </h5>
                      <p
                        style={{
                          fontSize: "10px",
                          color: "white",
                          alignSelf: "flex-end",
                        }}
                      >
                        Goal
                      </p>
                    </Stack>
                  </Stack>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <p className="bannerThreeHelp">
        They Need Your Help •{" "}
        <a className="bannerThreeHelpDono">
          Donate Now <ArrowForwardIos fontSize="tiny" />
        </a>
      </p>
    </div>
  );
}
