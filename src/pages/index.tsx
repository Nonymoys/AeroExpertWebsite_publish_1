import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import {
  ArrowRight, Shield, Cpu, BarChart3, Plane, Server, Lock,
  RefreshCw, FolderKanban, Wrench, ArrowUpRight,
} from 'lucide-react';
import { home as _home } from 'virtual:content';
import ContactSection from '@/components/ContactSection';

type UaeItItem = { id: string; text: string };
type HomeExtended = typeof _home & { uae_it: { heading: string; body: string; items: UaeItItem[] } };
const home = _home as HomeExtended;

/* ── Motion variants — snappy, not sluggish ───────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.07 } } };

const serviceIcons: Record<string, React.ReactNode> = {
  s1: <Plane className="w-5 h-5" />,
  s2: <Cpu className="w-5 h-5" />,
  s3: <BarChart3 className="w-5 h-5" />,
  s4: <Server className="w-5 h-5" />,
  s5: <Server className="w-5 h-5" />,
  s6: <Lock className="w-5 h-5" />,
  s7: <RefreshCw className="w-5 h-5" />,
  s8: <RefreshCw className="w-5 h-5" />,
  s9: <FolderKanban className="w-5 h-5" />,
  s10: <Wrench className="w-5 h-5" />,
  s11: <Shield className="w-5 h-5" />,
};

// Static href map — keeps content-rooted values off Link's `to` prop
const serviceHrefs: Record<string, string> = {
  s1: '/aviation-technology-consulting',
  s2: '/flight-operations-systems',
  s3: '/flight-data-monitoring',
  s4: '/airport-technology-solutions',
  s5: '/it-infrastructure-cloud',
  s6: '/cybersecurity',
  s7: '/digital-transformation',
  s8: '/commercial-digital-platforms',
  s9: '/project-management-office',
  s10: '/procurement-advisory',
  s11: '/passenger-service-system-consulting',
};

export default function HomePage() {
  const siteUrl = 'https://aeroexpertconsulting.com';

  return (
    <>
      <Helmet>
        <title>Aviation Technology Consulting UAE | Airlines &amp; Airports | AeroExpert</title>
        <meta name="description" content="AeroExpert is an independent aviation technology consultancy in the UAE. We advise airlines, airports and aviation organisations on PSS, flight operations, cybersecurity, IT infrastructure and digital transformation. Book a consultation." />
        <link rel="canonical" href={siteUrl} />
        <meta property="og:title" content="Aviation Technology Consulting UAE | Airlines &amp; Airports | AeroExpert" />
        <meta property="og:description" content="Independent aviation technology consultancy in the UAE advising airlines, airports and aviation organisations on PSS, flight operations, cybersecurity and digital transformation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={`${siteUrl}/og-image.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aviation Technology Consulting UAE | Airlines &amp; Airports | AeroExpert" />
        <meta name="twitter:description" content="Independent aviation technology consultancy in the UAE advising airlines, airports and aviation organisations on PSS, flight operations, cybersecurity and digital transformation." />
        <meta name="twitter:image" content={`${siteUrl}/og-image.png`} />
        <script type="application/ld+json">{JSON.stringify({
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              '@id': `${siteUrl}/#website`,
              name: 'AeroExpert Consulting',
              url: `${siteUrl}/`,
            },
            {
              '@type': ['Organization', 'ProfessionalService'],
              '@id': `${siteUrl}/#organization`,
              name: 'AeroExpert Consulting Services FZE',
              url: `${siteUrl}/`,
              logo: `${siteUrl}/airo-assets/images/logo/horizontal`,
              description: 'Independent aviation technology and digital transformation consultancy for airlines, airports and aviation authorities in the UAE, GCC and Middle East.',
              areaServed: ['United Arab Emirates', 'GCC', 'Middle East', 'Africa', 'Asia Pacific', 'Worldwide'],
              address: { '@type': 'PostalAddress', addressCountry: 'AE', addressRegion: 'UAE' },
              contactPoint: { '@type': 'ContactPoint', email: 'info@aeroexpertconsulting.com', contactType: 'customer service' },
              knowsAbout: [
                'Aviation technology consulting',
                'Passenger Service System (PSS) consulting',
                'Departure Control System (DCS) consulting',
                'Revenue Management System consulting',
                'Electronic Flight Bag (EFB) consulting',
                'Flight Data Monitoring (FDM / FOQA)',
                'Airport technology consulting',
                'Aviation cybersecurity',
                'Aviation IT infrastructure and cloud',
                'Airline digital transformation',
                'Aviation procurement advisory',
                'Aviation PMO',
                'NDC and ONE Order',
                'IATA standards',
                'ICAO Annex 19',
                'GCAA regulations',
                'CUPPS and CUSS',
                'Airport Operational Database (AODB)',
                'A-CDM',
                'Airline OCC consulting',
                'Flight planning systems',
              ],
            },
            {
              '@type': 'WebPage',
              '@id': `${siteUrl}/#webpage`,
              url: `${siteUrl}/`,
              name: 'Aviation Technology Consulting UAE | Airlines & Airports | AeroExpert',
              isPartOf: { '@id': `${siteUrl}/#website` },
              about: { '@id': `${siteUrl}/#organization` },
              datePublished: '2024-01-01',
              dateModified: '2026-10-15',
            },
          ],
        }).replace(/</g, '\\u003c')}</script>
      </Helmet>

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end pb-32 overflow-hidden bg-background">
        {/* Desktop: autoplay video background */}
        <video
          src="/airo-assets/videos/hero/background-video"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover hidden md:block"
        />
        {/* Mobile: static fallback image */}
        <img
          src="/airo-assets/images/hero/background"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover md:hidden"
          loading="eager"
          fetchPriority="high"
        />
        {/* Dark navy overlay — 65% opacity, keeps text readable over video */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'hsl(var(--secondary) / 0.65)' }} />
        {/* Cinematic gradient — bottom fade to background */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, hsl(var(--background)) 0%, hsl(var(--background)/0.75) 25%, transparent 60%)' }} />
        <div className="absolute inset-y-0 left-0 w-64 pointer-events-none"
          style={{ background: 'linear-gradient(to right, hsl(var(--background)/0.7), transparent)' }} />

        {/* Animated grid overlay */}
        <div className="absolute inset-0 grid-overlay opacity-100 pointer-events-none" />

        {/* Floating orbs */}
        <div className="orb animate-orb w-[26rem] h-[26rem] -top-16 right-0 opacity-20"
          style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }} />
        <div className="orb w-[16rem] h-[16rem] top-1/3 right-1/4 opacity-10"
          style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }} />

        {/* Scan line — CSS animation, no JS */}
        <div className="animate-scan absolute left-0 right-0 h-px pointer-events-none"
          style={{ background: 'linear-gradient(to right, transparent, hsl(var(--accent)/0.35), transparent)' }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-3xl">
            {/* Eyebrow pill */}
            <motion.div variants={fadeUp} className="mb-10">
              <span className="pill-blue">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
                Aviation Technology Consultancy · UAE
              </span>
            </motion.div>

            {/* Headline — primary H1 */}
            <motion.h1
              variants={fadeUp}
              className="text-foreground mb-4"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(2.6rem, 5.5vw, 4.4rem)', fontWeight: 600, lineHeight: 1.06, letterSpacing: '-0.03em' }}
            >
              {home.hero.headline}
            </motion.h1>

            {/* Tagline */}
            <motion.p
              variants={fadeUp}
              className="mb-5 text-foreground/70"
              style={{ fontFamily: 'var(--font-sans)', fontWeight: 400, fontSize: 'clamp(1rem, 1.8vw, 1.25rem)', letterSpacing: '-0.01em' }}
            >
              {home.hero.subheadline}
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-sm leading-relaxed mb-12 max-w-xl text-muted-foreground"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {home.hero.body}
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 px-8 py-4 text-[10px] font-semibold uppercase rounded-full bg-accent text-accent-foreground transition-all duration-300 hover:glow-accent-strong relative overflow-hidden"
                style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.18em' }}
              >
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-foreground/10" />
                <span className="relative">{home.hero.cta_primary}</span>
                <ArrowRight className="relative w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2.5 px-8 py-4 text-[10px] font-semibold uppercase rounded-full border border-accent/40 text-muted-foreground transition-all duration-300 hover:border-accent hover:text-foreground hover:bg-accent/10 relative overflow-hidden"
                style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.18em' }}
              >
                <span className="relative">{home.hero.cta_secondary}</span>
                <ArrowUpRight className="relative w-3.5 h-3.5 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-10 right-12 hidden lg:flex flex-col items-center gap-3"
        >
          <p className="text-[8px] uppercase text-muted-foreground/50" style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.2em', writingMode: 'vertical-rl' }}>Scroll</p>
          <motion.div
            className="w-px h-12"
            style={{ background: 'linear-gradient(to bottom, hsl(var(--accent)/0.6), transparent)' }}
            animate={{ scaleY: [1, 0.3, 1], opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' as const }}
          />
        </motion.div>
      </section>

      {/* ── PROMO VIDEO ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="orb w-[40rem] h-[40rem] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-10"
          style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }} />
        <div className="max-w-5xl mx-auto px-6 lg:px-12 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="text-center mb-10">
              <span className="pill-blue mb-4 inline-flex">See Us In Action</span>
              <h2 className="text-foreground" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.6rem, 2.5vw, 2.4rem)', fontWeight: 600 }}>
                Aviation Technology. Delivered.
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-2xl overflow-hidden border border-accent/20 shadow-2xl">
              <video
                src="/airo-assets/videos/homepage/promo-video"
                controls
                playsInline
                preload="none"
                poster="/airo-assets/images/hero/background"
                className="w-full h-auto block"
                style={{ background: 'hsl(var(--background))' }}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── EXPERTISE ────────────────────────────────────────────────────── */}
      <section className="pt-12 pb-20 bg-background relative overflow-hidden">
        {/* Background orbs */}
        <div className="orb w-[40rem] h-[40rem] -right-20 top-0 opacity-10"
          style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div variants={fadeUp}>
              <div className="mb-6">
                <span className="pill-blue mb-4 inline-flex">Our Expertise</span>
              </div>
              <h2 className="text-foreground mb-6" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', fontWeight: 600 }}>
                {home.expertise.heading}
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground mb-10" style={{ fontFamily: 'var(--font-sans)' }}>
                {home.expertise.body}
              </p>
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
                style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.14em' }}
              >
                About AeroExpert
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-2 gap-4">
              {[
                { label: 'Airline Systems', sub: 'PSS, DCS, Revenue Management', icon: <Plane className="w-4 h-4" /> },
                { label: 'Cybersecurity', sub: 'Assessments, Strategy, Compliance', icon: <Lock className="w-4 h-4" /> },
                { label: 'Digital Transformation', sub: 'Strategy, Roadmaps, Delivery', icon: <RefreshCw className="w-4 h-4" /> },
                { label: 'Flight Data Monitoring', sub: 'Safety, Risk, Fuel Efficiency', icon: <BarChart3 className="w-4 h-4" /> },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  variants={fadeUp}
                  className="card-glass p-6 transition-all duration-300 cursor-default"
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className="p-2 rounded-xl bg-accent/15 text-accent border border-accent/20 transition-all duration-300">
                      {item.icon}
                    </span>
                  </div>
                  <p className="text-sm font-semibold text-foreground mb-1" style={{ fontFamily: 'var(--font-sans)' }}>{item.label}</p>
                  <p className="text-[10px] text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>{item.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        {/* Orbs */}
        <div className="orb w-[35rem] h-[35rem] -left-20 bottom-0 opacity-10"
          style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <span className="pill-blue mb-4 inline-flex">What We Do</span>
                <h2 className="text-foreground" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', fontWeight: 600 }}>
                  {home.services.heading}
                </h2>
              </div>
              <Link
                to="/services"
                className="group flex-shrink-0 inline-flex items-center gap-2 text-[10px] font-semibold uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
                style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.14em' }}
              >
                View All Services
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </motion.div>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {home.services.items.map((item) => (
                <motion.div key={item.id} variants={fadeUp}>
                  <Link
                    to={serviceHrefs[item.id] ?? '/services'}
                    className="group card-glass flex flex-col h-full p-7 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <span className="p-3 rounded-2xl bg-accent/12 text-accent border border-accent/20 group-hover:bg-accent/20 group-hover:glow-accent transition-all duration-300">
                        {serviceIcons[item.id]}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-accent" />
                    </div>
                    <h3 className="text-foreground mb-2.5 text-sm font-semibold" style={{ fontFamily: 'var(--font-sans)' }}>
                      {item.title}
                    </h3>
                    <p className="text-xs leading-relaxed flex-1 text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                      {item.description}
                    </p>
                    <div className="mt-6 flex items-center gap-2">
                      <div className="h-px w-4 bg-accent/30 group-hover:w-8 group-hover:bg-accent transition-all duration-300" />
                      <span className="text-[9px] font-semibold uppercase text-muted-foreground group-hover:text-foreground transition-colors duration-300" style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.14em' }}>
                        Learn More
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── SPECIALIST AIRLINE & AIRPORT TECHNOLOGY CONSULTING ──────────── */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="orb w-[35rem] h-[35rem] right-0 top-0 opacity-8"
          style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-12">
              <span className="pill-blue mb-4 inline-flex">Specialist Consulting</span>
              <h2 className="text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', fontWeight: 600 }}>
                Specialist Airline &amp; Airport Technology Consulting
              </h2>
              <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                Deep expertise across the full aviation technology stack — from passenger service systems and flight operations to airport infrastructure and cybersecurity.
              </p>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { label: 'Passenger Service System (PSS)', href: '/passenger-service-system-consulting' },
                { label: 'Electronic Flight Bag (EFB)', href: '/efb-consulting' },
                { label: 'Flight Data Monitoring', href: '/flight-data-monitoring' },
                { label: 'Airport Technology', href: '/airport-technology-solutions' },
                { label: 'Aviation Cybersecurity', href: '/cybersecurity' },
                { label: 'Digital Transformation', href: '/digital-transformation' },
                { label: 'Aviation Technology PMO', href: '/project-management-office' },
                { label: 'Technology Procurement', href: '/procurement-advisory' },
              ].map((item) => (
                <motion.div key={item.label} variants={fadeUp}>
                  <Link
                    to={item.href}
                    className="group flex items-center justify-between gap-3 px-5 py-4 rounded-xl border border-accent/15 bg-card/40 hover:border-accent/40 hover:bg-card transition-all duration-200"
                  >
                    <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-150" style={{ fontFamily: 'var(--font-sans)' }}>
                      {item.label}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-accent/40 group-hover:text-accent flex-shrink-0 transition-colors duration-150" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── AVIATION IT CONSULTING IN THE UAE ───────────────────────────── */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="orb w-[35rem] h-[35rem] left-0 bottom-0 opacity-8"
          style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-12 max-w-2xl">
              <span className="pill-blue mb-4 inline-flex">UAE &amp; Middle East</span>
              <h2 className="text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', fontWeight: 600 }}>
                {home.uae_it.heading}
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
                {home.uae_it.body}
              </p>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-10">
              {home.uae_it.items.map((item) => (
                <motion.div key={item.id} variants={fadeUp} className="flex items-start gap-3 px-5 py-4 rounded-xl border border-accent/15 bg-card/40">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  <span className="text-sm text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Link
                to="/it-infrastructure-cloud"
                className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
                style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.14em' }}
              >
                Aviation IT Infrastructure &amp; Cloud
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
              <Link
                to="/cybersecurity"
                className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
                style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.14em' }}
              >
                Aviation Cybersecurity Consulting
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
              <Link
                to="/digital-transformation"
                className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
                style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.14em' }}
              >
                Airline Digital Transformation Consulting
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY AEROEXPERT ───────────────────────────────────────────────── */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="orb w-[50rem] h-[50rem] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-8"
          style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-16 text-center">
              <span className="pill-blue mb-4 inline-flex">Our Advantage</span>
              <h2 className="text-foreground" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', fontWeight: 600 }}>
                {home.why.heading}
              </h2>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {home.why.items.map((item, idx) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  className="group card-glass relative p-8 transition-all duration-300 overflow-hidden"
                >
                  {/* Watermark number */}
                  <span className="absolute top-4 right-5 font-light text-accent/8 select-none pointer-events-none" style={{ fontFamily: 'var(--font-heading)', fontSize: '5rem', lineHeight: 1 }}>
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  {/* Animated accent dot */}
                  <div className="w-8 h-8 rounded-full bg-accent/15 border border-accent/25 flex items-center justify-center mb-6 group-hover:bg-accent/25 group-hover:glow-accent transition-all duration-300">
                    <div className="w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
                  </div>
                  <h3 className="text-foreground font-semibold mb-3 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                    {item.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="orb w-[30rem] h-[30rem] right-0 top-0 opacity-10"
          style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <div>
                <span className="pill-blue mb-4 inline-flex">Sectors</span>
                <h2 className="text-foreground" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', fontWeight: 600 }}>
                  {home.industries.heading}
                </h2>
              </div>
              <Link
                to="/industries"
                className="group flex-shrink-0 inline-flex items-center gap-2 text-[10px] font-semibold uppercase text-muted-foreground hover:text-foreground transition-colors duration-200"
                style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.14em' }}
              >
                All Industries
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
              </Link>
            </motion.div>
            <motion.div variants={stagger} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {home.industries.items.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  className="group flex items-center gap-4 px-6 py-4 rounded-2xl border border-accent/12 bg-card/50 hover:border-accent/35 hover:bg-card transition-all duration-250 relative overflow-hidden"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none rounded-2xl"
                    style={{ background: 'linear-gradient(to right, hsl(var(--accent)/0.06), transparent)' }} />
                  <div className="w-2 h-2 rounded-full flex-shrink-0 bg-accent group-hover:scale-150 group-hover:animate-pulse-glow transition-transform duration-200" />
                  <span className="text-sm font-medium text-foreground relative" style={{ fontFamily: 'var(--font-sans)' }}>
                    {item.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CONSULTING APPROACH ──────────────────────────────────────────── */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="orb w-[40rem] h-[40rem] left-0 bottom-0 opacity-8"
          style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 70%)' }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-20 text-center">
              <span className="pill-blue mb-4 inline-flex">Methodology</span>
              <h2 className="text-foreground" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.9rem, 3vw, 2.8rem)', fontWeight: 600 }}>
                {home.approach.heading}
              </h2>
            </motion.div>
            <motion.div variants={stagger} className="relative">
              {/* Connector line */}
              <div className="hidden lg:block absolute h-px bg-accent/12" style={{ top: '2.4rem', left: '10%', right: '10%' }} />
              <motion.div
                className="hidden lg:block absolute h-px"
                style={{ top: '2.4rem', left: '10%', width: '80%', background: 'linear-gradient(to right, transparent, hsl(var(--accent)/0.5), transparent)' }}
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' as const, repeatDelay: 2 }}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
                {home.approach.steps.map((step, idx) => (
                  <motion.div
                    key={step.id}
                    variants={fadeUp}
                    className="relative flex flex-col items-start lg:items-center lg:text-center group"
                  >
                    <div className="relative z-10 w-[3.2rem] h-[3.2rem] flex items-center justify-center mb-6 rounded-full bg-accent/12 border border-accent/25 bg-card group-hover:border-accent/60 group-hover:glow-accent transition-all duration-300">
                      <span className="text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors duration-300" style={{ fontFamily: 'var(--font-sans)' }}>{step.number}</span>
                      {idx === 0 && (
                        <motion.div
                          className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-accent"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      )}
                    </div>
                    <h3 className="text-foreground font-semibold mb-2 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                      {step.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────────────────── */}
      <section className="py-28 relative overflow-hidden bg-secondary">
        {/* Large central orb */}
        <div className="orb w-[60rem] h-[60rem] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 opacity-12"
          style={{ background: 'radial-gradient(circle, hsl(var(--accent)) 0%, transparent 65%)' }} />
        {/* Animated grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--accent)/0.8) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--accent)/0.8) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }} />

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} className="mb-7">
              <span className="pill-blue inline-flex">Get Started</span>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="text-foreground mb-12"
              style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.9rem, 3.5vw, 3rem)', fontWeight: 600 }}
            >
              {home.cta.heading}
            </motion.h2>
            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2.5 px-10 py-4 text-[10px] font-semibold uppercase rounded-full bg-accent text-accent-foreground transition-all duration-300 hover:glow-accent-strong relative overflow-hidden"
                style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.18em' }}
              >
                <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-foreground/10" />
                <span className="relative">{home.cta.button}</span>
                <ArrowRight className="relative w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/services"
                className="group inline-flex items-center gap-2.5 px-10 py-4 text-[10px] font-semibold uppercase rounded-full border border-accent/35 text-muted-foreground transition-all duration-300 hover:border-accent hover:text-foreground hover:bg-accent/10 relative overflow-hidden"
                style={{ fontFamily: 'var(--font-sans)', letterSpacing: '0.18em' }}
              >
                <span className="relative">Explore Services</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────────────── */}
      <ContactSection />
    </>
  );
}
