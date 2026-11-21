export interface SiteMeta {
  name: string;
  summary: string;
  description?: string;
  location?: string;
  founded?: string;
  contact?: {
    email?: string;
    website?: string;
  };
  areaServed?: string[];
  knowsAbout?: string[];
  services?: Array<{ name: string; description: string }>;
  industries?: string[];
  keywords?: string[];
}

export const siteMeta: SiteMeta = {
  name: "AeroExpert Consulting Services FZE",
  summary:
    "Independent aviation technology consultancy for airlines, airports and aviation authorities, providing vendor-neutral advisory on airline systems, flight operations, cybersecurity, digital transformation and procurement — based in the UAE and serving clients globally.",
  description:
    "AeroExpert Consulting Services FZE is an independent aviation technology and digital transformation consultancy based in the UAE. We provide vendor-neutral advisory services to airlines, airports, ground handlers, MRO organisations and aviation authorities across the UAE, GCC, Middle East and globally. Our consultants bring deep hands-on experience across the full spectrum of aviation technology — from passenger service systems and flight operations platforms to cybersecurity, IT infrastructure, and large-scale digital transformation programmes.",
  location: "United Arab Emirates (UAE) — serving clients across the UAE, GCC, Middle East, Africa, Asia Pacific and globally",
  contact: {
    email: "info@aeroexpertconsulting.com",
    website: "https://aeroexpertconsulting.com",
  },
  areaServed: [
    "United Arab Emirates",
    "Dubai",
    "Abu Dhabi",
    "GCC",
    "Saudi Arabia",
    "Qatar",
    "Oman",
    "Bahrain",
    "Kuwait",
    "Middle East",
    "Africa",
    "Asia Pacific",
    "Worldwide",
  ],
  knowsAbout: [
    "Aviation technology consulting",
    "Airline technology consulting",
    "Airport technology consulting",
    "Passenger Service System (PSS) consulting",
    "PSS migration consulting",
    "Departure Control System (DCS) consulting",
    "Revenue Management System (RMS) consulting",
    "Electronic Flight Bag (EFB) consulting",
    "EFB operational approval (GCAA)",
    "Flight Data Monitoring (FDM)",
    "FOQA (Flight Operational Quality Assurance)",
    "Airline Operations Control Centre (OCC) consulting",
    "Flight planning system consulting",
    "Airport IT systems",
    "CUPPS (Common Use Passenger Processing Systems)",
    "CUSS (Common Use Self-Service)",
    "Baggage handling systems",
    "FIDS (Flight Information Display Systems)",
    "Airport Operational Database (AODB)",
    "A-CDM (Airport Collaborative Decision Making)",
    "Aviation cybersecurity",
    "ICAO cybersecurity framework",
    "UAE IA / NESA compliance",
    "Aviation IT infrastructure and cloud",
    "Airline digital transformation",
    "Aviation data analytics",
    "NDC (New Distribution Capability)",
    "ONE Order",
    "Airline loyalty platforms",
    "Airline e-commerce",
    "Aviation procurement advisory",
    "Aviation PMO",
    "IATA standards",
    "ICAO Annex 19",
    "GCAA (UAE General Civil Aviation Authority)",
    "SMS (Safety Management System)",
    "MRO technology",
    "ACARS",
    "Ancillary revenue solutions",
    "Cargo management systems",
  ],
  services: [
    {
      name: "Aviation Technology Consulting",
      description:
        "Vendor-neutral advisory on Passenger Service Systems (PSS), Departure Control Systems (DCS), reservations platforms, Revenue Management Systems (RMS), NDC distribution, loyalty programmes and ancillary revenue technology for airlines.",
    },
    {
      name: "Passenger Service System (PSS) Consulting",
      description:
        "Independent PSS strategy, vendor selection, RFP development, contract review, integration architecture, data migration, UAT, cutover planning and go-live support for airlines in the UAE and Middle East.",
    },
    {
      name: "PSS Migration Consulting",
      description:
        "End-to-end PSS migration advisory: migration planning, data migration strategy, parallel running, cutover execution and post-migration stabilisation for airlines.",
    },
    {
      name: "Departure Control System (DCS) Consulting",
      description:
        "Independent DCS selection, implementation oversight and integration advisory for airlines and ground handlers.",
    },
    {
      name: "Airline Revenue Management Consulting",
      description:
        "Revenue management system selection, implementation advisory and optimisation for airlines.",
    },
    {
      name: "Airline NDC and ONE Order Consulting",
      description:
        "NDC and ONE Order strategy, technology selection and implementation advisory for airlines transitioning to modern distribution.",
    },
    {
      name: "Electronic Flight Bag (EFB) Consulting",
      description:
        "Independent EFB strategy, hardware and software selection, GCAA operational approval readiness, EFB administration and go-live support for airlines in the UAE and Middle East.",
    },
    {
      name: "Airline OCC Consulting",
      description:
        "Operations Control Centre (OCC) and IOCC design, technology selection and implementation advisory for airlines.",
    },
    {
      name: "Flight Planning System Consulting",
      description:
        "Airline flight planning system selection, implementation oversight and EFB integration advisory.",
    },
    {
      name: "Commercial and Digital Platforms",
      description:
        "Advisory on airline CRM, contact-centre platforms, payment gateways, airline websites, mobile applications and end-to-end digital customer journey design.",
    },
    {
      name: "Flight Operations and Operational Systems",
      description:
        "Advisory on Electronic Flight Bag (EFB) platforms, flight dispatch systems, crew management systems, aircraft technical records, fuel management and Operations Control Centre (OCC) technology for airlines.",
    },
    {
      name: "Flight Data Monitoring (FDM)",
      description:
        "FDM programme design, review and improvement for airlines. Covers QAR/FDR data analysis, exceedance detection, SOP compliance monitoring, fuel optimisation and ICAO Annex 19 safety management alignment.",
    },
    {
      name: "Airport Technology Solutions",
      description:
        "Advisory on airport check-in systems, boarding gate systems, self-service kiosks (CUPPS/CUSS), baggage reconciliation systems, FIDS, Type-B messaging and API/PNR integration for airports and ground handlers in the Middle East.",
    },
    {
      name: "IT Infrastructure and Cloud",
      description:
        "Aviation IT infrastructure assessments, cloud migration strategy, hybrid-cloud architecture, disaster recovery planning and high-availability architecture design for airlines and airports.",
    },
    {
      name: "Cybersecurity and IT Governance",
      description:
        "Aviation cybersecurity assessments, security risk analysis, ICAO cybersecurity framework alignment, UAE IA/NESA compliance advisory, IT governance frameworks and incident response planning.",
    },
    {
      name: "Digital Transformation and Analytics",
      description:
        "Airline digital transformation strategy, business process automation, AI use-case identification, data analytics and data governance for aviation organisations.",
    },
    {
      name: "Project Management Office (PMO)",
      description:
        "Independent aviation technology PMO, programme governance, vendor management, RFP preparation and go-live readiness support for aviation technology implementations.",
    },
    {
      name: "Procurement Advisory",
      description:
        "Independent aviation technology procurement advisory covering requirements definition, vendor evaluation, technical tender review, commercial evaluation and contract negotiation support.",
    },
  ],
  industries: [
    "Commercial airlines",
    "Regional and low-cost carriers",
    "Cargo airlines",
    "International airports",
    "Regional airports",
    "Ground handling companies",
    "MRO (Maintenance, Repair and Overhaul) organisations",
    "Civil aviation authorities",
    "Aviation regulatory bodies",
    "Business aviation operators",
    "Charter operators",
  ],
  keywords: [
    "aviation technology consulting UAE",
    "aviation consultancy Dubai",
    "aviation IT consulting UAE",
    "airline technology consultant",
    "airport technology consulting Middle East",
    "aviation digital transformation consulting",
    "PSS consulting",
    "passenger service system consultant",
    "EFB consulting UAE",
    "electronic flight bag consulting",
    "flight data monitoring services",
    "aviation cybersecurity consulting UAE",
    "aviation procurement advisory",
    "aviation PMO",
    "independent aviation consultancy",
    "vendor-neutral aviation advisory",
  ],
};
