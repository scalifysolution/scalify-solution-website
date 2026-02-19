import { notFound } from "next/navigation";
import MainLayout from "@/components/layout/MainLayout";
import Home5Workprocess from "@/components/workProcess/Home5Workprocess";
import { SERVICES_DATA } from "@/data/servicesData";

export async function generateStaticParams() {
  return SERVICES_DATA.map((s) => {
    const slug = String(s.link || "")
      .replace(/^\/service\//, "")
      .replace(/\/$/, "");
    return { slug };
  });
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const service = SERVICES_DATA.find((s) => s.link === `/service/${slug}`);

  if (!service) {
    return {
      title: "Service Not Found - Scalify Solutions",
    };
  }

  return {
    title: `${service.hero.title} - Scalify Solutions`,
    description: service.hero.description,
    icons: {
      icon: "/assets/logo/logo_social.png",
    },
  };
}

export default async function ServiceDetailsPage({ params }) {
  const { slug } = params;
  const service = SERVICES_DATA.find((s) => s.link === `/service/${slug}`);

  if (!service) {
    notFound();
  }

  return (
    <MainLayout>
      <div
        className="service-details-page pt-120 mb-120"
        id="service-details-section"
      >
        <div className="container">
          {/* Hero Section */}
          <div className="service-details-top-area mb-80">
            <div className="row g-lg-4 gy-5 align-items-center">
              <div
                className="col-lg-6 order-lg-1 order-2 wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="service-details-top-content">
                  <h2>
                    {service.hero.title
                      .split(" ")
                      .map((word, index, array) =>
                        index === array.length - 1 ? (
                          <span key={index}>{word}.</span>
                        ) : (
                          `${word} `
                        )
                      )}
                  </h2>
                  <p>{service.hero.description}</p>
                  <ul className="key-features">
                    {service.hero.services.map((serviceItem, index) => (
                      <li key={index}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={15}
                          height={15}
                          viewBox="0 0 15 15"
                        >
                          <path d="M0.376831 8.16821C-0.247095 8.54593 -0.0579659 9.49862 0.662688 9.60837C1.24211 9.69666 1.52052 10.3701 1.17304 10.8431C0.740845 11.4312 1.27942 12.2389 1.98713 12.0639C2.55609 11.9231 3.07065 12.4387 2.9302 13.0088C2.75556 13.718 3.56158 14.2577 4.14855 13.8246C4.62054 13.4764 5.29275 13.7554 5.38073 14.336C5.49024 15.0581 6.44099 15.2476 6.81798 14.6224C7.12107 14.1198 7.84864 14.1198 8.15171 14.6224C8.52867 15.2476 9.47943 15.0581 9.58896 14.336C9.67707 13.7554 10.3492 13.4764 10.8211 13.8246C11.4081 14.2577 12.2142 13.718 12.0395 13.0088C11.899 12.4387 12.4136 11.9231 12.9826 12.0639C13.6903 12.2389 14.2289 11.4312 13.7967 10.8431C13.4492 10.3701 13.7276 9.69653 14.307 9.60837C15.0276 9.49864 15.2168 8.54597 14.5929 8.16821C14.0912 7.86452 14.0912 7.13547 14.5929 6.83178C15.2168 6.45407 15.0277 5.50138 14.307 5.39162C13.7276 5.30334 13.4492 4.62989 13.7967 4.15695C14.2289 3.56879 13.6903 2.76112 12.9826 2.93613C12.4136 3.07687 11.8991 2.5613 12.0395 1.99115C12.2141 1.28199 11.4081 0.742345 10.8211 1.17541C10.3492 1.52356 9.67695 1.2446 9.58896 0.664029C9.47945 -0.0580599 8.5287 -0.247606 8.15171 0.377594C7.84863 0.880237 7.12106 0.880237 6.81798 0.377594C6.44103 -0.247596 5.49027 -0.0580833 5.38073 0.664029C5.29263 1.24462 4.62054 1.5236 4.14855 1.17541C3.56158 0.742345 2.75554 1.28201 2.9302 1.99115C3.07065 2.56126 2.55612 3.07686 1.98713 2.93613C1.2794 2.76113 0.740845 3.56879 1.17304 4.15695C1.52049 4.62989 1.24209 5.30346 0.662688 5.39162C-0.0579425 5.50136 -0.247105 6.45403 0.376831 6.83178C0.878459 7.13548 0.878459 7.86453 0.376831 8.16821Z" />
                        </svg>
                        {serviceItem}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div
                className="col-lg-6 order-lg-2 order-1 wow animate fadeInRight"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="service-details-img">
                  <img
                    src={service.hero.hero_image[0]}
                    // src="/assets/img/innerpage/service-details-faq-img.jpg"
                    alt="FAQ"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div
            className="service-details-faq-area wow animate fadeInDown"
            data-wow-delay="400ms"
            data-wow-duration="1500ms"
          >
            <div className="row g-lg-4 gy-5 align-items-xl-center">
              <div className="col-lg-6">
                <div className="service-details-faq-img">
                  <img
                    src={service.hero.hero_image[1]}
                    // src="/assets/img/innerpage/service-details-faq-img.jpg"
                    alt="FAQ"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="accordion" id="accordionService">
                    {service.faq.map((faqItem, index) => (
                      <div key={index} className="accordion-item">
                        <h2
                          className="accordion-header"
                          id={`faqheading${index + 1}`}
                        >
                          <button
                            className={`accordion-button ${
                              index !== 0 ? "collapsed" : ""
                            }`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#faqcollapse${index + 1}`}
                            aria-expanded={index === 0 ? "true" : "false"}
                            aria-controls={`faqcollapse${index + 1}`}
                          >
                            {String(index + 1).padStart(2, "0")}.{" "}
                            {faqItem.question}
                          </button>
                        </h2>
                        <div
                          id={`faqcollapse${index + 1}`}
                          className={`accordion-collapse collapse ${
                            index === 0 ? "show" : ""
                          }`}
                          aria-labelledby={`faqheading${index + 1}`}
                          data-bs-parent="#accordionService"
                        >
                          <div className="accordion-body">{faqItem.answer}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Work Process Component */}
      <Home5Workprocess
        processData={service.process}
        serviceTitle={service.hero.title}
      />

      {/* Features Section */}
      <div className="service-details-feature-section mb-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="section-title5 mb-70 wow animate fadeInLeft"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <span className="sub-title5 two">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                  </svg>
                  Service Features
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={14}
                    height={14}
                    viewBox="0 0 14 14"
                  >
                    <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                  </svg>
                </span>
                <h2>
                  Key Features That Drive <span>Performance.</span>
                </h2>
                <p>
                  Discover the powerful features and capabilities that make our{" "}
                  {service.hero.title.toLowerCase()} services stand out in the
                  industry.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <ul className="service-feature-list">
                {service.features.map((feature, index) => (
                  <li
                    key={index}
                    className="single-feature wow animate fadeInDown"
                    data-wow-delay={`${200 + index * 200}ms`}
                    data-wow-duration="1500ms"
                  >
                    <div className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={32}
                        height={32}
                        viewBox="0 0 32 32"
                      >
                        <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z" />
                        <path d="M16 8c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
                      </svg>
                    </div>
                    <div className="content">
                      <h5>{feature.title}</h5>
                      <p>{feature.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
