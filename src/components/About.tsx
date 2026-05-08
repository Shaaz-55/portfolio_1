import { motion } from 'framer-motion';

export function About() {
  const skills = [
    { category: "Languages", items: ["Python", "HTML", "CSS", "JavaScript", "PHP"] },
    { category: "Frameworks", items: ["Tailwind CSS", "React", "Three.js", "Framer Motion"] },
    { category: "Tools & Tech", items: ["Git", "GitHub", "Firebase", "MySQL", "OAuth 2.0", "Hugging Face"] },
    { category: "Extracurriculars", items: ["U-19 Basketball (Team India 4th)", "Badminton", "Chess", "Table Tennis"] },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 mx-auto max-w-7xl w-full">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tighter text-white mb-8">
              Digital <span className="text-transparent stroke-text" style={{ WebkitTextStroke: '1px white' }}>Architect</span>
            </h2>
            <div className="text-gray-400 space-y-6 text-lg leading-relaxed font-light">
              <p>
                Hello. I'm Shaaz Hemani, currently studying at the <span className="text-white font-medium">Newton School of Technology, Bangalore</span>. I enjoy creating sophisticated digital experiences that merge clean web architecture with immersive 3D execution.
              </p>
              <p>
                Beyond standard development, I am a Fusion 360 product designer specializing in clean, manufacturable 3D models for consumer products and 3D printing. I freelance via Fiverr, Upwork, and independently.
              </p>
              <p>
                I thrive in leadership roles—having led teams in multiple hackathons and served as an Event Lead for two events at Aayam Techfest.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
            {skills.map((skill, index) => (
              <div key={index} className="bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 hover:bg-zinc-900/80 transition-colors">
                <h4 className="text-white font-mono text-xs uppercase tracking-wider mb-4 text-[#00e5ff]">{skill.category}</h4>
                <ul className="flex flex-col gap-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-gray-300 font-light text-sm flex items-center before:content-[''] before:w-1 before:h-1 before:bg-zinc-600 before:rounded-full before:mr-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
