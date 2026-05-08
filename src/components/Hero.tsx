import { motion } from 'framer-motion';
import { Hero3D } from './Hero3D';

export function Hero() {
  return (
    <section id="hero" className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden bg-black">
      <div className="absolute inset-0 z-0 opacity-80">
        <Hero3D />
      </div>

      <div className="relative z-10 w-full px-4 md:px-12 pointer-events-none flex flex-col items-center justify-center h-full mix-blend-difference">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-12 bg-white"></div>
            <p className="font-mono text-white tracking-[0.3em] uppercase text-xs md:text-sm">
              Portfolio 2026
            </p>
            <div className="h-[1px] w-12 bg-white"></div>
          </motion.div>
          
          <h1 className="text-[16vw] md:text-[14vw] leading-[0.8] font-black tracking-tighter uppercase text-white pointer-events-auto">
            Shaaz
          </h1>
          <h1 className="text-[16vw] md:text-[14vw] leading-[0.8] font-black tracking-tighter uppercase text-transparent stroke-text pointer-events-auto" style={{ WebkitTextStroke: '2px white' }}>
            Hemani
          </h1>
          
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 font-display text-lg md:text-2xl font-light text-gray-300 max-w-2xl"
          >
            Creative Developer & <span className="font-medium text-white italic">3D Designer</span>.
          </motion.h2>
        </motion.div>
      </div>

      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 mix-blend-difference"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="font-mono text-xs text-white uppercase tracking-widest" style={{ writingMode: 'vertical-rl' }}>Scroll</span>
        <div className="w-[1px] h-12 bg-white/50"></div>
      </motion.div>
    </section>
  );
}
