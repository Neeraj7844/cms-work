import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";
import Sidebar from "../components/Sidebar";
import "../styles/achievement.css";

const AdminAchievement = () => {

  const [data, setData] =
    useState({

      heading: "",

      paragraph: "",

      cards: [],

    });

  // FETCH

  useEffect(() => {

    fetchData();

  }, []);

  const fetchData =
    async () => {

      try {

        const res =
          await axios.get(
            "https://cms-work.onrender.com/api/achievement"
          );

        if (res.data) {

          setData({

            heading:
              res.data.heading || "",

            paragraph:
              res.data.paragraph || "",

            cards:
              res.data.cards || [],

          });

        }

      } catch (error) {

        console.log(error);

      }

  };

  // MAIN CHANGE

  const handleChange =
    (e) => {

      setData({

        ...data,

        [e.target.name]:
          e.target.value,

      });

  };

  // CARD CHANGE

  const handleCardChange =
    (
      index,
      field,
      value
    ) => {

      const updatedCards =
        [...data.cards];

      updatedCards[index][field] =
        value;

      setData({

        ...data,

        cards:
          updatedCards,

      });

  };

  // ADD CARD

  const addCard = () => {

    setData({

      ...data,

      cards: [

        ...data.cards,

        {

          icon: "😊",

          image: "",

          number: 0,

          text: "",

          iconBg:
            "#ff6b6b",

        },

      ],

    });

  };

  // DELETE CARD

  const deleteCard =
    (index) => {

      const updatedCards =
        [...data.cards];

      updatedCards.splice(
        index,
        1
      );

      setData({

        ...data,

        cards:
          updatedCards,

      });

  };

  // UPDATE

  const handleUpdate =
    async () => {

      try {

        await axios.put(

             "https://cms-work.onrender.com/api/achievement",

          data

        );

        alert(
          "Achievement Updated Successfully"
        );

      } catch (error) {

        console.log(error);

      }

  };

  return (

    <div className="admin-achievement-page">
          <Sidebar />
      <div className="admin-achievement-container">

        <h1>
          Achievement CMS
        </h1>

        {/* HEADING */}

        <h2>
          Main Heading
        </h2>

        <input
          type="text"
          name="heading"
          placeholder="Heading"
          value={data.heading || ""}
          onChange={handleChange}
        />

        {/* PARAGRAPH */}

        <h2>
          Paragraph
        </h2>

        <textarea
          name="paragraph"
          placeholder="Paragraph"
          value={data.paragraph || ""}
          onChange={handleChange}
        />

        {/* CARDS */}

        {

          data.cards?.map(

            (
              card,
              index
            ) => (

              <div
                key={index}
                className="admin-achievement-card"
              >

                <h2>
                  Card {index + 1}
                </h2>

                {/* ICON */}

                <input
                  type="text"
                  placeholder="Icon"
                  value={card.icon || ""}
                  onChange={(e) =>
                    handleCardChange(

                      index,

                      "icon",

                      e.target.value

                    )
                  }
                />

                {/* IMAGE */}

                <input
                  type="text"
                  placeholder="Image URL"
                  value={card.image || ""}
                  onChange={(e) =>
                    handleCardChange(

                      index,

                      "image",

                      e.target.value

                    )
                  }
                />

                {/* NUMBER */}

                <input
                  type="number"
                  placeholder="Number"
                  value={card.number || ""}
                  onChange={(e) =>
                    handleCardChange(

                      index,

                      "number",

                      e.target.value

                    )
                  }
                />

                {/* TEXT */}

                <input
                  type="text"
                  placeholder="Text"
                  value={card.text || ""}
                  onChange={(e) =>
                    handleCardChange(

                      index,

                      "text",

                      e.target.value

                    )
                  }
                />

                {/* COLOR */}

                <input
                  type="color"
                  value={
                    card.iconBg ||
                    "#ff6b6b"
                  }
                  onChange={(e) =>
                    handleCardChange(

                      index,

                      "iconBg",

                      e.target.value

                    )
                  }
                />

                {/* DELETE */}

                <button
                  onClick={() =>
                    deleteCard(
                      index
                    )
                  }
                >
                  Delete Card
                </button>

              </div>

            )

          )

        }

        {/* BUTTONS */}

        <div
          style={{
            display:"flex",
            gap:"20px",
            flexWrap:"wrap",
            marginTop:"30px",
          }}
        >

          <button
            onClick={addCard}
          >
            Add Card
          </button>

          <button
            onClick={handleUpdate}
          >
            Update Achievement
          </button>

        </div>

      </div>

    </div>

  );

};

export default AdminAchievement;