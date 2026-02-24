import { motion } from 'motion/react';
import { Globe, Users, Leaf } from 'lucide-react';
import { ContactStrip } from '../components/Blocks';

export default function AboutUs() {
  return (
    <div className="flex flex-col bg-[#F7F7F8]">
      {/* Hero */}
      <section className="min-h-[60vh] flex flex-col lg:flex-row border-b border-[#E5E5E5] bg-white">
        <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-16 flex flex-col justify-center border-r border-[#E5E5E5]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-medium tracking-tight text-[#1A1A1A] mb-8"
          >
            Boating Without Boundaries
          </motion.h1>
          <p className="text-xs text-zinc-500 max-w-md leading-relaxed">
            Born from the rugged landscapes of British Columbia, Fish Whistle Boats is dedicated to building the toughest, most versatile welded aluminum vessels on the water.
          </p>
        </div>
        <div className="w-full lg:w-1/2 relative bg-[#F7F7F8] flex items-center justify-center p-10 lg:p-20 overflow-hidden">
          <motion.img 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="/fishwhistle/about-hero.jpg"
            alt="About Us Hero" 
            className="w-full h-auto max-w-2xl object-contain drop-shadow-2xl mix-blend-multiply"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Origin & Mission */}
      <section className="bg-white border-b border-[#E5E5E5]">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 bg-[#F7F7F8] flex items-center justify-center p-10 lg:p-20 border-r border-[#E5E5E5]">
            <img src="/fishwhistle/about-workshop.jpg" alt="Fish Whistle workshop" className="w-full h-auto object-cover drop-shadow-xl" />
          </div>
          <div className="w-full lg:w-1/2 p-10 lg:p-24 flex flex-col justify-center">
            <div className="text-[10px] font-bold text-zinc-400 mb-12 uppercase tracking-[0.2em]">Our Origin</div>
            <h2 className="text-4xl font-medium mb-8">Precision Engineering Meets Passion</h2>
            <p className="text-xs text-zinc-500 leading-relaxed mb-6 max-w-md">
              Founded in Kelowna, BC, Fish Whistle Boats began with a simple goal: to build a boat that could handle the rocky rivers and unpredictable lakes of the interior without the constant maintenance and fragility of fiberglass.
            </p>
            <p className="text-xs text-zinc-500 leading-relaxed mb-12 max-w-md">
              Today, we are a leading manufacturer of welded aluminum boats, serving recreational anglers, families, and professional agencies across North America. Our commitment to quality and innovation remains at the core of everything we build.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-[#E5E5E5] max-w-md">
              <div>
                <h4 className="font-medium text-3xl mb-2 text-[#1A1A1A]">100%</h4>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Welded Aluminum</p>
              </div>
              <div>
                <h4 className="font-medium text-3xl mb-2 text-[#1A1A1A]">Lifetime</h4>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Hull Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability & Reach */}
      <section className="py-24 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <div className="text-[10px] font-bold text-zinc-400 mb-4 uppercase tracking-[0.2em]">Values</div>
            <h2 className="text-4xl font-medium mb-6">A Global Reach with a Local Heart</h2>
            <p className="text-xs text-zinc-500 leading-relaxed">
              While our boats are found in oceans and rivers around the world, our focus remains on sustainable manufacturing and supporting our local communities and dealer networks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full border border-[#E5E5E5] flex items-center justify-center mb-8 bg-[#F7F7F8]">
                <Leaf className="w-6 h-6 text-zinc-400" />
              </div>
              <h4 className="text-sm font-medium mb-4">Sustainability</h4>
              <p className="text-xs text-zinc-500 leading-relaxed max-w-xs">Aluminum is 100% recyclable. Our manufacturing process minimizes waste and prioritizes long-lasting products that don't end up in landfills.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full border border-[#E5E5E5] flex items-center justify-center mb-8 bg-[#F7F7F8]">
                <Globe className="w-6 h-6 text-zinc-400" />
              </div>
              <h4 className="text-sm font-medium mb-4">Dealer Network</h4>
              <p className="text-xs text-zinc-500 leading-relaxed max-w-xs">We partner with the best marine dealers across North America to ensure our customers have local support and expertise wherever they boat.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full border border-[#E5E5E5] flex items-center justify-center mb-8 bg-[#F7F7F8]">
                <Users className="w-6 h-6 text-zinc-400" />
              </div>
              <h4 className="text-sm font-medium mb-4">Community</h4>
              <p className="text-xs text-zinc-500 leading-relaxed max-w-xs">We support local conservation efforts and outdoor organizations that protect the waters we all love to explore.</p>
            </div>
          </div>
        </div>
      </section>

      <ContactStrip />
    </div>
  );
}
