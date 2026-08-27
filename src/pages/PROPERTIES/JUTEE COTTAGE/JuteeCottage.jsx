import React, { useState, useEffect, useCallback } from "react";
import "./JuteeCottage.css";

/* ============================================================
   CONFIG — swap these for the real values whenever they change
   ============================================================ */
// NOTE: no brochure PDF was supplied for Jutee Cottage — drop the real
// file at this path (same pattern as the other projects) and the
// download buttons below will work as-is.
const WHATSAPP_NUMBER = "917008058453"; // +91 70080 58453 (no + or spaces)
const BROCHURE_PATH = "../../../brochure/Jutee_Cottage_Brochure.pdf";
const LOCATION_URL = "https://maps.app.goo.gl/d43DwLBFCYF7oofW8?g_st=awb";
const VIDEO_PATH = "../../../videos/jutee-cottage-walkthrough.mp4";

const HERO_SLIDES = [
  {
    id: "hero-1",
    image: "../../../jutee-cottage/render-entrance-01.jpeg",
    caption: "Main entrance, Jutee Cottage",
  },
  {
    id: "hero-2",
    image: "../../../jutee-cottage/render-street-01.jpeg",
    caption: "Internal boulevard",
  },
  {
    id: "hero-3",
    image: "../../../jutee-cottage/render-street-02.jpeg",
    caption: "Row of duplex units",
  },
  {
    id: "hero-4",
    image: "../../../jutee-cottage/site-exterior-01.jpeg",
    caption: "On-site progress, Madhipur",
  },
];

const HIGHLIGHTS = [
  {
    id: "h-1",
    title: "TWO FAMILIES, ONE HOME",
    desc: "A 4 BHK duplex laid out across ground and first floor, built to independently accommodate two families under one roof.",
  },
  {
    id: "h-2",
    title: "PRIVATE ENTRANCES",
    desc: "Every duplex opens onto its own porch and gate — no shared lobbies, no shared walls with strangers.",
  },
  {
    id: "h-3",
    title: "PLANNED BOULEVARD",
    desc: "A landscaped internal street with lighting and greenery runs through the whole community.",
  },
  {
    id: "h-4",
    title: "GATED COMMUNITY",
    desc: "A single controlled entrance keeps the cottages private, quiet and secure.",
  },
];

const INTERIORS = [
  { id: "int-1", title: "LIVING AREA", image: "../../../jutee-cottage/interior-living-01.jpeg" },
  { id: "int-2", title: "HALLWAY & FALSE CEILING", image: "../../../jutee-cottage/interior-hallway-01.jpeg" },
  { id: "int-3", title: "BEDROOM", image: "../../../jutee-cottage/interior-room-01.jpeg" },
  { id: "int-4", title: "BEDROOM WITH BALCONY VIEW", image: "../../../jutee-cottage/interior-room-02.jpeg" },
  { id: "int-5", title: "STAIRCASE", image: "../../../jutee-cottage/interior-staircase-01.jpeg" },
  { id: "int-6", title: "BATHROOM", image: "../../../jutee-cottage/interior-bathroom-01.jpeg" },
  { id: "int-7", title: "UPPER FLOOR LANDING", image: "../../../jutee-cottage/interior-staircase-02.jpeg" },
  { id: "int-8", title: "BEDROOM, NATURAL LIGHT", image: "../../../jutee-cottage/interior-room-03.jpeg" },
];

const FLOOR_PLANS = [
  {
    id: "fp-1",
    title: "GROUND FLOOR",
    meta: "Plot Area 1,206 sqft · Built-up 940 sqft",
    rooms: [
      { label: "Master Bedroom", size: "12' x 14'" },
      { label: "Children Bedroom", size: "12' x 11'" },
      { label: "Dining & Drawing", size: "19' x 10'" },
      { label: "Portico", size: "16' x 11'" },
      { label: "Kitchen", size: "9' x 7'" },
      { label: "Toilet", size: "5' x 6'" },
    ],
  },
  {
    id: "fp-2",
    title: "FIRST FLOOR",
    meta: "Built-up 940 sqft",
    rooms: [
      { label: "Master Bedroom", size: "12' x 14'" },
      { label: "Bedroom", size: "12' x 13'" },
      { label: "Pooja Room", size: "10' x 8'" },
      { label: "Dining & Drawing", size: "24'8\" x 11'" },
      { label: "Toilet", size: "6' x 5'" },
      { label: "Balcony", size: "11' x 8'" },
      { label: "Utility", size: "11' x 3'6\"" },
    ],
  },
];

const SPECS = [
  { id: "s-1", label: "Foundation", value: "Earthquake resistant frame / load bearing structure." },
  { id: "s-2", label: "Structure", value: "RCC frame structure with columns & beams / 1st class bricks, concrete bricks / fly ash bricks." },
  { id: "s-3", label: "Painting", value: "Internal putty finishing with emulsion paint as per design." },
  { id: "s-4", label: "Flooring", value: "Vitrified tiles in all rooms, ceramic tiles in balconies & bathrooms." },
  { id: "s-5", label: "Doors", value: "Main door in teak wood finish; all internal doors flush, finished with enamel paint." },
  { id: "s-6", label: "Windows", value: "Powder-coated aluminium sliding windows." },
  { id: "s-7", label: "Toilets", value: "Floor-mount and pedestal wash basin, CP fittings of reputed brand, glazed ceramic tiles up to 7' height." },
  { id: "s-8", label: "Kitchen", value: "Granite cooking platform with stainless steel sink, glazed tiles up to 2' above platform, exhaust fan provision." },
  { id: "s-9", label: "Electrification", value: "Modular switches, TV/telephone point, Split AC provision in all bedrooms, inverter provision." },
  { id: "s-10", label: "Sanitary", value: "ISI-mark C-PVC pipe for water supply, UPVC for sanitary lines." },
  { id: "s-11", label: "Staircase", value: "Granite step design with SS hand rail." },
  { id: "s-12", label: "Lightning Protection", value: "Central lightning protection system for the building." },
  { id: "s-13", label: "Sewerage", value: "Septic tank, soak pit / new-generation sewerage treatment process." },
];

// const PAYMENT_SCHEDULE = [
//   { id: "p-1", label: "1st Installment", pct: "15%", note: "Before completion of plinth" },
//   { id: "p-2", label: "2nd Installment", pct: "25%", note: "Before ground floor RCC roof casting" },
//   { id: "p-3", label: "3rd Installment", pct: "25%", note: "After lintel casting of 1st floor & before 1st floor roof casting" },
//   { id: "p-4", label: "4th Installment", pct: "15%", note: "Before RCC roof casting of 2nd floor" },
//   { id: "p-5", label: "5th Installment", pct: "15%", note: "After plastering / before flooring" },
//   { id: "p-6", label: "6th Installment", pct: "5%", note: "At the time of handover possession" },
// ];

const DISTANCES = [
  { id: "d-1", label: "Railway Station", value: "3.5 km" },
  { id: "d-2", label: "DAV School", value: "3.5 km" },
  { id: "d-3", label: "Airport", value: "4.5 km" },
  { id: "d-4", label: "Ekamra College", value: "6.5 km" },
  { id: "d-5", label: "XUB", value: "6.5 km" },
  { id: "d-6", label: "Lingaraj Temple", value: "7 km" },
  { id: "d-7", label: "O.E.C.", value: "7.5 km" },
  { id: "d-8", label: "Capital Hospital", value: "8 km" },
  { id: "d-9", label: "Market Building", value: "8 km" },
];

/* All images that can be opened in the lightbox, in the order they
   appear on the page. Used so prev/next inside the lightbox can step
   through every photo on the page, not just the gallery it was
   opened from. */
const ALL_IMAGES = [
  ...HERO_SLIDES,
  ...INTERIORS.map((it) => ({ id: it.id, image: it.image, caption: it.title })),
];

export default function JuteeCottage() {
  const [index, setIndex] = useState(0);
  const total = HERO_SLIDES.length;
  const current = HERO_SLIDES[index];

  const goTo = (i) => setIndex(((i % total) + total) % total);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % total), 5000);
    return () => clearInterval(timer);
  }, [total]);

  /* ---------------- Lightbox state ---------------- */
  const [lightboxIndex, setLightboxIndex] = useState(null); // index into ALL_IMAGES, or null when closed
  const lightboxOpen = lightboxIndex !== null;
  const lightboxTotal = ALL_IMAGES.length;
  const lightboxItem = lightboxOpen ? ALL_IMAGES[lightboxIndex] : null;

  const openLightbox = (image) => {
    const foundIndex = ALL_IMAGES.findIndex((it) => it.image === image);
    setLightboxIndex(foundIndex !== -1 ? foundIndex : 0);
  };

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  const lightboxPrev = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + lightboxTotal) % lightboxTotal)),
    [lightboxTotal]
  );

  const lightboxNext = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % lightboxTotal)),
    [lightboxTotal]
  );

  // Keyboard controls + body scroll lock while lightbox is open
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") lightboxPrev();
      if (e.key === "ArrowRight") lightboxNext();
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [lightboxOpen, closeLightbox, lightboxPrev, lightboxNext]);

  const handleWhatsAppBooking = () => {
    const message = encodeURIComponent(
      "Hi, I'm interested in JUTEE COTTAGE by Omm Tech Properties. Please share the availability and pricing."
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  const handleEnquirySubmit = (e) => {
    e.preventDefault();
    // Wire this up to your API / email service.
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="jc-hero">
        <div className="jc-hero__grid" aria-hidden="true" />
        <div className="jc-hero__glow" aria-hidden="true" />

        <div className="jc-hero__inner">
          <div className="jc-hero__copy">
            <p className="jc-eyebrow">// OMM TECH PROPERTIES — MADHIPUR</p>
            <h1 className="jc-hero__title">
              JUTEE <span className="jc-hero__title--glow">COTTAGE</span>
            </h1>
            <p className="jc-hero__tagline">In Search of a Pretty World</p>
            <p className="jc-hero__desc">
              A 4 BHK residential duplex project designed meticulously to
              accommodate two families independently — an exclusive housing
              project for those who value privacy, space and independent
              living within a peaceful, planned community.
            </p>

            <div className="jc-hero__actions">
              <button className="btn btn--solid" onClick={handleWhatsAppBooking}>
                BOOK NOW
              </button>
              <a
                className="btn btn--outline"
                href={BROCHURE_PATH}
                download="Jutee-Cottage-Brochure.pdf"
              >
                DOWNLOAD BROCHURE
              </a>
              <a
                className="btn btn--ghost"
                href={LOCATION_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                VIEW LOCATION
              </a>
            </div>
          </div>

          <div className="jc-hero__viewer">
            <span className="jc-corner jc-corner--tl" />
            <span className="jc-corner jc-corner--br" />

            <div className="jc-viewer__frame">
              <img
                key={current.image}
                className="jc-viewer__image"
                src={current.image}
                alt={current.caption}
                onClick={() => openLightbox(current.image)}
                style={{ cursor: "zoom-in" }}
              />

              <button
                className="jc-viewer__nav jc-viewer__nav--prev"
                onClick={() => goTo(index - 1)}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                className="jc-viewer__nav jc-viewer__nav--next"
                onClick={() => goTo(index + 1)}
                aria-label="Next image"
              >
                ›
              </button>

              <div className="jc-viewer__overlay">
                <p className="jc-viewer__label">{current.caption}</p>
                <p className="jc-viewer__code">
                  {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
                </p>
              </div>
            </div>

            <div className="jc-viewer__pagination">
              {HERO_SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  className={`jc-pagination__item ${
                    i === index ? "jc-pagination__item--active" : ""
                  }`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                >
                  <span className="jc-pagination__bar" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= KEY FACTS ================= */}
      <section className="jc-facts">
        <div className="jc-facts__inner">
          <div className="jc-fact">
            <p className="jc-fact__label">// LOCATION</p>
            <p className="jc-fact__value">Madhipur, Bhubaneswar</p>
          </div>
          <div className="jc-fact">
            <p className="jc-fact__label">// HOME TYPE</p>
            <p className="jc-fact__value">4 BHK Independent Duplex</p>
          </div>
          <div className="jc-fact">
            <p className="jc-fact__label">// PLOT AREA</p>
            <p className="jc-fact__value">1,206 sqft per unit</p>
          </div>
          <div className="jc-fact">
            <p className="jc-fact__label">// CORE IDENTITY</p>
            <p className="jc-fact__value">Two Families, Independently</p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="jc-about">
        <div className="jc-about__inner">
          <div className="jc-about__copy">
            <h2 className="jc-section-title">
              <span className="jc-bar" aria-hidden="true" />
              ABOUT JUTEE COTTAGE
            </h2>
            <p className="jc-about__text">
              Omm Tech Properties has been in construction, project
              development and hospitality for over 10 years, learning the
              recipe for customer delight along the way. With integrity as
              the hallmark of its existence, Jutee Cottage is a 4 BHK
              residential duplex project designed meticulously to
              accommodate two families independently.
            </p>
            <p className="jc-about__text">
              It's the right address for a home you own with no hassles
              whatsoever — a blend of affordability, quality and a design
              that suits your culture, taste and style.
            </p>
          </div>

          <div className="jc-highlights">
            {HIGHLIGHTS.map((h) => (
              <div className="jc-highlight-card" key={h.id}>
                <p className="jc-highlight-card__title">{h.title}</p>
                <p className="jc-highlight-card__desc">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= VIDEO WALKTHROUGH ================= */}
      <section className="jc-video">
        <div className="jc-video__inner">
          <h2 className="jc-section-title jc-section-title--center">
            {/* <span className="jc-rule" aria-hidden="true" /> */}
            WALKTHROUGH
          </h2>
          <p className="jc-video__subtitle">
            A short video tour of Jutee Cottage — the boulevard, the gate and
            a look inside a finished unit.
          </p>

          <div className="jc-video__frame">
            <span className="jc-corner jc-corner--tl" />
            <span className="jc-corner jc-corner--br" />
            <video
              className="jc-video__player"
              src={VIDEO_PATH}
              controls
              playsInline
              preload="metadata"
            />
          </div>
        </div>
      </section>

      {/* ================= INTERIOR GALLERY ================= */}
      <section className="jc-stand">
        <div className="jc-stand__header">
          <h2 className="jc-section-title jc-section-title--center">
            {/* <span className="jc-rule" aria-hidden="true" /> */}
            INSIDE A JUTEE COTTAGE HOME
          </h2>
          <p className="jc-stand__subtitle">
            Real photos from site — living areas, bedrooms, staircases and
            finishes as they're being completed.
          </p>
        </div>

        <div className="jc-stand__grid">
          {INTERIORS.map((it) => (
            <article className="jc-card" key={it.id}>
              <div className="jc-card__image-wrap">
                <img
                  src={it.image}
                  alt={it.title}
                  className="jc-card__image"
                  onClick={() => openLightbox(it.image)}
                  style={{ cursor: "zoom-in" }}
                />
              </div>
              <p className="jc-card__title">{it.title}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ================= FLOOR PLANS ================= */}
      <section className="jc-plans">
        <div className="jc-plans__header">
          <h2 className="jc-section-title jc-section-title--center">
            {/* <span className="jc-rule" aria-hidden="true" /> */}
            FLOOR PLAN
          </h2>
          <p className="jc-stand__subtitle">
            Ground floor for one family, first floor for the other — each
            with its own dining, drawing and bedrooms.
          </p>
        </div>

        <div className="jc-plans__grid">
          {FLOOR_PLANS.map((fp) => (
            <div className="jc-plan" key={fp.id}>
              <p className="jc-plan__title">{fp.title}</p>
              <p className="jc-plan__meta">{fp.meta}</p>
              <div className="jc-plan__rooms">
                {fp.rooms.map((r, i) => (
                  <div className="jc-plan__row" key={i}>
                    <span className="jc-plan__row-label">{r.label}</span>
                    <span className="jc-plan__row-value">{r.size}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SPECIFICATION ================= */}
      <section className="jc-highlight">
        <div className="jc-highlight__inner">
          <div className="jc-highlight__copy">
            <h2 className="jc-highlight__title">
              Built to last,{" "}
              <span className="jc-highlight__title--glow">finished to feel like home</span>
            </h2>
            <p className="jc-highlight__desc">
              Earthquake-resistant RCC frame, granite kitchen platform, teak
              wood main door and central lightning protection — every
              specification is chosen for durability as much as comfort.
            </p>
            <a
              className="btn btn--outline"
              href={BROCHURE_PATH}
              download="Jutee-Cottage-Brochure.pdf"
            >
              DOWNLOAD BROCHURE
            </a>
          </div>

          <div className="jc-specs">
            {SPECS.map((s) => (
              <div className="jc-spec" key={s.id}>
                <p className="jc-spec__label">{s.label}</p>
                <p className="jc-spec__value">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PAYMENT SCHEDULE ================= */}
      {/* <section className="jc-payment">
        <div className="jc-payment__inner">
          <h2 className="jc-section-title">
            <span className="jc-bar" aria-hidden="true" />
            PAYMENT SCHEDULE
          </h2>

          <div className="jc-payment__grid">
            {PAYMENT_SCHEDULE.map((p) => (
              <div className="jc-payment__item" key={p.id}>
                <p className="jc-payment__pct">{p.pct}</p>
                <p className="jc-payment__label">{p.label}</p>
                <p className="jc-payment__note">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ================= DISTANCE FROM LANDMARKS ================= */}
      <section className="jc-connectivity">
        <div className="jc-connectivity__inner">
          <h2 className="jc-section-title">
            <span className="jc-bar" aria-hidden="true" />
            DISTANCE FROM MAJOR LANDMARKS
          </h2>

          <div className="jc-connectivity__grid">
            {DISTANCES.map((d) => (
              <div className="jc-connectivity__row" key={d.id}>
                <span className="jc-connectivity__row-label">{d.label}</span>
                <span className="jc-connectivity__row-value">{d.value}</span>
              </div>
            ))}
          </div>

          <a
            className="btn btn--outline"
            href={LOCATION_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW ON GOOGLE MAPS
          </a>
        </div>
      </section>

      {/* ================= ENQUIRY FORM ================= */}
      <section className="jc-enquiry">
        <form className="jc-enquiry__card" onSubmit={handleEnquirySubmit}>
          <h2 className="jc-enquiry__title">Enquire About Jutee Cottage</h2>

          <input className="jc-enquiry__input" type="text" placeholder="Full Name" required />
          <input className="jc-enquiry__input" type="tel" placeholder="Mobile Number" required />
          <input className="jc-enquiry__input" type="email" placeholder="Email Address" required />

          <textarea
            className="jc-enquiry__input jc-enquiry__textarea"
            placeholder="Your Message"
            rows={4}
          />

          <div className="jc-enquiry__actions">
            <button className="btn btn--solid btn--full" type="submit" 
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

          <p className="jc-enquiry__contact">
            Omm Tech Properties Pvt. Ltd. — Flat No. 401, Pratisruti, Canal
            Road, Jharapada, Bhubaneswar - 751006
          </p>
        </form>
      </section>

      {/* Fixed booking ribbon */}
      <div className="jc-cta-stack">
        <button className="jc-cta-ribbon jc-cta-ribbon--book" onClick={handleWhatsAppBooking}>
          <span>BOOK NOW</span>
        </button>
        <a
          className="jc-cta-ribbon jc-cta-ribbon--brochure"
          href={BROCHURE_PATH}
          download="Jutee-Cottage-Brochure.pdf"
        >
          <span>BROCHURE</span>
        </a>
      </div>

      {/* ================= LIGHTBOX ================= */}
      {lightboxOpen && (
        <div
          className="jc-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <button
            className="jc-lightbox__close"
            onClick={closeLightbox}
            aria-label="Close full screen image"
          >
            ✕
          </button>

          <button
            className="jc-lightbox__nav jc-lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation();
              lightboxPrev();
            }}
            aria-label="Previous image"
          >
            ‹
          </button>

          <img
            key={lightboxItem.image}
            className="jc-lightbox__image"
            src={lightboxItem.image}
            alt={lightboxItem.caption}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="jc-lightbox__nav jc-lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              lightboxNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>

          <div className="jc-lightbox__footer" onClick={(e) => e.stopPropagation()}>
            <p className="jc-lightbox__caption">{lightboxItem.caption}</p>
            <p className="jc-lightbox__code">
              {String(lightboxIndex + 1).padStart(2, "0")}/{String(lightboxTotal).padStart(2, "0")}
            </p>
          </div>
        </div>
      )}
    </>
  );
}