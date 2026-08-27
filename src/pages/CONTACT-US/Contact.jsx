import React, { useState } from "react";
import "./Contact.css";

/* ============================================================
   Inline icon set (no external icon library required)
   ============================================================ */
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const MailIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);
const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const ClockIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);
const ShareIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <path d="m8.59 13.51 6.83 3.98M15.41 6.51 8.59 10.49" />
  </svg>
);
const UserIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
const ListIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
  </svg>
);
const MessageIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const SendIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2">
    <path d="m3 11 18-8-8 18-2-8-8-2Z" />
  </svg>
);
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
  </svg>
);
const UsersIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const AwardIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="6" />
    <path d="m9 14-2 8 5-3 5 3-2-8" />
  </svg>
);
const ExpandIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 3 13 11M21 3h-6M21 3v6M3 21l8-8M3 21h6M3 21v-6" />
  </svg>
);
const TargetIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="2.5" fill="currentColor" stroke="none" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
  </svg>
);
const StarIcon = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor">
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
  </svg>
);
const HeadsetIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3v5Z" />
    <path d="M3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3v5Z" />
  </svg>
);
const CompassIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <path d="m16.24 7.76-2.12 6.36-6.36 2.12 2.12-6.36 6.36-2.12Z" />
  </svg>
);

/* ============================================================
   Social icons
   ============================================================ */
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.1 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12Z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);
const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02ZM3.5 8.5h3.9V21H3.5V8.5Zm6.7 0h3.73v1.71h.05c.52-.96 1.79-1.98 3.68-1.98 3.93 0 4.65 2.5 4.65 5.75V21h-3.9v-5.4c0-1.29-.02-2.95-1.8-2.95-1.8 0-2.08 1.4-2.08 2.85V21h-3.9V8.5Z" />
  </svg>
);
const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-2C18.88 4 12 4 12 4s-6.88 0-8.59.42a2.78 2.78 0 0 0-1.95 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.41 19c1.71.42 8.59.42 8.59.42s6.88 0 8.59-.42a2.78 2.78 0 0 0 1.95-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33Z" />
    <path d="m9.75 15.02 5.75-3.27-5.75-3.27v6.54Z" fill="currentColor" stroke="none" />
  </svg>
);
const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.42-1.35a9.85 9.85 0 0 0 4.62 1.15h.01c5.46 0 9.9-4.45 9.9-9.91C21.95 6.45 17.5 2 12.04 2Zm0 18.05h-.01a8.2 8.2 0 0 1-4.18-1.14l-.3-.18-3.11.78.83-3.03-.2-.31a8.14 8.14 0 0 1-1.26-4.36c0-4.51 3.68-8.19 8.24-8.19a8.15 8.15 0 0 1 8.19 8.2c0 4.5-3.68 8.23-8.2 8.23Zm4.5-6.16c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.96-.14.16-.29.18-.53.06-.25-.12-1.04-.38-1.99-1.22a7.5 7.5 0 0 1-1.38-1.72c-.15-.24-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.16 0-.43.06-.66.31-.22.24-.87.85-.87 2.07 0 1.22.89 2.4 1.02 2.56.12.16 1.75 2.67 4.24 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.55.1.47-.07 1.46-.6 1.67-1.17.2-.58.2-1.08.14-1.18-.06-.1-.23-.16-.48-.28Z" />
  </svg>
);

/* ============================================================
   Data
   ============================================================ */
const contactCards = [
  { icon: <PhoneIcon />, label: "CALL US", lines: ["+91 9827832424"] },
  { icon: <MailIcon />, label: "EMAIL US", lines: ["manmath.otp@gmail.com"] },
  {
    icon: <PinIcon />,
    label: "OUR OFFICE",
    lines: [
      "Flat No- 304, Biraja complex, Cuttuck road, Bomikhal,",
      "Bhubaneswar-751010, Odisha",
    ],
  },
  {
    icon: <ClockIcon />,
    label: "OFFICE HOURS",
    lines: ["Mon - Sat : 9:00 AM - 6:00 PM", "Sunday : Closed"],
  },
];

/* ---- Office / map details ---- */
const OFFICE_NAME = "OMM TECH & PROPERTIES";
const OFFICE_ADDRESS_LINES = [
  "Flat No- 304, Biraja complex,",
  "Cuttuck road, Bomikhal,",
  "Bhubaneswar, Bhubaneswar-751010,",
  "Odisha, India",
];
const OFFICE_RATING = "5.0";
const OFFICE_REVIEWS = "70";
const OFFICE_PHONE_DISPLAY = "+91 9827832424";
const OFFICE_PHONE_TEL = "+919827832424";

/* ============================================================
   SOCIAL LINKS
   Replace the placeholder URLs below with your real profile
   links. WhatsApp is already wired up using OFFICE_PHONE_TEL.
   ============================================================ */
const socialLinks = [
  {
    icon: <FacebookIcon />,
    label: "Facebook",
    href: "https://www.facebook.com/ommtechproperties/", // TODO: replace with your Facebook page URL
  },
  {
    icon: <InstagramIcon />,
    label: "Instagram",
    href: "https://www.instagram.com/ommtechproperties/", // TODO: replace with your Instagram handle
  },
  {
    icon: <LinkedinIcon />,
    label: "LinkedIn",
    href: "https://linkedin.com/company/YOUR_COMPANY", // TODO: replace with your LinkedIn page URL
  },
  {
    icon: <YoutubeIcon />,
    label: "YouTube",
    href: "https://www.youtube.com/@ommtech-properties", // TODO: replace with your YouTube channel URL
  },
  {
    icon: <WhatsappIcon />,
    label: "WhatsApp",
    href: "https://wa.me/917008058453",
  },
];

const perks = [
  {
    icon: <ShieldIcon />,
    title: "QUICK RESPONSE",
    text: "We respond to all inquiries within 24 hours.",
  },
  {
    icon: <UsersIcon />,
    title: "EXPERT ASSISTANCE",
    text: "Our team is here to help you find the right property.",
  },
  {
    icon: <AwardIcon />,
    title: "PERSONALIZED GUIDANCE",
    text: "Get personalized support for site visits and property selection.",
  },
];

/* Exact pin coordinates, taken from the provided Google Maps place embed */
const OFFICE_LAT = 20.283265409801235;
const OFFICE_LNG = 85.85590597116447;
const OFFICE_SHORT_LINK = "https://maps.app.goo.gl/6bTkwiiEgsg4VrYs8";

const MAP_EMBED_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233.9006615964653!2d85.85590597116447!3d20.283265409801235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a190bc798a2aa0d%3A0xc961c53ebba331!2sOMM%20TECH%20AND%20PROPERTIES%20PRIVATE%20LIMITED!5e0!3m2!1sen!2sin!4v1786429183572!5m2!1sen!2sin";
const MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${OFFICE_LAT},${OFFICE_LNG}`;
const MAP_VIEW_URL = OFFICE_SHORT_LINK;

/* ============================================================
   Contact form + info section
   ============================================================ */
function ContactFormSection() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    inquiryType: "",
    propertyType: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Wire this up to your backend / email service.
    setTimeout(() => {
      setSubmitting(false);
      alert("Message sent! We'll get back to you soon.");
      setForm({
        fullName: "",
        email: "",
        phone: "",
        inquiryType: "",
        propertyType: "",
        message: "",
      });
    }, 900);
  };

  return (
    <section className="contact-section"> <br />
      <div className="contact-grid">
        {/* ---------- Left column ---------- */}
        <div className="contact-info">
          <h2 className="section-heading">
            <span className="heading-line" />
            GET IN TOUCH
            <span className="heading-line" />
          </h2>
          <p className="section-subtext">
            Have questions or need assistance? Reach out to us through any of
            the following channels.
          </p>

          <div className="info-cards">
            {contactCards.map((card) => (
              <div className="info-card" key={card.label}>
                <div className="info-icon">{card.icon}</div>
                <div className="info-content">
                  <div className="info-label">{card.label}</div>
                  {card.lines.map((line, i) => (
                    <div className="info-text" key={i}>
                      {line}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            <div className="info-card">
              <div className="info-icon">
                <ShareIcon />
              </div>
              <div className="info-content">
                <div className="info-label">FOLLOW US</div>
                <div className="social-row">
                  {socialLinks.map((s) => (
                    <a
                      className="social-btn"
                      href={s.href}
                      key={s.label}
                      aria-label={s.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Right column ---------- */}
        <div className="contact-form-panel">
          <h2 className="section-heading">
            <span className="heading-line" />
            SEND US A MESSAGE
            <span className="heading-line" />
          </h2>
          <p className="section-subtext">
            Fill out the form below and we&rsquo;ll get back to you as soon as
            possible.
          </p>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <UserIcon />
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name *"
                  value={form.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <MailIcon />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address *"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field full-width">
                <PhoneIcon />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number *"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-field select-field">
                <ListIcon />
                <select
                  name="inquiryType"
                  value={form.inquiryType}
                  onChange={handleChange}
                >
                  <option value="" disabled hidden>
                    Select Inquiry Type
                  </option>
                  <option value="buying">Buying</option>
                  <option value="selling">Selling</option>
                  <option value="renting">Renting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-field select-field">
                <ListIcon />
                <select
                  name="propertyType"
                  value={form.propertyType}
                  onChange={handleChange}
                >
                  <option value="" disabled hidden>
                    Preferred Property Type (If any)
                  </option>
                  <option value="apartment">Apartment</option>
                  <option value="villa">Villa</option>
                  <option value="plot">Plot</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
            </div>

            <div className="form-row">
              <div className="form-field textarea-field full-width">
                <MessageIcon />
                <textarea
                  name="message"
                  placeholder="Message *"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="submit-row">
              <button type="submit" className="send-btn" disabled={submitting}>
                {submitting ? "Sending..." : "Send Message"}
                <SendIcon />
              </button>
            </div>
          </form>

          <div className="perks-row">
            {perks.map((perk) => (
              <div className="perk-card" key={perk.title}>
                <div className="perk-icon">{perk.icon}</div>
                <div className="perk-title">{perk.title}</div>
                <div className="perk-text">{perk.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Find Us / map section
   ============================================================ */
function FindUsSection() {
  return (
    <section className="find-us-section">
      <h2 className="section-heading find-us-heading">
        <span className="heading-line" />
        FIND US
        <span className="heading-line" />
      </h2>
      <p className="section-subtext find-us-subtext">Visit us at our office.</p>

      <div className="map-frame">
        <iframe
          className="map-iframe"
          title="Office location map"
          src={MAP_EMBED_SRC}
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />

        {/* Floating location card */}
        <div className="map-card">
          <div className="map-card-header">
            <span className="map-card-title">{OFFICE_NAME}</span>
            <div className="map-card-actions">
              <a
                className="map-icon-btn"
                href={MAP_VIEW_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Open full map"
              >
                <ExpandIcon />
              </a>
              <a
                className="map-icon-btn"
                href={MAP_DIRECTIONS_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Get directions"
              >
                <TargetIcon />
              </a>
            </div>
          </div>

          <div className="map-card-address">
            {OFFICE_ADDRESS_LINES.map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>

          <div className="map-card-rating">
            <span className="rating-value">
              {OFFICE_RATING} <StarIcon />
            </span>
            <span className="rating-count">({OFFICE_REVIEWS})</span>
          </div>
        </div>
      </div>

      {/* Bottom help bar */}
      <div className="help-bar">
        <div className="help-bar-left">
          <div className="help-icon">
            <HeadsetIcon />
          </div>
          <div>
            <div className="help-title">NEED IMMEDIATE HELP?</div>
            <div className="help-subtext">
              Call us directly or visit our office during office hours.
            </div>
          </div>
        </div>

        <div className="help-bar-right">
          <a className="help-btn help-btn-outline" href={`tel:${OFFICE_PHONE_TEL}`}>
            <PhoneIcon />
            {OFFICE_PHONE_DISPLAY}
          </a>
          <a
            className="help-btn help-btn-solid"
            href={MAP_DIRECTIONS_URL}
            target="_blank"
            rel="noreferrer"
          >
            <CompassIcon />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   Top-level export
   ============================================================ */
export default function Contact() {
  return (
    <div className="contact-page">
      <ContactFormSection />
      <FindUsSection />
    </div>
  );
}