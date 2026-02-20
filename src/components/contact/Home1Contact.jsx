import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { sendLead } from "@/lib/leadClient";
import {
  isLeadAllowed,
  markLeadSubmitted,
} from "@/lib/leadRateLimitClient";

function normalizePhone(raw = "") {
  const trimmed = String(raw).trim();
  const hasLeadingPlus = trimmed.startsWith("+");
  const digits = trimmed.replace(/\D/g, "").slice(0, 15);
  return `${hasLeadingPlus ? "+" : ""}${digits}`;
}

const Home1Contact = () => {
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    email: "",
    subject: "",
  });
  const [captchaToken, setCaptchaToken] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      setForm((prev) => ({ ...prev, phone: normalizePhone(value) }));
      return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError(null);
    setSubmitted(false);

    if (!isLeadAllowed("sw:contact")) {
      setError(null);
      setSubmitted(true);
      return;
    }

    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (siteKey && !captchaToken) {
      setError("Please verify reCAPTCHA to submit.");
      return;
    }

    try {
      setSubmitting(true);
      await sendLead({
        name: form.fullName,
        phone: form.phone,
        email: form.email,
        subject: form.subject,
        page: typeof window !== "undefined" ? window.location.pathname : "",
      });

      markLeadSubmitted("sw:contact");
      setSubmitted(true);
      setForm({
        fullName: "",
        phone: "",
        email: "",
        subject: "",
      });
      setCaptchaToken(null);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="contact-section">
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-5">
              <div className="contact-content">
                <div
                  className="section-title white wow animate fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="500ms"
                >
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                    >
                      <g>
                        <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
                      </g>
                    </svg>
                    Drop Us a Line
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 14 14"
                    >
                      <g>
                        <path d="M6.6304 0.338424C6.67018 -0.112811 7.32982 -0.112807 7.3696 0.338428L7.72654 4.38625C7.75291 4.68505 8.10454 4.83069 8.33443 4.63804L11.4491 2.02821C11.7963 1.73728 12.2627 2.20368 11.9718 2.55089L9.36197 5.66556C9.1693 5.89546 9.31496 6.24709 9.61374 6.27346L13.6615 6.6304C14.1128 6.67018 14.1128 7.32982 13.6615 7.3696L9.61374 7.72654C9.31496 7.75291 9.1693 8.10454 9.36197 8.33443L11.9718 11.4491C12.2627 11.7963 11.7963 12.2627 11.4491 11.9718L8.33443 9.36197C8.10454 9.1693 7.75291 9.31496 7.72654 9.61374L7.3696 13.6615C7.32982 14.1128 6.67018 14.1128 6.6304 13.6615L6.27346 9.61374C6.24709 9.31496 5.89546 9.1693 5.66556 9.36197L2.55089 11.9718C2.20368 12.2627 1.73729 11.7963 2.02822 11.4491L4.63804 8.33443C4.83069 8.10454 4.68504 7.75291 4.38625 7.72654L0.338424 7.3696C-0.112811 7.32982 -0.112807 6.67018 0.338428 6.6304L4.38625 6.27346C4.68505 6.24709 4.83069 5.89546 4.63804 5.66556L2.02821 2.55089C1.73728 2.20368 2.20368 1.73729 2.55089 2.02822L5.66556 4.63804C5.89546 4.83069 6.24709 4.68504 6.27346 4.38625L6.6304 0.338424Z" />
                      </g>
                    </svg>
                  </span>
                  <h2>Your Journey Starts with Scalify</h2>
                  <p>
                    Ready to unlock new opportunities, turn goals into achievements, and drive innovation forward?
                    Let's connect — we're here to partner with your vision and make it happen.
                  </p>
                </div>

                <div
                  className="contact-area wow animate fadeInUp"
                  data-wow-delay="300ms"
                  data-wow-duration="1000ms"
                >
                  <div className="hotline-area mb-40">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={28}
                        height={28}
                        viewBox="0 0 28 28"
                      >
                        <path d="M27.2653 21.5995L21.598 17.8201C20.8788 17.3443 19.9147 17.5009 19.383 18.1798L17.7322 20.3024C17.6296 20.4377 17.4816 20.5314 17.3154 20.5664C17.1492 20.6014 16.9759 20.5752 16.8275 20.4928L16.5134 20.3196C15.4725 19.7522 14.1772 19.0458 11.5675 16.4352C8.95784 13.8246 8.25001 12.5284 7.6826 11.4893L7.51042 11.1753C7.42683 11.0269 7.39968 10.8532 7.43398 10.6864C7.46827 10.5195 7.56169 10.3707 7.69704 10.2673L9.81816 8.61693C10.4968 8.08517 10.6536 7.1214 10.1784 6.40198L6.39895 0.734676C5.91192 0.00208106 4.9348 -0.21784 4.18082 0.235398L1.81096 1.65898C1.06634 2.09672 0.520053 2.80571 0.286612 3.63733C-0.56677 6.74673 0.0752209 12.1131 7.98033 20.0191C14.2687 26.307 18.9501 27.9979 22.1677 27.9979C22.9083 28.0011 23.6459 27.9048 24.3608 27.7115C25.1925 27.4783 25.9016 26.932 26.3391 26.1871L27.7641 23.8187C28.218 23.0645 27.9982 22.0868 27.2653 21.5995Z" />
                      </svg>
                    </div>
                    <div className="content">
                      <span>To More Inquiry</span>
                      <h6>
                        <a href="tel:+990737621432">+91-8222822708</a>
                      </h6>
                    </div>
                  </div>

                  <div className="hotline-area">
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={26}
                        height={26}
                        viewBox="0 0 26 26"
                      >
                        <path d="M13.5367 14.7299C12.5654 14.7253 11.6005 14.573 10.675 14.2784C9.94863 14.0353 9.29972 13.6039 8.79454 13.0282C8.28935 12.4524 7.94598 11.7529 7.79946 11.0011C7.47317 9.42986 8.06813 7.76849 9.43051 6.44251C9.57687 6.30005 9.72894 6.16358 9.88637 6.03345C10.5736 5.45807 11.3905 5.05858 12.2666 4.86946C13.1428 4.68035 14.0517 4.70729 14.9151 4.94797C15.7431 5.21236 16.469 5.72653 16.9932 6.4199C17.5174 7.11328 17.8141 7.95188 17.8427 8.82061C17.9062 9.84533 17.5722 10.8551 16.9102 11.6398C16.773 10.4541 17.0306 9.66472 16.9782 8.86481Z" />
                        <path d="M24.6996 26.0015H1.29998C0.955309 26.0011 0.624854 25.864 0.381135 25.6203C0.137416 25.3766 0.000344239 25.0462 8.47364e-08 24.7015V8.66841C-5.14206e-05 8.58603 0.023378 8.50535 0.0675423 8.43581C0.111707 8.36628 0.174776 8.31077 0.249359 8.2758L11.3428 17.1716C11.8091 17.5569 12.3952 17.7677 13.0002 17.7677C13.6052 17.7677 14.1913 17.5569 14.6577 17.1716L25.9996 8.66841V24.7015C25.9992 25.0462 25.8622 25.3766 25.6184 25.6203C25.3747 25.864 25.0443 26.0011 24.6996 26.0015Z" />
                        <path d="M21.6668 12.3427C21.5518 12.3427 21.4416 12.2971 21.3604 12.2158C21.2791 12.1346 21.2334 12.0243 21.2334 11.9094V3.03836H4.76704V11.9094C4.76704 12.0243 4.72139 12.1346 4.64013 12.2158C4.55886 12.2971 4.44864 12.3427 4.33372 12.3427C4.21879 12.3427 4.10857 12.2971 4.02731 12.2158C3.94604 12.1346 3.90039 12.0243 3.90039 11.9094V3.03489C3.9072 2.79889 4.00723 2.57519 4.17859 2.41276C4.34994 2.25033 4.57867 2.16241 4.81471 2.16824H21.1858C21.4218 2.16241 21.6505 2.25033 21.8219 2.41276C21.9933 2.57519 22.0933 2.79889 22.1001 3.03489V11.9094C22.1001 12.0243 22.0544 12.1346 21.9732 12.2158C21.8919 12.2971 21.7817 12.3427 21.6668 12.3427Z" />
                      </svg>
                    </div>
                    <div className="content">
                      <span>To Send Mail</span>
                      <h6>
                        <a href="mailto:sales@scalifysolutions.com">sales@scalifysolutions.com</a>
                      </h6>
                    </div>
                  </div>
                </div>

                {/* <div
                  className="social-area wow animate fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <h6>Social Just You Connected Us!</h6>
                  <ul className="social-list">
                    <li>
                      <a href="https://www.linkedin.com/">
                        <i className="bi bi-linkedin" />
                        <span>LinkedIn</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/">
                        <i className="bi bi-facebook" />
                        <span>Facebook</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://twitter.com/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={18}
                          height={18}
                          fill="currentColor"
                          className="bi bi-twitter-x"
                          viewBox="0 0 16 16"
                        >
                          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865l8.875 11.633Z" />
                        </svg>
                        <span>Twitter</span>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/">
                        <i className="bi bi-instagram" />
                        <span>Instagram</span>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>

            <div
              className="col-lg-7 wow animate fadeInUp"
              data-wow-delay="200ms"
              data-wow-duration="1500ms"
            >
              <div className="contact-form-wrap">
                <div className="contact-form-area">
                  <h3>Your Success Starts Here!</h3>

                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6 mb-20">
                        <div className="form-inner">
                          <label>Full Name</label>
                          <input
                            type="text"
                            name="fullName"
                            value={form.fullName}
                            onChange={handleChange}
                            placeholder="Enter your full name"
                            required
                            autoComplete="name"
                            minLength={2}
                            maxLength={80}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 mb-20">
                        <div className="form-inner">
                          <label>Phone *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            placeholder="Enter phone number"
                            required
                            inputMode="tel"
                            autoComplete="tel"
                            pattern="^[+]?[0-9]{10,15}$"
                            title="Enter a valid phone number (10 digits, or include country code)"
                            maxLength={16}
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 mb-20">
                        <div className="form-inner">
                          <label>Email *</label>
                          <input
                            type="email"
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Enter email"
                            required
                            autoComplete="email"
                            maxLength={254}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 mb-20">
                        <div className="form-inner">
                          <label>Your Subject *</label>
                          <input
                            type="text"
                            name="subject"
                            value={form.subject}
                            onChange={handleChange}
                            placeholder="Enter subject"
                            required
                            minLength={2}
                            maxLength={120}
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 mt-20">
                        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ? (
                          <div
                            className="sw-recaptcha-outer"
                            style={{
                              display: "flex",
                              justifyContent: "flex-start",
                            }}
                          >
                            <div className="sw-recaptcha-inner">
                              <ReCAPTCHA
                                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                                onChange={(token) => setCaptchaToken(token)}
                              />
                            </div>
                          </div>
                        ) : (
                          <p style={{ textAlign: "center", fontSize: 12, opacity: 0.8 }}>
                            reCAPTCHA not configured (set{" "}
                            <strong>NEXT_PUBLIC_RECAPTCHA_SITE_KEY</strong>).
                          </p>
                        )}
                      </div>

                      <div className="col-lg-12 mt-10">
                        {error ? (
                          <p style={{ textAlign: "center", fontSize: 12, color: "#dc2626" }}>
                            {error}
                          </p>
                        ) : null}
                        {submitted ? (
                          <p style={{ textAlign: "center", fontSize: 12, color: "#16a34a" }}>
                            You have already submitted the query. Our team member will contact you shortly.
                          </p>
                        ) : null}
                      </div>

                      <div className="col-lg-12 mb-20">
                        <div className="form-inner" style={{ marginTop: 10 }}>
                          <button
                            className="primary-btn2"
                            type="submit"
                            data-text="Submit Now"
                            disabled={submitting}
                          >
                            <span>{submitting ? "Submitting..." : "Submit Now"}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Contact;
