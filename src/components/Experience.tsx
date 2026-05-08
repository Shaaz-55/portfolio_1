import { motion } from 'framer-motion';

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 mx-auto max-w-7xl w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter text-white mb-16 text-center">
          Career <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px white' }}>Trajectory</span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-12">
          
          <div className="relative pl-8 md:pl-0">
            <div className="md:hidden absolute w-[1px] h-full bg-zinc-800 left-0 top-0"></div>
            
            <div className="flex flex-col md:flex-row gap-8 relative group">
              <div className="hidden md:flex w-32 shrink-0 flex-col items-end pt-1 pr-8 relative">
                <div className="font-mono text-sm text-gray-500 uppercase tracking-widest text-right">Feb 2026<br/><span className="text-[#00e5ff]">Present</span></div>
                {/* Timeline connector */}
                <div className="absolute right-0 top-2 w-[1px] h-[150%] bg-zinc-800 group-last:h-full"></div>
                <div className="absolute right-[-4px] top-2 w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-[#00e5ff] transition-colors z-10"></div>
              </div>

              {/* Mobile indicator */}
              <div className="md:hidden absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-[#00e5ff] transition-colors z-10"></div>

              <div className="flex-1 bg-zinc-900/20 border border-zinc-800/50 p-8 rounded-3xl group-hover:border-zinc-700 group-hover:bg-zinc-900/50 transition-all">
                <div className="md:hidden font-mono text-xs text-[#00e5ff] uppercase tracking-widest mb-2">Feb 2026 - Present</div>
                <h3 className="text-2xl font-display text-white mb-1">Freelance 3D Product Designer</h3>
                <h4 className="text-lg text-gray-400 font-light mb-6">Fiverr, Upwork & Independent Clients</h4>
                
                <p className="text-gray-300 font-light leading-relaxed">
                  Specializing in clean, manufacturable 3D models for consumer products and 3D printing via Fusion 360. 
                  Managing direct client relationships, translating concepts into functional digital architecture, and 
                  submitting flawless prototypes.
                </p>
              </div>
            </div>
          </div>

          <div className="relative pl-8 md:pl-0">
             <div className="md:hidden absolute w-[1px] h-full bg-zinc-800 left-0 top-0"></div>
             
             <div className="flex flex-col md:flex-row gap-8 relative group">
               <div className="hidden md:flex w-32 shrink-0 flex-col items-end pt-1 pr-8 relative">
                 <div className="font-mono text-sm text-gray-500 uppercase tracking-widest text-right">2025</div>
                 <div className="absolute right-0 top-2 w-[1px] h-full bg-zinc-800"></div>
                 <div className="absolute right-[-4px] top-2 w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-white transition-colors z-10"></div>
               </div>
 
               <div className="md:hidden absolute left-[-4px] top-2 w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-white transition-colors z-10"></div>
 
               <div className="flex-1 bg-zinc-900/20 border border-zinc-800/50 p-8 rounded-3xl group-hover:border-zinc-700 group-hover:bg-zinc-900/50 transition-all">
                 <div className="md:hidden font-mono text-xs text-gray-500 uppercase tracking-widest mb-2">2025</div>
                 <h3 className="text-2xl font-display text-white mb-1">Event Lead & Competitor</h3>
                 <h4 className="text-lg text-gray-400 font-light mb-6">Multiple Hackathons & Aayam Techfest</h4>
                 
                 <p className="text-gray-300 font-light leading-relaxed">
                   Led development teams through intensive, high-stakes hackathons. Handled logistics, 
                   cross-team coordination, and structured execution as the Event Lead for two major 
                   technology-focused events at Aayam Techfest.
                 </p>
               </div>
             </div>
           </div>

        </div>
      </motion.div>
    </section>
  );
}
