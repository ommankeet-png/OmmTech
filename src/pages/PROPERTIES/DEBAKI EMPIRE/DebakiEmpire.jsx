import React, { useState, useEffect, useCallback } from "react";
import "./DebakiEmpire.css";

/* ============================================================
   CONFIG — swap these for the real values whenever they change
   ============================================================ */
const WHATSAPP_NUMBER = "917008058453";
const BROCHURE_PATH = "../../../brochure/BROUCHER DEBAKI EMPIRE.pdf";
const LOCATION_URL = "https://maps.app.goo.gl/etVWnE3J771zeZD47?g_st=awb";

const HERO_SLIDES = [
  {
    id: "hero-1",
    image: "../../../debaki-empire/aerial-day-entrance-01.jpeg",
    caption: "Aerial view, Kesura Road",
  },
  {
    id: "hero-2",
    image: "../../../debaki-empire/aerial-night-01.jpeg",
    caption: "DEBAKI EMPIRE by night",
  },
  {
    id: "hero-3",
    image: "../../../debaki-empire/elevation-day-01.jpeg",
    caption: "Street elevation",
  },
  {
    id: "hero-4",
    image: "../../../debaki-empire/entrance-night-01.jpeg",
    caption: "Entrance gate, evening",
  },
];

const ELEMENTS = [
  {
    id: "el-1",
    label: "Earth",
    sanskrit: "Prithvi",
    desc: "Landscaped gardens and a community temple bring a nature-filled, grounded atmosphere.",
  },
  {
    id: "el-2",
    label: "Air",
    sanskrit: "Vayu",
    desc: "A state-of-the-art gymnasium, EV charging and open design keep air and wellness flowing freely.",
  },
  {
    id: "el-3",
    label: "Space",
    sanskrit: "Akasha",
    desc: "An AC community hall and clubhouse give residents room to connect and celebrate.",
  },
  {
    id: "el-4",
    label: "Fire",
    sanskrit: "Agni",
    desc: "Solar rooftop panels and solar-equipped parking harness the sun for an eco-friendly lifestyle.",
  },
  {
    id: "el-5",
    label: "Water",
    sanskrit: "Jal",
    desc: "Rainwater harvesting and a rooftop swimming pool honour water as a source of calm.",
  },
];

const AMENITIES = [
  {
    id: "am-1",
    title: "ROOFTOP SWIMMING POOL",
    desc: "Sun deck, lounge chairs and a separate children's pool with water.",
    image: "../../../debaki-empire/entrance-day-01.jpeg",
  },
  {
    id: "am-2",
    title: "SKYWALK",
    desc: "Seamlessly connects the residences with a river view and panoramic cityscapes.",
    image: "../../../debaki-empire/aerial-day-temple-01.jpeg",
  },
  {
    id: "am-3",
    title: "COMMUNITY TEMPLE",
    desc: "A serene, architecturally designed temple with meditation areas for daily practice.",
    image: "../../../debaki-empire/elevation-entrance-day-01.jpeg",
  },
  {
    id: "am-4",
    title: "CHILDREN'S PARK",
    desc: "Safe, well-equipped play areas with soft rubber flooring and shaded seating for parents.",
    image: "../../../debaki-empire/entrance-day-02.jpeg",
  },
];

const AMENITY_LIST = [
  { id: "l-1", label: "Jogging Track", desc: "Elevate your lifestyle in a nature-friendly environment." },
  { id: "l-2", label: "Gardens", desc: "Extensive landscaped areas with walking paths and benches." },
  { id: "l-3", label: "Parking", desc: "Secure, underground parking with EV charging for each spot." },
  { id: "l-4", label: "Community Hall", desc: "Spacious AC hall for social events and celebrations." },
  { id: "l-5", label: "Security", desc: "Biometric entry, 24/7 monitored security and smart locks." },
  { id: "l-6", label: "Transportation", desc: "Easy access to public transportation." },
];

const DISTANCES = [
  {
    id: "d-1",
    group: "EDUCATION",
    items: [
      { label: "DPS Kalinga School", value: "15 min (12 km)" },
      { label: "Mothers Public School", value: "12 min (08 km)" },
      { label: "BJEM2 School", value: "08 min (04 km)" },
      { label: "PJ College", value: "03 min (01 km)" },
    ],
  },
  {
    id: "d-2",
    group: "COMMUNICATION",
    items: [
      { label: "Airport", value: "15 min (07 km)" },
      { label: "Railway Station", value: "10 min (06 km)" },
      { label: "Puri Bypass Road", value: "05 min (02 km)" },
      { label: "Rasulgarh", value: "10 min (05 km)" },
    ],
  },
  {
    id: "d-3",
    group: "HEALTH CARE",
    items: [
      { label: "Hi-Tech Hospital", value: "05 min (03 km)" },
      { label: "Sum Hospital", value: "12 min (08 km)" },
      { label: "AIIMS Hospital", value: "25 min (16 km)" },
    ],
  },
  {
    id: "d-4",
    group: "MALLS",
    items: [
      { label: "Esplanade", value: "15 min (07 km)" },
      { label: "Symphony Mall", value: "15 min (08 km)" },
      { label: "Grand Bazaar", value: "20 min (12 km)" },
      { label: "Utkal Galeria", value: "15 min (07 km)" },
    ],
  },
];

const SPECS = [
  { id: "s-1", label: "Foundation", value: "Earthquake resistant frame / load bearing structure; anti-skid tile in all bathrooms." },
  { id: "s-2", label: "Structure", value: "RCC frame structure with columns & beams." },
  { id: "s-3", label: "Wall", value: "Fly ash bricks / concrete bricks." },
  { id: "s-4", label: "Flooring", value: "Vitrified tiles in all rooms, ceramic tiles in balconies & bathrooms." },
  { id: "s-5", label: "Doors & Windows", value: "Designer main door, flush internal doors; powder-coated aluminium sliding windows with mosquito net." },
  { id: "s-6", label: "Electrification", value: "Modular switches, TV & AC points in all bedrooms, EV charging in parking, 24x7 power backup." },
  { id: "s-7", label: "Security", value: "24x7 security with CCTV." },
  { id: "s-8", label: "Sanitary", value: "ISI-mark C-PVC pipe for internal walls, UPVC for water supply & sewerage lines." },
];

export default function DebakiEmpire() {
  const [index, setIndex] = useState(0);
  const total = HERO_SLIDES.length;
  const current = HERO_SLIDES[index];

  /* ---------------- Lightbox state ----------------
     lightbox = { images: [{image, caption}], index: number } | null */
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = (images, startIndex) => {
    setLightbox({ images, index: startIndex });
  };

  const closeLightbox = useCallback(() => setLightbox(null), []);

  const lightboxGoTo = useCallback((delta) => {
    setLightbox((prev) => {
      if (!prev) return prev;
      const len = prev.images.length;
      const nextIndex = ((prev.index + delta) % len + len) % len;
      return { ...prev, index: nextIndex };
    });
  }, []);

  useEffect(() => {
    if (!lightbox) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") lightboxGoTo(1);
      if (e.key === "ArrowLeft") lightboxGoTo(-1);
    };

    window.addEventListener("keydown", onKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightbox, closeLightbox, lightboxGoTo]);

  const goTo = (i) => setIndex(((i % total) + total) % total);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % total), 5000);
    return () => clearInterval(timer);
  }, [total]);

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(
      "Hi, I'm interested in DEBAKI EMPIRE by Omm Tech & Properties. Please share the availability and pricing."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    // Wire this up to your API / email service.
  };

  const amenityGallery = AMENITIES.map((am) => ({
    image: am.image,
    caption: am.title,
  }));

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="de-hero">
        <div className="de-hero__grid" aria-hidden="true" />
        <div className="de-hero__glow" aria-hidden="true" />

        <div className="de-hero__inner">
          <div className="de-hero__copy">
            <p className="de-eyebrow">// OMM TECH PROPERTIES — KESURA</p>
            <h1 className="de-hero__title">
              DEBAKI <span className="de-hero__title--glow">EMPIRE</span>
            </h1>
            <p className="de-hero__tagline">Where Real Vision Meets Reality</p>
            <p className="de-hero__desc">
              A premium living space with nature — Vaastu-compliant 3 BHK
              residences set in a lush, open green plot on Kesura Road, with
              a rooftop pool, jogging track, skywalk and a dedicated
              community temple.
            </p>

            <div className="de-hero__actions">
              <button className="btn btn--solid" onClick={handleWhatsAppBooking}>
                BOOK NOW
              </button>
              
               <a className="btn btn--outline"
                href={BROCHURE_PATH}
                download="Debaki-Empire-Brochure.pdf">
                DOWNLOAD BROCHURE
              </a>
              
               <a className="btn btn--ghost"
                href={LOCATION_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW LOCATION
              </a>
            </div>
          </div>

          <div className="de-hero__viewer">
            <span className="de-corner de-corner--tl" />
            <span className="de-corner de-corner--br" />

            <div className="de-viewer__frame">
              <img
                key={current.image}
                className="de-viewer__image de-clickable-img"
                src={current.image}
                alt={current.caption}
                onClick={() => openLightbox(HERO_SLIDES, index)}
              />

              <button
                className="de-viewer__nav de-viewer__nav--prev"
                onClick={() => goTo(index - 1)}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                className="de-viewer__nav de-viewer__nav--next"
                onClick={() => goTo(index + 1)}
                aria-label="Next image"
              >
                ›
              </button>

              <div className="de-viewer__overlay">
                <p className="de-viewer__label">{current.caption}</p>
                <p className="de-viewer__code">
                  {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
                </p>
              </div>
            </div>

            <div className="de-viewer__pagination">
              {HERO_SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  className={`de-pagination__item ${
                    i === index ? "de-pagination__item--active" : ""
                  }`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                >
                  <span className="de-pagination__bar" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= KEY FACTS ================= */}
      <section className="de-facts">
        <div className="de-facts__inner">
          <div className="de-fact">
            <p className="de-fact__label">// LOCATION</p>
            <p className="de-fact__value">Kesura Road, Bhubaneswar</p>
          </div>
          <div className="de-fact">
            <p className="de-fact__label">// RESIDENCES</p>
            <p className="de-fact__value">Premium 3 BHK Homes</p>
          </div>
          <div className="de-fact">
            <p className="de-fact__label">// DESIGN</p>
            <p className="de-fact__value">Vaastu-Compliant Layouts</p>
          </div>
          <div className="de-fact">
            <p className="de-fact__label">// CORE IDENTITY</p>
            <p className="de-fact__value">Nature, Elegance &amp; Modernity</p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT / PANCHA TATTVA ================= */}
      <section className="de-about">
        <div className="de-about__inner">
          <div className="de-about__copy">
            <h2 className="de-section-title">
              <span className="de-bar" aria-hidden="true" />
              ABOUT DEBAKI EMPIRE
            </h2>
            <p className="de-about__text">
              DEBAKI Empire is a visionary project that redefines luxury
              living with a blend of nature, elegance and modernity. Nestled
              in a lush, open green space, every residence is meticulously
              designed to be Vaastu-compliant, ensuring harmony and positive
              energy in every corner, with ample natural light and
              ventilation throughout.
            </p>
            <p className="de-about__text">
              Spacious, extra-large balconies paired with private terraces
              invite you to enjoy stunning views, while rooftop amenities —
              a jogging track, terrace gardening and a rooftop swimming pool
              — elevate everyday living.
            </p>
          </div>

          <div className="de-elements">
            {ELEMENTS.map((el) => (
              <div className="de-element" key={el.id}>
                <p className="de-element__label">
                  {el.label} <span className="de-element__sanskrit">({el.sanskrit})</span>
                </p>
                <p className="de-element__desc">{el.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AMENITIES GALLERY ================= */}
      <section className="de-stand">
        <div className="de-stand__header">
          <h2 className="de-section-title de-section-title--center">
            {/* <span className="de-rule" aria-hidden="true" /> */}
            FEATURED AMENITIES
             {/* <span className="de-rule" aria-hidden="true" /> */}
          </h2>
          <p className="de-stand__subtitle">
            A rooftop pool, a skywalk with river views, a community temple
            and a dedicated children's park.
          </p>
        </div>

        <div className="de-stand__grid">
          {AMENITIES.map((a, i) => (
            <article className="de-card" key={a.id}>
              <div className="de-card__image-wrap">
                <img
                  src={a.image}
                  alt={a.title}
                  className="de-card__image de-clickable-img"
                  onClick={() => openLightbox(amenityGallery, i)}
                />
              </div>
              <div className="de-card__body">
                <h3 className="de-card__title">{a.title}</h3>
                <p className="de-card__desc">{a.desc}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="de-amenity-list">
          {AMENITY_LIST.map((l) => (
            <div className="de-amenity-list__item" key={l.id}>
              <p className="de-amenity-list__label">{l.label}</p>
              <p className="de-amenity-list__desc">{l.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= STRUCTURAL SPECIFICATION ================= */}
      <section className="de-highlight">
        <div className="de-highlight__inner">
          <div className="de-highlight__copy">
            <h2 className="de-highlight__title">
              Built to last,{" "}
              <span className="de-highlight__title--glow">finished to feel like home</span>
            </h2>
            <p className="de-highlight__desc">
              An RCC frame structure, vitrified flooring, powder-coated
              aluminium windows and 24x7 CCTV security — every specification
              is chosen for durability as much as comfort.
            </p>
            
             <a className="btn btn--outline"
              href={BROCHURE_PATH}
              download="Debaki-Empire-Brochure.pdf"
            >
              DOWNLOAD BROCHURE
            </a>
          </div>

          <div className="de-specs">
            {SPECS.map((s) => (
              <div className="de-spec" key={s.id}>
                <p className="de-spec__label">{s.label}</p>
                <p className="de-spec__value">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DISTANCE FROM LANDMARKS ================= */}
      <section className="de-connectivity">
        <div className="de-connectivity__inner">
          <h2 className="de-section-title">
            <span className="de-bar" aria-hidden="true" />
            DISTANCE FROM MAJOR LANDMARKS
            {/* <span className="de-bar" aria-hidden="true" /> */}
          </h2>

          <div className="de-connectivity__grid">
            {DISTANCES.map((group) => (
              <div className="de-connectivity__group" key={group.id}>
                <p className="de-connectivity__group-title">{group.group}</p>
                {group.items.map((it, i) => (
                  <div className="de-connectivity__row" key={i}>
                    <span className="de-connectivity__row-label">{it.label}</span>
                    <span className="de-connectivity__row-value">{it.value}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

          
           <a className="btn btn--outline"
            href={LOCATION_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW ON GOOGLE MAPS
          </a>
        </div>
      </section>

      {/* ================= ENQUIRY FORM ================= */}
      <section className="de-enquiry">
        <form className="de-enquiry__card" onSubmit={handleEnquirySubmit}>
          <h2 className="de-enquiry__title">Enquire About Debaki Empire</h2>

          <input className="de-enquiry__input" type="text" placeholder="Full Name" required />
          <input className="de-enquiry__input" type="tel" placeholder="Mobile Number" required />
          <input className="de-enquiry__input" type="email" placeholder="Email Address" required />

          <select className="de-enquiry__input de-enquiry__select" defaultValue="">
            <option value="" disabled>
              Select Unit Type
            </option>
            <option value="3bhk">3 BHK</option>
          </select>

          <textarea
            className="de-enquiry__input de-enquiry__textarea"
            placeholder="Your Message"
            rows={4}
          />

          <div className="de-enquiry__actions">
            <button
              className="btn btn--solid btn--full"
              type="submit"
              onClick={handleWhatsAppBooking}
            >
              Submit Enquiry
            </button>
            <button
              className="btn btn--outline btn--full"
              type="button"
              onClick={handleWhatsAppBooking}
            >
              Book Now on WhatsApp
            </button>
          </div>
        </form>
      </section>

      {/* Fixed booking ribbon */}
      <div className="de-cta-stack">
        <button className="de-cta-ribbon de-cta-ribbon--book" onClick={handleWhatsAppBooking}>
          <span>BOOK NOW</span>
        </button>
        
         <a className="de-cta-ribbon de-cta-ribbon--brochure"
          href={BROCHURE_PATH}
          download="Debaki-Empire-Brochure.pdf"
        >
          <span>BROCHURE</span>
        </a>
      </div>

      {/* ================= FULLSCREEN LIGHTBOX ================= */}
      {lightbox && (
        <div className="de-lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          <button
            className="de-lightbox__close"
            onClick={closeLightbox}
            aria-label="Close fullscreen image"
          >
            ✕
          </button>

          {lightbox.images.length > 1 && (
            <button
              className="de-lightbox__nav de-lightbox__nav--prev"
              onClick={(e) => {
                e.stopPropagation();
                lightboxGoTo(-1);
              }}
              aria-label="Previous image"
            >
              ‹
            </button>
          )}

          <img
            className="de-lightbox__image"
            src={lightbox.images[lightbox.index].image}
            alt={lightbox.images[lightbox.index].caption}
            onClick={(e) => e.stopPropagation()}
          />

          {lightbox.images.length > 1 && (
            <button
              className="de-lightbox__nav de-lightbox__nav--next"
              onClick={(e) => {
                e.stopPropagation();
                lightboxGoTo(1);
              }}
              aria-label="Next image"
            >
              ›
            </button>
          )}

          <div className="de-lightbox__caption" onClick={(e) => e.stopPropagation()}>
            <p>{lightbox.images[lightbox.index].caption}</p>
            {lightbox.images.length > 1 && (
              <span className="de-lightbox__count">
                {String(lightbox.index + 1).padStart(2, "0")}/
                {String(lightbox.images.length).padStart(2, "0")}
              </span>
            )}
          </div>
        </div>
      )}
    </>
  );
}