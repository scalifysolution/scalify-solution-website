"use client";
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import React from "react";

const TermsAndConditionsPage = () => {
    useWow();

    return (
        <MainLayout>
            <div
                className="contact-page scroll-margin pt-120 mb-120"
                id="terms-and-conditions"
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
                                    Terms & Conditions
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
                                    These Terms &amp; Conditions govern your use of Scalify
                                    Solutions (“we”, “our”, “us”) website and services. By using
                                    our website, contacting us, or engaging our services, you
                                    agree to these terms.
                                </p>

                                <div style={{ maxWidth: "100%" }}>
                                    <h4 style={{ marginTop: 24 }}>1) Scope of Services</h4>
                                    <p>
                                        All work is delivered based on the agreed scope, proposal,
                                        quotation, or written communication. Any change in scope,
                                        features, timelines, or deliverables may require updated
                                        cost and timeline approval.
                                    </p>

                                    <h4 style={{ marginTop: 24 }}>2) Engagement Models</h4>
                                    <ul>
                                        <li>
                                            <strong>Project-Based:</strong> Work is delivered in
                                            milestones/phases as agreed. Payments are linked to
                                            milestones and deliverables.
                                        </li>
                                        <li>
                                            <strong>Monthly / Tech Partner:</strong> Work is delivered
                                            on a monthly engagement basis as an extended in-house
                                            team. Monthly charges and terms are agreed in writing.
                                        </li>
                                    </ul>

                                    <h4 style={{ marginTop: 24 }}>3) Client Responsibilities</h4>
                                    <ul>
                                        <li>
                                            Provide accurate requirements, content, and approvals on
                                            time to avoid delays.
                                        </li>
                                        <li>
                                            Ensure timely feedback during design, development, and
                                            testing phases.
                                        </li>
                                        <li>
                                            Maintain access credentials, hosting, third-party accounts,
                                            and necessary licenses (unless included in scope).
                                        </li>
                                    </ul>

                                    <h4 style={{ marginTop: 24 }}>4) Payments &amp; Invoicing</h4>
                                    <p>
                                        Payment terms are defined in the quotation/proposal. Delays
                                        in payment may pause work and affect timelines. Taxes, if
                                        applicable, will be added as per law.
                                    </p>

                                    <h4 style={{ marginTop: 24 }}>5) Timelines &amp; Delivery</h4>
                                    <p>
                                        Timelines depend on scope, client approvals, and third-party
                                        dependencies. We follow best efforts to deliver on time; any
                                        delay due to missing inputs, delayed approvals, or external
                                        services is not considered Scalify’s responsibility.
                                    </p>

                                    <h4 style={{ marginTop: 24 }}>6) Testing &amp; Acceptance</h4>
                                    <p>
                                        Clients are expected to test delivered modules during the
                                        agreed testing window and share issues clearly. If no issues
                                        are reported within the agreed testing window, the delivery
                                        may be treated as accepted.
                                    </p>

                                    <h4 style={{ marginTop: 24 }}>7) Support &amp; Bug Fixes</h4>
                                    <p>
                                        Support is provided based on the agreed model and scope.
                                        Bugs originating from our delivered code are fixed without
                                        additional charges as per the support terms. Requests beyond
                                        scope (new features, major changes, third-party issues) may
                                        be treated as paid work.
                                    </p>

                                    <h4 style={{ marginTop: 24 }}>8) Intellectual Property</h4>
                                    <p>
                                        Unless stated otherwise in writing, final deliverables are
                                        transferred to the client after full payment. Scalify
                                        Solutions retains rights to reusable components, libraries,
                                        and internal frameworks used during development.
                                    </p>

                                    <h4 style={{ marginTop: 24 }}>9) Confidentiality</h4>
                                    <p>
                                        We treat client information and project details as
                                        confidential. Clients should also treat Scalify’s internal
                                        processes, pricing, and implementation details as
                                        confidential unless agreed otherwise.
                                    </p>

                                    <h4 style={{ marginTop: 24 }}>10) Third-Party Services</h4>
                                    <p>
                                        Projects may depend on third-party services (hosting, APIs,
                                        payment providers, analytics, etc.). Scalify Solutions is not
                                        responsible for outages, policy changes, pricing changes, or
                                        limitations of third-party services.
                                    </p>

                                    <h4 style={{ marginTop: 24 }}>11) Limitations of Liability</h4>
                                    <p>
                                        Scalify Solutions is not liable for indirect, incidental, or
                                        consequential damages (including loss of profit, loss of
                                        data, or business interruption). Our liability, if any, is
                                        limited to the amount paid for the specific service during
                                        the relevant period, as permitted by law.
                                    </p>

                                    <h4 style={{ marginTop: 24 }}>12) Termination</h4>
                                    <p>
                                        Either party may terminate an engagement with written notice
                                        as per the agreed contract/proposal. Work completed up to the
                                        termination date is billable. Any non-refundable costs paid
                                        to third parties are not refundable.
                                    </p>

                                    <h4 style={{ marginTop: 24 }}>13) Website Use</h4>
                                    <p>
                                        You agree not to misuse our website, attempt unauthorized
                                        access, or copy content without permission. Any misuse may
                                        result in restricted access and legal action.
                                    </p>

                                    <h4 style={{ marginTop: 24 }}>14) Updates to Terms</h4>
                                    <p>
                                        We may update these Terms &amp; Conditions periodically.
                                        Continued use of our website or services indicates acceptance
                                        of the updated terms.
                                    </p>

                                    <h4 style={{ marginTop: 24 }}>15) Contact</h4>
                                    <p>
                                        If you have questions about these terms, please contact us
                                        via the official communication channels listed on our
                                        website.
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

export default TermsAndConditionsPage;
