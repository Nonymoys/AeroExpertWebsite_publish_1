import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { industries_airlines as p } from 'virtual:content';

// Static href map — keeps content-rooted values off Link's `to` prop
const serviceHrefs: Record<string, string> = {
  s1: '/passenger-service-system-consulting',
  s2: '/flight-operations-systems',
  s3: '/airline-revenue-management-consulting',
  s4: '/airline-ndc-one-order-consulting',
  s5: '/cybersecurity',
  s6: '/digital-transformation',
};

const siteUrl = 'https://aeroexpertconsulting.com';
const url = `${siteUrl}/industries/airlines`;

export default function IndustriesAirlinesPage() {
  return (
    <>
      <Helmet>
        <title>Aviation Technology Consulting for Airlines | AeroExpert</title>
        <meta name="description" content="Independent aviation technology consulting for commercial airlines — PSS, flight operations, revenue management, NDC, cybersecurity and digital transformation." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Aviation Technology Consulting for Airlines | AeroExpert" />
        <meta property="og:description" content="Independent aviation technology consulting for commercial airlines — PSS, flight operations, revenue management, NDC and cybersecurity." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aviation Technology Consulting for Airlines | AeroExpert" />
        <meta name="twitter:description" content="Independent aviation technology consulting for commercial airlines." />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${url}#webpage`,
          name: 'Aviation Technology Consulting for Airlines | AeroExpert',
          url,
          isPartOf: { '@id': `${siteUrl}/#website` },
          about: { '@id': `${siteUrl}/#organization` },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
              { '@type': 'ListItem', position: 2, name: 'Industries', item: `${siteUrl}/industries` },
              { '@type': 'ListItem', position: 3, name: 'Airlines', item: url },
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
              <li><Link to="/industries" className="hover:text-foreground transition-colors">Industries</Link></li>
              <li className="opacity-40">/</li>
              <li className="text-foreground">Airlines</li>
            </ol>
          </nav>
          <p className="pill-blue mb-5 inline-block" style={{ fontFamily: 'var(--font-sans)' }}><span>{p.eyebrow}</span></p>
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-8" style={{ fontFamily: 'var(--font-heading)' }}><span>{p.title}</span></h1>
          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl" style={{ fontFamily: 'var(--font-sans)' }}><span>{p.intro}</span></p>
        </section>

        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <h2 className="text-2xl font-semibold text-foreground mb-8" style={{ fontFamily: 'var(--font-heading)' }}><span>{p.services_heading}</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {p.services.map((svc) => (
              <Link
                key={svc.id}
                to={serviceHrefs[svc.id] ?? '/services'}
                className="card-glass group p-6 flex flex-col gap-3 transition-all duration-200"
              >
                <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-150" style={{ fontFamily: 'var(--font-heading)' }}><span>{svc.title}</span></h3>
                <p className="text-xs text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}><span>{svc.desc}</span></p>
              </Link>
            ))}
          </div>
        </section>

        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-t border-accent/10">
          <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
            <span>{p.closing}</span>{' '}
            <Link to="/contact" className="text-foreground underline underline-offset-4 hover:text-accent transition-colors duration-150">Get in touch</Link>
          </p>
        </section>
      </main>
    </>
  );
}
