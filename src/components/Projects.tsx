import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { Mini3D } from './Mini3D';

const projects = [
  {
    title: "Logisense",
    description: "An AI-powered shipment tracker predicting delays via OpenWeatherMap, AISStream, and OpenStreetMap APIs. Runs locally on Gemma 4 for Google Solution Challenge.",
    tech: ["AI", "Gemma 4", "React", "APIs"],
    github: "https://github.com/Shaaz-55/LogiSense",
    external: "https://logi-sense-sigma.vercel.app/",
    colSpan: "col-span-1 md:col-span-2",
    type: "sphere" as const,
    color: "#00e5ff"
  },
  {
    title: "AAYAM Techfest",
    description: "The foundational version of the AAYAM Techfest site, inspiring the current fest website. Explores complex Firebase logic.",
    tech: ["HTML/CSS/JS", "Firebase"],
    github: "https://github.com/Shaaz-55/Aayamfest",
    external: "https://aayamfest-theta.vercel.app/",
    colSpan: "col-span-1",
    type: "icosahedron" as const,
    color: "#ff0055"
  },
  {
    title: "Sehat",
    description: "A seamless clone of Parsley Health. Contains an advanced CSS-only rotating 3D engine built totally from scratch for customer reviews.",
    tech: ["HTML", "3D Custom CSS", "JS"],
    github: "https://github.com/Shaaz-55/sehat",
    external: "https://sehat-seven.vercel.app/",
    colSpan: "col-span-1",
    type: "torus" as const,
    color: "#00ffcc"
  },
  {
    title: "Voice Controlled Robot",
    description: "A UI connected directly to an ESP32 chip. Listens to speech, translates via Google Translate, and executes physical robot commands.",
    tech: ["Web Speech API", "ESP32", "IoT"],
    github: "https://github.com/Shaaz-55/wifi-control-robo",
    external: "https://wifi-control-robo.vercel.app/",
    colSpan: "col-span-1 md:col-span-2",
    type: "box" as const,
    color: "#ffffff"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-32 px-6 md:px-12 mx-auto max-w-7xl w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-white">
            Selected <br/> <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px white' }}>Works</span>
          </h2>
          <p className="max-w-sm text-gray-400 font-mono text-sm">
            A collection of web applications, AI integrations, and 3D experiences. Hover to visualize infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className={`group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-zinc-500 transition-colors rounded-3xl overflow-hidden p-8 min-h-[350px] flex flex-col justify-between ${project.colSpan}`}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Mini3D type={project.type as any} color={project.color} />
              
              <div className="relative z-10 font-mono text-xs text-gray-500 uppercase tracking-widest flex justify-between items-center mb-6">
                <span>Featured Project</span>
                <div className="flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="text-white hover:text-[#00e5ff] transition-colors bg-black/50 p-2 rounded-full">
                      <Github size={16} />
                    </a>
                  )}
                  {project.external && (
                    <a href={project.external} target="_blank" rel="noreferrer" className="text-white hover:text-[#00e5ff] transition-colors bg-black/50 p-2 rounded-full">
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              <div className="relative z-10 mt-auto">
                <h3 className="text-3xl font-display font-medium mb-4 text-white group-hover:text-[#00e5ff] transition-colors leading-tight">
                  <a href={project.external} target="_blank" rel="noreferrer" className="absolute inset-0 z-0"></a>
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-8 max-w-lg text-sm md:text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 text-white text-xs font-mono rounded-full border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
