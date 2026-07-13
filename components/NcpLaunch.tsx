'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';
import type { Screen } from '@/lib/screens';
import { menu } from '@/lib/screens';

export default function NcpLaunch({ screen }: { screen: Screen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [quoteOpen, setQuoteOpen] = useState(screen.path === '/quote');
  const [loaded, setLoaded] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`NCP Quote Request - ${String(form.get('company') || form.get('name') || '')}`);
    const body = encodeURIComponent([
      `Name: ${String(form.get('name') || '')}`,
      `Company: ${String(form.get('company') || '')}`,
      `Phone: ${String(form.get('phone') || '')}`,
      `Email: ${String(form.get('email') || '')}`,
      `Project: ${String(form.get('project') || '')}`,
      '',
      String(form.get('details') || ''),
    ].join('\n'));
    window.location.href = `mailto:leads@nationalconcretepolishing.net?subject=${subject}&body=${body}`;
  }

  return <main className="stage">
    <section className="phone">
      {!loaded && <div className="loader">Loading NCP App…</div>}
      <img className={loaded ? 'screen loaded' : 'screen'} src={screen.image} alt={`${screen.title} approved NCP screen`} onLoad={() => setLoaded(true)} />
      <div className="top"><button onClick={() => setMenuOpen(true)}>☰</button><a href="tel:+18776617562">☎</a></div>
      <nav className="dock"><Link href="/">⌂<span>Home</span></Link><Link href="/gallery">▦<span>Gallery</span></Link><button className="gold" onClick={() => setQuoteOpen(true)}>✦<span>Quote</span></button><Link href="/presentation">▣<span>Present</span></Link></nav>
    </section>
    {menuOpen && <div className="backdrop"><section className="panel"><header><div><small>NATIONAL CONCRETE POLISHING</small><h1>Contractor App</h1></div><button onClick={() => setMenuOpen(false)}>×</button></header><div className="grid">{menu.map(([key,item]) => <Link key={key} href={item.path} onClick={() => setMenuOpen(false)}><strong>{item.title}</strong><span>Open presentation</span></Link>)}</div><div className="contact"><a href="tel:+18776617562">Call (877) 661-7562</a><a href="mailto:leads@nationalconcretepolishing.net">Email NCP</a></div></section></div>}
    {quoteOpen && <div className="backdrop"><section className="panel quote"><header><div><small>NATIONAL CONCRETE POLISHING</small><h1>Request a Quote</h1></div><button onClick={() => setQuoteOpen(false)}>×</button></header><form onSubmit={submit}><label>Name<input name="name" required /></label><label>Company<input name="company" /></label><div className="row"><label>Phone<input name="phone" required /></label><label>Email<input name="email" type="email" required /></label></div><label>Project / Floor System<input name="project" /></label><label>Details<textarea name="details" rows={5} /></label><button className="submit" type="submit">Send Quote Request</button></form></section></div>}
  </main>;
}
