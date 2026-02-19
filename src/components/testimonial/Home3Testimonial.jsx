"use client";
import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import Link from "next/link";

SwiperCore.use([Autoplay, EffectFade, Navigation, Pagination]);

const Home3Testimonial = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 30,
      // autoplay: {
      // 	delay: 2500, // Autoplay duration in milliseconds
      // 	disableOnInteraction: false,
      // },
      pagination: {
        el: ".franctional-pagi2",
        type: "fraction",
      },
      navigation: {
        nextEl: ".home3-testimonial-next",
        prevEl: ".home3-testimonial-prev",
      },
      breakpoints: {
        280: { slidesPerView: 1 },
        386: { slidesPerView: 1 },
        576: { slidesPerView: 1, spaceBetween: 15 },
        768: { slidesPerView: 2, spaceBetween: 15 },
        992: { slidesPerView: 2, spaceBetween: 20 },
        1200: { slidesPerView: 3, spaceBetween: 15 },
        1400: { slidesPerView: 3 },
      },
    };
  }, []);

  // ✅ All testimonials as data (no repeated markup)
  // ✅ First 3 are from screenshot (kept as visible with ...)
  const testimonials = useMemo(
    () => [

      {
        name: "Mr. Ashutosh Panwar",
        title: "Dy. Director",
        company: "FICCI, NEW-DELHI",
        text:
          "Hi, I am Mr. Ashutosh Panwar (Dy. Director) FICCI. I have been working with Scalify Solutions since a very long time and Our team is very much satisfied with Scalify Solutions team. Our all-Development work handle by this company.",
        rating: 5,
      },
      {
        name: "Harish",
        title: "CEO",
        company: "Squbesoftsol",
        text:
          "Scalify Solutions has been an excellent development partner for us. We have developed 3+ websites till now which includes so much AI related work and a dating app. The team is professional, responsive, and always delivers quality output on time.",
        rating: 5,
      },
      {
        name: "Shubham Kumar",
        title: "CEO",
        company: "EJI Travel Solutions",
        text:
          "Scalify Solutions has helped us with a lot of design-related work and our website. Their UI/UX understanding is strong and delivery has been consistent. Communication was smooth and the final output quality was excellent.",
        rating: 5,
      },
      {
        name: "Lalit Malhotra",
        title: "Sales Head",
        company: "Udanchoo",
        text:
          "Scalify Solutions developed the complete travel website booking engine for us. Everything was delivered professionally with good performance and clean user flow. Their support and understanding of travel requirements was really good.",
        rating: 5,
      },
      {
        name: "Lakshay",
        title: "Manager",
        company: "PUMA",
        text:
          "We have done so much work with Scalify Solutions including video editing and design related work. The team is creative, fast, and maintains professionalism. Great experience working with them.",
        rating: 5,
      },
      {
        name: "Irfan",
        title: "Company Head",
        company: "UFFF",
        text:
          "Scalify Solutions built our complete eCommerce solution which is running in Kuwait. We are working along with them continuously and their support has been excellent. The system is stable, scalable, and the team is always available whenever required.",
        rating: 5,
      },
      {
        name: "Deepak Chopra",
        title: "Director",
        company: "Birth Astro",
        text:
          "I am Deepak Chopra, Director at Birth Astro. Scalify Solutions has provided excellent digital and technical support with a high level of professionalism. Their team is knowledgeable, responsive, and committed to delivering quality results. We truly appreciate their approach and dedic...",
        rating: 5,
      },
      {
        name: "Mr. Amit Kumar",
        title: "",
        company: "TAFCON PROJECTS INDIA PVT. LTD.",
        text:
          "Scalify Solutions has a very experienced Designing & Development Team. All person is very co-operative nature and always give us a better response as well services. We are working with this company since last 3 years. This team has developed many websites for us, and all is outstandi...",
        rating: 5,
      },
    ],
    []
  );

  return (
    <>
      <div className="home3-testimonial-section mb-110">
        <div className="container-fluid">
          <div className="row justify-content-center mb-60">
            <div className="col-lg-8">
              <div
                className="section-title text-center wow animate fadeInDown"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                    <g>
                      <circle cx={5} cy={5} r={5} />
                    </g>
                  </svg>
                  Voices of Confidence
                  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                    <g>
                      <circle cx={5} cy={5} r={5} />
                    </g>
                  </svg>
                </span>
                <h2>Hear What Our Clients Say</h2>
                <p>
                  At Scalify, we blend innovation with strategy to deliver impactful digital solutions that drive real growth.
                  Our work has helped businesses scale smarter, elevate their online presence, and achieve long-term success.
                  Don't just take our word for it — hear how our clients transformed their digital journey with us.
                </p>
              </div>
            </div>
          </div>

          <div
            className="testimonial-wrap wow animate fadeInUp"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="row">
              <div className="col-lg-12">
                <Swiper {...settings} className="swiper home3-testimonial-slider">
                  <div className="swiper-wrapper">
                    {testimonials.map((t, idx) => (
                      <SwiperSlide className="swiper-slide" key={`${t.name}-${idx}`}>
                        <div className="testimonial-card3">
                          <div className="author-area">
                            <div className="author-img">
                              {/* ✅ user image <img> removed as requested */}
                            </div>
                            <div className="content">
                              <h6>{t.name}</h6>
                              <span>
                                {t.title ? `${t.title} at ` : ""}
                                {t.company}
                              </span>
                            </div>
                          </div>

                          <p>“{t.text}”</p>

                          <div className="logo-and-rating">
                            <div className="logo">
                              {/* ✅ google icon <img> removed as requested */}
                            </div>
                            <ul className="rating">
                              {Array.from({ length: t.rating || 5 }).map((_, i) => (
                                <li key={i}>
                                  <i className="bi bi-star-fill" />
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div
            className="row justify-content-end wow animate fadeInUp"
            data-wow-delay="600ms"
            data-wow-duration="1500ms"
          >
            <div className="col-md-6">
              <div className="slider-btn-and-pagination-wrap">
                <div className="franctional-pagi2" />
                <div className="slider-btn-group">
                  <div className="slider-btn home3-testimonial-prev">
                    <svg xmlns="http://www.w3.org/2000/svg" width={15} height={11} viewBox="0 0 15 11">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.416666 5.9668H15V4.7168H0.416666V5.9668Z" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.04115 4.7168C3.98115 4.7168 6.38281 7.3018 6.38281 10.0585V10.6835H5.13281V10.0585C5.13281 7.96596 3.26448 5.9668 1.04115 5.9668H0.416979V4.7168H1.04115Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z"
                      />
                    </svg>
                  </div>

                  <div className="slider-btn home3-testimonial-next">
                    <svg xmlns="http://www.w3.org/2000/svg" width={15} height={11} viewBox="0 0 15 11">
                      <path fillRule="evenodd" clipRule="evenodd" d="M14.5833 5.9668H0V4.7168H14.5833V5.9668Z" />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9589 4.7168C11.0189 4.7168 8.61719 7.3018 8.61719 10.0585V10.6835H9.86719V10.0585C9.86719 7.96596 11.7355 5.9668 13.9589 5.9668H14.583V4.7168H13.9589Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9589 5.96667C11.0189 5.96667 8.61719 3.38167 8.61719 0.625V0H9.86719V0.625C9.86719 2.71833 11.7355 4.71667 13.9589 4.71667H14.583V5.96667H13.9589Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home3Testimonial;
