// ========================================
// FILE: src/pages/AdminNeab.jsx
// ========================================

import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";
import Sidebar from "../components/Sidebar";
import "../styles/adminNeab.css";

const AdminNeab = () => {

  const [data, setData] =
    useState({

      tag: "",

      heading: "",

      paragraph: "",

      headingSize: "68",

      paragraphSize: "20",

      card1Title: "",
      card2Title: "",
      card3Title: "",
      card4Title: "",

    });

  const [files, setFiles] =
    useState({});

  /* FETCH */

  useEffect(() => {

    fetchData();

  }, []);

  const fetchData = async () => {

    try {

      const res =
        await axios.get(

          "https://cms-work.onrender.com/api/neab"

        );

      if (res.data) {

        setData(res.data);

      }

    } catch (error) {

      console.log(error);

    }

  };

  /* INPUT CHANGE */

  const handleChange = (e) => {

    setData({

      ...data,

      [e.target.name]:
      e.target.value,

    });

  };

  /* SUBMIT */

  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        const formData =
          new FormData();

        /* TEXT DATA */

        Object.keys(data).forEach((key) => {

          formData.append(
            key,
            data[key]
          );

        });

        /* FILE DATA */

        Object.keys(files).forEach((key) => {

          formData.append(
            key,
            files[key]
          );

        });

        await axios.post(

          "https://cms-work.onrender.com/api/neab",

          formData

        );

        alert(
          "Neab Updated Successfully"
        );

      } catch (error) {

        console.log(error);

      }

  };

 return (
  <div className="feature-admin-layout">

    <Sidebar />

    <div className="admin-neab-page">

      <div className="admin-neab-container">

        <h1 className="admin-neab-title">
          Admin Neab Section
        </h1>

        <form onSubmit={handleSubmit}>

          {/* SECTION TAG */}
          <label>Section Tag</label>

          <input
            type="text"
            name="tag"
            placeholder="Enter Section Tag"
            value={data.tag}
            onChange={handleChange}
          />

          {/* MAIN HEADING */}
          <label>Main Heading</label>

          <textarea
            name="heading"
            placeholder="Enter Main Heading"
            value={data.heading}
            onChange={handleChange}
          />

          {/* HEADING FONT SIZE */}
          <label>Heading Font Size</label>

          <input
            type="number"
            name="headingSize"
            placeholder="Heading Font Size"
            value={data.headingSize}
            onChange={handleChange}
          />

          {/* PARAGRAPH */}
          <label>Paragraph</label>

          <textarea
            name="paragraph"
            placeholder="Enter Paragraph"
            value={data.paragraph}
            onChange={handleChange}
          />

          {/* PARAGRAPH FONT SIZE */}
          <label>Paragraph Font Size</label>

          <input
            type="number"
            name="paragraphSize"
            placeholder="Paragraph Font Size"
            value={data.paragraphSize}
            onChange={handleChange}
          />

          {/* IMAGE 1 */}
          <label>Upload Main Image 1</label>

          <input
            type="file"
            onChange={(e) =>
              setFiles({
                ...files,
                image1: e.target.files[0],
              })
            }
          />

          {/* IMAGE 2 */}
          <label>Upload Main Image 2</label>

          <input
            type="file"
            onChange={(e) =>
              setFiles({
                ...files,
                image2: e.target.files[0],
              })
            }
          />

          {/* CARD 1 */}
          <div className="admin-card-box">

            <h2 className="admin-section-title">
              Card 1
            </h2>

            <label>Card 1 Title</label>

            <input
              type="text"
              name="card1Title"
              placeholder="Card 1 Title"
              value={data.card1Title}
              onChange={handleChange}
            />

            <label>Card 1 Icon</label>

            <input
              type="file"
              onChange={(e) =>
                setFiles({
                  ...files,
                  card1Icon: e.target.files[0],
                })
              }
            />

          </div>

          {/* CARD 2 */}
          <div className="admin-card-box">

            <h2 className="admin-section-title">
              Card 2
            </h2>

            <label>Card 2 Title</label>

            <input
              type="text"
              name="card2Title"
              placeholder="Card 2 Title"
              value={data.card2Title}
              onChange={handleChange}
            />

            <label>Card 2 Icon</label>

            <input
              type="file"
              onChange={(e) =>
                setFiles({
                  ...files,
                  card2Icon: e.target.files[0],
                })
              }
            />

          </div>

          {/* CARD 3 */}
          <div className="admin-card-box">

            <h2 className="admin-section-title">
              Card 3
            </h2>

            <label>Card 3 Title</label>

            <input
              type="text"
              name="card3Title"
              placeholder="Card 3 Title"
              value={data.card3Title}
              onChange={handleChange}
            />

            <label>Card 3 Icon</label>

            <input
              type="file"
              onChange={(e) =>
                setFiles({
                  ...files,
                  card3Icon: e.target.files[0],
                })
              }
            />

          </div>

          {/* CARD 4 */}
          <div className="admin-card-box">

            <h2 className="admin-section-title">
              Card 4
            </h2>

            <label>Card 4 Title</label>

            <input
              type="text"
              name="card4Title"
              placeholder="Card 4 Title"
              value={data.card4Title}
              onChange={handleChange}
            />

            <label>Card 4 Icon</label>

            <input
              type="file"
              onChange={(e) =>
                setFiles({
                  ...files,
                  card4Icon: e.target.files[0],
                })
              }
            />

          </div>

          {/* SUBMIT BUTTON */}

          <button type="submit">
            Save Section
          </button>

        </form>

      </div>

    </div>

  </div>
);
};

export default AdminNeab;