import { motion } from 'motion/react';
import { Phone, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactUs() {
  return (
    <div className="flex flex-col bg-[#F7F7F8]">
      {/* Hero */}
      <section className="min-h-[40vh] flex flex-col justify-center border-b border-[#E5E5E5] bg-white p-6 sm:p-10 lg:p-16">
        <div className="max-w-[1440px] mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-6xl md:text-8xl font-medium tracking-tight text-[#1A1A1A] mb-8">Contact Us</h1>
            <p className="text-xs text-zinc-500 max-w-md leading-relaxed">
              Have questions about our models, customization, or finding a dealer? Our team is here to help you get on the water.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Dealer CTA */}
      <section className="bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col lg:flex-row">
            {/* Direct Contact */}
            <div className="w-full lg:w-1/2 p-10 lg:p-24 border-r border-[#E5E5E5]">
              <div className="text-[10px] font-bold text-zinc-400 mb-12 uppercase tracking-[0.2em]">Get in Touch</div>
              <div className="space-y-12">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 mr-6">
                    <Phone className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Phone</h4>
                    <p className="text-lg font-medium text-[#1A1A1A]">250-491-0299</p>
                    <p className="text-xs text-zinc-500 mt-1">Toll-Free: 1-877-335-0486</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 mr-6">
                    <MapPin className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Address</h4>
                    <p className="text-lg font-medium text-[#1A1A1A]">120 Carion Road</p>
                    <p className="text-xs text-zinc-500 mt-1">Kelowna, BC V4V 2K5</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full border border-[#E5E5E5] flex items-center justify-center flex-shrink-0 mr-6">
                    <Clock className="w-4 h-4 text-zinc-400" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Hours</h4>
                    <p className="text-lg font-medium text-[#1A1A1A]">Mon - Fri: 8:00am - 4:30pm</p>
                    <p className="text-xs text-zinc-500 mt-1">Pacific Standard Time</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dealer Inquiries */}
            <div className="w-full lg:w-1/2 bg-[#F7F7F8] p-10 lg:p-24 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-15">
                <img src="/fishwhistle/contact-side.jpg" alt="Fish Whistle cockpit detail" className="w-full h-full object-cover" />
              </div>
              <div className="relative z-10">
              <div className="text-[10px] font-bold text-zinc-400 mb-12 uppercase tracking-[0.2em]">Dealer Inquiries</div>
              <h2 className="text-4xl font-medium mb-6">Partner with Us</h2>
              <p className="text-xs text-zinc-500 leading-relaxed mb-12 max-w-md">
                Are you looking to find a local dealer or interested in becoming an authorized Fish Whistle representative?
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/find-a-dealer"
                  className="pill-nav inline-flex justify-center"
                >
                  Find a Dealer <ArrowRight className="ml-2 w-3 h-3" />
                </Link>
                <Link 
                  to="/find-a-dealer"
                  className="bg-white text-black border border-[#E5E5E5] px-6 py-3 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-zinc-50 transition-colors flex items-center justify-center"
                >
                  Become a Dealer <ArrowRight className="ml-2 w-3 h-3" />
                </Link>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Contact Form */}
      <section className="py-24 bg-white border-b border-[#E5E5E5]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="text-[10px] font-bold text-zinc-400 mb-4 uppercase tracking-[0.2em]">Message</div>
            <h2 className="text-4xl font-medium mb-4">Send a Message</h2>
            <p className="text-xs text-zinc-500">For general inquiries, please use the form below.</p>
          </div>
          <form className="bg-[#F7F7F8] p-10 border border-[#E5E5E5]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Name</label>
                <input type="text" className="w-full bg-white border border-[#E5E5E5] px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors" required />
              </div>
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Email</label>
                <input type="email" className="w-full bg-white border border-[#E5E5E5] px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors" required />
              </div>
            </div>
            <div className="mb-8">
              <label className="block text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 mb-2">Message</label>
              <textarea rows={5} className="w-full bg-white border border-[#E5E5E5] px-4 py-3 text-sm focus:outline-none focus:border-[#1A1A1A] transition-colors" required></textarea>
            </div>
            <button type="submit" className="pill-nav w-full justify-center">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
