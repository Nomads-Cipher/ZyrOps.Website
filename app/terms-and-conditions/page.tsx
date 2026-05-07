import type { Metadata } from "next";
import { LegalPage } from "../legal-page";
import { absoluteUrl, brand } from "../lib/seo";

const effectiveDate = "May 7, 2026";

const summary = [
  "These terms govern use of zyrops.com and general engagement with ZyrOps unless a signed contract says otherwise.",
  "Website content is informational; project scope, pricing, timelines, and deliverables must be confirmed in writing.",
  "You must not misuse the website, attack systems, submit unlawful content, or claim ownership of ZyrOps materials.",
  "India law applies, with courts or forums in Kerala unless a written agreement provides another venue.",
];

const sections = [
  {
    title: "Agreement to These Terms",
    body: [
      `These Terms and Conditions ("Terms") apply to your use of zyrops.com and public ZyrOps channels operated by ${brand.legalName}. By accessing the website, sending an enquiry, or using the public content, you agree to these Terms.`,
      "If you enter a separate written proposal, statement of work, SaaS subscription, support agreement, non-disclosure agreement, or master services agreement with ZyrOps, that written agreement controls where it conflicts with these Terms.",
    ],
  },
  {
    title: "What ZyrOps Provides",
    body: [
      "ZyrOps provides software engineering, AI-powered SaaS products, custom web applications, backend systems, mobile apps, desktop apps, operations support, and related consulting. Public pages describe capabilities and product direction, but they are not a binding promise that every feature is available for every client or package.",
      "Product names such as ZyroHR, ZyroCRM, ZyroPOS, ZyroSupport, ZyroBooks, and CipherTrak may have their own onboarding steps, product terms, data processing terms, payment terms, support terms, and usage limits.",
    ],
  },
  {
    title: "Website Use",
    body: [
      "You may browse the website, read public content, share links, and contact us for legitimate business purposes. You may not interfere with the website, scrape it abusively, probe for vulnerabilities without written permission, upload malware, impersonate others, spam contact channels, or use the website for unlawful activity.",
      "You are responsible for the accuracy of information you submit. Do not send production credentials, regulated data, trade secrets, or third-party confidential information unless ZyrOps has agreed to receive it through an appropriate secure channel.",
    ],
  },
  {
    title: "Enquiries, Proposals, and Project Scope",
    body: [
      "A website enquiry, call, email, demo, or discussion does not create a paid engagement by itself. Work begins only when the parties agree the scope, commercials, responsibilities, timeline, payment terms, and delivery method in writing.",
      "Estimates, timelines, and technical recommendations are based on the information available at the time. They may change if requirements, access, dependencies, third-party systems, data quality, legal constraints, or client priorities change.",
    ],
  },
  {
    title: "Payments and Taxes",
    body: [
      "Fees, milestones, retainers, subscriptions, renewal terms, taxes, and payment schedules will be set out in the applicable proposal, invoice, or contract. Unless stated otherwise in writing, all fees are exclusive of applicable taxes, bank charges, payment gateway fees, and third-party costs.",
      "Late payments may delay delivery, support, deployment, renewal, or access to services. ZyrOps may pause work or restrict access where invoices remain unpaid after reasonable notice.",
    ],
  },
  {
    title: "Intellectual Property",
    body: [
      "The ZyrOps name, logo, website design, public copy, product names, demos, templates, internal tools, reusable code, know-how, methods, documentation, and pre-existing materials remain owned by ZyrOps or its licensors.",
      "Client-specific deliverables are licensed or transferred according to the written agreement for that project. Unless agreed otherwise, ZyrOps may reuse general skills, ideas, libraries, patterns, non-confidential know-how, and reusable components developed during ordinary service delivery.",
    ],
  },
  {
    title: "Acceptable Use for Products and Services",
    body: [
      "You must not use ZyrOps products, prototypes, demos, APIs, support tools, or hosted services to violate law, infringe rights, process data without authority, send spam, distribute malware, attack systems, bypass security controls, or misrepresent your identity or authorization.",
      "You are responsible for your users, data, configurations, access credentials, content, and compliance obligations unless a written agreement assigns a responsibility to ZyrOps. You must maintain appropriate backups, permissions, user controls, and internal policies for your organization.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "Projects may involve hosting providers, domain registrars, payment processors, analytics tools, AI APIs, email providers, app stores, database vendors, device vendors, open-source packages, or client-selected platforms. Those third-party services are governed by their own terms and availability.",
      "ZyrOps is not responsible for third-party downtime, pricing changes, account suspensions, policy changes, security incidents, or feature removals unless a written agreement expressly says otherwise.",
    ],
  },
  {
    title: "Disclaimers and Liability",
    body: [
      "The website and public content are provided for general information and business enquiry purposes. We aim to keep information accurate, but we do not guarantee that every page is complete, current, error-free, or suitable for your specific use case.",
      "To the maximum extent permitted by law, ZyrOps will not be liable for indirect, incidental, special, consequential, punitive, or loss-of-profit damages arising from website use or public content. For paid services, any liability cap or remedy will be governed by the applicable written agreement.",
    ],
  },
  {
    title: "Confidentiality and Feedback",
    body: [
      "Do not treat a public website form, social message, or ordinary email as a confidential channel unless a confidentiality agreement is already in place. Once an NDA or written contract is signed, confidentiality obligations will be handled under that document.",
      "If you send feedback, ideas, suggestions, or feature requests, you allow ZyrOps to use them to improve products and services without owing compensation, unless we separately agree in writing.",
    ],
  },
  {
    title: "Governing Law and Changes",
    body: [
      "These Terms are governed by the laws of India. Subject to any mandatory law or written agreement, disputes relating to website use or these Terms will be handled by competent courts or forums in Kerala, India.",
      `We may update these Terms from time to time. The effective date shows the latest update. Questions can be sent to ${brand.email} or ${brand.phone}.`,
    ],
  },
];

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description:
    "Terms and Conditions for ZyrOps LLP covering website use, enquiries, proposals, SaaS products, acceptable use, intellectual property, payments, and governing law.",
  alternates: {
    canonical: absoluteUrl("/terms-and-conditions"),
  },
  openGraph: {
    title: "Terms and Conditions | ZyrOps",
    description:
      "General terms for using the ZyrOps website, sending enquiries, and engaging with ZyrOps products and services.",
    url: absoluteUrl("/terms-and-conditions"),
    type: "website",
  },
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      eyebrow="Website and service terms"
      title="Terms and Conditions"
      intro="The operating rules for using the ZyrOps website, starting a project conversation, and engaging with our products and services."
      effectiveDate={effectiveDate}
      sections={sections}
      summary={summary}
    />
  );
}
