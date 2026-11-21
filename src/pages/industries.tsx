import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { industries } from 'virtual:content';
import PageHero from '@/components/PageHero';

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

export default function IndustriesPage() {
  const siteUrl = 'https://aeroexpertconsulting.com';
  const url = `${siteUrl}/industries`;
  return (
    <>
      <Helmet>
        <title>Aviation Consulting for Airlines, Airports &amp; Operators | AeroExpert</title>
        <meta name="description" content="AeroExpert provides aviation technology consulting for commercial airlines, regional carriers, cargo operators, airports, ground handlers, MRO organisations and aviation authorities." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Aviation Consulting for Airlines, Airports &amp; Operators | AeroExpert" />
        <meta property="og:description" content="Aviation technology consulting for commercial airlines, regional carriers, cargo operators, airports, ground handlers, MRO organisations and aviation authorities." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aviation Consulting for Airlines, Airports &amp; Operators | AeroExpert" />
        <meta name="twitter:description" content="Aviation technology consulting for commercial airlines, airports, MRO organisations and aviation authorities." />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${url}#webpage`,
          name: 'Industries — Aviation Technology Consulting by AeroExpert',
          url,
          isPartOf: { '@id': `${siteUrl}/#website` },
          about: { '@id': `${siteUrl}/#organization` },
        }).replace(/</g, '\\u003c')}</script>
      </Helmet>
      <main>
        <PageHero>
          <span className="pill-blue mb-5 inline-flex">{industries.hero.eyebrow}</span>
          <h1 className="text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 600 }}>{industries.hero.heading}</h1>
          <p className="text-sm leading-relaxed text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>{industries.hero.body}</p>
        </PageHero>

        {/* Sectors */}
        <section className="py-32 bg-background relative overflow-hidden">
          <div className="orb w-[40rem] h-[40rem] -right-10 top-0 opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }} />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
            {/* Featured industry landing pages */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="mb-16">
              <motion.div variants={fadeUp} className="mb-8">
                <span className="pill-blue mb-4 inline-flex">Specialist Industry Consulting</span>
                <h2 className="text-foreground" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.7rem, 2.5vw, 2.4rem)', fontWeight: 600 }}>
                  Consulting by Industry
                </h2>
              </motion.div>
              <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { label: 'Airlines', href: '/industries/airlines', desc: 'PSS, flight operations, revenue management, NDC and digital transformation for commercial airlines.' },
                  { label: 'Regional Airlines', href: '/industries/regional-airlines', desc: 'Proportionate advisory for regional carriers — PSS, EFB, FDM and procurement at regional scale.' },
                  { label: 'Airports', href: '/industries/airports', desc: 'Passenger processing, baggage technology, IT infrastructure and cybersecurity for airports.' },
                ].map((item) => (
                  <motion.div key={item.label} variants={fadeUp}>
                    <Link to={item.href} className="group card-glass p-7 flex flex-col gap-3 h-full transition-all duration-200">
                      <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-150" style={{ fontFamily: 'var(--font-heading)' }}>{item.label}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed flex-1" style={{ fontFamily: 'var(--font-sans)' }}>{item.desc}</p>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {industries.sectors.map((sector, idx) => (
                <motion.div key={sector.id} variants={fadeUp} className="group card-glass relative p-8 transition-all duration-300 overflow-hidden">
                  <span className="absolute top-4 right-5 font-light text-accent/8 select-none pointer-events-none" style={{ fontFamily: 'var(--font-heading)', fontSize: '5rem', lineHeight: 1 }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center mb-5 group-hover:bg-accent/25 group-hover:glow-accent transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                  </div>
                  <h2 className="text-foreground font-semibold mb-3 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>{sector.title}</h2>
                  <p className="text-xs leading-relaxed text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>{sector.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-secondary text-center relative overflow-hidden">
          <div className="orb w-[40rem] h-[40rem] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }} />
          <div className="max-w-3xl mx-auto px-6 lg:px-12 relative">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-foreground mb-10" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.7rem, 2.5vw, 2.4rem)', fontWeight: 600 }}>
                Discuss your organisation's requirements
              </motion.h2>
              <motion.div variants={fadeUp}>
                <Link to="/contact" className="group inline-flex items-center gap-2.5 px-8 py-4 text-[10px] font-semibold uppercase rounded-full bg-accent text-accent-foreground transition-all duration-300 hover:glow-accent-strong relative overflow-hidden" style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.18em' }}>
                  <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-foreground/10" />
                  <span className="relative">Schedule a Consultation</span>
                  <ArrowRight className="relative w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
