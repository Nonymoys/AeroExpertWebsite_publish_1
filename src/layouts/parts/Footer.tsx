import { Link } from 'react-router';
import { ArrowRight, MapPin, Globe, Mail, Phone } from 'lucide-react';

const footerCols = [
  {
    heading: 'Services',
    links: [
      { label: 'All Services', href: '/services' },
      { label: 'Aviation Technology Consulting', href: '/aviation-technology-consulting' },
      { label: 'Flight Data Monitoring', href: '/flight-data-monitoring' },
      { label: 'Cybersecurity and IT Governance', href: '/cybersecurity' },
      { label: 'Digital Transformation and Analytics', href: '/digital-transformation' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Industries', href: '/industries' },
      { label: 'Consulting Approach', href: '/consulting-approach' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-accent/15 pt-20 pb-8" role="contentinfo">
      {/* Top shimmer line */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent mb-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block mb-6 group">
              <div className="flex flex-col leading-none">
                <span
                  className="text-foreground font-semibold tracking-[0.22em] uppercase text-sm transition-opacity duration-200 group-hover:opacity-70"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  AeroExpert
                </span>
                <span
                  className="text-muted-foreground tracking-[0.18em] uppercase text-[10px] mt-0.5 transition-opacity duration-200 group-hover:opacity-70"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  Consulting Services FZE
                </span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed text-muted-foreground mb-6 max-w-xs" style={{ fontFamily: 'var(--font-sans)' }}>
              Specialist aviation technology and digital transformation consultancy. Independent, expert advisory services for airlines, airports and aviation organisations.
            </p>
            <div className="flex flex-col gap-2 mb-8">
              <div className="flex items-center gap-2 text-xs text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                <MapPin className="w-3 h-3 flex-shrink-0 text-accent" />
                <span>United Arab Emirates</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                <Globe className="w-3 h-3 flex-shrink-0 text-accent" />
                <span>Globally Active</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                <Mail className="w-3 h-3 flex-shrink-0 text-accent" />
                <a href="mailto:info@aeroexpertconsulting.com" className="hover:text-foreground transition-colors duration-200">
                  info@aeroexpertconsulting.com
                </a>
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                <Phone className="w-3 h-3 flex-shrink-0 text-accent" />
                <span>[ADD: phone / WhatsApp number]</span>
              </div>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-semibold tracking-[0.14em] uppercase border border-accent/30 text-foreground hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-200"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              Schedule a Consultation
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Link columns */}
          {footerCols.map((col) => (
            <div key={col.heading}>
              <p
                className="text-[10px] font-semibold tracking-[0.2em] uppercase mb-5 text-foreground"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {col.heading}
              </p>
              <nav aria-label={`${col.heading} links`} className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200 flex items-center gap-1.5 group"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    <span className="w-3 h-px bg-accent/30 group-hover:bg-accent group-hover:w-4 transition-all duration-200 flex-shrink-0" />
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-accent/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[10px] text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
            &copy; {new Date().getFullYear()} AeroExpert Consulting Services FZE. All rights reserved.
          </p>
          <p className="text-[10px] text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
            Aviation Technology &amp; Digital Transformation · UAE
          </p>
        </div>
      </div>
    </footer>
  );
}
