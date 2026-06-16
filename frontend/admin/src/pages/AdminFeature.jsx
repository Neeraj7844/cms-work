import React, {
  useEffect,
  useState,
} from "react";
import Sidebar from "../components/Sidebar";
import axios from "axios";
import "../styles/features.css";

const AdminFeature = () => {

  // MAIN
  const [heading, setHeading] =
    useState("");

  const [description, setDescription] =
    useState("");

  // MAIN STYLE
  const [headingSize, setHeadingSize] =
    useState("60");

  const [headingWeight, setHeadingWeight] =
    useState("700");

  const [headingColor, setHeadingColor] =
    useState("#5c7754");

  const [descriptionSize, setDescriptionSize] =
    useState("20");

  const [descriptionWeight, setDescriptionWeight] =
    useState("400");

  const [descriptionColor, setDescriptionColor] =
    useState("#222222");

  // CARDS
  const [cards, setCards] =
    useState([]);

  // FETCH
  useEffect(() => {

    fetchFeature();

  }, []);

  const fetchFeature =
    async () => {

      try {

        const res =
          await axios.get(
            "http://localhost:5000/api/feature"
          );

        if (res.data) {

          setHeading(
            res.data.heading || ""
          );

          setDescription(
            res.data.description || ""
          );

          setHeadingSize(
            res.data.headingSize || "60"
          );

          setHeadingWeight(
            res.data.headingWeight || "700"
          );

          setHeadingColor(
            res.data.headingColor || "#5c7754"
          );

          setDescriptionSize(
            res.data.descriptionSize || "20"
          );

          setDescriptionWeight(
            res.data.descriptionWeight || "400"
          );

          setDescriptionColor(
            res.data.descriptionColor || "#222222"
          );

          setCards(
            res.data.cards || []
          );

        }

      } catch (error) {

        console.log(error);

      }

  };

  // ADD CARD
  const addCard = () => {

    setCards([

      ...cards,

      {

        icon: "✨",

        image: "",

        title: "",

        text: "",

        titleSize: "32",

        titleWeight: "700",

        titleColor: "#5c7754",

        textSize: "18",

        textWeight: "400",

        textColor: "#222222",

      },

    ]);

  };

  // REMOVE CARD
  const removeCard =
    (index) => {

      const updatedCards =
        [...cards];

      updatedCards.splice(
        index,
        1
      );

      setCards(
        updatedCards
      );

  };

  // CARD CHANGE
  const handleCardChange =
    (
      index,
      field,
      value
    ) => {

      const updatedCards =
        [...cards];

      updatedCards[index][field] =
        value;

      setCards(
        updatedCards
      );

  };

  // UPDATE
  const handleUpdate =
    async () => {

      try {

        await axios.put(

          "http://localhost:5000/api/feature",

          {

            heading,
            description,

            headingSize,
            headingWeight,
            headingColor,

            descriptionSize,
            descriptionWeight,
            descriptionColor,

            cards,

          }

        );

        alert(
          "Features Updated Successfully"
        );

      } catch (error) {

        console.log(error);

      }

  };

  return (

<div className="feature-admin">
    <Sidebar />
  <div className="feature-admin-card">

    <h1 className="feature-title">
      Features CMS
    </h1>

    {/* MAIN HEADING */}

    <h2 className="feature-subtitle">
      Main Heading
    </h2>

    <label className="feature-label">
      Heading Text
    </label>

    <input
      className="feature-input"
      type="text"
      value={heading}
      onChange={(e)=>
        setHeading(
          e.target.value
        )
      }
    />

    {/* HEADING STYLE */}

    <div className="feature-grid">

      <input
        className="feature-input"
        type="number"
        placeholder="Heading Size"
        value={headingSize}
        onChange={(e)=>
          setHeadingSize(
            e.target.value
          )
        }
      />

      <select
        className="feature-input"
        value={headingWeight}
        onChange={(e)=>
          setHeadingWeight(
            e.target.value
          )
        }
      >

        <option value="400">
          Normal
        </option>

        <option value="700">
          Bold
        </option>

        <option value="900">
          Extra Bold
        </option>

      </select>

      <input
        className="feature-input"
        type="color"
        value={headingColor}
        onChange={(e)=>
          setHeadingColor(
            e.target.value
          )
        }
      />

    </div>

    {/* DESCRIPTION */}

    <label className="feature-label">
      Description
    </label>

    <textarea
      className="feature-textarea"
      value={description}
      onChange={(e)=>
        setDescription(
          e.target.value
        )
      }
    />

    {/* DESCRIPTION STYLE */}

    <div className="feature-grid">

      <input
        className="feature-input"
        type="number"
        placeholder="Description Size"
        value={descriptionSize}
        onChange={(e)=>
          setDescriptionSize(
            e.target.value
          )
        }
      />

      <select
        className="feature-input"
        value={descriptionWeight}
        onChange={(e)=>
          setDescriptionWeight(
            e.target.value
          )
        }
      >

        <option value="400">
          Normal
        </option>

        <option value="700">
          Bold
        </option>

      </select>

      <input
        className="feature-input"
        type="color"
        value={descriptionColor}
        onChange={(e)=>
          setDescriptionColor(
            e.target.value
          )
        }
      />

    </div>

    {/* CARDS */}

    {

      cards.map(

        (
          card,
          index
        ) => (

          <div
            key={index}
            className="feature-card-box"
          >

            <h2 className="feature-card-title">
              Card {index + 1}
            </h2>

            <input
              className="feature-input"
              type="text"
              placeholder="Icon"
              value={card.icon}
              onChange={(e)=>
                handleCardChange(
                  index,
                  "icon",
                  e.target.value
                )
              }
            />

            <input
              className="feature-input"
              type="text"
              placeholder="Image URL"
              value={card.image}
              onChange={(e)=>
                handleCardChange(
                  index,
                  "image",
                  e.target.value
                )
              }
            />

            <input
              className="feature-input"
              type="text"
              placeholder="Card Title"
              value={card.title}
              onChange={(e)=>
                handleCardChange(
                  index,
                  "title",
                  e.target.value
                )
              }
            />

            <textarea
              className="feature-textarea"
              placeholder="Card Text"
              value={card.text}
              onChange={(e)=>
                handleCardChange(
                  index,
                  "text",
                  e.target.value
                )
              }
            />

            <button
              className="feature-delete-btn"
              onClick={()=>
                removeCard(index)
              }
            >
              Delete Card
            </button>

          </div>

        )

      )

    }

    {/* ACTION BUTTONS */}

    <div className="feature-btn-wrap">

      <button
        className="feature-btn"
        onClick={addCard}
      >
        Add New Card
      </button>

      <button
        className="feature-btn"
        onClick={handleUpdate}
      >
        Update Features
      </button>

    </div>

  </div>

</div>

);

};

export default AdminFeature;