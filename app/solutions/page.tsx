"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, FileText, PackageCheck, Truck, ShieldAlert, BadgeInfo } from "lucide-react";

export default function SolutionsPage() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="absolute top-0 right-0 translate-x-[10%] -translate-y-[10%] w-[547px] h-[938px] bg-primary/10 blur-[130px] rounded-full z-0 pointer-events-none" />
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5" style={{
        backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      {/* HERO SECTION */}
      <section className="relative z-10 pt-20 pb-20 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center text-left">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium">
              <span className="text-primary">✦</span> The Smarter Way to Run Your Lab
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gradient leading-[1.1]">
              Stop Managing 50 Vendors. Start Managing One Kit.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              DAYALX replaces your fragmented lab procurement with a single, syllabus-aligned kit system — built for pharmacy, nursing, medical, and science colleges across India.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-4 w-full sm:w-auto">
              <Link href="/subjects">
                <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary-dark rounded-full text-base h-14 px-8 font-semibold">
                  See Our Kit Catalogue
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full text-base h-14 px-8 border-white/20 hover:bg-white/5 font-semibold">
                  Talk to Our Team
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="w-full relative aspect-square glass-card overflow-hidden">
            {/* Split Illustration */}
            <div className="flex h-full w-full">
              <div className="w-1/2 h-full bg-red-950/20 border-r border-white/10 p-6 flex flex-col justify-center gap-4">
                <div className="text-xs text-red-400 font-mono tracking-widest text-center mb-4">BEFORE: CHAOS</div>
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-12 bg-white/5 rounded border border-white/5 flex items-center px-4">
                    <div className="w-4 h-4 rounded-full bg-red-500/50 mr-3" />
                    <div className="h-2 w-full bg-white/10 rounded" />
                  </div>
                ))}
              </div>
              <div className="w-1/2 h-full bg-primary/5 p-6 flex flex-col justify-center items-center gap-6">
                <div className="text-xs text-primary font-mono tracking-widest text-center mb-4">AFTER: DAYALX</div>
                <div className="w-32 h-32 rounded-xl border-2 border-primary/30 bg-primary/10 flex items-center justify-center relative inner-shadow">
                  <PackageCheck size={48} className="text-primary" />
                </div>
                <div className="h-2 w-24 bg-primary/30 rounded" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* BEFORE VS AFTER */}
      <section className="py-24 relative z-10 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold">Before DAYALX. After DAYALX.</h2>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
            <div className="glass-card flex-1 p-8 md:p-12 border-red-500/30">
              <h3 className="text-2xl font-bold mb-8 text-red-500/80">The Old Way</h3>
              <ul className="space-y-6">
                {[
                  "40–50 vendor contacts per semester",
                  "Multiple purchase orders, multiple follow-ups",
                  "Items arrive at different times, disrupting practicals",
                  "Lab technicians manually track stock",
                  "No standardization across batches or years",
                  "Budget overruns from last-minute emergency orders"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-muted-foreground/80">
                    <span className="text-red-500 mt-1">✕</span>
                    <span className="text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="glass-card flex-1 p-8 md:p-12 border-primary/30 shadow-[0_0_40px_-15px_rgba(120,252,214,0.15)] relative overflow-hidden">
               <div className="glass-gradient-overlay absolute top-0 inset-x-0 h-[30%] pointer-events-none" />
              <h3 className="text-2xl font-bold mb-8 text-primary relative z-10">The DAYALX Way</h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "One vendor. One relationship.",
                  "Single PO per subject per semester",
                  "All items arrive together, batch-ready",
                  "Dashboard tracks delivery and kit status",
                  "Standardized kits, consistent across all batches",
                  "Predictable costs, planned in advance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-foreground">
                    <CheckCircle2 className="text-primary mt-1 shrink-0" />
                    <span className="text-lg font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOW THE KIT SYSTEM WORKS (Detailed) */}
      <section className="py-24 relative z-10 px-4 border-y border-white/5 bg-white/[0.01]">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-semibold">The DAYALX Kit System — Explained</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Progress line Desktop */}
            <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-primary/10 via-primary/50 to-primary/10 border-t border-dashed border-primary/50" />
            
            {[
              { id: 1, icon: <FileText size={32} />, title: "We Map Your Syllabus", desc: "Share your university curriculum and schedule. Our team maps every consumable, reagent, and equipment item needed for each experiment." },
              { id: 2, icon: <PackageCheck size={32} />, title: "We Build Your Kit", desc: "Each kit is assembled, labelled, and quality-checked at our facility. Every item is pre-portioned and marked for its experiment." },
              { id: 3, icon: <Truck size={32} />, title: "We Deliver to Your Lab", desc: "Kits are delivered before your semester begins — with a packing list and direct support. No chasing. No delays." }
            ].map((step) => (
              <div key={step.id} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#0a0c0b] border-2 border-primary/50 flex items-center justify-center text-primary mb-8 inner-shadow shadow-[0_0_15px_rgba(120,252,214,0.2)]">
                  {step.icon}
                </div>
                <div className="text-primary font-mono font-bold text-sm tracking-widest mb-3">STEP 0{step.id}</div>
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KIT FEATURES DEEP DIVE (Bento Grid) */}
      <section className="py-24 relative z-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold">What Makes a DAYALX Kit Different</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[
              { title: "Pre-portioned", desc: "Every reagent and consumable is measured per experiment, per student." },
              { title: "Labelled & Indexed", desc: "Clear labels with experiment ref and kit index number." },
              { title: "Quality Checked", desc: "Each kit goes through a 3-point QC check before dispatch." },
              { title: "Batch Scalable", desc: "Order for 30 students or 300 — kits scale to your batch size." },
              { title: "Syllabus Versioned", desc: "We track university syllabus updates so your kit stays current." },
              { title: "Safe Packaging", desc: "Chemicals, glassware, and biologicals packed safely." },
              { title: "Full Packing List", desc: "Item manifest inside every kit for easy inventory check." },
              { title: "Reorder Alerts", desc: "Dashboard notifies you 4 weeks before next semester." }
            ].map((feature, i) => (
              <div key={i} className="glass-card p-6 group hover:bg-white/[0.1] transition-colors">
                <ShieldAlert className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR / ROLE CARDS */}
      <section className="py-24 relative z-10 px-4 bg-white/[0.02]">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold">Built for Every Educational Lab</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { role: "Lab Coordinators", desc: "Stop manually tracking 50 items. Get everything in one kit." },
              { role: "HODs", desc: "Ensure practicals run on time, every time. One kit per subject." },
              { role: "Procurement Officers", desc: "One vendor. One PO. One invoice. Reduce admin overhead." },
              { role: "College Principals", desc: "Cut costs, reduce delays, and standardize labs across campus." },
            ].map((persona, i) => (
              <div key={i} className="glass-card p-8 hover:-translate-y-2 transition-transform">
                <BadgeInfo className="text-primary w-10 h-10 mb-6" />
                <h3 className="text-xl font-bold mb-3">{persona.role}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{persona.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT METRICS */}
      <section className="py-24 relative z-10 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold">The Numbers Speak</h2>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: "40+", label: "Vendors Replaced" },
              { stat: "3 Weeks", label: "Time Saved/Semester" },
              { stat: "100%", label: "On-time Delivery" },
              { stat: "1", label: "PO Per Subject" },
            ].map((item, i) => (
              <div key={i} className="glass-card p-8 text-center feature-card group">
                <div className="text-gradient font-bold text-5xl md:text-6xl mb-4 group-hover:scale-110 transition-transform">{item.stat}</div>
                <div className="text-muted-foreground font-medium">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-4 bg-[#0a0c0b] text-center border-t border-white/5">
        <div className="container mx-auto max-w-3xl glass-card p-12 md:p-16 border-primary/20 shadow-[0_0_50px_rgba(120,252,214,0.1)]">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to See It In Action?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Book a 20-minute walkthrough with our team. We'll show you exactly how DAYALX works for your department.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary-dark rounded-full font-bold px-8 h-12">
                Book a Demo
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full border-white/20 hover:bg-white/5 font-semibold px-8 h-12">
              Download Kit Brochure
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
