import { Link } from 'react-router-dom';
import { Phone, ArrowRight, ShieldCheck, Clock, CheckCircle2, Wrench, FileText, Truck, PenTool, ChevronDown } from 'lucide-react';
import { cn } from './Layout';

// Global CTAs
export function PrimaryCTA({ className, text = "Shop All Boats", to = "/browse-models", state }: { className?: string, text?: string, to?: string, state?: any }) {
  return (
    <Link
      to={to}
      state={state}
      className={cn(
        "bg-black text-white px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-colors flex items-center justify-center",
        className
      )}
    >
      {text}
      <ArrowRight className="ml-2 w-3 h-3" />
    </Link>
  );
}

export function SecondaryCTA({ className, text = "Find a Dealer", to = "/find-a-dealer" }: { className?: string, text?: string, to?: string }) {
  return (
    <Link
      to={to}
      className={cn(
        "bg-white text-black border border-[#E5E5E5] px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-50 transition-colors flex items-center justify-center",
        className
      )}
    >
      {text}
      <ArrowRight className="ml-2 w-3 h-3" />
    </Link>
  );
}

export function CallCTA({ className, text = "Call 250-491-0299" }: { className?: string, text?: string }) {
  return (
    <a
      href="tel:250-491-0299"
      className={cn(
        "bg-white text-black border border-[#E5E5E5] px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-50 transition-colors flex items-center justify-center",
        className
      )}
    >
      <Phone className="mr-2 w-3 h-3" />
      {text}
    </a>
  );
}

// Global Trust Elements
export function CertificationsBlock({ className }: { className?: string }) {
  return (
    <div className={cn("bg-[#F7F7F8] py-24 px-6 border-b border-[#E5E5E5]", className)}>
      <div className="max-w-[1440px] mx-auto text-center">
        <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-16">Certified Standards & Safety</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
          <div className="flex flex-col items-center">
            <ShieldCheck className="w-6 h-6 mb-4 text-[#1A1A1A]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">USCG Compliant</span>
          </div>
          <div className="flex flex-col items-center">
            <CheckCircle2 className="w-6 h-6 mb-4 text-[#1A1A1A]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Transport Canada</span>
          </div>
          <div className="flex flex-col items-center">
            <Wrench className="w-6 h-6 mb-4 text-[#1A1A1A]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">ABYC Standards</span>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="w-6 h-6 mb-4 text-[#1A1A1A]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500">Lifetime Warranty</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TestimonialBlock({ quote, author, company, className }: { quote: string, author: string, company: string, className?: string }) {
  return (
    <div className={cn("bg-white py-24 px-6 border-b border-[#E5E5E5]", className)}>
      <div className="max-w-4xl mx-auto text-center">
        <svg className="w-8 h-8 mx-auto mb-8 text-zinc-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <blockquote className="text-3xl md:text-5xl font-medium leading-tight mb-12 text-[#1A1A1A]">
          "{quote}"
        </blockquote>
        <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
          {author} <span className="text-zinc-300 mx-2">|</span> {company}
        </div>
      </div>
    </div>
  );
}

export function ProcessBlock({ className }: { className?: string }) {
  return (
    <div className={cn("py-24 px-6 bg-white border-b border-[#E5E5E5]", className)}>
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16">
          <div className="text-[10px] font-bold text-zinc-400 mb-4 uppercase tracking-[0.2em]">Process</div>
          <h2 className="text-4xl font-medium">How to Buy</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
          <div className="hidden md:block absolute top-8 left-0 w-full h-[1px] bg-[#E5E5E5] -z-10"></div>
          
          <div className="flex flex-col items-center text-center bg-white">
            <div className="w-16 h-16 bg-[#F7F7F8] border border-[#E5E5E5] rounded-full flex items-center justify-center mb-6 text-xl font-medium">1</div>
            <FileText className="w-6 h-6 mb-4 text-zinc-400" />
            <h3 className="text-sm font-medium mb-2">Browse Models</h3>
            <p className="text-xs text-zinc-500 leading-relaxed">Explore our recreational and professional model lineup online.</p>
          </div>
          
          <div className="flex flex-col items-center text-center bg-white">
            <div className="w-16 h-16 bg-[#F7F7F8] border border-[#E5E5E5] rounded-full flex items-center justify-center mb-6 text-xl font-medium">2</div>
            <PenTool className="w-6 h-6 mb-4 text-zinc-400" />
            <h3 className="text-sm font-medium mb-2">Find a Dealer</h3>
            <p className="text-xs text-zinc-500 leading-relaxed">Connect with our authorized dealer network for local support.</p>
          </div>
          
          <div className="flex flex-col items-center text-center bg-white">
            <div className="w-16 h-16 bg-[#F7F7F8] border border-[#E5E5E5] rounded-full flex items-center justify-center mb-6 text-xl font-medium">3</div>
            <Wrench className="w-6 h-6 mb-4 text-zinc-400" />
            <h3 className="text-sm font-medium mb-2">Customize</h3>
            <p className="text-xs text-zinc-500 leading-relaxed">Select options and add-ons to tailor the boat to your specific needs.</p>
          </div>
          
          <div className="flex flex-col items-center text-center bg-white">
            <div className="w-16 h-16 bg-[#F7F7F8] border border-[#E5E5E5] rounded-full flex items-center justify-center mb-6 text-xl font-medium">4</div>
            <Truck className="w-6 h-6 mb-4 text-zinc-400" />
            <h3 className="text-sm font-medium mb-2">Hit the Water</h3>
            <p className="text-xs text-zinc-500 leading-relaxed">Your rugged, welded aluminum boat is ready for boundaries-free boating.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function GalleryPreviewBlock({ className }: { className?: string }) {
  const images = [
    "/fishwhistle/home-hero-fw232.jpg",
    "/fishwhistle/model-fw151-main.jpg",
    "/fishwhistle/model-fw127-main.jpg",
    "/fishwhistle/model-fw109-main.jpg",
    "/fishwhistle/model-fw232-main.jpg",
    "/fishwhistle/use-offshore.jpg",
  ];

  return (
    <div className={cn("py-24 bg-white border-b border-[#E5E5E5]", className)}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-xl">
            <div className="text-[10px] font-bold text-zinc-400 mb-4 uppercase tracking-[0.2em]">Gallery</div>
            <h2 className="text-4xl font-medium mb-4">On the Water</h2>
            <p className="text-xs text-zinc-500 leading-relaxed">See our boats in action across rivers, lakes, and open oceans.</p>
          </div>
          <Link to="/browse-models" className="hidden md:inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-[#1A1A1A] transition-colors mt-8 md:mt-0">
            Shop All Boats <ArrowRight className="ml-2 w-3 h-3" />
          </Link>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((src, i) => (
            <div key={i} className="aspect-[4/3] bg-[#F7F7F8] overflow-hidden group">
              <img 
                src={src} 
                alt={`Boat in action ${i+1}`} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ContactStrip({ className }: { className?: string }) {
  return (
    <div className={cn("bg-white py-24 border-b border-[#E5E5E5]", className)}>
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="text-[10px] font-bold text-zinc-400 mb-4 uppercase tracking-[0.2em]">Contact</div>
        <h2 className="text-4xl md:text-5xl font-medium mb-6">Ready to hit the water?</h2>
        <p className="text-xs text-zinc-500 mb-12 max-w-md mx-auto leading-relaxed">
          Connect with our sales team or find a dealer near you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <PrimaryCTA text="Shop All Boats" />
          <CallCTA />
        </div>
        <div className="mt-16 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 flex flex-col sm:flex-row justify-center items-center gap-6">
          <span>📍 Kelowna, BC</span>
          <span className="hidden sm:inline">•</span>
          <span>📞 Toll-Free: 1-877-335-0486</span>
        </div>
      </div>
    </div>
  );
}
