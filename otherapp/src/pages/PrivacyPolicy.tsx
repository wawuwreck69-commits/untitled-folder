import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col bg-[#F7F7F8]">
      {/* Hero */}
      <section className="bg-zinc-950 text-white py-24 lg:py-32 border-b border-zinc-900">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
          <div className="text-[10px] font-bold text-zinc-500 mb-6 uppercase tracking-[0.2em]">Legal</div>
          <h1 className="text-6xl md:text-8xl font-medium tracking-tight mb-8">Privacy Policy</h1>
          <p className="text-xs text-zinc-400 leading-relaxed max-w-md">
            Your privacy is important to us. This policy outlines how we handle your personal information.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white border-b border-[#E5E5E5]">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16 py-24 lg:py-32">
          <div className="max-w-3xl mx-auto space-y-16">
            <div>
              <h2 className="text-2xl font-medium tracking-tight mb-6">1. Information We Collect</h2>
              <p className="text-xs text-zinc-500 leading-relaxed">
                We collect information you provide directly to us, such as when you request a quote, sign up for our newsletter, or contact us through our website. This may include your name, email address, phone number, and any other information you choose to provide.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium tracking-tight mb-6">2. How We Use Your Information</h2>
              <p className="text-xs text-zinc-500 leading-relaxed mb-6">
                We use the information we collect to:
              </p>
              <ul className="text-xs text-zinc-500 space-y-4">
                <li className="flex items-center"><span className="w-1 h-1 bg-zinc-300 rounded-full mr-4"></span>Provide, maintain, and improve our services</li>
                <li className="flex items-center"><span className="w-1 h-1 bg-zinc-300 rounded-full mr-4"></span>Respond to your comments, questions, and requests</li>
                <li className="flex items-center"><span className="w-1 h-1 bg-zinc-300 rounded-full mr-4"></span>Communicate with you about products, services, and events</li>
                <li className="flex items-center"><span className="w-1 h-1 bg-zinc-300 rounded-full mr-4"></span>Monitor and analyze trends, usage, and activities in connection with our services</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-medium tracking-tight mb-6">3. Sharing of Information</h2>
              <p className="text-xs text-zinc-500 leading-relaxed">
                We do not share your personal information with third parties except as described in this policy. We may share information with our authorized dealer network to facilitate your requests or as required by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium tracking-tight mb-6">4. Security</h2>
              <p className="text-xs text-zinc-500 leading-relaxed">
                We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-medium tracking-tight mb-6">5. Contact Us</h2>
              <p className="text-xs text-zinc-500 leading-relaxed mb-8">
                If you have any questions about this privacy policy, please contact us at:
              </p>
              <div className="p-10 bg-[#F7F7F8] border border-[#E5E5E5]">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A] mb-4">Fish Whistle Boats</p>
                <div className="space-y-2 text-xs text-zinc-500">
                  <p>Kelowna, BC, Canada</p>
                  <p>Email: privacy@fishwhistleboats.com</p>
                  <p>Phone: 250-491-0299</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
