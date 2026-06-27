import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import { site } from '../siteConfig';
import { InstagramIcon, FacebookIcon, TikTokIcon, WhatsAppIcon } from './SocialIcons';

const quickLinks = [
  { to: '/', label: 'Home' },
  { to: '/delivery', label: 'Delivery Areas' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
];

const socials = [
  { href: site.socials.instagram, label: 'Instagram', Icon: InstagramIcon },
  { href: site.socials.facebook, label: 'Facebook', Icon: FacebookIcon },
  { href: site.socials.tiktok, label: 'TikTok', Icon: TikTokIcon },
  { href: site.socials.whatsapp, label: 'WhatsApp', Icon: WhatsAppIcon },
];

const label = { fontFamily: "'Barlow', sans-serif", fontWeight: 600, letterSpacing: '0.18em' } as const;

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1B7A2B]/20 text-[#F5F5F0]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-12 sm:py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div className="lg:col-span-1">
          <span
            className="text-xl tracking-widest uppercase"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
          >
            <span className="text-white">YAAD</span>
            <span className="text-[#E8B500]">FLEXX</span>
          </span>
          <p
            className="mt-3 text-sm text-white/60 max-w-xs leading-relaxed"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            {site.tagline}. Authentic Caribbean beverages & goods at wholesale pricing, delivered across all 5 boroughs and the tri-state.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {socials.map(({ href, label: l, Icon }) => (
              <a
                key={l}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={l}
                className="flex items-center justify-center w-9 h-9 rounded-full border border-white/15 text-white/70 hover:text-[#E8B500] hover:border-[#E8B500]/50 transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h3 className="text-[0.7rem] uppercase text-[#E8B500] mb-4" style={label}>
            Explore
          </h3>
          <ul className="space-y-2.5">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "'Barlow', sans-serif" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="sm:col-span-2 lg:col-span-2">
          <h3 className="text-[0.7rem] uppercase text-[#E8B500] mb-4" style={label}>
            Get in touch
          </h3>
          <ul className="space-y-3 text-sm text-white/70" style={{ fontFamily: "'Barlow', sans-serif" }}>
            <li className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-[#1B7A2B] shrink-0" />
              <a href={`tel:${site.phoneTel}`} className="hover:text-white transition-colors">
                {site.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-[#1B7A2B] shrink-0" />
              <a href={`mailto:${site.email}`} className="hover:text-white transition-colors">
                {site.email}
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm text-white/50" style={{ fontFamily: "'Barlow', sans-serif" }}>
            {site.hours}
          </p>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div
          className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-white/45"
          style={{ fontFamily: "'Barlow', sans-serif" }}
        >
          <span>© {new Date().getFullYear()} YaadFlexx. All rights reserved.</span>
          <span className="uppercase tracking-[0.18em]">Bringing the Yaad to Your Store</span>
        </div>
      </div>
    </footer>
  );
}
