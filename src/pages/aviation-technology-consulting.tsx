import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { aviation_technology_consulting as p } from 'virtual:content';

const siteUrl = 'https://aeroexpertconsulting.com';
const url = `${siteUrl}/aviation-technology-consulting`;

export default function AviationTechnologyConsultingPage() {
  return (
    <>
      <Helmet>
        <title>Airline Technology Consulting: PSS, DCS &amp; Revenue Management | AeroExpert</title>
        <meta name="description" content="Independent airline technology consulting and airline IT consulting: passenger service systems, departure control, revenue management, NDC, ONE Order, cargo and loyalty platforms. Vendor-neutral airline technology consultant advisory." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Airline Technology Consulting: PSS, DCS &amp; Revenue Management | AeroExpert" />
        <meta property="og:description" content="Independent advisory on PSS, DCS, revenue management, NDC, ONE Order and loyalty platforms for airlines." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Airline Technology Consulting: PSS, DCS &amp; Revenue Management | AeroExpert" />
        <meta name="twitter:description" content="Independent advisory on PSS, DCS, revenue management, NDC and loyalty platforms for airlines." />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${url}#service`,
          name: 'Airline Technology Consulting',
          provider: { '@id': `${siteUrl}/#organization` },
          url,
          description: 'Independent advisory on PSS, DCS, revenue management, NDC, ONE Order, cargo and loyalty platforms for airlines.',
          areaServed: 'Worldwide',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
              { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` },
              { '@type': 'ListItem', position: 3, name: 'Airline Technology Consulting', item: url },
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
            <span>{p.title}</span>
          </h1>

          {/* Service header image */}
          <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-8">
            <img
              src="/airo-assets/images/services/aviation-technology-consulting"
              alt="Airline technology consulting — business team reviewing aviation systems data"
              className="absolute inset-0 w-full h-full object-cover"
              loading="eager"
              width={896}
              height={288}
            />
            <div className="absolute inset-0 bg-secondary/60 pointer-events-none" />
          </div>

          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.intro}</span>
          </p>
        </section>

        {/* PSS */}
        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.pss_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.pss_body}</span>
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            For airlines considering a PSS change, see our dedicated{' '}
            <Link to="/passenger-service-system-consulting" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-150">
              Passenger Service System Consulting
            </Link>{' '}
            and{' '}
            <Link to="/pss-migration-consulting" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-150">
              PSS Migration Consulting
            </Link>{' '}
            pages.
          </p>
        </section>

        {/* DCS */}
        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.dcs_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.dcs_body}</span>{' '}
            See our dedicated{' '}
            <Link to="/departure-control-system-consulting" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-150">
              Departure Control System Consulting
            </Link>{' '}
            page for the full scope.
          </p>
        </section>

        {/* Revenue Management */}
        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.rm_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.rm_body}</span>{' '}
            See our{' '}
            <Link to="/airline-revenue-management-consulting" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-150">
              Airline Revenue Management Consulting
            </Link>{' '}
            page for more detail.
          </p>
        </section>

        {/* NDC / ONE Order */}
        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.ndc_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.ndc_body}</span>{' '}
            See our{' '}
            <Link to="/airline-ndc-one-order-consulting" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-150">
              Airline NDC &amp; ONE Order Consulting
            </Link>{' '}
            page.
          </p>
        </section>

        {/* Cargo & Loyalty */}
        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.cargo_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.cargo_body}</span>
          </p>
        </section>

        {/* System Selection */}
        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.selection_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.selection_body}</span>
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            For the full procurement process, see our{' '}
            <Link to="/procurement-advisory" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-150">
              Procurement Advisory
            </Link>{' '}
            and{' '}
            <Link to="/project-management-office" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-150">
              Aviation Technology PMO
            </Link>{' '}
            pages.
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
