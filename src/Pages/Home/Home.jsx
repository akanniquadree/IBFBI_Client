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
          "We want to make a significant impact on every lives, making them happier, healthier and more successful individuals."}
        paraTwo={"We aim to ensure that beneficiaries experience valuable moments in their lives by focusing on their rights and need"}
        paraThree={"We aim to create change in society and strengthen young people's access to making lasting impact in the society through eradicating hunger and malnutrition."}
        paraOne={"Community Inspection help us identify vulnerable families or beneficiaries in need while ensuring the impact is achieved."}
      />
      <BannerFive />
      <BannerSix />
      <BannerSeven />
      {/* <SwipeToSlide/> */}
    </>
  );
}
