import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/shop', label: 'Shop' }, // placeholder — no Shop page yet
  { to: '/delivery', label: 'Delivery Areas' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  // On the home page the nav floats transparently over the hero video.
  // On every other page it becomes a solid sticky bar.
  const overlay = pathname === '/';

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <>
      <nav
        className={`z-30 flex items-center justify-between px-4 sm:px-6 md:px-10 py-4 sm:py-6 ${
          overlay
            ? 'absolute top-0 left-0 right-0'
            : 'sticky top-0 bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <span
            className="text-lg sm:text-xl md:text-2xl tracking-widest uppercase"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
          >
            <span className="text-white">YAAD</span>
            <span className="text-[#E8B500]">FLEXX</span>
          </span>
        </Link>

        {/* Desktop pill nav */}
        <div className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-md rounded-full pl-6 pr-1 py-1 shadow-sm border border-white/60">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `text-sm px-3 py-2 transition-colors ${
                  isActive
                    ? 'font-semibold text-[#0A0A0A]'
                    : 'font-medium text-[#0A0A0A]/70 hover:text-[#0A0A0A]'
                }`
              }
              style={{ fontFamily: "'Barlow', sans-serif" }}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-2 bg-[#1B7A2B] hover:bg-[#0D4F1C] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
            style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
          >
            Order Now
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex items-center gap-3 sm:gap-6">
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
        className={`lg:hidden fixed inset-0 z-40 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-[#0A0A0A]/40 backdrop-blur-sm" />
      </div>

      {/* Mobile menu drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-40 w-[88%] max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-8">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
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
              </NavLink>
            ))}
          </div>

          <div
            className={`mt-8 flex flex-col gap-4 transition-all duration-500 ${
              menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
            }`}
            style={{ transitionDelay: menuOpen ? '400ms' : '0ms' }}
          >
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 text-center bg-[#1B7A2B] hover:bg-[#0D4F1C] text-white text-sm px-5 py-3 rounded-full transition-colors"
              style={{ fontFamily: "'Oswald', sans-serif", fontWeight: 700 }}
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
