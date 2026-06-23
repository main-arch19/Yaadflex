import { Package, Truck, Store, Zap, Target, Eye } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import { stats } from '../siteConfig';
import heroImg from '../assets/hero.png';

const pillars = [
  { Icon: Package, title: 'Caribbean Beverages & Goods', desc: 'An authentic, curated product selection your customers actually ask for.' },
  { Icon: Truck, title: 'Bulk Supply', desc: 'Volume pricing built for retailers — stock more, spend less.' },
  { Icon: Store, title: 'Retail Partnerships', desc: 'Growth-focused collaborations that help local shops thrive.' },
  { Icon: Zap, title: 'Fast Delivery', desc: 'Same-day logistics across all five boroughs.' },
];

const personality = ['Bold', 'Authentic', 'Reliable', 'Caribbean', 'Energetic', 'Trusted'];

const overline = { fontFamily: "'Barlow', sans-serif", fontWeight: 600, letterSpacing: '0.22em' } as const;
const oswald = { fontFamily: "'Oswald', sans-serif", fontWeight: 700 } as const;
const playfair = { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, letterSpacing: '-0.02em' } as const;
const barlow = { fontFamily: "'Barlow', sans-serif" } as const;

export default function About() {
  return (
    <>
      <PageHeader
        overline="Who We Are"
        title={
          <>
            Caribbean Culture, <span className="text-[#E8B500]">Stocked & Delivered</span>
          </>
        }
        subtitle="YaadFlexx is a New York wholesale distributor connecting Caribbean communities with the beverages and goods they love."
      />

      {/* Story */}
      <section className="bg-[#0A0A0A] px-4 sm:px-6 md:px-10 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <span className="text-[0.7rem] uppercase text-[#E8B500] block mb-4" style={overline}>
              Our Story
            </span>
            <h2 className="text-white text-2xl sm:text-4xl leading-tight mb-6" style={playfair}>
              Bringing the Yaard to your store.
            </h2>
            <div className="space-y-4 text-white/70 text-sm sm:text-base leading-relaxed" style={barlow}>
              <p>
                From the corner shop to the big retailer, YaadFlexx makes it simple to keep authentic Caribbean
                beverages and goods on your shelves. We source the brands your customers grew up on and deliver
                them at wholesale pricing built for your bottom line.
              </p>
              <p>
                We're a business partner first — bold, reliable, and rooted in the culture. When you stock with
                YaadFlexx, you're backing local shops, local brands, and local people, one delivery at a time.
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              className="absolute -inset-3 rounded-3xl opacity-30 blur-2xl"
              style={{ background: 'linear-gradient(135deg, #1B7A2B, #E8B500)' }}
            />
            <img
              src={heroImg}
              alt="YaadFlexx Caribbean wholesale goods"
              className="relative w-full h-72 sm:h-96 object-cover rounded-3xl border border-[#1B7A2B]/30"
            />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-[#050505] px-4 sm:px-6 md:px-10 py-16 sm:py-20 border-y border-[#1B7A2B]/20">
        <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-[#0A0A0A] border border-[#1B7A2B]/25 p-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1B7A2B]/15 text-[#E8B500] mb-5">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-white text-xl uppercase tracking-wide mb-3" style={oswald}>
              Our Mission
            </h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed" style={barlow}>
              To connect Caribbean communities with the authentic beverages and goods they love — through reliable
              wholesale distribution that empowers local retailers to thrive.
            </p>
          </div>
          <div className="rounded-2xl bg-[#0A0A0A] border border-[#1B7A2B]/25 p-8">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1B7A2B]/15 text-[#E8B500] mb-5">
              <Eye className="w-5 h-5" />
            </div>
            <h3 className="text-white text-xl uppercase tracking-wide mb-3" style={oswald}>
              Our Vision
            </h3>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed" style={barlow}>
              To become New York's most trusted Caribbean wholesale partner, ensuring every store shelf reflects
              the richness of island culture.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-[#0A0A0A] px-4 sm:px-6 md:px-10 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[0.7rem] uppercase text-[#E8B500] block mb-3" style={overline}>
              What We Stand For
            </span>
            <h2 className="text-white text-2xl sm:text-4xl" style={playfair}>
              Built for retailers
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl bg-[#050505] border border-[#1B7A2B]/25 p-6 text-center hover:border-[#E8B500]/50 transition-colors">
                <div className="mx-auto flex items-center justify-center w-14 h-14 rounded-full bg-[#1B7A2B]/15 text-[#E8B500] mb-4">
                  <p.Icon className="w-6 h-6" />
                </div>
                <h3 className="text-white text-sm uppercase tracking-wide mb-2" style={oswald}>
                  {p.title}
                </h3>
                <p className="text-white/60 text-xs leading-relaxed" style={barlow}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Personality chips */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
            {personality.map((t) => (
              <span
                key={t}
                className="px-4 py-1.5 rounded-full text-xs border border-[#1B7A2B]/40 bg-[#1B7A2B]/10 text-[#2ECC40]"
                style={{ ...barlow, fontWeight: 600, letterSpacing: '0.05em' }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#050505] px-4 sm:px-6 md:px-10 py-14 border-y border-[#1B7A2B]/20">
        <div className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-[#E8B500] text-3xl sm:text-5xl" style={playfair}>
                {s.value}
              </div>
              <div className="mt-2 text-white/60 text-xs sm:text-sm uppercase tracking-wide" style={{ ...barlow, fontWeight: 600, letterSpacing: '0.1em' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
