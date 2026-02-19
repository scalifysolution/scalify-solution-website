"use client";
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import React from "react";

const SupportPolicyPage = () => {
    useWow();

    return (
        <MainLayout>
            <div
                className="contact-page scroll-margin pt-120 mb-120"
                id="support-policy"
            >
                <div className="container">
                    <div className="row mb-60 justify-content-center">
                        <div
                            className="col-12 wow animate fadeInDown"
                            data-wow-delay="400ms"
                            data-wow-duration="1500ms"
                        >
                            <div className="section-title5 two">
                                <span className="sub-title5 two">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={14}
                                        height={14}
                                        viewBox="0 0 14 14"
                                    >
                                        <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                                    </svg>
                                    Support Policy
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width={14}
                                        height={14}
                                        viewBox="0 0 14 14"
                                    >
                                        <path d="M3.7081 12.9544C3.41861 13.1128 3.09011 12.8352 3.14861 12.4808L3.7711 8.69694L1.12886 6.01223C0.882112 5.76104 1.01036 5.30186 1.34111 5.25226L5.0146 4.69548L6.6526 1.23399C6.80035 0.922003 7.2001 0.922003 7.34785 1.23399L8.98584 4.69548L12.6593 5.25226C12.9901 5.30186 13.1183 5.76104 12.8708 6.01223L10.2293 8.69694L10.8518 12.4808C10.9103 12.8352 10.5818 13.1128 10.2923 12.9544L6.9991 11.1497L3.7081 12.9544Z" />
                                    </svg>
                                </span>

                                <p style={{ maxWidth: "100%" }}>
                                    Scalify Solutions provides structured and responsible support
                                    to ensure the stability, reliability, and smooth operation of
                                    the solutions we build. Our support approach is designed to
                                    protect system quality while offering timely assistance based
                                    on the agreed engagement model.
                                </p>

                                <div style={{ maxWidth: "100%" }}>
                                    <h4 style={{ marginTop: 24 }}>1) Scope of Support</h4>
                                    <p>
                                        Our support typically includes:
                                    </p>
                                    <ul>
                                        <li>Fixing bugs or issues originating from Scalify’s code.</li>
                                        <li>Guidance related to system usage and configuration.</li>
                                        <li>Assistance during deployment and post-deployment stabilization.</li>
                                        <li>Technical clarification related to delivered features.</li>
                                    </ul>

                                    <h4 style={{ marginTop: 24 }}>2) Support Models</h4>
                                    <ul>
                                        <li>
                                            <strong>Project-Based Engagement:</strong>
                                            Support is provided as per the agreed post-delivery support
                                            period. Bug fixes related to Scalify’s work are handled
                                            without additional charges.
                                        </li>
                                        <li>
                                            <strong>Monthly / Tech Partner Engagement:</strong>
                                            Ongoing support is included as part of the monthly
                                            engagement, covering fixes, improvements, and continuous
                                            assistance.
                                        </li>
                                    </ul>

                                    <h4 style={{ marginTop: 24 }}>3) What Is Not Included</h4>
                                    <p>
                                        The following are not covered under standard support unless
                                        explicitly agreed:
                                    </p>
                                    <ul>
                                        <li>New features or major enhancements.</li>
                                        <li>Changes in scope or business logic.</li>
                                        <li>Issues caused by third-party services, hosting providers, or client-side modifications.</li>
                                        <li>Support for systems altered by other vendors or teams.</li>
                                    </ul>

                                    <h4 style={{ marginTop: 24 }}>4) Support Requests & Communication</h4>
                                    <p>
                                        Support requests should be shared with clear details via
                                        agreed communication channels (email, WhatsApp, or project
                                        management tools). Providing accurate information helps us
                                        diagnose and resolve issues faster.
                                    </p>

                                    <h4 style={{ marginTop: 24 }}>5) Response & Resolution</h4>
                                    <p>
                                        Response and resolution timelines depend on issue severity,
                                        complexity, and the engagement model. Critical issues are
                                        prioritized to minimize business impact.
                                    </p>

                                    <h4 style={{ marginTop: 24 }}>6) Paid Support</h4>
                                    <p>
                                        Any support request outside the agreed scope, business hours,
                                        or support period may be treated as paid support and handled
                                        based on availability and mutual agreement.
                                    </p>

                                    <h4 style={{ marginTop: 24 }}>7) Responsibility & Transparency</h4>
                                    <p>
                                        Scalify Solutions believes in ownership and transparency. If
                                        an issue is caused by our work, we take responsibility and
                                        resolve it. If an issue falls outside our scope, we clearly
                                        communicate the reason and available options.
                                    </p>

                                    <h4 style={{ marginTop: 24 }}>8) Contact for Support</h4>
                                    <p>
                                        For support-related queries, clients can reach out through
                                        the designated communication channels shared during project
                                        onboarding.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default SupportPolicyPage;
