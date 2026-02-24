import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import { models } from "./BrowseModels";

export default function ModelDetail() {
  const { id } = useParams();
  const model = models.find((m) => m.id === id);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    if (model?.gallery?.length) {
      setActiveImage(model.gallery[0]);
    } else {
      setActiveImage(null);
    }
    setIsLightboxOpen(false);
  }, [model?.id]);

  const currentImage = activeImage || model?.gallery?.[0] || null;
  const currentIndex = model && currentImage ? model.gallery.indexOf(currentImage) : -1;

  const showPrevImage = () => {
    if (!model || currentIndex < 0) return;
    const nextIndex = (currentIndex - 1 + model.gallery.length) % model.gallery.length;
    setActiveImage(model.gallery[nextIndex]);
  };

  const showNextImage = () => {
    if (!model || currentIndex < 0) return;
    const nextIndex = (currentIndex + 1) % model.gallery.length;
    setActiveImage(model.gallery[nextIndex]);
  };

  useEffect(() => {
    if (!isLightboxOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsLightboxOpen(false);
      if (event.key === "ArrowLeft") showPrevImage();
      if (event.key === "ArrowRight") showNextImage();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isLightboxOpen, currentIndex]);

  if (!model) {
    return (
      <div className="py-32 text-center bg-[#F7F7F8] min-h-screen">
        <h1 className="text-2xl font-medium mb-4">Model Not Found</h1>
        <Link to="/browse-models" className="text-zinc-500 hover:text-[#1A1A1A] underline">
          Back to Browse Models
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col bg-[#F7F7F8]">
      <div className="flex flex-col lg:flex-row min-h-screen max-w-[1440px] mx-auto w-full">
        <div className="w-full lg:w-[60%] border-r border-[#E5E5E5] bg-white">
          <div className="p-6 sm:p-10 lg:p-16">
            <div className="aspect-[16/9] mb-4 flex items-center justify-center bg-[#F7F7F8] border border-[#E5E5E5] relative overflow-hidden group">
              <div className="absolute top-4 left-4 flex gap-2 z-10">
                <span className="w-2 h-2 bg-[#1A1A1A] rounded-full animate-pulse"></span>
                <span className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-[0.2em] bg-white/50 backdrop-blur-sm px-2 py-0.5 border border-[#E5E5E5]">Gallery View</span>
              </div>
              <motion.img
                key={activeImage}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                src={activeImage || model.gallery[0]}
                alt={model.name}
                className="w-full h-full object-contain drop-shadow-2xl mix-blend-multiply group-hover:scale-105 transition-transform duration-700 cursor-zoom-in"
                onClick={() => setIsLightboxOpen(true)}
              />
              <div className="absolute inset-0 pointer-events-none border border-[#E5E5E5] m-4 z-10 transition-colors duration-500 group-hover:border-zinc-300"></div>
              <div className="absolute bottom-4 right-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] bg-white/50 backdrop-blur-sm px-2 py-0.5 border border-[#E5E5E5] z-10">
                Kelowna, BC // Fish Whistle
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {model.gallery.slice(0, 4).map((src, index) => (
                <button
                  type="button"
                  key={src}
                  onClick={() => {
                    setActiveImage(src);
                    setIsLightboxOpen(true);
                  }}
                  className={`aspect-[4/3] bg-[#F7F7F8] border overflow-hidden transition-all duration-300 relative group text-left ${
                    (activeImage || model.gallery[0]) === src
                      ? "border-[#1A1A1A] shadow-md scale-[1.02]"
                      : "border-[#E5E5E5] hover:border-zinc-400 hover:shadow-sm"
                  }`}
                  aria-label={`View image ${index + 1} of ${model.name}`}
                  aria-pressed={(activeImage || model.gallery[0]) === src}
                >
                  <img
                    src={src}
                    alt={`${model.name} view ${index + 1}`}
                    className={`w-full h-full object-cover transition-all duration-500 ${
                       (activeImage || model.gallery[0]) === src ? "opacity-100 scale-100" : "opacity-60 grayscale-[50%] group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110"
                    }`}
                  />
                  <div className={`absolute top-2 left-2 text-[9px] font-bold uppercase tracking-[0.2em] px-2 py-1 border transition-colors ${
                    (activeImage || model.gallery[0]) === src ? "bg-[#1A1A1A] text-white border-[#1A1A1A]" : "text-[#1A1A1A] bg-white/90 backdrop-blur-sm border-[#E5E5E5] group-hover:border-zinc-400"
                  }`}>
                    CAM_0{index + 1}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-[#E5E5E5]">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:flex-row p-6 sm:p-10 lg:p-16 border-b border-[#E5E5E5]"
            >
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A] flex items-center">
                  <span className="w-4 h-[1px] bg-[#1A1A1A] mr-3 inline-block"></span>
                  Model Overview
                </h3>
              </div>
              <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <p className="text-[15px] text-zinc-600 leading-[1.8] font-light">{model.description}</p>
                <p className="text-[15px] text-zinc-600 leading-[1.8] font-light">{model.detailSummary}</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:flex-row p-6 sm:p-10 lg:p-16 border-b border-[#E5E5E5]"
            >
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A] flex items-center">
                  <span className="w-4 h-[1px] bg-[#1A1A1A] mr-3 inline-block"></span>
                  Technical Specs
                </h3>
              </div>
              <div className="w-full md:w-2/3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0 text-sm">
                  <div className="flex justify-between items-center py-5 border-b border-[#E5E5E5] group hover:bg-[#F7F7F8] px-2 -mx-2 transition-colors rounded-sm">
                    <span className="text-zinc-500 font-medium">Category</span>
                    <span className="font-semibold text-[#1A1A1A] group-hover:translate-x-1 transition-transform">{model.category}</span>
                  </div>
                  <div className="flex justify-between items-center py-5 border-b border-[#E5E5E5] group hover:bg-[#F7F7F8] px-2 -mx-2 transition-colors rounded-sm">
                    <span className="text-zinc-500 font-medium">Engine</span>
                    <span className="font-semibold text-[#1A1A1A] group-hover:translate-x-1 transition-transform text-right max-w-[60%]">{model.specs.engine}</span>
                  </div>
                  <div className="flex justify-between items-center py-5 border-b border-[#E5E5E5] group hover:bg-[#F7F7F8] px-2 -mx-2 transition-colors rounded-sm">
                    <span className="text-zinc-500 font-medium">Manufacturer</span>
                    <span className="font-semibold text-[#1A1A1A] group-hover:translate-x-1 transition-transform">Fish Whistle</span>
                  </div>
                  <div className="flex justify-between items-center py-5 border-b border-[#E5E5E5] group hover:bg-[#F7F7F8] px-2 -mx-2 transition-colors rounded-sm">
                    <span className="text-zinc-500 font-medium">Hull Material</span>
                    <span className="font-semibold text-[#1A1A1A] group-hover:translate-x-1 transition-transform text-right max-w-[60%]">{model.specs.hull}</span>
                  </div>
                  <div className="flex justify-between items-center py-5 border-b border-[#E5E5E5] group hover:bg-[#F7F7F8] px-2 -mx-2 transition-colors rounded-sm">
                    <span className="text-zinc-500 font-medium">Model</span>
                    <span className="font-semibold text-[#1A1A1A] group-hover:translate-x-1 transition-transform">{model.name}</span>
                  </div>
                  <div className="flex justify-between items-center py-5 border-b border-[#E5E5E5] group hover:bg-[#F7F7F8] px-2 -mx-2 transition-colors rounded-sm">
                    <span className="text-zinc-500 font-medium">Capacity</span>
                    <span className="font-semibold text-[#1A1A1A] group-hover:translate-x-1 transition-transform text-right max-w-[60%]">{model.specs.capacity}</span>
                  </div>
                  <div className="flex justify-between items-center py-5 border-b border-[#E5E5E5] md:border-b-0 group hover:bg-[#F7F7F8] px-2 -mx-2 transition-colors rounded-sm">
                    <span className="text-zinc-500 font-medium">LOA</span>
                    <span className="font-semibold text-[#1A1A1A] group-hover:translate-x-1 transition-transform">{model.specs.loa}</span>
                  </div>
                  <div className="flex justify-between items-center py-5 border-b border-[#E5E5E5] md:border-b-0 group hover:bg-[#F7F7F8] px-2 -mx-2 transition-colors rounded-sm">
                    <span className="text-zinc-500 font-medium">Dry Weight</span>
                    <span className="font-semibold text-[#1A1A1A] group-hover:translate-x-1 transition-transform">{model.specs.dryWeight}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col md:flex-row p-6 sm:p-10 lg:p-16"
            >
              <div className="w-full md:w-1/3 mb-6 md:mb-0">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1A1A1A] flex items-center">
                  <span className="w-4 h-[1px] bg-[#1A1A1A] mr-3 inline-block"></span>
                  Notes
                </h3>
              </div>
              <div className="w-full md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="p-2 sm:p-0">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-4">Build Philosophy</h4>
                  <p className="text-[15px] text-zinc-600 leading-[1.8] font-light">
                    Welded aluminum construction keeps maintenance low while preserving long-term structural reliability.
                  </p>
                </div>
                <div className="p-2 sm:p-0">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-4">Performance Profile</h4>
                  <p className="text-[15px] text-zinc-600 leading-[1.8] font-light">
                    Estimated top-end and handling characteristics vary by rigging, payload, and engine selection.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-[40%] relative bg-[#F7F7F8]">
          <div className="sticky top-24 p-6 sm:p-10 lg:p-16 lg:pl-20">
            <motion.div 
              initial="hidden" 
              animate="visible" 
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
              }}
            >
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }} className="flex items-center gap-3 mb-8">
                <span className="px-3 py-1.5 border border-[#1A1A1A] text-[#1A1A1A] text-[10px] font-bold uppercase tracking-[0.2em] bg-white rounded-sm shadow-sm">
                  CLASS: {model.category}
                </span>
                <span className="text-[11px] font-bold text-[#1A1A1A] uppercase tracking-[0.2em] flex items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2 animate-pulse"></span>
                  ACTIVE
                </span>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }}>
                <h1 className="text-5xl md:text-6xl font-medium tracking-tight mb-2 text-[#1A1A1A]">{model.name}</h1>
                <h2 className="text-xs font-bold text-zinc-500 mb-10 uppercase tracking-[0.2em]">Fish Whistle Lineup</h2>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }} className="relative pl-6 mb-16">
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-[#1A1A1A] to-transparent"></div>
                <p className="text-[15px] text-zinc-600 leading-relaxed max-w-sm font-light">
                  {model.detailSummary}
                </p>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }} className="flex justify-between items-center mb-16 border-y border-[#E5E5E5] py-8">
                <div className="text-center group cursor-default">
                  <div className="text-2xl lg:text-3xl font-light text-[#1A1A1A] mb-1 group-hover:scale-110 transition-transform origin-bottom">{model.specs.maxSpeed}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Max V</div>
                </div>
                <div className="w-[1px] h-10 bg-[#E5E5E5]"></div>
                <div className="text-center group cursor-default">
                  <div className="text-2xl lg:text-3xl font-light text-[#1A1A1A] mb-1 group-hover:scale-110 transition-transform origin-bottom">{model.specs.loa}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">LOA</div>
                </div>
                <div className="w-[1px] h-10 bg-[#E5E5E5]"></div>
                <div className="text-center group cursor-default">
                  <div className="text-2xl lg:text-3xl font-light text-[#1A1A1A] mb-1 group-hover:scale-110 transition-transform origin-bottom">{model.specs.dryWeight}</div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400">Dry Wt</div>
                </div>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }} className="mb-16">
                <div className="text-[11px] font-bold text-zinc-500 uppercase tracking-[0.2em] mb-2">Base Configuration</div>
                <div className="text-5xl lg:text-6xl font-light tracking-tight text-[#1A1A1A] mb-2">{model.price}</div>
              </motion.div>

              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } } }} className="flex flex-col sm:flex-row gap-4">
                <Link to="/find-a-dealer" className="bg-[#1A1A1A] text-white px-8 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all flex items-center justify-center rounded-sm flex-1 group overflow-hidden relative">
                  <span className="relative z-10 flex items-center">Request Build Slot <ArrowRight className="ml-3 w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                </Link>
                <button className="bg-transparent text-[#1A1A1A] border border-[#1A1A1A] px-8 py-5 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#1A1A1A] hover:text-white transition-all flex items-center justify-center rounded-sm group">
                  Specs <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {isLightboxOpen && currentImage && model && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 sm:p-8">
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/90 hover:text-white transition-colors"
            aria-label="Close full-size image"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            type="button"
            onClick={showPrevImage}
            className="absolute left-2 sm:left-6 text-white/80 hover:text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <img
            src={currentImage}
            alt={`${model.name} full size`}
            className="max-w-full max-h-[90vh] w-auto h-auto object-contain"
          />

          <button
            type="button"
            onClick={showNextImage}
            className="absolute right-2 sm:right-6 text-white/80 hover:text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </div>
  );
}
