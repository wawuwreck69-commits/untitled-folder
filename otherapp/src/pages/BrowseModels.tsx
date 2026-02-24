import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Info, Zap, Anchor } from "lucide-react";
import { CertificationsBlock, ContactStrip } from "../components/Blocks";
import { fishWhistleModels } from "../lib/fishWhistleModels";

export const models = fishWhistleModels;

export default function BrowseModels() {
  return (
    <div className="flex flex-col bg-[#F7F7F8]">
      <section className="min-h-[60vh] flex flex-col lg:flex-row border-b border-[#E5E5E5] bg-white">
        <div className="w-full lg:w-1/2 p-6 sm:p-10 lg:p-16 flex flex-col justify-center border-r border-[#E5E5E5]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-medium tracking-tight text-[#1A1A1A] mb-8"
          >
            Browse Models
          </motion.h1>
          <p className="text-xs text-zinc-500 max-w-md leading-relaxed">
            Explore Fish Whistle's welded aluminum lineup, from compact tenders to offshore-ready Storm Series builds.
          </p>
        </div>
        <div className="w-full lg:w-1/2 relative bg-[#F7F7F8] flex items-center justify-center p-10 lg:p-20 overflow-hidden">
          <motion.img
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="/fishwhistle/browse-hero-fw232-interior.jpg"
            alt="Fish Whistle Storm Series cabin"
            className="w-full h-auto max-w-2xl object-contain drop-shadow-2xl mix-blend-multiply"
          />
        </div>
      </section>

      <section className="bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-[#E5E5E5]">
            {models.map((model) => (
              <div
                key={model.id}
                className="group flex flex-col border-r border-b border-[#E5E5E5] bg-white hover:bg-[#F7F7F8] transition-colors"
              >
                <Link
                  to={`/browse-models/p/${model.id}`}
                  className="block aspect-[4/3] overflow-hidden bg-[#F7F7F8] border-b border-[#E5E5E5] p-8 flex items-center justify-center"
                >
                  <img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-105 drop-shadow-xl mix-blend-multiply"
                  />
                </Link>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4 gap-6">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2 block">
                        {model.category}
                      </span>
                      <h3 className="text-2xl font-medium text-[#1A1A1A]">{model.name}</h3>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-zinc-400">{model.price}</span>
                    </div>
                  </div>
                  <p className="text-zinc-500 text-xs mb-8 flex-grow leading-relaxed">{model.description}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-[#E5E5E5]">
                    <Link
                      to={`/browse-models/p/${model.id}`}
                      className="text-[10px] font-bold uppercase tracking-[0.2em] flex items-center text-zinc-400 hover:text-[#1A1A1A] transition-colors"
                    >
                      View Details <ArrowRight className="ml-2 w-3 h-3" />
                    </Link>
                    <button className="pill-nav">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white border-b border-[#E5E5E5]">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-1/2 p-10 lg:p-24 flex flex-col justify-center border-r border-[#E5E5E5]">
            <div className="text-[10px] font-bold text-zinc-400 mb-12 uppercase tracking-[0.2em]">Experience</div>
            <h2 className="text-4xl font-medium mb-12">The Fish Whistle Difference</h2>
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center flex-shrink-0">
                  <Info className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-sm">Certified Craftsmanship</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Built by Transport Canada certified and ABYC compliant professionals.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center flex-shrink-0">
                  <Zap className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-sm">Rough-Water Performance</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Hulls are designed for stability, payload, and practical all-season usability.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center flex-shrink-0">
                  <Anchor className="w-4 h-4 text-zinc-400" />
                </div>
                <div>
                  <h4 className="font-medium mb-2 text-sm">Lifetime Confidence</h4>
                  <p className="text-xs text-zinc-500 leading-relaxed">
                    Welded aluminum durability backed by lifetime structural coverage.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <Link to="/find-a-dealer" className="pill-nav inline-flex">
                Find a Dealer
              </Link>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-[#F7F7F8] flex items-center justify-center p-10 lg:p-20">
            <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
              <img
                src="/fishwhistle/model-fw232-main.jpg"
                alt="Fish Whistle FW232 bow access"
                className="w-full h-auto object-cover drop-shadow-xl"
              />
              <img
                src="/fishwhistle/model-fw127-main.jpg"
                alt="Fish Whistle FW127 fishing setup"
                className="w-full h-auto object-cover drop-shadow-xl mt-12"
              />
            </div>
          </div>
        </div>
      </section>

      <CertificationsBlock />
      <ContactStrip />
    </div>
  );
}
