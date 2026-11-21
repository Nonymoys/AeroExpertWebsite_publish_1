import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { procurement_advisory as p } from 'virtual:content';

const siteUrl = 'https://aeroexpertconsulting.com';
const url = `${siteUrl}/procurement-advisory`;

export default function ProcurementAdvisoryPage() {
  return (
    <>
      <Helmet>
        <title>Aviation Technology Procurement &amp; Vendor Selection | AeroExpert</title>
        <meta name="description" content="Independent aviation technology procurement advisory: requirements definition, RFI/RFP development, vendor shortlist, technical and commercial scoring, contract negotiation and implementation acceptance." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Aviation Technology Procurement &amp; Vendor Selection | AeroExpert" />
        <meta property="og:description" content="Independent aviation technology procurement advisory: requirements definition, RFP development, vendor scoring, contract negotiation and implementation acceptance." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aviation Technology Procurement &amp; Vendor Selection | AeroExpert" />
        <meta name="twitter:description" content="Independent aviation technology procurement advisory: requirements definition, RFP development, vendor scoring and contract negotiation." />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${url}#service`,
          name: 'Aviation Technology Procurement Advisory',
          provider: { '@id': `${siteUrl}/#organization` },
          url,
          description: 'Independent aviation technology procurement advisory: requirements definition, RFI/RFP development, vendor shortlist, technical and commercial scoring, contract negotiation and implementation acceptance.',
          areaServed: 'Worldwide',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
              { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` },
              { '@type': 'ListItem', position: 3, name: 'Procurement Advisory', item: url },
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
              src="/airo-assets/images/services/procurement-advisory"
              alt="Procurement advisory — business team reviewing procurement documents and contracts"
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
            <span>{p.requirements_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.requirements_body}</span>
          </p>
        </section>

        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.rfp_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.rfp_body}</span>
          </p>
        </section>

        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.shortlist_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.shortlist_body}</span>
          </p>
        </section>

        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.technical_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.technical_body}</span>
          </p>
        </section>

        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.commercial_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.commercial_body}</span>
          </p>
        </section>

        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.contract_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.contract_body}</span>
          </p>
        </section>

        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            <span>{p.acceptance_heading}</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.acceptance_body}</span>
          </p>
          <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
            For programme governance through delivery, see our{' '}
            <Link to="/project-management-office" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-150">
              Aviation Technology PMO
            </Link>{' '}
            page.
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
