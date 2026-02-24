import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ContactStrip } from '../../components/Blocks';

export default function DinghiesTenders() {
  return (
    <div className="flex flex-col bg-[#F7F7F8]">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/fishwhistle/use-dinghy.jpg"
            alt="Aluminum tender boat" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-6">Dinghies & Tenders</h1>
            <p className="text-xs text-zinc-300 max-w-md leading-relaxed">
              The ultimate utility vessel. Rugged, reliable, and built to last a lifetime. The perfect companion for your primary vessel or short-range transport.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Our Boats Shine */}
      <section className="bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-10 lg:p-24 border-r border-[#E5E5E5]">
              <div className="text-[10px] font-bold text-zinc-400 mb-12 uppercase tracking-[0.2em]">Features</div>
              <h2 className="text-4xl font-medium mb-12">Why Our Tenders Shine</h2>
              <div className="space-y-12">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 mr-6">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Zero Maintenance</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">Unlike inflatable or fiberglass tenders, our aluminum hulls require no UV protection, won't puncture, and don't rot.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 mr-6">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Beachable Design</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">Run it right up onto the rocks or sand without worry. Our reinforced bottoms are built for rough landings.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 mr-6">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Lightweight Efficiency</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">High strength-to-weight ratio means you can use smaller outboards while maintaining excellent performance.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 bg-[#F7F7F8] overflow-hidden">
              <img src="/fishwhistle/model-fw109-main.jpg" alt="Tender boat detail" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Subsections */}
      <section className="py-24 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F7F7F8] p-10 lg:p-16 border border-[#E5E5E5]">
              <h3 className="text-2xl font-medium mb-4 text-[#1A1A1A]">Yacht Tenders</h3>
              <p className="text-xs text-zinc-500 mb-8 leading-relaxed">A reliable link between your yacht and the shore. Built to withstand constant use and harsh marine environments.</p>
              <ul className="text-[10px] space-y-4 text-zinc-400 font-bold uppercase tracking-[0.2em]">
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Integrated Davit Lifting Points</li>
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Custom Fender Rails</li>
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Lightweight for Easy Stowage</li>
              </ul>
            </div>
            <div className="bg-[#F7F7F8] p-10 lg:p-16 border border-[#E5E5E5]">
              <h3 className="text-2xl font-medium mb-4 text-[#1A1A1A]">Utility Transport</h3>
              <p className="text-xs text-zinc-500 mb-8 leading-relaxed">The workhorse of the waterfront. Move gear, groceries, and people with a boat that doesn't need babying.</p>
              <ul className="text-[10px] space-y-4 text-zinc-400 font-bold uppercase tracking-[0.2em]">
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> High Payload Capacity</li>
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Self-Bailing Options</li>
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Rugged Non-Slip Decks</li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>

      <ContactStrip />
    </div>
  );
}
