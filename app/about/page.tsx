"use client";

import { motion } from "framer-motion";
import { BadgeInfo, Users2, ShieldCheck, Route, FileCode2, Globe2, Target, Lightbulb } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="absolute top-0 right-0 translate-x-[10%] -translate-y-[10%] w-[547px] h-[938px] bg-primary/10 blur-[130px] rounded-full z-0 pointer-events-none" />
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5" style={{
        backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      {/* HERO SECTION */}
      <section className="relative z-10 pt-20 pb-16 px-4 md:px-6 text-center max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center gap-6">
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[130px] rounded-full z-0 pointer-events-none" />
          
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium relative z-10">
            <span className="text-primary">✦</span> Why We Built DAYALX
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gradient leading-[1.1] relative z-10 text-balance">
            We've Seen the Problem from the Inside.
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto relative z-10">
            DAYALX was built by people who understand how educational laboratories operate in India — and how broken the procurement process has always been.
          </p>
        </motion.div>
      </section>

      {/* ORIGIN STORY */}
      <section className="py-24 relative z-10 px-4">
        <div className="container mx-auto max-w-4xl glass-card p-8 md:p-16 border-white/10 shadow-2xl relative">
          <h2 className="text-3xl font-bold mb-8">The Problem We Couldn't Ignore</h2>
          
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed font-sans font-light">
            <p>
              Every semester, colleges across India repeat the same painful cycle — hundreds of phone calls to vendors, chasing delayed deliveries, managing mismatched quantities, and cancelling practicals because one item didn't arrive.
            </p>
            <p>
              We saw lab technicians spending weeks on procurement instead of preparation. We saw HODs signing off on 40-line purchase orders. We saw students sitting in empty labs waiting for supplies.
            </p>
            <p className="font-medium text-foreground">
              We knew there had to be a better way. So we built it.
            </p>
          </div>

          <div className="mt-12 p-8 bg-primary/10 border-l-4 border-primary rounded-r-xl">
             <p className="text-2xl font-bold text-primary italic">"One kit. Every practical. All semester."</p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 relative z-10 px-4 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8">
           <div className="glass-card p-10 md:p-12 hover:-translate-y-2 transition-transform">
             <Target className="w-12 h-12 text-primary mb-6" />
             <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
             <p className="text-muted-foreground text-lg leading-relaxed">
               "To simplify laboratory procurement for every educational institution in India — so labs are always ready, and students can learn without interruption."
             </p>
           </div>
           
           <div className="glass-card p-10 md:p-12 hover:-translate-y-2 transition-transform">
             <Globe2 className="w-12 h-12 text-primary mb-6" />
             <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
             <p className="text-muted-foreground text-lg leading-relaxed">
               "To become the most trusted laboratory procurement platform for educational institutions — first in India, then globally."
             </p>
           </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 relative z-10 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold">Our Principles</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <ShieldCheck />, title: "Reliability First", desc: "A lab kit that arrives late is useless. We build our entire operation around on-time delivery." },
              { icon: <FileCode2 />, title: "Standardization", desc: "Consistency across batches, semesters, and campuses. Every kit, every time." },
              { icon: <Route />, title: "Simplicity", desc: "Procurement should be simple. One order. One invoice. One delivery." },
              { icon: <Lightbulb />, title: "Education-First", desc: "We exist to support education. Every decision we make is in service of better learning outcomes." }
            ].map((value, i) => (
              <div key={i} className="glass-card p-8 group hover:bg-white/[0.1] transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION (Placeholder) */}
      {/* <section className="py-24 relative z-10 px-4 bg-white/[0.02]">
        <div className="container mx-auto max-w-5xl text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-16">The People Behind DAYALX</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
               <div key={i} className="glass-card p-8 flex flex-col items-center hover:-translate-y-2 transition-transform">
                 <div className="w-24 h-24 rounded-full bg-black/40 border-2 border-white/10 mb-6 flex items-center justify-center">
                   <Users2 className="text-muted-foreground" size={32} />
                 </div>
                 <h3 className="text-xl font-bold mb-1">Founder Name</h3>
                 <p className="text-primary text-sm font-medium mb-3">Role / Designation</p>
                 <p className="text-muted-foreground text-sm max-w-[200px]">Bio placeholder explaining their background in procurement.</p>
               </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CONTACT CTA */}
      <section className="py-24 px-4 text-center border-t border-white/5">
         <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Know More?</h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            We'd love to tell you more about what we're building and how we can help your institution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <Link href="/contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary-dark rounded-full font-bold px-10 h-14 text-lg">
                Get in Touch
              </Button>
            </Link>
             <Link href="/solutions" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full border-white/20 hover:bg-white/5 font-semibold px-10 h-14 text-lg">
                View Our Solutions
              </Button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
