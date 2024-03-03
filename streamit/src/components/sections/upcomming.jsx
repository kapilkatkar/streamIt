import React from "react";
import MovieCard from "./MovieCard";
import "./Section.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
const Upcomming = ({ items = [], title }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container">
      <h3>{title}</h3>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <MovieCard item={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Upcomming;
