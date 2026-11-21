import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';
import { consulting_approach } from 'virtual:content';
import PageHero from '@/components/PageHero';

const fadeUp = { hidden: { opacity: 0, y: 32 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

export default function ConsultingApproachPage() {
  const siteUrl = 'https://aeroexpertconsulting.com';
  const url = `${siteUrl}/consulting-approach`;
  return (
    <>
      <Helmet>
        <title>Consulting Approach — How AeroExpert Delivers Aviation Technology Projects</title>
        <meta name="description" content="AeroExpert's five-phase consulting approach: Discover, Assess, Design, Implement, Optimise. Structured methodology for aviation technology advisory and implementation." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content="Consulting Approach — How AeroExpert Delivers Aviation Technology Projects" />
        <meta property="og:description" content="AeroExpert's five-phase consulting approach: Discover, Assess, Design, Implement, Optimise. Structured methodology for aviation technology advisory." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Consulting Approach — How AeroExpert Delivers Aviation Technology Projects" />
        <meta name="twitter:description" content="AeroExpert's five-phase consulting approach for aviation technology advisory and implementation." />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          '@id': `${url}#webpage`,
          name: 'Consulting Approach — AeroExpert Consulting',
          url,
          isPartOf: { '@id': `${siteUrl}/#website` },
          about: { '@id': `${siteUrl}/#organization` },
        }).replace(/</g, '\\u003c')}</script>
      </Helmet>
      <main>
        <PageHero>
          <span className="pill-blue mb-5 inline-flex">{consulting_approach.hero.eyebrow}</span>
          <h1 className="text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 600 }}>{consulting_approach.hero.heading}</h1>
          <p className="text-sm leading-relaxed text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>{consulting_approach.hero.body}</p>
        </PageHero>

        {/* Principles */}
        <section className="py-32 bg-background relative overflow-hidden">
          <div className="orb w-[35rem] h-[35rem] -right-10 top-0 opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }} />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-16">
                <span className="pill-blue mb-4 inline-flex">Our Principles</span>
                <h2 className="text-foreground" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.7rem, 2.5vw, 2.4rem)', fontWeight: 600 }}>How We Engage</h2>
              </motion.div>
              <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {consulting_approach.principles.map((p, idx) => (
                  <motion.div key={p.id} variants={fadeUp} className="group card-glass relative p-8 transition-all duration-300 overflow-hidden">
                    <span className="absolute top-4 right-5 font-light text-accent/8 select-none pointer-events-none" style={{ fontFamily: 'var(--font-heading)', fontSize: '5rem', lineHeight: 1 }}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center mb-6 group-hover:bg-accent/25 group-hover:glow-accent transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
                    </div>
                    <h3 className="text-foreground font-semibold mb-3 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>{p.title}</h3>
                    <p className="text-xs leading-relaxed text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>{p.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Steps */}
        <section className="py-32 bg-secondary relative overflow-hidden">
          <div className="orb w-[30rem] h-[30rem] -left-10 bottom-0 opacity-10 pointer-events-none"
            style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }} />
          <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp} className="mb-16">
                <span className="pill-blue mb-4 inline-flex">Methodology</span>
                <h2 className="text-foreground" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.7rem, 2.5vw, 2.4rem)', fontWeight: 600 }}>Our Five-Phase Process</h2>
              </motion.div>
              <motion.div variants={stagger} className="card-glass overflow-hidden">
                {consulting_approach.steps.map((step, idx) => (
                  <motion.div
                    key={step.id}
                    variants={fadeUp}
                    className={`group grid md:grid-cols-4 gap-8 p-10 hover:bg-accent/5 transition-all duration-300 relative overflow-hidden ${idx < consulting_approach.steps.length - 1 ? 'border-b border-accent/10' : ''}`}
                  >
                    <div className="flex items-start gap-5 relative">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/12 border border-accent/25 flex-shrink-0 group-hover:border-accent/50 group-hover:glow-accent transition-all duration-300">
                        <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300" style={{ fontFamily: 'var(--font-sans)' }}>{step.number}</span>
                      </div>
                      <h3 className="text-foreground font-semibold text-base mt-3" style={{ fontFamily: 'var(--font-sans)' }}>{step.title}</h3>
                    </div>
                    <div className="md:col-span-3 md:pt-3 relative">
                      <p className="text-xs leading-relaxed text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>{step.description}</p>
                    </div>
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
          <div className="max-w-3xl mx-auto px-6 lg:px-12 relative">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.h2 variants={fadeUp} className="text-foreground mb-10" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.7rem, 2.5vw, 2.4rem)', fontWeight: 600 }}>
                Ready to work with us?
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
