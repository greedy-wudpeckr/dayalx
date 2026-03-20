"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { ArrowRight, CheckCircle2, PackageSearch, RefreshCcw, Box, Truck } from "lucide-react";
import { useState, useEffect } from "react";

const TESTIMONIALS = [
  {
    quote: "We used to spend three weeks every semester just coordinating lab supply orders. DAYALX cut that to a single afternoon.",
    author: "Dr. A. Sharma, HOD",
    designation: "Department of Pharmacy, Excellence College"
  },
  {
    quote: "Standardizing practicals across 12 batches was a nightmare. Now, every student gets the exact same high-quality kit.",
    author: "Prof. R. Mehta, Dean",
    designation: "Faculty of Science, National University"
  },
  {
    quote: "The INC-aligned nursing kits saved our staff countless hours. No more scrambling for missing items mid-semester.",
    author: "Dr. S. Nair, Principal",
    designation: "City College of Nursing"
  },
  {
    quote: "From 40 different vendors to exactly one. The transparency and ease of tracking our lab inventory is finally 21st century.",
    author: "M. Desai, Procurement Head",
    designation: "Global Medical Institute"
  }
];

const STAGGER_CHILDREN = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number] } },
};

export default function Home() {
  const [pricingAnnual, setPricingAnnual] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5" style={{
        backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      <div className="absolute top-0 left-0 -translate-x-[10%] -translate-y-[10%] w-[547px] h-[938px] bg-primary/10 blur-[130px] -rotate-[33deg] rounded-full z-0 pointer-events-none" />

      {/* HERO SECTION */}
      <section className="relative z-10 min-h-[90vh] flex flex-col items-center justify-center pt-10 pb-20 px-4 md:px-6 text-center">
        <motion.div initial="hidden" animate="show" variants={{ show: { transition: { staggerChildren: 0.1 } } }} className="max-w-[800px] flex flex-col items-center gap-6">
          <motion.div variants={STAGGER_CHILDREN} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium text-foreground">
            <span className="text-primary">✦</span> Simplifying Lab Procurement for India's Colleges
          </motion.div>
          
          <motion.h1 variants={STAGGER_CHILDREN} className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gradient leading-[1.1]">
            One Kit. Every Practical. All Semester.
          </motion.h1>
          
          <motion.p variants={STAGGER_CHILDREN} className="text-lg md:text-xl text-muted-foreground max-w-[650px] leading-relaxed">
            DAYALX delivers syllabus-aligned laboratory kits to colleges — so procurement teams stop chasing 50 vendors and start focusing on what matters.
          </motion.p>
          
          <motion.div variants={STAGGER_CHILDREN} className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary-dark hover:brightness-110 rounded-full text-base h-14 px-8 font-semibold transition-all shadow-[0_4px_14px_0_rgba(120,252,214,0.39)]">
                Request a Kit Demo
              </Button>
            </Link>
            <Link href="/how-it-works" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-base h-14 px-8 font-semibold border-white/20 hover:bg-white/5 transition-all">
                See How It Works
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        {/* Hero Illustration Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          className="mt-20 w-full max-w-5xl glass-card border border-white/10 overflow-hidden relative aspect-video flex-shrink-0"
        >
          <div className="absolute inset-x-0 top-0 h-12 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <div className="absolute top-12 left-0 right-0 bottom-0 bg-[#0a0c0b] overflow-hidden">
            <img 
              src="/Gemini_Generated_Image_dzrrmsdzrrmsdzrr.png" 
              alt="Lab Kit Dashboard Illustration" 
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section className="py-12 border-y border-white/5 bg-black/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
            Already in conversation with institutions across India
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="text-xl font-bold tracking-tighter mix-blend-screen text-white">COLLEGE {i}</div>
            ))}
          </div>
        </div>
      </section>

      {/* PROBLEM VS SOLUTION SECTION */}
      <section className="py-24 relative z-10 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-10">
            {/* The Problem */}
            <div className="glass-card p-8 md:p-10 border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-red-500/5 mix-blend-overlay pointer-events-none" />
              <h2 className="text-2xl md:text-3xl font-semibold mb-8">The Way Colleges Buy Lab Supplies is Broken</h2>
              <ul className="space-y-6">
                {[
                  "40–50 separate vendor orders every semester",
                  "Delays causing cancelled practicals",
                  "No standardization across batches",
                  "Heavy admin burden on lab staff"
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 min-w-6 text-red-400">✕</div>
                    <span className="text-muted-foreground text-lg">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Solution */}
            <div className="glass-card p-8 md:p-10 border-primary/20 relative overflow-hidden shadow-[0_0_40px_-15px_rgba(120,252,214,0.15)] group">
              <div className="glass-gradient-overlay absolute top-0 inset-x-0 h-[30%] pointer-events-none" />
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-white">We Turned Fragmented Procurement into One Smart Kit</h2>
              <ul className="space-y-6 relative z-10">
                {[
                  "One order per subject per semester",
                  "Syllabus-aligned, batch-ready kits",
                  "On-time delivery, guaranteed",
                  "Less admin. More teaching."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle2 className="mt-1 min-w-6 text-primary" />
                    <span className="text-foreground text-lg">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES (BENTO GRID) */}
      <section className="py-24 relative z-10 px-4 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">Built for How Labs Actually Work</h2>
            <p className="text-lg text-muted-foreground text-balance">Every kit is designed around your syllabus, your batch size, and your semester schedule.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-6 md:col-span-2 group hover:-translate-y-1 transition-all duration-300">
              <div className="glass-gradient-overlay absolute top-0 inset-x-0 h-[30%] rounded-t-2xl pointer-events-none" />
              <div className="h-64 bg-black/40 rounded-xl mb-6 flex items-center justify-center border border-white/5 overflow-hidden">
                <img src="/Screenshot%202026-03-20%20162622.png" alt="Syllabus-Aligned Kits" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Syllabus-Aligned Kits</h3>
              <p className="text-muted-foreground">Pre-mapped to university curriculum for pharmacy, nursing, medical & science labs.</p>
            </div>
            
            <div className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300">
              <div className="glass-gradient-overlay absolute top-0 inset-x-0 h-[30%] rounded-t-2xl pointer-events-none" />
              <div className="h-40 bg-black/40 rounded-xl mb-6 flex items-center justify-center border border-white/5 overflow-hidden">
                <img src="/Screenshot%202026-03-20%20162831.png" alt="Batch-Ready Quantities" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Batch-Ready Quantities</h3>
              <p className="text-muted-foreground">Calibrated consumable quantities for your exact student batch size.</p>
            </div>

            <div className="glass-card p-6 group hover:-translate-y-1 transition-all duration-300">
              <div className="glass-gradient-overlay absolute top-0 inset-x-0 h-[30%] rounded-t-2xl pointer-events-none" />
              <div className="h-40 bg-black/40 rounded-xl mb-6 flex items-center justify-center border border-white/5 overflow-hidden">
                <img src="/Screenshot%202026-03-20%20162920.png" alt="Multi-Subject Coverage" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Subject Coverage</h3>
              <p className="text-muted-foreground">Chemistry, Biology, Pharmacology, Microbiology & more.</p>
            </div>
            
            <div className="glass-card p-6 md:col-span-2 group hover:-translate-y-1 transition-all duration-300">
              <div className="glass-gradient-overlay absolute top-0 inset-x-0 h-[30%] rounded-t-2xl pointer-events-none" />
              <div className="h-64 bg-black/40 rounded-xl mb-6 flex items-center justify-center border border-white/5 overflow-hidden">
                <img src="/Screenshot%202026-03-20%20164056.png" alt="Single Vendor, One PO" className="w-full h-full object-cover" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Single Vendor, One PO</h3>
              <p className="text-muted-foreground">Replace 40+ vendor relationships with one purchase order and track everything on our Dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* LARGE TESTIMONIAL */}
      <section className="py-24 px-4 w-full">
        <div className="container mx-auto">
          <div className="w-full bg-primary rounded-3xl min-h-[400px] flex items-center justify-center p-8 md:p-16 relative overflow-hidden group">
            {/* SVG Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 mix-blend-overlay" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, black 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            <div className="relative z-10 max-w-4xl text-center w-full px-4">
              <svg className="w-12 h-12 text-[#0f1211]/20 mx-auto mb-8" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              
              <div className="relative min-h-[220px] sm:min-h-[160px] flex items-center justify-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.5 }}
                    className="w-full"
                  >
                    <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-[#0f1211] leading-tight mb-8">
                      "{TESTIMONIALS[activeTestimonial].quote}"
                    </h2>
                    <div className="text-[#0f1211]/80 font-medium text-lg">
                      {TESTIMONIALS[activeTestimonial].author} — {TESTIMONIALS[activeTestimonial].designation}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Carousel Indicators */}
              <div className="flex justify-center gap-3 mt-12">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      activeTestimonial === idx ? "bg-[#0f1211] w-10" : "bg-[#0f1211]/30 hover:bg-[#0f1211]/50 w-2.5"
                    }`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 relative z-10 px-4 border-t border-white/5">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">From Order to Practical — In 3 Steps</h2>
          </div>
          <div className="relative flex flex-col md:flex-row justify-between items-start gap-12 md:gap-4 lg:gap-8">
            {/* Animated Connector Line for Desktop */}
            <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent -z-10" />

            {/* Steps */}
            {[
              { id: 1, title: "Share Your Syllabus", desc: "Upload your subject list, curriculum version, and batch size.", icon: <Box /> },
              { id: 2, title: "We Build Your Kit", desc: "Receive a customized, pre-assembled, labelled kit designed for your labs.", icon: <PackageSearch /> },
              { id: 3, title: "Deliver to Your Lab", desc: "On-time, semester-ready, zero vendor follow-ups needed.", icon: <Truck /> },
            ].map((step) => (
              <div key={step.id} className="flex-1 flex flex-col items-center text-center group cursor-default">
                <div className="w-20 h-20 rounded-full glass-card flex items-center justify-center mb-6 text-primary group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(120,252,214,0.3)] transition-all duration-300">
                  <div className="scale-150">{step.icon}</div>
                </div>
                <div className="text-primary font-mono text-sm font-bold mb-2 tracking-widest">STEP 0{step.id}</div>
                <h3 className="text-xl md:text-2xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm lg:text-base">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section className="py-24 relative z-10 px-4 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">Institutional Plans Built for Every College</h2>
            
            {/* Toggle */}
            <div className="inline-flex glass-card p-1 items-center rounded-full mt-4">
              <button 
                className={`py-2 px-6 rounded-full text-sm font-medium transition-all duration-500 ${!pricingAnnual ? 'bg-primary text-[#0f1211]' : 'text-muted-foreground hover:text-white'}`}
                onClick={() => setPricingAnnual(false)}
              >
                Per Semester
              </button>
              <button 
                className={`py-2 px-6 rounded-full text-sm font-medium transition-all duration-500 ${pricingAnnual ? 'bg-primary text-[#0f1211]' : 'text-muted-foreground hover:text-white'}`}
                onClick={() => setPricingAnnual(true)}
              >
                Annual Contract
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-center mt-12">
            {/* Tier 1 */}
            <div className="glass-card p-8 hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-medium text-muted-foreground mb-4">Starter</h3>
              <div className="text-3xl font-bold mb-6">Contact for Quote</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span className="text-sm">Small colleges</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span className="text-sm">1–2 subjects</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span className="text-sm">Up to 30 students/batch</span></li>
              </ul>
              <Button variant="outline" className="w-full rounded-full border-white/20">Talk to Sales</Button>
            </div>

            {/* Tier 2 (Popular) */}
            <div className="glass-card p-8 bg-primary text-[#0f1211] shadow-[0_4px_24px_rgba(120,252,214,0.2)] md:-mt-8 md:mb-8 hover:-translate-y-2 transition-all duration-300 relative">
              <div className="absolute top-0 right-0 bg-primary-dark text-[#0f1211] text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl">POPULAR</div>
              <h3 className="text-xl font-bold mb-4">Institution</h3>
              <div className="text-4xl font-black mb-6">Custom Pricing</div>
              <ul className="space-y-4 mb-8 font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5" /><span className="text-sm">Medium to large colleges</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5" /><span className="text-sm">5–10 subjects</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5" /><span className="text-sm">60–120+ students/batch</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5" /><span className="text-sm">Dedicated Account Manager</span></li>
              </ul>
              <Button className="w-full rounded-full bg-[#0f1211] text-primary hover:bg-[#0f1211]/90">Request Full Quote</Button>
            </div>

            {/* Tier 3 */}
            <div className="glass-card p-8 hover:-translate-y-2 transition-all duration-300">
              <h3 className="text-xl font-medium text-muted-foreground mb-4">Enterprise</h3>
              <div className="text-3xl font-bold mb-6">Volume Pricing</div>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span className="text-sm">Multi-campus institutions</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span className="text-sm">Custom kit architecture</span></li>
                <li className="flex items-center gap-3"><CheckCircle2 className="w-5 h-5 text-primary" /><span className="text-sm">Priority logistics & inventory</span></li>
              </ul>
              <Button variant="outline" className="w-full rounded-full border-white/20">Talk to Sales</Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 px-4 container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">Frequently Asked Questions</h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {[
            { q: "What subjects are DAYALX kits available for?", a: "We cover Pharmacy, Nursing, Medical, Science, Chemistry, Microbiology, and Biotech labs." },
            { q: "How are kit quantities decided?", a: "Quantities are strictly calibrated based on your university's syllabus and your declared student batch size to ensure zero wastage." },
            { q: "Can we request a custom kit for our syllabus?", a: "Yes, our team can map any university syllabus and create a custom kit specification for your approval before assembly." },
            { q: "What is the minimum order size?", a: "Our starter plan begins for batches of up to 30 students, scaling up to enterprise sizes of 300+." },
            { q: "How far in advance should we order before the semester?", a: "Ideally 4-6 weeks before the semester starts, but we can fast-track urgent requirements subject to our logistics queue." }
          ].map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="glass-card px-6 border-white/10 data-[state=open]:border-primary/50 transition-colors">
              <AccordionTrigger className="text-left text-lg font-medium hover:no-underline hover:text-primary py-6">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* EARLY ACCESS CTA */}
      <section className="py-24 px-4 bg-[#0a0c0b] border-t border-white/5 relative overflow-hidden text-center">
        <div className="absolute bottom-0 center translate-y-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[130px] rounded-[100%] z-0 pointer-events-none" />
        <div className="container mx-auto max-w-3xl relative z-10 glass-card p-12 md:p-16 border-white/10 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Be Among the First Colleges to Transform Your Lab Procurement</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Join our early access program and get priority onboarding, custom kit design, and semester-one support.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/early-access" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary-dark rounded-full text-base h-14 px-10 font-bold transition-all">
                Request Early Access <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-base h-14 px-10 border-white/20 hover:bg-white/5 font-semibold">
                Talk to Our Team
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
