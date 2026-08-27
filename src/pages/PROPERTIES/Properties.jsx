import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import "./Properties.css";

const ABOUT_HERO_IMAGE = "../../../omm-properties/banner2.jpeg";



/* Swap these for your real asset paths (same pattern as Home.jsx) */
const PROPERTIES = [
  {
    id: "debaki-empire",
    name: "DEBAKI EMPIRE",
    status: "ongoing",
    desc: "Step into a world where space meets sophistication. Our exclusive 3 BHK residences are thoughtfully crafted for families who appreciate comfort, elegance, and modern living.",
    image: "../../../debaki-empire/elevation-day-02.jpeg",
    path: "/debaki-empire",
  },
  {
    id: "debaki-empire-phase2",
    name: "DEBAKI EMPIRE Phase 02",
    status: "upcoming",
    desc: "Step into a world where space meets sophistication. Our exclusive 3 BHK residences are thoughtfully crafted for families who appreciate comfort, elegance, and modern living.",
    image: "../../../image/debaki-empire.jpeg",
    path: "/debaki-empire",
  },
  {
    id: "omm-signature",
    name: "OMM SIGNATURE",
    status: "ongoing",
    desc: "Details of our next exciting development will be revealed soon. Stay tuned for launch dates, floor plans, and early-bird offers.",
    image: "../../../omm-properties/omm-structure.jpg",
    path: "/omm-signature",
  },
  {
    id: "jutee-cottage-phase1",
    name: "JUTEE COTTAGE Phase 1",
    status: "completed",
    desc: "Exclusive duplex housing project designed for those who value privacy, space, and independent living in a peaceful and beautifully planned community.",
    image: "../../../image/jutee-cottage.jpeg",
    path: "/jutee-cottage",
  },
  {
    id: "omm-homes",
    name: "OMM HOMES",
    status: "completed",
    desc: "Our duplex homes are designed to provide the ultimate in privacy and luxury. With spacious living areas spread over two floors, these homes offer a unique blend of comfort and elegance.",
    image: "../../../image/omm-home.jpeg",
    path: "/omm-homes",
  },   
  {
    id: "jutee-cottage-phase2",
    name: "JUTEE COTTAGE Phase 2",
    status: "upcoming",
    desc: "Exclusive duplex housing project designed for those who value privacy, space, and independent living in a peaceful and beautifully planned community.",
    image: "../../../jutee-cottage/render-02-street.jpg",
    path: "/jutee-cottage",
  },
 
];

const FILTERS = [
  { id: "all", label: "All" },
  { id: "upcoming", label: "Upcoming" },
  { id: "ongoing", label: "Ongoing" },
  { id: "completed", label: "Completed" },
];

const STATUS_LABEL = {
  upcoming: "Upcoming",
  ongoing: "Ongoing",
  completed: "Completed",
};

export default function Properties() {
  const [activeFilter, setActiveFilter] = useState("all");

  // De-dupe by id first (in case the data source ever has a repeated
  // entry), then filter by the selected status. "all" returns every
  // unique property; any other value returns only exact status matches.
  const uniqueProperties = useMemo(() => {
    const seen = new Map();
    PROPERTIES.forEach((p) => {
      if (!seen.has(p.id)) seen.set(p.id, p);
    });
    return Array.from(seen.values());
  }, []);

  const filtered = useMemo(() => {
    if (activeFilter === "all") return uniqueProperties;
    return uniqueProperties.filter((p) => p.status === activeFilter);
  }, [activeFilter, uniqueProperties]);

  return (
    <>
    {/* ================= SECTION 1: ABOUT BANNER ================= */}
      <section
        className="about-hero"
        style={{ backgroundImage: `url(${ABOUT_HERO_IMAGE})` }}
      >
        <div className="about-hero__inner">
          <h1 className="about-hero__title">
            ABOUT{" "}
            <span className="about-hero__title--glow">
              OMM TECH &amp; PROPERTIES
            </span>
          </h1>
          <p className="about-hero__subtitle">
            Building Dreams. Creating Landmarks. Delivering Trust.
          </p>
        </div>
      </section>

      {/* ================= PROPERTIES ================= */}
      <section className="omproperty-section">
        <div className="omproperty-grid-bg" aria-hidden="true" />

        <div className="omproperty-header">
          <h2 className="omproperty-title">
            {/* <span className="omproperty-rule" aria-hidden="true" /> */}
            OUR PROPERTIES
            
          </h2>
          <p className="omproperty-subtitle" >
            Browse our residential projects by status — from upcoming
            launches to completed landmarks.
          </p>
        </div>

        <div className="omproperty-filters">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              className={`omproperty-filter-tab ${
                activeFilter === f.id ? "omproperty-filter-tab--active" : ""
              }`}
              onClick={() => setActiveFilter(f.id)}
              aria-pressed={activeFilter === f.id}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="omproperty-grid">
          {filtered.map((p) => (
            <article className="omproperty-card" key={p.id}>
              <div className="omproperty-card__image-wrap">
                <img
                  src={p.image}
                  alt={p.name}
                  className="omproperty-card__image"
                />
                <span
                  className={`omproperty-status-badge omproperty-status-badge--${p.status}`}
                >
                  {STATUS_LABEL[p.status]}
                </span>
              </div>

              <div className="omproperty-card__body">
                <h3 className="omproperty-card__title">{p.name}</h3>
                <p className="omproperty-card__desc">{p.desc}</p>
                <Link
                  to={p.path}
                  className="omproperty-btn omproperty-btn--solid omproperty-btn--full"
                >
                  View Details
                </Link>
              </div>
            </article>
          ))}

          {filtered.length === 0 && (
            <p className="omproperty-empty">
              No properties found for this filter yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}