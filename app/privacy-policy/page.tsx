"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const smoothTransition = { duration: 1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
const fastTransition = { duration: 0.6, ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number] }

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: fastTransition 
  }
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="border-b border-border">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
          <motion.div variants={staggerContainer} initial="hidden" animate="visible" className="flex max-w-3xl flex-col gap-4">
            <motion.p variants={fadeUp} className="text-sm font-semibold uppercase tracking-wider text-primary font-mono">
              Legal
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Privacy Policy
            </motion.h1>
            <motion.p variants={fadeUp} className="text-sm text-muted-foreground">
              Last updated: February 2026
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto max-w-3xl px-6">
          <div className="prose-invert flex flex-col gap-8">
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-foreground">
                Introduction
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                5th Element Manufacturing Ltd. (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the
                website 5thelementmfg.com. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website or contact us for services.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-foreground">
                Information We Collect
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We may collect the following types of information:
              </p>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-foreground">Contact Information:</strong>{" "}
                    Name, email address, phone number, and company name provided
                    through our contact form or direct communication.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-foreground">Project Details:</strong>{" "}
                    Specifications, drawings, photos, and other project-related
                    information you provide when requesting a quote.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span>
                    <strong className="text-foreground">Usage Data:</strong>{" "}
                    Standard web analytics data including IP address, browser type,
                    pages visited, and time spent on our site.
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-foreground">
                How We Use Your Information
              </h2>
              <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  To respond to your inquiries and provide quotes
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  To fulfill and manage your orders and projects
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  To improve our website and services
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  To comply with legal obligations
                </li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-foreground">
                Information Sharing
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We do not sell, trade, or rent your personal information to third
                parties. We may share information with trusted service providers
                who assist us in operating our website and conducting our
                business, provided they agree to keep this information
                confidential.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-foreground">
                Data Security
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We implement reasonable security measures to protect your
                personal information. However, no method of transmission over
                the internet or electronic storage is 100% secure, and we
                cannot guarantee absolute security.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-foreground">
                Cookies
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Our website may use cookies and similar tracking technologies
                to enhance your browsing experience and analyze site traffic.
                You can control cookie settings through your browser
                preferences.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-foreground">
                Your Rights
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                You have the right to access, correct, or delete your personal
                information. To exercise these rights, please contact us using
                the information below.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <h2 className="text-xl font-semibold text-foreground">
                Changes to This Policy
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated revision date.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 rounded-lg border border-border bg-card p-6">
              <h2 className="text-xl font-semibold text-card-foreground">
                Contact Us
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                If you have any questions about this Privacy Policy, please
                contact us:
              </p>
              <div className="text-sm text-muted-foreground">
                <p>5th Element Manufacturing Ltd.</p>
                <p>1455 Dilworth Dr, Kelowna, BC V1V 1R4</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:info@5thelementmfg.com"
                    className="text-primary hover:underline"
                  >
                    info@5thelementmfg.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <a
                    href="tel:250-491-0299"
                    className="text-primary hover:underline"
                  >
                    250-491-0299
                  </a>
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-4">
              <Link
                href="/"
                className="text-sm text-primary hover:underline"
              >
                &larr; Back to Home
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
