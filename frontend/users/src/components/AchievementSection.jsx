import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import "../styles/achievement.css";

const AchievementSection = () => {

  const [achievementData, setAchievementData] =
    useState({
      heading: "",
      paragraph: "",
      cards: [],
    });

  // COUNTER STATE
  const [counts, setCounts] =
    useState([]);

  // FETCH DATA
  useEffect(() => {
    fetchAchievement();
  }, []);

  const fetchAchievement =
    async () => {

      try {

        const res =
          await axios.get(
            "https://cms-3tty.onrender.com/api/achievement"
          );

        if (res.data) {

          setAchievementData(
            res.data
          );

          startCounter(
            res.data.cards || []
          );

        }

      } catch (error) {

        console.log(error);

      }

  };

  // CUSTOM COUNTER
  const startCounter =
    (cards) => {

      let updatedCounts =
        cards.map(() => 0);

      setCounts(updatedCounts);

      cards.forEach(
        (card, index) => {

          let start = 0;

          const end =
            Number(card.number) || 0;

          const duration = 2000;

          const increment =
            end / (duration / 30);

          const timer =
            setInterval(() => {

              start += increment;

              if (start >= end) {

                start = end;

                clearInterval(timer);

              }

              updatedCounts[index] =
                Math.floor(start);

              setCounts([
                ...updatedCounts,
              ]);

            }, 30);

        }
      );

  };

  return (

    <section className="achievement-section">

      <div className="ne">

        {/* LEFT */}
        <div className="achievement-left">

          <div className="achievement-tag">
            Achievement
          </div>

          <h2>
            {
              achievementData.heading ||
              "We have more than 13+ years of experience"
            }
          </h2>

          <p>
            {
              achievementData.paragraph ||
              "With over 13 years in the digital space."
            }
          </p>

        </div>

        {/* RIGHT */}
        <div className="achievement-right">

          {
            achievementData.cards?.length > 0

            ? (

              achievementData.cards.map(
                (card, index) => (

                  <div
                    className="achievement-card"
                    key={index}
                  >

                    {/* ICON */}
                    <div
                      className="achievement-icon"
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
                            className="achievement-image"
                          />
                        )

                        : (
                          card.icon || "✨"
                        )
                      }

                    </div>

                    {/* NUMBER */}
                    <h3>
                      {counts[index] || 0}+
                    </h3>

                    {/* TEXT */}
                    <span>
                      {
                        card.text ||
                        "Achievement"
                      }
                    </span>

                  </div>

                )
              )

            )

            : (

              <h2>
                No Achievement Cards
              </h2>

            )

          }

        </div>

      </div>

    </section>

  );

};

export default AchievementSection;