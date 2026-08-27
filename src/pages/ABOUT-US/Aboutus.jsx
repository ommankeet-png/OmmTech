import React from "react";
import "./Aboutus.css";
import { useNavigate } from "react-router-dom";

/* Swap these for your real asset paths (same pattern as Home.jsx) */

const ABOUT_HERO_IMAGE = "../../../aboutpage-images/about-banner1.jpg";
const WHO_WE_ARE_IMAGE = "../../../aboutpage-images/aboutpage-logo.jpeg";
const OUR_STORY_IMAGE = "../../../aboutpage-images/about-banner1.jpg";


const MVV = [
  {
    id: "mission",
    icon: "🏆",
    title: "Our Mission",
    desc: "To provide reliable, transparent, and innovative real estate solutions while creating lasting value for our customers, investors, and communities.",
  },
  {
    id: "vision",
    icon: "🎯",
    title: "Our Vision",
    desc: "To become one of India's most trusted real estate and technology companies by delivering excellence, quality, and customer satisfaction.",
  },
  {
    id: "values",
    icon: "⭐",
    title: "Our Values",
    desc: "Integrity, Innovation, Transparency, Quality, Customer Satisfaction, and Long-Term Relationships are the foundation of everything we do.",
  },
];

const STATS = [
  { id: "years", value: "15+", label: "Years Experience" },
  { id: "clients", value: "500+", label: "Happy Clients" },
  { id: "projects", value: "50+", label: "Completed Projects" },
  { id: "satisfaction", value: "100%", label: "Customer Satisfaction" },
];

const WHY_CHOOSE = [
  {
    id: "trusted",
    title: "Trusted Company",
    desc: "Years of experience delivering premium residential and commercial properties with complete transparency.",
  },
  {
    id: "affordable",
    title: "Affordable Pricing",
    desc: "We offer competitive pricing with flexible investment opportunities for every type of buyer.",
  },
  {
    id: "legal",
    title: "Legal Assistance",
    desc: "Complete documentation support and legal verification for a hassle-free property purchase.",
  },
  {
    id: "locations",
    title: "Premium Locations",
    desc: "Carefully selected locations with excellent connectivity, future growth potential, and modern infrastructure.",
  },
  {
    id: "team",
    title: "Professional Team",
    desc: "Experienced engineers, consultants, and property experts committed to providing exceptional customer service.",
  },
  {
    id: "tech",
    title: "Technology Driven",
    desc: "We combine modern technology with real estate expertise to provide smarter and faster property solutions.",
  },
];

const SERVICES = [
  // {
  //   id: "residential",
  //   icon: "🏠",
  //   title: "Residential Projects",
  //   desc: "Premium apartments, villas, and gated communities designed for modern families.",
  // },
  // {
  //   id: "commercial",
  //   icon: "🏢",
  //   title: "Commercial Properties",
  //   desc: "Office spaces, commercial buildings, and business investment opportunities.",
  // },
  // {
  //   id: "land",
  //   icon: "📍",
  //   title: "Land & Plots",
  //   desc: "DTCP/RERA approved residential and commercial plots in prime locations.",
  // },
  // {
  //   id: "consultancy",
  //   icon: "💼",
  //   title: "Property Consultancy",
  //   desc: "Expert guidance for buying, selling, and investing in real estate.",
  // },
  // {
  //   id: "legal-docs",
  //   icon: "📄",
  //   title: "Legal Documentation",
  //   desc: "Complete documentation support and legal verification for every property transaction.",
  // },
  // {
  //   id: "tech-solutions",
  //   icon: "💻",
  //   title: "Technology Solutions",
  //   desc: "AI-powered property solutions, digital marketing, and smart real estate services.",
  // },
   {
    id: "residential",
    icon: "🏠",
    title: "Residential Projects",
    desc: "Luxury apartments, independent villas, duplex homes, and gated communities designed for comfortable and modern family living.",
  },
  {
    id: "commercial",
    icon: "🏢",
    title: "Commercial Projects",
    desc: "Premium office spaces, retail shops, commercial complexes, business parks, and investment-ready commercial properties.",
  },
  {
    id: "interior",
    icon: "🛋️",
    title: "Interior Projects",
    desc: "Complete residential and commercial interior design solutions, including modular kitchens, false ceilings, furniture, lighting, and space planning.",
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

export default function About() {
    const navigate = useNavigate();
  return (
    <>
      {/* Floating particles across the whole page, same effect as HeroSection */}
      <div className="about__particles" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="about__particle"
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

      {/* ================= SECTION 2: WHO WE ARE ================= */}
      <section className="who-we-are">
        <div className="who-we-are__inner">
          <div className="who-we-are__frame">
            <span className="corner corner--tl" />
            <span className="corner corner--br" />
            <img
              src={WHO_WE_ARE_IMAGE}
              alt="Omm Tech Properties development"
              className="who-we-are__image"
            />
          </div>

          <div className="who-we-are__copy">
            <h2 className="section-title">
              <span className="section-bar" aria-hidden="true" />
              Who We Are
            </h2>
            <p className="section-text">
              OMM TECH &amp; PROPERTIES is a trusted real estate and
              technology company dedicated to delivering quality,
              innovation, and customer satisfaction.
            </p>
            <p className="section-text">
              We specialize in residential properties, commercial
              developments, investment consulting, property management, and
              technology-driven real estate solutions.
            </p>
            <p className="section-text">
              With experienced professionals and a customer-first approach,
              we help clients make the right property decisions with
              complete transparency.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: OUR STORY ================= */}
      <section className="our-story">
        <div className="our-story__inner">
          <div className="our-story__copy">
            <h2 className="section-title">
              <span className="section-bar" aria-hidden="true" />
              Our Story
            </h2>
            <p className="section-text">
              Since our beginning, our vision has been to create premium
              living spaces while making property buying, selling, and
              investment easier through technology.
            </p>
            <p className="section-text">
              Our team combines construction expertise, innovative ideas,
              and digital solutions to deliver world-class projects across
              residential, commercial, and investment sectors.
            </p>
            <p className="section-text">
              Today we continue expanding with one goal — providing quality
              homes and trusted property services for every customer.
            </p>
          </div>

          <div className="our-story__frame">
            <span className="corner corner--tl" />
            <span className="corner corner--br" />
            <img
              src={OUR_STORY_IMAGE}
              alt="Omm Tech Debaki Empire entrance"
              className="our-story__image"
            />
          </div>
        </div>
      </section>

      {/* ================= SECTION 4: MISSION / VISION / VALUES + STATS ================= */}
      <section className="mvv">
        <div className="mvv__grid">
          {MVV.map((item) => (
            <article className="mvv-card" key={item.id}>
              <h3 className="mvv-card__title">
                <span className="mvv-card__icon">{item.icon}</span>
                {item.title}
              </h3>
              <p className="mvv-card__desc">{item.desc}</p>
            </article>
          ))}
        </div>

        <div className="stats">
          {STATS.map((s) => (
            <div className="stats-card" key={s.id}>
              <p className="stats-card__value">{s.value}</p>
              <p className="stats-card__label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SECTION 5: WHY CHOOSE US ================= */}
      <section className="why-choose">
        <h2 className="why-choose__title">
          Why Choose <span className="gold-glow">OMM TECH &amp; PROPERTIES?</span>
        </h2>

        <div className="why-choose__grid">
          {WHY_CHOOSE.map((item) => (
            <article className="feature-card" key={item.id}>
              <h3 className="feature-card__title">
                <span className="feature-card__check">✓</span>
                {item.title}
              </h3>
              <p className="feature-card__desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ================= SECTION 6: OUR SERVICES ================= */}
      <section className="services">
        <h2 className="services__title">Our Services</h2>

        <div className="services__grid">
          {SERVICES.map((item) => (
            <article className="feature-card" key={item.id}>
              <h3 className="feature-card__title">
                <span className="feature-card__icon">{item.icon}</span>
                {item.title}
              </h3>
              <p className="feature-card__desc">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ================= SECTION 7: CTA ================= */}
      <section className="about-cta">
        <div className="about-cta__card">
          <h2 className="about-cta__title">Let&rsquo;s Build Your Dream Together</h2>
          <p className="about-cta__desc">
            Whether you&rsquo;re buying your first home, investing in
            commercial property, or looking for expert consultation, OMM
            TECH &amp; PROPERTIES is here to help.
          </p>
          <button className="btn btn--gold" 
           onClick={() => navigate("/")}
           >Back to Home
           </button>
        </div>
      </section>
    </>
  );
}