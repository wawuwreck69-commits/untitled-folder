import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, PenTool, Wrench, Layers } from 'lucide-react';
import { ContactStrip } from '../components/Blocks';

export default function CustomBoats() {
  const designerKits = [
    { name: "Specmar Designs", url: "https://specmar.com" },
    { name: "B&B Yacht Designs", url: "https://bandbyachtdesigns.com" },
    { name: "Glen-L Marine", url: "https://glen-l.com" },
    { name: "Devlin Designing Boat Builders", url: "https://devlinboat.com" }
  ];

  return (
    <div className="flex flex-col bg-[#F7F7F8]">
      {/* Hero */}
      <section className="min-h-[40vh] flex flex-col justify-center border-b border-[#E5E5E5] bg-white p-6 sm:p-10 lg:p-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="/fishwhistle/custom-hero.jpg" alt="Fish Whistle custom hull" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-[1440px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl relative z-10"
          >
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight text-[#1A1A1A] mb-8">Custom Boats</h1>
            <p className="text-xs text-zinc-500 max-w-md leading-relaxed">
              From tailored modifications of our existing models to fully custom, ground-up builds. If you can dream it, we can build it in welded aluminum.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tailored vs Fully Custom */}
      <section className="bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 p-10 lg:p-24 border-r border-[#E5E5E5]">
              <div className="w-16 h-16 rounded-full border border-[#E5E5E5] flex items-center justify-center mb-8 bg-[#F7F7F8]">
                <PenTool className="w-6 h-6 text-zinc-400" />
              </div>
              <h3 className="text-4xl font-medium mb-6">Tailored Models</h3>
              <p className="text-xs text-zinc-500 mb-12 leading-relaxed max-w-md">
                Start with one of our proven recreational or professional hulls and customize the layout, features, and finishes to meet your specific needs.
              </p>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Custom Console Layouts</li>
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Specialized Storage</li>
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Custom Paint & Wraps</li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 p-10 lg:p-24 bg-[#F7F7F8]">
              <div className="w-16 h-16 rounded-full border border-[#E5E5E5] flex items-center justify-center mb-8 bg-white">
                <Layers className="w-6 h-6 text-zinc-400" />
              </div>
              <h3 className="text-4xl font-medium mb-6">Fully Custom</h3>
              <p className="text-xs text-zinc-500 mb-12 leading-relaxed max-w-md">
                Work with our design team or bring your own plans for a completely unique vessel. We specialize in complex, one-off aluminum fabrication.
              </p>
              <ul className="space-y-4 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Ground-up Design</li>
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Specialized Commercial Hulls</li>
                <li className="flex items-center"><ArrowRight className="w-3 h-3 mr-3 text-[#1A1A1A]" /> Institutional Prototypes</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#E5E5E5] bg-[#F7F7F8] p-10 lg:p-16">
            <img src="/fishwhistle/custom-welding.jpg" alt="Fish Whistle welding process" className="w-full max-h-[460px] object-cover border border-[#E5E5E5]" />
          </div>
        </div>
      </section>

      {/* Designer Kits */}
      <section className="py-24 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-[10px] font-bold text-zinc-400 mb-4 uppercase tracking-[0.2em]">Partners</div>
            <h2 className="text-4xl font-medium mb-6">Designer Kits</h2>
            <p className="text-xs text-zinc-500 leading-relaxed mb-16">
              We can fabricate, cut, and form aluminum kits from world-renowned marine architects. If you've purchased plans from one of these designers, we are your preferred build partner.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
              {designerKits.map((kit) => (
                <a 
                  key={kit.name} 
                  href={kit.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#F7F7F8] p-6 border border-[#E5E5E5] text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-[#1A1A1A] hover:bg-zinc-50 transition-colors flex justify-between items-center"
                >
                  {kit.name}
                  <ArrowRight className="w-3 h-3" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ContactStrip />
    </div>
  );
}
