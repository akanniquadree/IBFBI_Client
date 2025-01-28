import React from "react";
import "./BannerSix.css";
import { Button, Stack } from "@mui/material";
import { ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function BannerSix() {
  return (
    <div className="bannerSixCont">
      <div
        className="torn-edge"
        style={{
          top: "0 !important",
          bottom: "auto",
          transform: " rotateX(180deg)",
          zIndex: 2,
        }}
      ></div>
      <div className="bannerSixWrap">
        <div
          className="bannerTwoUp bannerSixHeight"
          style={{
            // height: "500px",
            zIndex: 2,
            position: "absolute",
            padding: "30px",
          }}
        >
          <div className="bannerTwoUpLeft">
            <span className="visionDet" style={{ letterSpacing: "2px" }}>
              <span className="vdet" style={{ color: "red" }}>
                -
              </span>{" "}
              We Love What we do
            </span>
            <h4
              className="visionDownLeftDes"
              style={{ marginTop: "20px", color: "white" }}
            >
              With your Donations, a Family can smile again.
            </h4>
          </div>
          <div className="bannerTwoUpLeft">
            <p style={{ color: "white" }}>
              Join us in reaching out to thousands of vulnerable families by
              providing essential relief items such as food, clothing, and
              shelter. Together, we can bring hope and support to those in
              need—your kindness can make a world of difference!
            </p>
            <Stack
              sx={{ marginTop: "15px" }}
              alignItems={{ xs: "flex-start", sm: "center" }}
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
            >
              <Button
                variant="contained"
                fontSize="large"
                sx={{ backgroundColor: "#E29343" }}
              >
                <Link
                  to="/contact"
                  className="bannerFiveHelpDono"
                  style={{ paddingBottom: "0", color: "white" }}
                >
                  Get Involved
                </Link>
              </Button>
            </Stack>
          </div>
        </div>
      </div>
      <div className="torn-edge" style={{ zIndex: 2 }}></div>
    </div>
  );
}
