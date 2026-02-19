"use client";
import React, { useMemo } from "react";
import MainLayout from "@/components/layout/MainLayout";
import CountUp from "react-countup";
import Home5whyChoose from "@/components/why-choose/Home5whyChoose";

const Aboutpage = () => {
  const settings = useMemo(() => {
    return {
      slidesPerView: "auto",
      speed: 1500,
      spaceBetween: 30,
      grabCursor: true,
      navigation: {
        nextEl: ".home2-process-next",
        prevEl: ".home2-process-prev",
      },
      breakpoints: {
        280: { slidesPerView: 1 },
        576: { slidesPerView: 2, spaceBetween: 15 },
        992: { slidesPerView: 3, spaceBetween: 20 },
        1200: { slidesPerView: 4, spaceBetween: 15 },
        1400: { slidesPerView: 4 },
      },
    };
  }, []);

  return (
    <MainLayout>
      <Home5whyChoose />
      <div className="home1-about-section scroll-margin pt-120 mb-120" id="about-section">

        <div className="about-bottom-area">
          <div className="container-fluid">
            <div className="row g-5">
              <div className="col-lg-3 col-md-6 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                <div className="feature-card">
                  <div className="icon">
                    <img src="/assets/img/home1/icon/about-feature-card-icon1.svg" alt="" />
                  </div>
                  <div className="content">
                    <h4>End-to-End Product Engineering</h4>
                    <p>
                      From MVPs to enterprise platforms, our cross-functional teams deliver robust, scalable solutions tailored to your business goals.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow animate fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                <div className="feature-card">
                  <div className="icon">
                    <img src="/assets/img/home1/icon/about-feature-card-icon2.svg" alt="" />
                  </div>
                  <div className="content">
                    <h4>Human-Centered Design</h4>
                    <p>
                      Beautiful UI/UX that puts people first. Every product is intuitive, delightful, and designed for impact.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow animate fadeInUp" data-wow-delay="600ms" data-wow-duration="1500ms">
                <div className="feature-card">
                  <div className="icon">
                    <img src="/assets/img/home1/icon/about-feature-card-icon3.svg" alt="" />
                  </div>
                  <div className="content">
                    <h4>Agility & Ownership</h4>
                    <p>
                      We move fast and own our outcomes. You get frequent updates, rapid delivery, and total reliability.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 wow animate fadeInUp" data-wow-delay="800ms" data-wow-duration="1500ms">
                <div className="feature-card">
                  <div className="icon">
                    <img src="/assets/img/home1/icon/about-feature-card-icon4.svg" alt="" />
                  </div>
                  <div className="content">
                    <h4>Scalable, Cost-Effective</h4>
                    <p>
                      Modern architecture, best-in-class engineering, and a flexible engagement model that grows with your business.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Aboutpage;
