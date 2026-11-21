import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { flight_data_monitoring as p } from 'virtual:content';

export default function FlightDataMonitoringPage() {
  return (
    <>
      <Helmet>
        <title>Flight Data Monitoring (FDM) Consulting for Airlines | AeroExpert</title>
        <meta name="description" content="FDM programme design and improvement for airlines. Data acquisition, event definitions, exceedance analysis, safety review, fuel optimisation and ICAO Annex 19 alignment support." />
        <link rel="canonical" href="https://aeroexpertconsulting.com/flight-data-monitoring" />
        <meta property="og:title" content="Flight Data Monitoring (FDM) Consulting for Airlines | AeroExpert" />
        <meta property="og:description" content="FDM programme design for airlines. Data acquisition, event analysis, safety review, fuel optimisation and ICAO Annex 19 alignment." />
        <meta property="og:url" content="https://aeroexpertconsulting.com/flight-data-monitoring" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://aeroexpertconsulting.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Flight Data Monitoring (FDM) Consulting for Airlines | AeroExpert" />
        <meta name="twitter:description" content="FDM programme design for airlines. Data acquisition, event analysis, safety review and fuel optimisation." />
        <meta name="twitter:image" content="https://aeroexpertconsulting.com/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://aeroexpertconsulting.com/flight-data-monitoring#service',
          name: 'Flight Data Monitoring (FDM) Consulting',
          provider: { '@id': 'https://aeroexpertconsulting.com/#organization' },
          url: 'https://aeroexpertconsulting.com/flight-data-monitoring',
          description: 'FDM programme design and improvement for airlines. Data acquisition, event definitions, exceedance analysis, safety review, fuel optimisation and ICAO Annex 19 alignment.',
          areaServed: 'Worldwide',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aeroexpertconsulting.com/' },
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://aeroexpertconsulting.com/services' },
              { '@type': 'ListItem', position: 3, name: 'Flight Data Monitoring', item: 'https://aeroexpertconsulting.com/flight-data-monitoring' },
            ],
          },
        }).replace(/</g, '\\u003c')}</script>
      </Helmet>

      <main>
        {/* Hero */}
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

          {/* Service header image */}
          <div className="w-full rounded-2xl overflow-hidden mb-8">
            <img
              src="/airo-assets/images/services/flight-data-monitoring"
              alt="Flight data monitoring — airport departures board displaying real-time flight status information"
              className="w-full h-auto block"
              loading="eager"
            />
          </div>

          <p
            className="text-base text-muted-foreground leading-relaxed max-w-2xl"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {p.intro}
          </p>
        </section>

        {/* FDM Implementation Workflow */}
        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2
            className="text-2xl font-semibold text-foreground mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            <span>{p.workflow_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-10" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.workflow_body}</span>
          </p>
          <ol className="flex flex-col gap-6">
            {p.workflow_steps.map((item, idx) => (
              <li key={item.id} className="flex items-start gap-5">
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center text-[10px] font-semibold text-accent"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {idx + 1}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1" style={{ fontFamily: 'var(--font-sans)' }}>
                    <span>{item.step}</span>
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                    <span>{item.desc}</span>
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Capabilities — four subsections */}
        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2
            className="text-xl font-semibold text-foreground mb-12"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {p.capabilities_heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {p.subsections.map((sub) => (
              <div key={sub.id}>
                <h3
                  className="text-sm font-semibold text-foreground mb-4 pb-3 border-b border-accent/15"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  <span>{sub.heading}</span>
                </h3>
                <ul className="flex flex-col gap-3">
                  {sub.items.map((item) => (
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
              </div>
            ))}
          </div>
        </section>

        {/* Who this is for */}
        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2
            className="text-xl font-semibold text-foreground mb-6"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {p.who_heading}
          </h2>
          <p
            className="text-sm text-muted-foreground leading-relaxed max-w-2xl"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {p.who}
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
                '@id': 'https://aeroexpertconsulting.com/flight-data-monitoring#faq',
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
