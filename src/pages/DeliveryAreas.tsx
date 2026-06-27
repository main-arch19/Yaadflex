import { MapPin, Package, Truck, Clock, CheckCircle, Navigation } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import CTASection from '../components/CTASection';
import { boroughs, deliveryInfo } from '../siteConfig';

const steps = [
  { Icon: Package, title: 'Order by noon', desc: 'Place your wholesale order online or by phone before midday.' },
  { Icon: Truck, title: 'We pack & dispatch', desc: 'Your goods are picked, packed, and loaded onto our routes the same day.' },
  { Icon: Clock, title: 'Delivered by evening', desc: 'Fresh stock arrives at your store doorstep — no waiting around.' },
];

const details = [
  { Icon: Navigation, text: deliveryInfo.days },
  { Icon: CheckCircle, text: deliveryInfo.minOrder },
  { Icon: Truck, text: deliveryInfo.freeOver },
];

const overline = { fontFamily: "'Barlow', sans-serif", fontWeight: 600, letterSpacing: '0.22em' } as const;
const oswald = { fontFamily: "'Oswald', sans-serif", fontWeight: 700 } as const;
const playfair = { fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, letterSpacing: '-0.02em' } as const;
const barlow = { fontFamily: "'Barlow', sans-serif" } as const;

export default function DeliveryAreas() {
  return (
    <>
      <PageHeader
        overline="Service Area"
        title={
          <>
            We Deliver Across <span className="text-[#E8B500]">All 5 Boroughs & the Tri-State</span>
          </>
        }
        subtitle="From Brooklyn to the Bronx, YaadFlexx keeps New York's shops stocked with authentic Caribbean beverages and goods — fast, reliable, statewide."
      />

      {/* Borough cards */}
      <section className="bg-[#0A0A0A] px-4 sm:px-6 md:px-10 py-16 sm:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {boroughs.map((b) => (
              <div
                key={b.name}
                className="group relative rounded-2xl bg-[#050505] border border-[#1B7A2B]/25 p-6 hover:border-[#E8B500]/50 transition-colors"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#1B7A2B]/15 text-[#E8B500] mb-4 group-hover:bg-[#1B7A2B]/25 transition-colors">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="text-white text-xl uppercase tracking-wide mb-2" style={oswald}>
                  {b.name}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed mb-4" style={barlow}>
                  {b.blurb}
                </p>
                <div className="pt-4 border-t border-white/10">
                  <span className="text-[0.65rem] uppercase text-[#E8B500] block mb-1.5" style={overline}>
                    Coverage
                  </span>
                  <p className="text-white/55 text-xs leading-relaxed" style={barlow}>
                    {b.neighborhoods}
                  </p>
                </div>
              </div>
            ))}

            {/* Coverage note card */}
            <div
              className="rounded-2xl p-6 flex flex-col justify-center"
              style={{ background: 'linear-gradient(135deg, #0D4F1C, #1B7A2B)' }}
            >
              <h3 className="text-white text-lg mb-2" style={{ ...playfair, fontSize: '1.4rem' }}>
                Don't see your block?
              </h3>
              <p className="text-white/85 text-sm leading-relaxed" style={barlow}>
                If you're a retailer anywhere in the five boroughs, reach out — we're always expanding our routes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-[#050505] px-4 sm:px-6 md:px-10 py-16 sm:py-20 border-y border-[#1B7A2B]/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-[0.7rem] uppercase text-[#E8B500] block mb-3" style={overline}>
              How Delivery Works
            </span>
            <h2 className="text-white text-2xl sm:text-4xl" style={playfair}>
              {deliveryInfo.cutoff}. {deliveryInfo.window}.
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="relative text-center">
                <div className="mx-auto flex items-center justify-center w-16 h-16 rounded-full bg-[#1B7A2B]/15 text-[#E8B500] mb-5">
                  <s.Icon className="w-7 h-7" />
                </div>
                <span className="text-[#1B7A2B] text-sm block mb-2" style={oswald}>
                  STEP {i + 1}
                </span>
                <h3 className="text-white text-lg uppercase tracking-wide mb-2" style={oswald}>
                  {s.title}
                </h3>
                <p className="text-white/65 text-sm leading-relaxed max-w-xs mx-auto" style={barlow}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Details strip */}
          <div className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            {details.map((d) => (
              <div key={d.text} className="flex items-center gap-2.5 text-white/80">
                <d.Icon className="w-5 h-5 text-[#E8B500]" />
                <span className="text-sm" style={{ ...barlow, fontWeight: 500 }}>
                  {d.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Stock up. We'll handle the rest."
        subtitle="Order by noon and your Caribbean goods arrive by evening, anywhere in the five boroughs."
      />
    </>
  );
}
