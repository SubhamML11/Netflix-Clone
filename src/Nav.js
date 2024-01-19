import React, { useEffect, useState } from "react";
import "./Nav.css";
import netflixLogo from "./n.svg"

function Nav() {

  //const imageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fbrand.netflix.com%2Fen%2Fassets%2Flogos%2F&psig=AOvVaw3qJB_Sr0cLel4X30F_leuf&ust=1705757428528000&source=images&cd=vfe&ved=0CBMQjRxqFwoTCMjbw97H6YMDFQAAAAAdAAAAABAE"
  const [show, handleShow] = useState(false);

  /*useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
      
    });

    return () => {
      window.removeEventListener("scroll");
    };
  }, []);*/
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
  
    // Adding the event listener
    window.addEventListener("scroll", handleScroll);
  
    // Removing the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  


  return (
    
    <div className={`nav ${show && "nav_black"}`}>

      <img
        className="nav_logo"
        src={netflixLogo}
        alt="Netfix Logo"
      />

      <img
        src="https://pbs.twimg.com/profile_images/124011999041155"
        alt="Netflix Avatar"
        className="nav_avatar"
      />

    </div>
  );
}

export default Nav;
