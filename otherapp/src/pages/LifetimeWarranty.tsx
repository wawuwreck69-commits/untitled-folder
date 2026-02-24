import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, AlertCircle } from 'lucide-react';
import { ContactStrip } from '../components/Blocks';

export default function LifetimeWarranty() {
  return (
    <div className="flex flex-col bg-[#F7F7F8]">
      {/* Hero */}
      <section className="bg-zinc-950 text-white py-24 lg:py-32 border-b border-zinc-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img src="/fishwhistle/warranty-hero.jpg" alt="Finished Fish Whistle hull" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl relative z-10"
          >
            <div className="text-[10px] font-bold text-zinc-500 mb-6 uppercase tracking-[0.2em]">Guarantee</div>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-8">Lifetime Warranty</h1>
            <p className="text-xs text-zinc-400 leading-relaxed max-w-md">
              We build our boats for long-term durability and stand behind that commitment with lifetime hull weld coverage.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Warranty Overview */}
      <section className="bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-medium tracking-tight mb-8">Structural Hull Coverage</h2>
            <p className="text-xs text-zinc-500 leading-relaxed mb-16">
              Per published warranty language, the lifetime hull warranty is offered by 5th Element Innovation & Manufacturing Ltd. for Fish Whistle boats and covers weld-related structural defects under normal, non-commercial use.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
              <div className="bg-[#F7F7F8] p-12 border border-[#E5E5E5]">
                <CheckCircle2 className="w-8 h-8 mb-6 text-[#1A1A1A]" />
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-6">What's Covered</h4>
                <ul className="text-xs text-zinc-500 space-y-4">
                  <li className="flex items-center"><span className="w-1 h-1 bg-zinc-300 rounded-full mr-3"></span>Main hull welds and structural integrity</li>
                  <li className="flex items-center"><span className="w-1 h-1 bg-zinc-300 rounded-full mr-3"></span>Transom and stringer systems</li>
                  <li className="flex items-center"><span className="w-1 h-1 bg-zinc-300 rounded-full mr-3"></span>Integrated fuel tank structures</li>
                  <li className="flex items-center"><span className="w-1 h-1 bg-zinc-300 rounded-full mr-3"></span>Gunwales and lifting strakes</li>
                </ul>
              </div>
              <div className="bg-[#F7F7F8] p-12 border border-[#E5E5E5]">
                <AlertCircle className="w-8 h-8 mb-6 text-zinc-400" />
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-6">Transferability</h4>
                <p className="text-xs text-zinc-500 leading-relaxed">
                  Coverage is transferable and extends up to ten years from the initial date of sale.
                </p>
              </div>
            </div>

            <h3 className="text-2xl font-medium tracking-tight mb-6">Scope & Support</h3>
            <p className="text-xs text-zinc-500 leading-relaxed mb-16">
              Warranty repairs are authorized by 5th Element Innovation & Manufacturing Ltd. and are performed at the factory or an authorized Fish Whistle dealer.
            </p>
            
            <h3 className="text-2xl font-medium tracking-tight mb-6">Exclusions</h3>
            <p className="text-xs text-zinc-500 leading-relaxed mb-24">
              Exclusions include damage from trailering, misuse, accidents, and oversized motors. As with most marine warranties, third-party components such as engines are covered by their respective manufacturers.
            </p>

            <div className="bg-zinc-950 text-white p-12 lg:p-16 border border-zinc-900">
              <div className="flex items-center mb-8">
                <ShieldCheck className="w-8 h-8 mr-6 text-white" />
                <h4 className="text-2xl font-medium tracking-tight">Confidence in Every Weld</h4>
              </div>
              <p className="text-xs text-zinc-400 leading-relaxed mb-0 max-w-2xl">
                Our lifetime warranty is a testament to the skill of our certified welders and the precision of our engineering. When you buy a Fish Whistle, you're buying a boat for life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactStrip />
    </div>
  );
}
