'use client';

import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';
import type { ApprovedScreen } from '@/lib/screens';
import { MENU_ITEMS, SCREENS } from '@/lib/screens';

const PHONE_DISPLAY = '(877) 661-7562';
const PHONE_LINK = 'tel:+18776617562';
const LEADS_EMAIL = 'leads@nationalconcretepolishing.net';

export default function NcpAppShell({ screen }: { screen: ApprovedScreen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(screen.key === 'quote');
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').catch(() => undefined);
    }
  }, []);

  function submitQuote(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '');
    const phone = String(data.get('phone') || '');
    const email = String(data.get('email') || '');
    const company = String(data.get('company') || '');
    const location = String(data.get('location') || '');
    const project = String(data.get('project') || '');
    const details = String(data.get('details') || '');
    const subject = encodeURIComponent(`NCP Contractor App Quote Request - ${company || name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nCompany: ${company}\nPhone: ${phone}\nEmail: ${email}\nProject location: ${location}\nFloor system / project: ${project}\n\nDetails:\n${details}\n\nSubmitted from the NCP Contractor App.`
    );
    window.location.href = `mailto:${LEADS_EMAIL}?subject=${subject}&body=${body}`;
  }

  return (
    <main className="app-stage">
      <div className="phone-frame" aria-label={screen.title}>
        {!imageLoaded && <div className="screen-loader">Loading NCP presentation…</div>}
        <img
          className={`approved-screen ${imageLoaded ? 'is-loaded' : ''}`}
          src={screen.imageUrl}
          alt={`${screen.description} approved National Concrete Polishing screen`}
          onLoad={() => setImageLoaded(true)}
        />

        <div className="top-actions" aria-label="Application controls">
          <button className="round-control" onClick={() => setMenuOpen(true)} aria-label="Open menu">☰</button>
          <a className="round-control" href={PHONE_LINK} aria-label={`Call ${PHONE_DISPLAY}`}>☎</a>
        </div>

        <nav className="bottom-dock" aria-label="Primary navigation">
          <Link href="/" aria-label="Home">⌂<span>Home</span></Link>
          <Link href="/gallery" aria-label="Gallery">▦<span>Gallery</span></Link>
          <button onClick={() => setQuoteOpen(true)} aria-label="Request quote">✦<span>Quote</span></button>
          <Link href="/presentation" aria-label="Presentation mode">▣<span>Present</span></Link>
        </nav>
      </div>

      {menuOpen && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="NCP app menu">
          <section className="menu-panel">
            <div className="modal-heading">
              <div><small>NATIONAL CONCRETE POLISHING</small><h2>Contractor App</h2></div>
              <button onClick={() => setMenuOpen(false)} aria-label="Close menu">×</button>
            </div>
            <div className="menu-grid">
              {MENU_ITEMS.map((item) => (
                <Link key={item.key} href={SCREENS[item.key].path} onClick={() => setMenuOpen(false)}>
                  <strong>{item.label}</strong><span>{item.note}</span>
                </Link>
              ))}
            </div>
            <div className="contact-strip">
              <a href={PHONE_LINK}>Call {PHONE_DISPLAY}</a>
              <a href={`mailto:${LEADS_EMAIL}`}>Email NCP</a>
            </div>
          </section>
        </div>
      )}

      {quoteOpen && (
        <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label="Request a quote">
          <section className="quote-panel">
            <div className="modal-heading">
              <div><small>NATIONAL CONCRETE POLISHING</small><h2>Request a Quote</h2></div>
              <button onClick={() => setQuoteOpen(false)} aria-label="Close quote form">×</button>
            </div>
            <p className="form-note">Complete the project details. Your device will open an email addressed to the NCP leads team.</p>
            <form onSubmit={submitQuote}>
              <label>Name<input name="name" autoComplete="name" required /></label>
              <label>Company<input name="company" autoComplete="organization" /></label>
              <div className="form-row">
                <label>Phone<input name="phone" type="tel" autoComplete="tel" required /></label>
                <label>Email<input name="email" type="email" autoComplete="email" required /></label>
              </div>
              <label>Project location<input name="location" autoComplete="street-address" /></label>
              <label>Floor system / project type<select name="project" defaultValue="Polished Concrete"><option>Polished Concrete</option><option>Epoxy Flooring</option><option>Concrete Restoration</option><option>Commercial / Industrial Consultation</option><option>Other</option></select></label>
              <label>Project details<textarea name="details" rows={4} placeholder="Approximate square footage, timeline, existing floor condition, and goals." /></label>
              <button className="gold-button" type="submit">Prepare Quote Request</button>
              <a className="secondary-button" href={PHONE_LINK}>Call {PHONE_DISPLAY}</a>
            </form>
          </section>
        </div>
      )}
    </main>
  );
}
