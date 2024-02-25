import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeCard from "./HomeCard";
import { homeData } from "../../dummyData";
import Header from "../header/Header";
import "./Home.css";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <i className="fa fa-chevron-right"></i>
    </div>
  );
};
const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="control-btn" onClick={onClick}>
      <i className="fa fa-chevron-left"></i>
    </div>
  );
};
const Home = ({ items }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <Header></Header>
      <div className="homeContainer">
        <Slider {...settings}>
          {homeData &&
            homeData.length > 0 &&
            homeData.map((item) => {
              return <HomeCard key={item.id} item={item} />;
            })}
        </Slider>
      </div>
    </>
  );
};

export default Home;
