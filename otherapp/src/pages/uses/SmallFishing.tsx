import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ContactStrip } from '../../components/Blocks';

export default function SmallFishing() {
  return (
    <div className="flex flex-col bg-[#F7F7F8]">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/fishwhistle/use-small-fishing.jpg"
            alt="Small fishing boat on river" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-6">Small Fishing Boats</h1>
            <p className="text-xs text-zinc-300 max-w-md leading-relaxed">
              Lightweight, rugged, and ready for the river. Built for those who need a boat that can handle the shallows and the rocks.
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
              <h2 className="text-4xl font-medium mb-12">Why Our Small Boats Shine</h2>
              <div className="space-y-12">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 mr-6">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Unmatched Durability</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">Welded aluminum hulls handle river rocks and gravel bars that would destroy fiberglass or thin-gauge riveted boats.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 mr-6">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Shallow Water Performance</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">Engineered with shallow drafts to get you into the tightest fishing spots where the big boats can't go.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 mr-6">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Easy Transport</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">Lightweight construction means easier towing, launching, and recovery, even in primitive locations.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 bg-[#F7F7F8] overflow-hidden">
              <img src="/fishwhistle/model-fw151-main.jpg" alt="Fishing boat detail" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Subsections */}
      <section className="py-24 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F7F7F8] p-10 lg:p-16 border border-[#E5E5E5]">
              <h3 className="text-2xl font-medium mb-4 text-[#1A1A1A]">River Running</h3>
              <p className="text-xs text-zinc-500 mb-8 leading-relaxed">Navigate rocky rivers with confidence. Our hulls are designed to deflect impacts and keep you moving downstream.</p>
              <ul className="text-[10px] space-y-4 text-zinc-400 font-bold uppercase tracking-[0.2em]">
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Reinforced Keels</li>
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Impact Resistant 5052 Aluminum</li>
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Jet Drive Compatible</li>
              </ul>
            </div>
            <div className="bg-[#F7F7F8] p-10 lg:p-16 border border-[#E5E5E5]">
              <h3 className="text-2xl font-medium mb-4 text-[#1A1A1A]">Lake Fishing</h3>
              <p className="text-xs text-zinc-500 mb-8 leading-relaxed">Stable platforms for casting and trolling. Plenty of room for gear, coolers, and your catch of the day.</p>
              <ul className="text-[10px] space-y-4 text-zinc-400 font-bold uppercase tracking-[0.2em]">
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Wide Beam Stability</li>
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Integrated Rod Storage</li>
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Custom Seating Options</li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>

      <ContactStrip />
    </div>
  );
}
