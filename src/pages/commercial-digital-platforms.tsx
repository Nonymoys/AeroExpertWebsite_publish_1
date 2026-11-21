import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { commercial_digital_platforms as p } from 'virtual:content';

export default function CommercialDigitalPlatformsPage() {
  return (
    <>
      <Helmet>
        <title>Airline Digital Commerce &amp; Customer Platforms | AeroExpert</title>
        <meta name="description" content="Independent advisory on airline digital commerce, CRM, contact-centre platforms, payment gateways, websites, mobile apps and digital customer journey design." />
        <link rel="canonical" href="https://aeroexpertconsulting.com/commercial-digital-platforms" />
        <meta property="og:title" content="Airline Digital Commerce &amp; Customer Platforms | AeroExpert" />
        <meta property="og:description" content="Advisory on airline digital commerce, CRM, contact-centre platforms, payment gateways, websites and mobile apps." />
        <meta property="og:url" content="https://aeroexpertconsulting.com/commercial-digital-platforms" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://aeroexpertconsulting.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Airline Digital Commerce &amp; Customer Platforms | AeroExpert" />
        <meta name="twitter:description" content="Advisory on airline digital commerce, CRM, contact-centre platforms, payment gateways and mobile apps." />
        <meta name="twitter:image" content="https://aeroexpertconsulting.com/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': 'https://aeroexpertconsulting.com/commercial-digital-platforms#service',
          name: 'Airline Digital Commerce & Customer Platforms',
          provider: { '@id': 'https://aeroexpertconsulting.com/#organization' },
          url: 'https://aeroexpertconsulting.com/commercial-digital-platforms',
          description: 'Advisory on airline digital commerce, CRM, contact-centre platforms, payment gateways, websites, mobile apps and digital customer journey design.',
          areaServed: 'Worldwide',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aeroexpertconsulting.com/' },
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://aeroexpertconsulting.com/services' },
              { '@type': 'ListItem', position: 3, name: 'Airline Digital Commerce & Customer Platforms', item: 'https://aeroexpertconsulting.com/commercial-digital-platforms' },
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
            {p.title}
          </h1>

          {/* Service header image */}
          <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-8">
            <img
              src="/airo-assets/images/services/commercial-digital-platforms"
              alt="Commercial and digital platforms — traveller checking mobile boarding pass and flight booking"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-secondary/60" />
          </div>

          <p
            className="text-base text-muted-foreground leading-relaxed max-w-2xl"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            {p.intro}
          </p>
        </section>

        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2
            className="text-xl font-semibold text-foreground mb-8"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {p.capabilities_heading}
          </h2>
          <ul className="flex flex-col gap-3">
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
                '@id': 'https://aeroexpertconsulting.com/commercial-digital-platforms#faq',
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
