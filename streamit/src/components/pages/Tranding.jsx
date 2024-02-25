import { useEffect, useState } from "react";
import Header from "../header/Header";
import "./pages.css";
import {
  MOVIE_VERSE_API_URL,
  X_RapidAPI_Key,
  X_RapidAPI_Host,
} from "../../config.js";

const Tranding = () => {
  const [trandingData, setTrandingData] = useState("");
  useEffect(() => {
    fetch(MOVIE_VERSE_API_URL, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": X_RapidAPI_Key,
        "X-RapidAPI-Host": X_RapidAPI_Host,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setTrandingData(data.news);
        console.log("trandingData", data.news);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header></Header>
      <div className="main-container">
        {Array.isArray(trandingData) &&
          trandingData.map((item) => (
            <div key={item.id} className="card">
              <img src={item.image} className="img img-auto" alt="" />
              <i className="fas fa-play fa-play-header"></i>
              <div className="title">{item.title}</div>
            </div>
          ))}
      </div>
    </>
  );
};
export default Tranding;
