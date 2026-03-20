"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Mail, Phone, MapPin, Clock, ArrowRight, MessageSquare, PlayCircle, ShieldAlert, BadgeInfo } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <div className="relative w-full overflow-hidden">
      {/* GLOBAL BACKGROUND ELEMENTS */}
      <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[130px] rounded-full z-0 pointer-events-none" />
      <div className="absolute inset-0 z-0 pointer-events-none opacity-5" style={{
        backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }} />

      {/* HERO SECTION */}
      <section className="relative z-10 pt-20 pb-16 px-4 md:px-6 text-center max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex flex-col items-center gap-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium">
            <span className="text-primary">✦</span> We Respond Within 24 Hours
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight text-gradient leading-[1.1]">
            Let's Talk About Your Lab
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Whether you want a demo, a kit quote, or just have questions — we're here. Fill the form and our team will get back to you within one business day.
          </p>
        </motion.div>
      </section>

      {/* TWO COLUMN CONTACT LAYOUT */}
      <section className="py-16 relative z-10 px-4">
        <div className="container mx-auto max-w-6xl grid lg:grid-cols-5 gap-12 lg:gap-8">
          
          {/* Left Column - Form */}
          <div className="lg:col-span-3 glass-card p-6 md:p-10 border-white/10 relative overflow-hidden">
             
            {!isSubmitted ? (
               <form 
                 onSubmit={(e) => { e.preventDefault(); setIsSubmitted(true); }}
                 className="relative z-10 space-y-6"
               >
                 <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                 
                 <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-foreground">Full Name *</label>
                     <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-white/10 transition-colors" placeholder="Dr. XYZ" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-foreground">Designation / Role *</label>
                     <select required defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-white/10 transition-colors appearance-none">
                       <option value="" disabled>Select Role</option>
                       <option value="principal">Principal</option>
                       <option value="hod">HOD</option>
                       <option value="lab-coordinator">Lab Coordinator</option>
                       <option value="procurement">Procurement Officer</option>
                       <option value="other">Other</option>
                     </select>
                   </div>
                 </div>

                 <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-foreground">College / Institution Name *</label>
                     <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:border-primary focus:bg-white/10 transition-colors" placeholder="Excellence College" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-foreground">City & State *</label>
                     <input required type="text" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:border-primary focus:bg-white/10 transition-colors" placeholder="Mumbai, MH" />
                   </div>
                 </div>

                 <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-foreground">Email Address *</label>
                     <input required type="email" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:border-primary focus:bg-white/10 transition-colors" placeholder="hello@college.edu" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-medium text-foreground">Phone Number *</label>
                     <input required type="tel" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:border-primary focus:bg-white/10 transition-colors" placeholder="+91 99999 99999" />
                   </div>
                 </div>

                 <div className="space-y-2">
                   <label className="text-sm font-medium text-foreground">Department Area</label>
                   <select defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-white/10 transition-colors appearance-none">
                     <option value="" disabled>Select Department</option>
                     <option value="pharmacy">Pharmacy</option>
                     <option value="nursing">Nursing & Medical</option>
                     <option value="science">Science & Chemistry</option>
                     <option value="microbiology">Microbiology & Biotech</option>
                     <option value="other">Other</option>
                   </select>
                 </div>

                 <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message / Specific Requirements</label>
                    <textarea rows={4} className="w-full bg-white/5 border border-white/10 rounded-lg p-3 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:bg-white/10 transition-colors resize-none" placeholder="We are looking for kits for our 2nd year pharmacy batch..."></textarea>
                 </div>

                 <label className="flex items-center gap-3 cursor-pointer group">
                   <div className="relative flex items-center justify-center">
                     <input type="checkbox" className="peer w-5 h-5 rounded border-white/20 bg-white/5 appearance-none checked:bg-primary checked:border-primary transition-colors cursor-pointer" />
                     <div className="absolute text-[#0f1211] opacity-0 peer-checked:opacity-100 pointer-events-none">
                       <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                     </div>
                   </div>
                   <span className="text-muted-foreground text-sm group-hover:text-foreground transition-colors">I'd like to schedule a demo call</span>
                 </label>

                 <Button type="submit" size="lg" className="w-full bg-primary text-[#0f1211] hover:bg-primary-dark font-bold text-lg h-14 mt-4 rounded-xl">
                   Send Message
                 </Button>

                 <p className="text-center text-xs text-muted-foreground mt-4">
                   🔒 Your information is safe with us. We don't spam.
                 </p>
               </form>
            ) : (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center py-20 relative z-10 h-full">
                  <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-6 text-primary border border-primary/30">
                     <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">Message Received! 🎉</h2>
                  <p className="text-lg text-muted-foreground mb-10 max-w-sm mx-auto">
                    Our team will get back to you within 24 hours. In the meantime, explore our kit catalogue.
                  </p>
                   <Link href="/subjects">
                    <Button size="lg" className="bg-primary text-[#0f1211] hover:bg-primary-dark rounded-full font-bold px-10 h-14 text-lg">
                      Browse Subjects
                    </Button>
                  </Link>
                </motion.div>
            )}
          </div>

          {/* Right Column - Info Cards */}
          <div className="lg:col-span-2 space-y-4">
             <div className="glass-card p-6 flex items-start gap-4">
               <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                 <Mail className="text-primary w-5 h-5" />
               </div>
               <div>
                 <h4 className="font-semibold text-lg text-foreground">Email</h4>
                 <p className="text-primary mt-1 hover:underline cursor-pointer">sanyamgoel05@gmail.com</p>
                 <p className="text-sm text-muted-foreground mt-1">For general enquiries</p>
               </div>
             </div>
             
             <div className="glass-card p-6 flex items-start gap-4">
               <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                 <Phone className="text-primary w-5 h-5" />
               </div>
               <div>
                 <h4 className="font-semibold text-lg text-foreground">Phone / WhatsApp</h4>
                 <p className="text-primary mt-1 hover:underline cursor-pointer">+91 93504 32419</p>
                 <p className="text-sm text-muted-foreground mt-1">Available Mon–Sat, 9am–6pm IST</p>
               </div>
             </div>

             <div className="glass-card p-6 flex items-start gap-4">
               <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                 <MapPin className="text-primary w-5 h-5" />
               </div>
               <div>
                 <h4 className="font-semibold text-lg text-foreground">Location</h4>
                 <p className="text-foreground mt-1">India (Pan-India Operations)</p>
                 <p className="text-sm text-muted-foreground mt-1">Delivering across all states</p>
               </div>
             </div>

             <div className="glass-card p-6 flex items-start gap-4">
               <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                 <Clock className="text-primary w-5 h-5" />
               </div>
               <div>
                 <h4 className="font-semibold text-lg text-foreground">Response Time</h4>
                 <p className="text-foreground mt-1">Within 24 business hours</p>
                 <p className="text-sm text-muted-foreground mt-1">Usually much faster</p>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* QUICK ENQUIRY ROUTES */}
      <section className="py-24 relative z-10 px-4 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto max-w-6xl">
           <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold">What Can We Help You With?</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🧪", text: "I want to see a kit demo" },
              { icon: "📋", text: "I need a quote for my college" },
              { icon: "🤝", text: "I want to explore a partnership" },
              { icon: "❓", text: "I have a general question" }
            ].map((route, i) => (
              <div key={i} className="glass-card p-8 flex flex-col items-center text-center group cursor-pointer hover:border-primary/50 hover:-translate-y-2 transition-all duration-300">
                <div className="text-4xl mb-6 group-hover:scale-110 transition-transform">{route.icon}</div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{route.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EMBEDDED CALENDAR MOCKUP */}
      {/* <section className="py-24 relative z-10 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">Or, Book a 20-Min Demo Directly</h2>
          <p className="text-lg text-muted-foreground mb-12">No commitment required. Just a conversation.</p>
          
          <div className="glass-card w-full h-[600px] flex flex-col items-center justify-center gap-6 border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
             <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-muted-foreground"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
             </div>
             <p className="text-xl font-medium text-muted-foreground">Calendly Embed Placeholder</p>
             <p className="text-sm text-white/40 max-w-sm mt-4">Actual integration would drop in here via iframe or react wrapper.</p>
          </div>
        </div>
      </section> */}

      {/* FAQ */}
      <section className="py-24 px-4 container mx-auto max-w-3xl border-t border-white/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">Quick Answers</h2>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {[
            { q: "Do you serve colleges outside major cities?", a: "Yes, our logistics pipeline allows us to deliver Pan-India, including rural and remote educational institutions." },
            { q: "Can I get a sample kit before placing a full order?", a: "We can arrange a demonstration kit for serious institutional inquiries. Reach out to our team to request one." },
            { q: "What information do I need before contacting you?", a: "Ideally, your university syllabus/subjects list and an approximate batch size. If you don't have them yet, we can guide you." },
            { q: "How quickly can you deliver after an order is placed?", a: "Delivery happens 7–10 days before your semester starts, unless it's an expedited order which can be fulfilled in 2-3 weeks." }
          ].map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border-white/10 data-[state=open]:border-primary/50 transition-colors">
              <AccordionTrigger className="text-left text-lg font-medium hover:no-underline hover:text-primary py-6">{faq.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base pb-6 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

    </div>
  );
}
