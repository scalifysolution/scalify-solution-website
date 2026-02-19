"use client";
import Home3Banner from "@/components/banner/Home3Banner";
import Home3Blog from "@/components/blog/Home3Blog";
import Home3countdown from "@/components/countdown/Home3countdown";
import Home3Faq from "@/components/faq/Home3Faq";
import Home3Feature from "@/components/feature/Home3Feature";
import Footer3 from "@/components/footer/Footer3";
import Header2 from "@/components/header/Header2";
import LogoMarquee from "@/components/marquee/LogoMarquee";
import Home3Newslatter from "@/components/newslatter/Home3Newslatter";
import Home3PricingPlan from "@/components/pricing-plan/Home3PricingPlan";
import Home3ProjectManagement from "@/components/projectManagement/Home3ProjectManagement";
import Home3Testimonial from "@/components/testimonial/Home3Testimonial";
import Home3Tools from "@/components/tools/Home3Tools";
import Home3WorkProcess from "@/components/workProcess/Home3WorkProcess";
import useWow from "@/hooks/useWow";

const SaasPage = () => {
  useWow();
  return (
    <>
      <Header2 />
      <Home3Banner />
      <Home3WorkProcess />
      <Home3countdown />
      <div className="mb-110">
        <a href="https://www.ndtv.com/cities/madhya-pradeshs-indore-launches-indias-first-digital-house-address-project-with-qr-codes-8796465" style={{ cursor: "pointer" }} target="_blank">
          <img src="/assets/img/banners/banner1.png" />
        </a>
      </div>
      <Home3ProjectManagement />
      <div>
        <a href="https://bharatddn.com/home1" style={{ cursor: "pointer" }} target="_blank">
          <img src="/assets/img/banners/banner2.png" />
        </a>
      </div>

      <Home3Testimonial />
      {/* <Home3Feature /> */}
      {/* <Home3PricingPlan /> */}
      {/* <Home3Newslatter /> */}

      <Home3Tools />
      <LogoMarquee />
      <Home3Faq />
      <Footer3 />
    </>
  );
};

export default SaasPage;
