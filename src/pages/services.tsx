import { services } from 'virtual:content';
import { Link } from 'react-router';
import { Helmet } from '@dr.pogodin/react-helmet';
import { ArrowUpRight } from 'lucide-react';

// Static route map — hrefs are routes, not editable copy
const itemHrefs: Record<string, string> = {
  'Aviation Technology Consulting': '/aviation-technology-consulting',
  'Commercial and Digital Platforms': '/commercial-digital-platforms',
  'Flight Operations and Operational Systems': '/flight-operations-systems',
  'Flight Data Monitoring': '/flight-data-monitoring',
  'Airport Technology Solutions': '/airport-technology-solutions',
  'IT Infrastructure and Cloud': '/it-infrastructure-cloud',
  'Cybersecurity and IT Governance': '/cybersecurity',
  'Digital Transformation and Analytics': '/digital-transformation',
  'Project Management Office': '/project-management-office',
  'Procurement Advisory': '/procurement-advisory',
};

export default function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Aviation Consulting Services UAE | Airline &amp; Airport Technology | AeroExpert</title>
        <meta name="description" content="AeroExpert advises airlines, airports, ground handlers, aviation authorities and aviation technology organisations across PSS, flight operations, airport systems, cybersecurity, digital transformation, PMO and procurement." />
        <link rel="canonical" href="https://aeroexpertconsulting.com/services" />
        <meta property="og:title" content="Aviation Consulting Services UAE | Airline &amp; Airport Technology | AeroExpert" />
        <meta property="og:description" content="Independent aviation technology consulting services across airline systems, flight operations, airport infrastructure, cybersecurity, digital transformation and advisory delivery." />
        <meta property="og:url" content="https://aeroexpertconsulting.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://aeroexpertconsulting.com/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aviation Consulting Services UAE | Airline &amp; Airport Technology | AeroExpert" />
        <meta name="twitter:description" content="Independent aviation technology consulting services for airlines, airports, ground handlers and aviation authorities." />
        <meta name="twitter:image" content="https://aeroexpertconsulting.com/og-image.png" />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': 'https://aeroexpertconsulting.com/services#webpage',
          name: 'Aviation Consulting Services UAE | Airline & Airport Technology | AeroExpert',
          url: 'https://aeroexpertconsulting.com/services',
          isPartOf: { '@id': 'https://aeroexpertconsulting.com/#website' },
          about: { '@id': 'https://aeroexpertconsulting.com/#organization' },
          breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://aeroexpertconsulting.com/' },
              { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://aeroexpertconsulting.com/services' },
            ],
          },
        }).replace(/</g, '\\u003c')}</script>
      </Helmet>

      <main>
        {/* Page hero */}
        <section className="pt-24 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
          <p
            className="pill-blue mb-5 inline-block"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Services
          </p>
          <h1
            className="text-4xl md:text-5xl font-semibold text-foreground leading-tight mb-6 max-w-3xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Aviation Technology Consulting Services for Airlines &amp; Airports
          </h1>
          <p
            className="text-base text-muted-foreground max-w-3xl leading-relaxed mb-4"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            AeroExpert provides independent aviation technology consulting to airlines, airports, ground handlers, aviation authorities and aviation technology organisations. We advise across the full technology lifecycle — from strategy and system selection through procurement, implementation and programme governance.
          </p>
          <p
            className="text-sm text-muted-foreground max-w-3xl leading-relaxed"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Our services span airline commercial systems (PSS, DCS, revenue management, NDC and ONE Order), flight operations technology (EFB, flight planning, crew management, OCC), airport passenger processing and baggage systems, IT infrastructure and cloud, aviation cybersecurity, digital transformation, project management and technology procurement advisory. Because we are vendor-neutral, our advice is driven entirely by your organisation's requirements and commercial interests.
          </p>
        </section>

        {/* Service groups */}
        <section className="pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col gap-16">
            {services.serviceGroups.map((group) => (
              <div key={group.id}>
                {/* Group heading */}
                <div className="flex items-center gap-4 mb-6">
                  <p
                    className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <span>{group.heading}</span>
                  </p>
                  <div className="flex-1 h-px bg-accent/15" />
                </div>

                {/* Service cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {group.items.map((item) => (
                    <Link
                      key={item.id}
                      to={itemHrefs[item.label] ?? '/services'}
                      className="card-glass group flex items-start justify-between gap-4 p-6 transition-all duration-200"
                    >
                      <div>
                        <h2
                          className="text-sm font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-150"
                          style={{ fontFamily: 'var(--font-heading)' }}
                        >
                          <span>{item.label}</span>
                        </h2>
                        <p
                          className="text-xs text-muted-foreground leading-relaxed"
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          <span>{item.description}</span>
                        </p>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-accent flex-shrink-0 mt-0.5 transition-colors duration-150" />
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
