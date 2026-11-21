import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { insights } from 'virtual:content';

// Static href map — keeps content-rooted values off Link's `to` prop

const siteUrl = 'https://aeroexpertconsulting.com';
const url = `${siteUrl}/insights`;

export default function InsightsPage() {
  return (
    <>
      <Helmet>
        <title>Aviation Technology Insights | AeroExpert</title>
        <meta name="description" content="Practical aviation technology insights from AeroExpert — covering PSS selection, EFB implementation, FDM programmes, airport technology, cybersecurity and procurement." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Aviation Technology Insights | AeroExpert" />
        <meta property="og:description" content="Practical aviation technology insights from AeroExpert — PSS, EFB, FDM, airport technology, cybersecurity and procurement." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aviation Technology Insights | AeroExpert" />
        <meta name="twitter:description" content="Practical aviation technology insights from AeroExpert." />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${url}#webpage`,
          name: 'Aviation Technology Insights | AeroExpert',
          url,
          isPartOf: { '@id': `${siteUrl}/#website` },
          about: { '@id': `${siteUrl}/#organization` },
        }).replace(/</g, '\\u003c')}</script>
      </Helmet>

      <main>
        <section className="pt-24 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
          <p className="pill-blue mb-5 inline-block" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{insights.hero.eyebrow}</span>
          </p>
          <h1
            className="text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6 max-w-3xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span>{insights.hero.heading}</span>
          </h1>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{insights.hero.body}</span>
          </p>
        </section>

        {/* Published articles */}
        <section className="pb-12 px-6 lg:px-12 max-w-7xl mx-auto">
          <h2 className="text-xl font-semibold text-foreground mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
            Latest Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {[
              { id: 'p1', href: '/insights/how-to-choose-a-passenger-service-system', eyebrow: 'Airline Technology', title: 'How to Choose the Right Passenger Service System for Your Airline', summary: 'A structured guide to PSS selection — requirements definition, vendor shortlist, RFP development, evaluation criteria and contract review for airlines in the UAE and Middle East.' },
              { id: 'p2', href: '/insights/pss-migration-timeline-risks-best-practices', eyebrow: 'Airline Technology', title: 'PSS Migration: Timeline, Risks and Best Practices', summary: 'The key stages, risks and best practices for PSS migration — from data migration planning and integration testing through cutover and post-migration stabilisation.' },
              { id: 'p3', href: '/insights/efb-implementation-gcaa-approval-uae', eyebrow: 'Flight Operations', title: 'Electronic Flight Bag (EFB) Implementation and GCAA Approval in the UAE', summary: 'A practical guide to EFB implementation and GCAA operational approval — covering EFB strategy, hardware selection, application selection and the approval process.' },
              { id: 'p4', href: '/insights/why-airlines-need-flight-data-monitoring', eyebrow: 'Flight Operations & Safety', title: 'Why Every Airline Needs a Flight Data Monitoring (FDM) Programme', summary: 'What FDM is, why it is required under ICAO Annex 19, what it reveals about safety and fuel efficiency, and how to establish an effective programme.' },
              { id: 'p5', href: '/insights/aviation-cybersecurity-uae-regulations-risks-readiness', eyebrow: 'Cybersecurity', title: 'Aviation Cybersecurity in the UAE: Regulations, Risks and Readiness', summary: 'The regulatory framework (GCAA, ICAO, UAE IA/NESA), key cybersecurity risks for airlines and airports, and practical steps to improve readiness.' },
              { id: 'p6', href: '/insights/smart-airport-technology-trends-middle-east', eyebrow: 'Airport Technology', title: 'Smart Airport Technology Trends in the Middle East', summary: 'Biometric processing, CUPPS/CUSS, A-CDM, RFID baggage tracking and AODB — the technology investments driving airport modernisation across the UAE and GCC.' },
              { id: 'p7', href: '/insights/independent-vs-vendor-aviation-it-procurement', eyebrow: 'Procurement Advisory', title: 'Independent vs Vendor-Led Consulting: Getting Aviation IT Procurement Right', summary: 'Why independent advisory produces better procurement outcomes than vendor-led advice — covering conflicts of interest, evaluation rigour and contract protection.' },
              { id: 'p8', href: '/insights/airline-digital-transformation-roadmap', eyebrow: 'Digital Transformation', title: 'Airline Digital Transformation Roadmap: From Strategy to Delivery', summary: 'Digital maturity assessment, technology roadmap development, legacy modernisation, data and analytics capability, AI use cases and transformation governance.' },
            ].map((article) => (
              <Link
                key={article.id}
                to={article.href}
                className="group card-glass p-7 flex flex-col gap-4 hover:border-accent/30 transition-all duration-200"
              >
                <span className="text-[9px] font-semibold uppercase tracking-[0.16em] px-2.5 py-1 rounded-full border border-accent/20 text-accent self-start" style={{ fontFamily: 'var(--font-sans)' }}>
                  {article.eyebrow}
                </span>
                <h2 className="text-sm font-semibold text-foreground leading-snug group-hover:text-accent transition-colors duration-150" style={{ fontFamily: 'var(--font-heading)' }}>
                  {article.title}
                </h2>
                <p className="text-xs text-muted-foreground leading-relaxed flex-1" style={{ fontFamily: 'var(--font-sans)' }}>
                  {article.summary}
                </p>
                <div className="pt-2 border-t border-accent/10">
                  <span className="text-[10px] font-semibold text-accent uppercase tracking-[0.12em]" style={{ fontFamily: 'var(--font-sans)' }}>
                    Read article →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>
    </>
  );
}
