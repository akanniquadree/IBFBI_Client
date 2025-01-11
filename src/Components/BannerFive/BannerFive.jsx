import React, { useRef } from "react";
import "./banner.css";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BannnerFiveData } from "./BannnerFiveData";
import {Link} from "react-router-dom"

export default function BannerFive() {
  const sliderRef = useRef(null); // Create a ref for the slider
  const settings = {
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 4,
    // autoplay: true,
    speed: 2000,
    pauseOnHover: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
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
    <div style={{ backgroundColor: "#E8E6E3", position: "relative" }}>
      <div className="bannerTwoCont">
        <div className="bannerTwoUp" style={{ marginTop: "40px" }}>
          <div className="bannerFiveUpLeft">
            <span className="visionDet" style={{ letterSpacing: "2px" }}>
              <span className="vdet" style={{ color: "red" }}>
                -
              </span>{" "}
              We Love What we do
            </span>
            <h4 className="visionDownLeftDes" style={{ marginTop: "20px" }}>
              Volunteers around the globe
            </h4>
          </div>
          <div className="bannerFiveUpLeft">
            <p>
              Our volunteers play an important role by working in a variety of
              areas, providing outreach to young people.
            </p>
          </div>
          <div className="bannerFiveUpLeft">
            <div className="bannerFiveArrows">
              <div className="bannerFiveArrow">
                <ArrowBackIos htmlColor="#898581" onClick={() => sliderRef.current.slickPrev()}/>
              </div>
              <div className="bannerFiveArrow">
                <ArrowForwardIos htmlColor="#898581" onClick={() => sliderRef.current.slickNext()}/>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div
        className="slider-container"
        style={{
          padding: "50px",
          width: "calc(100vw - 17px)",
          backgroundColor: "#E8E6E3",
        }}
      >
        <Slider {...settings} ref={sliderRef} style={{ gap: "30px", display: "flex" }}>
          {BannnerFiveData.map((itm, idx) => (
            <div style={{ width: "auto" }} key={idx}>
              <div
                className="bannerFiveImageCont"
                style={{
                  padding: "0px !important",
                  height: "250px",
                  position: "relative",
                }}
              >
                <img
                  className="bannerFiveImage"
                  src={itm.img}
                  alt="helpOne"
                />
                <div className="bannerFiveImageDesc">
                  <h5 className="bannerFiveImageTitle">{itm.title}</h5>
                  {/* <Stack gap={"5px"} direction={"column"} alignItems={"center"}>
                    <p
                      style={{
                        fontSize: "12px",
                        color: "#433E39",
                      }}
                    >
                      Volunteer
                    </p>
                  </Stack> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="bannerFiveHelpcont">
        <p className="bannerFiveHelp">
          We want to change the world. Why not join us? •{" "}
          <Link to="/volunteers" className="bannerFiveHelpDono"style={{color:"black"}}>
            Become a Volunteer <ArrowForwardIos fontSize="tiny" />
          </Link>
        </p>
      </div>
    </div>
  );
}
