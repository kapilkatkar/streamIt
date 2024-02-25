import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const HomeCard = ({
  item: { id, cover, name, rating, time, desc, starring, genres, tags, video },
}) => {
  return (
    <>
      <div className="wrapper">
        <div className="cover-image">
          <img src={cover} alt="IMGGGGGGG" />
        </div>
        <h1>{name}</h1>
        <div className="content">
          <div className="ratings">
            <div className="ratings-stars">
              <i className="fas fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star-half"></i>
              <label>{rating}(Imdb)</label>
              <span className="gp">GP</span>
              <label>{time}</label>
            </div>
            <p className="desc">{desc}</p>
            <div className="cast">
              <h4>
                <span>Starring </span>
                {starring}
              </h4>
              <h4>
                <span>Genres </span>
                {genres}
              </h4>
              <h4>
                <span>Tags </span>
                {tags}
              </h4>
            </div>
            <button className="primary-btn">
              <i className="fas fa-play"></i> PLAY NOW
            </button>
          </div>
          <div className="palyButton row">
            <div className="img">
              <img src="/images/play-button.png" alt="" />
            </div>
            WATCH TRAILER
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeCard;
