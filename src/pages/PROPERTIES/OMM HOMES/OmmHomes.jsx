import React, { useState, useEffect, useCallback } from "react";
import "./OmmHomes.css";

/* ============================================================
   CONFIG — swap these for the real values whenever they change
   ============================================================ */
const WHATSAPP_NUMBER = "918018151797"; // +91 80181 51797, from the brochure
const BROCHURE_PATH = "../../../brochure/Omm-Homes-Brochure.pdf";
// NOTE: no Google Maps share-link was supplied for Omm Homes, so this is
// a maps search built from the brochure's developer address. Swap it for
// the exact drop-pin link whenever you have one.
const LOCATION_URL =
  "https://www.google.com/maps/search/?api=1&query=Plot+No+151+Ganga+Nagar+Unit+6+BBSR-3+Bhubaneswar";

const HERO_SLIDES = [
  {
    id: "hero-1",
    image: "../../../omm-homes/render-exterior-01.jpeg",
    caption: "OMM HOMES elevation",
  },
  {
    id: "hero-2",
    image: "../../../omm-homes/site-exterior-01.jpeg",
    caption: "On-site progress, Ebaranga",
  },
  {
    id: "hero-3",
    image: "../../../omm-homes/interior-hallway-01.jpeg",
    caption: "Finished interior, ground floor",
  },
  {
    id: "hero-4",
    image: "../../../omm-homes/interior-hallway-02.jpeg",
    caption: "Interior under finishing",
  },
];

const HIGHLIGHTS = [
  {
    id: "h-1",
    title: "TWO FULL FLOORS",
    desc: "A duplex layout with its own portico, drawing room and bedrooms spread over ground and first floor.",
  },
  {
    id: "h-2",
    title: "PRIVATE ENTRANCE",
    desc: "Every home has its own gate and portico — no shared lobbies or corridors.",
  },
  {
    id: "h-3",
    title: "1,365 SQFT PER FLOOR",
    desc: "Generous room sizes on both levels, from the drawing room down to the balcony.",
  },
  {
    id: "h-4",
    title: "COURTESY & CARE",
    desc: "Built with the same attention to detail and after-sales care as every Omm Tech project.",
  },
];

const GALLERY = [
  { id: "g-1", title: "GROUND FLOOR ENTRY & WALL DISPLAY", image: "../../../omm-homes/interior-hallway-01.jpeg" },
  { id: "g-2", title: "INTERIOR UNDER FINISHING", image: "../../../omm-homes/interior-hallway-02.jpeg" },
  { id: "g-3", title: "SITE PROGRESS, EBARANGA", image: "../../../omm-homes/site-exterior-01.jpeg" },
  { id: "g-4", title: "ELEVATION RENDER", image: "../../../omm-homes/render-exterior-01.jpeg" },
];

const FLOOR_PLANS = [
  {
    id: "fp-1",
    title: "GROUND FLOOR",
    meta: "SBA 1,365 sqft",
    rooms: [
      { label: "Bedroom", size: "13' x 11'" },
      { label: "Dining", size: "12' x 12'" },
      { label: "Drawing Room", size: "15' x 11'" },
      { label: "Portico", size: "16' x 11'" },
      { label: "Kitchen", size: "9' x 7'" },
      { label: "Toilet", size: "5' x 7'" },
    ],
  },
  {
    id: "fp-2",
    title: "FIRST FLOOR",
    meta: "SBA 1,365 sqft",
    rooms: [
      { label: "Master Bedroom", size: "13' x 11'" },
      { label: "Bedroom", size: "13' x 11'" },
      { label: "Children's Room", size: "11' x 10'" },
      { label: "Drawing Room", size: "12' x 8'" },
      { label: "Dining", size: "12' x 10'" },
      { label: "Toilet", size: "6' x 4'" },
      { label: "Balcony", size: "12' x 5'" },
    ],
  },
];

const SPECS = [
  { id: "s-1", label: "Foundation", value: "Earthquake resistant frame / load bearing structure." },
  { id: "s-2", label: "Structure", value: "RCC framed structure with columns & beams / 1st class bricks load bearing structure, concrete bricks / fly ash bricks." },
  { id: "s-3", label: "Painting", value: "Internal putty finishing with emulsion paint as per design." },
  { id: "s-4", label: "Flooring", value: "Vitrified tiles in all rooms, ceramic tiles in balconies." },
  { id: "s-5", label: "Doors", value: "Main door in teak wood finish; all other internal doors flush, finished with enamel paint." },
  { id: "s-6", label: "Windows", value: "Powder-coated aluminium sliding windows." },
  { id: "s-7", label: "Toilets", value: "Floor-mount and pedestal wash basin, CP fittings of reputed brand with hot & cold water point, glazed ceramic tiles up to 7'0\" height." },
  { id: "s-8", label: "Kitchen", value: "Granite cooking platform with stainless steel sink, glazed tiles up to 2' above platform, provision for exhaust fan." },
  { id: "s-9", label: "Electrification", value: "Modular electrical switches, TV/telephone point, Split AC points in all bedrooms, provision for inverter." },
  { id: "s-10", label: "Sanitary", value: "ISI-mark C-PVC piping for water supply, UPVC for sanitary lines." },
  { id: "s-11", label: "Staircase", value: "Kota stone cast design with SS hand rail." },
  { id: "s-12", label: "Lightning Protection", value: "A central lightning protection system protects the building." },
  { id: "s-13", label: "Sewerage", value: "Septic tank, soak pit / new-generation process sewerage treatment plant." },
];

const PAYMENT_SCHEDULE = [
  { id: "p-1", label: "1st Installment", pct: "15%", note: "Before completion of plinth" },
  { id: "p-2", label: "2nd Installment", pct: "25%", note: "Before ground floor RCC roof casting" },
  { id: "p-3", label: "3rd Installment", pct: "25%", note: "After lintel casting of 1st floor & before 1st floor roof casting" },
  { id: "p-4", label: "4th Installment", pct: "15%", note: "Before RCC roof casting of 2nd floor" },
  { id: "p-5", label: "5th Installment", pct: "15%", note: "After plastering / before flooring" },
  { id: "p-6", label: "6th Installment", pct: "5%", note: "At the time of handover possession" },
];

const DISTANCES = [
  { id: "d-1", label: "Airport", value: "3.5 km" },
  { id: "d-2", label: "Railway Station", value: "1.5 km" },
  { id: "d-3", label: "DAV School", value: "2 km" },
  { id: "d-4", label: "Capital Hospital", value: "6 km" },
  { id: "d-5", label: "Lingaraj Temple", value: "4.5 km" },
  { id: "d-6", label: "Ekamra College", value: "5 km" },
  { id: "d-7", label: "Market Building", value: "6 km" },
  { id: "d-8", label: "XIBM", value: "5 km" },
  { id: "d-9", label: "O.E.C.", value: "6 km" },
];

/* All images that can be opened in the lightbox, in the order they
   appear on the page. Used so prev/next inside the lightbox can step
   through every photo on the page, not just the gallery it was
   opened from. */
const ALL_IMAGES = [
  ...HERO_SLIDES,
  ...GALLERY.map((g) => ({ id: g.id, image: g.image, caption: g.title })),
];

export default function OmmHomes() {
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
      "Hi, I'm interested in OMM HOMES by Omm Tech Properties. Please share the availability and pricing."
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
      <section className="oh-hero">
        <div className="oh-hero__grid" aria-hidden="true" />
        <div className="oh-hero__glow" aria-hidden="true" />

        <div className="oh-hero__inner">
          <div className="oh-hero__copy">
            <p className="oh-eyebrow">// OMM TECH PROPERTIES — EBARANGA</p>
            <h1 className="oh-hero__title">
              OMM <span className="oh-hero__title--glow">HOMES</span>
            </h1>
            <p className="oh-hero__tagline">Be Assured of Courtesy and Care</p>
            <p className="oh-hero__desc">
              A residential duplex project designed meticulously around the
              necessities of present-day life — the right address for a home
              you own with no hassles whatsoever, and your head held high.
            </p>

            <div className="oh-hero__actions">
              <button className="btn btn--solid" onClick={handleWhatsAppBooking}>
                BOOK NOW
              </button>
              <a
                className="btn btn--outline"
                href={BROCHURE_PATH}
                download="Omm-Homes-Brochure.pdf"
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

          <div className="oh-hero__viewer">
            <span className="oh-corner oh-corner--tl" />
            <span className="oh-corner oh-corner--br" />

            <div className="oh-viewer__frame">
              <img
                key={current.image}
                className="oh-viewer__image"
                src={current.image}
                alt={current.caption}
                onClick={() => openLightbox(current.image)}
                style={{ cursor: "zoom-in" }}
              />

              <button
                className="oh-viewer__nav oh-viewer__nav--prev"
                onClick={() => goTo(index - 1)}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                className="oh-viewer__nav oh-viewer__nav--next"
                onClick={() => goTo(index + 1)}
                aria-label="Next image"
              >
                ›
              </button>

              <div className="oh-viewer__overlay">
                <p className="oh-viewer__label">{current.caption}</p>
                <p className="oh-viewer__code">
                  {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
                </p>
              </div>
            </div>

            <div className="oh-viewer__pagination">
              {HERO_SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  className={`oh-pagination__item ${
                    i === index ? "oh-pagination__item--active" : ""
                  }`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                >
                  <span className="oh-pagination__bar" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= KEY FACTS ================= */}
      <section className="oh-facts">
        <div className="oh-facts__inner">
          <div className="oh-fact">
            <p className="oh-fact__label">// LOCATION</p>
            <p className="oh-fact__value">Ebaranga, Bhubaneswar</p>
          </div>
          <div className="oh-fact">
            <p className="oh-fact__label">// HOME TYPE</p>
            <p className="oh-fact__value">Residential Duplex</p>
          </div>
          <div className="oh-fact">
            <p className="oh-fact__label">// AREA</p>
            <p className="oh-fact__value">1,365 sqft per floor</p>
          </div>
          <div className="oh-fact">
            <p className="oh-fact__label">// CORE IDENTITY</p>
            <p className="oh-fact__value">Affordability Meets Quality</p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="oh-about">
        <div className="oh-about__inner">
          <div className="oh-about__copy">
            <h2 className="oh-section-title">
              <span className="oh-bar" aria-hidden="true" />
              ABOUT OMM HOMES
            </h2>
            <p className="oh-about__text">
              Omm Tech Properties Pvt. Ltd. welcomes you to its residential
              project at Ebaranga. With integrity as the hallmark of its
              existence, Omm Homes is a residential duplex project designed
              meticulously, keeping in mind the necessities of present-day
              life style.
            </p>
            <p className="oh-about__text">
              The project design is executed in conformity with
              international quality standards, with quality inspection of
              materials held to a preset standard. "We fear selling hopes —
              we dare making homes."
            </p>
          </div>

          <div className="oh-highlights">
            {HIGHLIGHTS.map((h) => (
              <div className="oh-highlight-card" key={h.id}>
                <p className="oh-highlight-card__title">{h.title}</p>
                <p className="oh-highlight-card__desc">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY ================= */}
      <section className="oh-stand">
        <div className="oh-stand__header">
          <h2 className="oh-section-title oh-section-title--center">
            {/* <span className="oh-rule" aria-hidden="true" /> */}
            SITE &amp; INTERIORS
          </h2>
          <p className="oh-stand__subtitle">
            Real photos from site — the elevation render alongside how it
            looks as each home comes together.
          </p>
        </div>

        <div className="oh-stand__grid">
          {GALLERY.map((g) => (
            <article className="oh-card" key={g.id}>
              <div className="oh-card__image-wrap">
                <img
                  src={g.image}
                  alt={g.title}
                  className="oh-card__image"
                  onClick={() => openLightbox(g.image)}
                  style={{ cursor: "zoom-in" }}
                />
              </div>
              <p className="oh-card__title">{g.title}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ================= FLOOR PLANS ================= */}
      <section className="oh-plans">
        <div className="oh-plans__header">
          <h2 className="oh-section-title oh-section-title--center">
            {/* <span className="oh-rule" aria-hidden="true" /> */}
            FLOOR PLAN
          </h2>
          <p className="oh-stand__subtitle">
            Ground floor and first floor, each with 1,365 sqft of built-up
            area.
          </p>
        </div>

        <div className="oh-plans__grid">
          {FLOOR_PLANS.map((fp) => (
            <div className="oh-plan" key={fp.id}>
              <p className="oh-plan__title">{fp.title}</p>
              <p className="oh-plan__meta">{fp.meta}</p>
              <div className="oh-plan__rooms">
                {fp.rooms.map((r, i) => (
                  <div className="oh-plan__row" key={i}>
                    <span className="oh-plan__row-label">{r.label}</span>
                    <span className="oh-plan__row-value">{r.size}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= SPECIFICATION ================= */}
      <section className="oh-highlight">
        <div className="oh-highlight__inner">
          <div className="oh-highlight__copy">
            <h2 className="oh-highlight__title">
              Built to last,{" "}
              <span className="oh-highlight__title--glow">finished to feel like home</span>
            </h2>
            <p className="oh-highlight__desc">
              Earthquake-resistant RCC frame, granite kitchen platform, teak
              wood main door and a central lightning protection system —
              every specification is chosen for durability as much as
              comfort.
            </p>
            <a
              className="btn btn--outline"
              href={BROCHURE_PATH}
              download="Omm-Homes-Brochure.pdf"
            >
              DOWNLOAD BROCHURE
            </a>
          </div>

          <div className="oh-specs">
            {SPECS.map((s) => (
              <div className="oh-spec" key={s.id}>
                <p className="oh-spec__label">{s.label}</p>
                <p className="oh-spec__value">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PAYMENT SCHEDULE ================= */}
      <section className="oh-payment">
        <div className="oh-payment__inner">
          <h2 className="oh-section-title">
            <span className="oh-bar" aria-hidden="true" />
            PAYMENT SCHEDULE
          </h2>

          <div className="oh-payment__grid">
            {PAYMENT_SCHEDULE.map((p) => (
              <div className="oh-payment__item" key={p.id}>
                <p className="oh-payment__pct">{p.pct}</p>
                <p className="oh-payment__label">{p.label}</p>
                <p className="oh-payment__note">{p.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DISTANCE FROM LANDMARKS ================= */}
      <section className="oh-connectivity">
        <div className="oh-connectivity__inner">
          <h2 className="oh-section-title">
            <span className="oh-bar" aria-hidden="true" />
            DISTANCE FROM MAJOR LANDMARKS
          </h2>

          <div className="oh-connectivity__grid">
            {DISTANCES.map((d) => (
              <div className="oh-connectivity__row" key={d.id}>
                <span className="oh-connectivity__row-label">{d.label}</span>
                <span className="oh-connectivity__row-value">{d.value}</span>
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
      <section className="oh-enquiry">
        <form className="oh-enquiry__card" onSubmit={handleEnquirySubmit}>
          <h2 className="oh-enquiry__title">Enquire About Omm Homes</h2>

          <input className="oh-enquiry__input" type="text" placeholder="Full Name" required />
          <input className="oh-enquiry__input" type="tel" placeholder="Mobile Number" required />
          <input className="oh-enquiry__input" type="email" placeholder="Email Address" required />

          <textarea
            className="oh-enquiry__input oh-enquiry__textarea"
            placeholder="Your Message"
            rows={4}
          />

          <div className="oh-enquiry__actions">
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

          <p className="oh-enquiry__contact">
            Omm Tech Properties Pvt. Ltd. — Plot No. 151, Ganga Nagar, Unit
            6, BBSR-3 · +91 80181 51797
          </p>
        </form>
      </section>

      {/* Fixed booking ribbon */}
      <div className="oh-cta-stack">
        <button className="oh-cta-ribbon oh-cta-ribbon--book" onClick={handleWhatsAppBooking}>
          <span>BOOK NOW</span>
        </button>
        <a
          className="oh-cta-ribbon oh-cta-ribbon--brochure"
          href={BROCHURE_PATH}
          download="Omm-Homes-Brochure.pdf"
        >
          <span>BROCHURE</span>
        </a>
      </div>

      {/* ================= LIGHTBOX ================= */}
      {lightboxOpen && (
        <div
          className="oh-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <button
            className="oh-lightbox__close"
            onClick={closeLightbox}
            aria-label="Close full screen image"
          >
            ✕
          </button>

          <button
            className="oh-lightbox__nav oh-lightbox__nav--prev"
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
            className="oh-lightbox__image"
            src={lightboxItem.image}
            alt={lightboxItem.caption}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="oh-lightbox__nav oh-lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              lightboxNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>

          <div className="oh-lightbox__footer" onClick={(e) => e.stopPropagation()}>
            <p className="oh-lightbox__caption">{lightboxItem.caption}</p>
            <p className="oh-lightbox__code">
              {String(lightboxIndex + 1).padStart(2, "0")}/{String(lightboxTotal).padStart(2, "0")}
            </p>
          </div>
        </div>
      )}
    </>
  );
}