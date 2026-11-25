import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import TechText from "./TechText";
import HalftoneWordmarkFooter from "./HalftoneWordmarkFooter";
import "./App.css";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
}

// Staggered characters for splash intro
const INTRO_1 = "Oh, hello!".split("");
const INTRO_2 = "You found me!".split("");

function AboutView({ navigateTo }) {
  const [reactionsCount, setReactionsCount] = useState(1);

  return (
    <div className="ca-about-page-container ca-grid">
      {/* Desktop Fixed Left Navigation Tabs */}
      <aside className="ca-about-side-nav" aria-label="About sections">
        <button
          className="ca-side-nav-tab"
          onClick={() => document.getElementById("bio")?.scrollIntoView({ behavior: "smooth" })}
          style={{ backgroundColor: "var(--ca-yellow)", color: "var(--ca-ink)" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="ca-side-nav-icon">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="3.5" fill="white" />
          </svg>
          <span>MAIN BIO</span>
        </button>
        <button
          className="ca-side-nav-tab"
          onClick={() => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })}
          style={{ backgroundColor: "var(--ca-magenta)", color: "#ffffff" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="ca-side-nav-icon">
            <path d="M12 2l10 10-10 10L2 12z" />
          </svg>
          <span>STORY</span>
        </button>
        <button
          className="ca-side-nav-tab"
          onClick={() => document.getElementById("beyond")?.scrollIntoView({ behavior: "smooth" })}
          style={{ backgroundColor: "var(--ca-blue)", color: "#ffffff" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="ca-side-nav-icon">
            <path d="M12 2 15 9l7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" />
          </svg>
          <span>BEYOND</span>
        </button>
        <button
          className="ca-side-nav-tab"
          onClick={() => document.getElementById("principles")?.scrollIntoView({ behavior: "smooth" })}
          style={{ backgroundColor: "var(--ca-green)", color: "#ffffff" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="ca-side-nav-icon">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" stroke="#fff" strokeWidth="2" fill="none" />
          </svg>
          <span>PRINCIPLES</span>
        </button>
        <button
          className="ca-side-nav-tab"
          onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
          style={{ backgroundColor: "var(--ca-purple)", color: "var(--ca-ink)" }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" className="ca-side-nav-icon">
            <path d="M4 6h16v12H4z" />
          </svg>
          <span>WORK</span>
        </button>
      </aside>

      <main className="ca-about-main-content">
        <div className="ca-about-inner-max">
          {/* Header Title */}
          <div className="ca-about-page-header">
            <h1 className="ca-display ca-about-giant-title">ABOUT</h1>

            {/* Mobile Subnav Pills */}
            <div className="ca-about-mobile-pills">
              <button
                className="ca-mobile-pill"
                onClick={() => document.getElementById("bio")?.scrollIntoView({ behavior: "smooth" })}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "0.85rem", height: "0.85rem" }}>
                  <circle cx="12" cy="12" r="9" />
                  <circle cx="12" cy="12" r="3.5" fill="white" />
                </svg>
                BIO
              </button>
              <button
                className="ca-mobile-pill"
                onClick={() => document.getElementById("story")?.scrollIntoView({ behavior: "smooth" })}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "0.85rem", height: "0.85rem" }}>
                  <path d="M12 2l10 10-10 10L2 12z" />
                </svg>
                STORY
              </button>
              <button
                className="ca-mobile-pill"
                onClick={() => document.getElementById("beyond")?.scrollIntoView({ behavior: "smooth" })}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "0.85rem", height: "0.85rem" }}>
                  <path d="M12 2 15 9l7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" />
                </svg>
                BEYOND
              </button>
              <button
                className="ca-mobile-pill"
                onClick={() => document.getElementById("principles")?.scrollIntoView({ behavior: "smooth" })}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "0.85rem", height: "0.85rem" }}>
                  <circle cx="12" cy="12" r="10" />
                </svg>
                PRINCIPLES
              </button>
              <button
                className="ca-mobile-pill"
                onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "0.85rem", height: "0.85rem" }}>
                  <path d="M4 6h16v12H4z" />
                </svg>
                WORK
              </button>
            </div>
          </div>

          {/* ========================================================= */}
          {/* SECTION 1: MAIN BIO */}
          {/* ========================================================= */}
          <section id="bio" className="ca-about-section-block">
            <span className="ca-postage-stamp stamp-yellow rot-neg2">
              MAIN BIO
            </span>

            <div className="ca-doodle-box ca-about-doodle-card border-yellow">
              <div className="ca-about-bio-grid">
                {/* Text Content */}
                <div className="ca-about-bio-text-area">
                  <span className="ca-mono" style={{ fontSize: "0.85rem", fontWeight: "800", color: "var(--ca-blue)", textTransform: "uppercase", letterSpacing: "0.1em", display: "block", marginBottom: "0.4rem" }}>
                    01 · ABOUT ME
                  </span>
                  <h2 className="ca-display" style={{ fontSize: "2.4rem", lineHeight: 1.05, marginBottom: "0.85rem", color: "var(--ca-ink)" }}>
                    Building Digital Experiences With Code &amp; Creativity.
                  </h2>
                  <p className="ca-hand ca-about-bio-lead" style={{ fontSize: "1.5rem" }}>
                    I&apos;m Purushotham, a developer and creative designer passionate about building modern digital products that combine functionality, performance, and visual quality. ✨
                  </p>

                  <div className="ca-about-story-paragraphs">
                    <p>
                      My work spans full-stack web development, mobile application development, UI/UX design, and brand identity creation. From planning a product to designing its interface and developing its functionality, I enjoy bringing ideas to life through technology.
                    </p>
                    <p>
                      I believe great digital products should not only look impressive but also solve real problems, deliver smooth experiences, and create value for users.
                    </p>
                  </div>

                  {/* My Focus List */}
                  <div className="ca-taped-callout yellow-soft rot-neg1" style={{ marginTop: "1.25rem" }}>
                    <span className="ca-tape-strip-tl" />
                    <span className="ca-mono" style={{ fontSize: "0.8rem", fontWeight: "800", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
                      ✦ MY FOCUS:
                    </span>
                    <ul style={{ margin: 0, paddingLeft: "1.2rem", fontSize: "0.95rem", lineHeight: 1.6 }}>
                      <li>Creating responsive, user-friendly websites.</li>
                      <li>Developing cross-platform mobile applications.</li>
                      <li>Designing clean, modern UI/UX experiences.</li>
                      <li>Building memorable logos and brand identities.</li>
                      <li>Turning business ideas into practical digital solutions.</li>
                    </ul>
                  </div>
                </div>

                {/* Right Side Polaroid & Arrow */}
                <div className="ca-about-bio-photo-area">
                  <figure className="ca-about-polaroid rot-pos10">
                    <span className="ca-polaroid-tape-cyan-tl" />
                    <span className="ca-polaroid-tape-yellow-tr" />
                    <div className="ca-about-polaroid-img-box">
                      <img
                        src="/purushotham-portrait.jpg"
                        alt="Purushotham in 2026"
                        className="ca-about-polaroid-img"
                      />
                    </div>
                    <figcaption className="ca-hand ca-polaroid-caption">2026</figcaption>
                  </figure>

                  <div className="ca-robin-badge-group">
                    <svg viewBox="0 0 40 40" fill="none" stroke="var(--ca-ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ca-robin-arrow-svg">
                      <path d="M34 33 C 25 24, 15 21, 9 9" />
                      <path d="M8 21 L 7 7 L 21 11" />
                    </svg>
                    <span className="ca-robin-capsule-badge ca-mono">PURUSHOTHAM</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 2: STORY */}
          {/* ========================================================= */}
          <section id="story" className="ca-about-section-block">
            <span className="ca-postage-stamp stamp-magenta rot-pos2">
              STORY
            </span>

            <div className="ca-doodle-box ca-about-doodle-card border-magenta relative">
              <div className="ca-principles-list">
                {/* Principle 1 */}
                <div className="ca-principle-row">
                  <div className="ca-principle-card cyan rot-neg1">
                    <span className="ca-tape-corner-tl" />
                    <span className="ca-tape-corner-br" />
                    <h3 className="ca-principle-title">Start with the why</h3>
                    <p className="ca-principle-desc">
                      Before writing a line of code or drawing a pixel, I want to know what we're actually solving and who it's for. Skip that and you ship something polished that nobody needed.
                    </p>
                  </div>
                  <div className="ca-principle-annotation">
                    <svg viewBox="0 0 48 24" fill="none" stroke="var(--ca-ink)" strokeWidth="2.2" strokeLinecap="round" className="ca-arrow-horizontal">
                      <path d="M2 6c12 10 26 14 40 12" />
                      <path d="M36 14l6 4-7 3" />
                    </svg>
                    <p className="ca-hand ca-principle-note">questions before pixels.</p>
                  </div>
                </div>

                {/* Principle 2 */}
                <div className="ca-principle-row">
                  <div className="ca-principle-card yellow-soft rot-pos1">
                    <span className="ca-tape-corner-tr" />
                    <span className="ca-tape-corner-bl" />
                    <h3 className="ca-principle-title">Design Meets Functionality</h3>
                    <p className="ca-principle-desc">
                      I aim to balance visual quality with practical functionality. Good digital products should feel effortless to use and inspire trust from the very first interaction.
                    </p>
                  </div>
                  <div className="ca-principle-annotation">
                    <svg viewBox="0 0 48 24" fill="none" stroke="var(--ca-ink)" strokeWidth="2.2" strokeLinecap="round" className="ca-arrow-horizontal">
                      <path d="M2 6c12 10 26 14 40 12" />
                      <path d="M36 14l6 4-7 3" />
                    </svg>
                    <p className="ca-hand ca-principle-note">balance is key!</p>
                  </div>
                </div>

                {/* Principle 3 */}
                <div className="ca-principle-row">
                  <div className="ca-principle-card purple rot-neg2">
                    <span className="ca-tape-corner-tl" />
                    <span className="ca-tape-corner-tr" />
                    <h3 className="ca-principle-title">End-to-End Perspective</h3>
                    <p className="ca-principle-desc">
                      I connect interface design, frontend development, backend APIs, and product strategy. When every layer is in sync, the final product feels cohesive and solid.
                    </p>
                  </div>
                  <div className="ca-principle-annotation">
                    <svg viewBox="0 0 48 24" fill="none" stroke="var(--ca-ink)" strokeWidth="2.2" strokeLinecap="round" className="ca-arrow-horizontal">
                      <path d="M2 6c12 10 26 14 40 12" />
                      <path d="M36 14l6 4-7 3" />
                    </svg>
                    <p className="ca-hand ca-principle-note">full stack thinking.</p>
                  </div>
                </div>
              </div>

              {/* Story pill annotation on side */}
              <div className="ca-story-side-badge" aria-hidden="true">
                <svg viewBox="0 0 40 40" fill="none" stroke="var(--ca-ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ca-story-arrow-svg">
                  <path d="M34 33 C 25 24, 15 21, 9 9" />
                  <path d="M8 21 L 7 7 L 21 11" />
                </svg>
                <span className="ca-story-capsule-badge ca-mono">STORY</span>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* SECTION 4: BEYOND THE SCREEN */}
          {/* ========================================================= */}
          <BeyondTheScreenSection />

          {/* ========================================================= */}
          {/* SECTION 5: CREATIVE PRINCIPLES */}
          {/* ========================================================= */}
          <CreativePrinciplesSection />

          {/* ========================================================= */}
          {/* EDUCATION & LANGUAGES */}
          {/* ========================================================= */}
          <EducationAndLanguagesSection />

          {/* ========================================================= */}
          {/* SECTION 6: WORK & EXPERIENCE */}
          {/* ========================================================= */}
          <section id="work" className="ca-about-section-block">
            <span className="ca-postage-stamp stamp-blue rot-neg2">
              WORK
            </span>

            <div className="ca-doodle-box ca-about-doodle-card border-blue">
              <div className="ca-work-timeline-list">
                <div className="ca-work-timeline-item">
                  <div className="ca-work-timeline-main">
                    <span className="ca-work-bullet blue" />
                    <div className="ca-work-text-group">
                      <h4 className="ca-work-role-title">Developer, Designer &amp; Digital Creator</h4>
                      <span className="ca-work-company-sub">Independent &amp; Collaborative Projects</span>
                    </div>
                  </div>
                  <span className="ca-work-period-badge blue">2024 to Now</span>
                </div>

                <div className="ca-work-timeline-item">
                  <div className="ca-work-timeline-main">
                    <span className="ca-work-bullet blue" />
                    <div className="ca-work-text-group">
                      <h4 className="ca-work-role-title">Full-Stack Web &amp; Mobile Engineer</h4>
                      <span className="ca-work-company-sub">Web Platforms &amp; Flutter Apps</span>
                    </div>
                  </div>
                  <span className="ca-work-period-badge blue">2022 to 2024</span>
                </div>

                <div className="ca-work-timeline-item">
                  <div className="ca-work-timeline-main">
                    <span className="ca-work-bullet blue" />
                    <div className="ca-work-text-group">
                      <h4 className="ca-work-role-title">UI/UX Designer &amp; Brand Strategist</h4>
                      <span className="ca-work-company-sub">Digital Products &amp; Design Systems</span>
                    </div>
                  </div>
                  <span className="ca-work-period-badge blue">2020 to 2022</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* ========================================================= */}
      {/* 4. ABOUT PAGE BOTTOM: CONTACT SECTION */}
      {/* ========================================================= */}
      <section id="contact" className="ca-about-contact-section">
        <div className="ca-talk-header-container">
          <h2 className="ca-display ca-talk-title">
            LET'S CREATE SOMETHING
          </h2>

          <p className="ca-hand ca-talk-desc">
            Your idea could be my next build. Have a project in mind? Send it over.
          </p>
        </div>

        <div className="ca-talk-card-wrapper">
          {/* Floating Purushotham comment card */}
          <div className="ca-talk-comment-card">
            <span className="ca-comment-tape tl" />
            <span className="ca-comment-tape tr" />
            <div className="ca-comment-inner">
              <img
                src="/purushotham-portrait.jpg"
                alt="Purushotham"
                className="ca-comment-avatar"
              />
              <div className="ca-comment-body">
                <div className="ca-comment-author">Purushotham</div>
                <div className="ca-comment-text">
                  Open to projects, creative collaborations, website and mobile app development, and UI/UX design.
                </div>
                <button
                  onClick={() => setReactionsCount((c) => c + 1)}
                  className="ca-comment-reaction-btn ca-mono"
                  title="Click to react"
                >
                  ⚡ {reactionsCount}
                </button>
              </div>
            </div>
          </div>

          {/* Big Yellow Taped Contact Action Banner */}
          <div
            onClick={() => navigateTo("contact")}
            className="ca-talk-banner"
            role="button"
            tabIndex={0}
          >
            <span className="ca-banner-tape-left" />
            <span className="ca-banner-tape-right" />
            <p className="ca-hand ca-banner-tagline">your idea could be my next build</p>
            <span className="ca-display ca-banner-display-text">CONTACT</span>
            <span className="ca-mono ca-banner-sub">
              purushothamkrishna07@gmail.com
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" style={{ width: "1.1rem", height: "1.1rem" }}>
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

function ContactView() {
  const [step, setStep] = useState(1);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNext = (e) => {
    e.preventDefault();
    if (!message.trim()) {
      alert("Please enter a note or message first!");
      return;
    }
    setStep(2);
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      alert("Please provide your name and email!");
      return;
    }
    setSubmitted(true);
  };

  return (
    <main className="ca-grid ca-contact-main-screen">
      {/* Flanking Polaroids (Desktop) */}
      <div className="ca-contact-flanking-polaroids" aria-hidden="true">
        {/* Left Polaroid: Nike Mind */}
        <div className="ca-contact-polaroid-anchor left">
          <figure className="ca-contact-polaroid-card">
            <span className="ca-contact-tape left-tape" aria-hidden="true" />
            <span className="ca-contact-tape right-tape" aria-hidden="true" />
            <div className="ca-contact-polaroid-frame">
              <img
                src="https://images.unsplash.com/photo-1769750216011-28855a9aad37?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="random shot"
                loading="lazy"
                className="ca-contact-polaroid-photo"
              />
            </div>
            <figcaption className="ca-hand ca-contact-polaroid-label">
              random shot
            </figcaption>
          </figure>
        </div>

        {/* Right Polaroid: Gadgets */}
        <div className="ca-contact-polaroid-anchor right">
          <figure className="ca-contact-polaroid-card">
            <span className="ca-contact-tape left-tape" aria-hidden="true" />
            <span className="ca-contact-tape right-tape" aria-hidden="true" />
            <div className="ca-contact-polaroid-frame">
              <img
                src="https://images.unsplash.com/photo-1761641466573-f240b6e446de?q=80&w=1065&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="what is this"
                loading="lazy"
                className="ca-contact-polaroid-photo"
              />
            </div>
            <figcaption className="ca-hand ca-contact-polaroid-label">
              what is this
            </figcaption>
          </figure>
        </div>
      </div>

      {/* Center Content Column */}
      <div className="ca-contact-center-stage">
        {/* "say hi" handwritten label with wavy double underline */}
        <div className="ca-contact-sayhi-group">
          <p className="ca-hand ca-contact-sayhi-text">say hi</p>
          <svg
            viewBox="0 0 64 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            className="ca-contact-sayhi-wave"
            aria-hidden="true"
          >
            <path d="M3 4c18-3 40-3 58 0" />
            <path d="M9 9c14-2.5 32-2.5 46 0" />
          </svg>
        </div>

        {/* Rotated CONTACT Banner with 4 Blue Corner Squares */}
        <div className="ca-contact-banner-wrap">
          <div className="ca-contact-banner-box">
            <span className="ca-contact-handle-square tl" aria-hidden="true" />
            <span className="ca-contact-handle-square tr" aria-hidden="true" />
            <span className="ca-contact-handle-square bl" aria-hidden="true" />
            <span className="ca-contact-handle-square br" aria-hidden="true" />
            <span className="ca-display ca-contact-display-text">CONTACT</span>
          </div>
        </div>

        {/* Manila Yellow Note Form Card */}
        <div className="ca-contact-card-wrap">
          <div className="ca-contact-yellow-card">
            {submitted ? (
              <div className="ca-contact-success-state">
                <div style={{ fontSize: "2.75rem", lineHeight: 1 }}>🎉</div>
                <h3 className="ca-display" style={{ fontSize: "1.6rem", marginTop: "0.5rem" }}>
                  NOTE RECEIVED!
                </h3>
                <p className="ca-mono" style={{ fontSize: "0.85rem", marginTop: "0.4rem", color: "var(--ca-ink)" }}>
                  Thanks for reaching out! I read every message and will get back to you soon.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setStep(1);
                    setMessage("");
                    setName("");
                    setEmail("");
                  }}
                  className="ca-mono ca-contact-submit-btn"
                  style={{ marginTop: "1rem" }}
                >
                  Send another note ↺
                </button>
              </div>
            ) : (
              <form noValidate onSubmit={step === 1 ? handleNext : handleSend}>
                <p className="ca-mono ca-contact-card-prompt">
                  YOUR IDEA COULD BE MY NEXT BUILD. HAVE A WEBSITE IDEA, MOBILE APPLICATION CONCEPT, BRANDING REQUIREMENT, OR DIGITAL PRODUCT YOU WANT TO EXPLORE? SEND IT OVER.
                </p>

                {step === 1 ? (
                  <div className="ca-contact-step-1">
                    <textarea
                      id="ca-contact-message"
                      name="message"
                      rows="4"
                      className="ca-mono ca-contact-textarea-field"
                      placeholder="Tell me about your idea, project goals, or requirements…"
                      aria-label="Your message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="ca-mono ca-contact-submit-btn"
                    >
                      Next (1/2)
                    </button>
                  </div>
                ) : (
                  <div className="ca-contact-step-2">
                    <div className="ca-contact-input-stack">
                      <div className="ca-contact-field-group">
                        <label htmlFor="ca-contact-name" className="ca-mono ca-contact-field-label">
                          Name
                        </label>
                        <input
                          type="text"
                          id="ca-contact-name"
                          name="name"
                          placeholder="Your Name"
                          autoComplete="name"
                          className="ca-mono ca-contact-underline-input"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          autoFocus
                        />
                      </div>
                      <div className="ca-contact-field-group">
                        <label htmlFor="ca-contact-email" className="ca-mono ca-contact-field-label">
                          Email
                        </label>
                        <input
                          type="email"
                          id="ca-contact-email"
                          name="email"
                          placeholder="your.email@example.com"
                          autoComplete="email"
                          className="ca-mono ca-contact-underline-input"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="ca-contact-btn-row">
                      <button
                        type="button"
                        aria-label="Back to your note"
                        className="ca-mono ca-contact-back-btn"
                        onClick={() => setStep(1)}
                      >
                        ←
                      </button>
                      <button
                        type="submit"
                        className="ca-mono ca-contact-submit-btn"
                      >
                        Send (2/2)
                      </button>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Hand-drawn arrow & Open to new work note
        <div className="ca-contact-status-group">
          <svg viewBox="0 0 48 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="ca-contact-status-arrow" aria-hidden="true">
            <path d="M2 6c12 10 26 14 40 12" />
            <path d="M36 14l6 4-7 3" />
          </svg>

        </div> */}

        {/* Services Ribbon */}
        <div className="ca-services-ribbon" style={{ margin: "0.25rem auto 1rem" }}>
          <span className="ca-service-ribbon-item">Website Development</span>
          <span className="ca-service-ribbon-item">App Development</span>
          <span className="ca-service-ribbon-item">UI/UX Design</span>
          <span className="ca-service-ribbon-item">Logo &amp; Branding</span>
        </div>

        {/* Purushotham Email Link */}
        <p className="ca-contact-email-row">
          <a href="mailto:purushothamkrishna07@gmail.com" className="ca-mono ca-contact-email-anchor">
            purushothamkrishna07@gmail.com
          </a>
        </p>

        {/* Final Sign-Off at bottom of contact page */}
        <div style={{ width: "100%", maxWidth: "800px", margin: "1.5rem auto" }}>
          <FinalSignoffSection />
        </div>

        {/* Floating Social Pill Dock */}
        <div className="ca-contact-social-dock" aria-label="Social links">
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="ca-mono ca-contact-dock-item">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ca-contact-dock-svg" aria-hidden="true">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a href="https://dribbble.com" target="_blank" rel="noreferrer" className="ca-mono ca-contact-dock-item">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ca-contact-dock-svg" aria-hidden="true">
              <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 5.99 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.298zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
            </svg>
            Dribbble
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="ca-mono ca-contact-dock-item">
            <svg viewBox="0 0 24 24" fill="currentColor" className="ca-contact-dock-svg" aria-hidden="true">
              <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
            </svg>
            Instagram
          </a>
        </div>
      </div>
    </main>
  );
}

// Purushotham's Featured Case Studies Projects (Matching Portfoliofy 4-tab template)
const FEATURED_PROJECTS = [
  {
    id: "invitestory",
    num: "01",
    title: "InviteStory",
    subtitle: "Digital Invitation & Event Platform",
    category: "web",
    date: "IN PROGRESS",
    desc: "Creating a more convenient digital invitation and event experience with dynamic RSVPs and seamless guest workflows.",
    cardColor: "#2563eb",
    rgb: "37, 99, 235",
    theme: "blue",
    tags: ["EVENT TECH", "DYNAMIC RSVPS", "WEB APP"],
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2070&auto=format&fit=crop",
    overview: "A digital invitation platform in development, designed to make event invitations easier to create, share, and manage. The concept focuses on bringing invitations and guest experiences into one convenient digital platform.",
    impact: "Project Focus: Digital invitation experiences · Event and guest management · Modern invitation interfaces · Digital sharing and user-friendly workflows.",
  },
  {
    id: "giftthem",
    num: "02",
    title: "GiftThem",
    subtitle: "Interactive Gifts & Storytelling App",
    category: "mobile",
    date: "FEATURED",
    desc: "Cross-platform mobile application creating delightful, personalized storytelling gift journeys with smooth vector animations.",
    cardColor: "#191510",
    rgb: "25, 21, 16",
    theme: "dark",
    tags: ["FLUTTER", "RIVE ANIMATION", "MOBILE APP"],
    image: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop",
    overview: "A cross-platform mobile application built with Flutter and Rive animations, focused on creating joyful, personalized gift-giving experiences with rich interactive storytelling.",
    impact: "Project Focus: Interactive mobile UI · Rive animation integration · Cross-platform Flutter architecture · High engagement user flows.",
  },
  {
    id: "drexxstudio",
    num: "03",
    title: "DrexxStudio",
    subtitle: "Fashion & Creative Digital Experience",
    category: "web",
    date: "IN PROGRESS",
    desc: "Fashion-focused website project exploring modern design, bespoke typography, and visually engaging creative lookbooks.",
    cardColor: "#f59e0b",
    rgb: "245, 158, 11",
    theme: "yellow",
    tags: ["FASHION TECH", "LOOKBOOK UI", "CREATIVE BRANDING"],
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
    overview: "A fashion-focused website project exploring how modern design and digital presentation can create a visually engaging browsing experience. The project emphasizes a strong visual identity, organized layouts, responsive interfaces, and a polished presentation of fashion-related content.",
    impact: "Project Focus: Fashion-focused website design · Visual presentation and creative layouts · Responsive user interfaces · Branding and digital experience.",
  },
  {
    id: "volt",
    num: "04",
    title: "Volt",
    subtitle: "Energy Management & Clean Tech",
    category: "mobile",
    date: "MAR 16, 2026",
    desc: "Helping people actually understand the energy they use at home with intuitive real-time tracking and clean data design.",
    cardColor: "#ec4899",
    rgb: "236, 72, 153",
    theme: "magenta",
    tags: ["CLIMATE", "DATA DESIGN", "MOBILE ARCH"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2070&auto=format&fit=crop",
    overview: "An energy monitoring interface designed to make daily electricity consumption intuitive, actionable, and visual for everyday households through clean data architecture and accessible UI.",
    impact: "Project Focus: Real-time telemetry dashboards · Visual data design · Mobile-responsive views · Energy analytics workflows.",
  },
];
const CASE_STUDIES_PROJECTS = FEATURED_PROJECTS;

function CaseStudiesView({ onSelectProject, navigateTo }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filterOptions = [
    { id: "all", label: "✦ ALL WORKS (4)" },
    { id: "web", label: "💻 WEB APPS (2)" },
    { id: "mobile", label: "📱 MOBILE & FLUTTER (2)" },
  ];

  const filteredProjects = activeFilter === "all"
    ? CASE_STUDIES_PROJECTS
    : CASE_STUDIES_PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <div className="ca-case-studies-page-container">
      <main className="ca-case-studies-main">
        {/* Header */}
        <div className="ca-case-studies-header">
          <span className="ca-postage-stamp stamp-blue rot-pos1" style={{ marginBottom: "0.5rem" }}>
            ✦ 04 · CASE STUDIES &amp; REAL BUILDS
          </span>
          <p className="ca-case-studies-label">explore my work!</p>
          <h1 className="ca-case-studies-title">FEATURED WORKS</h1>
          <svg viewBox="0 0 64 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="ca-wavy-line" style={{ margin: "0.25rem auto 1rem" }} aria-hidden="true">
            <path d="M3 4c18-3 40-3 58 0" />
            <path d="M9 9c14-2.5 32-2.5 46 0" />
          </svg>
          <p className="ca-case-studies-desc">
            A curated collection of web applications, mobile experiences, and digital products engineered for clarity, speed, and real-world utility.
          </p>

          {/* Interactive Filter Pills */}
          <div className="ca-case-filters" role="tablist" aria-label="Filter case studies">
            {filterOptions.map((opt) => (
              <button
                key={opt.id}
                type="button"
                className={`ca-case-filter-btn ${activeFilter === opt.id ? "active" : ""}`}
                onClick={() => setActiveFilter(opt.id)}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* 2-Column Responsive Glassy Grid */}
        <div className="ca-case-grid">
          {filteredProjects.map((project) => {
            const textPrimary = project.theme === "yellow" ? "var(--ca-ink)" : "#ffffff";
            const textSecondary = project.theme === "yellow" ? "rgba(25, 21, 16, 0.85)" : "rgba(255, 255, 255, 0.9)";
            const tagBg = project.theme === "yellow" || project.theme === "magenta" ? "#191510" : "#ffffff";
            const tagColor = project.theme === "yellow" || project.theme === "magenta" ? "#ffffff" : "#191510";

            return (
              <article
                key={project.id}
                className="ca-case-card-wrapper"
                onClick={() => onSelectProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    onSelectProject(project);
                  }
                }}
              >
                {/* Slanted Glass Tab on Top */}
                <div className="ca-case-tab-bar">
                  <div
                    className={`ca-case-tab theme-${project.theme}`}
                    style={{
                      color: project.theme === "yellow" ? "var(--ca-ink)" : "#ffffff",
                    }}
                  >
                    <span className="ca-tab-sparkle">✦</span>
                    <span className="ca-tab-label">PROJECT {project.num}</span>
                  </div>

                  <div className="ca-case-date-pill">
                    <span className="ca-case-date-dot" />
                    <span>{project.date}</span>
                  </div>
                </div>

                {/* Frosted Acrylic Card Body with Glassy Edges */}
                <div className={`ca-case-card-body theme-${project.theme}`} style={{ color: textPrimary }}>
                  {/* Glass Sheen */}
                  <div className="ca-glass-sheen" aria-hidden="true" />

                  {/* Framed Photo with Glass Tapes */}
                  <div className="ca-case-photo-frame">
                    <span className="ca-glass-tape top-left" />
                    <span className="ca-glass-tape top-right" />
                    <div className="ca-case-photo-inner">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="ca-case-photo-img"
                        loading="lazy"
                      />
                      <div className="ca-case-photo-overlay">
                        <span className="ca-case-hover-badge ca-mono">
                          <span>✦</span> READ CASE STUDY
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className="ca-case-content">
                    <div className="ca-case-subtitle ca-mono">{project.subtitle}</div>
                    <h2 className="ca-case-title">{project.title}</h2>
                    <p className="ca-case-desc" style={{ color: textSecondary }}>
                      {project.desc}
                    </p>

                    {/* Notched Tags */}
                    <div className="ca-case-tags">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="ca-notched-tag"
                          style={{
                            backgroundColor: tagBg,
                            color: tagColor,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Row */}
                    <div className="ca-case-action-row">
                      <button
                        type="button"
                        className="ca-glass-view-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProject(project);
                        }}
                      >
                        <span>VIEW FULL CASE STUDY</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" className="ca-arrow-icon" aria-hidden="true">
                          <path d="M7 17 17 7M9 7h8v8" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </main>

      {/* Talk / Contact Section at bottom */}
      <section className="ca-case-studies-contact-section">
        <span className="ca-postage-stamp stamp-yellow rot-neg1" style={{ marginBottom: "0.5rem" }}>
          03 · LET'S COLLABORATE
        </span>
        <h2 className="ca-display ca-case-studies-contact-title">HAVE A PROJECT IN MIND?</h2>

        {/* Note comment with properly sized avatar */}
        <div className="ca-case-studies-comment-card">
          <div className="ca-talk-comment-header">
            <img
              src="/purushotham-portrait.jpg"
              alt="Purushotham"
              className="ca-talk-avatar-small"
            />
            <div className="ca-talk-author">
              <span className="ca-author-name">Purushotham</span>
              <span className="ca-author-role ca-mono">DEVELOPER &amp; DESIGNER</span>
            </div>
          </div>
          <p className="ca-talk-quote">
            &ldquo;Open to creative collaborations, high-performance web applications, cross-platform mobile builds, and responsive interface systems.&rdquo;
          </p>
        </div>

        <button
          onClick={() => navigateTo("contact")}
          className="ca-hero-cta ca-mono"
        >
          <span className="ca-cta-icon-box">♥</span>
          Start a Conversation ↗
        </button>
      </section>
    </div>
  );
}

function PlaygroundView({ navigateTo }) {
  const [text, setText] = useState("PURUSHOTHAM");
  const [subText, setSubText] = useState("DEVELOPER & DESIGNER");
  const [accentColor, setAccentColor] = useState("var(--ca-magenta)");
  const [color] = useState("var(--ca-ink)");
  const [animKey, setAnimKey] = useState(0);

  const PRESETS = [
    { label: "Purushotham", text: "PURUSHOTHAM", sub: "DEVELOPER & DESIGNER", color: "var(--ca-magenta)" },
    { label: "Creative Coder", text: "CREATIVE", sub: "FULL STACK & UI/UX", color: "var(--ca-blue)" },
    { label: "Digital World", text: "EXPERIENCE", sub: "BUILD WITHOUT LIMITS", color: "var(--ca-yellow)" },
    { label: "React Bits", text: "INTERACTIVE", sub: "SPRING PHYSICS LAB", color: "var(--ca-green)" },
  ];

  const ACCENT_COLORS = [
    { label: "Magenta", val: "var(--ca-magenta)" },
    { label: "Blue", val: "var(--ca-blue)" },
    { label: "Yellow", val: "var(--ca-yellow)" },
    { label: "Green", val: "var(--ca-green)" },
    { label: "Orange", val: "var(--ca-orange)" },
  ];

  return (
    <div className="ca-playground-page-container ca-grid">
      {/* Short & Clean Header */}
      <div className="ca-playground-header">
        <span className="ca-hand ca-playground-badge-tag">creative lab · physics canvas</span>
        <h1 className="ca-display ca-playground-title">INTERACTIVE PLAYGROUND</h1>
        <p className="ca-hand ca-playground-subtitle">
          Interactive typography canvas with real-time spring physics, blueprint inspection, and tactile feedback.
        </p>
      </div>

      {/* Main Interactive Stage Card */}
      <div className="ca-techtext-stage-card">
        {/* Washi tape accents */}
        <span className="ca-polaroid-tape top-left" style={{ backgroundColor: "var(--ca-yellow)" }} />
        <span className="ca-polaroid-tape top-right" style={{ backgroundColor: "var(--ca-mint)" }} />

        {/* Clean avatar badge */}
        <div className="ca-techtext-avatar-badge" title="Purushotham">
          <img
            src="/purushotham-portrait.jpg"
            alt="Purushotham"
            className="ca-techtext-avatar-img"
          />
        </div>

        {/* Status bar */}
        <div className="ca-techtext-bar ca-mono">
          <span className="ca-techtext-bar-dot" />
          <span>CANVAS: ACTIVE · REAL-TIME SPRING PHYSICS</span>
          <span style={{ marginLeft: "auto", opacity: 0.65 }}>TEXT: {text}</span>
        </div>

        {/* Primary Interactive Canvas */}
        <div key={`main-${animKey}`} className="ca-techtext-main-wrap">
          <TechText
            text={text}
            fontWeight={800}
            fontSize={90}
            reveal="letter"
            dashLength={4}
            dashGap={2}
            specks={12}
            intro="assemble"
            introDuration={1.4}
            clickKick={true}
            guides={true}
            fontFamily=""
            letterSpacing={-0.03}
            color={color}
            accentColor={accentColor}
            reach={200}
            softness={0.7}
            lineStyle="dashed"
            strokeWidth={1.8}
            speed={1}
            bounce={0.4}
            selection
            labels
            align="center"
            draggable={true}
            sweep={true}
          />
        </div>

        {/* Subtitle TechText */}
        {subText && (
          <div key={`sub-${animKey}`} className="ca-techtext-sub-wrap">
            <TechText
              text={subText}
              fontWeight={700}
              fontSize={20}
              reveal="letter"
              dashLength={3}
              dashGap={2}
              specks={8}
              intro="none"
              clickKick={true}
              guides={false}
              fontFamily=""
              letterSpacing={0.12}
              color={color}
              accentColor={accentColor}
              reach={140}
              softness={0.8}
              lineStyle="dashed"
              strokeWidth={1.4}
              speed={0.9}
              bounce={0.35}
              selection
              labels={false}
              align="center"
              draggable={true}
              sweep={false}
            />
          </div>
        )}

        {/* Interaction hints */}
        <div className="ca-techtext-hints ca-mono">
          <span>🖐️ Drag letters to stretch</span>
          <span>⚡ Click to kick up</span>
          <span>🔍 Hover to reveal blueprint</span>
        </div>

        {/* Compact Quick-Controls Toolbar */}
        <div className="ca-playground-compact-toolbar">
          <div className="ca-preset-buttons">
            {PRESETS.map((p) => (
              <button
                key={p.label}
                onClick={() => {
                  setText(p.text);
                  setSubText(p.sub);
                  setAccentColor(p.color);
                  setAnimKey((k) => k + 1);
                }}
                className={`ca-preset-btn ca-mono ${text === p.text ? "active" : ""}`}
              >
                ★ {p.label}
              </button>
            ))}
          </div>

          <div className="ca-compact-right-tools">
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value.toUpperCase())}
              placeholder="TYPE CUSTOM TEXT..."
              className="ca-playground-compact-input ca-mono"
            />
            <div className="ca-color-swatches">
              {ACCENT_COLORS.map((c) => (
                <button
                  key={c.label}
                  onClick={() => setAccentColor(c.val)}
                  className={`ca-swatch ${accentColor === c.val ? "active" : ""}`}
                  style={{ backgroundColor: c.val }}
                  title={c.label}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation CTA */}
      <div className="ca-playground-footer-nav">
        <button
          onClick={() => navigateTo("home")}
          className="ca-hero-cta ca-mono"
        >
          <span className="ca-cta-icon-box">←</span>
          Back to Home
        </button>
        <button
          onClick={() => navigateTo("services")}
          className="ca-hero-cta ca-hero-cta-secondary ca-mono"
        >
          <span className="ca-cta-icon-box">↗</span>
          Explore Services &amp; Stack
        </button>
      </div>
    </div>
  );
}



// 4 Core Skill Badges with alternating animated emojis matching original template
const SKILL_BADGES = [
  {
    id: "web",
    label: "Web Development",
    color: "yellow",
    textColor: "text-dark",
    emojis: ["⚡", "🌐", "💻", "✨", "🚀"],
    image: "/emojis/web-dev.jpg",
  },
  {
    id: "mobile",
    label: "Mobile Apps",
    color: "green",
    textColor: "text-white",
    emojis: ["🧩", "📱", "🛠️", "⚙️", "📲"],
    image: "/emojis/mobile-app.jpg",
  },
  {
    id: "uiux",
    label: "UI/UX Design",
    color: "magenta",
    textColor: "text-white",
    emojis: ["🎨", "💡", "📐", "🔍", "✨"],
    image: "/emojis/uiux-design.jpg",
  },
  {
    id: "branding",
    label: "Brand Identity",
    color: "blue",
    textColor: "text-dark",
    emojis: ["✒️", "🎨", "🏷️", "👑", "🎯"],
    image: "/emojis/brand-identity.jpg",
  },
];

// =========================================================
// SECTION 02: WHAT I DO (Services & Capabilities)
// =========================================================
function WhatIDoSection() {
  const [expandedCards, setExpandedCards] = useState({});
  const [highlightedCard, setHighlightedCard] = useState(null);
  const [visibleRows, setVisibleRows] = useState({});

  const servicesList = [
    {
      id: "web",
      num: "01",
      title: "Web Development",
      tag: "Responsive & Full-Stack",
      desc: "I build modern, responsive websites and web applications designed around business goals, user needs, and performance.",
      services: ["Business Websites", "Portfolio Websites", "Landing Pages", "Full-Stack Applications", "API Integration"],
      tech: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js", "PHP", "Laravel", "MySQL", "Node.js"],
      icon: "🌐",
      borderClass: "border-blue",
      tagColor: "var(--ca-blue)",
    },
    {
      id: "mobile",
      num: "02",
      title: "Mobile App Development",
      tag: "iOS & Android",
      desc: "I develop modern mobile applications with intuitive interfaces, smooth navigation, and scalable architecture for Android and iOS.",
      services: ["Mobile UI Development", "API Integration", "Authentication", "App Architecture", "Firebase Integration"],
      tech: ["Flutter", "Dart", "Firebase", "REST APIs", "Flutter BLoC", "Clean Architecture"],
      icon: "📱",
      borderClass: "border-green",
      tagColor: "var(--ca-green)",
    },
    {
      id: "uiux",
      num: "03",
      title: "UI/UX Design",
      tag: "User-Centered Interfaces",
      desc: "I create user-centered digital interfaces that combine visual consistency, simple navigation, and meaningful interactions.",
      services: ["Wireframing", "Prototyping", "Mobile App Design", "Website Design", "Design Systems", "Responsive Layouts"],
      tech: ["Figma", "Design Tokens", "Wireframes", "Interactive Prototypes"],
      icon: "💡",
      borderClass: "border-yellow",
      tagColor: "var(--ca-yellow)",
    },
    {
      id: "branding",
      num: "04",
      title: "Logo Design & Brand Identity",
      tag: "Distinctive Visuals",
      desc: "I help businesses establish distinctive visual identities through thoughtful logo design, typography, color systems, and cohesive branding.",
      services: ["Logo Design", "Brand Identity", "Color Palettes", "Typography", "Marketing Creatives"],
      tech: ["Brand Systems", "Vector Assets", "Typography", "Color Palettes"],
      icon: "🎨",
      borderClass: "border-magenta",
      tagColor: "var(--ca-magenta)",
    },
    {
      id: "fullstack",
      num: "05",
      title: "Full-Stack Solutions",
      tag: "End-to-End Systems",
      desc: "I connect frontend interfaces, backend systems, databases, and APIs to build complete, functional digital products.",
      services: ["Database Architecture", "REST API Development", "Authentication", "System Integration"],
      tech: ["React.js", "Next.js", "Node.js", "PHP", "Laravel", "MySQL", "REST APIs"],
      icon: "⚙️",
      borderClass: "border-blue",
      tagColor: "var(--ca-purple)",
    },
    {
      id: "optimization",
      num: "06",
      title: "Website Optimization",
      tag: "Speed & Usability",
      desc: "I focus on improving website responsiveness, loading performance, usability, accessibility, and code maintainability.",
      services: ["Responsive Behavior", "Speed Audits", "Accessibility (a11y)", "Code Maintainability"],
      tech: ["Performance Optimization", "SEO Best Practices", "Clean Architecture"],
      icon: "⚡",
      borderClass: "border-yellow",
      tagColor: "var(--ca-mint)",
    },
  ];

  // Scroll-driven 2-by-2 reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rowIndex = entry.target.getAttribute("data-row-index");
            if (rowIndex !== null) {
              setVisibleRows((prev) => ({ ...prev, [rowIndex]: true }));
            }
          }
        });
      },
      { threshold: 0.15 }
    );

    const rows = document.querySelectorAll(".ca-services-scroll-row");
    rows.forEach((row) => observer.observe(row));

    return () => observer.disconnect();
  }, []);

  const toggleCard = (id) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleAll = () => {
    const allOpen = servicesList.every((p) => expandedCards[p.id]);
    const next = {};
    servicesList.forEach((p) => {
      next[p.id] = !allOpen;
    });
    setExpandedCards(next);
  };

  // Group services into pairs of 2 for side-by-side scrolling reveal
  const pairs = [];
  for (let i = 0; i < servicesList.length; i += 2) {
    pairs.push(servicesList.slice(i, i + 2));
  }

  return (
    <section id="services" className="ca-section-block ca-grid">
      <div id="universe" style={{ position: "relative", top: "-80px" }} />
      <div className="ca-section-inner-wide">
        <div className="ca-section-header-center">
          <span className="ca-postage-stamp stamp-yellow rot-neg2">
            02 · WHAT I DO
          </span>
          <h2 className="ca-section-headline">
            Different Skills. One Creative Vision.
          </h2>
          <svg viewBox="0 0 64 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="ca-wavy-line" style={{ margin: "0.2rem auto 0.75rem" }} aria-hidden="true">
            <path d="M3 4c18-3 40-3 58 0" />
            <path d="M9 9c14-2.5 32-2.5 46 0" />
          </svg>
          <p className="ca-section-lead-desc">
            I work across multiple areas of digital creation, bringing design, development, and strategy together to build complete digital experiences.
          </p>
        </div>

        {/* Top File Tab Directory showing all 6 tile names */}
        <div className="ca-whatido-file-bar">
          <div className="ca-whatido-file-header-label ca-mono">
            <span>INDEX / 06 CAPABILITIES:</span>
          </div>
          <div className="ca-whatido-file-tabs">
            {servicesList.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  const el = document.getElementById(`service-card-${p.id}`);
                  el?.scrollIntoView({ behavior: "smooth", block: "center" });
                  setHighlightedCard(p.id);
                  setTimeout(() => setHighlightedCard(null), 2000);
                }}
                className={`ca-file-tab ca-mono ${highlightedCard === p.id ? "active" : ""}`}
              >
                <span className="ca-file-tab-num">{p.num}</span>
                <span className="ca-file-tab-icon">{p.icon}</span>
                <span className="ca-file-tab-title">{p.title}</span>
              </button>
            ))}
          </div>
          <div className="ca-whatido-file-actions">
            <button
              onClick={toggleAll}
              className="ca-expand-all-btn ca-mono"
            >
              {servicesList.every((p) => expandedCards[p.id]) ? "Collapse All ▴" : "Expand All ▾"}
            </button>
          </div>
        </div>

        {/* 2-by-2 Side-by-Side Smooth Scrolling Reveal Container */}
        <div className="ca-services-scroll-container">
          {pairs.map((pair, rowIndex) => {
            const isRevealed = visibleRows[rowIndex];
            return (
              <div
                key={rowIndex}
                data-row-index={rowIndex}
                className={`ca-services-scroll-row ${isRevealed ? "is-revealed" : ""}`}
              >
                {pair.map((p, colIndex) => {
                  const isExpanded = Boolean(expandedCards[p.id]);
                  const isHighlighted = highlightedCard === p.id;
                  return (
                    <div
                      key={p.id}
                      id={`service-card-${p.id}`}
                      className={`ca-universe-card ${p.borderClass} ${isHighlighted ? "highlighted-pulse" : ""}`}
                      style={{
                        transitionDelay: `${colIndex * 120}ms`,
                      }}
                    >
                      <div className="ca-service-card-top">
                        <div className="ca-service-card-header-row">
                          <div className="ca-universe-icon-badge" style={{ backgroundColor: "var(--ca-surface)" }}>
                            <span>{p.icon}</span>
                          </div>
                          <span className="ca-universe-tag ca-mono" style={{ backgroundColor: p.tagColor, color: (p.id === "uiux" || p.id === "optimization") ? "var(--ca-ink)" : "#ffffff" }}>
                            {p.tag}
                          </span>
                          <span className="ca-service-num-badge ca-mono">
                            #{p.num}
                          </span>
                        </div>

                        <h3 className="ca-universe-card-title">{p.title}</h3>
                        <p className="ca-universe-card-desc">{p.desc}</p>
                      </div>

                      {/* Dropdown Toggle Arrow Button */}
                      <button
                        type="button"
                        onClick={() => toggleCard(p.id)}
                        className={`ca-service-dropdown-trigger ca-mono ${isExpanded ? "active" : ""}`}
                        aria-expanded={isExpanded}
                      >
                        <span className="ca-dropdown-btn-label">
                          {isExpanded ? "Hide Deliverables & Tools" : "View Deliverables & Tools"}
                        </span>
                        <span className="ca-dropdown-arrow-icon" style={{ transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)" }}>
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" style={{ width: "1.1rem", height: "1.1rem" }}>
                            <path d="M6 9l6 6 6-6" />
                          </svg>
                        </span>
                      </button>

                      {/* Collapsible Services & Technologies Panel */}
                      {isExpanded && (
                        <div className="ca-service-collapsible-panel">
                          <div className="ca-service-sublist">
                            <div className="ca-service-subtitle">
                              <span>✓ Services &amp; Deliverables</span>
                            </div>
                            <div className="ca-service-pill-row">
                              {p.services.map((s) => (
                                <span key={s} className="ca-service-mini-pill">
                                  <span style={{ color: "var(--ca-green)", marginRight: "4px" }}>✓</span>
                                  {s}
                                </span>
                              ))}
                            </div>

                            <div className="ca-service-subtitle" style={{ marginTop: "0.6rem" }}>
                              <span>⚡ Core Technologies</span>
                            </div>
                            <div className="ca-service-pill-row">
                              {p.tech.map((t) => (
                                <span key={t} className="ca-tech-pill" style={{ fontSize: "0.74rem", padding: "0.2rem 0.55rem", backgroundColor: "var(--ca-surface)" }}>
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Backward-compatible alias
const DigitalUniverseSection = WhatIDoSection;

// =========================================================
// SECTION 03: TECHNICAL SKILLS
// =========================================================
function TechStackSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeTool, setActiveTool] = useState(null);

  const stackCategories = [
    {
      id: "frontend",
      category: "Frontend Development",
      tools: ["HTML5", "CSS3", "JavaScript", "React.js", "Next.js"],
      icon: "⚡",
      badgeColor: "var(--ca-yellow)",
      codeSnippet: "const UI = () => <InteractiveApp performance='60fps' responsive />;",
      actionLog: "React & Next.js components rendering with pixel-perfect design.",
    },
    {
      id: "backend",
      category: "Backend Development",
      tools: ["Node.js", "PHP", "Laravel", "REST APIs"],
      icon: "⚙️",
      badgeColor: "var(--ca-mint)",
      codeSnippet: "app.get('/api/projects', async (req, res) => res.json({ status: 200 }));",
      actionLog: "REST APIs & backend routes connected with secure database queries.",
    },
    {
      id: "mobile",
      category: "Mobile Development",
      tools: ["Flutter", "Dart", "Firebase", "Flutter BLoC"],
      icon: "📱",
      badgeColor: "var(--ca-cyan)",
      codeSnippet: "class AppState extends Bloc<AppEvent, AppLoaded> { ... }",
      actionLog: "Cross-platform mobile bundle syncing for Android & iOS.",
    },
    {
      id: "database",
      category: "Database",
      tools: ["MySQL", "Firebase DB"],
      icon: "🗄️",
      badgeColor: "var(--ca-purple)",
      codeSnippet: "SELECT * FROM projects WHERE status = 'LIVE' ORDER BY created_at DESC;",
      actionLog: "Optimized relational database schema and cached queries.",
    },
    {
      id: "design",
      category: "UI/UX & Creative Design",
      tools: ["Figma", "Wireframing", "Prototyping", "Responsive Design", "Logo Design", "Brand Identity"],
      icon: "🎨",
      badgeColor: "var(--ca-magenta)",
      codeSnippet: "figma.syncTokens({ colorPalette: 'artsy', typography: 'curated' });",
      actionLog: "User-centered design systems, responsive wireframes & visual branding.",
    },
    {
      id: "tools",
      category: "Development Tools",
      tools: ["Git", "GitHub", "VS Code", "Vite", "Terminal"],
      icon: "🚀",
      badgeColor: "var(--ca-chrome)",
      codeSnippet: "git commit -m 'feat: ship modern digital experience' && git push",
      actionLog: "Version control workflows, hot reload dev environments & CI/CD pipeline.",
    },
  ];

  const currentCat = activeCategory === "all"
    ? stackCategories[0]
    : stackCategories.find((c) => c.id === activeCategory) || stackCategories[0];

  return (
    <section id="skills" className="ca-section-block ca-grid">
      <div id="stack" style={{ position: "relative", top: "-80px" }} />
      <div className="ca-section-inner-wide">
        <div className="ca-section-header-center">
          <span className="ca-postage-stamp stamp-yellow rot-pos2">
            03 · TECHNICAL SKILLS
          </span>
          <h2 className="ca-section-headline">
            The Tools Behind My Work.
          </h2>
          <svg viewBox="0 0 64 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="ca-wavy-line" style={{ margin: "0.2rem auto 0.75rem" }} aria-hidden="true">
            <path d="M3 4c18-3 40-3 58 0" />
            <path d="M9 9c14-2.5 32-2.5 46 0" />
          </svg>
          <p className="ca-section-lead-desc">
            I choose technologies based on the needs of the project, with an emphasis on maintainable code, usability, and scalable development.
          </p>
        </div>

        {/* Paper Sketch + Animated Working Workbench Layout */}
        <div className="ca-tech-paper-layout">
          {/* LEFT: Ink Sketch of Purushotham Directly on Paper (No Card, blend mode multiply) */}
          <div className="ca-sketch-paper-column">
            <div className="ca-sketch-figure-wrapper">
              {/* Hand-drawn side arrow pointing to Purushotham */}
              <div className="ca-sketch-side-arrow-group" aria-hidden="true">
                <svg viewBox="0 0 70 45" fill="none" stroke="var(--ca-ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ca-sketch-arrow-svg">
                  <path d="M62 6 C 45 22, 28 26, 8 20" />
                  <path d="M18 32 L 6 20 L 19 10" />
                </svg>
                <span className="ca-hand ca-sketch-arrow-note">
                  crafting code &amp; design! ✨
                </span>
              </div>

              {/* Ink sketch illustration directly on the paper */}
              <img
                src="/purushotham-sketch.jpg"
                alt="Purushotham ink sketch"
                className="ca-sketch-paper-img ca-pop-in-img ca-delay-2"
              />

              {/* Hand-written paper label */}
              <div className="ca-sketch-paper-label">
                <span className="ca-hand" style={{ fontSize: "1.25rem", color: "var(--ca-ink)" }}>Purushotham</span>
                <span className="ca-mono" style={{ fontSize: "0.72rem", opacity: 0.75, display: "block" }}>
                  FULL-STACK · MOBILE · UI/UX
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Live Animated Working Terminal & Interactive Tools */}
          <div className="ca-tech-workbench-column">
            {/* Live Animated Working Workbench */}
            <div className="ca-live-terminal-card ca-pop-in ca-delay-2">
              <div className="ca-terminal-topbar">
                <div className="ca-terminal-dots">
                  <span className="dot red" />
                  <span className="dot yellow" />
                  <span className="dot green" />
                </div>
                <span className="ca-terminal-title ca-mono">
                  purushotham@workstation: ~/digital-products
                </span>
                <span className="ca-live-status-pill ca-mono">
                  <span className="ca-live-pulse-dot" /> LIVE WORKING
                </span>
              </div>

              <div className="ca-terminal-screen ca-mono">
                <div className="ca-term-line prompt">
                  <span className="ca-term-prefix">$</span>
                  <span className="ca-term-cmd">
                    purushotham.build({`{ stack: "${currentCat.category}" }`})
                  </span>
                </div>
                <div className="ca-term-line code">
                  <span className="ca-term-code-icon">⚡</span>
                  <code>{currentCat.codeSnippet}</code>
                </div>
                <div className="ca-term-line output">
                  <span className="ca-term-success">✓</span>
                  <span>{currentCat.actionLog}</span>
                </div>
                <div className="ca-term-line metrics">
                  <span>▸ Status: COMPILING &amp; SHIPPING</span>
                  <span style={{ marginLeft: "auto", color: "var(--ca-green)" }}>60 FPS · 0 ERRORS</span>
                  <span className="ca-term-cursor">_</span>
                </div>
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="ca-tech-cat-pills-bar">
              <button
                onClick={() => setActiveCategory("all")}
                className={`ca-cat-pill-btn ca-mono ${activeCategory === "all" ? "active" : ""}`}
              >
                ★ All Categories
              </button>
              {stackCategories.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(c.id)}
                  className={`ca-cat-pill-btn ca-mono ${activeCategory === c.id ? "active" : ""}`}
                >
                  <span>{c.icon}</span>
                  <span>{c.category}</span>
                </button>
              ))}
            </div>

            {/* Categorized Technical Tool Cards with Hover Micro-Animations */}
            <div className="ca-tech-categories-stack">
              {stackCategories
                .filter((cat) => activeCategory === "all" || activeCategory === cat.id)
                .map((cat) => (
                  <div key={cat.category} className="ca-tech-category-card">
                    <div className="ca-tech-cat-header">
                      <span className="ca-tech-cat-title">{cat.category}</span>
                      <span style={{ fontSize: "1.3rem" }}>{cat.icon}</span>
                    </div>
                    <div className="ca-tech-pills">
                      {cat.tools.map((t) => (
                        <span
                          key={t}
                          onMouseEnter={() => setActiveTool(t)}
                          onMouseLeave={() => setActiveTool(null)}
                          className={`ca-tech-pill ${activeTool === t ? "is-hovered" : ""}`}
                          style={{
                            backgroundColor: cat.badgeColor,
                          }}
                        >
                          <span className="ca-tech-pill-dot" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================
// SECTION 04: FEATURED PROJECTS (Currently Building)
// =========================================================
function CurrentlyBuildingSection() {
  const activeProjects = [
    {
      id: "invitestory",
      num: "01",
      title: "InviteStory",
      subtitle: "Digital Invitation & Event Platform",
      badge: "IN PROGRESS",
      badgeColor: "var(--ca-yellow)",
      pitch: "A digital invitation platform in development, designed to make event invitations easier to create, share, and manage. The concept focuses on bringing invitations and guest experiences into one convenient digital platform.",
      focus: [
        "Digital invitation experiences.",
        "Event and guest management.",
        "Modern invitation interfaces.",
        "Digital sharing and user-friendly workflows."
      ],
      category: "Web Development · UI/UX Design · Digital Products",
      tags: ["Event Tech", "Dynamic RSVPs", "Web App"],
      borderClass: "border-yellow",
    },
    {
      id: "portfolio",
      num: "02",
      title: "Personal Portfolio",
      subtitle: "Personal Branding & Developer Portfolio",
      badge: "IN PROGRESS",
      badgeColor: "var(--ca-magenta)",
      pitch: "A personal portfolio project focused on presenting my skills, technical experience, creative work, and development journey through a modern digital experience. The website is being developed to communicate my expertise, showcase projects, and provide a professional way for clients and collaborators to connect with me.",
      focus: [
        "Modern portfolio design.",
        "Responsive website development.",
        "Skills and project presentation.",
        "Personal branding and contact experience."
      ],
      category: "Web Development · UI/UX Design · Personal Branding",
      tags: ["Creative Artsy", "React + Vite", "Branding"],
      borderClass: "border-magenta",
    },
    {
      id: "drexxstudio",
      num: "03",
      title: "DrexxStudio",
      subtitle: "Fashion & Creative Digital Experience",
      badge: "IN PROGRESS",
      badgeColor: "var(--ca-blue)",
      pitch: "A fashion-focused website project exploring how modern design and digital presentation can create a visually engaging browsing experience. The project emphasizes a strong visual identity, organized layouts, responsive interfaces, and a polished presentation of fashion-related content.",
      focus: [
        "Fashion-focused website design.",
        "Visual presentation and creative layouts.",
        "Responsive user interfaces.",
        "Branding and digital experience."
      ],
      category: "Web Development · UI/UX Design · Creative Branding",
      tags: ["Fashion Tech", "Lookbook UI", "Editorial"],
      borderClass: "border-blue",
    },
  ];

  return (
    <section id="currently-building" className="ca-section-block ca-grid">
      <div className="ca-section-inner-wide">
        <div className="ca-section-header-center">
          <span className="ca-postage-stamp stamp-magenta rot-pos2">
            04 · FEATURED PROJECTS
          </span>
          <h2 className="ca-section-headline">
            Building What's Next.
          </h2>
          <svg viewBox="0 0 64 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="ca-wavy-line" style={{ margin: "0.2rem auto 0.75rem" }} aria-hidden="true">
            <path d="M3 4c18-3 40-3 58 0" />
            <path d="M9 9c14-2.5 32-2.5 46 0" />
          </svg>
          <p className="ca-section-lead-desc">
            I'm currently developing digital products and creative experiences that combine technology, design, and practical functionality. These projects are ongoing, with features and interfaces evolving throughout development.
          </p>
        </div>

        <div className="ca-building-grid">
          {activeProjects.map((proj, idx) => (
            <div key={proj.id} className={`ca-building-card ca-pop-in ${proj.borderClass}`} style={{ textAlign: "left", animationDelay: `${idx * 120 + 100}ms` }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                <span className="ca-building-tape-badge" style={{ backgroundColor: proj.badgeColor, color: proj.id === "invitestory" ? "var(--ca-ink)" : "#ffffff" }}>
                  ✦ {proj.badge}
                </span>
                <span className="ca-mono" style={{ fontSize: "0.85rem", fontWeight: "800", opacity: 0.7 }}>
                  PROJECT {proj.num}
                </span>
              </div>
              <h3 className="ca-building-title" style={{ marginBottom: "0.2rem" }}>{proj.title}</h3>
              <p className="ca-mono" style={{ fontSize: "0.85rem", fontWeight: "700", color: "var(--ca-blue)", marginBottom: "0.75rem" }}>
                {proj.subtitle}
              </p>
              <p className="ca-building-desc">{proj.pitch}</p>

              <div style={{ margin: "1rem 0 0.85rem", padding: "0.75rem 0.85rem", background: "rgba(25, 21, 16, 0.03)", border: "1.5px dashed rgba(25, 21, 16, 0.2)", borderRadius: "6px" }}>
                <span className="ca-mono" style={{ fontSize: "0.75rem", fontWeight: "800", textTransform: "uppercase", display: "block", marginBottom: "0.35rem", color: "var(--ca-ink)" }}>
                  Project Focus:
                </span>
                <ul style={{ margin: 0, paddingLeft: "1.2rem", fontSize: "0.85rem", lineHeight: 1.55 }}>
                  {proj.focus.map((f, i) => (
                    <li key={i} style={{ marginBottom: "0.25rem" }}>{f}</li>
                  ))}
                </ul>
              </div>

              <div className="ca-mono" style={{ fontSize: "0.75rem", color: "rgba(25, 21, 16, 0.75)", marginBottom: "0.75rem" }}>
                <strong>Category:</strong> {proj.category}
              </div>

              <div className="ca-building-chips">
                {proj.tags.map((t) => (
                  <span key={t} className="ca-building-chip">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="ca-hand" style={{ textAlign: "center", fontSize: "1.35rem", marginTop: "2rem", color: "var(--ca-ink)", opacity: 0.85 }}>
          Note: Project descriptions represent their current concepts and goals. Features should be updated as development progresses. 🚀
        </p>
      </div>
    </section>
  );
}

// =========================================================
// SECTION 05: MY DEVELOPMENT PROCESS
// =========================================================
function BehindTheBuildSection() {
  const steps = [
    {
      num: "01",
      name: "Discover",
      color: "var(--ca-purple)",
      desc: "Understand the idea, audience, requirements, and business objectives.",
      icon: "🔍",
    },
    {
      num: "02",
      name: "Plan",
      color: "var(--ca-yellow)",
      desc: "Define features, technology choices, user flows, and the project structure.",
      icon: "📐",
    },
    {
      num: "03",
      name: "Design",
      color: "var(--ca-blue)",
      desc: "Create wireframes, visual concepts, responsive layouts, and user experiences.",
      icon: "🎨",
    },
    {
      num: "04",
      name: "Develop",
      color: "var(--ca-magenta)",
      desc: "Build the frontend, backend, mobile interfaces, database integrations, and required functionality.",
      icon: "💻",
    },
    {
      num: "05",
      name: "Test & Refine",
      color: "var(--ca-mint)",
      desc: "Check usability, responsiveness, functionality, and performance while refining the experience.",
      icon: "✨",
    },
    {
      num: "06",
      name: "Launch & Improve",
      color: "var(--ca-chrome)",
      desc: "Prepare the product for release and continue improving it based on real-world needs and feedback.",
      icon: "🚀",
    },
  ];

  return (
    <section id="process" className="ca-section-block ca-grid">
      <div className="ca-section-inner-wide">
        <div className="ca-section-header-center">
          <span className="ca-postage-stamp stamp-blue rot-neg1">
            05 · MY DEVELOPMENT PROCESS
          </span>
          <h2 className="ca-section-headline">
            From Idea to Digital Product.
          </h2>
          <svg viewBox="0 0 64 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="ca-wavy-line" style={{ margin: "0.2rem auto 0.75rem" }} aria-hidden="true">
            <path d="M3 4c18-3 40-3 58 0" />
            <path d="M9 9c14-2.5 32-2.5 46 0" />
          </svg>
          <p className="ca-section-lead-desc">
            How I bring ideas to life — from initial concept and research to architectural design, high-quality development, and ongoing refinement.
          </p>
        </div>

        <div className="ca-process-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {steps.map((st, idx) => (
            <div key={st.num} className="ca-process-step-card ca-pop-in" style={{ animationDelay: `${idx * 80 + 100}ms` }}>
              <div className="ca-process-step-header">
                <span className="ca-process-step-num" style={{ backgroundColor: st.color, color: (st.num === "02" || st.num === "05" || st.num === "01") ? "var(--ca-ink)" : "#ffffff" }}>
                  STEP {st.num}
                </span>
                <span style={{ fontSize: "1.25rem" }}>{st.icon}</span>
              </div>
              <h3 className="ca-process-step-title">{st.name}</h3>
              <p className="ca-process-step-desc">{st.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================
// SECTION 06 & 07: EDUCATION & LANGUAGES
// =========================================================
function EducationAndLanguagesSection() {
  return (
    <section id="education" className="ca-section-block ca-grid">
      <div className="ca-section-inner-wide">
        <div className="ca-section-header-center">
          <span className="ca-postage-stamp stamp-yellow rot-pos1">
            06 &amp; 07 · EDUCATION &amp; LANGUAGES
          </span>
          <h2 className="ca-section-headline">
            Academic Foundation &amp; Communication.
          </h2>
          <svg viewBox="0 0 64 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="ca-wavy-line" style={{ margin: "0.2rem auto 0.75rem" }} aria-hidden="true">
            <path d="M3 4c18-3 40-3 58 0" />
            <path d="M9 9c14-2.5 32-2.5 46 0" />
          </svg>
        </div>

        <div className="ca-edu-lang-grid">
          {/* Education Card */}
          <div className="ca-edu-card">
            <span className="ca-polaroid-tape top-left" style={{ backgroundColor: "var(--ca-yellow)" }} />
            <span className="ca-polaroid-tape top-right" style={{ backgroundColor: "var(--ca-mint)" }} />
            <div className="ca-mono" style={{ fontSize: "0.8rem", fontWeight: "800", textTransform: "uppercase", color: "var(--ca-blue)", marginBottom: "0.5rem" }}>
              🎓 06 · EDUCATION
            </div>
            <h3 className="ca-edu-degree">Bachelor of Technology (B.Tech)</h3>
            <p className="ca-edu-major">Computer Science and Engineering</p>
            <span className="ca-edu-years">2020 – 2024</span>
            <p className="ca-edu-desc">
              My academic background supports my interest in software development, problem-solving, technology, and building practical digital solutions.
            </p>
          </div>

          {/* Languages Card */}
          <div className="ca-lang-card">
            <span className="ca-polaroid-tape top-left" style={{ backgroundColor: "var(--ca-purple)" }} />
            <span className="ca-polaroid-tape top-right" style={{ backgroundColor: "var(--ca-pink-soft)" }} />
            <div className="ca-mono" style={{ fontSize: "0.8rem", fontWeight: "800", textTransform: "uppercase", color: "var(--ca-magenta)", marginBottom: "0.5rem" }}>
              🗣️ 07 · LANGUAGES
            </div>
            <h3 className="ca-lang-title">Languages Spoken</h3>
            <div className="ca-lang-list">
              <div className="ca-lang-item">
                <span className="ca-lang-name">English</span>
                <span className="ca-lang-level">Professional / Fluent</span>
              </div>
              <div className="ca-lang-item">
                <span className="ca-lang-name">Telugu</span>
                <span className="ca-lang-level" style={{ backgroundColor: "var(--ca-yellow)" }}>Native / Fluent</span>
              </div>
              <div className="ca-lang-item">
                <span className="ca-lang-name">Tamil</span>
                <span className="ca-lang-level" style={{ backgroundColor: "var(--ca-purple)", color: "#fff" }}>Fluent / Conversational</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =========================================================
// SECTION 06: WHAT MAKES MY WORK DIFFERENT?
// =========================================================
function WorkDifferentSection() {
  const differentiators = [
    {
      title: "Design Meets Functionality",
      desc: "I aim to balance visual quality with practical functionality.",
      icon: "⚖️",
    },
    {
      title: "User-First Thinking",
      desc: "I consider how people navigate, understand, and use a digital product.",
      icon: "🧭",
    },
    {
      title: "End-to-End Perspective",
      desc: "I connect interface design, development, integrations, and product requirements.",
      icon: "🔄",
    },
    {
      title: "Continuous Improvement",
      desc: "I keep learning, experimenting, and refining my approach as technologies evolve.",
      icon: "📈",
    },
    {
      title: "Attention to Detail",
      desc: "From spacing and typography to responsive behavior, I value the small details that shape the overall experience.",
      icon: "🔍",
    },
  ];

  return (
    <section id="difference" className="ca-section-block ca-grid">
      <div className="ca-section-inner-wide">
        <div className="ca-section-header-center">
          <span className="ca-postage-stamp stamp-magenta rot-neg1">
            06 · WHAT MAKES MY WORK DIFFERENT?
          </span>
          <h2 className="ca-section-headline">
            Built With Purpose. Designed With Care.
          </h2>
          <svg viewBox="0 0 64 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="ca-wavy-line" style={{ margin: "0.2rem auto 0.75rem" }} aria-hidden="true">
            <path d="M3 4c18-3 40-3 58 0" />
            <path d="M9 9c14-2.5 32-2.5 46 0" />
          </svg>
        </div>

        <div className="ca-diff-grid">
          {differentiators.map((d, idx) => (
            <div key={d.title} className="ca-diff-card ca-pop-in" style={{ animationDelay: `${idx * 80 + 100}ms` }}>
              <span style={{ fontSize: "1.5rem", display: "inline-block", marginBottom: "0.5rem" }}>
                {d.icon}
              </span>
              <h3 className="ca-diff-title">{d.title}</h3>
              <p className="ca-diff-desc">{d.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================
// SECTION 07: BEYOND THE SCREEN
// =========================================================
function BeyondTheScreenSection() {
  const curiosities = [
    {
      title: "AI & Emerging Technology",
      desc: "Exploring how AI can simplify workflows and accelerate product development.",
      icon: "🤖",
    },
    {
      title: "Creative Experiments",
      desc: "Testing layouts, animations, visual styles, and new interface ideas.",
      icon: "🎨",
    },
    {
      title: "Product Thinking",
      desc: "Understanding how digital products can solve practical problems for people and businesses.",
      icon: "💡",
    },
    {
      title: "Learning by Building",
      desc: "Turning new ideas and technologies into hands-on experiments and projects.",
      icon: "🔨",
    },
  ];

  return (
    <section id="beyond" className="ca-section-block ca-grid">
      <div className="ca-section-inner-wide">
        <div className="ca-section-header-center">
          <span className="ca-postage-stamp stamp-blue rot-pos2">
            07 · BEYOND THE SCREEN
          </span>
          <h2 className="ca-section-headline">
            Curiosity Fuels Creativity.
          </h2>
          <svg viewBox="0 0 64 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="ca-wavy-line" style={{ margin: "0.2rem auto 0.75rem" }} aria-hidden="true">
            <path d="M3 4c18-3 40-3 58 0" />
            <path d="M9 9c14-2.5 32-2.5 46 0" />
          </svg>
          <p className="ca-section-lead-desc">
            My interests extend beyond writing code. I enjoy exploring AI tools, discovering new technologies, experimenting with design ideas, and finding creative ways to solve problems.
          </p>
        </div>

        <div className="ca-beyond-grid">
          {curiosities.map((item) => (
            <div key={item.title} className="ca-beyond-card">
              <span style={{ fontSize: "1.6rem", display: "inline-block", marginBottom: "0.5rem" }}>
                {item.icon}
              </span>
              <h3 className="ca-beyond-title">{item.title}</h3>
              <p className="ca-beyond-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================
// SECTION 08: MY CREATIVE PRINCIPLES
// =========================================================
function CreativePrinciplesSection() {
  const principles = [
    {
      title: "Clarity over Complexity",
      desc: "Keep experiences understandable and easy to use.",
      colorClass: "yellow",
      tag: "01",
    },
    {
      title: "Purpose over Decoration",
      desc: "Every design element should contribute to the experience.",
      colorClass: "pink",
      tag: "02",
    },
    {
      title: "Quality over Shortcuts",
      desc: "Build thoughtfully, test carefully, and improve continuously.",
      colorClass: "mint",
      tag: "03",
    },
    {
      title: "Progress over Perfection",
      desc: "Learn from each iteration and make every version better.",
      colorClass: "purple",
      tag: "04",
    },
  ];

  return (
    <section id="principles" className="ca-section-block ca-grid">
      <div className="ca-section-inner-wide">
        <div className="ca-section-header-center">
          <span className="ca-postage-stamp stamp-yellow rot-neg2">
            08 · MY CREATIVE PRINCIPLES
          </span>
          <h2 className="ca-section-headline">
            The Principles Behind Every Project.
          </h2>
          <svg viewBox="0 0 64 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="ca-wavy-line" style={{ margin: "0.2rem auto 0.75rem" }} aria-hidden="true">
            <path d="M3 4c18-3 40-3 58 0" />
            <path d="M9 9c14-2.5 32-2.5 46 0" />
          </svg>
        </div>

        <div className="ca-principles-grid">
          {principles.map((pr) => (
            <div key={pr.title} className={`ca-principle-sticky ${pr.colorClass}`}>
              <span className="ca-mono" style={{ fontSize: "0.75rem", fontWeight: "bold", opacity: 0.6, display: "block", marginBottom: "0.35rem" }}>
                RULE {pr.tag}
              </span>
              <h3 className="ca-principle-sticky-title">{pr.title}</h3>
              <p className="ca-principle-sticky-desc">{pr.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================================================
// SECTION 10: FINAL SIGN-OFF
// =========================================================
function FinalSignoffSection() {
  return (
    <div className="ca-signoff-card">
      <span className="ca-polaroid-tape-yellow-tr" style={{ right: "20px", top: "-14px" }} />
      <span className="ca-polaroid-tape-cyan-tl" style={{ left: "20px", top: "-14px" }} />
      <div className="ca-mono" style={{ fontSize: "0.8rem", fontWeight: "800", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--ca-blue)", marginBottom: "0.75rem" }}>
        ✦ 10 · FINAL SIGN-OFF ✦
      </div>
      <h2 className="ca-signoff-motto">
        Code With Purpose. Design With Meaning. Build Without Limits.
      </h2>
      <p className="ca-signoff-body">
        Every project is an opportunity to learn something new, solve a problem, and create an experience worth remembering. Thanks for being part of my journey.
      </p>
      <div className="ca-signoff-author">
        <span>✨</span>
        <span>Purushotham — Developer, Designer &amp; Digital Creator</span>
      </div>
    </div>
  );
}

// =========================================================
// SERVICES & STACK VIEW (Dedicated Bento Grid Page)
// =========================================================
function ServicesView({ navigateTo }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [animKey, setAnimKey] = useState(0);

  const filterCards = (cat) => {
    setActiveFilter(cat);
    setAnimKey((k) => k + 1);
  };

  const bentoItems = [
    {
      id: "web",
      category: "web",
      title: "Web & Full-Stack Engineering",
      tag: "CORE CRAFT · WEB",
      image: "/emojis/web-dev.jpg",
      borderColor: "border-yellow",
      span: "ca-bento-span-2",
      badgeBg: "var(--ca-yellow)",
      badgeColor: "var(--ca-ink)",
      desc: "Modern, high-performance web applications built with clean architecture, fast loading times, and production-grade reliability. Seamlessly bridging responsive design and robust logic.",
      deliverables: [
        "Single-Page & Jamstack Apps",
        "Next.js SSR & Static Builds",
        "Reusable Component Systems",
        "REST API & Backend Integration",
        "Sub-second Page Load & SEO",
      ],
      chips: [
        { name: "React.js", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "JavaScript (ES6+)", icon: "💛" },
        { name: "HTML5 & CSS3", icon: "🎨" },
        { name: "Tailwind / SASS", icon: "💎" },
        { name: "Vite", icon: "⚡" },
        { name: "State Mgmt", icon: "🔄" },
      ],
      highlight: "Compiling 60fps responsive interfaces across all viewport sizes.",
    },
    {
      id: "mobile",
      category: "mobile",
      title: "Mobile App Development",
      tag: "CROSS-PLATFORM",
      image: "/emojis/mobile-app.jpg",
      borderColor: "border-blue",
      span: "",
      badgeBg: "var(--ca-blue)",
      badgeColor: "#ffffff",
      desc: "Fluid, native-quality cross-platform applications for iOS and Android with clean state management, smooth animations, and offline-first capabilities.",
      deliverables: [
        "Cross-Platform iOS & Android",
        "Reactive BLoC Architecture",
        "Offline Caching & Cloud Sync",
        "App Store & Play Store Ready",
      ],
      chips: [
        { name: "Flutter", icon: "💙" },
        { name: "Dart", icon: "🎯" },
        { name: "Flutter BLoC", icon: "🧱" },
        { name: "Firebase", icon: "🔥" },
        { name: "REST Integration", icon: "🔌" },
      ],
      highlight: "Single codebase shipping native performance to iOS & Android.",
    },
    {
      id: "backend",
      category: "backend",
      title: "Backend & Database Architecture",
      tag: "DATA & APIS",
      image: "/emojis/backend-db.jpg",
      borderColor: "border-green",
      span: "",
      badgeBg: "var(--ca-green)",
      badgeColor: "#ffffff",
      desc: "Scalable server logic, robust database design, authentication workflows, and API architectures engineered for high reliability and clean maintainability.",
      deliverables: [
        "RESTful API Endpoints",
        "Relational Database Modeling",
        "JWT & OAuth Security",
        "CRUD & Business Logic",
      ],
      chips: [
        { name: "Node.js", icon: "🟢" },
        { name: "PHP / Laravel", icon: "🐘" },
        { name: "MySQL", icon: "🐬" },
        { name: "Firebase DB", icon: "🔥" },
        { name: "REST APIs", icon: "🌐" },
      ],
      highlight: "Secure endpoints with validated payloads & fast database queries.",
    },
    {
      id: "design",
      category: "design",
      title: "UI/UX & Design Systems",
      tag: "INTERFACE DESIGN",
      image: "/emojis/uiux-design.jpg",
      borderColor: "border-magenta",
      span: "",
      badgeBg: "var(--ca-magenta)",
      badgeColor: "#ffffff",
      desc: "User-centered digital product design from wireframes to high-fidelity Figma prototypes with strict attention to typography, spacing, and micro-interactions.",
      deliverables: [
        "Wireframes & User Flows",
        "High-Fidelity Figma Prototypes",
        "Design Tokens & Palettes",
        "Design-to-Code Parity",
      ],
      chips: [
        { name: "Figma", icon: "🎨" },
        { name: "Wireframing", icon: "✏️" },
        { name: "Prototyping", icon: "✨" },
        { name: "Design Tokens", icon: "🧩" },
        { name: "Micro-Interactions", icon: "💫" },
      ],
      highlight: "Curated aesthetics that elevate usability and delight users.",
    },
    {
      id: "brand",
      category: "design",
      title: "Brand Identity & Visuals",
      tag: "CREATIVE ASSETS",
      image: "/emojis/brand-identity.jpg",
      borderColor: "border-purple",
      span: "",
      badgeBg: "var(--ca-purple)",
      badgeColor: "var(--ca-ink)",
      desc: "Distinctive visual branding, custom logos, curated typography systems, and cohesive color palettes that give products identity and character.",
      deliverables: [
        "Logo Design & Vectors",
        "Brand Guidelines",
        "Typography Pairing",
        "Iconography Sets",
      ],
      chips: [
        { name: "Logo Design", icon: "✒️" },
        { name: "Brand Identity", icon: "🏷️" },
        { name: "Typography", icon: "🔤" },
        { name: "Color Systems", icon: "🎨" },
        { name: "Vector Graphics", icon: "📐" },
      ],
      highlight: "Memorable brand personality that stands out from the crowd.",
    },
    {
      id: "workflow",
      category: "workflow",
      title: "End-to-End Delivery & Dev Tools",
      tag: "HOW I SHIP · 6 STAGES",
      image: "/emojis/workflow-ship.jpg",
      borderColor: "border-ink",
      span: "ca-bento-span-3",
      badgeBg: "var(--ca-ink)",
      badgeColor: "#ffffff",
      desc: "A disciplined yet flexible delivery pipeline that guides every project from problem definition to verified production release.",
      steps: [
        { num: "01", name: "Discover", desc: "Goals & scope" },
        { num: "02", name: "Architecture", desc: "Stack & schema" },
        { num: "03", name: "UI Prototype", desc: "Figma flows" },
        { num: "04", name: "Development", desc: "Modular code" },
        { num: "05", name: "Test & Polish", desc: "Speed & responsive" },
        { num: "06", name: "Ship & Scale", desc: "Deploy & verify" },
      ],
      chips: [
        { name: "Git", icon: "🌿" },
        { name: "GitHub", icon: "🐙" },
        { name: "VS Code", icon: "💻" },
        { name: "Vite", icon: "⚡" },
        { name: "Postman", icon: "🚀" },
        { name: "Chrome DevTools", icon: "🔍" },
        { name: "Terminal / CLI", icon: "⌨️" },
      ],
      highlight: "Structured version-controlled workflow with CI/CD and automated checks.",
    },
  ];

  const visibleCards = activeFilter === "all"
    ? bentoItems
    : bentoItems.filter((item) => item.category === activeFilter);

  return (
    <div className="ca-about-page-container ca-grid">
      {/* Desktop Fixed Left Navigation Tabs */}
      <aside className="ca-about-side-nav" aria-label="Services filter navigation">
        <button
          className={`ca-side-nav-tab ${activeFilter === "all" ? "active-tab" : ""}`}
          onClick={() => filterCards("all")}
          style={{ backgroundColor: "var(--ca-ink)", color: "#ffffff" }}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="ca-side-nav-icon">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span>ALL (6)</span>
        </button>
        <button
          className={`ca-side-nav-tab ${activeFilter === "web" ? "active-tab" : ""}`}
          onClick={() => filterCards("web")}
          style={{ backgroundColor: "var(--ca-yellow)", color: "var(--ca-ink)" }}
        >
          <img src="/emojis/web-dev.jpg" alt="" className="ca-mini-emoji-icon" />
          <span>WEB</span>
        </button>
        <button
          className={`ca-side-nav-tab ${activeFilter === "mobile" ? "active-tab" : ""}`}
          onClick={() => filterCards("mobile")}
          style={{ backgroundColor: "var(--ca-blue)", color: "#ffffff" }}
        >
          <img src="/emojis/mobile-app.jpg" alt="" className="ca-mini-emoji-icon" />
          <span>MOBILE</span>
        </button>
        <button
          className={`ca-side-nav-tab ${activeFilter === "backend" ? "active-tab" : ""}`}
          onClick={() => filterCards("backend")}
          style={{ backgroundColor: "var(--ca-green)", color: "#ffffff" }}
        >
          <img src="/emojis/backend-db.jpg" alt="" className="ca-mini-emoji-icon" />
          <span>BACKEND</span>
        </button>
        <button
          className={`ca-side-nav-tab ${activeFilter === "design" ? "active-tab" : ""}`}
          onClick={() => filterCards("design")}
          style={{ backgroundColor: "var(--ca-magenta)", color: "#ffffff" }}
        >
          <img src="/emojis/uiux-design.jpg" alt="" className="ca-mini-emoji-icon" />
          <span>DESIGN</span>
        </button>
        <button
          className={`ca-side-nav-tab ${activeFilter === "workflow" ? "active-tab" : ""}`}
          onClick={() => filterCards("workflow")}
          style={{ backgroundColor: "var(--ca-purple)", color: "var(--ca-ink)" }}
        >
          <img src="/emojis/workflow-ship.jpg" alt="" className="ca-mini-emoji-icon" />
          <span>WORKFLOW</span>
        </button>
      </aside>

      <main className="ca-about-main-content">
        <div className="ca-services-inner-max">
          {/* Header Title with Bouncy Pop-in Animations */}
          <div className="ca-about-page-header">
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.35rem" }}>
              <span className="ca-postage-stamp stamp-yellow rot-neg2 ca-pop-in-stamp ca-delay-1">
                CAPABILITIES &amp; CRAFT ✨
              </span>
              <span className="ca-hand ca-pop-in-stamp ca-delay-2" style={{ fontSize: "1.2rem", color: "var(--ca-ink)" }}>
                everything built with care &amp; precision
              </span>
            </div>

            <h1 className="ca-display ca-about-giant-title ca-pop-in-title ca-delay-2">
              SERVICES &amp; STACK
            </h1>

            <p className="ca-pop-in ca-delay-3" style={{ fontSize: "1.05rem", color: "rgba(25, 21, 16, 0.8)", maxWidth: "680px", lineHeight: "1.6", marginTop: "0.75rem" }}>
              A curated overview of what I design, build, and ship. I combine modern engineering standards with distinctive UI/UX design to build responsive, memorable products.
            </p>

            {/* Quick Interactive Category Switcher Bar */}
            <div className="ca-services-tab-bar ca-pop-in ca-delay-3">
              <button
                className={`ca-services-tab-btn ${activeFilter === "all" ? "active" : ""}`}
                onClick={() => filterCards("all")}
              >
                <span>✦</span> All Capabilities (6)
              </button>
              <button
                className={`ca-services-tab-btn ${activeFilter === "web" ? "active" : ""}`}
                onClick={() => filterCards("web")}
              >
                <img src="/emojis/web-dev.jpg" alt="" className="ca-mini-emoji-icon" /> Web &amp; Full-Stack
              </button>
              <button
                className={`ca-services-tab-btn ${activeFilter === "mobile" ? "active" : ""}`}
                onClick={() => filterCards("mobile")}
              >
                <img src="/emojis/mobile-app.jpg" alt="" className="ca-mini-emoji-icon" /> Mobile Apps
              </button>
              <button
                className={`ca-services-tab-btn ${activeFilter === "backend" ? "active" : ""}`}
                onClick={() => filterCards("backend")}
              >
                <img src="/emojis/backend-db.jpg" alt="" className="ca-mini-emoji-icon" /> Backend &amp; DB
              </button>
              <button
                className={`ca-services-tab-btn ${activeFilter === "design" ? "active" : ""}`}
                onClick={() => filterCards("design")}
              >
                <img src="/emojis/uiux-design.jpg" alt="" className="ca-mini-emoji-icon" /> UI/UX &amp; Brand
              </button>
              <button
                className={`ca-services-tab-btn ${activeFilter === "workflow" ? "active" : ""}`}
                onClick={() => filterCards("workflow")}
              >
                <img src="/emojis/workflow-ship.jpg" alt="" className="ca-mini-emoji-icon" /> Workflow &amp; Tools
              </button>
            </div>
          </div>

          {/* Interactive Bento Grid with Pop-in Animations */}
          <div key={animKey} className="ca-bento-grid">
            {visibleCards.map((card, idx) => (
              <div
                key={card.id}
                className={`ca-bento-card ${card.borderColor} ${activeFilter === "all" ? card.span : "ca-bento-span-3"} ca-pop-in ca-delay-${(idx % 6) + 1}`}
              >
                {/* Card Header */}
                <div className="ca-bento-header">
                  <div
                    className="ca-bento-icon-badge"
                    style={{ backgroundColor: card.badgeBg, color: card.badgeColor || "var(--ca-ink)" }}
                  >
                    <img src={card.image} alt={card.title} className="ca-emoji-img" />
                  </div>
                  <span
                    className="ca-bento-stamp-tag"
                    style={{ backgroundColor: card.badgeBg, color: card.badgeColor || "var(--ca-ink)" }}
                  >
                    {card.tag}
                  </span>
                </div>

                {/* Card Title & Description */}
                <div>
                  <h2 className="ca-bento-title">{card.title}</h2>
                  <p className="ca-bento-desc">{card.desc}</p>
                </div>

                {/* Deliverables Badges */}
                {card.deliverables && (
                  <div className="ca-bento-deliverables">
                    {card.deliverables.map((item) => (
                      <span key={item} className="ca-bento-deliv-item">
                        <span>✓</span> {item}
                      </span>
                    ))}
                  </div>
                )}

                {/* 6-Step Workflow Strip (Only on Workflow card) */}
                {card.steps && (
                  <div className="ca-bento-steps-strip">
                    {card.steps.map((st) => (
                      <div key={st.num} className="ca-bento-step-box">
                        <span className="ca-bento-step-num">{st.num}</span>
                        <div className="ca-bento-step-name">{st.name}</div>
                        <span style={{ fontSize: "0.68rem", opacity: 0.7, display: "block", marginTop: "0.15rem" }}>
                          {st.desc}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Chips */}
                <div className="ca-bento-chips-wrap">
                  {card.chips.map((chip) => (
                    <span key={chip.name} className="ca-bento-chip">
                      <span>{chip.icon}</span>
                      <span>{chip.name}</span>
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Quick Collaboration Banner as the final Bento Card */}
            <div
              className="ca-bento-card border-yellow ca-bento-span-3 ca-pop-in ca-delay-6"
              style={{
                background: "linear-gradient(135deg, var(--ca-yellow-soft) 0%, #ffffff 100%)",
                textAlign: "center",
                padding: "2.25rem 1.5rem",
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  background: "var(--ca-yellow)",
                  border: "2px solid var(--ca-ink)",
                  padding: "0.25rem 0.85rem",
                  borderRadius: "9999px",
                  fontFamily: "var(--font-artsy-mono)",
                  fontSize: "0.78rem",
                  fontWeight: "800",
                  marginBottom: "0.75rem",
                  boxShadow: "2px 2px 0 var(--ca-ink)",
                }}
              >
                ✦ READY TO BRING AN IDEA TO LIFE?
              </div>
              <h2
                className="ca-display"
                style={{ fontSize: "2.1rem", color: "var(--ca-ink)", margin: "0.25rem 0 0.5rem" }}
              >
                Let&apos;s Build Something Remarkable Together.
              </h2>
              <p
                style={{
                  maxWidth: "580px",
                  margin: "0 auto 1.5rem",
                  fontSize: "0.98rem",
                  color: "rgba(25, 21, 16, 0.8)",
                  lineHeight: "1.55",
                }}
              >
                Whether you need a modern web application, cross-platform mobile experience, or polished UI/UX design tokens, I&apos;m ready to collaborate.
              </p>
              <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
                <button
                  onClick={() => navigateTo("contact")}
                  className="ca-hero-cta ca-mono"
                  style={{ margin: 0 }}
                >
                  <span className="ca-cta-icon-box">♥</span>
                  Start a Conversation ↗
                </button>
                <button
                  onClick={() => navigateTo("case-studies")}
                  className="ca-hero-secondary-btn ca-mono"
                  style={{ margin: 0, background: "#ffffff" }}
                >
                  <span>✦</span> Browse Case Studies
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function App() {
  const isDirectNonHome = typeof window !== "undefined" && (
    window.location.pathname.includes("about") ||
    window.location.pathname.includes("contact") ||
    window.location.pathname.includes("case-stud") ||
    window.location.pathname.includes("playground") ||
    window.location.pathname.includes("service") ||
    window.location.pathname.includes("stack") ||
    window.location.pathname.includes("process")
  );

  // Splash state - only show splash on initial homepage load, NOT when reloading /about, /contact, or /case-studies
  const [showSplash, setShowSplash] = useState(() => !isDirectNonHome);
  const [splashPhase, setSplashPhase] = useState(1); // 1: "Oh, hello!", 2: "You found me!", 3: fading out
  const [heroRevealed, setHeroRevealed] = useState(() => isDirectNonHome);
  const [animKey, setAnimKey] = useState(0);
  const [activeTab, setActiveTab] = useState("home");
  const [heroName, setHeroName] = useState("PURUSHOTHAM");
  const [isEditingName, setIsEditingName] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [reactionsCount, setReactionsCount] = useState(1);


  // Skill badges interactive state (click to cycle emojis)
  const [skillEmojiOffsets, setSkillEmojiOffsets] = useState([0, 0, 0, 0]);
  const cycleSkillEmoji = (index) => {
    setSkillEmojiOffsets((prev) => {
      const next = [...prev];
      next[index] = (next[index] + 1) % SKILL_BADGES[index].emojis.length;
      return next;
    });
  };

  // Active Project Tab index for Glassy Folder Showcase (Default to 3 matching Screenshot 2)
  const [activeProjectIdx, setActiveProjectIdx] = useState(3);

  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "", sent: false });

  // Invert Magnifier Lens ref & mouse move
  const lensRef = useRef(null);
  const rafRef = useRef(0);

  useEffect(() => {
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleHeroMouseMove = (e) => {
    const el = lensRef.current;
    if (!el) return;
    const target = e.currentTarget;
    const { clientX, clientY } = e;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const rect = target.getBoundingClientRect();
      let x = ((clientX - rect.left) / rect.width) * 100;
      let y = ((clientY - rect.top) / rect.height) * 100;
      x = Math.min(97, Math.max(3, x));
      y = Math.min(97, Math.max(3, y));
      el.style.left = `${x}%`;
      el.style.top = `${y}%`;
    });
  };

  // Splash animation timer
  useEffect(() => {
    if (!showSplash) return;
    setSplashPhase(1);

    const phase2Timer = setTimeout(() => {
      setSplashPhase(2);
    }, 950);

    const fadeTimer = setTimeout(() => {
      setSplashPhase(3);
      setHeroRevealed(true);
    }, 1800);

    const hideTimer = setTimeout(() => {
      setShowSplash(false);
      setHeroRevealed(true);
    }, 2250);

    return () => {
      clearTimeout(phase2Timer);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [showSplash]);

  const replaySplash = () => {
    setAnimKey((k) => k + 1);
    setHeroRevealed(false);
    setShowSplash(true);
    setSplashPhase(1);
  };



  // Page Routing & Navigation
  const [currentPage, setCurrentPage] = useState(() => {
    if (typeof window !== "undefined") {
      if (window.location.pathname.includes("contact")) return "contact";
      if (window.location.pathname.includes("about")) return "about";
      if (window.location.pathname.includes("case-stud")) return "case-studies";
      if (window.location.pathname.includes("playground")) return "playground";
      if (window.location.pathname.includes("service") || window.location.pathname.includes("stack") || window.location.pathname.includes("process")) return "services";
    }
    return "home";
  });

  const featuredRef = useRef(null);
  const aboutSectionRef = useRef(null);
  const deckContainerRef = useRef(null);
  const scrollTriggerRef = useRef(null);
  const [featuredInView, setFeaturedInView] = useState(false);
  const [activeDeckTab, setActiveDeckTab] = useState(0);

  // Smooth ScrollTrigger Stacking Deck: Card 1 stays fixed, Cards 2..4 glide in sequentially
  useEffect(() => {
    if (currentPage !== "home") return;

    const ctx = gsap.context(() => {
      const container = deckContainerRef.current;
      if (!container) return;

      const cards = gsap.utils.toArray(".ca-stack-card-slot");
      if (cards.length <= 1) return;

      const subsequentCards = cards.slice(1);
      // Ensure Cards 2, 3, 4 start cleanly positioned below the frame
      gsap.set(subsequentCards, { yPercent: 100, y: 0 });

      const navHeader = document.querySelector(".ca-header");
      const getNavHeight = () => (navHeader ? navHeader.offsetHeight : 50);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: () => `top ${getNavHeight()}px`,
          end: () => `+=${subsequentCards.length * window.innerHeight * 0.75}px`,
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
          anticipatePin: 1,
          onUpdate: (self) => {
            const p = self.progress;
            // 4 cards across 3 transitions: switch tabs cleanly at transition midpoints
            const active = p >= 0.84 ? 3 : p >= 0.51 ? 2 : p >= 0.18 ? 1 : 0;
            setActiveDeckTab((prev) => (prev !== active ? active : prev));
          },
        },
      });

      scrollTriggerRef.current = tl.scrollTrigger;

      // Card 0 stays fixed at y: 0. Cards 1, 2, 3 glide up sequentially
      subsequentCards.forEach((card) => {
        tl.to(card, {
          yPercent: 0,
          ease: "none",
          duration: 1,
        });
      });
    }, deckContainerRef);

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      clearTimeout(refreshTimer);
      ctx.revert();
      scrollTriggerRef.current = null;
    };
  }, [currentPage]);

  // Scroll-driven out-to-in glide for About flanking Polaroids (desktop & mobile)
  useEffect(() => {
    if (currentPage !== "home" || !aboutSectionRef.current) return;

    const aboutEl = aboutSectionRef.current;
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const leftCard = aboutEl.querySelector(".ca-flank-polaroid.left");
      const rightCard = aboutEl.querySelector(".ca-flank-polaroid.right");

      if (leftCard) {
        gsap.fromTo(
          leftCard,
          { x: -240, y: 40, rotation: -16, opacity: 0 },
          {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: aboutEl,
              start: "top 92%",
              end: "center 58%",
              scrub: 0.7,
            },
          }
        );
      }

      if (rightCard) {
        gsap.fromTo(
          rightCard,
          { x: 240, y: 40, rotation: 16, opacity: 0 },
          {
            x: 0,
            y: 0,
            rotation: 0,
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: aboutEl,
              start: "top 95%",
              end: "top 22%",
              scrub: 0.7,
            },
          }
        );
      }
    });

    mm.add("(max-width: 1023px) and (prefers-reduced-motion: no-preference)", () => {
      const mobileWrap = aboutEl.querySelector(".ca-about-polaroids-mobile");
      const cards = aboutEl.querySelectorAll(".ca-about-polaroids-mobile .ca-polaroid");
      if (!mobileWrap || cards.length < 2) return;

      gsap.fromTo(
        cards[0],
        { x: -110, rotation: -12, opacity: 0 },
        {
          x: 0,
          rotation: -3.5,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: mobileWrap,
            start: "top 95%",
            end: "top 55%",
            scrub: 0.65,
          },
        }
      );

      gsap.fromTo(
        cards[1],
        { x: 110, rotation: 12, opacity: 0 },
        {
          x: 0,
          rotation: 3.5,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: mobileWrap,
            start: "top 95%",
            end: "top 55%",
            scrub: 0.65,
          },
        }
      );
    });

    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 160);
    return () => {
      clearTimeout(refreshTimer);
      mm.revert();
    };
  }, [currentPage]);

  // Smooth scroll-triggered card reveals from "02 · WHAT I DO" down the full page (+ inner page cards)
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      // Home 02 · WHAT I DO: staggered 4-card rise with subtle scrapbook tilt + CTA button
      const serviceGrid = document.querySelector("#services .ca-universe-grid");
      const serviceCards = document.querySelectorAll("#services .ca-universe-card");
      if (serviceGrid && serviceCards.length) {
        gsap.fromTo(
          serviceCards,
          { y: 54, scale: 0.94, rotation: (i) => (i % 2 === 0 ? -2.2 : 2.2), opacity: 0 },
          {
            y: 0,
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 0.72,
            stagger: 0.11,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: serviceGrid,
              start: "top 86%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      const servicesCta = document.querySelector("#services .ca-hero-cta");
      if (servicesCta) {
        gsap.fromTo(
          servicesCta,
          { y: 26, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: servicesCta,
              start: "top 92%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Home 03 · LET'S CONNECT: staggered 4 connect cards + chunky yellow banner
      const connectGrid = document.querySelector("#contact .ca-connect-links-grid");
      const connectCards = document.querySelectorAll("#contact .ca-connect-link-card");
      if (connectGrid && connectCards.length) {
        gsap.fromTo(
          connectCards,
          { y: 46, scale: 0.94, opacity: 0 },
          {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 0.65,
            stagger: 0.09,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: connectGrid,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      const contactBanner = document.querySelector("#contact .ca-contact-banner");
      if (contactBanner) {
        gsap.fromTo(
          contactBanner,
          { y: 52, scale: 0.96, rotation: -1, opacity: 0 },
          {
            y: 0,
            scale: 1,
            rotation: 0,
            opacity: 1,
            duration: 0.78,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: contactBanner,
              start: "top 88%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Footer columns smooth fade-rise
      const footerRoot = document.querySelector(".hwf-root");
      const footerCols = document.querySelectorAll(".hwf-brand, .hwf-col");
      if (footerRoot && footerCols.length) {
        gsap.fromTo(
          footerCols,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.65,
            stagger: 0.09,
            ease: "power3.out",
            clearProps: "transform",
            scrollTrigger: {
              trigger: footerRoot,
              start: "top 92%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Inner pages (/about, /playground, /contact): smooth batch reveal for content cards
      const innerCards = document.querySelectorAll(
        ".ca-about-page-container .ca-story-card, .ca-about-page-container .ca-principle-card, .ca-about-page-container .ca-edu-card, .ca-about-page-container .ca-lang-card, .ca-techtext-stage-card"
      );
      if (innerCards.length) {
        gsap.set(innerCards, { y: 40, opacity: 0, scale: 0.96 });
        ScrollTrigger.batch(innerCards, {
          start: "top 88%",
          once: true,
          onEnter: (batch) =>
            gsap.to(batch, {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 0.65,
              stagger: 0.09,
              ease: "power3.out",
              clearProps: "transform",
            }),
        });
      }
    });

    const refreshTimer = setTimeout(() => ScrollTrigger.refresh(), 200);
    return () => {
      clearTimeout(refreshTimer);
      mm.revert();
    };
  }, [currentPage]);

  // Snap every [data-grid-snap] text block to exact 34px ruled-paper multiples on any viewport width
  useEffect(() => {
    const snap = () => {
      const nodes = document.querySelectorAll("[data-grid-snap]");
      nodes.forEach((el) => {
        el.style.setProperty("--snap-offset", "0px");
      });
      nodes.forEach((el) => {
        const top = Math.round(el.getBoundingClientRect().top + window.scrollY);
        const rem = ((top % 34) + 34) % 34;
        const offset = rem === 0 ? 0 : 34 - rem;
        el.style.setProperty("--snap-offset", `${offset}px`);
      });
      ScrollTrigger.refresh();
    };

    const raf = requestAnimationFrame(snap);
    const t = setTimeout(snap, 220);
    window.addEventListener("resize", snap);
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(snap);
    }
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(t);
      window.removeEventListener("resize", snap);
    };
  }, [currentPage, heroRevealed]);

  const goToProject = (idx) => {
    setActiveDeckTab(idx);
    const st = scrollTriggerRef.current;
    if (!st) {
      const card = document.getElementById(`project-card-${idx}`);
      if (card) card.scrollIntoView({ behavior: "smooth" });
      return;
    }

    const start = st.start;
    const end = st.end;
    const total = end - start;

    let targetScroll = start;
    if (idx === 1) targetScroll = start + total * (1 / 3);
    else if (idx === 2) targetScroll = start + total * (2 / 3);
    else if (idx === 3) targetScroll = end;

    gsap.to(window, {
      scrollTo: { y: targetScroll, autoKill: true },
      duration: 0.8,
      ease: "power2.out",
      overwrite: "auto",
    });
  };

  useEffect(() => {
    const onPop = () => {
      const path = window.location.pathname;
      if (path.includes("contact")) {
        setCurrentPage("contact");
      } else if (path.includes("about")) {
        setCurrentPage("about");
      } else if (path.includes("case-stud")) {
        setCurrentPage("case-studies");
      } else if (path.includes("playground")) {
        setCurrentPage("playground");
      } else if (path.includes("service") || path.includes("stack") || path.includes("process")) {
        setCurrentPage("services");
      } else {
        setCurrentPage("home");
      }
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  useEffect(() => {
    if (!featuredRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFeaturedInView(true);
        } else if (entry.boundingClientRect.top > 0) {
          // Reset when user scrolls back above the section so it re-triggers on scroll down
          setFeaturedInView(false);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(featuredRef.current);
    return () => observer.disconnect();
  }, [currentPage]);

  const navigateTo = (page, sectionId) => {
    setMobileMenuOpen(false);
    setCurrentPage(page);
    setActiveTab(page === "about" || page === "contact" || page === "case-studies" || page === "playground" || page === "services" ? page : sectionId || "home");
    if (page === "contact") {
      window.history.pushState(null, "", "/contact");
    } else if (page === "about") {
      window.history.pushState(null, "", "/about");
    } else if (page === "case-studies") {
      window.history.pushState(null, "", "/case-studies");
    } else if (page === "playground") {
      window.history.pushState(null, "", "/playground");
    } else if (page === "services") {
      window.history.pushState(null, "", "/services");
    } else {
      window.history.pushState(null, "", "/");
    }
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    if (currentPage !== "home") {
      navigateTo("home", id);
      return;
    }
    setActiveTab(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const projects = FEATURED_PROJECTS;

  return (
    <div className="portfolio-app t-creative-artsy">
      {/* Paper Grain Overlay */}
      <div className="ca-grain" aria-hidden="true"></div>

      {/* ========================================================= */}
      {/* 1. STARTING INTRO SPLASH (Images 1 & 2) */}
      {/* ========================================================= */}
      {showSplash && (
        <div
          className={`ca-splash-container ${splashPhase === 3 ? "fading-out" : ""}`}
          onClick={() => {
            setShowSplash(false);
            setHeroRevealed(true);
          }}
          title="Click to skip"
        >
          {splashPhase === 1 && (
            <div className="ca-splash-bubble">
              {INTRO_1.map((char, i) => (
                <span
                  key={i}
                  className="ca-splash-char"
                  style={{ animationDelay: `${0.12 + i * 0.045}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
          )}

          {splashPhase >= 2 && (
            <div className="ca-splash-bubble">
              {INTRO_2.map((char, i) => (
                <span
                  key={i}
                  className="ca-splash-char"
                  style={{ animationDelay: `${0.05 + i * 0.045}s` }}
                >
                  {char === " " ? "\u00A0" : char}
                </span>
              ))}
            </div>
          )}

          <div
            style={{
              position: "absolute",
              bottom: "2.5rem",
              fontFamily: "var(--font-artsy-mono)",
              fontSize: "0.8rem",
              opacity: 0.5,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Click anywhere to skip
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* 2. STICKY HEADER */}
      {/* ========================================================= */}
      <header className="ca-header">
        <div className="ca-header-inner">
          <div className="ca-header-left">
            <button
              onClick={() => navigateTo("home")}
              className="ca-logo-btn"
              aria-label="Purushotham Home"
            >
              <img
                src="/purushotham-portrait.jpg"
                alt="Purushotham"
                className="ca-nav-avatar-img"
              />
              <span className="ca-mobile-brand-name ca-mono">PURUSHOTHAM</span>
            </button>

            <nav className="ca-nav ca-mono">
              <button
                onClick={() => navigateTo("home")}
                className={`ca-nav-link ${currentPage === "home" && activeTab === "home" ? "active" : ""}`}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="#fff" strokeWidth="2" style={{ width: "1.1rem", height: "1.1rem" }}>
                  <path d="M12 2l2.9 6.26 6.85.72-5.1 4.62 1.44 6.7L12 17.6l-6.09 3.7 1.44-6.7-5.1-4.62 6.85-.72z" />
                </svg>
                Home
              </button>
              <button
                onClick={() => navigateTo("about")}
                className={`ca-nav-link ${currentPage === "about" ? "active" : ""}`}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="#fff" strokeWidth="2" style={{ width: "1.1rem", height: "1.1rem" }}>
                  <path d="M12 3a3.6 3.6 0 100 7.2A3.6 3.6 0 0012 3zM4.8 20a7.2 7.2 0 0114.4 0z" />
                </svg>
                About
              </button>
              <button
                onClick={() => navigateTo("services")}
                className={`ca-nav-link ${currentPage === "services" ? "active" : ""}`}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="#fff" strokeWidth="2" style={{ width: "1.1rem", height: "1.1rem" }}>
                  <path d="M4 6h16v3H4zM4 11h16v3H4zM4 16h16v3H4z" />
                </svg>
                Services &amp; Stack
              </button>
              {/* CASE STUDY NAV LINK (COMMENTED OUT FOR NOW) */}
              {/* <button
                onClick={() => navigateTo("case-studies")}
                className={`ca-nav-link ${currentPage === "case-studies" ? "active" : ""}`}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="#fff" strokeWidth="2" style={{ width: "1.1rem", height: "1.1rem" }}>
                  <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
                </svg>
                Case Study
              </button> */}
              <button
                onClick={() => navigateTo("playground")}
                className={`ca-nav-link ${currentPage === "playground" ? "active" : ""}`}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" stroke="#fff" strokeWidth="2" style={{ width: "1.1rem", height: "1.1rem" }}>
                  <path d="M12 2l10 10-10 10L2 12z" />
                </svg>
                Playground
              </button>
            </nav>
          </div>

          <div className="ca-header-right">
            {/* Social Icons */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="ca-social-btn"
              style={{ backgroundColor: "var(--ca-yellow)" }}
              aria-label="LinkedIn"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1rem", height: "1rem" }}>
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              className="ca-social-btn"
              style={{ backgroundColor: "var(--ca-magenta)", color: "#fff" }}
              aria-label="Dribbble"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1rem", height: "1rem" }}>
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm10.12 11.642c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74-3.468 1.045-8.432.98-8.882.97-.004.312 0 .624 0 .94 0 2.633.998 5.037 2.634 6.855z" />
              </svg>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="ca-social-btn"
              style={{ backgroundColor: "var(--ca-green)", color: "#fff" }}
              aria-label="Instagram"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: "1rem", height: "1rem" }}>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.79-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Contact Button (hidden on contact page to match template) */}
            {currentPage !== "contact" && (
              <button
                onClick={() => navigateTo("contact")}
                className="ca-contact-nav-btn ca-mono"
              >
                ♥ Contact
              </button>
            )}

            {/* Mobile Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((v) => !v)}
              className={`ca-mobile-menu-btn ${mobileMenuOpen ? "open" : ""}`}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="20" height="20">
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" width="20" height="20">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Clean Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="ca-mobile-drawer ca-mono">
            <nav className="ca-mobile-drawer-nav" aria-label="Mobile navigation">
              <button
                onClick={() => navigateTo("home")}
                className={`ca-mobile-drawer-link ${currentPage === "home" ? "active" : ""}`}
              >
                <span>★</span> Home
              </button>
              <button
                onClick={() => navigateTo("about")}
                className={`ca-mobile-drawer-link ${currentPage === "about" ? "active" : ""}`}
              >
                <span>●</span> About
              </button>
              <button
                onClick={() => navigateTo("services")}
                className={`ca-mobile-drawer-link ${currentPage === "services" ? "active" : ""}`}
              >
                <span>≡</span> Services &amp; Stack
              </button>
              <button
                onClick={() => navigateTo("playground")}
                className={`ca-mobile-drawer-link ${currentPage === "playground" ? "active" : ""}`}
              >
                <span>◆</span> Playground
              </button>
              <button
                onClick={() => navigateTo("contact")}
                className={`ca-mobile-drawer-link ${currentPage === "contact" ? "active" : ""}`}
              >
                <span>♥</span> Contact
              </button>
            </nav>
            <div className="ca-mobile-drawer-socials">
              <a href="https://github.com/Purushotham07" target="_blank" rel="noreferrer" className="ca-mobile-social-pill">GitHub ↗</a>
              <a href="https://www.linkedin.com/in/purushotham-n-34603226a" target="_blank" rel="noreferrer" className="ca-mobile-social-pill">LinkedIn ↗</a>
              <a href="mailto:purushothamkrishna07@gmail.com" className="ca-mobile-social-pill">Email ↗</a>
            </div>
          </div>
        )}
      </header>

      {/* ========================================================= */}
      {/* CONDITIONAL PAGE ROUTING (Home / About / Contact / Case Studies) */}
      {/* ========================================================= */}
      {currentPage === "about" ? (
        <AboutView navigateTo={navigateTo} />
      ) : currentPage === "services" ? (
        <ServicesView navigateTo={navigateTo} />
      ) : currentPage === "contact" ? (
        <ContactView />
      /* CASE STUDIES ROUTE (COMMENTED OUT FOR NOW):
      ) : currentPage === "case-studies" ? (
        <CaseStudiesView onSelectProject={setSelectedProject} navigateTo={navigateTo} />
      */
      ) : currentPage === "playground" ? (
        <PlaygroundView navigateTo={navigateTo} />
      ) : (
        <>
          {/* ========================================================= */}
          {/* 3. HERO SECTION (Image 3) */}
          {/* ========================================================= */}
          <section id="home" className={`ca-hero ca-grid ${(!showSplash || splashPhase >= 3) ? "ca-hero-revealed" : ""}`}>
            {/* Floating Avatars matching official Portfoliofy template */}
            <div className="ca-hero-media" aria-hidden="true">
              <div className="ca-hero-avatar-wrap left">
                <span className="ca-avatar-ring-template rotate-neg6">
                  <span className="ca-avatar-inner-circle">
                    <img
                      src="/purushotham-portrait.jpg"
                      alt="Purushotham"
                      loading="lazy"
                      className="ca-avatar-img-cover"
                    />
                  </span>
                </span>
              </div>
              <div className="ca-hero-avatar-wrap right">
                <span className="ca-avatar-ring-template rotate-pos6">
                  <span className="ca-avatar-inner-circle">
                    <img
                      src="/purushotham-portrait.jpg"
                      alt="Purushotham"
                      loading="lazy"
                      className="ca-avatar-img-cover"
                    />
                  </span>
                </span>
              </div>
            </div>

            <div
              key={animKey}
              className={`ca-hero-interactive-area group-name ${heroRevealed ? "ca-hero-revealed" : ""}`}
              onMouseMove={handleHeroMouseMove}
            >
              {/* Interactive Invert Magnifier Lens (Screenshots 3, 4, 5) */}
              <span
                ref={lensRef}
                aria-hidden="true"
                className="ca-invert-lens"
                style={{ left: "50%", top: "50%" }}
              >
                <span className="ca-lens-corner tl" />
                <span className="ca-lens-corner tr" />
                <span className="ca-lens-corner bl" />
                <span className="ca-lens-corner br" />
              </span>

              <div className="ca-hero-content">
                {/* "my name is" label with hand-drawn double wavy underline */}
                <div className="ca-hero-label-box">
                  <p className="ca-hand ca-hero-label">my name is</p>
                  <svg viewBox="0 0 64 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="ca-wavy-line" aria-hidden="true">
                    <path d="M3 4c18-3 40-3 58 0" />
                    <path d="M9 9c14-2.5 32-2.5 46 0" />
                  </svg>
                </div>

                {/* Central Name Stage with Sketched Box & Sticky Notes */}
                <div className="ca-name-stage">
                  {/* The Sketched Doodle Box */}
                  <div
                    className="ca-doodle-box ca-name-box"
                    onClick={() => setIsEditingName(!isEditingName)}
                    title="Click to customize name"
                  >
                    {isEditingName ? (
                      <input
                        type="text"
                        value={heroName}
                        onChange={(e) => setHeroName(e.target.value.toUpperCase())}
                        onBlur={() => setIsEditingName(false)}
                        autoFocus
                        style={{
                          fontFamily: "var(--font-artsy-display)",
                          fontSize: "clamp(3.5rem, 14vw, 10rem)",
                          fontWeight: 800,
                          width: "100%",
                          textAlign: "center",
                          border: "none",
                          background: "transparent",
                          outline: "none",
                          color: "var(--ca-ink)",
                        }}
                      />
                    ) : (
                      <span className="ca-display ca-name-text">
                        {heroName.split("").map((char, i) => (
                          <span
                            key={i}
                            className={heroRevealed ? "ca-name-char" : "ca-char-hidden"}
                            style={{ animationDelay: `${0.1 + i * 0.06}s` }}
                          >
                            {char}
                          </span>
                        ))}
                      </span>
                    )}
                  </div>

                  {/* Desktop Surrounding Notes and Hand-drawn Arrows */}
                  <div className="ca-desktop-annotations" aria-hidden="true">
                    {/* Top-Left Pill: "Full-Stack Developer" */}
                    <div className="ca-annotation-item top-left">
                      <div className="ca-note-rotate-tl">
                        <span className="ca-note-tag ca-mono" style={{ backgroundColor: "var(--ca-purple)" }}>
                          Full-Stack Developer
                        </span>
                      </div>
                    </div>

                    {/* Top-Right Pill: "Mobile App Developer" */}
                    <div className="ca-annotation-item top-right">
                      <div className="ca-note-rotate-tr">
                        <span className="ca-note-tag ca-mono" style={{ backgroundColor: "var(--ca-yellow-soft)" }}>
                          Mobile App Developer
                        </span>
                      </div>
                    </div>

                    {/* Bottom-Left Sticky Note: "UI/UX & Brand Designer" + Arrow */}
                    <div className="ca-annotation-item bottom-left">
                      <div className="ca-note-rotate-bl">
                        <span className="ca-sticky-wrapper">
                          <span className="ca-sticky-note ca-hand" style={{ backgroundColor: "var(--ca-yellow)" }}>
                            UI/UX &amp; Brand Designer
                          </span>
                          {/* Arrow pointing up-right towards name */}
                          <svg viewBox="0 0 40 40" fill="none" stroke="var(--ca-ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ca-sticky-arrow-bl" aria-hidden="true">
                            <path d="M34 33 C 25 24, 15 21, 9 9" />
                            <path d="M8 21 L 7 7 L 21 11" />
                          </svg>
                        </span>
                      </div>
                    </div>

                    {/* Bottom-Right Sticky Note: "Open for Projects" + Arrow */}
                    <div className="ca-annotation-item bottom-right">
                      <div className="ca-note-rotate-br">
                        <span className="ca-sticky-wrapper">
                          {/* Arrow pointing up-left towards name */}
                          <svg viewBox="0 0 40 40" fill="none" stroke="var(--ca-ink)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="ca-sticky-arrow-br" aria-hidden="true">
                            <path d="M34 33 C 25 24, 15 21, 9 9" />
                            <path d="M8 21 L 7 7 L 21 11" />
                          </svg>
                          <span className="ca-sticky-note ca-hand" style={{ backgroundColor: "var(--ca-mint)" }}>
                            Let&apos;s Connect
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Annotations Fallback */}
                <div className="ca-mobile-annotations">
                  <span className="ca-note-tag ca-mono" style={{ backgroundColor: "var(--ca-purple)" }}>
                    Full-Stack Developer
                  </span>
                  <span className="ca-note-tag ca-mono" style={{ backgroundColor: "var(--ca-yellow-soft)" }}>
                    Mobile App Developer
                  </span>
                  <span className="ca-sticky-note ca-hand" style={{ backgroundColor: "var(--ca-yellow)", fontSize: "1.15rem" }}>
                    UI/UX &amp; Brand Designer
                  </span>
                  <span className="ca-sticky-note ca-hand" style={{ backgroundColor: "var(--ca-mint)", fontSize: "1.15rem" }}>
                    Open for Projects
                  </span>
                </div>

                {/* Open to projects status pill */}
                <div className="ca-status-pill ca-mono">
                  <span className="ca-status-dot"></span>
                  Open to Projects &amp; Creative Collaborations
                </div>
              </div>
            </div>

            {/* Big Bold Headline with Spinning Icons */}
            <h1 className="ca-hero-title ca-pop-in-title ca-delay-2">
              <span className="ca-hero-title-chunk">
                Turning ideas into{" "}
                <span className="ca-inline-icon">
                  <svg viewBox="0 0 40 40" className="ca-spin-slow" style={{ width: "100%", height: "100%" }}>
                    <circle cx="20" cy="20" r="18" fill="var(--ca-green)" stroke="var(--ca-ink)" strokeWidth="2.2" />
                    <circle cx="20" cy="20" r="11" fill="var(--ca-surface)" />
                    <circle cx="20" cy="20" r="5" fill="var(--ca-green)" />
                    <circle cx="14" cy="9" r="2.2" fill="var(--ca-ink)" />
                  </svg>
                </span>
              </span>{" "}
              <span className="ca-hero-title-chunk">
                powerful digital experiences.{" "}
                <span className="ca-inline-icon">
                  <svg viewBox="0 0 40 40" className="ca-spin-slow" style={{ width: "100%", height: "100%" }}>
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
                      <ellipse
                        key={angle}
                        cx="20"
                        cy="8"
                        rx="4.5"
                        ry="7.5"
                        fill="var(--ca-magenta)"
                        transform={`rotate(${angle} 20 20)`}
                      />
                    ))}
                    <circle cx="20" cy="20" r="4" fill="var(--ca-ink)" />
                  </svg>
                </span>
              </span>
            </h1>

            <p className="ca-mono ca-hero-bio-text">
              I design and develop modern websites, mobile applications, intuitive user interfaces, and distinctive brand identities. I combine technology, creativity, and problem-solving to transform ideas into meaningful digital products.
            </p>
            <p className="ca-hand ca-hero-tagline-hand">
              Exploring ideas. Designing experiences. Building what&apos;s next. ✨
            </p>

            {/* Buttons: Explore What I Do · Let's Connect */}
            <div className="ca-hero-cta-group">
              <button
                onClick={() => scrollToSection("services")}
                className="ca-hero-cta ca-mono"
              >
                <span className="ca-cta-icon-box">✦</span>
                Explore What I Do
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="ca-hero-cta ca-hero-cta-secondary ca-mono"
              >
                <span className="ca-cta-icon-box">♥</span>
                Let&apos;s Connect
              </button>
            </div>

            {/* Quick Jump TOC Ribbon */}
            <div className="ca-toc-ribbon">
              <button onClick={() => scrollToSection("about")} className="ca-toc-tag ca-mono">✦ About</button>
              {/* <button onClick={() => scrollToSection("work")} className="ca-toc-tag ca-mono">✦ Featured Works</button> */}
              <button onClick={() => scrollToSection("services")} className="ca-toc-tag ca-mono">✦ What I Do</button>
              <button onClick={() => navigateTo("services")} className="ca-toc-tag ca-mono">✦ Full Stack &amp; Process ↗</button>
              <button onClick={() => scrollToSection("contact")} className="ca-toc-tag ca-mono">✦ Connect</button>
            </div>
          </section>

          {/* ========================================================= */}
          {/* 4. ABOUT SECTION (01. ABOUT ME) */}
          {/* ========================================================= */}
          <section id="about" ref={aboutSectionRef} className="ca-about-section ca-grid">
            {/* Hand-drawn divider */}
            <svg viewBox="0 0 1440 130" fill="none" preserveAspectRatio="none" className="ca-section-divider-svg" aria-hidden="true">
              <path d="M-10 120 C 420 10, 1030 4, 1450 80" stroke="var(--ca-tick)" strokeWidth="1.5" />
            </svg>

            {/* Handwritten about me! label */}
            <p className="ca-hand ca-about-label" data-grid-snap="">01 · about me!</p>

            {/* Flanking Polaroids on Desktop */}
            <div className="ca-about-flanking-polaroids-desktop" aria-hidden="true">
              {/* Left Polaroid: Purushotham 2026 */}
              <div className="ca-flank-polaroid left">
                <figure className="ca-polaroid rotate-neg12">
                  <span className="ca-polaroid-tape top-left" />
                  <span className="ca-polaroid-tape top-right" />
                  <div className="ca-polaroid-img-box">
                    <img
                      src="/purushotham-portrait.jpg"
                      alt="Purushotham in 2026"
                      className="ca-polaroid-img ca-pop-in-img ca-delay-2"
                    />
                  </div>
                  <figcaption className="ca-hand ca-polaroid-caption">2026</figcaption>
                </figure>
              </div>

              {/* Right Polaroid: Purushotham Studio Portrait with Side Arrow */}
              <div className="ca-flank-polaroid right">
                <figure className="ca-polaroid rotate-pos14">
                  <span className="ca-polaroid-tape top-left" />
                  <span className="ca-polaroid-tape top-right" />
                  <div className="ca-polaroid-img-box">
                    <img
                      src="/purushotham-smile.jpg"
                      alt="Purushotham"
                      className="ca-polaroid-img ca-pop-in-img ca-delay-3"
                    />
                  </div>
                  <figcaption className="ca-hand ca-polaroid-caption">Purushotham ✨</figcaption>
                </figure>

                {/* Hand-drawn side arrow pointing to Purushotham */}
                <div className="ca-polaroid-side-arrow-group" aria-hidden="true">
                  <svg viewBox="0 0 50 30" fill="none" stroke="var(--ca-ink)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="ca-side-arrow-svg">
                    <path d="M45 5 C 30 18, 18 20, 5 15" />
                    <path d="M12 25 L 4 15 L 14 8" />
                  </svg>
                  <span className="ca-hand ca-side-arrow-label">creative dev!</span>
                </div>
              </div>
            </div>

            {/* Centered Content Block */}
            <div className="ca-about-center-container">
              <div className="ca-doodle-box ca-about-badge">
                <span className="ca-about-badge-text">ABOUT ME</span>
              </div>

              <h2 className="ca-display ca-about-heading" data-grid-snap="">
                Building Digital Experiences With Code &amp; Creativity.
              </h2>

              <p className="ca-hand ca-about-bio" data-grid-snap="">
                I&apos;m Purushotham, a developer and creative designer passionate about building modern digital products that combine functionality, performance, and visual quality. ✨
              </p>

              <p className="ca-about-paragraph" data-grid-snap="">
                My work spans full-stack web development, mobile application development, UI/UX design, and brand identity creation. From planning a product to designing its interface and developing its functionality, I enjoy bringing ideas to life through technology. I believe great digital products should not only look impressive but also solve real problems, deliver smooth experiences, and create value for users.
              </p>

              {/* My Focus Notepad Card */}
              <div className="ca-taped-callout yellow-soft rot-neg1 ca-about-focus-card">
                <span className="ca-tape-strip-tl" />
                <span className="ca-mono" style={{ fontSize: "0.8rem", fontWeight: "800", textTransform: "uppercase", display: "block", marginBottom: "0.5rem" }}>
                  ✦ MY FOCUS:
                </span>
                <ul style={{ margin: 0, paddingLeft: "1.2rem", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  <li>Creating responsive, user-friendly websites.</li>
                  <li>Developing cross-platform mobile applications.</li>
                  <li>Designing clean, modern UI/UX experiences.</li>
                  <li>Building memorable logos and brand identities.</li>
                  <li>Turning business ideas into practical digital solutions.</li>
                </ul>
              </div>

              {/* Mobile Polaroids (hidden on desktop) */}
              <div className="ca-about-polaroids-mobile">
                <figure className="ca-polaroid rotate-neg3">
                  <span className="ca-polaroid-tape top-left" />
                  <span className="ca-polaroid-tape top-right" />
                  <div className="ca-polaroid-img-box">
                    <img
                      src="/purushotham-portrait.jpg"
                      alt="2026"
                      className="ca-polaroid-img"
                    />
                  </div>
                  <figcaption className="ca-hand ca-polaroid-caption">2026</figcaption>
                </figure>

                <figure className="ca-polaroid rotate-pos3">
                  <span className="ca-polaroid-tape top-left" style={{ backgroundColor: "rgba(183, 198, 239, 0.75)" }} />
                  <span className="ca-polaroid-tape top-right" style={{ backgroundColor: "rgba(243, 226, 173, 0.75)" }} />
                  <div className="ca-polaroid-img-box">
                    <img
                      src="/purushotham-smile.jpg"
                      alt="Purushotham"
                      className="ca-polaroid-img"
                    />
                  </div>
                  <figcaption className="ca-hand ca-polaroid-caption">Purushotham ✨</figcaption>
                </figure>
              </div>

              {/* 4 Jagged Postage-Stamp Skills Badges (Arranged in 2 neat rows with alternating animated emojis) */}
              <div className="ca-skills-stamps-grid">
                {SKILL_BADGES.map((badge, idx) => {
                  const offset = skillEmojiOffsets[idx] || 0;
                  const emojiA = badge.emojis[offset % badge.emojis.length];
                  const emojiB = badge.emojis[(offset + 1) % badge.emojis.length];

                  return (
                    <div key={badge.id} className="ca-skill-stamp-group">
                      <span
                        className={`ca-skill-jagged-tag ${badge.color} ${badge.textColor}`}
                        onClick={() => navigateTo("services")}
                        title={`Explore ${badge.label}`}
                        style={{ cursor: "pointer" }}
                      >
                        {badge.label}
                      </span>
                      <button
                        type="button"
                        className={`ca-skill-emoji-box ${badge.color}`}
                        onClick={() => cycleSkillEmoji(idx)}
                        title={`Click to change emoji (${badge.label})`}
                        aria-label={`Cycle emoji for ${badge.label}`}
                      >
                        <span className="ca-emoji-swap ca-emoji-a">{emojiA}</span>
                        <span className="ca-emoji-swap ca-emoji-b">{emojiB}</span>
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* CTA Button to Full About Page */}
              <div style={{ textAlign: "center", marginTop: "2rem" }}>
                <button
                  onClick={() => navigateTo("about")}
                  className="ca-hero-cta ca-hero-cta-secondary ca-mono"
                >
                  <span className="ca-cta-icon-box">✦</span>
                  Read Full Story &amp; Bio in About ↗
                </button>
              </div>
            </div>

          </section>

          {/* ========================================================= */}
          {/* 5. CASE STUDIES / FEATURED WORKS (COMMENTED OUT FOR NOW) */}
          {/* ========================================================= */}
          {/* <section id="work" className="ca-work-section">
            <div className="ca-work-header">
              <p className="ca-hand ca-work-label">explore my work!</p>
              <svg viewBox="0 0 64 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="ca-wavy-line" style={{ margin: "0 auto" }} aria-hidden="true">
                <path d="M3 4c18-3 40-3 58 0" />
                <path d="M9 9c14-2.5 32-2.5 46 0" />
              </svg>

              <span ref={featuredRef} className="ca-display ca-work-title">
                <span style={{ display: "block" }}>
                  {"FEATURED".split("").map((char, i) => (
                    <span
                      key={`f-${i}`}
                      className={`ca-work-char ${featuredInView ? "in-view" : ""}`}
                      style={{
                        animationDelay: `${i * 0.045}s`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
                <span style={{ display: "block" }}>
                  {"WORKS".split("").map((char, i) => (
                    <span
                      key={`w-${i}`}
                      className={`ca-work-char ${featuredInView ? "in-view" : ""}`}
                      style={{
                        animationDelay: `${(i + 8) * 0.045}s`,
                      }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              </span>
            </div>

            <div ref={deckContainerRef} className="ca-projects-stack-container">
              <div className="ca-sticky-deck-tabs">
                <div className="ca-deck-tabs-track">
                  {projects.map((proj, idx) => {
                    const isActive = activeDeckTab === idx;
                    const tabColor = proj.theme === "yellow" ? "var(--ca-ink)" : "#ffffff";
                    return (
                      <button
                        key={`deck-tab-${proj.id}`}
                        type="button"
                        className={`ca-deck-tab ca-deck-tab-${idx} ${isActive ? "active" : ""}`}
                        style={{ color: tabColor }}
                        onClick={() => goToProject(idx)}
                        role="tab"
                        aria-selected={isActive}
                        aria-label={`Switch to project ${proj.num}: ${proj.title}`}
                      >
                        <span className="ca-tab-sparkle">{isActive ? "✖" : "✦"}</span>
                        <span className="ca-tab-label">PROJECT {proj.num}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="ca-deck-cards-list">
                {projects.map((proj, idx) => {
                  const textPrimary = proj.theme === "yellow" ? "var(--ca-ink)" : "#ffffff";
                  const textSecondary = proj.theme === "yellow" ? "rgba(25, 21, 16, 0.85)" : "rgba(255, 255, 255, 0.9)";
                  const tagBg = proj.theme === "yellow" || proj.theme === "magenta" ? "#191510" : "#ffffff";
                  const tagColor = proj.theme === "yellow" || proj.theme === "magenta" ? "#ffffff" : "#191510";
                  const isCurrentActive = activeDeckTab === idx;

                  return (
                    <article
                      key={proj.id}
                      id={`project-card-${idx}`}
                      className={`ca-stack-card-slot slot-${idx} ${isCurrentActive ? "is-active" : ""}`}
                    >
                      <div
                        className={`ca-stack-card-body theme-${proj.theme}`}
                        style={{ color: textPrimary }}
                      >
                        <div className="ca-glass-sheen" aria-hidden="true" />

                        <div className="ca-stack-content-grid">
                          <div className="ca-stack-left-col">
                            <div>
                              <div className="ca-glass-date-pill">
                                <span className="ca-glass-date-dot" />
                                <span>{proj.date}</span>
                              </div>

                              <h2 className="ca-glass-title">{proj.title}</h2>

                              <p className="ca-glass-desc" style={{ color: textSecondary }}>
                                {proj.desc}
                              </p>

                              <button
                                type="button"
                                onClick={() => setSelectedProject(proj)}
                                className="ca-glass-view-btn"
                              >
                                <span>VIEW PROJECT</span>
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2.8"
                                  className="ca-arrow-icon"
                                  aria-hidden="true"
                                >
                                  <path d="M7 17 17 7M9 7h8v8" />
                                </svg>
                              </button>
                            </div>

                            <div className="ca-glass-tags-wrap">
                              {proj.tags.map((t) => (
                                <span
                                  key={t}
                                  className="ca-notched-tag"
                                  style={{
                                    backgroundColor: tagBg,
                                    color: tagColor,
                                  }}
                                >
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="ca-stack-right-col">
                            <div
                              className="ca-glass-photo-frame"
                              onClick={() => setSelectedProject(proj)}
                              title={`View ${proj.title} case study`}
                            >
                              <span className="ca-glass-tape top-left" />
                              <span className="ca-glass-tape top-right" />
                              <span className="ca-glass-tape bottom-left" />
                              <span className="ca-glass-tape bottom-right" />

                              <div className="ca-glass-photo-inner">
                                <img
                                  src={proj.image}
                                  alt={proj.title}
                                  className="ca-glass-photo-img"
                                  loading="eager"
                                  decoding="async"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
              <button
                onClick={() => navigateTo("case-studies")}
                className="ca-hero-cta ca-mono"
              >
                <span className="ca-cta-icon-box">✦</span>
                View All Case Studies &amp; Live Prototypes ↗
              </button>
            </div>
          </section> */}

          {/* ========================================================= */}
          {/* 02. WHAT I DO (Quick Capabilities Overview) */}
          {/* ========================================================= */}
          <section id="services" className="ca-section-block ca-grid">
            <div className="ca-section-inner-wide">
              <div className="ca-section-header-center">
                <span className="ca-postage-stamp stamp-yellow rot-neg2">
                  02 · WHAT I DO
                </span>
                <h2 className="ca-section-headline" data-grid-snap="">
                  Different Skills. One Creative Vision.
                </h2>
                <svg viewBox="0 0 64 12" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" className="ca-wavy-line" style={{ margin: "0.2rem auto 0.5rem" }} aria-hidden="true">
                  <path d="M3 4c18-3 40-3 58 0" />
                  <path d="M9 9c14-2.5 32-2.5 46 0" />
                </svg>
                <p className="ca-section-lead-desc" data-grid-snap="">
                  I combine full-stack engineering, cross-platform mobile development, and human-centered design to craft complete digital products that solve real problems.
                </p>
              </div>

              <div className="ca-universe-grid">
                <div className="ca-universe-card border-blue">
                  <div>
                    <div className="ca-universe-icon-badge" style={{ backgroundColor: "var(--ca-surface)" }}>
                      <img src="/emojis/web-dev.jpg" alt="Web Development" className="ca-emoji-img" />
                    </div>
                    <span className="ca-universe-tag ca-mono" style={{ backgroundColor: "var(--ca-blue)", color: "#ffffff" }}>
                      Full-Stack &amp; Web
                    </span>
                    <h3 className="ca-universe-card-title">Web Development</h3>
                    <p className="ca-universe-card-desc">
                      Modern, responsive websites and full-stack web applications built with React, Next.js, and scalable APIs.
                    </p>
                  </div>
                  <div style={{ marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1.5px dashed rgba(25,21,16,0.18)" }}>
                    <span className="ca-mono" style={{ fontSize: "0.74rem", fontWeight: "bold", opacity: 0.8 }}>
                      React · Next.js · Node · Laravel
                    </span>
                  </div>
                </div>

                <div className="ca-universe-card border-green">
                  <div>
                    <div className="ca-universe-icon-badge" style={{ backgroundColor: "var(--ca-surface)" }}>
                      <img src="/emojis/mobile-app.jpg" alt="Mobile App Development" className="ca-emoji-img" />
                    </div>
                    <span className="ca-universe-tag ca-mono" style={{ backgroundColor: "var(--ca-green)", color: "#ffffff" }}>
                      iOS &amp; Android
                    </span>
                    <h3 className="ca-universe-card-title">Mobile App Dev</h3>
                    <p className="ca-universe-card-desc">
                      Cross-platform mobile apps with intuitive UX, smooth navigation, and clean architecture using Flutter &amp; Firebase.
                    </p>
                  </div>
                  <div style={{ marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1.5px dashed rgba(25,21,16,0.18)" }}>
                    <span className="ca-mono" style={{ fontSize: "0.74rem", fontWeight: "bold", opacity: 0.8 }}>
                      Flutter · Dart · Firebase · BLoC
                    </span>
                  </div>
                </div>

                <div className="ca-universe-card border-yellow">
                  <div>
                    <div className="ca-universe-icon-badge" style={{ backgroundColor: "var(--ca-surface)" }}>
                      <img src="/emojis/uiux-design.jpg" alt="UI/UX Design" className="ca-emoji-img" />
                    </div>
                    <span className="ca-universe-tag ca-mono" style={{ backgroundColor: "var(--ca-yellow)", color: "var(--ca-ink)" }}>
                      Design Systems
                    </span>
                    <h3 className="ca-universe-card-title">UI/UX Design</h3>
                    <p className="ca-universe-card-desc">
                      User-centered wireframes, interactive prototypes, and component design systems crafted in Figma.
                    </p>
                  </div>
                  <div style={{ marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1.5px dashed rgba(25,21,16,0.18)" }}>
                    <span className="ca-mono" style={{ fontSize: "0.74rem", fontWeight: "bold", opacity: 0.8 }}>
                      Figma · Wireframes · Design Tokens
                    </span>
                  </div>
                </div>

                <div className="ca-universe-card border-magenta">
                  <div>
                    <div className="ca-universe-icon-badge" style={{ backgroundColor: "var(--ca-surface)" }}>
                      <img src="/emojis/brand-identity.jpg" alt="Brand Identity" className="ca-emoji-img" />
                    </div>
                    <span className="ca-universe-tag ca-mono" style={{ backgroundColor: "var(--ca-magenta)", color: "#ffffff" }}>
                      Visual Identity
                    </span>
                    <h3 className="ca-universe-card-title">Brand Identity</h3>
                    <p className="ca-universe-card-desc">
                      Distinctive logos, typography, color palettes, and comprehensive visual systems that build credibility.
                    </p>
                  </div>
                  <div style={{ marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1.5px dashed rgba(25,21,16,0.18)" }}>
                    <span className="ca-mono" style={{ fontSize: "0.74rem", fontWeight: "bold", opacity: 0.8 }}>
                      Brand Systems · Typography · Vectors
                    </span>
                  </div>
                </div>
              </div>

              <div style={{ textAlign: "center", marginTop: "2.25rem" }}>
                <button
                  onClick={() => navigateTo("services")}
                  className="ca-hero-cta ca-mono"
                >
                  <span className="ca-cta-icon-box">✦</span>
                  Explore Full Tech Stack, Process &amp; Active Builds ↗
                </button>
              </div>
            </div>
          </section>

          {/* ========================================================= */}
          {/* 03. LET'S CONNECT (Compact Call-To-Action) */}
          {/* ========================================================= */}
          <section id="contact" className="ca-contact-section">
            <div className="ca-contact-inner">
              <span className="ca-postage-stamp stamp-yellow rot-neg1" style={{ margin: "0.5rem auto 0.5rem" }}>
                03 · LET'S CONNECT
              </span>

              <h2 className="ca-display ca-contact-title" data-grid-snap="">HAVE AN IDEA? LET'S BUILD IT TOGETHER</h2>

              <p className="ca-hand ca-contact-sub" data-grid-snap="">
                Whether you need a modern website, a mobile application, a better user experience, or a distinctive brand identity, I&apos;m interested in exploring ideas and building useful digital solutions.
              </p>

              {/* 4 Social / Direct Connect Cards */}
              <div className="ca-connect-links-grid">
                <a href="mailto:purushothamkrishna07@gmail.com" className="ca-connect-link-card">
                  <span style={{ fontSize: "1.4rem" }}>✉️</span>
                  <span className="ca-connect-link-name">Email</span>
                  <span className="ca-connect-link-action">purushothamkrishna07@gmail.com</span>
                </a>
                <a href="https://github.com/Purushotham07" target="_blank" rel="noreferrer" className="ca-connect-link-card">
                  <span style={{ fontSize: "1.4rem" }}>💻</span>
                  <span className="ca-connect-link-name">GitHub</span>
                  <span className="ca-connect-link-action">@Purushotham07</span>
                </a>
                <a href="https://www.linkedin.com/in/purushotham-n-34603226a" target="_blank" rel="noreferrer" className="ca-connect-link-card">
                  <span style={{ fontSize: "1.4rem" }}>💼</span>
                  <span className="ca-connect-link-name">LinkedIn</span>
                  <span className="ca-connect-link-action">Purushotham N</span>
                </a>
                <a href="https://purushotham.vercel.app/" target="_blank" rel="noreferrer" className="ca-connect-link-card">
                  <span style={{ fontSize: "1.4rem" }}>🚀</span>
                  <span className="ca-connect-link-name">Portfolio</span>
                  <span className="ca-connect-link-action">purushotham.vercel.app</span>
                </a>
              </div>

              {/* Big Chunky Contact Banner Button */}
              <div
                className="ca-contact-banner"
                onClick={() => navigateTo("contact")}
                role="button"
                tabIndex={0}
              >
                <span className="ca-banner-tape left"></span>
                <span className="ca-banner-tape right"></span>

                <p className="ca-hand ca-banner-tagline">let&apos;s discuss your goals &amp; requirements</p>
                <span className="ca-display ca-banner-main">START A CONVERSATION</span>
                <span className="ca-banner-sub ca-mono">
                  purushothamkrishna07@gmail.com
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ width: "1rem", height: "1rem" }}>
                    <path d="M7 17 17 7M9 7h8v8" />
                  </svg>
                </span>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Official 09. FOOTER: Halftone Wordmark Interactive Footer (21st.dev Kedhareswer component) */}
      {currentPage !== "contact" && (
        <HalftoneWordmarkFooter
          showWordmark={true}
          wordmark="PURUSHOTHAM"
          brandTitle={heroName || "PURUSHOTHAM"}
          label={"FULL-STACK DEVELOPER · APP\nDEVELOPER · UI/UX DESIGNER"}
          meta={"Building modern websites & apps,\nand digital experiences."}
          email="purushothamkrishna07@gmail.com"
          columns={[
            {
              title: "Navigation",
              links: [
                { label: "Home", onClick: () => navigateTo("home") },
                { label: "About", onClick: () => navigateTo("about") },
                { label: "Services & Stack", onClick: () => navigateTo("services") },
                /* { label: "Case Studies", onClick: () => navigateTo("case-studies") }, */
                { label: "Playground", onClick: () => navigateTo("playground") },
                { label: "Contact", onClick: () => navigateTo("contact") },
              ],
            },
            /* {
              title: "Featured Works",
              links: [
                { label: "InviteStory", onClick: () => setSelectedProject(FEATURED_PROJECTS[0]) },
                { label: "GiftThem", onClick: () => setSelectedProject(FEATURED_PROJECTS[1]) },
                { label: "DrexxStudio", onClick: () => setSelectedProject(FEATURED_PROJECTS[2]) },
                { label: "Volt", onClick: () => setSelectedProject(FEATURED_PROJECTS[3]) },
              ],
            }, */
            {
              title: "Connect",
              links: [
                { label: "GitHub ↗", href: "https://github.com/Purushotham07", target: "_blank" },
                { label: "LinkedIn ↗", href: "https://www.linkedin.com/in/purushotham-n-34603226a", target: "_blank" },
                { label: "Portfolio ↗", href: "https://purushotham.vercel.app/", target: "_blank" },
                { label: "Email ↗", href: "mailto:purushothamkrishna07@gmail.com" },
              ],
            },
          ]}
          palette={{
            background: "#fdfdfb",
            ink: "#191510",
            warm: "#f59e0b",
          }}
          dotGap={5}
          radius={85}
          backToTop={true}
        />
      )}

      {/* ========================================================= */}
      {/* CASE STUDY DETAIL MODAL */}
      {/* ========================================================= */}
      {selectedProject && (
        <div className="ca-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="ca-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="ca-modal-close" onClick={() => setSelectedProject(null)}>
              ✕
            </button>

            <div className="ca-mono" style={{ fontSize: "0.8rem", color: "var(--ca-blue)", fontWeight: "bold", textTransform: "uppercase" }}>
              Project {selectedProject.num} · {selectedProject.date}
            </div>

            <h2 style={{ fontFamily: "var(--font-artsy-sans), 'Inter', sans-serif", fontSize: "2.6rem", fontWeight: 800, letterSpacing: "-0.03em", margin: "0.4rem 0 0.6rem", color: "var(--ca-ink)" }}>
              {selectedProject.title}
            </h2>

            <p style={{ fontSize: "1.1rem", marginBottom: "1rem", color: "rgba(25,21,16,0.85)" }}>
              {selectedProject.desc}
            </p>

            <div style={{ borderRadius: "0.5rem", overflow: "hidden", marginBottom: "1.25rem", border: "2px solid var(--ca-ink)" }}>
              <img src={selectedProject.image} alt={selectedProject.title} style={{ width: "100%", height: "200px", objectFit: "cover" }} />
            </div>

            <div style={{ background: "var(--ca-yellow-soft)", padding: "1rem", borderRadius: "0.5rem", marginBottom: "1rem", border: "1.5px solid var(--ca-ink)" }}>
              <div className="ca-mono" style={{ fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase" }}>
                Overview &amp; Scope
              </div>
              <p style={{ marginTop: "0.25rem", fontSize: "0.95rem" }}>{selectedProject.overview}</p>
            </div>

            <div style={{ background: "var(--ca-mint)", padding: "1rem", borderRadius: "0.5rem", border: "1.5px solid var(--ca-ink)" }}>
              <div className="ca-mono" style={{ fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase" }}>
                Key Impact &amp; Metrics
              </div>
              <p style={{ marginTop: "0.25rem", fontSize: "0.95rem", fontWeight: "bold" }}>{selectedProject.impact}</p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* CONTACT MESSAGE MODAL */}
      {/* ========================================================= */}
      {contactModalOpen && (
        <div className="ca-modal-overlay" onClick={() => setContactModalOpen(false)}>
          <div className="ca-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="ca-modal-close" onClick={() => setContactModalOpen(false)}>
              ✕
            </button>

            <div className="ca-hand" style={{ fontSize: "2rem" }}>say hello!</div>
            <h3 className="ca-display" style={{ fontSize: "2.5rem", margin: "0.25rem 0 1rem" }}>DROP A LINE</h3>

            {contactForm.sent ? (
              <div style={{ background: "var(--ca-mint)", padding: "1.5rem", borderRadius: "0.5rem", border: "2px solid var(--ca-ink)", textAlign: "center" }}>
                <div style={{ fontSize: "2rem" }}>🎉</div>
                <h4 className="ca-mono" style={{ fontWeight: "bold", marginTop: "0.5rem" }}>Message Sent!</h4>
                <p style={{ marginTop: "0.5rem" }}>Thanks for reaching out! I'll get back to you within 24 hours.</p>
                <button
                  onClick={() => {
                    setContactForm({ name: "", email: "", message: "", sent: false });
                    setContactModalOpen(false);
                  }}
                  className="ca-hero-cta ca-mono"
                  style={{ marginTop: "1rem", padding: "0.4rem 1rem", fontSize: "0.8rem" }}
                >
                  Close
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactForm((f) => ({ ...f, sent: true }));
                }}
                style={{ display: "flex", flexDirection: "column", gap: "0.85rem" }}
              >
                <div>
                  <label className="ca-mono" style={{ fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", display: "block", marginBottom: "0.25rem" }}>
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    placeholder="Jane Doe"
                    style={{ width: "100%", padding: "0.6rem", border: "2px solid var(--ca-ink)", borderRadius: "4px", outline: "none", fontSize: "0.95rem" }}
                  />
                </div>

                <div>
                  <label className="ca-mono" style={{ fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", display: "block", marginBottom: "0.25rem" }}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    placeholder="jane@example.com"
                    style={{ width: "100%", padding: "0.6rem", border: "2px solid var(--ca-ink)", borderRadius: "4px", outline: "none", fontSize: "0.95rem" }}
                  />
                </div>

                <div>
                  <label className="ca-mono" style={{ fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", display: "block", marginBottom: "0.25rem" }}>
                    Message / Project Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Tell me about your product or idea..."
                    style={{ width: "100%", padding: "0.6rem", border: "2px solid var(--ca-ink)", borderRadius: "4px", outline: "none", fontSize: "0.95rem", resize: "none" }}
                  />
                </div>

                <button type="submit" className="ca-hero-cta ca-mono" style={{ alignSelf: "flex-start", marginTop: "0.5rem" }}>
                  Send Message ↗
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
