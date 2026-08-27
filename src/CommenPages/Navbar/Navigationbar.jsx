import React, { useState, useEffect } from "react";
import "./Navigationbar.css";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Properties", href: "/properties" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [currentPath, setCurrentPath] = useState("/");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, []);

  const isActive = (href) => {
    if (href === "/") return currentPath === "/";
    return currentPath.startsWith(href);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="otp-navbar">
      <div className="otp-navbar__inner">
        {/* Logo */}
        <a href="/" className="otp-navbar__brand" onClick={handleLinkClick}>
          <img
            src="../../image/logo.png"
            alt="OMM Tech Properties Logo"
            className="w-[50px] h-[50px] object-contain"
          />
          <span className="otp-navbar__brand-text">
            <span className="otp-navbar__brand-primary">OMM TECH</span>{" "}
            <span className="otp-navbar__brand-accent">PROPERTIES</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="otp-navbar__links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            
             <a key={link.label}
              href={link.href}
              className={
                "otp-navbar__link" +
                (isActive(link.href) ? " otp-navbar__link--active" : "")
              }
              onClick={handleLinkClick}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA button */}
        <a href="#contact" className="otp-navbar__cta">
          Get In Touch
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          className={"otp-navbar__toggle" + (menuOpen ? " is-open" : "")}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile dropdown */}
      <nav
        className={"otp-navbar__mobile-menu" + (menuOpen ? " is-open" : "")}
        aria-label="Mobile primary"
      >
        {NAV_LINKS.map((link) => (
          
          <a  key={link.label}
            href={link.href}
            className={
              "otp-navbar__mobile-link" +
              (isActive(link.href) ? " otp-navbar__mobile-link--active" : "")
            }
            onClick={handleLinkClick}
          >
            {link.label}
          </a>
        ))}
        
         <a href="#contact"
          className="otp-navbar__cta otp-navbar__cta--mobile"
          onClick={() => setMenuOpen(false)}
        >
          Get In Touch
        </a>
      </nav>
    </header>
  );
}