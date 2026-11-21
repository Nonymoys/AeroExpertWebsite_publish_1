import { useState, type FormEvent } from 'react';
import { motion } from 'motion/react';
import { CheckCircle } from 'lucide-react';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function ContactSection() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    if (formData.get('_gotcha')) return;

    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const organisation = String(formData.get('organisation') ?? '').trim();
    const subject = String(formData.get('subject') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();

    setStatus('sending');
    setErrorMsg('');

    try {
      // Field mapping: only the message textarea goes in messages_attributes[0].body.
      // All other fields (organisation, subject) must be added to conversation.data as { "Label": value } pairs.
      const res = await fetch('/api/contact/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversation: {
            messages_attributes: [{ body: message || 'New consultation request' }],
            data: {
              __gd_contact_form_title: 'Schedule a Consultation',
              'Organisation': organisation,
              'Subject': subject,
            },
          },
          user: { email, name },
        }),
      });

      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
      } else {
        throw new Error(json.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-3xl mx-auto px-6 lg:px-12">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp} className="text-center mb-12">
            <p className="text-xs font-semibold tracking-[0.2em] uppercase mb-4 text-muted-foreground" style={{ fontFamily: 'var(--font-sans)' }}>Get In Touch</p>
            <h2 className="text-foreground mb-4" style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 400 }}>
              Schedule a Consultation
            </h2>
            <p className="text-muted-foreground text-base" style={{ fontFamily: 'var(--font-sans)' }}>
              Contact us to discuss how AeroExpert can support your aviation technology objectives.
            </p>
          </motion.div>

          {status === 'success' ? (
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16 border border-accent/20 bg-card rounded-2xl">
              <CheckCircle className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="text-foreground font-semibold mb-2 text-lg" style={{ fontFamily: 'var(--font-sans)' }}>Message Received</h3>
              <p className="text-muted-foreground text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
                Thank you for reaching out. We will be in touch shortly.
              </p>
            </motion.div>
          ) : (
            <motion.form variants={fadeUp} onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot */}
              <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase mb-2 text-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                    Full Name <span className="text-accent">*</span>
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full px-4 py-3 text-sm text-foreground bg-card border border-accent/30 rounded-xl focus:border-accent focus:outline-none transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-sans)' }}
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase mb-2 text-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                    Email Address <span className="text-accent">*</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 text-sm text-foreground bg-card border border-accent/30 rounded-xl focus:border-accent focus:outline-none transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-sans)' }}
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase mb-2 text-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                    Organisation
                  </label>
                  <input
                    name="organisation"
                    className="w-full px-4 py-3 text-sm text-foreground bg-card border border-accent/30 rounded-xl focus:border-accent focus:outline-none transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-sans)' }}
                    placeholder="Your organisation"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold tracking-widest uppercase mb-2 text-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                    Subject
                  </label>
                  <input
                    name="subject"
                    className="w-full px-4 py-3 text-sm text-foreground bg-card border border-accent/30 rounded-xl focus:border-accent focus:outline-none transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-sans)' }}
                    placeholder="How can we help?"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold tracking-widest uppercase mb-2 text-foreground" style={{ fontFamily: 'var(--font-sans)' }}>
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="w-full px-4 py-3 text-sm text-foreground bg-card border border-accent/30 rounded-xl focus:border-accent focus:outline-none transition-colors duration-200 resize-none"
                  style={{ fontFamily: 'var(--font-sans)' }}
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {status === 'error' && (
                <p role="alert" className="text-sm text-red-400" style={{ fontFamily: 'var(--font-sans)' }}>{errorMsg}</p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 text-sm font-semibold tracking-widest uppercase rounded-xl border border-foreground text-foreground bg-transparent transition-all duration-200 hover:bg-foreground hover:text-background disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {status === 'sending' ? 'Sending…' : 'Send Message'}
              </button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
