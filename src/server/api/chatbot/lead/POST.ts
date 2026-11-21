import type { Request, Response } from 'express';

export default async function handler(req: Request, res: Response) {
  try {
    const { name, company, title, email, phone, country, requirement, interest } = req.body as Record<string, string>;

    // Basic validation — email is the minimum required field
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return res.status(400).json({ error: 'Valid email is required' });
    }

    // Log the lead server-side for visibility in production logs
    console.log('chatbot.lead', {
      name: name ?? '',
      company: company ?? '',
      title: title ?? '',
      email,
      phone: phone ?? '',
      country: country ?? '',
      requirement: requirement ?? '',
      interest: interest ?? '',
      receivedAt: new Date().toISOString(),
    });

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('chatbot.lead.error', { error: err instanceof Error ? err.message : String(err) });
    return res.status(500).json({ error: 'Internal server error' });
  }
}
