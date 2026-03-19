"use client";

import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, Search, MessageSquare, PlayCircle, ShieldAlert, FileText , Truck  } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5" style={{
        backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />
      
      {/* HERO SECTION */}
      <section className="relative z-10 pt-20 pb-20 px-4 md:px-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[130px] rounded-full z-0 pointer-events-none" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium">
              <span className="text-primary">✦</span> Simple. Structured. Reliable.
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gradient leading-[1.1]">
              From Your Syllabus to Your Lab — In Three Steps
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              DAYALX is built to make the entire lab procurement journey effortless — from the first conversation to semester-day delivery.
            </p>
          </motion.div>
          
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="mt-16 max-w-5xl mx-auto h-24 glass-card border-primary/20 flex relative overflow-hidden items-center justify-between px-8 shadow-[0_0_30px_rgba(120,252,214,0.1)] hidden sm:flex">
             <div className="h-[2px] bg-primary/30 absolute left-12 right-12 top-1/2 -translate-y-1/2 z-0" />
             {[1, 2, 3].map(i => (
               <div key={i} className="relative z-10 bg-[#0a0c0b] border-2 border-primary/50 w-12 h-12 rounded-full flex items-center justify-center font-bold text-primary">
                 0{i}
               </div>
             ))}
          </motion.div>
        </div>
      </section>

      {/* DETAILED STEPS */}
      <section className="py-24 relative z-10 px-4">
         <div className="container mx-auto max-w-6xl space-y-32">
           
           {/* PHASE 1 */}
           <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="flex-1 space-y-6 order-2 md:order-1">
               <div className="px-3 py-1 bg-white/5 border border-white/10 rounded font-mono text-sm tracking-widest text-primary w-fit">PHASE 01</div>
               <h2 className="text-3xl md:text-4xl font-bold">We Start by Understanding Your Lab</h2>
               <p className="text-muted-foreground text-lg">You fill a simple onboarding form with your subjects and batch sizes, and we do the mapping.</p>
               
               <ul className="space-y-4 mt-8">
                {[
                  "You provide subjects, university, and batch size",
                  "Our team reviews the curriculum and schedules",
                  "We send you a Proposed Kit Specification",
                  "You review, request changes, and sign off"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 text-sm font-bold">{i+1}</div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
               </ul>
             </div>
             
             <div className="flex-1 w-full order-1 md:order-2 glass-card p-2 border-white/10">
               <div className="bg-[#0a0c0b] rounded-xl aspect-[4/3] flex items-center justify-center">
                 <div className="text-muted-foreground text-sm flex flex-col items-center">
                   <FileText size={48} className="mb-4 text-primary/40" />
                   Mockup: Onboarding Form & Spec
                 </div>
               </div>
             </div>
           </div>

           {/* PHASE 2 */}
           <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="flex-1 w-full glass-card p-2 border-white/10">
               <div className="bg-[#0a0c0b] rounded-xl aspect-[4/3] flex items-center justify-center">
                 <div className="text-muted-foreground text-sm flex flex-col items-center">
                   <ShieldAlert size={48} className="mb-4 text-primary/40" />
                   Mockup: Kit Assembly & QC Loop
                 </div>
               </div>
             </div>

             <div className="flex-1 space-y-6">
               <div className="px-3 py-1 bg-white/5 border border-white/10 rounded font-mono text-sm tracking-widest text-primary w-fit">PHASE 02</div>
               <h2 className="text-3xl md:text-4xl font-bold">We Build Your Kit — Item by Item</h2>
               <p className="text-muted-foreground text-lg">Precision assembly and strict quality checks ensure your kit arrives perfectly ready for the semester.</p>
               
               <ul className="space-y-4 mt-8">
                {[
                  "Our procurement team sources all approved items",
                  "Every item is quality-checked against the spec",
                  "Pre-portioned, labelled, and organized by experiment",
                  "Kit is packed, sealed, and given a unique ID",
                  "Final packing list generated and attached"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 text-sm font-bold">{i+1}</div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
               </ul>
             </div>
           </div>

           {/* PHASE 3 */}
           <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="flex-1 space-y-6 order-2 md:order-1">
               <div className="px-3 py-1 bg-white/5 border border-white/10 rounded font-mono text-sm tracking-widest text-primary w-fit">PHASE 03</div>
               <h2 className="text-3xl md:text-4xl font-bold">Your Kit Arrives Before Your Semester Begins</h2>
               <p className="text-muted-foreground text-lg">On-time delivery backed by tracking details and reorder intelligence.</p>
               
               <ul className="space-y-4 mt-8">
                {[
                  "Dispatched with 7–10 days buffer before semester",
                  "Real-time delivery tracking via dashboard",
                  "Lab coordinator receives packing list via email",
                  "DAYALX support available for queries",
                  "Reorder reminder sent 4 weeks before next semester"
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 text-sm font-bold">{i+1}</div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
               </ul>
             </div>
             
             <div className="flex-1 w-full order-1 md:order-2 glass-card p-2 border-white/10">
               <div className="bg-[#0a0c0b] rounded-xl aspect-[4/3] flex items-center justify-center">
                 <div className="text-muted-foreground text-sm flex flex-col items-center">
                   <Truck size={48} className="mb-4 text-primary/40" />
                   Mockup: Delivery Tracking & Logistics
                 </div>
               </div>
             </div>
           </div>

         </div>
      </section>

      {/* DASHBOARD WALKTHROUGH */}
      <section className="py-24 relative z-10 px-4 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-bold">Your Order, Tracked in Real Time</h2>
          </div>
          
          <div className="relative flex flex-col lg:flex-row items-center gap-12">
             <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 w-full lg:max-w-xs order-2 lg:order-1">
               {[
                 { icon: <Search />, text: "Track your kit from assembly to delivery" },
                 { icon: <CheckCircle2 />, text: "Check off items as you unpack" },
               ].map((callout, i) => (
                 <div key={i} className="glass-card p-6 flex items-start gap-4">
                   <div className="text-primary mt-1">{callout.icon}</div>
                   <div className="font-medium text-muted-foreground">{callout.text}</div>
                 </div>
               ))}
             </div>
             
             <div className="flex-[2] w-full glass-card border-primary/20 p-2 shadow-[0_0_50px_rgba(120,252,214,0.15)] order-1 lg:order-2">
                 <div className="bg-[#0a0c0b] rounded-xl aspect-video flex items-center justify-center border border-white/10">
                    <PlayCircle className="text-primary/50 w-16 h-16" />
                    <span className="ml-4 font-bold text-muted-foreground tracking-widest uppercase">Dashboard Walkthrough UI</span>
                 </div>
             </div>

             <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6 w-full lg:max-w-xs order-3">
               {[
                 { icon: <ShieldAlert />, text: "Get alerts for next semester reorders" },
                 { icon: <MessageSquare />, text: "Chat with our support team directly" },
               ].map((callout, i) => (
                 <div key={i} className="glass-card p-6 flex items-start gap-4">
                   <div className="text-primary mt-1">{callout.icon}</div>
                   <div className="font-medium text-muted-foreground">{callout.text}</div>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* FAQ (How It Works) */}
      <section className="py-24 px-4 container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Still Have Questions?</h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {[
            { q: "How long does the onboarding process take?", a: "Typically 48–72 hours from the time you submit your syllabus. Our experts map the requirements and return a kit spec quickly." },
            { q: "What if my syllabus changes mid-semester?", a: "We lock kits for the active semester. Syllabus changes can be incorporated into the kit for your next semester order seamlessly." },
            { q: "Can I add items to a kit after placing the order?", a: "Before assembly begins, yes. Once a kit is in the assembly or QC phase, any additional items will be processed as a separate supplementary order." },
            { q: "What happens if an item is missing or damaged?", a: "Use the support feature on your dashboard. Replacement items are dispatched within 24 business hours." },
            { q: "Do you handle delivery for rural or remote colleges?", a: "Yes, we ship Pan-India using specialized logistics partners familiar with institutional deliveries." }
          ].map((faq, i) => (
            <AccordionItem key={i} value={`how-faq-${i}`} className="glass-card px-6 border-white/10 data-[state=open]:border-primary/50 transition-colors">
              <AccordionTrigger className="text-left text-lg font-medium hover:no-underline hover:text-primary py-6">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      {/* BOTTOM CTA */}
      <section className="py-24 px-4 bg-[#0a0c0b] text-center">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Let's Build Your First Kit</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Takes less than 10 minutes to get started. 
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary-dark rounded-full font-bold px-10 h-14 text-lg">
                Start Onboarding
              </Button>
            </Link>
             <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full border-white/20 hover:bg-white/5 font-semibold px-10 h-14 text-lg">
                Talk to Us First
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
