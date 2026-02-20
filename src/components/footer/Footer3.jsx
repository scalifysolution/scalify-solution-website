import Link from "next/link";
import React, { useState } from "react";
import { SERVICES } from "@/data/common";
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

const Footer3 = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Request a Call",
  });
  const [captchaToken, setCaptchaToken] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleGetCallSubmit = async (e) => {
    e.preventDefault();

    setError(null);
    setSubmitted(false);

    if (!isLeadAllowed("sw:footer-call")) {
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
        name: form.name,
        phone: form.phone,
        email: form.email,
        subject: form.subject,
        message: "Call request from footer form",
        page: typeof window !== "undefined" ? window.location.pathname : "",
      });
      markLeadSubmitted("sw:footer-call");
      setSubmitted(true);
      setForm({ name: "", phone: "", email: "", subject: "Request a Call" });
      setCaptchaToken(null);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <footer className="footer-section style-3">
        <div className="container">
          <div className="footer-top">
            <div className="row g-lg-4 gy-5 justify-content-center">
              <div className="col-lg-4 col-md-8 col-sm-6">
                <div className="footer-widget">
                  <div className="footer-logo">
                    <Link href="/">
                      <img src="/assets/logo/logo_white.svg" alt="" />
                    </Link>
                  </div>
                  <div className="content">
                    <p>
                      Welcome to Scalify, where innovation meets our passion in a
                      journey that started with a simple idea and a shared
                      dream.
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-md-4 col-sm-6 d-flex justify-content-lg-center justify-content-sm-end">
                <div className="footer-widget">
                  <div className="widget-title">
                    <h4>Services</h4>
                  </div>
                  <div className="menu-container">
                    <ul className="widget-list">
                      {SERVICES.slice(0, 8).map((service) => {
                        return (
                          <li key={service.link || service.label}>
                            <a href={service.link}>{service.label}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-2 col-sm-6 d-flex justify-content-lg-center justify-content-sm-start">
                <div className="footer-widget">
                  <div className="widget-title">
                    <h4></h4>
                  </div>
                  <div className="menu-container">
                    <ul className="widget-list">
                      {SERVICES.slice(8, 13).map((service) => {
                        return (
                          <li key={service.link || service.label}>
                            <a href={service.link}>{service.label}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-sm-6 d-flex justify-content-lg-end justify-content-sm-end">
                <div className="footer-widget">
                  <div className="subscribe-area mb-50">
                    <h4>Get a Call ?</h4>

                    <form
                      className="subscribe-form-wrap"
                      onSubmit={handleGetCallSubmit}
                    >
                      <div
                        className="subscribe-form"
                        style={{ gap: 10, flexDirection: "column", alignItems: "stretch" }}
                      >
                        <input
                          type="text"
                          placeholder="Name"
                          value={form.name}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, name: e.target.value }))
                          }
                          required
                          autoComplete="name"
                          minLength={2}
                          maxLength={80}
                        />
                        <input
                          type="tel"
                          placeholder="Phone"
                          value={form.phone}
                          onChange={(e) =>
                            setForm((p) => ({
                              ...p,
                              phone: normalizePhone(e.target.value),
                            }))
                          }
                          required
                          inputMode="tel"
                          autoComplete="tel"
                          pattern="^[+]?[0-9]{10,15}$"
                          title="Enter a valid phone number (10 digits, or include country code)"
                          maxLength={16}
                        />
                        <input
                          type="email"
                          placeholder="Email"
                          value={form.email}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, email: e.target.value }))
                          }
                          required
                          autoComplete="email"
                          maxLength={254}
                        />
                        <input
                          type="text"
                          placeholder="Subject"
                          value={form.subject}
                          onChange={(e) =>
                            setForm((p) => ({ ...p, subject: e.target.value }))
                          }
                          required
                          minLength={2}
                          maxLength={120}
                        />

                        {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ? (
                          <div
                            style={{
                              gridColumn: "1 / -1",
                              width: "100%",
                              maxWidth: "100%",
                              overflow: "hidden",
                              display: "flex",
                              justifyContent: "flex-start",
                            }}
                          >
                            <ReCAPTCHA
                              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                              onChange={(token) => setCaptchaToken(token)}
                            />
                          </div>
                        ) : (
                          <p
                            style={{
                              gridColumn: "1 / -1",
                              textAlign: "center",
                              fontSize: 12,
                              opacity: 0.8,
                            }}
                          >
                            reCAPTCHA not configured (set{" "}
                            <strong>NEXT_PUBLIC_RECAPTCHA_SITE_KEY</strong>).
                          </p>
                        )}

                        {error ? (
                          <p
                            style={{
                              gridColumn: "1 / -1",
                              textAlign: "center",
                              fontSize: 12,
                              color: "#dc2626",
                            }}
                          >
                            {error}
                          </p>
                        ) : null}
                        {submitted ? (
                          <p
                            style={{
                              gridColumn: "1 / -1",
                              textAlign: "center",
                              fontSize: 12,
                              color: "#16a34a",
                            }}
                          >
                            You have already submitted the query. Our team member will contact you shortly.
                          </p>
                        ) : null}

                        <button
                          type="submit"
                          aria-label="Submit call request"
                          disabled={submitting}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={16}
                            height={16}
                            viewBox="0 0 16 16"
                          >
                            <path d="M15.9647 0.685806C16.0011 0.594942 16.01 0.495402 15.9904 0.399526C15.9707 0.303649 15.9233 0.215653 15.8541 0.146447C15.7849 0.0772403 15.6969 0.0298668 15.601 0.0101994C15.5052 -0.0094681 15.4056 -0.000564594 15.3147 0.0358061L0.76775 5.85481H0.76675L0.31475 6.03481C0.22914 6.06895 0.154635 6.1261 0.0994654 6.19994C0.0442956 6.27377 0.0106078 6.36142 0.00212322 6.4532C-0.00636132 6.54497 0.0106876 6.63731 0.0513867 6.72001C0.0920859 6.8027 0.154851 6.87254 0.23275 6.92181L0.64275 7.18181L0.64375 7.18381L5.63875 10.3618L8.81675 15.3568L8.81875 15.3588L9.07875 15.7688C9.12817 15.8464 9.19805 15.9089 9.28068 15.9493C9.36332 15.9897 9.45551 16.0066 9.54711 15.998C9.63871 15.9894 9.72617 15.9558 9.79985 15.9007C9.87354 15.8456 9.9306 15.7712 9.96475 15.6858L15.9647 0.685806ZM14.1317 2.57581L6.63775 10.0698L6.42275 9.73181C6.38336 9.66978 6.33078 9.6172 6.26875 9.57781L5.93075 9.36281L13.4247 1.86881L14.6027 1.39781L14.1327 2.57581H14.1317Z" />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Social area is commented in your code - kept as-is */}
                </div>
              </div>
            </div>
          </div>

          <div className="contact-area">
            <div className="hotline-area">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={33}
                  height={33}
                  viewBox="0 0 33 33"
                >
                  <g>
                    <path d="M26.0803 20.4417C25.4047 19.7383 24.5898 19.3622 23.7262 19.3622C22.8695 19.3622 22.0477 19.7313 21.3442 20.4348L19.1433 22.6287C18.9622 22.5312 18.7811 22.4407 18.607 22.3501C18.3563 22.2248 18.1195 22.1063 17.9175 21.981C15.8559 20.6716 13.9823 18.9652 12.1854 16.7573C11.3148 15.6569 10.7297 14.7305 10.3049 13.7903C10.876 13.2679 11.4053 12.7247 11.9207 12.2023C12.1157 12.0073 12.3108 11.8053 12.5058 11.6103C13.9684 10.1477 13.9684 8.25321 12.5058 6.79058L10.6044 4.88917C10.3885 4.67326 10.1656 4.45038 9.95664 4.22751C9.53874 3.79569 9.09996 3.34993 8.64724 2.93204C7.97165 2.26341 7.16372 1.9082 6.31401 1.9082C5.46429 1.9082 4.64244 2.26341 3.94595 2.93204C3.93899 2.939 3.93899 2.939 3.93202 2.94597L1.56396 5.33492C0.672459 6.22643 0.164023 7.31295 0.0525852 8.57359C-0.114572 10.6073 0.484407 12.5018 0.944089 13.7415C2.0724 16.7852 3.7579 19.606 6.27222 22.6287C9.32283 26.2713 12.9933 29.1478 17.1862 31.1746C18.7881 31.9338 20.9263 32.8323 23.3153 32.9855C23.4615 32.9924 23.6148 32.9994 23.7541 32.9994C25.3629 32.9994 26.7141 32.4213 27.7728 31.2721C27.7798 31.2582 27.7937 31.2512 27.8006 31.2373C28.1628 30.7985 28.5807 30.4015 29.0195 29.9767C29.319 29.6911 29.6254 29.3916 29.9249 29.0782C30.6145 28.3608 30.9766 27.525 30.9766 26.6683C30.9766 25.8047 30.6075 24.9759 29.904 24.2794L26.0803 20.4417Z" />
                  </g>
                </svg>
              </div>
              <div className="content">
                <span>Call Any Time</span>
                <h6>
                  <a href="tel:+91-8222822708">+91-8222822708</a>
                </h6>
              </div>
            </div>

            <div className="hotline-area">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={33}
                  height={33}
                  viewBox="0 0 33 33"
                >
                  <g>
                    <path d="M16.4999 0C9.77802 0 4.30957 5.46845 4.30957 12.1904C4.30957 14.4033 5.30201 16.7832 5.3436 16.8836C5.66413 17.6445 6.2966 18.8262 6.75266 19.5189L15.1109 32.1832C15.453 32.7024 15.9592 33 16.4999 33C17.0406 33 17.5469 32.7024 17.8889 32.184L26.2479 19.5189C26.7047 18.8262 27.3364 17.6445 27.657 16.8836C27.6986 16.784 28.6903 14.404 28.6903 12.1904C28.6903 5.46845 23.2218 0 16.4999 0Z" />
                  </g>
                </svg>
              </div>
              <div className="content">
                <span>Address</span>
                <h6>
                  <a href="https://www.google.com/maps/search/?api=1&query=Office%20No.%205%20Supermax%20Galleria%2C%20Sec.%2033%2C%20Rathdhana%2C%20Sonipat%2C%20Haryana">
                    Office No. 5 Supermax Galleria, Sec. 33, Rathdhana, Sonipat,
                    Haryana
                  </a>
                </h6>
              </div>
            </div>

            <div className="hotline-area">
              <div className="icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={33}
                  height={33}
                  viewBox="0 0 33 33"
                >
                  <g>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M32.9891 1.18398C33.0171 0.995671 32.9925 0.803292 32.918 0.628097C32.8435 0.452902 32.722 0.301711 32.567 0.191227C32.4121 0.0808885 32.2296 0.0155543 32.0399 0.00245033C31.8501 -0.0106536 31.6604 0.0289832 31.4918 0.116977L0.554265 16.2732C0.376261 16.3673 0.229594 16.5113 0.132265 16.6876C0.0349358 16.8638 -0.00882138 17.0646 0.00636356 17.2654C0.0215485 17.4662 0.0950149 17.6581 0.217747 17.8177C0.340478 17.9773 0.507135 18.0976 0.697265 18.1639L9.29789 21.1036L27.6143 5.44235L13.4408 22.5185L27.8549 27.4451C27.9979 27.4932 28.1497 27.5094 28.2997 27.4926C28.4496 27.4758 28.5941 27.4265 28.723 27.348C28.8519 27.2696 28.962 27.1639 29.0458 27.0384C29.1296 26.9129 29.1849 26.7706 29.2079 26.6215L32.9891 1.18398Z"
                    />
                  </g>
                </svg>
              </div>
              <div className="content">
                <span>Say Hello</span>
                <h6>
                  <a href="mailto:sales@scalifysolutions.com">
                    sales@scalifysolutions.com
                  </a>
                </h6>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="copyright-area">
              <p>
                © 2026 <a href="#">Scalify Solutions</a>. All rights reserved.
              </p>
            </div>

            {/* UPDATED: Link to actual pages */}
            <div className="footer-bottom-right">
              <ul>
                <li>
                  <Link href="/support-policy">Support Policy</Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
};

export default Footer3;
