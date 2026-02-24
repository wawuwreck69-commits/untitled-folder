import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { ContactStrip } from '../../components/Blocks';

export default function WaterSports() {
  return (
    <div className="flex flex-col bg-[#F7F7F8]">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/fishwhistle/use-water-sports.jpg"
            alt="Water sports boat" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-6">Water Sports Boats</h1>
            <p className="text-xs text-zinc-300 max-w-md leading-relaxed">
              Performance meets durability. Built for speed, stability, and family fun on the water. A rugged alternative to traditional fiberglass sport boats.
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
              <h2 className="text-4xl font-medium mb-12">Why Our Sport Boats Shine</h2>
              <div className="space-y-12">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 mr-6">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">High-Speed Stability</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">Precision-engineered hull strakes and a deep-V entry ensure a smooth, stable ride even at high speeds.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 mr-6">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Versatile Layouts</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">From towing tubes to afternoon cruises, our open-concept decks provide the space and flexibility your family needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 mr-6">
                    <CheckCircle2 className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Rugged Reliability</h4>
                    <p className="text-xs text-zinc-500 leading-relaxed">No need to worry about gelcoat chips or spider cracks. Our welded aluminum hulls are built to take a beating.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2 bg-[#F7F7F8] overflow-hidden">
              <img src="/fishwhistle/model-fw-sole-main.jpg" alt="Sport boat detail" className="w-full h-full object-cover mix-blend-multiply" />
            </div>
          </div>
        </div>
      </section>

      {/* Use Case Subsections */}
      <section className="py-24 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F7F7F8] p-10 lg:p-16 border border-[#E5E5E5]">
              <h3 className="text-2xl font-medium mb-4 text-[#1A1A1A]">Family Fun</h3>
              <p className="text-xs text-zinc-500 mb-8 leading-relaxed">The perfect platform for towing, swimming, and exploring. Safe, stable, and easy for everyone to enjoy.</p>
              <ul className="text-[10px] space-y-4 text-zinc-400 font-bold uppercase tracking-[0.2em]">
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Integrated Swim Platforms</li>
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Comfortable Seating Options</li>
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Ample Storage for Gear</li>
              </ul>
            </div>
            <div className="bg-[#F7F7F8] p-10 lg:p-16 border border-[#E5E5E5]">
              <h3 className="text-2xl font-medium mb-4 text-[#1A1A1A]">Performance Cruising</h3>
              <p className="text-xs text-zinc-500 mb-8 leading-relaxed">Get where you're going faster. Our lightweight hulls paired with modern outboards offer exceptional fuel economy and speed.</p>
              <ul className="text-[10px] space-y-4 text-zinc-400 font-bold uppercase tracking-[0.2em]">
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Aerodynamic Console Designs</li>
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Precision Steering Systems</li>
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> High-Efficiency Hull Geometry</li>
              </ul>
            </div>
          </div>
          
        </div>
      </section>

      <ContactStrip />
    </div>
  );
}
