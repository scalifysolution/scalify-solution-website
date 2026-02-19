import React from "react";

const Home3Faq = () => {
  return (
    <>
      <div className="home3-faq-section">
        <div className="container">
          <div className="row justify-content-center mb-70">
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
                  Frequently Asked Questions
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
                <p>
                  At Scalify, we believe knowledge fuels growth.
                  Explore our Knowledge Hub for expert insights, bold strategies, and practical tips to help you lead in the digital world.
                </p>

              </div>
            </div>
          </div>
          <div className="faq-wrap">
            <div className="faq-content">
              <div className="accordion" id="accordionScalify">
                <div className="row g-lg-5 g-4">
                  <div className="col-lg-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms">

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="faqheadingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseOne" aria-expanded="true" aria-controls="faqcollapseOne">
                          01. What is Scalify Solutions and how do you work?
                        </button>
                      </h2>
                      <div id="faqcollapseOne" className="accordion-collapse collapse show" aria-labelledby="faqheadingOne" data-bs-parent="#accordionScalify">
                        <div className="accordion-body">
                          Scalify Solutions is your end-to-end digital growth partner. We operate in two flexible models: <strong>1)</strong> As your dedicated in-house team working full-time (8 hours a day), or <strong>2)</strong> On a one-time project basis — from strategy to deployment. We bring the team, the process, and the tech to scale your vision.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="faqheadingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseTwo" aria-expanded="false" aria-controls="faqcollapseTwo">
                          02. What should be the budget of a project?
                        </button>
                      </h2>
                      <div id="faqcollapseTwo" className="accordion-collapse collapse" aria-labelledby="faqheadingTwo" data-bs-parent="#accordionScalify">
                        <div className="accordion-body">
                          Project budgets depend on the scope, complexity, and timelines. After understanding your requirements, we provide a detailed estimate aligned with your business goals and delivery expectations.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="faqheadingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseThree" aria-expanded="false" aria-controls="faqcollapseThree">
                          03. How is team pricing configured?
                        </button>
                      </h2>
                      <div id="faqcollapseThree" className="accordion-collapse collapse" aria-labelledby="faqheadingThree" data-bs-parent="#accordionScalify">
                        <div className="accordion-body">
                          Think of it like hiring — but smarter. If you're hiring a resource at ₹X LPA, we provide a professional of the same caliber at up to <strong>30% less</strong>. For example, a team valued at ₹25 LPA can be yours for ₹17.5 LPA with us — saving you cost without compromising quality.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="faqheadingFour">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseFour" aria-expanded="false" aria-controls="faqcollapseFour">
                          04. Which technologies do you use?
                        </button>
                      </h2>
                      <div id="faqcollapseFour" className="accordion-collapse collapse" aria-labelledby="faqheadingFour" data-bs-parent="#accordionScalify">
                        <div className="accordion-body">
                          We work with the latest technologies across every domain — from React, React Native, Flutter, and Angular to backend stacks like Node.js, Django, Python, Java, and cloud platforms like AWS, Firebase, and DigitalOcean. For design and UI/UX, we use Figma, Adobe XD, and more.
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="col-lg-6 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms">

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="faqheadingFive">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseFive" aria-expanded="true" aria-controls="faqcollapseFive">
                          05. What is your pricing and invoicing model?
                        </button>
                      </h2>
                      <div id="faqcollapseFive" className="accordion-collapse collapse" aria-labelledby="faqheadingFive" data-bs-parent="#accordionScalify">
                        <div className="accordion-body">
                          For one-time projects, we follow a four-phase model: 25% advance, and the rest in three 25% intervals aligned with project milestones. For dedicated teams, we create a monthly contract based on your timeline and billing is done at the end of each month.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="faqheadingSix">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseSix" aria-expanded="false" aria-controls="faqcollapseSix">
                          06. Why should we choose Scalify?
                        </button>
                      </h2>
                      <div id="faqcollapseSix" className="accordion-collapse collapse" aria-labelledby="faqheadingSix" data-bs-parent="#accordionScalify">
                        <div className="accordion-body">
                          We don’t just deliver — we back it with quality. You get bug-free, scalable solutions plus 1 year of free maintenance. If bugs arise post-launch, we resolve them for free — no matter how long it takes.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="faqheadingSeven">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseSeven" aria-expanded="false" aria-controls="faqcollapseSeven">
                          07. What measures do you take to protect user privacy?
                        </button>
                      </h2>
                      <div id="faqcollapseSeven" className="accordion-collapse collapse" aria-labelledby="faqheadingSeven" data-bs-parent="#accordionScalify">
                        <div className="accordion-body">
                          We ensure strict data protection through mutual NDAs and signed contracts. User data is never shared or used without explicit permission. Privacy, security, and trust are non-negotiable for us.
                        </div>
                      </div>
                    </div>

                    <div className="accordion-item">
                      <h2 className="accordion-header" id="faqheadingEight">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faqcollapseEight" aria-expanded="false" aria-controls="faqcollapseEight">
                          08. Do you provide post-launch support?
                        </button>
                      </h2>
                      <div id="faqcollapseEight" className="accordion-collapse collapse" aria-labelledby="faqheadingEight" data-bs-parent="#accordionScalify">
                        <div className="accordion-body">
                          Yes. We offer up to 12 months of free maintenance post-deployment for bug fixes, performance improvements, and small adjustments. Our goal is to support your growth beyond launch.
                        </div>
                      </div>
                    </div>

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

export default Home3Faq;
