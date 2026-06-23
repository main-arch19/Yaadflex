import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';

export default function Layout() {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  // Scroll to top on route change.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#0A0A0A]">
      <Nav />
      <main className="flex-1">
        <Outlet />
      </main>
      {/* The home route is a full-bleed hero (with its own coming-soon gate),
          so the shared footer only shows on inner pages. */}
      {!isHome && <Footer />}
    </div>
  );
}
