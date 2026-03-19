"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Target, Truck, Users, Lock, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function EarlyAccessPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="relative w-full overflow-hidden min-h-screen flex flex-col pt-10">
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blur-[150px] rounded-full z-0 pointer-events-none" />
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5" style={{
        backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      {/* URGENCY BANNER */}
      <div className="relative z-20 mx-auto mt-4 px-4 py-2 border border-primary/30 bg-primary/10 rounded-full backdrop-blur-md flex items-center justify-center gap-3 w-fit shadow-[0_4px_24px_rgba(120,252,214,0.15)]">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
        </span>
        <span className="text-sm font-bold text-primary uppercase tracking-widest">Only 12 early access spots remaining for Semester 1 — 2025</span>
      </div>

      <div className="flex-1 w-full max-w-6xl mx-auto px-4 md:px-6 relative z-10 py-16 flex flex-col lg:flex-row gap-16 lg:gap-8 xl:gap-16 items-start justify-center">
        
        {/* Left Column - Copy & Benefits */}
        <div className="w-full lg:w-1/2 flex flex-col gap-8 md:sticky md:top-32">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
             <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1] mb-6">
               Be Among the First Colleges to Transform Their Lab Procurement
             </h1>
             <p className="text-lg text-muted-foreground leading-relaxed">
               Early access institutions get priority handling for our Semester 1 rollout. Stop chasing vendors and lock in an effortless procurement cycle for the entire year.
             </p>
          </motion.div>

          {/* Benefits */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="grid gap-6">
            {[
              { icon: <Target className="w-6 h-6" />, title: "Custom Kit Design", desc: "We map your exact syllabus." },
              { icon: <Truck className="w-6 h-6" />, title: "Priority Delivery", desc: "First in queue for every semester." },
              { icon: <Users className="w-6 h-6" />, title: "Dedicated Onboarding", desc: "A DAYALX team member assigned to you." },
              { icon: <Lock className="w-6 h-6" />, title: "Locked-In Pricing", desc: "Semester-one rate guaranteed for Year 1." }
            ].map((benefit, i) => (
              <div key={i} className="flex gap-4 p-4 glass-card border-white/10 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-primary">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column - Form */}
        <div className="w-full lg:w-1/2 max-w-xl mx-auto lg:mx-0">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="glass-card p-6 md:p-10 border-primary/20 shadow-[0_0_50px_rgba(120,252,214,0.1)] relative overflow-hidden">
            <div className="glass-gradient-overlay absolute top-0 inset-x-0 h-[30%] pointer-events-none" />
            
            {!isSubmitted ? (
               <form 
                 onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}
                 className="relative z-10 flex flex-col gap-6"
               >
                 <div>
                   <h2 className="text-2xl font-bold mb-2">Apply for Early Access</h2>
                   <p className="text-sm text-muted-foreground">We're onboarding a limited number of institutions for our first semester cohort.</p>
                 </div>
                 
                 <div className="space-y-4">
                   <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-1">
                       <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-white/10 transition-colors" placeholder="College Name *" />
                     </div>
                     <div className="space-y-1">
                       <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-white/10 transition-colors" placeholder="City, State *" />
                     </div>
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-1">
                       <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-white/10 transition-colors" placeholder="Your Name *" />
                     </div>
                     <div className="space-y-1">
                       <select required defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-white/10 transition-colors appearance-none">
                         <option value="" disabled>Your Role *</option>
                         <option value="principal">Principal</option>
                         <option value="hod">HOD</option>
                         <option value="coordinator">Lab Coordinator</option>
                         <option value="other">Other</option>
                       </select>
                     </div>
                   </div>

                   <div className="grid grid-cols-2 gap-4">
                     <div className="space-y-1">
                       <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-white/10 transition-colors" placeholder="Email *" />
                     </div>
                     <div className="space-y-1">
                       <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-white/10 transition-colors" placeholder="Phone *" />
                     </div>
                   </div>

                   <div className="space-y-2 pt-2">
                     <label className="text-sm font-medium text-foreground">Which departments do you want kits for?</label>
                     <div className="grid grid-cols-2 gap-2 mt-2">
                       {["Pharmacy", "Nursing", "Science", "Biotech"].map(dept => (
                         <label key={dept} className="flex items-center gap-2 cursor-pointer">
                           <input type="checkbox" className="w-4 h-4 rounded border-white/20 bg-white/5 accent-primary cursor-pointer" />
                           <span className="text-sm text-muted-foreground">{dept}</span>
                         </label>
                       ))}
                     </div>
                   </div>

                   <div className="space-y-1 pt-2">
                     <select defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-white/10 transition-colors appearance-none">
                       <option value="" disabled>Approx. Students per Batch</option>
                       <option value="30">Up to 30</option>
                       <option value="60">30–60</option>
                       <option value="120">60–120</option>
                       <option value="more">120+</option>
                     </select>
                   </div>
                   
                   <div className="space-y-1 pt-2">
                     <label className="text-xs text-muted-foreground mb-1 block">When does your next semester begin?</label>
                     <input type="date" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-white/10 transition-colors invert dark:invert-0" />
                   </div>
                 </div>

                 <Button type="submit" size="lg" className="w-full bg-primary text-[#0f1211] hover:bg-primary-dark font-bold text-lg h-14 mt-2 rounded-xl group">
                   Apply for Early Access <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                 </Button>

                 <p className="text-center text-xs text-muted-foreground w-full">
                   Applications reviewed within 48 hours. Limited spots available.
                 </p>
               </form>
            ) : (
                <div className="flex flex-col items-center justify-center text-center py-16 relative z-10 h-full">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary border border-primary/30">
                     <ShieldCheck className="w-10 h-10" />
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Application Submitted!</h2>
                  <p className="text-lg text-muted-foreground mb-10 max-w-sm mx-auto">
                    We've received your request. Our onboarding team will contact you within 48 hours to secure your spot.
                  </p>
                   <Link href="/">
                    <Button variant="outline" size="lg" className="rounded-full font-bold px-10 h-14 border-white/20 hover:bg-white/5">
                      Return Home
                    </Button>
                  </Link>
                </div>
            )}
          </motion.div>

          {/* Social Proof area */}
          <div className="mt-8 text-center w-full">
             <p className="text-xs text-muted-foreground mb-4 uppercase tracking-widest font-bold">Institutions Already in Conversation</p>
             <div className="flex items-center justify-center gap-4 flex-wrap opacity-40 grayscale">
                 <span className="text-sm font-bold bg-white/10 px-3 py-1 rounded">MGI College</span>
                 <span className="text-sm font-bold bg-white/10 px-3 py-1 rounded">SBM Pharmacy</span>
                 <span className="text-sm font-bold bg-white/10 px-3 py-1 rounded">Apex Medical</span>
             </div>
          </div>

        </div>
      </div>
      
      {/* WHAT HAPPENS NEXT */}
      <div className="w-full bg-[#0a0c0b] border-t border-white/5 py-16 relative z-10 mt-auto">
         <div className="container mx-auto px-4 text-center max-w-4xl">
           <h3 className="text-2xl font-bold mb-10">After You Apply</h3>
           <div className="grid md:grid-cols-3 gap-8 text-center relative">
             <div className="hidden md:block absolute top-6 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
             {[
               { n: 1, text: "Our team reviews your application within 48 hours" },
               { n: 2, text: "We schedule a 20-min onboarding call" },
               { n: 3, text: "Your first kit spec is ready within a week" }
             ].map(step => (
               <div key={step.n} className="relative z-10 flex flex-col items-center">
                 <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center font-bold text-primary mb-4 border-primary/30">{step.n}</div>
                 <p className="text-muted-foreground font-medium text-sm md:text-base leading-relaxed px-4">{step.text}</p>
               </div>
             ))}
           </div>
         </div>
      </div>

    </div>
  );
}

function ShieldCheck({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/>
      <path d="m9 12 2 2 4-4"/>
    </svg>
  );
}
