import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import { Link } from "react-router-dom";

import "../styles/services.css";

const ServicesSection = () => {

  const [serviceData, setServiceData] =
    useState({

      tag: "",

      heading: "",

      paragraph: "",

      cards: [],

    });
  // FETCH SERVICE DATA
  useEffect(() => {

    fetchService();

  }, []);
  const fetchService =
    async () => {

      try {

        const res =
          await axios.get(

            "http://localhost:5000/api/service"

          );





        if (res.data) {

          setServiceData(
            res.data
          );

        }

      } catch (error) {

        console.log(error);

      }

  };
  return (

    <section className="services-section">

      {/* TOP */}
      <div className="services-top">

        <div className="services-tag">

          {

            serviceData.tag ||

            "What We Do"

          }

        </div>
        <h2>

          {

            serviceData.heading ||

            "Bringing Ideas to Life Through Design, Code & Strategy"

          }

        </h2>
        <p>

          {

            serviceData.paragraph ||

            "We help brands turn vision into impact."

          }

        </p>

      </div>
   {/* CARDS */}
      <div className="services-grid">

        {

          serviceData.cards?.length > 0

          ? (

            serviceData.cards.map(

              (
                card,
                index
              ) => (

                <div
                  className="service-card"
                  key={index}
                >




                  {/* AUTO NUMBER */}
                  <span className="service-number">

                    {

                      String(index + 1)
                      .padStart(2, "0")

                    }

                  </span>
                  {/* ICON */}
                  <div

                    className="service-icon"

                    style={{

                      background:
                        card.iconBg ||

                        "linear-gradient(135deg,#ff9966,#ff3366)",

                    }}

                  >

                    {

                      card.image

                      ? (

                        <img
                          src={card.image}
                          alt=""
                          className="service-image"
                        />

                      )

                      : (

                        card.icon || "✨"

                      )

                    }

                  </div>
                  {/* TITLE */}
                  <h3>

                    {

                      card.title ||

                      "Service Title"

                    }

                  </h3>
                  {/* TEXT */}
                  <p>

                    {

                      card.text ||

                      "Service Description"

                    }

                  </p>

                </div>

              )

            )

          )
          : (

            <h2>
              No Services Found
            </h2>

          )

        }

      </div>
      {/* BUTTON */}
      <div className="services-btn-wrapper">

        <Link to="/contact">

          <button className="services-btn">

            <span className="btn-shine"></span>

            <span className="btn-text">
              Start Your Project
            </span>

          </button>

        </Link>

      </div>

    </section>

  );

};

export default ServicesSection;