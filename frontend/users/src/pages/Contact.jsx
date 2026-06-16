import React, { useState } from "react";

import axios from "axios";

import "../styles/contact.css";

import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [successMessage, setSuccessMessage] = useState("");



  // HANDLE CHANGE

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };



  // HANDLE SUBMIT

  const handleSubmit = async (e) => {

    e.preventDefault();

    // VALIDATION

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.service ||
      !formData.message
    ) {

      alert("Please fill all fields");

      return;

    }

    try {

      const res = await axios.post(
        "https://cms-work.onrender.com/api/form/create",
        formData
      );

      setSuccessMessage(res.data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });

      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);

    } catch (error) {

      console.log(error);

      alert("Something went wrong");

    }
  };



  return (

    <>

      <Navbar />



      {/* HERO SECTION */}

      <section className="contact-hero">

        <h1 className="contact-bg-text">
          DESIGN U CRAVE
        </h1>

        <div className="contact-content">

          <h2>
            CONTACT US
          </h2>

        </div>

      </section>



      {/* CONTACT INTRO */}

      <section className="contact-intro-section">

        <div className="contact-intro-container">

          <div className="contact-intro-top">

            <div className="contact-intro-left">

              <div className="contact-green-shape"></div>

              <div className="contact-small-line"></div>

              <h2>
                GET IN TOUCH ANY TIME FOR
                <br />
                ANY HELP!
              </h2>

            </div>

            <div className="contact-intro-right">

              <p>
                We understand the importance of approaching
                each work integrally and believe in the power
                of simple.
              </p>

            </div>

          </div>

        </div>

      </section>



      {/* CONTACT FORM */}

      <section className="contact-form-section">

        <div className="contact-form-container">

          {/* LEFT */}

          <div className="contact-left-box">

            <div className="contact-info-card">

              <div className="contact-icon">
                📍
              </div>

              <div>

                <h3>OFFICE ADDRESS</h3>

                <p>
                  Oahfeo Workspaces,
                  <br />
                  1095P, Sector 46,
                  <br />
                  Gurugram 122018
                </p>

              </div>

            </div>



            <div className="contact-info-card">

              <div className="contact-icon">
                📱
              </div>

              <div>

                <h3>TELEPHONE NUMBER</h3>

                <p>
                  (+91) 96770 59655
                </p>

              </div>

            </div>



            <div className="contact-info-card">

              <div className="contact-icon">
                ✉️
              </div>

              <div>

                <h3>MAIL ADDRESS</h3>

                <p>
                  info@designucravetechnologies.com
                </p>

              </div>

            </div>

          </div>



          {/* RIGHT FORM */}

          <div className="contact-right-box">

            <p className="form-top-text">
              For any inquiries relating to my Retail and
              Leadership Programs*
            </p>



            {/* SUCCESS MESSAGE */}

            {
              successMessage && (

                <div className="success-message">

                  {successMessage}

                </div>

              )
            }



            <form onSubmit={handleSubmit}>

              <div className="contact-grid">

                {/* NAME */}

                <div className="input-group">

                  <label>
                    Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Your name*"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>



                {/* EMAIL */}

                <div className="input-group">

                  <label>
                    Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Mail*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>



                {/* PHONE */}

                <div className="input-group">

                  <label>
                    Phone
                  </label>

                  <input
                    type="text"
                    name="phone"
                    placeholder="Your phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                </div>



                {/* SERVICE */}

                <div className="input-group">

                  <label>
                    Services
                  </label>

                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                  >

                    <option value="">
                      Select Service
                    </option>

                    <option value="Web Design">
                      Web Design
                    </option>

                    <option value="App Development">
                      App Development
                    </option>

                    <option value="SEO">
                      SEO
                    </option>

                  </select>

                </div>

              </div>



              {/* MESSAGE */}

              <div className="message-group">

                <label>
                  Your message
                </label>

                <textarea
                  name="message"
                  placeholder="Type message*"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

              </div>



              {/* BUTTON */}

              <button
                type="submit"
                className="send-btn"
              >

                <span>✔</span>

                SEND MESSAGE

              </button>

            </form>

          </div>

        </div>

      </section>


{/* ================= BRANDS SECTION ================= */}

<section className="contact-brands-section">

  <div className="contact-brands-container">

    {/* TOP LINE */}

    <div className="contact-brands-line"></div>

    {/* CONTENT */}

    <div className="contact-brands-content">

      {/* LEFT */}

      <div className="contact-brands-left">

        <div className="contact-green-shape"></div>

        <h2>
          BRANDS WE'VE
          COLLABORATED
          
          WITH TEAM.
        </h2>

      </div>

      {/* RIGHT LOGOS */}

      <div className="contact-brands-grid">

        <div className="brand-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"
            alt=""
          />
        </div>

        <div className="brand-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
            alt=""
          />
        </div>

        <div className="brand-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968520.png"
            alt=""
          />
        </div>

        <div className="brand-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968242.png"
            alt=""
          />
        </div>

        <div className="brand-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968875.png"
            alt=""
          />
        </div>

        <div className="brand-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
            alt=""
          />
        </div>

        <div className="brand-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968866.png"
            alt=""
          />
        </div>

        <div className="brand-item">
          <img
            src="https://cdn-icons-png.flaticon.com/512/5968/5968946.png"
            alt=""
          />
        </div>

      </div>

    </div>

  </div>

</section>
      <Footer />

    </>

  );
};

export default Contact;