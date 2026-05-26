import React from "react";
import "../styles/portfolio.css";

const PortfolioSection = () => {

  const projects = [
    {
      id: 1,
      title: "Almost Gods",
      desc: "Elevating fashion commerce -our design for Almost Gods blends global luxury with seamless shopping, redefining online retail for the modern era.",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?q=80&w=1600&auto=format&fit=crop",
      darkCard: true,
    },

    {
      id: 2,
      title: "Hearts with Fingers",
      desc: "Crafting conscious ecommerce that honors Indian heritage with seamless, ethical shopping.",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1600&auto=format&fit=crop",
      darkCard: false,
    },
  ];

  return (

    <section className="portfolio-section">

      <div className="portfolio-grid">

        {projects.map((item) => (

          <div className="portfolio-card" key={item.id}>

            {/* IMAGE */}

            <img
              src={item.image}
              alt={item.title}
            />

            {/* CONTENT */}

            <div
              className={`portfolio-content ${
                item.darkCard ? "dark-card" : "light-card"
              }`}
            >

              <h2>
                {item.title}
              </h2>

              <p>
                {item.desc}
              </p>

            </div>

            {/* BUTTON */}

          </div>

        ))}

      </div>

      {/* BUTTON */}

      <div className="portfolio-btn-wrapper">

        <button className="portfolio-btn">
          See All Projects
        </button>

      </div>

    </section>
  );
};

export default PortfolioSection;