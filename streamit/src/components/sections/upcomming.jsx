import React from "react";
import MovieCard from "./MovieCard";
import "./Section.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
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
      <div className="showMore-title">
        <h3>{title} </h3>
        <div className="showMore">
          {title === "trending" && <Link to="/trending">Show More</Link>}
          {title === "series" && <Link to="/series">Show More</Link>}
          {title === "Recommended Movies" && (
            <Link to="/recommended">Show More</Link>
          )}
          {title === "Hollywood Movies" && (
            <Link to="/trending">Show More</Link>
          )}
          {title === "Only On StreamIt" && (
            <Link to="/trending">Show More</Link>
          )}
          {title === "Crime Tv Shows" && <Link to="/trending">Show More</Link>}
          {title === "Exciting Movies" && <Link to="/trending">Show More</Link>}
          {title === "Action And Adventures Movies" && (
            <Link to="/trending">Show More</Link>
          )}
          {title === "Top Pics For Kapil" && (
            <Link to="/trending">Show More</Link>
          )}
        </div>
      </div>
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
