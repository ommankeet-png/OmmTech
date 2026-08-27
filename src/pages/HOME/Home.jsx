import React, { useState, useEffect } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";

const WHATSAPP_NUMBER = "917008058453";

const SLIDES = [
  {
    id: "slide-1",
    eyebrow: "OMM  TECH PROPERTIES",
    headline: "DEBAKI EMPIRE",
    desc: "Step into a world where space meets sophistication. Our exclusive 3 BHK residences are thoughtfully crafted for families who appreciate comfort, elegance, and modern living.",
    image: "../../../image/debaki-empire.jpeg",
    path: "/debaki-empire",
  },
  {
    id: "slide-2",
    eyebrow: "OMM  TECH PROPERTIES",
    headline: "OMM SIGNATURE",
    desc: "Premium 3 BHK, 3.5 BHK and 4 BHK residences offering luxury, convenience, spacious layouts, refined interiors, and world-class amenities.",
    image: "../../../image/omm-signature.jpeg",
    path: "/omm-signature",
  },
  {
    id: "slide-3",
    eyebrow: "OMM  TECH PROPERTIES",
    headline: "JUTEE COTTAGE",
    desc: "Exclusive duplex housing project designed for those who value privacy, space, and independent living in a peaceful and beautifully planned community.",
    image: "../../../image/jutee-cottage.jpeg",
    path: "/jutee-cottage",
  },
  {
    id: "slide-4",
    eyebrow: "OMM  TECH PROPERTIES",
    headline: "OMM HOMES",
    desc: "Our duplex homes are designed to provide the ultimate in privacy and luxury. With spacious living areas spread over two floors, these homes offer a unique blend of comfort and elegance.",
    image: "../../../image/omm-home.jpeg",
    path: "/omm-homes",
  },
];

const TEAM = [
  {
    id: "smita",
    name: "SMITA REKHA MOHANTY",
    role: "CEO",
    desc: "Leading the organization with vision, innovation, and excellence.",
    image: "../../../teammember-image/smitarekha.webp",
  },
  {
    id: "ashok",
    name: "ASHOK KUMAR PATRA",
    role: "GENERAL MANAGER",
    desc: "Leading operations with strategic vision, ensuring excellence across every project.",
    image: "../../../teammember-image/akpatra1-gm.jpeg",
  },
  {
    id: "manasmita",
    name: "MANASMITA SAMAL",
    role: "HRM",
    desc: "Helping clients find their dream homes with confidence.",
    image: "../../../teammember-image/manasmita1-hrm.jpeg",
  },
  {
    id: "pratap",
    name: "PRATAP CHANDRA PATRA",
    role: "MARKETING",
    desc: "Ensuring every project is delivered with perfection.",
    image: "../../../teammember-image/pratap1-marketing.jpeg",
  },
  {
    id: "jitendra",
    name: "JITENDRA PATRA",
    role: "SUPERVISOR",
    desc: "Overseeing construction quality and project execution.",
    image: "../../../teammember-image/jitendra1-supervisor.jpeg",
  },
  {
    id: "rituraj",
    name: "RUTURAJ MOHANTY",
    role: "Site Supervisor",
    desc: "Overseeing site activities to ensure quality, safety, and timely project completion.",
    image: "../../../teammember-image/rituraj-sitevisitor.jpeg",
  },
];

const PARTICLES = [
  { left: "3%", size: 3, duration: 14, delay: 0, drift: 12 },
  { left: "8%", size: 2, duration: 18, delay: 2, drift: -8 },
  { left: "13%", size: 5, duration: 12, delay: 4, drift: 10 },
  { left: "19%", size: 2, duration: 20, delay: 1, drift: -14 },
  { left: "25%", size: 3, duration: 16, delay: 6, drift: 8 },
  { left: "31%", size: 2, duration: 13, delay: 3, drift: -10 },
  { left: "38%", size: 4, duration: 19, delay: 5, drift: 14 },
  { left: "45%", size: 2, duration: 15, delay: 0.5, drift: -6 },
  { left: "52%", size: 3, duration: 17, delay: 7, drift: 12 },
  { left: "58%", size: 5, duration: 12, delay: 2.5, drift: -12 },
  { left: "64%", size: 2, duration: 21, delay: 4.5, drift: 9 },
  { left: "70%", size: 3, duration: 14, delay: 1.5, drift: -9 },
  { left: "76%", size: 4, duration: 18, delay: 6.5, drift: 11 },
  { left: "82%", size: 2, duration: 16, delay: 3.5, drift: -13 },
  { left: "88%", size: 3, duration: 13, delay: 5.5, drift: 7 },
  { left: "93%", size: 5, duration: 20, delay: 1, drift: -10 },
  { left: "97%", size: 2, duration: 15, delay: 8, drift: 10 },
];

const EMPTY_ENQUIRY = {
  name: "",
  mobile: "",
  email: "",
  city: "",
  propertyType: "",
  budget: "",
  message: "",
};

const EMPTY_POPUP = {
  name: "",
  mobile: "",
  email: "",
  propertyType: "",
};

// Builds a readable WhatsApp message from whatever fields a form provides.
function buildWhatsAppMessage(data) {
  const lines = [
    "Hi, I'm interested in OMM TECH PROPERTIES. Please share the availability and pricing.",
    "",
    `Name: ${data.name || "-"}`,
    `Mobile: ${data.mobile || "-"}`,
    `Email: ${data.email || "-"}`,
  ];

  if (data.city !== undefined) lines.push(`City: ${data.city || "-"}`);
  lines.push(`Property Type: ${data.propertyType || "-"}`);
  if (data.budget !== undefined) lines.push(`Budget: ${data.budget || "-"}`);
  if (data.message) lines.push(`Message: ${data.message}`);

  return lines.join("\n");
}

export default function HeroSection() {
  const navigate = useNavigate();

  const [index, setIndex] = useState(0);
  const total = SLIDES.length;
  const current = SLIDES[index];

  const goTo = (i) => setIndex(((i % total) + total) % total);

  // Auto-advance the hero image/content every 5s. Resets whenever the
  // slide changes, so a manual click also restarts the window.
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 5000);
    return () => clearInterval(timer);
  }, [index, total]);

  /* ---------------- Main enquiry form ---------------- */
  const [formData, setFormData] = useState(EMPTY_ENQUIRY);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(buildWhatsAppMessage(formData));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    setFormData(EMPTY_ENQUIRY);
  };

  /* ---------------- Popup enquiry form ---------------- */
  const [showPopup, setShowPopup] = useState(false);
  const [popupData, setPopupData] = useState(EMPTY_POPUP);

  useEffect(() => {
    const t = setTimeout(() => {
      setShowPopup(true);
    }, 2000);
    return () => clearTimeout(t);
  }, []);

  // Prevent background scroll while popup is open
  useEffect(() => {
    document.body.style.overflow = showPopup ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showPopup]);

  const closePopup = () => setShowPopup(false);

  const handlePopupChange = (e) => {
    const { name, value } = e.target;
    setPopupData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePopupSubmit = (e) => {
    e.preventDefault();
    const message = encodeURIComponent(buildWhatsAppMessage(popupData));
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    setPopupData(EMPTY_POPUP);
    setShowPopup(false);
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero__grid" aria-hidden="true" />
        <div className="hero__glow" aria-hidden="true" />

        <div className="hero__particles" aria-hidden="true">
          {PARTICLES.map((p, i) => (
            <span
              key={i}
              className="hero__particle"
              style={{
                left: p.left,
                width: p.size,
                height: p.size,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                "--drift": `${p.drift}px`,
              }}
            />
          ))}
        </div>

        <div className="hero__inner">
          <div className="hero__copy hero__copy--fade" key={current.id}>
            <p className="hero__eyebrow">// {current.eyebrow}</p>

            <h1 className="hero__title">
              <span className="hero__title--glow">{current.headline}</span>
            </h1>

            <p className="hero__desc">{current.desc}</p>

            <div className="hero__actions">
              <button
                className="btn btn--solid"
                onClick={() => navigate("/properties")}
              >
                BROWSE PROPERTIES
              </button>
              <button
                className="btn btn--outline"
                onClick={() => navigate("/contact")}
              >
                BOOK A CONSULTATION
              </button>
            </div>
          </div>

          <div className="hero__viewer">
            <span className="corner corner--tl" />
            <span className="corner corner--br" />

            <div className="viewer__frame">
              <img
                key={current.image}
                className="viewer__image"
                src={current.image}
                alt={current.headline}
              />

              <button
                className="viewer__nav viewer__nav--prev"
                onClick={() => goTo(index - 1)}
                aria-label="Previous property"
              >
                ‹
              </button>
              <button
                className="viewer__nav viewer__nav--next"
                onClick={() => goTo(index + 1)}
                aria-label="Next property"
              >
                ›
              </button>

              <div className="viewer__overlay">
                <p className="viewer__label">// {current.eyebrow}</p>
                <div className="viewer__meta">
                  <h2 className="viewer__name">{current.headline}</h2>
                  <p className="viewer__code">
                    {String(index + 1).padStart(2, "0")}/
                    {String(total).padStart(2, "0")}
                  </p>
                </div>
              </div>
            </div>

            <div className="viewer__pagination">
              {SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  className={`pagination__item ${
                    i === index ? "pagination__item--active" : ""
                  }`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to ${s.headline}`}
                  aria-current={i === index}
                >
                  <span className="pagination__num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="pagination__bar" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="hero__divider" />
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about">
        <div className="about__inner">
          <div className="about__copy">
            <h2 className="about__title">
              <span className="about__bar" aria-hidden="true" />
              OMM TECH AND PROPERTIES
            </h2>

            <p className="about__text">
              Welcome to OMM TECH PROPERTIES, your trusted partner in real
              estate for over a decade. With 15 years of experience in the
              real estate industry, we are dedicated to helping you find your
              perfect home.
            </p>

            <p className="about__text">
              OMM TECH PROPERTIES offers 2 BHK, 3 BHK, 3.5 BHK, and 4 BHK
              apartments in Bhubaneswar and Cuttack at affordable prices,
              featuring modern amenities and prime locations.
            </p>

            <button
              className="btn btn--ribbon"
              onClick={() => navigate("/properties")}
            >
              BOOK FOR SITE VISIT
            </button>
          </div>

          <div className="about__panel">
            <p className="about__panel-lead">
              // Contact us today for more details and to schedule a site
              visit.
            </p>
            <p className="about__panel-text">
              It&rsquo;s designed for those who demand different. Ideal for
              smaller families or individuals seeking a cozy yet stylish
              living environment&hellip;
            </p>
            <p className="about__panel-highlight">
              Our 4BHK, 3BHK, 3.5BHK &amp; 2BHK flats are designed to provide
              the ultimate in privacy and luxury, with spacious living
              areas&hellip;
            </p>
          </div>
        </div>
      </section>

      {/* ================= WE STAND FOR ================= */}
      <section className="stand">
        <div className="stand__header">
          <h2 className="stand__title">
            {/* <span className="stand__rule" aria-hidden="true" /> */}
            WE STAND FOR
            {/* <span className="stand__rule" aria-hidden="true" /> */}
          </h2>
          <p className="stand__subtitle">
            Discover our premium residential projects designed to offer
            comfort, luxury, and a modern lifestyle for every family.
          </p>
        </div>

        <div className="stand__grid">
          {SLIDES.map((s) => (
            <article className="project-card" key={s.id}>
              <div className="project-card__image-wrap">
                <img
                  src={s.image}
                  alt={s.headline}
                  className="project-card__image"
                />
              </div>
              <div className="project-card__body">
                <h3 className="project-card__title">{s.headline}</h3>
                <p className="project-card__desc">{s.desc}</p>
                <button
                  className="btn btn--solid btn--full"
                  onClick={() => navigate(s.path)}
                >
                  Visit Now
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= HIGHLIGHT ================= */}
      <section className="highlight">
        <div className="highlight__inner">
          <div className="highlight__copy">
            <h2 className="highlight__title">
              3 BHK, 3.5 BHK and 4 BHK{" "}
              <span className="highlight__title--glow">
                Flats in Bhubaneswar and Cuttack
              </span>{" "}
              at affordable prices.
            </h2>

            <p className="highlight__desc">
              At OMM TECH PROPERTIES, we understand that finding the perfect
              3 BHK, 3.5 BHK and 4 BHK flats in Bhubaneswar and Cuttack at
              affordable prices is more than just a transaction; it&rsquo;s
              about creating a space where memories are made and dreams are
              realized.
            </p>

            <button
              className="btn btn--solid"
              onClick={() => navigate(SLIDES[0].path)}
            >
              Visit Now
            </button>
          </div>

          <div className="highlight__frame">
            <span className="corner corner--tl" />
            <span className="corner corner--br" />
            <img
              src={SLIDES[0].image}
              alt="OMM Tech Properties development"
              className="highlight__image"
            />
          </div>
        </div>
      </section>

      {/* ================= MEET OUR TEAM ================= */}
      <section className="team">
        <div className="team__header">
          <h2 className="team__title">Meet Our Team</h2>
          <p className="team__subtitle">
            Our experienced professionals are dedicated to helping you find
            the perfect property and ensuring a seamless experience.
          </p>
        </div>

        <div className="team__grid">
          {TEAM.map((member) => (
            <article className="team-card" key={member.id}>
              <div className="team-card__image-wrap">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team-card__image"
                />
              </div>
              <div className="team-card__body">
                <h3 className="team-card__name">{member.name}</h3>
                <p className="team-card__role">{member.role}</p>
                <p className="team-card__desc">{member.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= ENQUIRY FORM ================= */}
      <section className="enquiry">
        <form className="enquiry__card" onSubmit={handleEnquirySubmit}>
          <h2 className="enquiry__title">Enquiry Form</h2>

          <input
            className="enquiry__input"
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            className="enquiry__input"
            type="tel"
            name="mobile"
            placeholder="Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
          <input
            className="enquiry__input"
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            className="enquiry__input"
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />

          <select
            className="enquiry__input enquiry__select"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
          >
            <option value="" disabled>
              Select Property Type
            </option>
            <option value="2bhk">2 BHK</option>
            <option value="3bhk">3 BHK</option>
            <option value="3.5bhk">3.5 BHK</option>
            <option value="4bhk">4 BHK</option>
          </select>

          <input
            className="enquiry__input"
            type="text"
            name="budget"
            placeholder="Budget"
            value={formData.budget}
            onChange={handleChange}
          />
          <textarea
            className="enquiry__input enquiry__textarea"
            name="message"
            placeholder="Your Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
          />

          <button className="btn btn--solid btn--full" type="submit">
            Submit Enquiry
          </button>
        </form>
      </section>

      {/* ================= POPUP ENQUIRY FORM ================= */}
      {showPopup && (
        <div
          className="popup__overlay"
          onClick={closePopup}
          role="presentation"
        >
          <div
            className="popup__card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="popup-enquiry-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="popup__close"
              onClick={closePopup}
              aria-label="Close enquiry form"
              type="button"
            >
              ×
            </button>

            <h2 className="popup__title" id="popup-enquiry-title">
              Get In Touch
            </h2>
            <p className="popup__subtitle">
              Leave your details and our team will reach out with the best
              options for you.
            </p>

            <form className="popup__form" onSubmit={handlePopupSubmit}>
              <input
                className="enquiry__input"
                type="text"
                name="name"
                placeholder="Full Name"
                value={popupData.name}
                onChange={handlePopupChange}
                required
              />
              <input
                className="enquiry__input"
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={popupData.mobile}
                onChange={handlePopupChange}
                required
              />
              <input
                className="enquiry__input"
                type="email"
                name="email"
                placeholder="Email Address"
                value={popupData.email}
                onChange={handlePopupChange}
                required
              />

              <select
                className="enquiry__input enquiry__select"
                name="propertyType"
                value={popupData.propertyType}
                onChange={handlePopupChange}
              >
                <option value="" disabled>
                  Select Property Type
                </option>
                <option value="2bhk">2 BHK</option>
                <option value="3bhk">3 BHK</option>
                <option value="3.5bhk">3.5 BHK</option>
                <option value="4bhk">4 BHK</option>
              </select>

              <button className="btn btn--solid btn--full" type="submit">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Global fixed elements */}
      <div className="hero__fabs">
        {/* <button className="fab" aria-label="Scroll to top">
          ↑
        </button> */}
      </div>

      {/* <div className="cta-stack">
        <a className="cta-ribbon cta-ribbon--call" href="tel:">
          {Icon.phone}
          <span>CALL US</span>
        </a>
        <a className="cta-ribbon cta-ribbon--visit" href="https://wa.me/">
          {Icon.chat}
          <span>SITE VISIT</span>
        </a>
      </div> */}
    </>
  );
}