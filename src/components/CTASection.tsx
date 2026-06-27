import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type Props = {
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  primaryTo?: string;
};

// Reusable green→dark gradient call-to-action band.
export default function CTASection({
  title = 'Ready to stock the Yaad?',
  subtitle = 'Order by noon, delivered by evening. Become a stockist and bring authentic Caribbean goods to your shelves.',
  primaryLabel = 'Become a Stockist',
  primaryTo = '/contact',
}: Props) {
  return (
    <section className="bg-[#0A0A0A] px-4 sm:px-6 md:px-10 py-16 sm:py-20">
      <div
        className="relative overflow-hidden max-w-6xl mx-auto rounded-3xl px-6 sm:px-12 py-12 sm:py-16 text-center"
        style={{ background: 'linear-gradient(135deg, #0D4F1C, #1B7A2B)' }}
      >
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.06) 8px, rgba(255,255,255,0.06) 10px)',
          }}
        />
        <div className="relative">
          <h2
            className="text-white text-2xl sm:text-4xl md:text-5xl leading-tight max-w-3xl mx-auto"
            style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, letterSpacing: '-0.02em' }}
          >
            {title}
          </h2>
          <p
            className="mt-4 text-white/80 text-sm sm:text-base max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            {subtitle}
          </p>
          <Link
            to={primaryTo}
            className="mt-8 inline-flex items-center gap-2 bg-[#E8B500] hover:bg-[#B8920E] text-[#0A0A0A] text-sm px-7 py-3.5 rounded-full transition-colors shadow-lg"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
          >
            {primaryLabel}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
