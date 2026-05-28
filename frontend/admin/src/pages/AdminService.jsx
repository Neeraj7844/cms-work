import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

import "../styles/service.css";

const AdminService = () => {

  const [data, setData] =
    useState({

      tag: "",

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

      const res =
        await axios.get(

          "https://cms-3tty.onrender.com/api/service"

        );

      if (res.data) {

        setData({

          tag:
            res.data.tag || "",

          heading:
            res.data.heading || "",

          paragraph:
            res.data.paragraph || "",

          cards:
            res.data.cards || [],

        });

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

          icon: "✨",

          image: "",

          title: "",

          text: "",

          iconBg: "#ff6b6b",

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

      await axios.put(

        "https://cms-3tty.onrender.com/api/service",

        data

      );

      alert(
        "Services Updated"
      );

  };

  return (

    <div className="service-admin-page">

      <div className="service-admin-container">

        <h1>
          Service CMS
        </h1>

        {/* TAG */}

        <input
          type="text"
          name="tag"
          placeholder="Tag"
          value={data.tag || ""}
          onChange={handleChange}
        />

        {/* HEADING */}

        <input
          type="text"
          name="heading"
          placeholder="Heading"
          value={data.heading || ""}
          onChange={handleChange}
        />

        {/* PARAGRAPH */}

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
                className="service-admin-card"
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

                {/* TITLE */}

                <input
                  type="text"
                  placeholder="Title"
                  value={card.title || ""}
                  onChange={(e) =>
                    handleCardChange(

                      index,

                      "title",

                      e.target.value

                    )
                  }
                />

                {/* TEXT */}

                <textarea
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

                {/* ICON BG */}

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
                    deleteCard(index)
                  }
                >
                  Delete
                </button>

              </div>

            )

          )

        }

        {/* BUTTONS */}

        <div className="service-admin-buttons">

          <button
            onClick={addCard}
          >
            Add Card
          </button>

          <button
            onClick={handleUpdate}
          >
            Update Service
          </button>

        </div>

      </div>

    </div>

  );

};

export default AdminService;