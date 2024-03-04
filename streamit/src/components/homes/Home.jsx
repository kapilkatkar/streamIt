import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HomeCard from "./HomeCard";
import { homeData, trending } from "../../dummyData";
import Header from "../header/Header";
import "./Home.css";
import Upcomming from "../sections/upcomming";
import { upcome, recommended, latest } from "../../dummyData";
import Footer from "../footer/Footer";

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
      <div>
        <Upcomming items={upcome} title="trending" />
      </div>
      <div>
        <Upcomming items={latest} title="series" />
      </div>
      <div>
        <Upcomming items={recommended} title="Recommended Movies" />
      </div>
      <div>
        <Upcomming items={upcome} title="Hollywood Movies" />
      </div>
      <div>
        <Upcomming items={latest} title="Only On StreamIt" />
      </div>
      <div>
        <Upcomming items={recommended} title="Crime Tv Shows" />
      </div>
      <div>
        <Upcomming items={upcome} title="Exciting Movies" />
      </div>
      <div>
        <Upcomming items={latest} title="Action And Adventures Movies" />
      </div>
      <div>
        <Upcomming items={recommended} title="Top Pics For Kapil" />
      </div>
      <Footer></Footer>
    </>
  );
};

export default Home;
