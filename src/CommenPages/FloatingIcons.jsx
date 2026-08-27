import React, { useState } from "react";
import { ArrowUp, Phone, Mail, MessageCircle } from "lucide-react";
import "./FloatingIcons.css";

/**
 * FloatingIcons
 * A fixed, vertical stack of quick-action buttons (scroll-to-top, call,
 * email, WhatsApp) that floats over the page — independent of any
 * particular section, so it can be dropped once at the app root.
 *
 * Props let you wire up real actions/links without editing this file.
 */

// Inline SVG icons (lucide-react no longer ships brand/social icons)
const FacebookIcon = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.89h2.78l-.44 2.91h-2.34V22c4.78-.79 8.44-4.94 8.44-9.94z" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" fill="#0a0f18" />
  </svg>
);

export default function FloatingIcons({
  phone = "tel:+919827832424",
  email = "mailto:manmath.otp@gmail.com",
  whatsapp = "https://wa.me/917008058453",
  facebook = "https://www.facebook.com/ommtechproperties/",
  instagram = "https://www.instagram.com/ommtechproperties/",
  youtube = "https://www.youtube.com/@ommtech-properties",
}) {
  const [showSocial, setShowSocial] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setShowSocial((prev) => !prev);
  };

  return (
    <div className="fi-root">
      <button className="fi-btn" onClick={scrollToTop} aria-label="Scroll to top">
        <ArrowUp size={16} />
      </button>

      <a className="fi-btn" href={phone} aria-label="Call us">
        <Phone size={16} />
      </a>

      <a className="fi-btn" href={email} aria-label="Email us">
        <Mail size={16} />
      </a>

      
       <a className="fi-btn"
        href={whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={16} />
      </a>

      <div className={`fi-social ${showSocial ? "fi-social--open" : ""}`}>
        
         <a className="fi-btn"
          href={facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          style={{ transitionDelay: showSocial ? "0ms" : "0ms" }}
        >
          <FacebookIcon />
        </a>

        
         <a className="fi-btn"
          href={instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          style={{ transitionDelay: showSocial ? "40ms" : "0ms" }}
        >
          <InstagramIcon />
        </a>

        
         <a className="fi-btn"
          href={youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          style={{ transitionDelay: showSocial ? "80ms" : "0ms" }}
        >
          <YoutubeIcon />
        </a>
      </div>
    </div>
  );
}