import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, MessageCircle, ChevronDown, Loader2 } from 'lucide-react';

/* ─── Types ─────────────────────────────────────────────────────────────── */
type Role = 'bot' | 'user';
interface Message { id: number; role: Role; text: string; suggestions?: string[] }

/* ─── Knowledge base (no invented facts) ───────────────────────────────── */

interface KBEntry {
  answer: string;
  link?: { label: string; href: string };
  suggestions?: string[];
}

const RESTRICTED_TOPICS = [
  'price', 'pricing', 'cost', 'fee', 'rate', 'quote', 'budget',
  'timeline', 'how long', 'duration', 'weeks', 'months',
  'client', 'customer', 'case study', 'case studies', 'reference', 'past project',
  'team size', 'how many people', 'headcount', 'staff',
  'certified', 'certification', 'accredited', 'accreditation',
  'implement', 'install', 'configure', 'code', 'api key', 'technical detail',
];

const KB: KBEntry[] = [
  // ── Service 1: Aviation Technology Consulting ──────────────────────────
  {
    answer: `AeroExpert's Aviation Technology Consulting service covers the full range of airline commercial and operational systems. This includes Passenger Service Systems (PSS), Departure Control Systems (DCS), reservations and ticketing platforms, revenue management systems, cargo management systems, loyalty and frequent flyer platforms, and ancillary revenue technology.\n\nWe provide vendor-neutral advisory — helping airlines define requirements, evaluate vendors, manage procurement, and oversee implementation. The people inside an airline who typically engage us include the CIO, VP Technology, Head of Revenue Management, Head of Commercial, and IT Programme Directors.`,
    link: { label: 'Aviation Technology Consulting', href: '/aviation-technology-consulting' },
    suggestions: ['What is a PSS?', 'Can you help with NDC?', 'Tell me about Commercial and Digital Platforms.'],
  },
  // ── Service 2: Commercial and Digital Platforms ────────────────────────
  {
    answer: `AeroExpert's Commercial and Digital Platforms service covers the technology that supports an airline's customer-facing and commercial operations. This includes CRM systems, contact-centre platforms, payment gateways, airline websites, mobile applications, and digital customer journey design.\n\nWe also advise on NDC (New Distribution Capability) strategy and implementation, digital channel optimisation, and the integration of commercial platforms with PSS and loyalty systems. Typical stakeholders include the Chief Commercial Officer, Head of Digital, Head of Customer Experience, and VP Distribution.`,
    link: { label: 'Commercial and Digital Platforms', href: '/commercial-digital-platforms' },
    suggestions: ['What is NDC?', 'Can you help with airline CRM?', 'Tell me about Aviation Technology Consulting.'],
  },
  // ── Service 3: Flight Operations and Operational Systems ───────────────
  {
    answer: `AeroExpert's Flight Operations and Operational Systems service covers the technology that supports safe and efficient airline operations. This includes Electronic Flight Bag (EFB) platforms, flight dispatch and planning systems, crew management and scheduling systems, aircraft technical records systems, maintenance information systems, fuel management platforms, and Operations Control Centre (OCC/IOCC) systems.\n\nWe help airlines select, implement and optimise these platforms. Typical stakeholders include the Director of Flight Operations, VP Operations, Head of Crew Planning, Director of Engineering, and the IT team supporting operations.`,
    link: { label: 'Flight Operations and Operational Systems', href: '/flight-operations-systems' },
    suggestions: ['What is an EFB?', 'Can you help with crew management systems?', 'Tell me about Flight Data Monitoring.'],
  },
  // ── Service 4: Flight Data Monitoring ─────────────────────────────────
  {
    answer: `AeroExpert's Flight Data Monitoring (FDM) service helps airlines improve safety, reduce operational risk, and enhance fuel efficiency through proactive flight data analysis.\n\nCapabilities include QAR and FDR data analysis, flight parameter monitoring, exceedance detection, trend monitoring, safety event investigation, unstable approach analysis, hard landing monitoring, and fuel efficiency monitoring (continuous descent operations, reduced thrust, APU usage). We also support FDM programme development aligned with ICAO Annex 19.\n\nTypical stakeholders include the Flight Safety Manager, Director of Flight Operations, Head of Safety, and the Quality Assurance team.`,
    link: { label: 'Flight Data Monitoring', href: '/flight-data-monitoring' },
    suggestions: ['What is ICAO Annex 19?', 'Can you help with fuel efficiency?', 'Tell me about Flight Operations Systems.'],
  },
  // ── Service 5: Airport Technology Solutions ───────────────────────────
  {
    answer: `AeroExpert's Airport Technology Solutions service covers the technology used at airports to process passengers and baggage. This includes passenger check-in systems, boarding systems, self-service kiosks, baggage handling systems, passenger information display systems (FIDS), API/PNR integration, immigration connectivity, and Type-B messaging.\n\nWe advise airports, ground handlers, and airlines on technology selection, integration, and digital transformation of airport operations. Typical stakeholders include the Airport IT Director, Head of Ground Operations, VP Airport Services, and the airline's Head of Airport Technology.`,
    link: { label: 'Airport Technology Solutions', href: '/airport-technology-solutions' },
    suggestions: ['What is Type-B messaging?', 'Can you help with self-service kiosks?', 'Tell me about IT Infrastructure and Cloud.'],
  },
  // ── Service 6: IT Infrastructure and Cloud ────────────────────────────
  {
    answer: `AeroExpert's IT Infrastructure and Cloud service helps aviation organisations modernise their technology foundations. We provide infrastructure assessments, cloud migration strategy, disaster recovery planning, and high-availability architecture design.\n\nThis service is relevant when an airline or airport is evaluating cloud adoption, planning a data centre migration, or needs to improve the resilience and performance of its IT environment. Typical stakeholders include the CIO, Head of IT Infrastructure, and IT Architecture teams.`,
    link: { label: 'IT Infrastructure and Cloud', href: '/it-infrastructure-cloud' },
    suggestions: ['Can you help with cloud migration?', 'What is disaster recovery planning?', 'Tell me about Cybersecurity.'],
  },
  // ── Service 7: Cybersecurity and IT Governance ────────────────────────
  {
    answer: `AeroExpert's Cybersecurity and IT Governance service helps aviation organisations protect their systems and data. Capabilities include cybersecurity assessments, information security strategy, security risk assessments, vulnerability assessments, security policy development, IT governance frameworks, user awareness programmes, and incident response planning.\n\nWe support alignment with frameworks including ISO 27001 and NIST, and with regulatory requirements from ICAO, EASA, and the GCAA. Typical stakeholders include the CISO, Head of IT Security, CIO, and Compliance teams.`,
    link: { label: 'Cybersecurity and IT Governance', href: '/cybersecurity' },
    suggestions: ['What is ISO 27001?', 'Can you help with GCAA compliance?', 'Tell me about IT Infrastructure and Cloud.'],
  },
  // ── Service 8: Digital Transformation and Analytics ───────────────────
  {
    answer: `AeroExpert's Digital Transformation and Analytics service helps aviation organisations develop and execute their digital strategy. This includes digital maturity assessments, technology roadmap planning, process digitalisation, data strategy and analytics, Power BI reporting, AI use case identification, operational technology integration, and change management.\n\nWe work with airlines and airports that want to move beyond legacy processes and build data-driven operations. Typical stakeholders include the CEO, CDO, CIO, Head of Strategy, and transformation programme teams.`,
    link: { label: 'Digital Transformation and Analytics', href: '/digital-transformation' },
    suggestions: ['Can you help with data analytics?', 'What AI use cases exist in aviation?', 'Tell me about your Consulting Approach.'],
  },
  // ── Service 9: Project Management Office ──────────────────────────────
  {
    answer: `AeroExpert's Project Management Office (PMO) service provides independent programme governance and delivery assurance for aviation technology implementations. Capabilities include PMO establishment, programme governance frameworks, vendor management, RFP preparation and evaluation support, and go-live readiness assessments.\n\nThis service is particularly valuable for complex, multi-vendor technology programmes such as PSS migrations, airport system replacements, or large-scale digital transformation initiatives. Typical stakeholders include the CIO, Programme Director, and senior leadership overseeing major technology investments.`,
    link: { label: 'Project Management Office', href: '/project-management-office' },
    suggestions: ['Can you help with a PSS migration?', 'What is go-live readiness?', 'Tell me about Procurement Advisory.'],
  },
  // ── Service 10: Procurement Advisory ─────────────────────────────────
  {
    answer: `AeroExpert's Procurement Advisory service supports aviation organisations through the full technology procurement lifecycle. This includes requirements definition, market analysis, vendor shortlisting, RFP and RFI preparation, technical and commercial tender evaluation, and negotiation support.\n\nBecause AeroExpert is vendor-neutral and independent, we provide objective advice without commercial ties to any technology supplier. Typical stakeholders include the CIO, Head of Procurement, CFO, and the technology selection committee.`,
    link: { label: 'Procurement Advisory', href: '/procurement-advisory' },
    suggestions: ['Can you help with a vendor evaluation?', 'What is an RFP?', 'Tell me about the Project Management Office.'],
  },
  // ── Consulting Approach ───────────────────────────────────────────────
  {
    answer: `AeroExpert follows a structured five-phase consulting approach:\n\n1. Discover — Understanding your organisation, current systems, challenges and objectives.\n2. Assess — Evaluating the current state against industry best practice and your strategic goals.\n3. Design — Developing recommendations, solution options, and a roadmap.\n4. Implement — Supporting delivery through programme governance, vendor management, and hands-on advisory.\n5. Optimise — Reviewing outcomes and identifying further improvements post-implementation.\n\nThis approach is applied across all our service areas and is tailored to the scale and complexity of each engagement.`,
    link: { label: 'Our Consulting Approach', href: '/consulting-approach' },
    suggestions: ['How do you work with clients?', 'What services does AeroExpert provide?', 'I want to discuss a project.'],
  },
  // ── Industries ────────────────────────────────────────────────────────
  {
    answer: `AeroExpert works with a broad range of aviation organisations, including:\n\n• Commercial airlines (full-service and low-cost)\n• Regional airlines\n• Cargo airlines and integrators\n• Charter and business aviation operators\n• Airports and terminal operators\n• Ground handling companies\n• Aviation authorities and regulators\n• MRO organisations\n• Flight training organisations\n• Aviation technology providers\n\nWe are based in the UAE and serve clients globally.`,
    link: { label: 'Industries We Serve', href: '/industries' },
    suggestions: ['Can you help a low-cost airline?', 'Do you work with airports?', 'Tell me about your services.'],
  },
  // ── About ─────────────────────────────────────────────────────────────
  {
    answer: `AeroExpert Consulting Services FZE is an independent aviation technology and digital transformation consultancy based in the UAE. We provide vendor-neutral, business-driven advisory services to airlines, airports, and aviation organisations globally.\n\nBeing independent means we have no commercial ties to any technology vendor — our advice is based solely on what is right for your organisation.`,
    link: { label: 'About AeroExpert', href: '/about' },
    suggestions: ['What services does AeroExpert provide?', 'What industries do you serve?', 'How do I get in touch?'],
  },
  // ── Contact ───────────────────────────────────────────────────────────
  {
    answer: `You can reach the AeroExpert team through the Contact page on this website. A consultant will respond to discuss your requirements.\n\nAlternatively, I can collect your details here and pass them to the team directly — just let me know.`,
    link: { label: 'Contact AeroExpert', href: '/contact' },
    suggestions: ['Yes, collect my details here.', 'What services does AeroExpert provide?'],
  },
];

/* ─── Intent matching ───────────────────────────────────────────────────── */

function isRestrictedQuery(text: string): boolean {
  const t = text.toLowerCase();
  return RESTRICTED_TOPICS.some((topic) => t.includes(topic));
}

function matchKB(text: string): KBEntry | null {
  const t = text.toLowerCase();

  // Contact / get in touch
  if (t.includes('contact') || t.includes('get in touch') || t.includes('reach') || t.includes('email') && !t.includes('email system')) return KB[13];

  // About
  if (t.includes('who are') || t.includes('about aeroexpert') || t.includes('who is aeroexpert') || t.includes('independent') || t.includes('based in') || t.includes('uae') || t.includes('company')) return KB[12];

  // Consulting approach
  if (t.includes('approach') || t.includes('methodology') || t.includes('how do you work') || t.includes('discover') || t.includes('five phase') || t.includes('5 phase') || t.includes('optimis') || t.includes('optimiz')) return KB[10];

  // Industries
  if (t.includes('industr') || t.includes('sector') || t.includes('who do you work') || t.includes('who do you serve') || t.includes('low-cost') || t.includes('lcc') || t.includes('cargo airline') || t.includes('mro') || t.includes('ground hand') || t.includes('regulator') || t.includes('authorit')) return KB[11];

  // FDM
  if (t.includes('fdm') || t.includes('flight data monitor') || t.includes('qar') || t.includes('fdr') || t.includes('exceedance') || t.includes('hard landing') || t.includes('unstable approach') || t.includes('annex 19')) return KB[3];

  // Cybersecurity
  if (t.includes('cyber') || t.includes('security') || t.includes('iso 27001') || t.includes('nist') || t.includes('gcaa') || t.includes('easa') || t.includes('governance') || t.includes('incident response') || t.includes('vulnerability') || t.includes('ciso')) return KB[6];

  // Digital transformation
  if (t.includes('digital transform') || t.includes('digitali') || t.includes('analytics') || t.includes('power bi') || t.includes('data strategy') || t.includes('roadmap') || t.includes('maturity') || t.includes('ai use case') || t.includes('automation')) return KB[7];

  // Airport technology
  if (t.includes('airport') || t.includes('check-in') || t.includes('baggage') || t.includes('kiosk') || t.includes('fids') || t.includes('type-b') || t.includes('boarding') || t.includes('ground handler') || t.includes('terminal')) return KB[4];

  // IT infrastructure / cloud
  if (t.includes('infrastructure') || t.includes('cloud') || t.includes('migration') || t.includes('disaster recovery') || t.includes('high availability') || t.includes('data centre') || t.includes('data center') || t.includes('server')) return KB[5];

  // PMO
  if (t.includes('pmo') || t.includes('programme management') || t.includes('program management') || t.includes('project management') || t.includes('go-live') || t.includes('delivery assurance') || t.includes('governance')) return KB[8];

  // Procurement
  if (t.includes('procure') || t.includes('vendor') || t.includes('rfp') || t.includes('rfi') || t.includes('tender') || t.includes('evaluation') || t.includes('negotiat') || t.includes('selection') || t.includes('shortlist')) return KB[9];

  // Flight operations
  if (t.includes('flight operation') || t.includes('efb') || t.includes('electronic flight bag') || t.includes('dispatch') || t.includes('crew management') || t.includes('crew schedul') || t.includes('technical record') || t.includes('fuel management') || t.includes('occ') || t.includes('iocc') || t.includes('maintenance')) return KB[2];

  // Commercial / digital platforms
  if (t.includes('crm') || t.includes('contact centre') || t.includes('contact center') || t.includes('payment gateway') || t.includes('mobile app') || t.includes('website') || t.includes('ndc') || t.includes('distribution') || t.includes('digital channel') || t.includes('commercial platform')) return KB[1];

  // PSS / DCS / reservations / revenue management / loyalty / ancillary
  if (t.includes('pss') || t.includes('dcs') || t.includes('departure control') || t.includes('reservation') || t.includes('ticketing') || t.includes('revenue management') || t.includes('loyalty') || t.includes('frequent flyer') || t.includes('ancillary') || t.includes('cargo management')) return KB[0];

  // General services / what do you do / how can you help
  if (t.includes('service') || t.includes('what do you') || t.includes('what can you') || t.includes('offer') || t.includes('help') || t.includes('capability') || t.includes('speciali')) return KB[0];

  return null;
}

/* ─── Lead capture flow ─────────────────────────────────────────────────── */
type LeadField = 'name' | 'company' | 'title' | 'email' | 'phone' | 'country' | 'requirement';
const LEAD_STEPS: { field: LeadField; question: string }[] = [
  { field: 'name', question: "May I have your name?" },
  { field: 'company', question: "And your company or organisation?" },
  { field: 'title', question: "What is your job title?" },
  { field: 'email', question: "What is the best email address to reach you?" },
  { field: 'phone', question: "And your phone number?" },
  { field: 'country', question: "Which country are you based in?" },
  { field: 'requirement', question: "Please briefly describe your requirement or the challenge you'd like AeroExpert to help with." },
];

type LeadData = Partial<Record<LeadField, string>> & { interest?: string };

/* ─── Initial suggestions ───────────────────────────────────────────────── */
const INITIAL_SUGGESTIONS = [
  "What services does AeroExpert provide?",
  "Tell me about Aviation Technology Consulting.",
  "What is Flight Data Monitoring?",
  "Can you help with cybersecurity?",
  "Tell me about your consulting approach.",
  "I want to discuss a project.",
];

let _id = 0;
const uid = () => ++_id;

export default function AeroExpertAI() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: uid(),
      role: 'bot',
      text: "Welcome. I'm the AeroExpert AI assistant. I can answer questions about our aviation technology consulting services and help connect you with our team.\n\nHow can I help you today?",
      suggestions: INITIAL_SUGGESTIONS,
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [leadMode, setLeadMode] = useState(false);
  const [leadStep, setLeadStep] = useState(0);
  const [leadData, setLeadData] = useState<LeadData>({});
  const [, setSubmitted] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 300);
  }, [open]);

  function addBot(text: string, suggestions?: string[]) {
    setMessages((prev) => [...prev, { id: uid(), role: 'bot', text, suggestions }]);
  }

  function addUser(text: string) {
    setMessages((prev) => [...prev, { id: uid(), role: 'user', text }]);
  }

  async function submitLead(data: LeadData) {
    try {
      await fetch('/api/chatbot/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
    } catch {
      // Silent — we still show confirmation to user
    }
  }

  async function handleSend(text: string) {
    const trimmed = text.trim();
    if (!trimmed || isTyping) return;
    setInput('');
    addUser(trimmed);
    setIsTyping(true);

    await new Promise((r) => setTimeout(r, 700 + Math.random() * 400));
    setIsTyping(false);

    // ── Lead capture mode ──
    if (leadMode) {
      const currentField = LEAD_STEPS[leadStep].field;
      const updated = { ...leadData, [currentField]: trimmed };
      setLeadData(updated);

      if (leadStep < LEAD_STEPS.length - 1) {
        setLeadStep((s) => s + 1);
        addBot(LEAD_STEPS[leadStep + 1].question);
      } else {
        // All fields collected
        setLeadMode(false);
        setSubmitted(true);
        await submitLead(updated);
        addBot(
          `Thank you, ${updated.name}. Your enquiry has been submitted to the AeroExpert team.\n\nA consultant will be in touch with you at ${updated.email} shortly to discuss your requirements.\n\nIs there anything else I can help you with?`,
          ["What services does AeroExpert provide?", "Tell me about your consulting approach."]
        );
      }
      return;
    }

    // ── Restricted topics — redirect to Contact ──
    if (isRestrictedQuery(trimmed)) {
      addBot(
        "I don't have information on that — pricing, timelines, client references, and specific technical implementation details aren't something I can help with here.\n\nFor accurate answers on any of those topics, I'd recommend speaking directly with the AeroExpert team via the Contact page.",
        ["Take me to the Contact page.", "What services does AeroExpert provide?"]
      );
      return;
    }

    // ── Out-of-scope topics ──
    const lower = trimmed.toLowerCase();
    const aviationKeywords = [
      'airline', 'airport', 'aviation', 'flight', 'pss', 'dcs', 'crew', 'cargo', 'efb',
      'fdm', 'cyber', 'security', 'cloud', 'infrastructure', 'digital', 'transform',
      'procure', 'vendor', 'rfp', 'pmo', 'project', 'consult', 'service', 'aeroexpert',
      'approach', 'industr', 'sector', 'contact', 'discuss', 'speak', 'enquir', 'inquir',
      'help', 'what do', 'what can', 'who are', 'about', 'ndc', 'loyalty', 'revenue',
      'baggage', 'check-in', 'kiosk', 'crm', 'dispatch', 'maintenance', 'mro', 'safety',
    ];
    const isAviationRelated = aviationKeywords.some((kw) => lower.includes(kw));

    if (!isAviationRelated) {
      addBot(
        "I can only help with questions about AeroExpert's aviation technology consulting services. Is there something specific about our services, industries, or consulting approach I can help with?",
        ["What services does AeroExpert provide?", "What industries do you serve?", "How does AeroExpert work?"]
      );
      return;
    }

    // ── Intent: connect / speak / project ──
    if (
      lower.includes('discuss') || lower.includes('speak') ||
      lower.includes('consult') || lower.includes('talk') ||
      lower.includes('connect') || lower.includes('enquir') || lower.includes('inquir') ||
      lower.includes('collect my details') || lower.includes('yes') && messages.length > 2
    ) {
      setLeadMode(true);
      setLeadStep(0);
      setLeadData({ interest: trimmed });
      addBot(
        "I'd be happy to connect you with the AeroExpert team. I'll just need a few details.\n\n" + LEAD_STEPS[0].question
      );
      return;
    }

    // ── Knowledge base lookup ──
    const entry = matchKB(trimmed);
    if (entry) {
      const linkLine = entry.link
        ? `\n\nYou can read more on the ${entry.link.label} page.`
        : '';
      addBot(
        entry.answer + linkLine + "\n\nWould you like to speak with an AeroExpert consultant about this?",
        entry.suggestions ?? ["Yes, I'd like to discuss a project.", "What other services do you offer?", "What industries do you serve?"]
      );
      return;
    }

    // ── Fallback ──
    addBot(
      "I don't have specific information on that. For accurate answers, I'd recommend speaking directly with the AeroExpert team — they'll be able to help.\n\nWould you like me to connect you, or can I help with something else?",
      ["Yes, connect me with AeroExpert.", "What services does AeroExpert provide?", "What industries do you serve?"]
    );
  }

  return (
    <>
      {/* ── Floating button ── */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        <AnimatePresence>
          {!open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-card border border-accent/25 rounded-full px-4 py-2.5 text-[10px] font-semibold tracking-[0.12em] uppercase text-muted-foreground cursor-pointer hover:text-foreground hover:border-accent/50 transition-all duration-200"
              style={{ fontFamily: 'var(--font-sans)' }}
              onClick={() => setOpen(true)}
            >
              AeroExpert AI
            </motion.div>
          )}
        </AnimatePresence>

        <motion.button
          onClick={() => setOpen((o) => !o)}
          className="w-14 h-14 rounded-full flex items-center justify-center bg-foreground text-background border border-foreground hover:bg-accent hover:text-foreground hover:border-accent transition-all duration-200 shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label={open ? 'Close AeroExpert AI' : 'Open AeroExpert AI'}
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span key="close" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <ChevronDown className="w-5 h-5" />
              </motion.span>
            ) : (
              <motion.span key="open" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                <MessageCircle className="w-5 h-5" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* ── Chat window ── */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.22, ease: 'easeOut' as const }}
            className="fixed bottom-28 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] flex flex-col bg-card/95 backdrop-blur-xl border border-accent/20 rounded-2xl overflow-hidden"
            style={{ height: '520px', maxHeight: 'calc(100vh - 10rem)' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-accent/15 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-foreground text-background flex-shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-semibold tracking-[0.12em] uppercase text-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                    AeroExpert AI
                  </p>
                  <p className="text-[9px] text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                    Aviation Technology Assistant
                  </p>
                </div>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-foreground transition-colors duration-200 p-1"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] ${msg.role === 'user' ? '' : 'flex flex-col gap-2'}`}>
                    <div
                      className={`px-4 py-3 text-xs leading-relaxed whitespace-pre-line ${
                        msg.role === 'user'
                          ? 'bg-foreground text-background'
                          : 'bg-muted border border-accent/15 text-foreground'
                      }`}
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {msg.text}
                    </div>
                    {msg.suggestions && msg.suggestions.length > 0 && (
                      <div className="flex flex-col gap-1.5 mt-1">
                        {msg.suggestions.map((s) => (
                          <button
                            key={s}
                            onClick={() => handleSend(s)}
                            className="text-left px-3 py-2 text-[10px] border border-accent/20 text-muted-foreground hover:border-accent/50 hover:text-foreground transition-all duration-150 bg-card/50"
                            style={{ fontFamily: 'var(--font-sans)' }}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="px-4 py-3 bg-muted border border-accent/15 flex items-center gap-2">
                    <Loader2 className="w-3 h-3 animate-spin text-muted-foreground" />
                    <span className="text-[10px] text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>Thinking…</span>
                  </div>
                </div>
              )}
              <div ref={bottomRef} />
            </div>

            {/* Lead progress indicator */}
            {leadMode && (
              <div className="px-4 py-2 border-t border-accent/10 flex-shrink-0">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-0.5 bg-muted overflow-hidden">
                    <div
                      className="h-full bg-accent transition-all duration-500"
                      style={{ width: `${((leadStep) / LEAD_STEPS.length) * 100}%` }}
                    />
                  </div>
                  <span className="text-[9px] text-muted-foreground flex-shrink-0" style={{ fontFamily: 'var(--font-sans)' }}>
                    {leadStep}/{LEAD_STEPS.length}
                  </span>
                </div>
              </div>
            )}

            {/* Input */}
            <div className="px-4 py-3 border-t border-accent/15 flex-shrink-0">
              <form
                onSubmit={(e) => { e.preventDefault(); handleSend(input); }}
                className="flex items-center gap-2"
              >
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={leadMode ? "Type your answer…" : "Ask a question…"}
                  className="flex-1 bg-muted border border-accent/15 px-3 py-2.5 text-xs text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-accent/40 transition-colors duration-200"
                  style={{ fontFamily: 'var(--font-sans)' }}
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="w-9 h-9 flex items-center justify-center bg-foreground text-background hover:bg-accent hover:text-foreground transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
                  aria-label="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
              <p className="text-[9px] text-muted-foreground mt-2 text-center" style={{ fontFamily: 'var(--font-sans)' }}>
                AeroExpert AI · Information based on published services only
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
