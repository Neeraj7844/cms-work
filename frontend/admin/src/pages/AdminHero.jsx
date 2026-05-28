import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";
import "../styles/hero.css";

const AdminHero = () => {

  // TEXT
  const [heading, setHeading] =
    useState("");

  const [paragraph, setParagraph] =
    useState("");

  // HEADING STYLE
  const [headingSize, setHeadingSize] =
    useState("70");

  const [headingWeight, setHeadingWeight] =
    useState("700");

  const [headingColor, setHeadingColor] =
    useState("#ffffff");

  // PARAGRAPH STYLE
  const [paragraphSize, setParagraphSize] =
    useState("20");

  const [paragraphWeight, setParagraphWeight] =
    useState("400");

  const [paragraphColor, setParagraphColor] =
    useState("#ffffff");

  // FETCH HERO DATA
  useEffect(() => {

    fetchHero();

  }, []);

  const fetchHero = async () => {

    try {

      const res =
        await axios.get(
          "https://cms-3tty.onrender.com/api/hero"
        );

      if (res.data) {

        // TEXT
        setHeading(
          res.data.heading || ""
        );

        setParagraph(
          res.data.paragraph || ""
        );

        // HEADING STYLE
        setHeadingSize(
          res.data.headingSize || "70"
        );

        setHeadingWeight(
          res.data.headingWeight || "700"
        );

        setHeadingColor(
          res.data.headingColor || "#ffffff"
        );

        // PARAGRAPH STYLE
        setParagraphSize(
          res.data.paragraphSize || "20"
        );

        setParagraphWeight(
          res.data.paragraphWeight || "400"
        );

        setParagraphColor(
          res.data.paragraphColor || "#ffffff"
        );

      }

    } catch (error) {

      console.log(error);

    }

  };

  // UPDATE HERO
  const handleUpdate = async () => {

    try {

      await axios.put(

        "https://cms-3tty.onrender.com/api/hero",

        {

          heading,
          paragraph,

          headingSize,
          headingWeight,
          headingColor,

          paragraphSize,
          paragraphWeight,
          paragraphColor,

        }

      );

      alert(
        "Hero Updated Successfully"
      );

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div
      style={{
        padding: "40px",
      }}
    >

      <h1>
        Hero Section CMS
      </h1>

      {/* HEADING */}
      <h2>
        Heading
      </h2>

      <input
        type="text"
        placeholder="Heading"
        value={heading}
        onChange={(e) =>
          setHeading(
            e.target.value
          )
        }
        style={{
          width: "100%",
          padding: "15px",
          marginBottom: "20px",
        }}
      />

      {/* FONT SIZE */}
      <label>
        Heading Font Size
      </label>

      <input
        type="number"
        value={headingSize}
        onChange={(e) =>
          setHeadingSize(
            e.target.value
          )
        }
        style={{
          width: "100%",
          padding: "15px",
          marginBottom: "20px",
        }}
      />

      {/* FONT WEIGHT */}
      <label>
        Heading Font Weight
      </label>

      <select
        value={headingWeight}
        onChange={(e) =>
          setHeadingWeight(
            e.target.value
          )
        }
        style={{
          width: "100%",
          padding: "15px",
          marginBottom: "20px",
        }}
      >

        <option value="400">
          Normal
        </option>

        <option value="500">
          Medium
        </option>

        <option value="700">
          Bold
        </option>

        <option value="900">
          Extra Bold
        </option>

      </select>

      {/* FONT COLOR */}
      <label>
        Heading Color
      </label>

      <input
        type="color"
        value={headingColor}
        onChange={(e) =>
          setHeadingColor(
            e.target.value
          )
        }
        style={{
          width: "100%",
          height: "60px",
          marginBottom: "20px",
        }}
      />

      {/* PARAGRAPH */}
      <h2>
        Paragraph
      </h2>

      <textarea
        placeholder="Paragraph"
        value={paragraph}
        onChange={(e) =>
          setParagraph(
            e.target.value
          )
        }
        style={{
          width: "100%",
          height: "150px",
          padding: "15px",
          marginBottom: "20px",
        }}
      />

      {/* PARAGRAPH SIZE */}
      <label>
        Paragraph Font Size
      </label>

      <input
        type="number"
        value={paragraphSize}
        onChange={(e) =>
          setParagraphSize(
            e.target.value
          )
        }
        style={{
          width: "100%",
          padding: "15px",
          marginBottom: "20px",
        }}
      />

      {/* PARAGRAPH WEIGHT */}
      <label>
        Paragraph Font Weight
      </label>

      <select
        value={paragraphWeight}
        onChange={(e) =>
          setParagraphWeight(
            e.target.value
          )
        }
        style={{
          width: "100%",
          padding: "15px",
          marginBottom: "20px",
        }}
      >

        <option value="300">
          Light
        </option>

        <option value="400">
         Normal
        </option>

        <option value="500">
          Medium
        </option>

        <option value="700">
          Bold
        </option>

      </select>

      {/* PARAGRAPH COLOR */}
      <label>
        Paragraph Color
      </label>

      <input
        type="color"
        value={paragraphColor}
        onChange={(e) =>
          setParagraphColor(
            e.target.value
          )
        }
        style={{
          width: "100%",
          height: "60px",
          marginBottom: "20px",
        }}
      />

      {/* BUTTON */}
      <button
        onClick={handleUpdate}
        style={{
          padding: "15px 30px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Update Hero
      </button>

    </div>

  );

};

export default AdminHero;