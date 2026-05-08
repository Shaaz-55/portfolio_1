import { motion } from 'framer-motion';

export function Navbar() {
  const links = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-0 w-full z-50 p-6 mix-blend-difference"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#" className="font-display font-black text-2xl tracking-tighter text-white">
          SH.
        </a>
        
        <nav className="flex items-center gap-8">
          {links.map((link, i) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-mono tracking-widest uppercase text-white hover:text-[#00e5ff] transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="mailto:shaaz23hemani@gmail.com"
            className="hidden md:block px-5 py-2 border border-white text-white hover:bg-white hover:text-black transition-colors rounded-full font-mono text-xs uppercase tracking-wider"
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
