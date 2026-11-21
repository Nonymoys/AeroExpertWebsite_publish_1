import { Helmet } from '@dr.pogodin/react-helmet';
import { contact } from 'virtual:content';
import { Mail, Phone, MapPin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ContactSection from '@/components/ContactSection';

export default function ContactPage() {
  const siteUrl = 'https://aeroexpertconsulting.com';
  const url = `${siteUrl}/contact`;

  return (
    <>
      <Helmet>
        <title>Contact AeroExpert | Aviation Technology Consulting UAE</title>
        <meta name="description" content="Contact AeroExpert Consulting to discuss your aviation technology requirements. Independent advisory for airlines, airports and aviation organisations in the UAE and Middle East. Book a consultation." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Contact AeroExpert Consulting — Aviation Technology Advisory UAE" />
        <meta property="og:description" content="Contact AeroExpert Consulting to discuss your aviation technology requirements. Independent advisory for airlines, airports and aviation authorities in the UAE and Middle East." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact AeroExpert Consulting — Aviation Technology Advisory UAE" />
        <meta name="twitter:description" content="Contact AeroExpert Consulting to discuss your aviation technology requirements." />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          '@id': `${url}#webpage`,
          name: 'Contact AeroExpert Consulting',
          url,
          isPartOf: { '@id': `${siteUrl}/#website` },
          about: {
            '@type': ['Organization', 'ProfessionalService'],
            '@id': `${siteUrl}/#organization`,
            name: 'AeroExpert Consulting Services FZE',
            email: 'info@aeroexpertconsulting.com',
            address: {
              '@type': 'PostalAddress',
              addressCountry: 'AE',
              addressRegion: 'UAE',
            },
            areaServed: ['United Arab Emirates', 'GCC', 'Middle East', 'Worldwide'],
          },
        }).replace(/</g, '\\u003c')}</script>
      </Helmet>

      <main>
        <PageHero>
          <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
            {contact.hero.eyebrow}
          </p>
          <h1 className="text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400 }}>
            {contact.hero.heading}
          </h1>
          <p className="text-base leading-relaxed text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
            {contact.hero.body}
          </p>
        </PageHero>

        {/* NAP block */}
        <section className="py-16 px-6 lg:px-12 max-w-4xl mx-auto border-b border-accent/10">
          <h2 className="text-lg font-semibold text-foreground mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
            Contact Information
          </h2>
          <address className="not-italic grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent mb-1" style={{ fontFamily: 'var(--font-sans)' }}>Address</p>
                <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                  AeroExpert Consulting Services FZE<br />
                  [ADD: full free zone address]<br />
                  United Arab Emirates
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent mb-1" style={{ fontFamily: 'var(--font-sans)' }}>Email</p>
                <a href="mailto:info@aeroexpertconsulting.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150" style={{ fontFamily: 'var(--font-sans)' }}>
                  info@aeroexpertconsulting.com
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent mb-1" style={{ fontFamily: 'var(--font-sans)' }}>Phone / WhatsApp</p>
                <p className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                  [ADD: phone / WhatsApp number]
                </p>
              </div>
            </div>
          </address>
        </section>

        <ContactSection />
      </main>
    </>
  );
}
