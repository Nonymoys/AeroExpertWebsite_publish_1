import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { about } from 'virtual:content';
import PageHero from '@/components/PageHero';

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

export default function AboutPage() {
  const siteUrl = 'https://aeroexpertconsulting.com';
  const url = `${siteUrl}/about`;
  return (
    <>
      <Helmet>
        <title>About AeroExpert | Independent Aviation Technology Consultancy</title>
        <meta name="description" content="AeroExpert Consulting Services FZE is an independent aviation technology consultancy based in the UAE, advising airlines, airports and aviation organisations on technology strategy, systems and digital transformation." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="About AeroExpert | Independent Aviation Technology Consultancy" />
        <meta property="og:description" content="Independent aviation technology consultancy based in the UAE, advising airlines, airports and aviation organisations on technology strategy, systems and digital transformation." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About AeroExpert | Independent Aviation Technology Consultancy" />
        <meta name="twitter:description" content="Independent aviation technology consultancy based in the UAE, advising airlines, airports and aviation organisations." />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          '@id': `${url}#webpage`,
          name: 'About AeroExpert Consulting',
          url,
          isPartOf: { '@id': `${siteUrl}/#website` },
          about: { '@id': `${siteUrl}/#organization` },
        }).replace(/</g, '\\u003c')}</script>
      </Helmet>
      <main>
        <PageHero>
          <span className="pill-blue mb-5 inline-flex">{about.hero.eyebrow}</span>
          <h1 className="text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 600 }}>
            {about.hero.heading}
          </h1>
          <p className="text-sm leading-relaxed text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>{about.hero.body}</p>
        </PageHero>

        {/* Mission */}
        <section className="py-32 bg-background relative overflow-hidden">
          <div className="orb w-[40rem] h-[40rem] -right-10 top-0 opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }} />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div variants={fadeUp}>
                <span className="pill-blue mb-5 inline-flex">Mission</span>
                <h2 className="text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.7rem, 2.5vw, 2.4rem)', fontWeight: 600 }}>{about.mission.heading}</h2>
                <p className="text-sm leading-relaxed text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>{about.mission.body}</p>
              </motion.div>
              <motion.div variants={fadeUp} className="card-glass relative p-10 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, hsl(var(--accent)/0.4), transparent)' }} />
                <p className="text-[9px] font-semibold uppercase mb-6 text-muted-foreground" style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.22em' }}>Our Approach</p>
                <p className="text-sm leading-relaxed text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>{about.approach.body}</p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Key Facts — GEO entity block */}
        <section className="py-20 bg-secondary relative overflow-hidden">
          <div className="orb w-[30rem] h-[30rem] right-0 top-0 opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }} />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-10">
                <span className="pill-blue mb-4 inline-flex">Key Facts</span>
                <h2 className="text-foreground" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.7rem, 2.5vw, 2.4rem)', fontWeight: 600 }}>
                  About AeroExpert Consulting Services FZE
                </h2>
              </motion.div>
              <motion.div variants={fadeUp} className="card-glass p-8 md:p-10 max-w-3xl">
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
                  {[
                    { term: 'Legal name', def: 'AeroExpert Consulting Services FZE' },
                    { term: 'Legal entity', def: 'Free Zone Establishment (FZE)' },
                    { term: 'Headquarters', def: 'United Arab Emirates (UAE free zone)' },
                    { term: 'Founded', def: '[ADD: founded year]' },
                    { term: 'Regions served', def: 'UAE, GCC, Middle East, Africa, Asia Pacific and globally' },
                    { term: 'Core services', def: 'Aviation technology consulting, airline systems, flight operations, cybersecurity, digital transformation, IT infrastructure, procurement advisory' },
                    { term: 'Contact', def: 'info@aeroexpertconsulting.com' },
                    { term: 'Address', def: '[ADD: full free zone address]' },
                  ].map((item) => (
                    <div key={item.term}>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-accent mb-1" style={{ fontFamily: 'var(--font-sans)' }}>
                        {item.term}
                      </dt>
                      <dd className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                        {item.def}
                      </dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Pillars */}
        <section className="py-32 bg-secondary relative overflow-hidden">
          <div className="orb w-[30rem] h-[30rem] -left-10 bottom-0 opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }} />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-16">
                <span className="pill-blue mb-4 inline-flex">What We Offer</span>
                <h2 className="text-foreground" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.7rem, 2.5vw, 2.4rem)', fontWeight: 600 }}>Our Capabilities</h2>
              </motion.div>
              <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {about.pillars.map((pillar, idx) => (
                  <motion.div key={pillar.id} variants={fadeUp} className="group card-glass relative p-8 transition-all duration-300 overflow-hidden">
                    <span className="absolute top-4 right-5 font-light text-accent/8 select-none pointer-events-none" style={{ fontFamily: 'var(--font-heading)', fontSize: '5rem', lineHeight: 1 }}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center mb-6 group-hover:bg-accent/25 group-hover:glow-accent transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
                    </div>
                    <h3 className="text-foreground font-semibold mb-3 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>{pillar.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>{pillar.body}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-background text-center relative overflow-hidden">
          <div className="orb w-[40rem] h-[40rem] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }} />
          <div className="max-w-4xl mx-auto px-6 lg:px-12 relative">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-foreground mb-10" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.7rem, 2.5vw, 2.4rem)', fontWeight: 600 }}>
                Ready to discuss your requirements?
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
