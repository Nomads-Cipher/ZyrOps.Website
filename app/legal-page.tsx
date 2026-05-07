import {
  ArrowLeft,
  ExternalLink,
  FileCheck2,
  Mail,
  Network,
  Phone,
  Scale,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { brand } from "./lib/seo";

type LegalSection = {
  title: string;
  body: string[];
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  effectiveDate: string;
  sections: LegalSection[];
  summary: string[];
};

export function LegalPage({
  eyebrow,
  title,
  intro,
  effectiveDate,
  sections,
  summary,
}: LegalPageProps) {
  return (
    <main className="site-shell legal-shell" data-theme="dark">
      <nav className="nav contact-nav">
        <Link href="/" className="brand" aria-label="ZyrOps home">
          <span>
            <Image src="/logo.png" alt="" width={34} height={34} priority />
          </span>
          <strong>ZyrOps</strong>
        </Link>
        <div className="nav-links">
          <Link href="/#services">Services</Link>
          <Link href="/products">Products</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div className="nav-actions">
          <Link href="/" className="launch-link">
            <ArrowLeft />
            Home
          </Link>
        </div>
      </nav>

      <section className="legal-hero">
        <div className="hero-noise" aria-hidden />
        <div className="legal-mark" aria-hidden>
          <Scale />
        </div>
        <div className="legal-copy">
          <p className="hero-kicker">{eyebrow}</p>
          <h1>{title}</h1>
          <span>{intro}</span>
          <div className="legal-meta">
            <span>Effective {effectiveDate}</span>
            <span>{brand.legalName}</span>
            <span>Kozhikode and Wayanad, Kerala</span>
          </div>
        </div>
        <aside className="legal-summary" aria-label={`${title} summary`}>
          <div className="legal-summary__header">
            <ShieldCheck />
            Plain-language summary
          </div>
          <ul>
            {summary.map((item) => (
              <li key={item}>
                <FileCheck2 />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="legal-layout">
        <aside className="legal-index" aria-label="Legal sections">
          <p>Sections</p>
          {sections.map((section, index) => (
            <a href={`#section-${index + 1}`} key={section.title}>
              {String(index + 1).padStart(2, "0")} {section.title}
            </a>
          ))}
        </aside>

        <div className="legal-sections">
          {sections.map((section, index) => (
            <article className="legal-section" id={`section-${index + 1}`} key={section.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </article>
          ))}
        </div>
      </section>

      <footer className="footer contact-footer">
        <div className="footer-grain" aria-hidden />
        <p>Questions about these terms?</p>
        <h2>Contact ZyrOps before sharing confidential or personal information.</h2>
        <div className="footer-actions">
          <a href={`mailto:${brand.email}`}>
            <Mail />
            {brand.email}
          </a>
          <a href="tel:+919488766222">
            <Phone />
            {brand.phone}
          </a>
          <Link href="/privacy-policy">
            <ShieldCheck />
            Privacy Policy
          </Link>
          <Link href="/terms-and-conditions">
            <Scale />
            Terms
          </Link>
          <Link href="/site-map">
            <Network />
            Site map
          </Link>
          <a href={brand.linkedin} target="_blank" rel="noreferrer">
            <ExternalLink />
            LinkedIn
          </a>
        </div>
        <span className="footer-location">Kozhikode and Wayanad, Kerala</span>
      </footer>
    </main>
  );
}
