"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, FlaskConical, Stethoscope, Microscope, Beaker } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const CATEGORIES = ["All", "Medical", "Pharmacy", "Nursing", "Science & Chemistry"];

const KITS = [
  { name: "Mbbs subject kit", dept: "Medical", align: "NMC Syllabus", size: "30–120 students", items: 40 },
  { name: "Dpharma subject kit", dept: "Pharmacy", align: "PCI Syllabus", size: "30–120 students", items: 35 },
  { name: "Bpharma subject kit", dept: "Pharmacy", align: "PCI Syllabus", size: "30–120 students", items: 45 },
  { name: "Nursing subject kit", dept: "Nursing", align: "INC Syllabus", size: "30–60 students", items: 30 },
  { name: "Chemistry subject kit", dept: "Science & Chemistry", align: "UGC Syllabus", size: "60–120 students", items: 50 },
];

export default function SubjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredKits = KITS.filter(kit => {
    const matchesCategory = activeCategory === "All" || kit.dept === activeCategory;
    const matchesSearch = kit.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          kit.dept.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm font-medium">
            <span className="text-primary">✦</span> Kits for Every Laboratory, Every Subject
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gradient leading-[1.1]">
            Find the Right Kit for Your Department
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            DAYALX offers syllabus-aligned lab kits across pharmacy, nursing, medical, and science disciplines.
          </p>

          <div className="relative w-full max-w-md mt-6 mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="text-muted-foreground w-5 h-5" />
            </div>
            <input 
              type="text" 
              placeholder="Search by subject, department..." 
              className="w-full bg-white/5 border border-white/20 rounded-full py-3 pl-10 pr-4 text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary transition-colors glass-card"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </motion.div>
      </section>

      {/* FILTER BAR */}
      <section className="sticky top-20 z-40 bg-[#0f1211]/80 backdrop-blur-md border-b border-white/10 py-4 px-4 overflow-x-auto">
        <div className="container mx-auto flex gap-2 md:justify-center whitespace-nowrap">
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category ? 'bg-primary text-[#0f1211] shadow-[0_0_15px_rgba(120,252,214,0.3)]' : 'bg-white/5 border border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/10'}`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* KITS GRID */}
      <section className="py-16 relative z-10 px-4 min-h-[50vh]">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
             <div className="flex items-center gap-3">
               <h2 className="text-2xl font-bold">{activeCategory === "All" ? "All Subjects" : activeCategory}</h2>
               <span className="bg-primary/20 text-primary text-xs font-bold px-2 py-1 rounded">{filteredKits.length} Kits Available</span>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredKits.map((kit, i) => (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                key={i} 
                className="glass-card p-6 flex flex-col group hover:border-primary/50 hover:shadow-[0_0_20px_rgba(120,252,214,0.1)] transition-all"
              >
                <div className="mb-4 inline-flex px-2 py-1 bg-white/5 border border-white/10 rounded text-xs font-medium text-muted-foreground w-fit">
                  {kit.dept}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{kit.name}</h3>
                
                <div className="space-y-2 mb-8 flex-grow">
                  <div className="text-sm text-foreground flex justify-between border-b border-white/5 pb-2">
                    <span className="text-muted-foreground">Alignment:</span> {kit.align}
                  </div>
                  <div className="text-sm text-foreground flex justify-between border-b border-white/5 pb-2">
                    <span className="text-muted-foreground">Batch Size:</span> {kit.size}
                  </div>
                  <div className="text-sm text-foreground flex justify-between border-b border-white/5 pb-2">
                    <span className="text-muted-foreground">Items:</span> {kit.items} Items Included
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-auto">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary-dark font-semibold">
                    Request This Kit
                  </Button>
                  <Button variant="outline" className="w-full border-white/10 hover:bg-white/5">
                    View Kit Details
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredKits.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
              No kits found matching your criteria.
            </div>
          )}
        </div>
      </section>

      {/* CUSTOM KIT CTA SECTION */}
      <section className="py-24 px-4 bg-[#0a0c0b] border-t border-white/5 relative overflow-hidden text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[300px] bg-primary/10 blur-[100px] rounded-[100%] z-0 pointer-events-none" />
        <div className="container mx-auto max-w-4xl relative z-10 glass-card p-12 md:p-16 border-primary/20 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Don't See Your Subject?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
            We build custom kits for any subject, any university, any syllabus. Tell us what you need.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/contact" className="w-full sm:w-auto">
               <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary-dark rounded-full font-bold px-8 h-12 transition-all">
                Request a Custom Kit <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto rounded-full border-white/20 hover:bg-white/5 font-semibold px-8 h-12">
              Download Full Catalogue
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}
