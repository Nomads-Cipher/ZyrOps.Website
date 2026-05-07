import type { Metadata } from "next";
import { LegalPage } from "../legal-page";
import { absoluteUrl, brand } from "../lib/seo";

const effectiveDate = "May 7, 2026";

const summary = [
  "We collect the information you choose to send through email, calls, forms, and project discussions.",
  "We use that information to respond, scope work, operate services, secure systems, and improve ZyrOps products.",
  "We do not sell personal information, and we limit sharing to service providers, legal needs, and delivery partners.",
  "You can ask for access, correction, deletion, withdrawal of consent, or grievance redressal through hello@zyrops.com.",
];

const sections = [
  {
    title: "Who We Are",
    body: [
      `${brand.legalName} ("ZyrOps", "we", "us", or "our") builds AI-powered SaaS tools, custom web applications, backend systems, mobile apps, desktop apps, and operations support from Kozhikode and Wayanad, Kerala, India.`,
      "This Privacy Policy explains how we handle personal information collected through zyrops.com, our contact channels, project intake, sales conversations, support conversations, and related public website interactions. Product-specific agreements, client contracts, or product dashboards may include additional privacy terms for that service.",
    ],
  },
  {
    title: "Information We Collect",
    body: [
      "We collect information you provide directly, such as name, work email, phone number, company details, project goals, technology stack, budget or timeline context, attachments, messages, call notes, and support requests.",
      "When you interact with our website, we may receive technical information such as IP address, device and browser details, pages viewed, referring pages, timestamps, approximate location, and interaction events. The current public contact form uses an email handoff, but future form processors, analytics, security, or hosting tools may process limited technical data to keep the site reliable.",
      "When you discuss ZyrOps products such as ZyroHR, ZyroCRM, ZyroPOS, ZyroSupport, ZyroBooks, CipherTrak, or a custom platform, we may collect operational context needed to prepare a proposal, demo, support response, or implementation plan.",
    ],
  },
  {
    title: "How We Use Information",
    body: [
      "We use personal information to respond to enquiries, schedule calls, prepare proposals, scope software projects, provide support, operate and secure our website, maintain business records, improve product and service quality, and send relevant follow-ups where permitted.",
      "For SaaS or custom software engagements, we use project information to design workflows, estimate delivery, configure environments, provide implementation support, troubleshoot issues, and document decisions. We avoid requesting production credentials or sensitive datasets unless they are necessary for an agreed support or delivery task.",
      "We may use aggregated or de-identified insights to improve our services, product positioning, engineering quality, and customer experience.",
    ],
  },
  {
    title: "Legal Basis and Consent",
    body: [
      "We process information when you request a response, when it is necessary to evaluate or perform a contract, when we have a legitimate business need such as security or service improvement, when we must comply with law, or when you have given consent.",
      "Where processing depends on consent, you may withdraw that consent by contacting us. Withdrawal will not affect processing already completed lawfully, and it may limit our ability to continue a requested service or conversation.",
    ],
  },
  {
    title: "Cookies, Analytics, and Third Parties",
    body: [
      "Our website may use essential cookies, hosting logs, analytics tools, anti-spam protections, embedded media, social links, email systems, CRM tools, project management tools, cloud infrastructure, payment processors, or communication providers. These providers process information only as needed to deliver their function for us.",
      "External links such as LinkedIn, Instagram, email, phone, calendars, or client systems are governed by those third parties' own privacy practices. Review their policies before sharing information with them.",
    ],
  },
  {
    title: "Sharing and Transfers",
    body: [
      "We do not sell personal information. We may share limited information with team members, contractors, hosting providers, communication tools, analytics providers, legal or accounting advisors, delivery partners, and authorities where required by law.",
      "Some providers may process information outside India. When we use such providers, we aim to choose reputable services and apply reasonable safeguards appropriate to the information and the work being performed.",
    ],
  },
  {
    title: "Retention and Security",
    body: [
      "We keep information for as long as needed for enquiries, proposals, project delivery, support, legal compliance, tax/accounting records, dispute handling, security, and business continuity. We delete or anonymize information when it is no longer reasonably needed.",
      "We use reasonable technical and organizational safeguards, including access controls, limited internal access, secure hosting practices, and operational discipline. No website, email flow, or internet transmission can be guaranteed completely secure, so avoid sending highly sensitive information until a proper secure channel is agreed.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "Depending on the law that applies to you, including India's Digital Personal Data Protection framework and other regional privacy laws, you may request access, correction, deletion, portability, restriction, objection, withdrawal of consent, or grievance redressal.",
      `To make a privacy request, email ${brand.email} with enough detail to identify your interaction with ZyrOps. We may need to verify your identity before acting on a request, and we will respond within a reasonable period required by applicable law.`,
    ],
  },
  {
    title: "Children and Sensitive Data",
    body: [
      "Our website and services are intended for business users and are not directed to children. Do not submit children's personal information through this website unless it is part of an agreed client implementation and covered by a written contract.",
      "Please do not send passwords, government identifiers, financial account details, medical information, biometric data, or confidential production records through a public form or ordinary email unless we have expressly agreed on a secure intake method.",
    ],
  },
  {
    title: "Updates and Contact",
    body: [
      "We may update this Privacy Policy as our website, products, laws, or business practices change. The effective date shows when this page was last updated. Continued use of the website after an update means the updated policy applies to future interactions.",
      `For privacy questions, requests, or grievances, contact ${brand.legalName} at ${brand.email} or ${brand.phone}.`,
    ],
  },
];

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for ZyrOps LLP covering website enquiries, project intake, SaaS products, support, cookies, data rights, and contact details.",
  alternates: {
    canonical: absoluteUrl("/privacy-policy"),
  },
  openGraph: {
    title: "Privacy Policy | ZyrOps",
    description:
      "How ZyrOps LLP handles personal information across website enquiries, project intake, SaaS products, and support.",
    url: absoluteUrl("/privacy-policy"),
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Privacy and data handling"
      title="Privacy Policy"
      intro="A clear statement of how ZyrOps handles enquiries, project details, website signals, and product conversations."
      effectiveDate={effectiveDate}
      sections={sections}
      summary={summary}
    />
  );
}
