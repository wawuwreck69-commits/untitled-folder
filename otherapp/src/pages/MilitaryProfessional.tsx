import { motion } from 'motion/react';
import { Shield, Anchor, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContactStrip } from '../components/Blocks';

export default function MilitaryProfessional() {
  return (
    <div className="flex flex-col bg-[#F7F7F8]">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center overflow-hidden bg-zinc-950">
        <div className="absolute inset-0 z-0 opacity-40">
          <img 
            src="/fishwhistle/military-hero.jpg"
            alt="Professional patrol boat" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 w-full text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-8 leading-[0.9]">
              MILITARY & <br />
              PROFESSIONAL.
            </h1>
            <p className="text-xs text-zinc-300 max-w-md leading-relaxed">
              When failure is not an option. Our institutional-grade vessels are built for rescue, patrol, and commercial work in the most demanding environments.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Statement */}
      <section className="bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32 text-center">
          <div className="text-[10px] font-bold text-zinc-400 mb-6 uppercase tracking-[0.2em]">Front Lines</div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 max-w-3xl mx-auto">Built for the Front Lines</h2>
          <p className="text-xs text-zinc-500 leading-relaxed mb-16 max-w-2xl mx-auto">
            Fish Whistle Boats provides government agencies, first responders, and commercial operators with vessels that prioritize durability, capacity, and mission-specific customization. Our welded aluminum construction offers the strength needed for high-impact operations and the longevity required for institutional fleets.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-12 bg-[#F7F7F8] border border-[#E5E5E5]">
              <Shield className="w-8 h-8 mx-auto mb-6 text-[#1A1A1A]" />
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-4">Durability</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">Heavy-gauge hulls designed for high-impact landings and debris-filled waters.</p>
            </div>
            <div className="p-12 bg-[#F7F7F8] border border-[#E5E5E5]">
              <Anchor className="w-8 h-8 mx-auto mb-6 text-[#1A1A1A]" />
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-4">Capacity</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">Optimized deck layouts for maximum payload and personnel transport.</p>
            </div>
            <div className="p-12 bg-[#F7F7F8] border border-[#E5E5E5]">
              <Zap className="w-8 h-8 mx-auto mb-6 text-[#1A1A1A]" />
              <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-4">Customization</h4>
              <p className="text-xs text-zinc-500 leading-relaxed">Mission-specific outfitting for rescue, patrol, or commercial diving.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Warranty Section */}
      <section className="bg-zinc-950 text-white border-b border-zinc-900">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 aspect-square lg:aspect-auto bg-zinc-900 overflow-hidden">
              <img src="/fishwhistle/military-support.jpg" alt="Boat construction" className="w-full h-full object-cover opacity-60 mix-blend-luminosity" />
            </div>
            <div className="w-full lg:w-1/2 p-10 lg:p-24 flex flex-col justify-center">
              <div className="text-[10px] font-bold text-zinc-500 mb-8 uppercase tracking-[0.2em]">Support</div>
              <h2 className="text-4xl font-medium tracking-tight mb-8">Institutional Support & Warranty</h2>
              <p className="text-xs text-zinc-400 leading-relaxed mb-12 max-w-md">
                We stand behind our professional vessels with a comprehensive lifetime hull warranty and dedicated support for fleet operators. We understand that downtime is not an option for your mission.
              </p>
              <ul className="space-y-6 mb-12">
                <li className="flex items-center text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 mr-4 text-white" />
                  <span>Lifetime Structural Hull Warranty</span>
                </li>
                <li className="flex items-center text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 mr-4 text-white" />
                  <span>Priority Fleet Maintenance Support</span>
                </li>
                <li className="flex items-center text-xs text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 mr-4 text-white" />
                  <span>Transferable Institutional Coverage</span>
                </li>
              </ul>
              <Link 
                to="/lifetime-warranty"
                className="inline-flex items-center text-[10px] font-bold uppercase tracking-[0.2em] text-white hover:text-zinc-300 transition-colors w-fit group"
              >
                View Full Warranty Details <ArrowRight className="ml-2 w-3 h-3 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactStrip />
    </div>
  );
}
