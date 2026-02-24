import { Outlet, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Logo } from './Logo';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Layout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Browse Models', path: '/browse-models' },
    {
      name: 'Recreational Uses',
      children: [
        { name: 'Small Fishing Boats', path: '/small-fishing-boats' },
        { name: 'Dinghies & Tenders', path: '/dinghies-tenders' },
        { name: 'Water Sports Boats', path: '/water-sports-boats' },
        { name: 'Offshore Fishing & Dive Boats', path: '/offshore-fishing-dive-boats' },
      ],
    },
    { name: 'Custom Boats', path: '/custom-boats' },
    { name: 'Military & Professional', path: '/military-professional-uses' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Contact Us', path: '/contact-us' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F7F8] font-sans text-[#1A1A1A]">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-[#E5E5E5] w-full">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 mx-auto">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center mr-8 lg:mr-12 xl:mr-20">
              <Link to="/" className="flex items-center group">
                <Logo className="h-11 md:h-14 w-auto group-hover:scale-105 transition-transform duration-300" />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex flex-1 justify-center space-x-6 xl:space-x-10 2xl:space-x-14 items-center">
              {navLinks.map((link) => (
                <div key={link.name} className="relative group">
                  {link.children ? (
                    <div className="flex items-center space-x-2 cursor-pointer py-8 text-[12px] font-bold uppercase tracking-[0.15em] text-zinc-500 hover:text-black transition-colors relative">
                      <span>{link.name}</span>
                      <ChevronDown className="w-4 h-4 ml-1.5 transition-transform group-hover:rotate-180 duration-300" />
                      
                      {/* Dropdown */}
                      <div className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[320px] pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                        <div className="bg-white border border-[#E5E5E5] shadow-2xl rounded-sm overflow-hidden py-2">
                          {link.children.map((child) => (
                            <Link
                              key={child.name}
                              to={child.path}
                              className="block px-8 py-5 text-[12px] font-bold uppercase tracking-[0.15em] text-zinc-500 hover:bg-[#F7F7F8] hover:text-black transition-colors"
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={cn(
                        "text-[12px] font-bold uppercase tracking-[0.15em] transition-all duration-200 py-8 relative inline-block whitespace-nowrap",
                        location.pathname === link.path 
                          ? "text-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-black" 
                          : "text-zinc-500 hover:text-black hover:after:w-full after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-black after:transition-all after:duration-300"
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 justify-end min-w-[300px]">
              <Link
                to="/find-a-dealer"
                className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500 hover:text-black transition-colors"
              >
                In Stock
              </Link>
              <Link
                to="/find-a-dealer"
                className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-500 hover:text-black transition-colors"
              >
                Distribution
              </Link>
              <div className="text-[11px] font-bold uppercase tracking-[0.15em] text-zinc-300 ml-4 border-l pl-4 border-[#E5E5E5] flex items-center h-4 cursor-pointer hover:text-zinc-500 transition-colors">
                EN <span className="text-zinc-200 mx-1">|</span> FR
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center lg:hidden space-x-4">
              <Link to="/find-a-dealer" className="text-[10px] font-bold uppercase tracking-[0.15em] text-zinc-500 mr-2 border border-[#E5E5E5] px-3 py-1.5 rounded-sm">
                Dealer
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-black p-2 bg-[#F7F7F8] rounded-sm hover:bg-zinc-200 transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#E5E5E5] absolute w-full left-0 z-40">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
              {navLinks.map((link) => (
                <div key={link.name} className="border-b border-[#F0F0F0] last:border-0">
                  {link.children ? (
                    <div className="space-y-1 py-1">
                      <div className="px-4 py-3 flex justify-between items-center text-[12px] font-bold text-zinc-800 uppercase tracking-[0.1em] bg-zinc-50/50">
                        {link.name}
                        <ChevronDown className="w-4 h-4 text-zinc-400" />
                      </div>
                      <div className="pl-6 space-y-1 pb-2">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.path}
                            className="block px-4 py-2.5 text-[11px] font-bold uppercase tracking-[0.1em] text-zinc-500 hover:text-black hover:bg-[#F7F7F8] rounded-sm transition-colors border-l-2 border-transparent hover:border-black"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className={cn(
                        "block px-4 py-4 text-[12px] font-bold uppercase tracking-[0.1em] transition-colors",
                        location.pathname === link.path
                          ? "text-black bg-[#F7F7F8] border-l-4 border-black pl-3"
                          : "text-zinc-600 hover:text-black hover:bg-[#F7F7F8]"
                      )}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            <div className="px-6 py-6 border-t border-[#E5E5E5] bg-zinc-50">
               <div className="flex space-x-6 justify-center">
                 <div className="text-[12px] font-bold uppercase tracking-[0.15em] text-black cursor-pointer pb-1 border-b-2 border-black">
                   EN
                 </div>
                 <div className="text-[12px] font-bold uppercase tracking-[0.15em] text-zinc-400 cursor-pointer hover:text-black transition-colors">
                   FR
                 </div>
               </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white text-zinc-500 py-20 border-t border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="col-span-1 md:col-span-1">
              <Link to="/" className="block mb-8 w-full max-w-[620px]">
                <Logo className="w-full h-auto object-contain" />
              </Link>
              <p className="text-xs leading-relaxed max-w-xs">
                Rugged welded aluminum boats built for precision, durability, and versatility. Boating without boundaries.
              </p>
            </div>
            
            <div>
              <h3 className="text-black font-bold uppercase tracking-[0.2em] text-[10px] mb-8">Models & Uses</h3>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-[0.1em]">
                <li><Link to="/browse-models" className="hover:text-black transition-colors">Browse All Models</Link></li>
                <li><Link to="/small-fishing-boats" className="hover:text-black transition-colors">Small Fishing Boats</Link></li>
                <li><Link to="/dinghies-tenders" className="hover:text-black transition-colors">Dinghies & Tenders</Link></li>
                <li><Link to="/water-sports-boats" className="hover:text-black transition-colors">Water Sports Boats</Link></li>
                <li><Link to="/offshore-fishing-dive-boats" className="hover:text-black transition-colors">Offshore & Dive</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-black font-bold uppercase tracking-[0.2em] text-[10px] mb-8">Company</h3>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-[0.1em]">
                <li><Link to="/about-us" className="hover:text-black transition-colors">About Us</Link></li>
                <li><Link to="/find-a-dealer" className="hover:text-black transition-colors">Find a Dealer</Link></li>
                <li><Link to="/custom-boats" className="hover:text-black transition-colors">Custom Boats</Link></li>
                <li><Link to="/military-professional-uses" className="hover:text-black transition-colors">Military & Professional</Link></li>
                <li><Link to="/lifetime-warranty" className="hover:text-black transition-colors">Lifetime Warranty</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-black font-bold uppercase tracking-[0.2em] text-[10px] mb-8">Contact</h3>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-[0.1em]">
                <li className="flex items-center">
                  <Phone className="w-3 h-3 mr-3" />
                  <a href="tel:250-491-0299" className="hover:text-black transition-colors">250-491-0299</a>
                </li>
                <li>Kelowna, BC</li>
                <li className="pt-4">
                  <Link to="/contact-us" className="text-black underline hover:text-zinc-600 transition-colors">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-20 pt-10 border-t border-[#F0F0F0] flex flex-col md:flex-row justify-between items-center text-[10px] font-bold uppercase tracking-[0.1em]">
            <p>&copy; {new Date().getFullYear()} Fish Whistle Boats. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-8">
              <Link to="/privacy-policy" className="hover:text-black transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
