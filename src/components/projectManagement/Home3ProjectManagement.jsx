import Link from "next/link";
import React from "react";

const Home3ProjectManagement = () => {
  // ✅ 4 projects per category (edit titles/tags/images/links anytime)
  const projectsData = {
    websiteDevelopment: [
      {
        tags: ["Web Design", "Development", "Software"],
        image: "/assets/img/projects/1.png",
        title: "EJI Travel Solutions",
        link: "https://eji.travel/",
      },
      {
        tags: ["Landing Page", "Business", "Growth"],
        image: "/assets/img/projects/4.png",
        title: "Kanak Drishti Infotech Private Limited",
        link: "https://kanakdrishtiinfo.com/",
      },
      {
        tags: ["UI Website", "Development", "Performance"],
        image: "/assets/img/projects/2.png",
        title: "ISM EduTech",
        link: "https://www.ismedutech.com/",
      },
      {
        tags: ["Enterprise", "Scale", "Security"],

        image: "/assets/img/projects/3.png",
        title: "AskYourNeeds E-commerce Dashboard",
        link: "https://askyourneeds-eight.vercel.app/33",
      },
    ],

    appDevelopment: [
      {
        tags: ["UI/UX", "Development"],
        image: "/assets/img/projects/5.png",
        title: "Sploot",
        link: "https://apps.apple.com/in/app/sploot-dog-walking-grooming/id1513928912",
      },

      {
        tags: ["Bug-Fixes"],
        image: "/assets/img/projects/8.png",
        title: "Snapmint",
        link: "https://apps.apple.com/in/app/snapmint-buy-now-pay-in-emis/id6450001111",
      },
      {
        tags: ["Development"],
        image: "/assets/img/projects/7.png",
        title: "Srvme",
        link: "https://apps.apple.com/us/app/%D8%B3%D9%8A%D8%B1%D9%81-%D9%85%D9%8A-srvme/id1411941284",
      },
      {
        tags: ["Development"],
        image: "/assets/img/projects/6.png",
        title: "Ufff",
        link: "https://apps.apple.com/us/app/ufff/id6748305293",
      },
    ],

    graphicDesigning: [
      {
        tags: ["Designing"],
        image: "/assets/img/projects/9.png",
        title: "EJI Catelog Page",
        link: "/assets/img/projects/10.png",
      },
      {
        tags: ["Designing"],
        image: "/assets/img/projects/11.png",
        title: "EJI Logo",
        link: "/assets/img/projects/1.pdf",
      },

      {
        tags: ["Designing"],
        image: "/assets/img/projects/12.png",
        title: "Plan N Go Logo",
        link: "/assets/img/projects/2.pdf",
      },
      {
        tags: ["Designing"],
        image: "/assets/img/projects/13.png",
        title: "2D Layout",
        link: "/assets/img/projects/3.pdf",
      },
    ],

    uiUx: [
      {
        tags: ["Web Designing"],
        image: "/assets/img/projects/18.png",
        title: "Plan N Go",
        link: "/assets/img/projects/22.png",
      },
      {
        tags: ["App Designing"],
        image: "/assets/img/projects/19.png",
        title: "NGO Website",
        link: "/assets/img/projects/23.png",
      },

      {
        tags: ["App Designing"],

        image: "/assets/img/projects/20.png",
        title: "Pet Care App",
        link: "/assets/img/projects/24.png",
      },
      {
        tags: ["Website Designing"],
        image: "/assets/img/projects/21.png",
        title: "EJI Travel Solutions",
        link: "/assets/img/projects/25.png",
      },
    ],

    digitalMarketing: [
      {
        tags: ["Designing"],
        image: "/assets/img/projects/14.png",
        title: "Travel Packages",
        link: "/assets/img/projects/14.png",
      },
      {
        tags: ["Designing"],
        image: "/assets/img/projects/15.png",
        title: "Social Media Posts",
        link: "/assets/img/projects/15.png",
      },

      {
        tags: ["Designing"],
        image: "/assets/img/projects/16.png",
        title: "Thoughts Marketing",
        link: "/assets/img/projects/16.png",
      },
      {
        tags: ["Designing"],
        image: "/assets/img/projects/17.png",
        title: "Story Boarding",
        link: "/assets/img/projects/17.png",
      },
    ],
  };

  // ✅ Same card UI reused
  const renderProjectsGrid = (projects) => {
    // keep your existing staggered layout the same
    const colClasses = ["col-lg-6 col-md-6", "col-lg-5 col-md-6", "col-lg-5 col-md-6", "col-lg-6 col-md-6"];
    const delays = ["200ms", "400ms", "600ms", "800ms"];

    return (
      <div className="container">
        <div className="row gy-lg-5 g-4 justify-content-between mb-60">
          {projects.map((item, idx) => (
            <div
              key={`${item.title}-${idx}`}
              className={`${colClasses[idx] || "col-lg-6 col-md-6"} wow animate fadeInDown`}
              data-wow-delay={delays[idx] || "200ms"}
              data-wow-duration="1500ms"
            >
              <div className="portfolio-card">
                <div className="image-and-tag">
                  <ul className="tag">
                    {item.tags.map((t, tIdx) => (
                      <li key={`${t}-${tIdx}`}>
                        <Link target="_blank" href={item.link}>{t}</Link>
                      </li>
                    ))}
                  </ul>
                  <div className="portfolio-img">
                    <img src={item.image} alt="" />
                  </div>
                </div>

                <div className="portfolio-content">
                  <h4>
                    <Link target="_blank" href={item.link}>{item.title}</Link>
                  </h4>
                  <Link className="details-btn" href={item.link} target="_blank" >
                    <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} viewBox="0 0 12 12">
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="home3-project-management-section mb-110">
        <div className="container">
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
                  Portfolio
                  <svg xmlns="http://www.w3.org/2000/svg" width={10} height={10} viewBox="0 0 10 10">
                    <g>
                      <circle cx={5} cy={5} r={5} />
                    </g>
                  </svg>
                </span>
                <h2>Our Proud Projects</h2>
                <p>
                  Explore our portfolio of high-impact web and app development, digital design, UI/UX, branding, and more.
                  At Scalify, we engineer innovative, scalable solutions that elevate user experiences and drive measurable growth.
                  See how we've helped ambitious brands turn bold ideas into powerful digital realities.
                </p>
              </div>
            </div>
          </div>

          <div className="project-management-tab-wrapper">
            <div className="project-management-nav mb-50">
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active"
                    id="app-development-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#app-development"
                    type="button"
                    role="tab"
                    aria-controls="app-development"
                    aria-selected="false"
                  >
                    App Development
                  </button>

                  <button
                    className="nav-link"
                    id="website-development-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#website-development"
                    type="button"
                    role="tab"
                    aria-controls="website-development"
                    aria-selected="true"
                  >
                    Website Development
                  </button>

                  <button
                    className="nav-link"
                    id="graphic-designing-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#graphic-designing-"
                    type="button"
                    role="tab"
                    aria-controls="graphic-designing-"
                    aria-selected="false"
                  >
                    Graphic Designing
                  </button>

                  <button
                    className="nav-link"
                    id="ui-ux-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#ui-ux"
                    type="button"
                    role="tab"
                    aria-controls="ui-ux"
                    aria-selected="false"
                  >
                    UI / UX
                  </button>

                  <button
                    className="nav-link"
                    id="digital-marketing-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#digital-marketing"
                    type="button"
                    role="tab"
                    aria-controls="digital-marketing"
                    aria-selected="false"
                  >
                    Digital Marketing
                  </button>
                </div>
              </nav>
            </div>

            <div className="project-management-tab">
              <div className="tab-content" id="nav-tabContent">
                {/* Website Development */}
                <div
                  className="tab-pane fade"
                  id="website-development"
                  role="tabpanel"
                  aria-labelledby="website-development-tab"
                >
                  {renderProjectsGrid(projectsData.websiteDevelopment)}
                </div>

                {/* App Development */}
                <div
                  className="tab-pane fade show active"
                  id="app-development"
                  role="tabpanel"
                  aria-labelledby="app-development-tab"
                >
                  {renderProjectsGrid(projectsData.appDevelopment)}
                </div>

                {/* Graphic Designing */}
                <div
                  className="tab-pane fade"
                  id="graphic-designing-"
                  role="tabpanel"
                  aria-labelledby="graphic-designing-tab"
                >
                  {renderProjectsGrid(projectsData.graphicDesigning)}
                </div>

                {/* UI / UX */}
                <div
                  className="tab-pane fade"
                  id="ui-ux"
                  role="tabpanel"
                  aria-labelledby="ui-ux-tab"
                >
                  {renderProjectsGrid(projectsData.uiUx)}
                </div>

                {/* Digital Marketing */}
                <div
                  className="tab-pane fade"
                  id="digital-marketing"
                  role="tabpanel"
                  aria-labelledby="digital-marketing-tab"
                >
                  {renderProjectsGrid(projectsData.digitalMarketing)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home3ProjectManagement;
