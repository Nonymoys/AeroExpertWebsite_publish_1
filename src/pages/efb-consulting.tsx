import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { efb_consulting as p } from 'virtual:content';

const siteUrl = 'https://aeroexpertconsulting.com';
const url = `${siteUrl}/efb-consulting`;

export default function EFBConsultingPage() {
  return (
    <>
      <Helmet>
        <title>Electronic Flight Bag (EFB) Consulting | AeroExpert</title>
        <meta name="description" content="Independent airline EFB consulting: strategy, hardware selection, software evaluation, operational approval readiness, EFB administration, aircraft connectivity and go-live support." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Electronic Flight Bag (EFB) Consulting | AeroExpert" />
        <meta property="og:description" content="Independent airline EFB consulting: strategy, hardware selection, software evaluation, operational approval and go-live support." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Electronic Flight Bag (EFB) Consulting | AeroExpert" />
        <meta name="twitter:description" content="Independent airline EFB consulting: strategy, hardware selection, software evaluation and operational approval." />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Service',
          '@id': `${url}#service`,
          name: 'Electronic Flight Bag (EFB) Consulting',
          provider: { '@id': `${siteUrl}/#organization` },
          url,
          description: 'Independent airline EFB consulting: strategy, hardware selection, software evaluation, operational approval readiness, EFB administration, aircraft connectivity and go-live support.',
          areaServed: 'Worldwide',
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
              { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteUrl}/services` },
              { '@type': 'ListItem', position: 3, name: 'Flight Operations Systems', item: `${siteUrl}/flight-operations-systems` },
              { '@type': 'ListItem', position: 4, name: 'EFB Consulting', item: url },
            ],
          },
        }).replace(/</g, '\\u003c')}</script>
      </Helmet>

      <main>
        <section className="pt-24 pb-16 px-6 lg:px-12 max-w-4xl mx-auto">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
              <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li className="opacity-40">/</li>
              <li><Link to="/flight-operations-systems" className="hover:text-foreground transition-colors">Flight Operations Systems</Link></li>
              <li className="opacity-40">/</li>
              <li className="text-foreground">EFB Consulting</li>
            </ol>
          </nav>
          <p className="pill-blue mb-5 inline-block" style={{ fontFamily: 'var(--font-sans)' }}><span>{p.eyebrow}</span></p>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-8" style={{ fontFamily: 'var(--font-heading)' }}><span>{p.title}</span></h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl" style={{ fontFamily: 'var(--font-sans)' }}><span>{p.intro}</span></p>
        </section>

        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-10" style={{ fontFamily: 'var(--font-heading)' }}>EFB Implementation: Phase by Phase</h2>
          <ol className="flex flex-col gap-8">
            {p.lifecycle.map((item, idx) => (
              <li key={item.id} className="flex items-start gap-5">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center text-[10px] font-semibold text-accent" style={{ fontFamily: 'var(--font-sans)' }}>{idx + 1}</span>
                <div>
                  <p className="text-sm font-semibold text-foreground mb-1" style={{ fontFamily: 'var(--font-sans)' }}><span>{item.phase}</span></p>
                  <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}><span>{item.desc}</span></p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-xl font-semibold text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)' }}><span>{p.who_heading}</span></h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl" style={{ fontFamily: 'var(--font-sans)' }}><span>{p.who}</span></p>
        </section>

        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-xl font-semibold text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)' }}>Related Services</h2>
          <ul className="flex flex-col gap-3 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
            <li><Link to="/flight-operations-systems" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-150">Flight Operations Systems</Link> — full flight operations technology advisory</li>
            <li><Link to="/flight-planning-system-consulting" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-150">Airline Flight Planning System Consulting</Link> — EFB integration with flight planning</li>
            <li><Link to="/flight-data-monitoring" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-150">Flight Data Monitoring</Link> — safety data from flight operations</li>
          </ul>
        </section>

        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.closing}</span>{' '}
            <Link to="/contact" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-150">Get in touch</Link>
          </p>
        </section>

        {p.faq && p.faq_heading && (
          <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: p.faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) }).replace(/</g, '\\u003c') }} />
            <h2 className="text-xl font-semibold text-foreground mb-10" style={{ fontFamily: 'var(--font-heading)' }}>{p.faq_heading}</h2>
            <dl className="flex flex-col gap-8">
              {p.faq.map((item) => (
                <div key={item.id} className="border-b border-accent/10 pb-8 last:border-0 last:pb-0">
                  <dt className="text-sm font-semibold text-foreground mb-3 leading-snug" style={{ fontFamily: 'var(--font-sans)' }}>{item.q}</dt>
                  <dd className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>{item.a}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-10 text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>Have a question not answered here?{' '}<Link to="/contact" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-150">Schedule a consultation</Link>{' '}with our team.</p>
          </section>
        )}
      </main>
    </>
  );
}
