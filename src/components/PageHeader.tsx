type Props = {
  overline: string;
  title: React.ReactNode;
  subtitle?: string;
};

// Shared inner-page header band: deep-black background with a subtle
// brand dot-grid + green radial glow, gold overline, Playfair headline.
export default function PageHeader({ overline, title, subtitle }: Props) {
  return (
    <header className="relative overflow-hidden bg-[#050505] border-b border-[#1B7A2B]/20">
      {/* dot grid */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(27,122,43,0.18) 1px, transparent 1px)',
          backgroundSize: '18px 18px',
        }}
      />
      {/* green radial glow */}
      <div
        className="absolute -top-24 left-1/2 -translate-x-1/2 w-[42rem] h-[42rem] rounded-full"
        style={{ background: 'radial-gradient(ellipse at center, rgba(27,122,43,0.22), transparent 60%)' }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-10 pt-28 sm:pt-36 pb-12 sm:pb-16 text-center">
        <span
          className="inline-block text-[0.7rem] sm:text-xs uppercase text-[#E8B500] mb-4"
          style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600, letterSpacing: '0.28em' }}
        >
          {overline}
        </span>
        <h1
          className="text-white text-3xl sm:text-5xl md:text-6xl leading-[1.05] max-w-4xl mx-auto"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, letterSpacing: '-0.02em' }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="mt-5 text-white/65 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Barlow', sans-serif" }}
          >
            {subtitle}
          </p>
        )}
        <div className="mt-7 mx-auto w-20 h-[3px] rounded-full" style={{ background: 'linear-gradient(90deg, #1B7A2B, #E8B500)' }} />
      </div>
    </header>
  );
}
