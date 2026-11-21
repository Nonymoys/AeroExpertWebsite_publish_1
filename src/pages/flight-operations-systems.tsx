import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { flight_operations_systems as p } from 'virtual:content';

const siteUrl = 'https://aeroexpertconsulting.com';
const url = `${siteUrl}/flight-operations-systems`;

export default function FlightOperationsSystemsPage() {
  return (
    <>
      <Helmet>
        <title>Airline Flight Operations Systems: EFB, OCC &amp; Crew | AeroExpert</title>
        <meta name="description" content="Independent flight operations systems consulting for airlines: Electronic Flight Bag, flight planning, crew management, OCC/IOCC, aircraft technical records and fuel management systems." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Flight Operations Systems Consulting | EFB, OCC &amp; Crew | AeroExpert" />
        <meta property="og:description" content="Flight operations systems consulting for airlines: EFB, flight planning, crew management, OCC/IOCC and fuel management systems." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Flight Operations Systems Consulting | EFB, OCC &amp; Crew | AeroExpert" />
        <meta name="twitter:description" content="Flight operations systems consulting for airlines: EFB, flight planning, crew management, OCC/IOCC and fuel management systems." />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${url}#service`,
          name: 'Flight Operations Systems Consulting',
          provider: { '@id': `${siteUrl}/#organization` },
          url,
          description: 'Advisory on EFB, flight planning, crew management, OCC/IOCC, aircraft technical records and fuel management systems for airlines.',
          areaServed: 'Worldwide',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
              { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` },
              { '@type': 'ListItem', position: 3, name: 'Flight Operations Systems', item: url },
            ],
          },
        }).replace(/</g, '\\u003c')}</script>
      </Helmet>

      <main>
        <section className="pt-24 pb-16 px-6 lg:px-12 max-w-4xl mx-auto">
          <p className="pill-blue mb-5 inline-block" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.eyebrow}</span>
          </p>
          <h1
            className="text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-8"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span>{p.title}</span>
          </h1>

          {/* Service header image */}
          <div className="w-full rounded-2xl overflow-hidden mb-8">
            <img
              src="/airo-assets/images/services/flight-operations-systems"
              alt="Flight operations systems — aircraft cockpit at night approaching illuminated runway"
              className="w-full h-auto block"
              loading="eager"
              width={896}
              height={504}
            />
          </div>

          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.intro}</span>
          </p>
        </section>

        {/* EFB */}
        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.efb_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.efb_body}</span>
          </p>
          <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
            See our dedicated{' '}
            <Link to="/efb-consulting" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-150">
              EFB Consulting
            </Link>{' '}
            page for the full lifecycle.
          </p>
        </section>

        {/* Flight Planning */}
        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.fp_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.fp_body}</span>
          </p>
          <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
            See our{' '}
            <Link to="/flight-planning-system-consulting" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-150">
              Airline Flight Planning System Consulting
            </Link>{' '}
            page.
          </p>
        </section>

        {/* OCC */}
        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.occ_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.occ_body}</span>
          </p>
          <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
            See our{' '}
            <Link to="/airline-occ-consulting" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-150">
              Airline OCC &amp; IOCC Consulting
            </Link>{' '}
            page.
          </p>
        </section>

        {/* Crew */}
        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.crew_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.crew_body}</span>
          </p>
        </section>

        {/* Technical Records */}
        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.tech_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.tech_body}</span>
          </p>
        </section>

        {/* Fuel */}
        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.fuel_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.fuel_body}</span>
          </p>
          <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
            For FDM-driven fuel efficiency, see our{' '}
            <Link to="/flight-data-monitoring" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-150">
              Flight Data Monitoring
            </Link>{' '}
            page.
          </p>
        </section>

        {/* Who this is for */}
        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-xl font-semibold text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.who_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.who}</span>
          </p>
        </section>

        {/* Closing */}
        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
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
                '@id': `${url}#faq`,
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
