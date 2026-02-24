import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ContactStrip } from '../../components/Blocks';

export default function OffshoreFishing() {
  return (
    <div className="flex flex-col bg-[#F7F7F8]">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/fishwhistle/use-offshore.jpg"
            alt="Offshore fishing boat" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-6">Offshore Fishing & Dive</h1>
            <p className="text-xs text-zinc-300 max-w-md leading-relaxed">
              Heavy-duty hulls for serious ocean adventures. Built to handle the big water with confidence, safety, and unmatched durability.
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
              <h2 className="text-4xl font-medium mb-12">Why Our Offshore Boats Shine</h2>
              <div className="space-y-12">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 mr-6">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Deep-V Performance</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">Our deep-V hull designs slice through heavy chop, providing a dry, comfortable ride in challenging offshore conditions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 mr-6">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Structural Integrity</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">Reinforced internal stringer systems and heavy-gauge aluminum plating ensure the hull stays true under extreme stress.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 mr-6">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Safety First</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">Self-bailing decks, high freeboards, and redundant systems make our offshore vessels some of the safest on the water.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 bg-[#F7F7F8] overflow-hidden">
              <img src="/fishwhistle/model-fw232-main.jpg" alt="Offshore boat detail" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Subsections */}
      <section className="py-24 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F7F7F8] p-10 lg:p-16 border border-[#E5E5E5]">
              <h3 className="text-2xl font-medium mb-4 text-[#1A1A1A]">Serious Angling</h3>
              <p className="text-xs text-zinc-500 mb-8 leading-relaxed">Built for the hunt. Plenty of room for live wells, fish boxes, and all the electronics you need to find the big ones.</p>
              <ul className="text-[10px] space-y-4 text-zinc-400 font-bold uppercase tracking-[0.2em]">
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Integrated Live Wells</li>
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Massive Fish Box Capacity</li>
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Custom Electronics Suites</li>
              </ul>
            </div>
            <div className="bg-[#F7F7F8] p-10 lg:p-16 border border-[#E5E5E5]">
              <h3 className="text-2xl font-medium mb-4 text-[#1A1A1A]">Diving & Exploration</h3>
              <p className="text-xs text-zinc-500 mb-8 leading-relaxed">Easy access for divers and plenty of deck space for tanks and gear. A rugged platform for exploring the unknown.</p>
              <ul className="text-[10px] space-y-4 text-zinc-400 font-bold uppercase tracking-[0.2em]">
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Dive Door Options</li>
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Tank Rack Systems</li>
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Heavy-Duty Boarding Ladders</li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>

      <ContactStrip />
    </div>
  );
}
