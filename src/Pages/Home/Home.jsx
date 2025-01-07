import React from "react";
import Slider from "../../Components/Slider/Slider";
import { SliderData } from "../../Components/Slider/SlideData";
import Vision from "../../Components/Vision/Vision";
import BannerOne from "../../Components/BannerOne/BannerOne";
import BannerTwo from "../../Components/BannerTwo/BannerTwo";
import BannerThree from "../../Components/BannerThree/BannerThree";
import BannerFour from "../../Components/BannerFour/BannerFour";
import BannerFive from "../../Components/BannerFive/BannerFive";
import BannerSix from "../../Components/BannerSix/BannerSix";
import BannerSeven from "../../Components/BannerSeven/BannerSeven";

export default function Home() {
  return (
    <>
      <Slider slide={SliderData} />
      <Vision />
      <BannerOne />
      <BannerTwo />
      <BannerThree />
      <BannerFour
      title={"title"}
        paraFour={
          "We want to make a significant impact on young people's lives, making them happier, healthier and more successful individuals."
        }
        paraTwo={"We aim to ensure that future generations experience valuable moments in their lives by focusing on their rights in the field of health."}
        paraThree={"We aim to create change in society and strengthen young people's access to their rights to health and education."}
        paraOne={"Educational tools are designed to help children and young people raise awareness about health and education, improve themselves."}
      />
      <BannerFive />
      <BannerSix />
      <BannerSeven />
      {/* <SwipeToSlide/> */}
    </>
  );
}
