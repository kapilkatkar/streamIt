import { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  console.log(mobile);

  window.addEventListener("scroll", function () {
    var header = document.querySelector(".header");
    var scrollTop = window.scrollY;

    if (scrollTop > 0) {
      header.style.backgroundImage =
        "linear-gradient(to right bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6))";
    } else {
      header.style.backgroundImage = "none";
    }
  });

  return (
    <div className="header">
      <nav className="flexSB mobileSB">
        <div className="logo">SREAMIT</div>
        <div
          className="toggle"
          onClick={() => {
            setMobile(!mobile);
          }}
        >
          {mobile ? (
            <i className="fa fa-times"></i>
          ) : (
            <i className="fa fa-bars"></i>
          )}
        </div>
        <ul
          className={mobile ? "navMenu-list" : "flexSB"}
          onClick={() => {
            setMobile(false);
          }}
        >
          <Link to={"/homePage"}>Home</Link>
          <Link to={"/series"}>Series</Link>
          <Link to={"/movies"}>Movies</Link>
          <Link to={"/tranding"}>Tranding</Link>
          <Link to={"/pricing"}>Pricing</Link>
          <Link to={"/contacts"}>Contacts</Link>
        </ul>
        <div className="account flexSB">
          <i className="fa fa-search"></i>
          <i className="fa fa-bell"></i>
          <i className="fa fa-user"></i>
          <button>Subscribe Now</button>
        </div>
      </nav>
    </div>
  );
};
export default Header;
