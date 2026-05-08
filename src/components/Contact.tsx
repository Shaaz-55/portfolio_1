import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="py-40 px-6 md:px-12 mx-auto max-w-4xl text-center flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <p className="font-mono text-[#00e5ff] tracking-[0.3em] uppercase mb-6 text-sm">
          Initiate Contact
        </p>
        <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white mb-10">
          Let's <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '2px white' }}>Build</span>
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto mb-16 font-light">
          My inbox is continually open. Whether you have an inquiry, an ambitious project strategy, or simply want to connect, I'll invariably respond.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a href="mailto:shaaz23hemani@gmail.com" className="px-10 py-5 bg-white text-black hover:bg-gray-200 transition-colors rounded-full font-mono uppercase tracking-wider text-sm font-semibold">
            Send Transmission
          </a>
          <a href="https://www.linkedin.com/in/shaaz-hemani-229150276/" target="_blank" rel="noreferrer" className="px-10 py-5 border border-zinc-700 bg-zinc-900 text-white hover:border-white transition-colors rounded-full font-mono uppercase tracking-wider text-sm">
            Access LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}
