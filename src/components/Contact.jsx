import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { profile } from '../data/resumeData';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

function Contact() {
  const [status, setStatus] = useState('');
  const [sending, setSending] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!serviceId || !templateId || !publicKey) {
      setStatus('Set EmailJS env variables first.');
      return;
    }

    setSending(true);
    setStatus('Sending...');

    try {
      await emailjs.sendForm(serviceId, templateId, event.target, {
        publicKey
      });
      event.target.reset();
      setStatus('Message sent successfully.');
    } catch {
      setStatus('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section-wrap">
      <h3 className="mb-8 font-manrope text-3xl font-extrabold text-slate-900 dark:text-white">Contact</h3>
      <div className="grid gap-6 md:grid-cols-2">
        <article className="glass-card p-6">
          <p className="text-slate-700 dark:text-mist/90">Email: {profile.email}</p>
          <p className="mt-2 text-slate-700 dark:text-mist/90">Phone: {profile.phone}</p>
          <a href={profile.linkedin} className="mt-4 block text-sky-700 hover:underline dark:text-glacier">
            LinkedIn
          </a>
          <a href={profile.github} className="mt-2 block text-sky-700 hover:underline dark:text-glacier">
            GitHub
          </a>
        </article>
        <form className="glass-card space-y-4 p-6" onSubmit={handleSubmit}>
          <input
            className="w-full rounded-lg border border-slate-300 bg-white/70 px-4 py-3 text-slate-900 placeholder:text-slate-500 outline-none focus:border-sky-500 dark:border-white/20 dark:bg-midnight/40 dark:text-mist dark:placeholder:text-mist/50 dark:focus:border-glacier"
            type="text"
            name="from_name"
            placeholder="Your Name"
            required
          />
          <input
            className="w-full rounded-lg border border-slate-300 bg-white/70 px-4 py-3 text-slate-900 placeholder:text-slate-500 outline-none focus:border-sky-500 dark:border-white/20 dark:bg-midnight/40 dark:text-mist dark:placeholder:text-mist/50 dark:focus:border-glacier"
            type="email"
            name="reply_to"
            placeholder="Your Email"
            required
          />
          <textarea
            className="h-32 w-full rounded-lg border border-slate-300 bg-white/70 px-4 py-3 text-slate-900 placeholder:text-slate-500 outline-none focus:border-sky-500 dark:border-white/20 dark:bg-midnight/40 dark:text-mist dark:placeholder:text-mist/50 dark:focus:border-glacier"
            name="message"
            placeholder="Your Message"
            required
          />
          <button
            className="rounded-lg bg-moss px-5 py-3 font-semibold text-white transition enabled:hover:brightness-110 disabled:opacity-70"
            type="submit"
            disabled={sending}
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>
          {status && <p className="text-sm text-slate-700 dark:text-mist/90">{status}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;
