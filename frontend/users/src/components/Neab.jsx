import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import {
  useNavigate,
} from "react-router-dom";

import "../styles/neab.css";

const Neab = () => {

  const navigate =
    useNavigate();

  const [data, setData] =
    useState({

      tag: "",

      heading: "",

      paragraph: "",

      headingSize: "68",

      paragraphSize: "20",

      image1: "",

      image2: "",

      card1Title: "",

      card2Title: "",

      card3Title: "",

      card4Title: "",

      card1Icon: "",

      card2Icon: "",

      card3Icon: "",

      card4Icon: "",

    });

  /* FETCH DATA */

  useEffect(() => {

    fetchData();

  }, []);

  const fetchData =
    async () => {

      try {

        const res =
          await axios.get(

            "http://localhost:5000/api/neab"

          );

        if (res.data) {

          setData(
            res.data
          );

        }

      } catch (error) {

        console.log(error);

      }

  };

  return (

    <section className="neab">

      <div className="neab-container">

        {/* ======================
            LEFT SIDE
        ====================== */}

        <div className="neab-left">

          {/* IMAGE 1 */}

          <div className="neab-img1">

            <img

              src={

                data.image1 ||

                "https://via.placeholder.com/500"

              }

              alt="Main"

            />

          </div>

          {/* IMAGE 2 */}

          <div className="neab-img2">

            <img

              src={

                data.image2 ||

                "https://via.placeholder.com/500"

              }

              alt="Second"

            />

          </div>

        </div>

        {/* ======================
            RIGHT SIDE
        ====================== */}

        <div className="neab-right">

          {/* TAG */}

          <div className="neab-tag">

            {

              data.tag ||

              "Who We Are"

            }

          </div>

          {/* HEADING */}

          <h1

            style={{

              fontSize:
              `${data.headingSize}px`,

              textAlign:
              "left",

            }}

          >

            {

              data.heading ||

              "Design with Purpose, Strategy with Impact"

            }

          </h1>

          {/* PARAGRAPH */}

          <p

            style={{

              fontSize:
              `${data.paragraphSize}px`,

              textAlign:
              "left",

            }}

          >

            {

              data.paragraph ||

              "We are a creative digital agency focused on designing modern experiences."

            }

          </p>

          {/* ======================
              CARDS
          ====================== */}

          <div className="neab-cards">

            {/* CARD 1 */}

            <div className="neab-card">

              <img

                src={

                  data.card1Icon ||

                  "https://via.placeholder.com/60"

                }

                alt=""

              />

              <h3>

                {

                  data.card1Title ||

                  "User-Centric Thinking"

                }

              </h3>

            </div>

            {/* CARD 2 */}

            <div className="neab-card">

              <img

                src={

                  data.card2Icon ||

                  "https://via.placeholder.com/60"

                }

                alt=""

              />

              <h3>

                {

                  data.card2Title ||

                  "Strategic Creativity"

                }

              </h3>

            </div>

            {/* CARD 3 */}

            <div className="neab-card">

              <img

                src={

                  data.card3Icon ||

                  "https://via.placeholder.com/60"

                }

                alt=""

              />

              <h3>

                {

                  data.card3Title ||

                  "End-to-End Delivery"

                }

              </h3>

            </div>

            {/* CARD 4 */}

            <div className="neab-card">

              <img

                src={

                  data.card4Icon ||

                  "https://via.placeholder.com/60"

                }

                alt=""

              />

              <h3>

                {

                  data.card4Title ||

                  "Result-Driven Approach"

                }

              </h3>

            </div>

          </div>

          {/* BUTTON */}

          <button

            className="neab-btn"

            onClick={() =>
              navigate("/about")
            }

          >

            Explore More

          </button>

        </div>

      </div>

    </section>

  );

};

export default Neab;