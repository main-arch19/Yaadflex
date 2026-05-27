import { useState, useEffect } from 'react';
import { Play, Sparkles, Menu, X } from 'lucide-react';
import BoomerangVideoBg from './BoomerangVideoBg';

const BG_VIDEO = '/hero-video.mp4';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHero, setShowHero] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#shop', label: 'Shop' },
    { href: '#delivery', label: 'Delivery Areas' },
    { href: '#about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <>
    <section className="relative w-full min-h-screen sm:h-screen overflow-hidden">
      <BoomerangVideoBg src={BG_VIDEO} className="absolute inset-0 w-full h-full" />
      <nav className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span
            className="text-lg sm:text-xl md:text-2xl tracking-widest uppercase"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
          >
            <span className="text-white">YAAD</span>
            <span className="text-[#E8B500]">FLEXX</span>
          </span>
        </div>

        {/* Desktop pill nav */}
        <div className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md rounded-full pl-6 pr-1 py-1 shadow-sm border border-white/60">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm px-3 py-2 transition-colors ${
                i === 0
                  ? 'font-semibold text-[#0A0A0A]'
                  : 'font-medium text-[#0A0A0A]/70 hover:text-[#0A0A0A]'
              }`}
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              {link.label}
            </a>
          ))}
          <button
            className="ml-2 bg-[#1B7A2B] hover:bg-[#0D4F1C] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
          >
            Order Now
          </button>
        </div>

        {/* Right nav */}
        <div className="flex items-center gap-3 sm:gap-6 text-white/90">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="lg:hidden relative flex items-center justify-center w-10 h-10 rounded-full bg-white/70 backdrop-blur-md border border-white/60 text-[#0A0A0A] transition-all duration-300 hover:bg-white/90"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <Menu
              className={`w-5 h-5 absolute transition-all duration-300 ${
                menuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'
              }`}
            />
            <X
              className={`w-5 h-5 absolute transition-all duration-300 ${
                menuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-20 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/40 backdrop-blur-sm" />
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-20 w-[88%] max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-8">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-xl font-semibold text-[#0A0A0A] py-3 border-b border-[#0A0A0A]/10 transition-all duration-500 ${
                  menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
                }`}
                style={{
                  fontFamily: "'Oswald', sans-serif",
                  fontWeight: 700,
                  transitionDelay: menuOpen ? `${150 + i * 70}ms` : '0ms',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div
            className={`mt-8 flex flex-col gap-4 transition-all duration-500 ${
              menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: menuOpen ? '400ms' : '0ms' }}
          >
            <button
              className="mt-2 bg-[#1B7A2B] hover:bg-[#0D4F1C] text-white text-sm px-5 py-3 rounded-full transition-colors"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>

      {/* Hero copy */}
      <div className="relative z-10 flex flex-col items-center text-center pt-20 sm:pt-28 md:pt-32 px-4 sm:px-6">
        <h1
          className="font-black leading-[1.05] text-[1.6rem] sm:text-4xl md:text-5xl lg:text-[4.75rem] xl:text-[5.25rem] max-w-5xl"
          style={{ fontFamily: "'Playfair Display', Georgia, serif", fontWeight: 900, letterSpacing: '-0.03em' }}
        >
          <span className="text-white">Bringing the Yaard</span>
          <br className="hidden sm:block" />
          <span className="text-[#E8B500]"> to Your Store</span>
        </h1>
        <p
          className="mt-4 sm:mt-8 text-[#F5F5F0]/85 text-xs sm:text-base md:text-lg leading-relaxed max-w-md px-2"
          style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 400 }}
        >
          Authentic Caribbean beverages & goods — wholesale pricing for retailers, delivered island-wide.
        </p>
      </div>

      {/* Bottom-left CTA block */}
      <div className="absolute left-4 right-4 sm:right-auto sm:left-6 md:left-10 bottom-6 sm:bottom-8 md:bottom-10 z-10 max-w-sm">
        <div className="flex items-center gap-2 text-[#E8B500] mb-3">
          <Sparkles className="w-4 h-4" />
          <span
            className="text-sm"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
          >
            Island-Wide Delivery
          </span>
        </div>
        <p
          className="text-[#0A0A0A]/80 sm:text-white/80 text-[0.7rem] sm:text-xs leading-relaxed mb-4 sm:mb-6 max-w-xs"
          style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 400 }}
        >
          Order by noon, delivered by evening. Stock authentic Caribbean goods at wholesale pricing built for your store.
        </p>
        <div className="flex items-center gap-4 flex-wrap">
          <button
            className="bg-[#E8B500] hover:bg-[#B8920E] text-[#0A0A0A] text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-colors shadow-sm"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
          >
            Order Now
          </button>
          <button
            className="text-[#0A0A0A] sm:text-white text-sm hover:opacity-80 transition-opacity"
            style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600 }}
          >
            Explore Products.
          </button>
        </div>
      </div>
    </section>

      {!showHero && (
        <div className="fixed inset-0 z-50 w-full h-full">
          <video
            src="/open-soon-section.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
          <button
            className="absolute right-4 sm:right-6 md:right-10 bottom-6 sm:bottom-8 md:bottom-10 z-10 flex items-center gap-1.5 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white text-xs sm:text-sm px-4 sm:px-5 py-2.5 sm:py-3 rounded-full transition-colors max-w-[220px] sm:max-w-none text-center"
            style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 500 }}
            onClick={() => setShowHero(true)}
          >
            Only employees allowed behind here 🚪
          </button>
        </div>
      )}
    </>
  );
}

export default App;
