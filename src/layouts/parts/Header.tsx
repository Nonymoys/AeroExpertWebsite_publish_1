import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// ─── Nav structure ────────────────────────────────────────────────────────────

const serviceGroups = [
  {
    heading: 'Airline Systems',
    items: [
      { label: 'Aviation Technology Consulting', href: '/aviation-technology-consulting' },
      { label: 'Commercial and Digital Platforms', href: '/commercial-digital-platforms' },
    ],
  },
  {
    heading: 'Flight Operations and Safety',
    items: [
      { label: 'Flight Operations and Operational Systems', href: '/flight-operations-systems' },
      { label: 'Flight Data Monitoring', href: '/flight-data-monitoring' },
    ],
  },
  {
    heading: 'Airports and Infrastructure',
    items: [
      { label: 'Airport Technology Solutions', href: '/airport-technology-solutions' },
      { label: 'IT Infrastructure and Cloud', href: '/it-infrastructure-cloud' },
      { label: 'Cybersecurity and IT Governance', href: '/cybersecurity' },
    ],
  },
  {
    heading: 'Advisory and Delivery',
    items: [
      { label: 'Digital Transformation and Analytics', href: '/digital-transformation' },
      { label: 'Project Management Office', href: '/project-management-office' },
      { label: 'Procurement Advisory', href: '/procurement-advisory' },
    ],
  },
];

const allServiceHrefs = serviceGroups.flatMap((g) => g.items.map((i) => i.href));

const primaryLinks = [
  { label: 'About', href: '/about' },
  { label: 'Industries', href: '/industries' },
  { label: 'Insights', href: '/insights' },
  { label: 'Approach', href: '/consulting-approach' },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  const isServicesActive =
    location.pathname === '/services' || allServiceHrefs.includes(location.pathname);

  return (
    <header
      role="banner"
      className={`sticky top-0 z-50 bg-header transition-colors duration-300 ${
        scrolled ? 'border-b border-header-border' : 'border-b border-transparent'
      }`}
    >
      {/* Accent top line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, hsl(var(--accent)/0.7) 40%, hsl(var(--accent)) 50%, hsl(var(--accent)/0.7) 60%, transparent 100%)',
          opacity: scrolled ? 1 : 0.35,
          transition: 'opacity 0.3s',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex-shrink-0 group">
            <img
              src="/airo-assets/images/logo/horizontal/light"
              alt="AeroExpert Consulting Services FZE"
              className="block h-auto max-h-9 md:max-h-10 w-auto max-w-[180px] object-contain self-center transition-opacity duration-200 group-hover:opacity-75"
            />
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-0.5">

            {/* Services mega-dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                onMouseEnter={() => setServicesOpen(true)}
                className={`flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors duration-150 ${
                  isServicesActive || servicesOpen
                    ? 'text-foreground bg-accent/8'
                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/5'
                }`}
                style={{ fontFamily: 'var(--font-sans)' }}
                aria-expanded={servicesOpen}
                aria-haspopup="true"
              >
                Services
                <ChevronDown
                  className={`w-3 h-3 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 6 }}
                    transition={{ duration: 0.13, ease: 'easeOut' as const }}
                    onMouseLeave={() => setServicesOpen(false)}
                    className="absolute top-full left-0 mt-2 bg-card border border-accent/20 rounded-xl overflow-hidden shadow-xl"
                    style={{ width: '22rem' }}
                  >
                    <div
                      className="h-px"
                      style={{
                        background:
                          'linear-gradient(to right, transparent, hsl(var(--accent)/0.5), transparent)',
                      }}
                    />

                    <div className="p-3">
                      {serviceGroups.map((group, gi) => (
                        <div key={group.heading} className={gi > 0 ? 'mt-3 pt-3 border-t border-accent/8' : ''}>
                          {/* Group heading — not a link */}
                          <p
                            className="px-2 mb-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-accent/70"
                            style={{ fontFamily: 'var(--font-sans)' }}
                          >
                            {group.heading}
                          </p>
                          {group.items.map((item) => {
                            const active = location.pathname === item.href;
                            return (
                              <Link
                                key={item.href}
                                to={item.href}
                                className={`group flex items-center justify-between px-2 py-2 rounded-lg text-[10px] font-medium transition-colors duration-100 ${
                                  active
                                    ? 'text-foreground bg-accent/8'
                                    : 'text-muted-foreground hover:text-foreground hover:bg-accent/5'
                                }`}
                                style={{ fontFamily: 'var(--font-sans)' }}
                              >
                                {item.label}
                                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-40 flex-shrink-0 transition-opacity duration-150" />
                              </Link>
                            );
                          })}
                        </div>
                      ))}

                      {/* All Services footer link */}
                      <div className="mt-3 pt-3 border-t border-accent/8">
                        <Link
                          to="/services"
                          className={`flex items-center justify-between px-2 py-2 rounded-lg text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors duration-100 ${
                            location.pathname === '/services'
                              ? 'text-foreground bg-accent/8'
                              : 'text-accent hover:text-foreground hover:bg-accent/5'
                          }`}
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          All Services
                          <ArrowUpRight className="w-3 h-3 opacity-60 flex-shrink-0" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Primary links */}
            {primaryLinks.map((link) => {
              const active = location.pathname === link.href;
              return (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`relative px-3.5 py-2 rounded-lg text-[10px] font-semibold uppercase tracking-[0.14em] transition-colors duration-150 ${
                    active
                      ? 'text-foreground bg-accent/8'
                      : 'text-muted-foreground hover:text-foreground hover:bg-accent/5'
                  }`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-1 left-3.5 right-3.5 h-px bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA + Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            <Link
              to="/contact"
              className={`hidden lg:inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-[10px] font-semibold uppercase tracking-[0.14em] transition-all duration-150 ${
                location.pathname === '/contact'
                  ? 'bg-accent text-accent-foreground'
                  : 'bg-accent/12 border border-accent/30 text-foreground hover:bg-accent/20 hover:border-accent/50'
              }`}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Contact Us
              <ArrowUpRight className="w-3 h-3 opacity-70" />
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden flex items-center justify-center w-8 h-8 text-foreground border border-accent/20 rounded-lg hover:border-accent/45 hover:bg-accent/8 transition-all duration-150"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.span
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.12 }}
                  >
                    <X className="w-4 h-4" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.12 }}
                  >
                    <Menu className="w-4 h-4" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.18, ease: 'easeInOut' as const }}
            className="lg:hidden overflow-hidden border-t border-header-border bg-header"
          >
            <nav aria-label="Mobile navigation" className="max-w-7xl mx-auto px-6 py-5">

              {/* Services accordion */}
              <div className="border-b border-accent/10 mb-1">
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="flex items-center justify-between w-full py-3 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground transition-colors duration-150"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Services
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.16 }}
                      className="overflow-hidden pb-3"
                    >
                      {serviceGroups.map((group) => (
                        <div key={group.heading} className="mt-3">
                          <p
                            className="px-3 mb-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-accent/70"
                            style={{ fontFamily: 'var(--font-sans)' }}
                          >
                            {group.heading}
                          </p>
                          {group.items.map((item) => (
                            <Link
                              key={item.href}
                              to={item.href}
                              onClick={() => setMobileOpen(false)}
                              className={`block px-3 py-2 text-[10px] font-medium transition-colors duration-150 ${
                                location.pathname === item.href
                                  ? 'text-foreground'
                                  : 'text-muted-foreground hover:text-foreground'
                              }`}
                              style={{ fontFamily: 'var(--font-sans)' }}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      ))}
                      <div className="mt-3 pt-3 border-t border-accent/10 px-3">
                        <Link
                          to="/services"
                          onClick={() => setMobileOpen(false)}
                          className="text-[10px] font-semibold uppercase tracking-[0.12em] text-accent hover:text-foreground transition-colors duration-150"
                          style={{ fontFamily: 'var(--font-sans)' }}
                        >
                          All Services →
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {primaryLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-3 text-[10px] font-semibold uppercase tracking-[0.14em] border-b border-accent/10 transition-colors duration-150 ${
                    location.pathname === link.href
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  {link.label}
                </Link>
              ))}

              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center w-full py-3 text-[10px] font-semibold uppercase tracking-[0.14em] rounded-lg bg-accent/12 border border-accent/30 text-foreground hover:bg-accent/20 transition-all duration-150"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Contact Us
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
