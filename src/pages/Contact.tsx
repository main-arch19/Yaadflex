import { useState } from 'react';
import { Mail, Phone, Clock, Send, MessageCircle } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import { site, boroughs } from '../siteConfig';
import { InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from '../components/SocialIcons';

const oswald = { fontFamily: "'Oswald', sans-serif", fontWeight: 700 } as const;
const barlow = { fontFamily: "'Barlow', sans-serif" } as const;
const overline = { fontFamily: "'Barlow', sans-serif", fontWeight: 600, letterSpacing: '0.22em' } as const;

const inputClass =
  'w-full rounded-xl bg-[#0A0A0A] border border-white/15 px-4 py-3 text-sm text-white placeholder-white/35 outline-none focus:border-[#E8B500]/60 transition-colors';

const socials = [
  { href: site.socials.instagram, label: 'Instagram', Icon: InstagramIcon },
  { href: site.socials.facebook, label: 'Facebook', Icon: FacebookIcon },
  { href: site.socials.tiktok, label: 'TikTok', Icon: TikTokIcon },
  { href: site.socials.whatsapp, label: 'WhatsApp', Icon: WhatsAppIcon },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    business: '',
    email: '',
    phone: '',
    borough: '',
    message: '',
  });

  const update = (field: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Wholesale inquiry — ${form.business || form.name}`;
    const body = [
      `Name: ${form.name}`,
      `Business / Store: ${form.business}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Borough: ${form.borough}`,
      '',
      'Message:',
      form.message,
    ].join('\n');
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <>
      <PageHeader
        overline="Get in Touch"
        title={
          <>
            Become a <span className="text-[#E8B500]">Member</span>
          </>
        }
        subtitle="Tell us about your store and we'll get you set up with wholesale pricing and delivery across the five boroughs."
      />

      <section className="bg-[#0A0A0A] px-4 sm:px-6 md:px-10 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-5">
          {/* Form */}
          <div className="lg:col-span-3 rounded-2xl bg-[#050505] border border-[#1B7A2B]/25 p-6 sm:p-8">
            <h2 className="text-white text-xl uppercase tracking-wide mb-6" style={oswald}>
              Send us an inquiry
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs text-white/60 mb-1.5" style={barlow}>
                    Your name *
                  </label>
                  <input required value={form.name} onChange={update('name')} className={inputClass} placeholder="Jane Campbell" />
                </div>
                <div>
                  <label className="block text-xs text-white/60 mb-1.5" style={barlow}>
                    Business / store *
                  </label>
                  <input required value={form.business} onChange={update('business')} className={inputClass} placeholder="Island Market NYC" />
                </div>
                <div>
                  <label className="block text-xs text-white/60 mb-1.5" style={barlow}>
                    Email *
                  </label>
                  <input required type="email" value={form.email} onChange={update('email')} className={inputClass} placeholder="you@store.com" />
                </div>
                <div>
                  <label className="block text-xs text-white/60 mb-1.5" style={barlow}>
                    Phone
                  </label>
                  <input type="tel" value={form.phone} onChange={update('phone')} className={inputClass} placeholder="(917) 555-0123" />
                </div>
              </div>

              <div>
                <label className="block text-xs text-white/60 mb-1.5" style={barlow}>
                  Borough *
                </label>
                <select required value={form.borough} onChange={update('borough')} className={`${inputClass} appearance-none`}>
                  <option value="" disabled>
                    Select your borough
                  </option>
                  {boroughs.map((b) => (
                    <option key={b.name} value={b.name}>
                      {b.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs text-white/60 mb-1.5" style={barlow}>
                  Message *
                </label>
                <textarea
                  required
                  value={form.message}
                  onChange={update('message')}
                  rows={4}
                  className={`${inputClass} resize-y`}
                  placeholder="Tell us what you'd like to stock and roughly how often you reorder."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-[#E8B500] hover:bg-[#B8920E] text-[#0A0A0A] text-sm px-7 py-3.5 rounded-full transition-colors"
                style={oswald}
              >
                Send Inquiry
                <Send className="w-4 h-4" />
              </button>
              <p className="text-white/40 text-xs pt-1" style={barlow}>
                This opens your email app with the details pre-filled.
              </p>
            </form>
          </div>

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="rounded-2xl bg-[#050505] border border-[#1B7A2B]/25 p-6 sm:p-8">
              <span className="text-[0.7rem] uppercase text-[#E8B500] block mb-5" style={overline}>
                Reach us directly
              </span>
              <ul className="space-y-5" style={barlow}>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#E8B500] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-white/50 text-xs">Email</div>
                    <a href={`mailto:${site.email}`} className="text-white text-sm hover:text-[#E8B500] transition-colors">
                      {site.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#E8B500] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-white/50 text-xs">Phone</div>
                    <a href={`tel:${site.phoneTel}`} className="text-white text-sm hover:text-[#E8B500] transition-colors">
                      {site.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-[#E8B500] mt-0.5 shrink-0" />
                  <div>
                    <div className="text-white/50 text-xs">Hours</div>
                    <span className="text-white text-sm">{site.hours}</span>
                  </div>
                </li>
              </ul>

              <a
                href={site.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-[#1B7A2B] hover:bg-[#0D4F1C] text-white text-sm px-6 py-3.5 rounded-full transition-colors"
                style={oswald}
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>

              <div className="mt-6 pt-6 border-t border-white/10">
                <span className="text-[0.7rem] uppercase text-white/50 block mb-3" style={overline}>
                  Follow
                </span>
                <div className="flex items-center gap-3">
                  {socials.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-white/70 hover:text-[#E8B500] hover:border-[#E8B500]/50 transition-colors"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Coverage block (in place of a live map) */}
            <div
              className="rounded-2xl p-6 sm:p-8 relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0D4F1C, #1B7A2B)' }}
            >
              <div
                className="absolute inset-0 opacity-20"
                style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '16px 16px' }}
              />
              <div className="relative">
                <h3 className="text-white text-lg uppercase tracking-wide mb-2" style={oswald}>
                  Serving all 5 boroughs & the tri-state
                </h3>
                <p className="text-white/85 text-sm leading-relaxed" style={barlow}>
                  Brooklyn · Queens · The Bronx · Manhattan · Staten Island · Tri-State Area
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
