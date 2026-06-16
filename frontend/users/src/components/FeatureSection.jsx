import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import "../styles/feature.css";

const FeatureSection = () => {

  const [featureData, setFeatureData] =
    useState({

      heading: "",

      description: "",

      cards: [],

    });

  // FETCH DATA
  useEffect(() => {

    fetchFeatureData();

  }, []);

  const fetchFeatureData =
    async () => {

      try {

        const res =
          await axios.get(

            "http://localhost:5000/api/feature"

          );

        console.log(
          "FEATURE DATA:",
          res.data
        );

        if (res.data) {

          setFeatureData({

            heading:
              res.data.heading || "",

            description:
              res.data.description || "",

            cards:
              res.data.cards || [],

          });

        }

      } catch (error) {

        console.log(
          "Feature Fetch Error:",
          error
        );

      }

  };

  return (

    <section className="feature-section">

      {/* TAG */}
      <div className="feature-tag">
        Feature
      </div>

      {/* HEADING */}
      <h2>

        {

          featureData.heading ||

          "Helping You Reach What Matters Most"

        }

      </h2>

      {/* DESCRIPTION */}
      <p className="feature-desc">

        {

          featureData.description ||

          "We aim to help businesses reach their goals."

        }

      </p>

      {/* CARDS */}
      <div className="feature-cards">

        {

          featureData.cards &&
          featureData.cards.length > 0

          ? (

            featureData.cards.map(

              (
                card,
                index
              ) => (

                <div
                  className="feature-card"
                  key={index}
                >

                  {/* IMAGE */}
                  {

                    card.image && (

                      <img
                        src={card.image}
                        alt=""
                        style={{

                          width: "80px",

                          height: "80px",

                          objectFit: "cover",

                          marginBottom: "20px",

                        }}
                      />

                    )

                  }

                  {/* ICON */}
                  <div className="icon-box">

                    {

                      card.icon ||

                      "✨"

                    }

                  </div>

                  {/* TITLE */}
                  <h3

                    style={{

                      fontSize:
                        `${card.titleSize || 32}px`,

                      fontWeight:
                        card.titleWeight || 700,

                      color:
                        card.titleColor || "#5c7754",

                    }}

                  >

                    {

                      card.title ||

                      "Feature Title"

                    }

                  </h3>

                  {/* TEXT */}
                  <p

                    style={{

                      fontSize:
                        `${card.textSize || 18}px`,

                      fontWeight:
                        card.textWeight || 400,

                      color:
                        card.textColor || "#222",

                    }}

                  >

                    {

                      card.text ||

                      "Feature Description"

                    }

                  </p>

                </div>

              )

            )

          )
          : (
            <h2>
              No Cards Added
            </h2>

          )

        }

      </div>

    </section>

  );

};

export default FeatureSection;