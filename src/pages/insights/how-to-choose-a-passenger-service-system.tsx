import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { article_pss_selection as a } from 'virtual:content';

const siteUrl = 'https://aeroexpertconsulting.com';
const url = `${siteUrl}/insights/how-to-choose-a-passenger-service-system`;

// Static href map — keeps content-rooted values off Link's `to` prop
const relatedHrefs: Record<string, string> = {
  r1: '/passenger-service-system-consulting',
  r2: '/pss-migration-consulting',
  r3: '/procurement-advisory',
};

export default function ArticlePSSSelection() {
  return (
    <>
      <Helmet>
        <title>{a.meta.title}</title>
        <meta name="description" content={a.meta.description} />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={a.meta.title} />
        <meta property="og:description" content={a.meta.description} />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={a.meta.title} />
        <meta name="twitter:description" content={a.meta.description} />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Article',
          '@id': `${url}#article`,
          headline: a.hero.heading,
          description: a.meta.description,
          url,
          datePublished: a.meta.datePublished,
          dateModified: a.meta.datePublished,
          publisher: { '@id': `${siteUrl}/#organization` },
          isPartOf: { '@id': `${siteUrl}/#website` },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
              { '@type': 'ListItem', position: 2, name: 'Insights', item: `${siteUrl}/insights` },
              { '@type': 'ListItem', position: 3, name: a.hero.heading, item: url },
            ],
          },
        }).replace(/</g, '\\u003c')}</script>
      </Helmet>

      <main>
        <article className="max-w-3xl mx-auto px-6 lg:px-12 pt-24 pb-20">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
              <li><Link to="/" className="hover:text-foreground transition-colors">Home</Link></li>
              <li className="opacity-40">/</li>
              <li><Link to="/insights" className="hover:text-foreground transition-colors">Insights</Link></li>
              <li className="opacity-40">/</li>
              <li className="text-foreground">PSS Selection</li>
            </ol>
          </nav>

          <span className="pill-blue mb-5 inline-flex" style={{ fontFamily: 'var(--font-sans)' }}>{a.meta.eyebrow}</span>

          <h1 className="text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)', fontWeight: 600, lineHeight: 1.1 }}>
            {a.hero.heading}
          </h1>

          <p className="text-sm text-muted-foreground mb-8" style={{ fontFamily: 'var(--font-sans)' }}>
            <time dateTime={a.meta.datePublished}>{a.meta.datePublished}</time> · AeroExpert Consulting
          </p>

          <div className="card-glass p-6 mb-10 border-l-2 border-accent">
            <p className="text-sm leading-relaxed text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
              <strong className="text-foreground">In brief:</strong> {a.hero.summary}
            </p>
          </div>

          {a.sections.map((section) => (
            <div key={section.id} className="mb-8">
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '0.75rem', marginTop: '2.5rem' }}>
                {section.heading}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                {section.body}
              </p>
            </div>
          ))}

          {a.faq && a.faq_heading && (
            <section className="mt-16 pt-12 border-t border-accent/10">
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', '@id': `${url}#faq`, mainEntity: a.faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })) }).replace(/</g, '\\u003c') }} />
              <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '2rem' }}>
                {a.faq_heading}
              </h2>
              <dl className="flex flex-col gap-8">
                {a.faq.map((item) => (
                  <div key={item.id} className="border-b border-accent/10 pb-8 last:border-0 last:pb-0">
                    <dt className="text-sm font-semibold text-foreground mb-3" style={{ fontFamily: 'var(--font-sans)' }}>{item.q}</dt>
                    <dd className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>{item.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          )}

          <section className="mt-12 pt-10 border-t border-accent/10">
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 600, color: 'hsl(var(--foreground))', marginBottom: '1rem' }}>Related Services</h2>
            <ul className="flex flex-col gap-2 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
              {a.related.map((item) => (
                <li key={item.id}>
                  <Link to={relatedHrefs[item.id] ?? '/services'} className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-150">{item.label}</Link>
                  {' '}— <span className="text-muted-foreground">{item.desc}</span>
                </li>
              ))}
            </ul>
          </section>

          <div className="mt-12 pt-10 border-t border-accent/10">
            <Link to="/contact" className="group inline-flex items-center gap-2.5 px-8 py-4 text-[10px] font-semibold uppercase rounded-full bg-accent text-accent-foreground transition-all duration-300 hover:glow-accent-strong" style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.18em' }}>
              Schedule a Consultation
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}
