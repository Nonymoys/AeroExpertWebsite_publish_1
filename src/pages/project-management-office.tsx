import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { project_management_office as p } from 'virtual:content';

const siteUrl = 'https://aeroexpertconsulting.com';
const url = `${siteUrl}/project-management-office`;

export default function ProjectManagementOfficePage() {
  return (
    <>
      <Helmet>
        <title>Aviation Technology PMO &amp; Programme Management | AeroExpert</title>
        <meta name="description" content="Independent aviation technology PMO: programme governance, vendor management, RFP oversight, risk management, testing, cutover planning and go-live support for airlines and airports." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Aviation Technology PMO &amp; Programme Management | AeroExpert" />
        <meta property="og:description" content="Independent aviation technology PMO: programme governance, vendor management, risk management, testing, cutover and go-live support." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aviation Technology PMO &amp; Programme Management | AeroExpert" />
        <meta name="twitter:description" content="Independent aviation technology PMO: programme governance, vendor management, risk management, testing and go-live support." />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${url}#service`,
          name: 'Aviation Technology PMO',
          provider: { '@id': `${siteUrl}/#organization` },
          url,
          description: 'Independent aviation technology PMO: programme governance, vendor management, RFP oversight, risk management, testing, cutover planning and go-live support.',
          areaServed: 'Worldwide',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
              { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` },
              { '@type': 'ListItem', position: 3, name: 'Aviation Technology PMO', item: url },
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
          <div className="relative w-full h-56 md:h-72 rounded-2xl overflow-hidden mb-8">
            <img
              src="/airo-assets/images/services/project-management-office"
              alt="Aviation technology PMO — senior consultants reviewing project plans in a boardroom"
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

        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.governance_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.governance_body}</span>
          </p>
        </section>

        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.vendor_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.vendor_body}</span>
          </p>
        </section>

        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.rfp_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.rfp_body}</span>
          </p>
          <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
            See our{' '}
            <Link to="/procurement-advisory" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-150">
              Procurement Advisory
            </Link>{' '}
            page for the full procurement lifecycle.
          </p>
        </section>

        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.risk_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.risk_body}</span>
          </p>
        </section>

        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.testing_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.testing_body}</span>
          </p>
        </section>

        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.cutover_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.cutover_body}</span>
          </p>
        </section>

        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.golive_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.golive_body}</span>
          </p>
        </section>

        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-xl font-semibold text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.who_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.who}</span>
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
