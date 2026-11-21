import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { it_infrastructure_cloud as _p } from 'virtual:content';

type ItSection = { id: string; heading: string; body: string };
type ItPageExtended = typeof _p & { sections: ItSection[] };
const p = _p as ItPageExtended;

export default function ITInfrastructureCloudPage() {
  return (
    <>
      <Helmet>
        <title>Aviation IT Consulting: Infrastructure &amp; Cloud | AeroExpert</title>
        <meta name="description" content="Aviation IT consulting for airlines and airports: IT infrastructure strategy, cloud migration, hybrid-cloud architecture, systems integration, IT governance and business continuity. Independent advisory in the UAE." />
        <link rel="canonical" href="https://aeroexpertconsulting.com/it-infrastructure-cloud" />
        <meta property="og:title" content="Aviation IT Consulting: Infrastructure &amp; Cloud | AeroExpert" />
        <meta property="og:description" content="Aviation IT consulting for airlines and airports: infrastructure strategy, cloud migration, IT governance and business continuity." />
        <meta property="og:url" content="https://aeroexpertconsulting.com/it-infrastructure-cloud" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://aeroexpertconsulting.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aviation IT Consulting: Infrastructure &amp; Cloud | AeroExpert" />
        <meta name="twitter:description" content="Aviation IT consulting for airlines and airports: infrastructure strategy, cloud migration, IT governance and business continuity." />
        <meta name="twitter:image" content="https://aeroexpertconsulting.com/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://aeroexpertconsulting.com/it-infrastructure-cloud#service',
          name: 'Aviation IT Consulting: Infrastructure & Cloud',
          provider: { '@id': 'https://aeroexpertconsulting.com/#organization' },
          url: 'https://aeroexpertconsulting.com/it-infrastructure-cloud',
          description: 'Independent aviation IT consulting for airlines and airports: infrastructure strategy, cloud migration, systems integration, IT governance and business continuity.',
          areaServed: 'Worldwide',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aeroexpertconsulting.com/' },
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://aeroexpertconsulting.com/services' },
              { '@type': 'ListItem', position: 3, name: 'Aviation IT Consulting: Infrastructure & Cloud', item: 'https://aeroexpertconsulting.com/it-infrastructure-cloud' },
            ],
          },
        }).replace(/</g, '\\u003c')}</script>
      </Helmet>

      <main>
        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section className="pt-24 pb-16 px-6 lg:px-12 max-w-4xl mx-auto">
          <p className="pill-blue mb-5 inline-block" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.eyebrow}</span>
          </p>
          <h1
            className="text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-8"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {p.title}
          </h1>

          <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-8">
            <img
              src="/airo-assets/images/services/it-infrastructure-cloud"
              alt="Aviation IT infrastructure — illuminated server racks in a modern data centre"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-secondary/60 pointer-events-none" />
          </div>

          <p
            className="text-base text-muted-foreground leading-relaxed max-w-2xl"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {p.intro}
          </p>
        </section>

        {/* ── Capabilities ─────────────────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2
            className="text-xl font-semibold text-foreground mb-8"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {p.capabilities_heading}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-3">
            {p.capabilities.map((item) => (
              <li
                key={item.id}
                className="flex items-start gap-3 text-sm text-muted-foreground"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                <span className="mt-2 w-1 h-1 rounded-full bg-accent flex-shrink-0" />
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* ── H2 Sections ──────────────────────────────────────────────── */}
        {p.sections.map((section) => (
          <section
            key={section.id}
            className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10"
          >
            <h2
              className="text-xl font-semibold text-foreground mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {section.heading}
            </h2>
            <p
              className="text-sm text-muted-foreground leading-relaxed max-w-2xl"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {section.body}
            </p>
          </section>
        ))}

        {/* ── Related services ─────────────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2
            className="text-xl font-semibold text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Related Services
          </h2>
          <ul className="flex flex-col gap-3">
            <li className="text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
              <Link to="/cybersecurity" className="text-foreground hover:text-accent transition-colors duration-150 underline underline-offset-4">
                Aviation Cybersecurity Consulting
              </Link>
              <span className="text-muted-foreground"> — security assessments, risk management and regulatory compliance for aviation IT environments.</span>
            </li>
            <li className="text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
              <Link to="/digital-transformation" className="text-foreground hover:text-accent transition-colors duration-150 underline underline-offset-4">
                Airline Digital Transformation Consulting
              </Link>
              <span className="text-muted-foreground"> — digital maturity assessment, technology roadmap and legacy modernisation.</span>
            </li>
            <li className="text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
              <Link to="/procurement-advisory" className="text-foreground hover:text-accent transition-colors duration-150 underline underline-offset-4">
                Technology Procurement Advisory
              </Link>
              <span className="text-muted-foreground"> — vendor evaluation, RFP management and contract advisory for IT infrastructure procurement.</span>
            </li>
          </ul>
        </section>

        {/* ── Who / Closing ────────────────────────────────────────────── */}
        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2
            className="text-xl font-semibold text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {p.who_heading}
          </h2>
          <p
            className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-10"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {p.who}
          </p>
          <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.closing}</span>{' '}
            <Link to="/contact" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-150">
              Get in touch
            </Link>
          </p>
        </section>

        {p.faq && p.faq_heading && (
          <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify({
                '@context': 'https://schema.org',
                '@type': 'FAQPage',
                '@id': 'https://aeroexpertconsulting.com/it-infrastructure-cloud#faq',
                mainEntity: p.faq.map((item) => ({
                  '@type': 'Question',
                  name: item.q,
                  acceptedAnswer: { '@type': 'Answer', text: item.a },
                })),
              }).replace(/</g, '\\u003c') }}
            />
            <h2 className="text-xl font-semibold text-foreground mb-10" style={{ fontFamily: 'var(--font-heading)' }}>
              {p.faq_heading}
            </h2>
            <dl className="flex flex-col gap-8">
              {p.faq.map((item) => (
                <div key={item.id} className="border-b border-accent/10 pb-8 last:border-0 last:pb-0">
                  <dt className="text-sm font-semibold text-foreground mb-3 leading-snug" style={{ fontFamily: 'var(--font-sans)' }}>
                    {item.q}
                  </dt>
                  <dd className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                    {item.a}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-10 text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
              Have a question not answered here?{' '}
              <Link to="/contact" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-150">
                Schedule a consultation
              </Link>{' '}
              with our team.
            </p>
          </section>
        )}
      </main>
    </>
  );
}
