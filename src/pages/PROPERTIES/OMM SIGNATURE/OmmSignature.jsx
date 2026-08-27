import React, { useState, useEffect, useCallback } from "react";
import "./OmmSignature.css";

/* ============================================================
   CONFIG — swap these for the real values whenever they change
   ============================================================ */
   
const WHATSAPP_NUMBER = "917008058453"; 
const BROCHURE_PATH = "../../../brochure/Omm Tech Signature (1).pdf"; 
const LOCATION_URL = "https://www.google.com/maps/place/Omm+Signature+By+Omm+Tech's/@20.3881347,85.882235,17z/data=!3m1!4b1!4m6!3m5!1s0x3a190d006446af11:0x5b669d504fb14bec!8m2!3d20.3881347!4d85.882235!16s%2Fg%2F11xyhcd85n!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDcyOS4wIKXMDSoASAFQAw%3D%3D";

const HERO_SLIDES = [
  {
    id: "hero-1",
    image: "../../../omm-signature/building-day-waterfront-01.jpeg",
    caption: "Waterfront facade, Puri Canal Road",
  },
  {
    id: "hero-2",
    image: "../../../omm-signature/building-dusk-01.jpeg",
    caption: "OMM SIGNATURE at dusk",
  },
  {
    id: "hero-3",
    image: "../../../omm-signature/building-day-angle-01.jpeg",
    caption: "Elevation view",
  },
  {
    id: "hero-4",
    image: "../../../omm-signature/building-night-01.jpeg",
    caption: "Facade lighting, evening",
  },
];

const AMENITIES = [
  {
    id: "am-1",
    title: "ROOFTOP SWIMMING POOL",
    desc: "A private plunge pool on the terrace, framed by a stone feature wall and loungers.",
    image: "../../../omm-signature/amenity-pool-01.jpeg",
  },
  {
    id: "am-2",
    title: "LANDSCAPED SKY GARDEN",
    desc: "Seasonal flower beds, palms and seating laid out along a central mandala-inspired path.",
    image: "../../../omm-signature/amenity-rooftop-garden-01.jpeg",
  },
  {
    id: "am-3",
    title: "CHILDREN'S PLAY DECK",
    desc: "A dedicated rooftop play area with swings and rockers for the youngest residents.",
    image: "../../../omm-signature/amenity-playground-01.jpeg",
  },
  {
    id: "am-4",
    title: "EVENING PROMENADE",
    desc: "A paved walking path threading through the rooftop garden, lit for evening strolls.",
    image: "../../../omm-signature/amenity-garden-path-01.jpeg",
  },
];

const INTERIORS = [
  {
    id: "int-1",
    title: "MASTER BEDROOM",
    desc: "Upholstered wooden headboard, warm ambient lighting and an attached balcony.",
    image: "../../../omm-signature/interior-bedroom-01.jpeg",
  },
  {
    id: "int-2",
    title: "BEDROOM WITH VIEW",
    desc: "Full-height windows and a false ceiling with cove lighting, opening onto the balcony.",
    image: "../../../omm-signature/interior-bedroom-02.jpeg",
  },
];

const ELEMENTS = [
  { id: "el-1", label: "Earth", sanskrit: "Prithvi" },
  { id: "el-2", label: "Air", sanskrit: "Vayu" },
  { id: "el-3", label: "Space", sanskrit: "Akash" },
  { id: "el-4", label: "Fire", sanskrit: "Agni" },
  { id: "el-5", label: "Water", sanskrit: "Jal" },
];

const CONNECTIVITY = [
  { id: "c-1", label: "Schools & Universities", time: "5 MIN" },
  { id: "c-2", label: "Hospitals", time: "10 MIN" },
  { id: "c-3", label: "Malls & Entertainment", time: "10 MIN" },
  { id: "c-4", label: "Airport / Station", time: "20 MIN" },
];

const UNIT_TYPES = [
  { id: "u-1", type: "TYPE 1", unit: "3.5 BHK", flats: "101, 201, 301, 401" },
  { id: "u-2", type: "TYPE 2", unit: "4 BHK", flats: "102, 202, 302, 402" },
  { id: "u-3", type: "TYPE 3", unit: "3.5 BHK", flats: "103, 203, 303, 403" },
  { id: "u-4", type: "TYPE 4", unit: "3 BHK", flats: "104, 204, 304" },
  { id: "u-5", type: "TYPE 5", unit: "3.5 BHK", flats: "105, 205, 305, 405" },
  { id: "u-6", type: "TYPE 6", unit: "3 BHK", flats: "106, 206, 306, 406" },
];

/* All images that can be opened in the lightbox, in the order they
   appear on the page. Used so prev/next inside the lightbox can step
   through every photo on the page, not just the gallery it was
   opened from. */
const ALL_IMAGES = [
  ...HERO_SLIDES,
  ...AMENITIES.map((a) => ({ id: a.id, image: a.image, caption: a.title })),
  ...INTERIORS.map((i) => ({ id: i.id, image: i.image, caption: i.title })),
];

export default function OmmSignature() {
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

  const openLightbox = (image, caption) => {
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
      "Hi, I'm interested in OMM SIGNATURE by Omm Tech & Properties. Please share the availability and pricing."
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
      <section className="omm-hero">
        <div className="omm-hero__grid" aria-hidden="true" />
        <div className="omm-hero__glow" aria-hidden="true" />

        <div className="omm-hero__inner">
          <div className="omm-hero__copy">
            <p className="omm-eyebrow">// OMM TECH PROPERTIES — PRATAPNAGARI</p>
            <h1 className="omm-hero__title">
              OMM <span className="omm-hero__title--glow">SIGNATURE</span>
            </h1>
            <p className="omm-hero__tagline">A Legacy Etched in Luxury</p>
            <p className="omm-hero__desc">
              Premium  3, 3.5 &amp; 4 BHK residences on Puri Canal Road,
              conceived around the Pancha Tattva — the five elements — where
              Vaastu-aligned towers, a central landscaped courtyard and 70%
              open green space meet modern comfort.
            </p>

            <div className="omm-hero__actions">
              <button className="btn btn--solid" onClick={handleWhatsAppBooking}>
                BOOK NOW
              </button>
              <a
                className="btn btn--outline"
                href={BROCHURE_PATH}
                download="Omm-Signature-Brochure.pdf"
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

          <div className="omm-hero__viewer">
            <span className="omm-corner omm-corner--tl" />
            <span className="omm-corner omm-corner--br" />

            <div className="omm-viewer__frame">
              <img
                key={current.image}
                className="omm-viewer__image"
                src={current.image}
                alt={current.caption}
                onClick={() => openLightbox(current.image, current.caption)}
                style={{ cursor: "zoom-in" }}
              />

              <button
                className="omm-viewer__nav omm-viewer__nav--prev"
                onClick={() => goTo(index - 1)}
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                className="omm-viewer__nav omm-viewer__nav--next"
                onClick={() => goTo(index + 1)}
                aria-label="Next image"
              >
                ›
              </button>

              <div className="omm-viewer__overlay">
                <p className="omm-viewer__label">{current.caption}</p>
                <p className="omm-viewer__code">
                  {String(index + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
                </p>
              </div>
            </div>

            <div className="omm-viewer__pagination">
              {HERO_SLIDES.map((s, i) => (
                <button
                  key={s.id}
                  className={`omm-pagination__item ${
                    i === index ? "omm-pagination__item--active" : ""
                  }`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  aria-current={i === index}
                >
                  <span className="omm-pagination__bar" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= KEY FACTS ================= */}
      <section className="omm-facts">
        <div className="omm-facts__inner">
          <div className="omm-fact">
            <p className="omm-fact__label">// LOCATION</p>
            <p className="omm-fact__value">Puri Canal Road, Pratapnagari</p>
          </div>
          <div className="omm-fact">
            <p className="omm-fact__label">// RESIDENCES</p>
            <p className="omm-fact__value"> 3, 3.5 &amp; 4 BHK</p>
          </div>
          <div className="omm-fact">
            <p className="omm-fact__label">// OPEN AREA</p>
            <p className="omm-fact__value">70% Green &amp; Landscaped</p>
          </div>
          <div className="omm-fact">
            <p className="omm-fact__label">// CORE IDENTITY</p>
            <p className="omm-fact__value">Divine Tradition, Modern Luxury</p>
          </div>
        </div>
      </section>

      {/* ================= ABOUT / PANCHA TATTVA ================= */}
      <section className="omm-about">
        <div className="omm-about__inner">
          <div className="omm-about__copy">
            <h2 className="omm-section-title">
              <span className="omm-bar" aria-hidden="true" />
              CONCEIVED AROUND THE FIVE ELEMENTS
            </h2>
            <p className="omm-about__text">
              OMM SIGNATURE is conceived as more than a residential
              complex — it is a sanctuary of life, where ancient Vedic wisdom
              meets modern comfort. The project is inspired by the Pancha
              Tattva, placing every tower along Vaastu-aligned cardinal
              directions around a central landscaped courtyard, the
              Brahmasthana.
            </p>
            <p className="omm-about__text">
              Pedestrian pathways inspired by mandalas connect each block,
              while 70% of the plot stays open and green — a rare balance of
              density and breathing room on Puri Canal Road.
            </p>
          </div>

          <div className="omm-elements">
            {ELEMENTS.map((el) => (
              <div className="omm-element" key={el.id}>
                <p className="omm-element__label">{el.label}</p>
                <p className="omm-element__sanskrit">{el.sanskrit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= AMENITIES ================= */}
      <section className="omm-stand">
        <div className="omm-stand__header">
          <h2 className="omm-section-title omm-section-title--center">
            {/* <span className="omm-rule" aria-hidden="true" /> */}
            ROOFTOP AMENITIES
            
          </h2>
          <p className="omm-stand__subtitle">
            An acre of landscaped serenity above the city — a pool, a garden,
            a play deck and a promenade, all on the terrace.
          </p>
        </div>

        <div className="omm-stand__grid">
          {AMENITIES.map((a) => (
            <article className="omm-card" key={a.id}>
              <div className="omm-card__image-wrap">
                <img
                  src={a.image}
                  alt={a.title}
                  className="omm-card__image"
                  onClick={() => openLightbox(a.image, a.title)}
                  style={{ cursor: "zoom-in" }}
                />
              </div>
              <div className="omm-card__body">
                <h3 className="omm-card__title">{a.title}</h3>
                <p className="omm-card__desc">{a.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= INTERIORS ================= */}
      <section className="omm-highlight">
        <div className="omm-highlight__inner">
          <div className="omm-highlight__copy">
            <h2 className="omm-highlight__title">
              Interiors built for{" "}
              <span className="omm-highlight__title--glow">everyday comfort</span>
            </h2>
            <p className="omm-highlight__desc">
              Upholstered headboards, cove-lit false ceilings and full-height
              windows bring warmth and light into every bedroom — designed to
              feel finished, not just handed over.
            </p>
            <a
              className="btn btn--outline"
              href={BROCHURE_PATH}
              download="Omm-Signature-Brochure.pdf"
            >
              DOWNLOAD BROCHURE
            </a>
          </div>

          <div className="omm-highlight__gallery">
            {INTERIORS.map((it) => (
              <div className="omm-highlight__frame" key={it.id}>
                <span className="omm-corner omm-corner--tl" />
                <span className="omm-corner omm-corner--br" />
                <img
                  src={it.image}
                  alt={it.title}
                  className="omm-highlight__image"
                  onClick={() => openLightbox(it.image, it.title)}
                  style={{ cursor: "zoom-in" }}
                />
                <p className="omm-highlight__caption">{it.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= UNIT TYPES ================= */}
      <section className="omm-units">
        <div className="omm-units__header">
          <h2 className="omm-section-title omm-section-title--center">
            {/* <span className="omm-rule" aria-hidden="true" /> */}
            FLOOR PLANS &amp; UNIT TYPES
          </h2>
          <p className="omm-stand__subtitle">
            Six configurations of 3, 3.5 and 4 BHK homes, repeated across
            floors 1 through 4.
          </p>
        </div>

        <div className="omm-units__grid">
          {UNIT_TYPES.map((u) => (
            <div className="omm-unit" key={u.id}>
              <p className="omm-unit__type">{u.type}</p>
              <p className="omm-unit__size">{u.unit}</p>
              <p className="omm-unit__flats">Flat No. {u.flats}</p>
            </div>
          ))}
        </div>

        <div className="omm-units__cta">
          <p className="omm-units__cta-text">
            Full layouts, dimensions and the master plan are in the brochure.
          </p>
          <a
            className="btn btn--solid"
            href={BROCHURE_PATH}
            download="Omm-Signature-Brochure.pdf"
          >
            DOWNLOAD FULL BROCHURE
          </a>
        </div>
      </section>

      {/* ================= CONNECTIVITY ================= */}
      <section className="omm-connectivity">
        <div className="omm-connectivity__inner">
          <h2 className="omm-section-title">
            {/* <span className="omm-bar" aria-hidden="true" /> */}
            STRATEGICALLY CONNECTED
          </h2>
          <div className="omm-connectivity__grid">
            {CONNECTIVITY.map((c) => (
              <div className="omm-connectivity__item" key={c.id}>
                <p className="omm-connectivity__time">{c.time}</p>
                <p className="omm-connectivity__label">{c.label}</p>
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
      <section className="omm-enquiry">
        <form className="omm-enquiry__card" onSubmit={handleEnquirySubmit}>
          <h2 className="omm-enquiry__title">Enquire About Omm Signature</h2>

          <input className="omm-enquiry__input" type="text" placeholder="Full Name" required />
          <input className="omm-enquiry__input" type="tel" placeholder="Mobile Number" required />
          <input className="omm-enquiry__input" type="email" placeholder="Email Address" required />

          <select className="omm-enquiry__input omm-enquiry__select" defaultValue="">
            <option value="" disabled>
              Select Unit Type
            </option>
            <option value="3bhk">3 BHK</option>
            <option value="3.5bhk">3.5 BHK</option>
            <option value="4bhk">4 BHK</option>
          </select>

          <textarea
            className="omm-enquiry__input omm-enquiry__textarea"
            placeholder="Your Message"
            rows={4}
          />

          <div className="omm-enquiry__actions">
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
        </form>
      </section>

      {/* Fixed booking ribbon */}
      <div className="omm-cta-stack">
        <button className="omm-cta-ribbon omm-cta-ribbon--book" onClick={handleWhatsAppBooking}>
          <span>BOOK NOW</span>
        </button>
        <a
          className="omm-cta-ribbon omm-cta-ribbon--brochure"
          href={BROCHURE_PATH}
          download="Omm-Signature-Brochure.pdf"
        >
          <span>BROCHURE</span>
        </a>
      </div>

      {/* ================= LIGHTBOX ================= */}
      {lightboxOpen && (
        <div
          className="omm-lightbox"
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
        >
          <button
            className="omm-lightbox__close"
            onClick={closeLightbox}
            aria-label="Close full screen image"
          >
            ✕
          </button>

          <button
            className="omm-lightbox__nav omm-lightbox__nav--prev"
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
            className="omm-lightbox__image"
            src={lightboxItem.image}
            alt={lightboxItem.caption}
            onClick={(e) => e.stopPropagation()}
          />

          <button
            className="omm-lightbox__nav omm-lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation();
              lightboxNext();
            }}
            aria-label="Next image"
          >
            ›
          </button>

          <div className="omm-lightbox__footer" onClick={(e) => e.stopPropagation()}>
            <p className="omm-lightbox__caption">{lightboxItem.caption}</p>
            <p className="omm-lightbox__code">
              {String(lightboxIndex + 1).padStart(2, "0")}/{String(lightboxTotal).padStart(2, "0")}
            </p>
          </div>
        </div>
      )}
    </>
  );
}