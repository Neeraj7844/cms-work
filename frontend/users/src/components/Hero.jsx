import React, {
  useEffect,
  useState,
} from "react";
import axios from "axios";
import herimg from "../assets/images/herimg.png";
import "../styles/hero.css";
const Hero = () => {

  const [heroData, setHeroData] =
    useState({

      heading: "",

      paragraph: "",

    });

  // FETCH HERO
  useEffect(() => {

    fetchHeroData();

  }, []);

  const fetchHeroData =
    async () => {

      try {

        const res =
          await axios.get(

            "https://cms-work.onrender.com/api/hero"

          );

        if (res.data) {

          setHeroData(
            res.data
          );

        }

      } catch (error) {

        console.log(error);

      }

  };

  return (

    <section className="hero">

      {/* LEFT SOCIAL */}
      <div className="social-sidebar">

        <span className="social-text">
          Social
        </span>

        <button className="social-btn">
          🔗
        </button>

      </div>

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-left">

          {/* HEADING */}
          <h1

            style={{

              fontSize:
                `${heroData.headingSize}px`,

              fontWeight:
                heroData.headingWeight,

              color:
                heroData.headingColor,

            }}

          >

            {

              heroData.heading ||

              "Designs That Speak, Strategies That Perform"

            }

          </h1>

          {/* PARAGRAPH */}
          <p

            style={{

              fontSize:
                `${heroData.paragraphSize}px`,

              fontWeight:
                heroData.paragraphWeight,

              color:
                heroData.paragraphColor,

            }}

          >

            {

              heroData.paragraph ||

              "From UI/UX to digital marketing, we blend creativity with strategy."

            }

          </p>

        <button
            className="hero-btn"
            onClick={() => window.open("/contact", "_blank")}
          >
            Get Started
        </button>

        </div>

        {/* RIGHT IMAGE */}
        <div className="hero-right" >

          <div className="hero-image-box">

            <img className="mail-box"
              src={herimg}
              alt="Hero"
            />

          </div>


</div>
      </div>

    </section>

  );

};

export default Hero;