// ========================================
// FILE: src/pages/AdminNeab.jsx
// ========================================

import React, {
  useEffect,
  useState,
} from "react";

import axios from "axios";

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

          "http://localhost:5000/api/neab"

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

          "http://localhost:5000/api/neab",

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

    <div className="admin-neab">

      {/* TITLE */}

      <h1 className="admin-neab-title">

        Admin Neab Section

      </h1>

      {/* FORM */}

      <form onSubmit={handleSubmit}>

        {/* TAG */}

        <div>

          <label>

            Section Tag

          </label>

          <input
            type="text"
            name="tag"
            placeholder="Enter Section Tag"
            value={data.tag}
            onChange={handleChange}
          />

        </div>

        {/* HEADING */}

        <div>

          <label>

            Main Heading

          </label>

          <textarea
            name="heading"
            placeholder="Enter Main Heading"
            value={data.heading}
            onChange={handleChange}
          ></textarea>

        </div>

        {/* HEADING SIZE */}

        <div>

          <label>

            Heading Font Size

          </label>

          <input
            type="number"
            name="headingSize"
            placeholder="Enter Heading Font Size"
            value={data.headingSize}
            onChange={handleChange}
          />

        </div>

        {/* PARAGRAPH */}

        <div>

          <label>

            Paragraph

          </label>

          <textarea
            name="paragraph"
            placeholder="Enter Paragraph"
            value={data.paragraph}
            onChange={handleChange}
          ></textarea>

        </div>

        {/* PARAGRAPH SIZE */}

        <div>

          <label>

            Paragraph Font Size

          </label>

          <input
            type="number"
            name="paragraphSize"
            placeholder="Enter Paragraph Font Size"
            value={data.paragraphSize}
            onChange={handleChange}
          />

        </div>

        {/* IMAGE 1 */}

        <div>

          <label>

            Upload Main Image 1

          </label>

          <input
            type="file"
            onChange={(e) =>

              setFiles({

                ...files,

                image1:
                e.target.files[0],

              })

            }
          />

        </div>

        {/* IMAGE 2 */}

        <div>

          <label>

            Upload Main Image 2

          </label>

          <input
            type="file"
            onChange={(e) =>

              setFiles({

                ...files,

                image2:
                e.target.files[0],

              })

            }
          />

        </div>

        {/* CARD 1 */}

        <div className="admin-card-box">

          <h2 className="admin-section-title">

            Card 1

          </h2>

          <div>

            <label>

              Card 1 Title

            </label>

            <input
              type="text"
              name="card1Title"
              placeholder="Enter Card 1 Title"
              value={data.card1Title}
              onChange={handleChange}
            />

          </div>

          <div>

            <label>

              Card 1 Icon

            </label>

            <input
              type="file"
              onChange={(e) =>

                setFiles({

                  ...files,

                  card1Icon:
                  e.target.files[0],

                })

              }
            />

          </div>

        </div>

        {/* CARD 2 */}

        <div className="admin-card-box">

          <h2 className="admin-section-title">

            Card 2

          </h2>

          <div>

            <label>

              Card 2 Title

            </label>

            <input
              type="text"
              name="card2Title"
              placeholder="Enter Card 2 Title"
              value={data.card2Title}
              onChange={handleChange}
            />

          </div>

          <div>

            <label>

              Card 2 Icon

            </label>

            <input
              type="file"
              onChange={(e) =>

                setFiles({

                  ...files,

                  card2Icon:
                  e.target.files[0],

                })

              }
            />

          </div>

        </div>

        {/* CARD 3 */}

        <div className="admin-card-box">

          <h2 className="admin-section-title">

            Card 3

          </h2>

          <div>

            <label>

              Card 3 Title

            </label>

            <input
              type="text"
              name="card3Title"
              placeholder="Enter Card 3 Title"
              value={data.card3Title}
              onChange={handleChange}
            />

          </div>

          <div>

            <label>

              Card 3 Icon

            </label>

            <input
              type="file"
              onChange={(e) =>

                setFiles({

                  ...files,

                  card3Icon:
                  e.target.files[0],

                })

              }
            />

          </div>

        </div>

        {/* CARD 4 */}

        <div className="admin-card-box">

          <h2 className="admin-section-title">

            Card 4

          </h2>

          <div>

            <label>

              Card 4 Title

            </label>

            <input
              type="text"
              name="card4Title"
              placeholder="Enter Card 4 Title"
              value={data.card4Title}
              onChange={handleChange}
            />

          </div>

          <div>

            <label>

              Card 4 Icon

            </label>

            <input
              type="file"
              onChange={(e) =>

                setFiles({

                  ...files,

                  card4Icon:
                  e.target.files[0],

                })

              }
            />

          </div>

        </div>

        {/* BUTTON */}

        <button type="submit">

          Save Section

        </button>

      </form>

    </div>

  );

};

export default AdminNeab;