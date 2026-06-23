import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';
import BoomerangVideoBg from '../BoomerangVideoBg';

const BG_VIDEO = '/hero-video.mp4';

export default function Home() {
  const [showHero, setShowHero] = useState(false);

  return (
    <>
      <section className="relative w-full min-h-screen sm:h-screen overflow-hidden">
        <BoomerangVideoBg src={BG_VIDEO} className="absolute inset-0 w-full h-full" />

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
            <span className="text-sm" style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}>
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
            <Link
              to="/contact"
              className="bg-[#E8B500] hover:bg-[#B8920E] text-[#0A0A0A] text-sm px-5 sm:px-6 py-2.5 sm:py-3 rounded-full transition-colors shadow-sm"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
            >
              Order Now
            </Link>
            <Link
              to="/delivery"
              className="text-[#0A0A0A] sm:text-white text-sm hover:opacity-80 transition-opacity"
              style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 600 }}
            >
              Explore Products.
            </Link>
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
