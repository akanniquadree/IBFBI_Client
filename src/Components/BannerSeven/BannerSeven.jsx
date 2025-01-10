import React from "react";
import "./BannerSeven.css";
import { Button, Stack } from "@mui/material";
import { BannerSevenData } from "./BannerSevenData";
import { Link } from "react-router-dom";

export default function BannerSeven() {
  return (
    <>
      <div className="bannerTwoCont">
        <div className="bannerTwoUp" style={{ marginTop: "30px" }}>
          <div className="bannerTwoUpLeft">
            <span className="visionDet" style={{ letterSpacing: "2px" }}>
              <span className="vdet" style={{ color: "red" }}>
                -
              </span>{" "}
              our latest updates
            </span>
            <h4 className="visionDownLeftDes" style={{ marginTop: "20px" }}>
              Empowering change - Dive into our blog
            </h4>
          </div>
          <div className="bannerTwoUpLeft">
            <p>
              We offer a streamlined process designed to simplifythe steps for
              those who are eager to volunteer their time and skills.
            </p>
          </div>
        </div>
        <Stack
          direction={{ sm: "column", md: "row" }}
          spacing={2}
          useFlexGap
          sx={{ flexWrap: "wrap" }}
          className="BannerSevenCont"
        >
          {BannerSevenData.map((item, index) => (
            <Stack
              direction={"column"}
              spacing={3}
              className="BannerSevenList"
              key={index}
            >
              <div className="BannerSevenImage">
                <img src={item.img} alt="" className="BannerSevenImg" />
                <div className="BannerSevenImageDesc">
                  <div className="BannerSevenImageTitle">
                    <p style={{ fontSize: "11px", color: "red" }}>
                      4 years ago
                    </p>
                  </div>
                  <div className="BannerSevenImageTitleDesc">
                    <p style={{ fontSize: "11px", color: "white" }}>Blog</p>
                  </div>
                </div>
              </div>
              <p style={{fontWeight:600,fontSize:'16px'}}>
                {item.title}
              </p>
              <p
                className="paraOne"
              >
                {item.para}
              </p>
              <button class="read-more">
                Read More <span class="arrow">→</span>
              </button>
            </Stack>
          ))}
          
          {/* <Stack direction={"column"} spacing={3} className="BannerSevenList">
            <div className="BannerSevenImage">
              <img src="/Images/blog-3.jpg" alt="" className="BannerSevenImg" />
              <div className="BannerSevenImageDesc">
                <div className="BannerSevenImageTitle">
                  <p style={{ fontSize: "11px", color: "red" }}>4 years ago</p>
                </div>
                <div className="BannerSevenImageTitleDesc">
                  <p style={{ fontSize: "11px", color: "white" }}>News</p>
                </div>
              </div>
            </div>
            <h5>Global citizenship and responsibility</h5>
            <p>
              I think that you should be able to select more than one reason for
              rating.
            </p>
            <button class="read-more">
              Read More <span class="arrow">→</span>
            </button>
          </Stack>
          <Stack direction={"column"} spacing={3} className="BannerSevenList">
            <div className="BannerSevenImage">
              <img src="/Images/blog-1.jpg" alt="" className="BannerSevenImg" />
              <div className="BannerSevenImageDesc">
                <div className="BannerSevenImageTitle">
                  <p style={{ fontSize: "11px", color: "red" }}>4 years ago</p>
                </div>
                <div className="BannerSevenImageTitleDesc">
                  <p style={{ fontSize: "11px", color: "white" }}>Event</p>
                </div>
              </div>
            </div>
            <h5>Will Africa Repeat Asian Miracle</h5>
            <p>
              Unlock the secrets of design thinking as we delve into its
              principles, methodologies, and real-world applications in solving
              complex read more
            </p>
            <button class="read-more">
              Read More <span class="arrow">→</span>
            </button>
          </Stack> */}
        </Stack>
        <Stack
                  direction="row"
                  justifyContent="center"
                  sx={{justifyContent:'center'}}
                  alignItems={"center"}
                  className="orderWrap"
                >
                  <Button variant="contained" size="small" sx={{bgcolor:'red'}} className="bot">
                    <Link to="/#" style={{color:'white', fontSize:'10px'}}>View More</Link>
                  </Button>
                </Stack>
      </div>
    </>
  );
}
