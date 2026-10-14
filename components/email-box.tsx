'use client';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { links } from '@/lib/content';

export function EmailBox() {
 const [opened, setOpened] = useState(false);
 function compose(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const fields = new FormData(event.currentTarget);
  const email = String(fields.get('email') || '').trim();
  const message = String(fields.get('message') || '').trim();
  if (!message) { (event.currentTarget.elements.namedItem('message') as HTMLTextAreaElement).setCustomValidity('Please write a message.'); event.currentTarget.reportValidity(); return; }
  const body = `${message}\n\nReply to: ${email}`;
  window.location.href = `${links.email}?subject=${encodeURIComponent('Hello Preeyam!')}&body=${encodeURIComponent(body)}`;
  setOpened(true);
 }
 return <form className="email-box" action={links.email} method="post" encType="text/plain" onSubmit={compose}>
  <h3>Drop me a line.</h3>
  <label htmlFor="contact-email">Your email</label>
  <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254}/>
  <label htmlFor="contact-message">Your message</label>
  <textarea id="contact-message" name="message" rows={4} placeholder="An idea, an opportunity, or just a hello…" required maxLength={4000} onInput={event => event.currentTarget.setCustomValidity('')}/>
  <button type="submit">Open email draft <span aria-hidden="true">↗</span></button>
  <p className="email-status" role="status">{opened ? 'Your email app will open with a draft ready to send.' : 'Opens your email app. You review and send the message.'}</p>
 </form>;
}
