import React from "react";

const Home3Tools = () => {
  return (
    <>
      <div className="home3-tools-section mb-110">
        <div className="container">
          <div className="row justify-content-center mb-60">
            <div className="col-lg-8">
              <div
                className="section-title text-center wow animate fadeInDown"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                  >
                    <g>
                      <circle cx={5} cy={5} r={5} />
                    </g>
                  </svg>
                  Leading Technologies
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={10}
                    height={10}
                    viewBox="0 0 10 10"
                  >
                    <g>
                      <circle cx={5} cy={5} r={5} />
                    </g>
                  </svg>
                </span>
                <h2>Expertise in Leading Technologies</h2>
                <p>
                  At Scalify, our seasoned team leverages the latest technologies to build scalable, high-performance solutions.
                  From React, Node.js, Angular, and Vue.js to Python, Java, Swift, Kotlin, Django, and Ruby on Rails — we tailor development to meet your exact business goals.
                  These are just some of the powerful tools we work with — our expertise spans far beyond, adapting to your project's unique needs.
                  Partner with us to drive innovation, boost efficiency, and future-proof your digital journey.
                </p>

              </div>
            </div>
          </div>
          <div className="row g-4">
            {[
              {
                tech: "Next.js",
                desc: "Build high-performance React apps with built-in SSR, SSG, and smart routing.",
                img: "/tech-logos/nextjs.svg"
              },
              {
                tech: "Vite.js",
                desc: "Blazing fast frontend tooling with near-instant hot module replacement for modern frameworks.",
                img: "/tech-logos/vite.svg"
              },
              {
                tech: "TypeScript",
                desc: "Scale large codebases with confidence using strict typing on top of JavaScript.",
                img: "/tech-logos/typescript.svg"
              },
              {
                tech: "GraphQL",
                desc: "Flexible API layer allowing clients to request exactly the data they need — nothing more, nothing less.",
                img: "/tech-logos/graphql.svg"
              },
              {
                tech: "MongoDB",
                desc: "Document-based NoSQL database perfect for agile development and scalability.",
                img: "/tech-logos/mongodb.svg"
              },
              {
                tech: "PostgreSQL",
                desc: "Reliable open-source relational database with advanced query capabilities and data integrity.",
                img: "/tech-logos/postgresql.svg"
              },
              {
                tech: "Docker",
                desc: "Containerize apps and services for consistent environments across development and production.",
                img: "/tech-logos/docker.svg"
              },
              {
                tech: "Kubernetes",
                desc: "Automate deployment, scaling, and management of containerized applications.",
                img: "/tech-logos/kubernetes.svg"
              },
              {
                tech: "Firebase",
                desc: "Rapid backend and hosting infrastructure with real-time database and authentication.",
                img: "/tech-logos/firebase.svg"
              },
              {
                tech: "GitHub",
                desc: "Collaborative code hosting platform with powerful version control and CI/CD workflows.",
                img: "/tech-logos/github.svg"
              },
              {
                tech: "Sentry",
                desc: "Monitor, diagnose, and fix errors across your full stack — in real time.",
                img: "/tech-logos/sentry.svg"
              },
              {
                tech: "Jenkins",
                desc: "Automate your CI/CD pipelines and integrate with virtually any dev tool.",
                img: "/tech-logos/jenking.svg"
              },
              {
                tech: "React Native",
                desc: "Build native mobile apps using React — write once, run anywhere.",
                img: "/tech-logos/react.svg"
              },
              {
                tech: "Flutter",
                desc: "Google's UI toolkit for building visually rich native apps with one codebase.",
                img: "/tech-logos/flutter.svg"
              },
              {
                tech: "Tailwind CSS",
                desc: "Rapidly build modern websites using utility-first CSS for consistent styling.",
                img: "/tech-logos/tailwing.svg"
              },
              {
                tech: "AWS",
                desc: "Robust, scalable cloud infrastructure powering modern applications across the globe.",
                img: "/tech-logos/aws.png"
              },
              {
                tech: "DigitalOcean",
                desc: "Simplified cloud hosting with fast deployment and cost-effective scalability for developers.",
                img: "/tech-logos/digitalocean.svg"
              },
              {
                tech: "HTML & CSS",
                desc: "Build responsive, accessible, and beautifully styled interfaces from the ground up.",
                img: "/tech-logos/html.svg"
              },
              {
                tech: "JavaScript",
                desc: "The dynamic language of the web — essential for interactive and functional experiences.",
                img: "/tech-logos/javascript.svg"
              },
              {
                tech: "C#",
                desc: "Powerful and flexible language for enterprise software, web, mobile, and desktop development.",
                img: "/tech-logos/csharp.svg"
              },
              {
                tech: "Figma",
                desc: "Collaborative interface design tool used for crafting and prototyping modern digital experiences.",
                img: "/tech-logos/figma.svg"
              }

            ].map((item, index) => (
              <div
                key={item.tech}
                className="col-lg-4 col-sm-6 wow animate fadeInDown"
                data-wow-delay={`${200 + (index % 3) * 200}ms`}
                data-wow-duration="1500ms"
              >
                <div className="tools-card">
                  <div className="icon">
                    {/* You can replace this icon with tech-specific icons if available */}
                    <img src={item.img} alt={item.tech} />
                  </div>
                  <div className="content">
                    <h6>{item.tech}</h6>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </>
  );
};

export default Home3Tools;
