'use client';

import { FormEvent, useState } from 'react';

const services = ['Branding', 'UI/UX', 'Web Development', 'Motion & 3D'];
const budgets = ['$2k–$5k', '$5k–$10k', '$10k–$25k', '$25k+'];

export default function ContactPageContent() {
  const [service, setService] = useState('Branding');
  const [budget, setBudget] = useState('$5k–$10k');
  const [submitted, setSubmitted] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const subject = `Project inquiry from ${form.get('name') || 'a new client'}`;
    const body = [
      `Name: ${form.get('name') || ''}`,
      `Email: ${form.get('email') || ''}`,
      `Company: ${form.get('company') || ''}`,
      `Service: ${form.get('service') || ''}`,
      `Budget: ${form.get('budget') || ''}`,
      `Timeline: ${form.get('timeline') || ''}`,
      '',
      'Project details:',
      `${form.get('message') || ''}`,
    ].join('\n');

    setSubmitted(true);
    window.location.href = `mailto:hello@nextgendigitals.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="bg-black px-4 pb-28 text-white sm:px-6 lg:px-10">
      <form onSubmit={submit} data-reveal="up" className="mx-auto max-w-[1500px] rounded-[30px] border border-white/10 bg-[#0a0a0a] p-5 sm:p-9 lg:p-14">
        <fieldset>
          <legend className="mb-4 font-mono text-[10px] uppercase tracking-[0.23em] text-white/40">What can we build together?</legend>
          <div className="flex flex-wrap gap-2">
            {services.map((item) => <button key={item} type="button" onClick={() => setService(item)} className={`rounded-full border px-4 py-2.5 text-xs transition ${service === item ? 'border-[#ADF531] bg-[#ADF531] text-black' : 'border-white/15 text-white/55 hover:border-white/40'}`}>{item}</button>)}
          </div>
        </fieldset>

        <div className="mt-10 grid gap-x-8 sm:grid-cols-2">
          <label className="contact-field"><span>Name</span><input required name="name" placeholder="Your name" /></label>
          <label className="contact-field"><span>Email</span><input required type="email" name="email" placeholder="you@company.com" /></label>
          <label className="contact-field"><span>Company</span><input name="company" placeholder="Company or brand" /></label>
          <label className="contact-field"><span>Timeline</span><input name="timeline" placeholder="When should we launch?" /></label>
        </div>

        <fieldset className="mt-9">
          <legend className="mb-4 font-mono text-[10px] uppercase tracking-[0.23em] text-white/40">Estimated investment</legend>
          <div className="flex flex-wrap gap-2">
            {budgets.map((item) => <button key={item} type="button" onClick={() => setBudget(item)} className={`rounded-full border px-4 py-2.5 text-xs transition ${budget === item ? 'border-[#ADF531] text-[#ADF531]' : 'border-white/15 text-white/55 hover:border-white/40'}`}>{item}</button>)}
          </div>
        </fieldset>

        <label className="contact-field mt-10"><span>Project details</span><textarea required name="message" rows={5} placeholder="Tell us about the idea, the challenge, and what success looks like." /></label>
        <input type="hidden" name="service" value={service} />
        <input type="hidden" name="budget" value={budget} />

        <button type="submit" className="mt-9 flex h-14 w-full items-center justify-center rounded-full border border-white/25 font-mono text-xs font-bold uppercase tracking-[0.2em] transition hover:border-[#ADF531] hover:bg-[#ADF531] hover:text-black">
          {submitted ? 'Opening your email app…' : 'Send project inquiry'}
        </button>
      </form>
    </section>
  );
}
